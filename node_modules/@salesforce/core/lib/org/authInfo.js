"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthInfo = exports.DEFAULT_CONNECTED_APP_INFO = void 0;
/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
const crypto_1 = require("crypto");
const path_1 = require("path");
const os = require("os");
const fs = require("fs");
const kit_1 = require("@salesforce/kit");
const ts_types_1 = require("@salesforce/ts-types");
const jsforce_1 = require("jsforce");
const transport_1 = require("jsforce/lib/transport");
const jwt = require("jsonwebtoken");
const config_1 = require("../config/config");
const configAggregator_1 = require("../config/configAggregator");
const logger_1 = require("../logger");
const sfError_1 = require("../sfError");
const sfdc_1 = require("../util/sfdc");
const stateAggregator_1 = require("../stateAggregator");
const messages_1 = require("../messages");
const sfdcUrl_1 = require("../util/sfdcUrl");
const connection_1 = require("./connection");
const orgConfigProperties_1 = require("./orgConfigProperties");
const org_1 = require("./org");
messages_1.Messages.importMessagesDirectory(__dirname);
const messages = messages_1.Messages.load('@salesforce/core', 'core', [
    'authInfoCreationError',
    'authInfoOverwriteError',
    'namedOrgNotFound',
    'orgDataNotAvailableError',
    'orgDataNotAvailableError.actions',
    'refreshTokenAuthError',
    'jwtAuthError',
    'authCodeUsernameRetrievalError',
    'authCodeExchangeError',
    'missingClientId',
]);
// parses the id field returned from jsForce oauth2 methods to get
// user ID and org ID.
function parseIdUrl(idUrl) {
    const idUrls = idUrl.split('/');
    const userId = idUrls.pop();
    const orgId = idUrls.pop();
    return {
        userId,
        orgId,
        url: idUrl,
    };
}
exports.DEFAULT_CONNECTED_APP_INFO = {
    clientId: 'PlatformCLI',
    // Legacy. The connected app info is owned by the thing that
    // creates new AuthInfos. Currently that is the auth:* commands which
    // aren't owned by this core library. These values need to be here
    // for any old auth files where the id and secret aren't stored.
    //
    // Ideally, this would be removed at some point in the distant future
    // when all auth files now have the clientId stored in it.
    legacyClientId: 'SalesforceDevelopmentExperience',
    legacyClientSecret: '1384510088588713504',
};
/**
 * Handles persistence and fetching of user authentication information using
 * JWT, OAuth, or refresh tokens. Sets up the refresh flows that jsForce will
 * use to keep tokens active. An AuthInfo can also be created with an access
 * token, but AuthInfos created with access tokens can't be persisted to disk.
 *
 * **See** [Authorization](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm)
 *
 * **See** [Salesforce DX Usernames and Orgs](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_cli_usernames_orgs.htm)
 *
 * ```
 * // Creating a new authentication file.
 * const authInfo = await AuthInfo.create({
 *   username: myAdminUsername,
 *   oauth2Options: {
 *     loginUrl, authCode, clientId, clientSecret
 *   }
 * );
 * authInfo.save();
 *
 * // Creating an authorization info with an access token.
 * const authInfo = await AuthInfo.create({
 *   username: accessToken
 * });
 *
 * // Using an existing authentication file.
 * const authInfo = await AuthInfo.create({
 *   username: myAdminUsername
 * });
 *
 * // Using the AuthInfo
 * const connection = await Connection.create({ authInfo });
 * ```
 */
class AuthInfo extends kit_1.AsyncOptionalCreatable {
    /**
     * Constructor
     * **Do not directly construct instances of this class -- use {@link AuthInfo.create} instead.**
     *
     * @param options The options for the class instance
     */
    constructor(options) {
        super(options);
        // Possibly overridden in create
        this.usingAccessToken = false;
        this.options = options || {};
    }
    /**
     * Returns the default instance url
     *
     * @returns {string}
     */
    static getDefaultInstanceUrl() {
        const configuredInstanceUrl = configAggregator_1.ConfigAggregator.getValue(orgConfigProperties_1.OrgConfigProperties.ORG_INSTANCE_URL).value;
        return configuredInstanceUrl || sfdcUrl_1.SfdcUrl.PRODUCTION;
    }
    /**
     * Get a list of all authorizations based on auth files stored in the global directory.
     * One can supply a filter (see @param orgAuthFilter) and calling this function without
     * a filter will return all authorizations.
     *
     * @param orgAuthFilter A predicate function that returns true for those org authorizations that are to be retained.
     *
     * @returns {Promise<OrgAuthorization[]>}
     */
    static async listAllAuthorizations(orgAuthFilter = (orgAuth) => !!orgAuth) {
        const stateAggregator = await stateAggregator_1.StateAggregator.getInstance();
        const config = (await configAggregator_1.ConfigAggregator.create()).getConfigInfo();
        const orgs = await stateAggregator.orgs.readAll();
        const final = [];
        for (const org of orgs) {
            const username = (0, ts_types_1.ensureString)(org.username);
            const aliases = stateAggregator.aliases.getAll(username) ?? undefined;
            // Get a list of configuration values that are set to either the username or one
            // of the aliases
            const configs = config
                .filter((c) => aliases.includes(c.value) || c.value === username)
                .map((c) => c.key);
            try {
                const authInfo = await AuthInfo.create({ username });
                const { orgId, instanceUrl, devHubUsername, expirationDate, isDevHub } = authInfo.getFields();
                final.push({
                    aliases,
                    configs,
                    username,
                    instanceUrl,
                    isScratchOrg: Boolean(devHubUsername),
                    isDevHub: isDevHub || false,
                    isSandbox: await stateAggregator.sandboxes.hasFile(orgId),
                    orgId: orgId,
                    accessToken: authInfo.getConnectionOptions().accessToken,
                    oauthMethod: authInfo.isJwt() ? 'jwt' : authInfo.isOauth() ? 'web' : 'token',
                    isExpired: Boolean(devHubUsername) && expirationDate
                        ? new Date((0, ts_types_1.ensureString)(expirationDate)).getTime() < new Date().getTime()
                        : 'unknown',
                });
            }
            catch (err) {
                final.push({
                    aliases,
                    configs,
                    username,
                    orgId: org.orgId,
                    instanceUrl: org.instanceUrl,
                    accessToken: undefined,
                    oauthMethod: 'unknown',
                    error: err.message,
                    isExpired: 'unknown',
                });
            }
        }
        return final.filter(orgAuthFilter);
    }
    /**
     * Returns true if one or more authentications are persisted.
     */
    static async hasAuthentications() {
        try {
            const auths = await (await stateAggregator_1.StateAggregator.getInstance()).orgs.list();
            return !(0, kit_1.isEmpty)(auths);
        }
        catch (err) {
            const error = err;
            if (error.name === 'OrgDataNotAvailableError' || error.code === 'ENOENT') {
                return false;
            }
            throw error;
        }
    }
    /**
     * Get the authorization URL.
     *
     * @param options The options to generate the URL.
     */
    static getAuthorizationUrl(options, oauth2) {
        // Always use a verifier for enhanced security
        options.useVerifier = true;
        const oauth2Verifier = oauth2 || new jsforce_1.OAuth2(options);
        // The state parameter allows the redirectUri callback listener to ignore request
        // that don't contain the state value.
        const params = {
            state: (0, crypto_1.randomBytes)(Math.ceil(6)).toString('hex'),
            prompt: 'login',
            // Default connected app is 'refresh_token api web'
            scope: options.scope || kit_1.env.getString('SFDX_AUTH_SCOPES', 'refresh_token api web'),
        };
        return oauth2Verifier.getAuthorizationUrl(params);
    }
    /**
     * Parse a sfdx auth url, usually obtained by `authInfo.getSfdxAuthUrl`.
     *
     * @example
     * ```
     * await AuthInfo.create(AuthInfo.parseSfdxAuthUrl(sfdxAuthUrl));
     * ```
     * @param sfdxAuthUrl
     */
    static parseSfdxAuthUrl(sfdxAuthUrl) {
        const match = sfdxAuthUrl.match(/^force:\/\/([a-zA-Z0-9._-]+):([a-zA-Z0-9._-]*):([a-zA-Z0-9._-]+={0,2})@([a-zA-Z0-9._-]+)/);
        if (!match) {
            throw new sfError_1.SfError('Invalid SFDX auth URL. Must be in the format "force://<clientId>:<clientSecret>:<refreshToken>@<instanceUrl>".  Note that the SFDX auth URL uses the "force" protocol, and not "http" or "https".  Also note that the "instanceUrl" inside the SFDX auth URL doesn\'t include the protocol ("https://").', 'INVALID_SFDX_AUTH_URL');
        }
        const [, clientId, clientSecret, refreshToken, loginUrl] = match;
        return {
            clientId,
            clientSecret,
            refreshToken,
            loginUrl: `https://${loginUrl}`,
        };
    }
    /**
     * Given a set of decrypted fields and an authInfo, determine if the org belongs to an available
     * dev hub.
     *
     * @param fields
     * @param orgAuthInfo
     */
    static async identifyPossibleScratchOrgs(fields, orgAuthInfo) {
        // fields property is passed in because the consumers of this method have performed the decrypt.
        // This is so we don't have to call authInfo.getFields(true) and decrypt again OR accidentally save an
        // authInfo before it is necessary.
        const logger = await logger_1.Logger.child('Common', { tag: 'identifyPossibleScratchOrgs' });
        // return if we already know the hub org we know it is a devhub or prod-like or no orgId present
        if (fields.isDevHub || fields.devHubUsername || !fields.orgId)
            return;
        logger.debug('getting devHubs');
        // TODO: return if url is not sandbox-like to avoid constantly asking about production orgs
        // TODO: someday we make this easier by asking the org if it is a scratch org
        const hubAuthInfos = await AuthInfo.getDevHubAuthInfos();
        logger.debug(`found ${hubAuthInfos.length} DevHubs`);
        if (hubAuthInfos.length === 0)
            return;
        // ask all those orgs if they know this orgId
        await Promise.all(hubAuthInfos.map(async (hubAuthInfo) => {
            try {
                const data = await AuthInfo.queryScratchOrg(hubAuthInfo.username, fields.orgId);
                if (data.totalSize > 0) {
                    // if any return a result
                    logger.debug(`found orgId ${fields.orgId} in devhub ${hubAuthInfo.username}`);
                    try {
                        await orgAuthInfo.save({ ...fields, devHubUsername: hubAuthInfo.username });
                        logger.debug(`set ${hubAuthInfo.username} as devhub for scratch org ${orgAuthInfo.getUsername()}`);
                    }
                    catch (error) {
                        logger.debug(`error updating auth file for ${orgAuthInfo.getUsername()}`, error);
                    }
                }
            }
            catch (error) {
                logger.error(`Error connecting to devhub ${hubAuthInfo.username}`, error);
            }
        }));
    }
    /**
     * Find all dev hubs available in the local environment.
     */
    static async getDevHubAuthInfos() {
        return await AuthInfo.listAllAuthorizations((possibleHub) => possibleHub?.isDevHub ?? false);
    }
    static async queryScratchOrg(devHubUsername, scratchOrgId) {
        const devHubOrg = await org_1.Org.create({ aliasOrUsername: devHubUsername });
        const conn = devHubOrg.getConnection();
        const data = await conn.query(`select Id from ScratchOrgInfo where ScratchOrg = '${sfdc_1.sfdc.trimTo15(scratchOrgId)}'`);
        return data;
    }
    /**
     * Get the username.
     */
    getUsername() {
        return this.username;
    }
    /**
     * Returns true if `this` is using the JWT flow.
     */
    isJwt() {
        const { refreshToken, privateKey } = this.getFields();
        return !refreshToken && !!privateKey;
    }
    /**
     * Returns true if `this` is using an access token flow.
     */
    isAccessTokenFlow() {
        const { refreshToken, privateKey } = this.getFields();
        return !refreshToken && !privateKey;
    }
    /**
     * Returns true if `this` is using the oauth flow.
     */
    isOauth() {
        return !this.isAccessTokenFlow() && !this.isJwt();
    }
    /**
     * Returns true if `this` is using the refresh token flow.
     */
    isRefreshTokenFlow() {
        const { refreshToken, authCode } = this.getFields();
        return !authCode && !!refreshToken;
    }
    /**
     * Updates the cache and persists the authentication fields (encrypted).
     *
     * @param authData New data to save.
     */
    async save(authData) {
        this.update(authData);
        const username = (0, ts_types_1.ensure)(this.getUsername());
        if (sfdc_1.sfdc.matchesAccessToken(username)) {
            this.logger.debug('Username is an accesstoken. Skip saving authinfo to disk.');
            return this;
        }
        await this.stateAggregator.orgs.write(username);
        this.logger.info(`Saved auth info for username: ${username}`);
        return this;
    }
    /**
     * Update the authorization fields, encrypting sensitive fields, but do not persist.
     * For convenience `this` object is returned.
     *
     * @param authData Authorization fields to update.
     */
    update(authData) {
        if (authData && (0, ts_types_1.isPlainObject)(authData)) {
            this.username = authData.username || this.username;
            this.stateAggregator.orgs.update(this.username, authData);
            this.logger.info(`Updated auth info for username: ${this.username}`);
        }
        return this;
    }
    /**
     * Get the auth fields (decrypted) needed to make a connection.
     */
    getConnectionOptions() {
        let opts;
        const decryptedCopy = this.getFields(true);
        const { accessToken, instanceUrl, loginUrl } = decryptedCopy;
        if (this.isAccessTokenFlow()) {
            this.logger.info('Returning fields for a connection using access token.');
            // Just auth with the accessToken
            opts = { accessToken, instanceUrl, loginUrl };
        }
        else if (this.isJwt()) {
            this.logger.info('Returning fields for a connection using JWT config.');
            opts = {
                accessToken,
                instanceUrl,
                refreshFn: this.refreshFn.bind(this),
            };
        }
        else {
            // @TODO: figure out loginUrl and redirectUri (probably get from config class)
            //
            // redirectUri: org.config.getOauthCallbackUrl()
            // loginUrl: this.fields.instanceUrl || this.config.getAppConfig().sfdcLoginUrl
            this.logger.info('Returning fields for a connection using OAuth config.');
            // Decrypt a user provided client secret or use the default.
            opts = {
                oauth2: {
                    loginUrl: instanceUrl || sfdcUrl_1.SfdcUrl.PRODUCTION,
                    clientId: this.getClientId(),
                    redirectUri: this.getRedirectUri(),
                },
                accessToken,
                instanceUrl,
                refreshFn: this.refreshFn.bind(this),
            };
        }
        // decrypt the fields
        return opts;
    }
    getClientId() {
        return this.getFields()?.clientId || exports.DEFAULT_CONNECTED_APP_INFO.legacyClientId;
    }
    getRedirectUri() {
        return 'http://localhost:1717/OauthRedirect';
    }
    /**
     * Get the authorization fields.
     *
     * @param decrypt Decrypt the fields.
     */
    getFields(decrypt) {
        return this.stateAggregator.orgs.get(this.username, decrypt) ?? {};
    }
    /**
     * Get the org front door (used for web based oauth flows)
     */
    getOrgFrontDoorUrl() {
        const authFields = this.getFields(true);
        const base = (0, ts_types_1.ensureString)(authFields.instanceUrl).replace(/\/+$/, '');
        const accessToken = (0, ts_types_1.ensureString)(authFields.accessToken);
        return `${base}/secur/frontdoor.jsp?sid=${accessToken}`;
    }
    /**
     * Returns true if this org is using access token auth.
     */
    isUsingAccessToken() {
        return this.usingAccessToken;
    }
    /**
     * Get the SFDX Auth URL.
     *
     * **See** [SFDX Authorization](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_auth.htm#cli_reference_force_auth)
     */
    getSfdxAuthUrl() {
        const decryptedFields = this.getFields(true);
        const instanceUrl = (0, ts_types_1.ensure)(decryptedFields.instanceUrl, 'undefined instanceUrl').replace(/^https?:\/\//, '');
        let sfdxAuthUrl = 'force://';
        if (decryptedFields.clientId) {
            sfdxAuthUrl += `${decryptedFields.clientId}:${decryptedFields.clientSecret || ''}:`;
        }
        sfdxAuthUrl += `${(0, ts_types_1.ensure)(decryptedFields.refreshToken, 'undefined refreshToken')}@${instanceUrl}`;
        return sfdxAuthUrl;
    }
    /**
     * Convenience function to handle typical side effects encountered when dealing with an AuthInfo.
     * Given the values supplied in parameter sideEffects, this function will set auth alias, default auth
     * and default dev hub.
     *
     * @param sideEffects - instance of AuthSideEffects
     */
    async handleAliasAndDefaultSettings(sideEffects) {
        if (sideEffects.alias ||
            sideEffects.setDefault ||
            sideEffects.setDefaultDevHub ||
            typeof sideEffects.setTracksSource === 'boolean') {
            if (sideEffects.alias)
                await this.setAlias(sideEffects.alias);
            if (sideEffects.setDefault)
                await this.setAsDefault({ org: true });
            if (sideEffects.setDefaultDevHub)
                await this.setAsDefault({ devHub: true });
            if (typeof sideEffects.setTracksSource === 'boolean') {
                await this.save({ tracksSource: sideEffects.setTracksSource });
            }
            else {
                await this.save();
            }
        }
    }
    /**
     * Set the target-env (default) or the target-dev-hub to the alias if
     * it exists otherwise to the username. Method will try to set the local
     * config first but will default to global config if that fails.
     *
     * @param options
     */
    async setAsDefault(options = { org: true }) {
        let config;
        // if we fail to create the local config, default to the global config
        try {
            config = await config_1.Config.create({ isGlobal: false });
        }
        catch {
            config = await config_1.Config.create({ isGlobal: true });
        }
        const username = (0, ts_types_1.ensureString)(this.getUsername());
        const alias = this.stateAggregator.aliases.get(username);
        const value = alias ?? username;
        if (options.org) {
            config.set(orgConfigProperties_1.OrgConfigProperties.TARGET_ORG, value);
        }
        if (options.devHub) {
            config.set(orgConfigProperties_1.OrgConfigProperties.TARGET_DEV_HUB, value);
        }
        await config.write();
    }
    /**
     * Sets the provided alias to the username
     *
     * @param alias alias to set
     */
    async setAlias(alias) {
        this.stateAggregator.aliases.set(alias, this.getUsername());
        await this.stateAggregator.aliases.write();
    }
    /**
     * Initializes an instance of the AuthInfo class.
     */
    async init() {
        this.stateAggregator = await stateAggregator_1.StateAggregator.getInstance();
        const username = this.options.username;
        const authOptions = this.options.oauth2Options || this.options.accessTokenOptions;
        // Must specify either username and/or options
        if (!username && !authOptions) {
            throw messages.createError('authInfoCreationError');
        }
        // If a username AND oauth options, ensure an authorization for the username doesn't
        // already exist. Throw if it does so we don't overwrite the authorization.
        if (username && authOptions) {
            if (await this.stateAggregator.orgs.hasFile(username)) {
                throw messages.createError('authInfoOverwriteError');
            }
        }
        const oauthUsername = username || authOptions?.username;
        if (oauthUsername) {
            this.username = oauthUsername;
            await this.stateAggregator.orgs.read(oauthUsername, false, false);
        } // Else it will be set in initAuthOptions below.
        // If the username is an access token, use that for auth and don't persist
        if ((0, ts_types_1.isString)(oauthUsername) && sfdc_1.sfdc.matchesAccessToken(oauthUsername)) {
            // Need to initAuthOptions the logger and authInfoCrypto since we don't call init()
            this.logger = await logger_1.Logger.child('AuthInfo');
            const aggregator = await configAggregator_1.ConfigAggregator.create();
            const instanceUrl = this.getInstanceUrl(authOptions, aggregator);
            this.update({
                accessToken: oauthUsername,
                instanceUrl,
                orgId: oauthUsername.split('!')[0],
                loginUrl: instanceUrl,
            });
            this.usingAccessToken = true;
        }
        // If a username with NO oauth options, ensure authorization already exist.
        else if (username && !authOptions && !(await this.stateAggregator.orgs.exists(username))) {
            throw messages.createError('namedOrgNotFound', [username]);
        }
        else {
            await this.initAuthOptions(authOptions);
        }
    }
    getInstanceUrl(options, aggregator) {
        const instanceUrl = options?.instanceUrl ?? aggregator.getPropertyValue(orgConfigProperties_1.OrgConfigProperties.ORG_INSTANCE_URL);
        return instanceUrl ?? sfdcUrl_1.SfdcUrl.PRODUCTION;
    }
    /**
     * Initialize this AuthInfo instance with the specified options. If options are not provided, initialize it from cache
     * or by reading from the persistence store. For convenience `this` object is returned.
     *
     * @param options Options to be used for creating an OAuth2 instance.
     *
     * **Throws** *{@link SfError}{ name: 'NamedOrgNotFoundError' }* Org information does not exist.
     * @returns {Promise<AuthInfo>}
     */
    async initAuthOptions(options) {
        this.logger = await logger_1.Logger.child('AuthInfo');
        // If options were passed, use those before checking cache and reading an auth file.
        let authConfig;
        if (options) {
            options = (0, kit_1.cloneJson)(options);
            if (this.isTokenOptions(options)) {
                authConfig = options;
                const userInfo = await this.retrieveUserInfo((0, ts_types_1.ensureString)(options.instanceUrl), (0, ts_types_1.ensureString)(options.accessToken));
                this.update({ username: userInfo?.username, orgId: userInfo?.organizationId });
            }
            else {
                if (this.options.parentUsername) {
                    const parentFields = await this.loadDecryptedAuthFromConfig(this.options.parentUsername);
                    options.clientId = parentFields.clientId;
                    if (process.env.SFDX_CLIENT_SECRET) {
                        options.clientSecret = process.env.SFDX_CLIENT_SECRET;
                    }
                    else {
                        // Grab whatever flow is defined
                        Object.assign(options, {
                            clientSecret: parentFields.clientSecret,
                            privateKey: parentFields.privateKey ? (0, path_1.resolve)(parentFields.privateKey) : parentFields.privateKey,
                        });
                    }
                }
                // jwt flow
                // Support both sfdx and jsforce private key values
                if (!options.privateKey && options.privateKeyFile) {
                    options.privateKey = (0, path_1.resolve)(options.privateKeyFile);
                }
                if (options.privateKey) {
                    authConfig = await this.authJwt(options);
                }
                else if (!options.authCode && options.refreshToken) {
                    // refresh token flow (from sfdxUrl or OAuth refreshFn)
                    authConfig = await this.buildRefreshTokenConfig(options);
                }
                else {
                    if (this.options.oauth2 instanceof jsforce_1.OAuth2) {
                        // authcode exchange / web auth flow
                        authConfig = await this.exchangeToken(options, this.options.oauth2);
                    }
                    else {
                        authConfig = await this.exchangeToken(options);
                    }
                }
            }
            authConfig.isDevHub = await this.determineIfDevHub((0, ts_types_1.ensureString)(authConfig.instanceUrl), (0, ts_types_1.ensureString)(authConfig.accessToken));
            if (authConfig.username)
                await this.stateAggregator.orgs.read(authConfig.username, false, false);
            // Update the auth fields WITH encryption
            this.update(authConfig);
        }
        return this;
    }
    async loadDecryptedAuthFromConfig(username) {
        // Fetch from the persisted auth file
        const authInfo = this.stateAggregator.orgs.get(username, true);
        if (!authInfo) {
            throw messages.createError('namedOrgNotFound', [username]);
        }
        return authInfo;
    }
    isTokenOptions(options) {
        // Although OAuth2Config does not contain refreshToken, privateKey, or privateKeyFile, a JS consumer could still pass those in
        // which WILL have an access token as well, but it should be considered an OAuth2Config at that point.
        return ('accessToken' in options &&
            !('refreshToken' in options) &&
            !('privateKey' in options) &&
            !('privateKeyFile' in options) &&
            !('authCode' in options));
    }
    // A callback function for a connection to refresh an access token.  This is used
    // both for a JWT connection and an OAuth connection.
    async refreshFn(conn, callback) {
        this.logger.info('Access token has expired. Updating...');
        try {
            const fields = this.getFields(true);
            await this.initAuthOptions(fields);
            await this.save();
            return await callback(null, fields.accessToken);
        }
        catch (err) {
            const error = err;
            if (error?.message?.includes('Data Not Available')) {
                // Set cause to keep original stacktrace
                return await callback(messages.createError('orgDataNotAvailableError', [this.getUsername()], [], error));
            }
            return await callback(error);
        }
    }
    async readJwtKey(keyFile) {
        return fs.promises.readFile(keyFile, 'utf8');
    }
    // Build OAuth config for a JWT auth flow
    async authJwt(options) {
        if (!options.clientId) {
            throw messages.createError('missingClientId');
        }
        const privateKeyContents = await this.readJwtKey((0, ts_types_1.ensureString)(options.privateKey));
        const { loginUrl = sfdcUrl_1.SfdcUrl.PRODUCTION } = options;
        const url = new sfdcUrl_1.SfdcUrl(loginUrl);
        const createdOrgInstance = (this.getFields().createdOrgInstance ?? '').trim().toLowerCase();
        const audienceUrl = await url.getJwtAudienceUrl(createdOrgInstance);
        let authFieldsBuilder;
        const authErrors = [];
        // given that we can no longer depend on instance names or URls to determine audience, let's try them all
        const loginAndAudienceUrls = (0, sfdcUrl_1.getLoginAudienceCombos)(audienceUrl, loginUrl);
        for (const [login, audience] of loginAndAudienceUrls) {
            try {
                authFieldsBuilder = await this.tryJwtAuth(options.clientId, login, audience, privateKeyContents);
                break;
            }
            catch (err) {
                const error = err;
                const message = error.message.includes('audience') ? `${error.message}-${login}:${audience}` : error.message;
                authErrors.push(message);
            }
        }
        if (!authFieldsBuilder) {
            throw messages.createError('jwtAuthError', [authErrors.join('\n')]);
        }
        const authFields = {
            accessToken: (0, ts_types_1.asString)(authFieldsBuilder.access_token),
            orgId: parseIdUrl((0, ts_types_1.ensureString)(authFieldsBuilder.id)).orgId,
            loginUrl: options.loginUrl,
            privateKey: options.privateKey,
            clientId: options.clientId,
        };
        const instanceUrl = (0, ts_types_1.ensureString)(authFieldsBuilder.instance_url);
        const sfdcUrl = new sfdcUrl_1.SfdcUrl(instanceUrl);
        try {
            // Check if the url is resolvable. This can fail when my-domains have not been replicated.
            await sfdcUrl.lookup();
            authFields.instanceUrl = instanceUrl;
        }
        catch (err) {
            this.logger.debug(`Instance URL [${authFieldsBuilder.instance_url}] is not available.  DNS lookup failed. Using loginUrl [${options.loginUrl}] instead. This may result in a "Destination URL not reset" error.`);
            authFields.instanceUrl = options.loginUrl;
        }
        return authFields;
    }
    async tryJwtAuth(clientId, loginUrl, audienceUrl, privateKeyContents) {
        const jwtToken = jwt.sign({
            iss: clientId,
            sub: this.getUsername(),
            aud: audienceUrl,
            exp: Date.now() + 300,
        }, privateKeyContents, {
            algorithm: 'RS256',
        });
        const oauth2 = new jsforce_1.JwtOAuth2({ loginUrl });
        return (0, ts_types_1.ensureJsonMap)(await oauth2.jwtAuthorize(jwtToken));
    }
    // Build OAuth config for a refresh token auth flow
    async buildRefreshTokenConfig(options) {
        // Ideally, this would be removed at some point in the distant future when all auth files
        // now have the clientId stored in it.
        if (!options.clientId) {
            options.clientId = exports.DEFAULT_CONNECTED_APP_INFO.legacyClientId;
            options.clientSecret = exports.DEFAULT_CONNECTED_APP_INFO.legacyClientSecret;
        }
        if (!options.redirectUri) {
            options.redirectUri = this.getRedirectUri();
        }
        const oauth2 = new jsforce_1.OAuth2(options);
        let authFieldsBuilder;
        try {
            authFieldsBuilder = await oauth2.refreshToken((0, ts_types_1.ensure)(options.refreshToken));
        }
        catch (err) {
            throw messages.createError('refreshTokenAuthError', [err.message]);
        }
        // @ts-ignore
        const { orgId } = parseIdUrl(authFieldsBuilder.id);
        let username = this.getUsername();
        if (!username) {
            const userInfo = await this.retrieveUserInfo(authFieldsBuilder.instance_url, authFieldsBuilder.access_token);
            username = (0, ts_types_1.ensureString)(userInfo?.username);
        }
        return {
            orgId,
            username,
            accessToken: authFieldsBuilder.access_token,
            instanceUrl: authFieldsBuilder.instance_url,
            loginUrl: options.loginUrl || authFieldsBuilder.instance_url,
            refreshToken: options.refreshToken,
            clientId: options.clientId,
            clientSecret: options.clientSecret,
        };
    }
    /**
     * Performs an authCode exchange but the Oauth2 feature of jsforce is extended to include a code_challenge
     *
     * @param options The oauth options
     * @param oauth2 The oauth2 extension that includes a code_challenge
     */
    async exchangeToken(options, oauth2 = new jsforce_1.OAuth2(options)) {
        if (!oauth2.redirectUri) {
            oauth2.redirectUri = this.getRedirectUri();
        }
        if (!oauth2.clientId) {
            oauth2.clientId = this.getClientId();
        }
        // Exchange the auth code for an access token and refresh token.
        let authFields;
        try {
            this.logger.info(`Exchanging auth code for access token using loginUrl: ${options.loginUrl}`);
            authFields = await oauth2.requestToken((0, ts_types_1.ensure)(options.authCode));
        }
        catch (err) {
            throw messages.createError('authCodeExchangeError', [err.message]);
        }
        const { orgId } = parseIdUrl(authFields.id);
        let username = this.getUsername();
        // Only need to query for the username if it isn't known. For example, a new auth code exchange
        // rather than refreshing a token on an existing connection.
        if (!username) {
            // @ts-ignore
            const userInfo = await this.retrieveUserInfo(authFields.instance_url, authFields.access_token);
            username = userInfo?.username;
        }
        return {
            accessToken: authFields.access_token,
            instanceUrl: authFields.instance_url,
            orgId,
            username,
            loginUrl: options.loginUrl || authFields.instance_url,
            refreshToken: authFields.refresh_token,
            clientId: options.clientId,
            clientSecret: options.clientSecret,
        };
    }
    async retrieveUserInfo(instanceUrl, accessToken) {
        // Make a REST call for the username directly.  Normally this is done via a connection
        // but we don't want to create circular dependencies or lots of snowflakes
        // within this file to support it.
        const apiVersion = 'v51.0'; // hardcoding to v51.0 just for this call is okay.
        const instance = (0, ts_types_1.ensure)(instanceUrl);
        const baseUrl = new sfdcUrl_1.SfdcUrl(instance);
        const userInfoUrl = `${baseUrl}services/oauth2/userinfo`;
        const headers = Object.assign({ Authorization: `Bearer ${accessToken}` }, connection_1.SFDX_HTTP_HEADERS);
        try {
            this.logger.info(`Sending request for Username after successful auth code exchange to URL: ${userInfoUrl}`);
            let response = await new transport_1.default().httpRequest({ url: userInfoUrl, method: 'GET', headers });
            if (response.statusCode >= 400) {
                this.throwUserGetException(response);
            }
            else {
                const userInfoJson = (0, kit_1.parseJsonMap)(response.body);
                const url = `${baseUrl}/services/data/${apiVersion}/sobjects/User/${userInfoJson.user_id}`;
                this.logger.info(`Sending request for User SObject after successful auth code exchange to URL: ${url}`);
                response = await new transport_1.default().httpRequest({ url, method: 'GET', headers });
                if (response.statusCode >= 400) {
                    this.throwUserGetException(response);
                }
                else {
                    // eslint-disable-next-line camelcase
                    userInfoJson.preferred_username = (0, kit_1.parseJsonMap)(response.body).Username;
                }
                return { username: userInfoJson.preferred_username, organizationId: userInfoJson.organization_id };
            }
        }
        catch (err) {
            throw messages.createError('authCodeUsernameRetrievalError', [err.message]);
        }
    }
    /**
     * Given an error while getting the User object, handle different possibilities of response.body.
     *
     * @param response
     * @private
     */
    throwUserGetException(response) {
        let errorMsg = '';
        const bodyAsString = response.body ?? JSON.stringify({ message: 'UNKNOWN', errorCode: 'UNKNOWN' });
        try {
            const body = (0, kit_1.parseJson)(bodyAsString);
            if ((0, ts_types_1.isArray)(body)) {
                errorMsg = body.map((line) => line.message ?? line.errorCode ?? 'UNKNOWN').join(os.EOL);
            }
            else {
                errorMsg = body.message ?? body.errorCode ?? 'UNKNOWN';
            }
        }
        catch (err) {
            errorMsg = `${bodyAsString}`;
        }
        throw new sfError_1.SfError(errorMsg);
    }
    /**
     * Returns `true` if the org is a Dev Hub.
     *
     * Check access to the ScratchOrgInfo object to determine if the org is a dev hub.
     */
    async determineIfDevHub(instanceUrl, accessToken) {
        // Make a REST call for the ScratchOrgInfo obj directly.  Normally this is done via a connection
        // but we don't want to create circular dependencies or lots of snowflakes
        // within this file to support it.
        const apiVersion = 'v51.0'; // hardcoding to v51.0 just for this call is okay.
        const instance = (0, ts_types_1.ensure)(instanceUrl);
        const baseUrl = new sfdcUrl_1.SfdcUrl(instance);
        const scratchOrgInfoUrl = `${baseUrl}/services/data/${apiVersion}/query?q=SELECT%20Id%20FROM%20ScratchOrgInfo%20limit%201`;
        const headers = Object.assign({ Authorization: `Bearer ${accessToken}` }, connection_1.SFDX_HTTP_HEADERS);
        try {
            const res = await new transport_1.default().httpRequest({ url: scratchOrgInfoUrl, method: 'GET', headers });
            if (res.statusCode >= 400) {
                return false;
            }
            return true;
        }
        catch (err) {
            /* Not a dev hub */
            return false;
        }
    }
}
exports.AuthInfo = AuthInfo;
//# sourceMappingURL=authInfo.js.map