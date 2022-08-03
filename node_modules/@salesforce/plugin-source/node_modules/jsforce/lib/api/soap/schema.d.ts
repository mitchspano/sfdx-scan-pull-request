/**
 * This file is generated from WSDL file by wsdl2schema.ts.
 * Do not modify directly.
 * To generate the file, run "ts-node path/to/wsdl2schema.ts path/to/wsdl.xml path/to/schema.ts"
 */
export declare const ApiSchemas: {
    readonly sObject: {
        readonly type: "sObject";
        readonly props: {
            readonly type: "string";
            readonly fieldsToNull: readonly ["?", "string"];
            readonly Id: "?string";
        };
    };
    readonly address: {
        readonly type: "address";
        readonly props: {
            readonly city: "?string";
            readonly country: "?string";
            readonly countryCode: "?string";
            readonly geocodeAccuracy: "?string";
            readonly postalCode: "?string";
            readonly state: "?string";
            readonly stateCode: "?string";
            readonly street: "?string";
        };
        readonly extends: "location";
    };
    readonly location: {
        readonly type: "location";
        readonly props: {
            readonly latitude: "?number";
            readonly longitude: "?number";
        };
    };
    readonly QueryResult: {
        readonly type: "QueryResult";
        readonly props: {
            readonly done: "boolean";
            readonly queryLocator: "?string";
            readonly records: readonly ["?", "sObject"];
            readonly size: "number";
        };
    };
    readonly SearchResult: {
        readonly type: "SearchResult";
        readonly props: {
            readonly queryId: "string";
            readonly searchRecords: readonly ["SearchRecord"];
            readonly searchResultsMetadata: "?SearchResultsMetadata";
        };
    };
    readonly SearchRecord: {
        readonly type: "SearchRecord";
        readonly props: {
            readonly record: "sObject";
            readonly searchRecordMetadata: "?SearchRecordMetadata";
            readonly snippet: "?SearchSnippet";
        };
    };
    readonly SearchRecordMetadata: {
        readonly type: "SearchRecordMetadata";
        readonly props: {
            readonly searchPromoted: "boolean";
            readonly spellCorrected: "boolean";
        };
    };
    readonly SearchSnippet: {
        readonly type: "SearchSnippet";
        readonly props: {
            readonly text: "?string";
            readonly wholeFields: readonly ["NameValuePair"];
        };
    };
    readonly SearchResultsMetadata: {
        readonly type: "SearchResultsMetadata";
        readonly props: {
            readonly entityLabelMetadata: readonly ["LabelsSearchMetadata"];
            readonly entityMetadata: readonly ["EntitySearchMetadata"];
        };
    };
    readonly LabelsSearchMetadata: {
        readonly type: "LabelsSearchMetadata";
        readonly props: {
            readonly entityFieldLabels: readonly ["NameValuePair"];
            readonly entityName: "string";
        };
    };
    readonly EntitySearchMetadata: {
        readonly type: "EntitySearchMetadata";
        readonly props: {
            readonly entityName: "string";
            readonly errorMetadata: "?EntityErrorMetadata";
            readonly fieldMetadata: readonly ["FieldLevelSearchMetadata"];
            readonly intentQueryMetadata: "?EntityIntentQueryMetadata";
            readonly searchPromotionMetadata: "?EntitySearchPromotionMetadata";
            readonly spellCorrectionMetadata: "?EntitySpellCorrectionMetadata";
        };
    };
    readonly FieldLevelSearchMetadata: {
        readonly type: "FieldLevelSearchMetadata";
        readonly props: {
            readonly label: "?string";
            readonly name: "string";
            readonly type: "?string";
        };
    };
    readonly EntitySpellCorrectionMetadata: {
        readonly type: "EntitySpellCorrectionMetadata";
        readonly props: {
            readonly correctedQuery: "string";
            readonly hasNonCorrectedResults: "boolean";
        };
    };
    readonly EntitySearchPromotionMetadata: {
        readonly type: "EntitySearchPromotionMetadata";
        readonly props: {
            readonly promotedResultCount: "number";
        };
    };
    readonly EntityIntentQueryMetadata: {
        readonly type: "EntityIntentQueryMetadata";
        readonly props: {
            readonly intentQuery: "boolean";
            readonly message: "?string";
        };
    };
    readonly EntityErrorMetadata: {
        readonly type: "EntityErrorMetadata";
        readonly props: {
            readonly errorCode: "?string";
            readonly message: "?string";
        };
    };
    readonly RelationshipReferenceTo: {
        readonly type: "RelationshipReferenceTo";
        readonly props: {
            readonly referenceTo: readonly ["string"];
        };
    };
    readonly RecordTypesSupported: {
        readonly type: "RecordTypesSupported";
        readonly props: {
            readonly recordTypeInfos: readonly ["RecordTypeInfo"];
        };
    };
    readonly JunctionIdListNames: {
        readonly type: "JunctionIdListNames";
        readonly props: {
            readonly names: readonly ["string"];
        };
    };
    readonly SearchLayoutButtonsDisplayed: {
        readonly type: "SearchLayoutButtonsDisplayed";
        readonly props: {
            readonly applicable: "boolean";
            readonly buttons: readonly ["SearchLayoutButton"];
        };
    };
    readonly SearchLayoutButton: {
        readonly type: "SearchLayoutButton";
        readonly props: {
            readonly apiName: "string";
            readonly label: "string";
        };
    };
    readonly SearchLayoutFieldsDisplayed: {
        readonly type: "SearchLayoutFieldsDisplayed";
        readonly props: {
            readonly applicable: "boolean";
            readonly fields: readonly ["SearchLayoutField"];
        };
    };
    readonly SearchLayoutField: {
        readonly type: "SearchLayoutField";
        readonly props: {
            readonly apiName: "string";
            readonly label: "string";
            readonly sortable: "boolean";
        };
    };
    readonly NameValuePair: {
        readonly type: "NameValuePair";
        readonly props: {
            readonly name: "string";
            readonly value: "string";
        };
    };
    readonly NameObjectValuePair: {
        readonly type: "NameObjectValuePair";
        readonly props: {
            readonly isVisible: "?boolean";
            readonly name: "string";
            readonly value: readonly ["any"];
        };
    };
    readonly GetUpdatedResult: {
        readonly type: "GetUpdatedResult";
        readonly props: {
            readonly ids: readonly ["string"];
            readonly latestDateCovered: "string";
        };
    };
    readonly GetDeletedResult: {
        readonly type: "GetDeletedResult";
        readonly props: {
            readonly deletedRecords: readonly ["DeletedRecord"];
            readonly earliestDateAvailable: "string";
            readonly latestDateCovered: "string";
        };
    };
    readonly DeletedRecord: {
        readonly type: "DeletedRecord";
        readonly props: {
            readonly deletedDate: "string";
            readonly id: "string";
        };
    };
    readonly GetServerTimestampResult: {
        readonly type: "GetServerTimestampResult";
        readonly props: {
            readonly timestamp: "string";
        };
    };
    readonly InvalidateSessionsResult: {
        readonly type: "InvalidateSessionsResult";
        readonly props: {
            readonly errors: readonly ["Error"];
            readonly success: "boolean";
        };
    };
    readonly SetPasswordResult: {
        readonly type: "SetPasswordResult";
        readonly props: {};
    };
    readonly ChangeOwnPasswordResult: {
        readonly type: "ChangeOwnPasswordResult";
        readonly props: {};
    };
    readonly ResetPasswordResult: {
        readonly type: "ResetPasswordResult";
        readonly props: {
            readonly password: "string";
        };
    };
    readonly GetUserInfoResult: {
        readonly type: "GetUserInfoResult";
        readonly props: {
            readonly accessibilityMode: "boolean";
            readonly chatterExternal: "boolean";
            readonly currencySymbol: "?string";
            readonly orgAttachmentFileSizeLimit: "number";
            readonly orgDefaultCurrencyIsoCode: "?string";
            readonly orgDefaultCurrencyLocale: "?string";
            readonly orgDisallowHtmlAttachments: "boolean";
            readonly orgHasPersonAccounts: "boolean";
            readonly organizationId: "string";
            readonly organizationMultiCurrency: "boolean";
            readonly organizationName: "string";
            readonly profileId: "string";
            readonly roleId: "?string";
            readonly sessionSecondsValid: "number";
            readonly userDefaultCurrencyIsoCode: "?string";
            readonly userEmail: "string";
            readonly userFullName: "string";
            readonly userId: "string";
            readonly userLanguage: "string";
            readonly userLocale: "string";
            readonly userName: "string";
            readonly userTimeZone: "string";
            readonly userType: "string";
            readonly userUiSkin: "string";
        };
    };
    readonly LoginResult: {
        readonly type: "LoginResult";
        readonly props: {
            readonly metadataServerUrl: "?string";
            readonly passwordExpired: "boolean";
            readonly sandbox: "boolean";
            readonly serverUrl: "?string";
            readonly sessionId: "?string";
            readonly userId: "?string";
            readonly userInfo: "?GetUserInfoResult";
        };
    };
    readonly ExtendedErrorDetails: {
        readonly type: "ExtendedErrorDetails";
        readonly props: {
            readonly extendedErrorCode: "string";
        };
    };
    readonly Error: {
        readonly type: "Error";
        readonly props: {
            readonly extendedErrorDetails: readonly ["?", "ExtendedErrorDetails"];
            readonly fields: readonly ["?", "string"];
            readonly message: "string";
            readonly statusCode: "string";
        };
    };
    readonly SendEmailError: {
        readonly type: "SendEmailError";
        readonly props: {
            readonly fields: readonly ["?", "string"];
            readonly message: "string";
            readonly statusCode: "string";
            readonly targetObjectId: "?string";
        };
    };
    readonly SaveResult: {
        readonly type: "SaveResult";
        readonly props: {
            readonly errors: readonly ["Error"];
            readonly id: "?string";
            readonly success: "boolean";
        };
    };
    readonly RenderEmailTemplateError: {
        readonly type: "RenderEmailTemplateError";
        readonly props: {
            readonly fieldName: "string";
            readonly message: "string";
            readonly offset: "number";
            readonly statusCode: "string";
        };
    };
    readonly UpsertResult: {
        readonly type: "UpsertResult";
        readonly props: {
            readonly created: "boolean";
            readonly errors: readonly ["Error"];
            readonly id: "?string";
            readonly success: "boolean";
        };
    };
    readonly PerformQuickActionResult: {
        readonly type: "PerformQuickActionResult";
        readonly props: {
            readonly contextId: "?string";
            readonly created: "boolean";
            readonly errors: readonly ["Error"];
            readonly feedItemIds: readonly ["?", "string"];
            readonly ids: readonly ["?", "string"];
            readonly success: "boolean";
            readonly successMessage: "?string";
        };
    };
    readonly QuickActionTemplateResult: {
        readonly type: "QuickActionTemplateResult";
        readonly props: {
            readonly contextId: "?string";
            readonly defaultValueFormulas: "?sObject";
            readonly defaultValues: "?sObject";
            readonly errors: readonly ["Error"];
            readonly success: "boolean";
        };
    };
    readonly MergeRequest: {
        readonly type: "MergeRequest";
        readonly props: {
            readonly additionalInformationMap: readonly ["AdditionalInformationMap"];
            readonly masterRecord: "sObject";
            readonly recordToMergeIds: readonly ["string"];
        };
    };
    readonly MergeResult: {
        readonly type: "MergeResult";
        readonly props: {
            readonly errors: readonly ["Error"];
            readonly id: "?string";
            readonly mergedRecordIds: readonly ["string"];
            readonly success: "boolean";
            readonly updatedRelatedIds: readonly ["string"];
        };
    };
    readonly ProcessRequest: {
        readonly type: "ProcessRequest";
        readonly props: {
            readonly comments: "?string";
            readonly nextApproverIds: readonly ["?", "string"];
        };
    };
    readonly ProcessSubmitRequest: {
        readonly type: "ProcessSubmitRequest";
        readonly props: {
            readonly objectId: "string";
            readonly submitterId: "?string";
            readonly processDefinitionNameOrId: "?string";
            readonly skipEntryCriteria: "?boolean";
        };
        readonly extends: "ProcessRequest";
    };
    readonly ProcessWorkitemRequest: {
        readonly type: "ProcessWorkitemRequest";
        readonly props: {
            readonly action: "string";
            readonly workitemId: "string";
        };
        readonly extends: "ProcessRequest";
    };
    readonly PerformQuickActionRequest: {
        readonly type: "PerformQuickActionRequest";
        readonly props: {
            readonly contextId: "?string";
            readonly quickActionName: "string";
            readonly records: readonly ["?", "sObject"];
        };
    };
    readonly DescribeAvailableQuickActionResult: {
        readonly type: "DescribeAvailableQuickActionResult";
        readonly props: {
            readonly actionEnumOrId: "string";
            readonly label: "string";
            readonly name: "string";
            readonly type: "string";
        };
    };
    readonly DescribeQuickActionResult: {
        readonly type: "DescribeQuickActionResult";
        readonly props: {
            readonly accessLevelRequired: "?string";
            readonly actionEnumOrId: "string";
            readonly canvasApplicationId: "?string";
            readonly canvasApplicationName: "?string";
            readonly colors: readonly ["DescribeColor"];
            readonly contextSobjectType: "?string";
            readonly defaultValues: readonly ["?", "DescribeQuickActionDefaultValue"];
            readonly flowDevName: "?string";
            readonly flowRecordIdVar: "?string";
            readonly height: "?number";
            readonly iconName: "?string";
            readonly iconUrl: "?string";
            readonly icons: readonly ["DescribeIcon"];
            readonly label: "string";
            readonly layout: "?DescribeLayoutSection";
            readonly lightningComponentBundleId: "?string";
            readonly lightningComponentBundleName: "?string";
            readonly lightningComponentQualifiedName: "?string";
            readonly miniIconUrl: "?string";
            readonly mobileExtensionDisplayMode: "?string";
            readonly mobileExtensionId: "?string";
            readonly name: "string";
            readonly showQuickActionLcHeader: "boolean";
            readonly showQuickActionVfHeader: "boolean";
            readonly targetParentField: "?string";
            readonly targetRecordTypeId: "?string";
            readonly targetSobjectType: "?string";
            readonly type: "string";
            readonly visualforcePageName: "?string";
            readonly visualforcePageUrl: "?string";
            readonly width: "?number";
        };
    };
    readonly DescribeQuickActionDefaultValue: {
        readonly type: "DescribeQuickActionDefaultValue";
        readonly props: {
            readonly defaultValue: "?string";
            readonly field: "string";
        };
    };
    readonly DescribeVisualForceResult: {
        readonly type: "DescribeVisualForceResult";
        readonly props: {
            readonly domain: "string";
        };
    };
    readonly ProcessResult: {
        readonly type: "ProcessResult";
        readonly props: {
            readonly actorIds: readonly ["string"];
            readonly entityId: "?string";
            readonly errors: readonly ["Error"];
            readonly instanceId: "?string";
            readonly instanceStatus: "?string";
            readonly newWorkitemIds: readonly ["?", "string"];
            readonly success: "boolean";
        };
    };
    readonly DeleteResult: {
        readonly type: "DeleteResult";
        readonly props: {
            readonly errors: readonly ["?", "Error"];
            readonly id: "?string";
            readonly success: "boolean";
        };
    };
    readonly UndeleteResult: {
        readonly type: "UndeleteResult";
        readonly props: {
            readonly errors: readonly ["Error"];
            readonly id: "?string";
            readonly success: "boolean";
        };
    };
    readonly DeleteByExampleResult: {
        readonly type: "DeleteByExampleResult";
        readonly props: {
            readonly entity: "?sObject";
            readonly errors: readonly ["?", "Error"];
            readonly rowCount: "number";
            readonly success: "boolean";
        };
    };
    readonly EmptyRecycleBinResult: {
        readonly type: "EmptyRecycleBinResult";
        readonly props: {
            readonly errors: readonly ["Error"];
            readonly id: "?string";
            readonly success: "boolean";
        };
    };
    readonly LeadConvert: {
        readonly type: "LeadConvert";
        readonly props: {
            readonly accountId: "?string";
            readonly accountRecord: "?sObject";
            readonly bypassAccountDedupeCheck: "?boolean";
            readonly bypassContactDedupeCheck: "?boolean";
            readonly contactId: "?string";
            readonly contactRecord: "?sObject";
            readonly convertedStatus: "string";
            readonly doNotCreateOpportunity: "boolean";
            readonly leadId: "string";
            readonly opportunityId: "?string";
            readonly opportunityName: "?string";
            readonly opportunityRecord: "?sObject";
            readonly overwriteLeadSource: "boolean";
            readonly ownerId: "?string";
            readonly sendNotificationEmail: "boolean";
        };
    };
    readonly LeadConvertResult: {
        readonly type: "LeadConvertResult";
        readonly props: {
            readonly accountId: "?string";
            readonly contactId: "?string";
            readonly errors: readonly ["Error"];
            readonly leadId: "?string";
            readonly opportunityId: "?string";
            readonly success: "boolean";
        };
    };
    readonly DescribeSObjectResult: {
        readonly type: "DescribeSObjectResult";
        readonly props: {
            readonly actionOverrides: readonly ["?", "ActionOverride"];
            readonly activateable: "boolean";
            readonly childRelationships: readonly ["ChildRelationship"];
            readonly compactLayoutable: "boolean";
            readonly createable: "boolean";
            readonly custom: "boolean";
            readonly customSetting: "boolean";
            readonly dataTranslationEnabled: "?boolean";
            readonly deepCloneable: "boolean";
            readonly defaultImplementation: "?string";
            readonly deletable: "boolean";
            readonly deprecatedAndHidden: "boolean";
            readonly feedEnabled: "boolean";
            readonly fields: readonly ["?", "Field"];
            readonly hasSubtypes: "boolean";
            readonly idEnabled: "boolean";
            readonly implementedBy: "?string";
            readonly implementsInterfaces: "?string";
            readonly isInterface: "boolean";
            readonly isSubtype: "boolean";
            readonly keyPrefix: "?string";
            readonly label: "string";
            readonly labelPlural: "string";
            readonly layoutable: "boolean";
            readonly mergeable: "boolean";
            readonly mruEnabled: "boolean";
            readonly name: "string";
            readonly namedLayoutInfos: readonly ["NamedLayoutInfo"];
            readonly networkScopeFieldName: "?string";
            readonly queryable: "boolean";
            readonly recordTypeInfos: readonly ["RecordTypeInfo"];
            readonly replicateable: "boolean";
            readonly retrieveable: "boolean";
            readonly searchLayoutable: "?boolean";
            readonly searchable: "boolean";
            readonly supportedScopes: readonly ["?", "ScopeInfo"];
            readonly triggerable: "?boolean";
            readonly undeletable: "boolean";
            readonly updateable: "boolean";
            readonly urlDetail: "?string";
            readonly urlEdit: "?string";
            readonly urlNew: "?string";
        };
    };
    readonly DescribeGlobalSObjectResult: {
        readonly type: "DescribeGlobalSObjectResult";
        readonly props: {
            readonly activateable: "boolean";
            readonly createable: "boolean";
            readonly custom: "boolean";
            readonly customSetting: "boolean";
            readonly dataTranslationEnabled: "?boolean";
            readonly deepCloneable: "boolean";
            readonly deletable: "boolean";
            readonly deprecatedAndHidden: "boolean";
            readonly feedEnabled: "boolean";
            readonly hasSubtypes: "boolean";
            readonly idEnabled: "boolean";
            readonly isInterface: "boolean";
            readonly isSubtype: "boolean";
            readonly keyPrefix: "?string";
            readonly label: "string";
            readonly labelPlural: "string";
            readonly layoutable: "boolean";
            readonly mergeable: "boolean";
            readonly mruEnabled: "boolean";
            readonly name: "string";
            readonly queryable: "boolean";
            readonly replicateable: "boolean";
            readonly retrieveable: "boolean";
            readonly searchable: "boolean";
            readonly triggerable: "boolean";
            readonly undeletable: "boolean";
            readonly updateable: "boolean";
        };
    };
    readonly ChildRelationship: {
        readonly type: "ChildRelationship";
        readonly props: {
            readonly cascadeDelete: "boolean";
            readonly childSObject: "string";
            readonly deprecatedAndHidden: "boolean";
            readonly field: "string";
            readonly junctionIdListNames: readonly ["?", "string"];
            readonly junctionReferenceTo: readonly ["?", "string"];
            readonly relationshipName: "?string";
            readonly restrictedDelete: "?boolean";
        };
    };
    readonly DescribeGlobalResult: {
        readonly type: "DescribeGlobalResult";
        readonly props: {
            readonly encoding: "?string";
            readonly maxBatchSize: "number";
            readonly sobjects: readonly ["DescribeGlobalSObjectResult"];
        };
    };
    readonly DescribeGlobalTheme: {
        readonly type: "DescribeGlobalTheme";
        readonly props: {
            readonly global: "DescribeGlobalResult";
            readonly theme: "DescribeThemeResult";
        };
    };
    readonly ScopeInfo: {
        readonly type: "ScopeInfo";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly StringList: {
        readonly type: "StringList";
        readonly props: {
            readonly values: readonly ["string"];
        };
    };
    readonly ChangeEventHeader: {
        readonly type: "ChangeEventHeader";
        readonly props: {
            readonly entityName: "string";
            readonly recordIds: readonly ["string"];
            readonly commitTimestamp: "number";
            readonly commitNumber: "number";
            readonly commitUser: "string";
            readonly diffFields: readonly ["string"];
            readonly changeType: "string";
            readonly changeOrigin: "string";
            readonly transactionKey: "string";
            readonly sequenceNumber: "number";
            readonly nulledFields: readonly ["string"];
            readonly changedFields: readonly ["string"];
        };
    };
    readonly FilteredLookupInfo: {
        readonly type: "FilteredLookupInfo";
        readonly props: {
            readonly controllingFields: readonly ["string"];
            readonly dependent: "boolean";
            readonly optionalFilter: "boolean";
        };
    };
    readonly Field: {
        readonly type: "Field";
        readonly props: {
            readonly aggregatable: "boolean";
            readonly aiPredictionField: "boolean";
            readonly autoNumber: "boolean";
            readonly byteLength: "number";
            readonly calculated: "boolean";
            readonly calculatedFormula: "?string";
            readonly cascadeDelete: "?boolean";
            readonly caseSensitive: "boolean";
            readonly compoundFieldName: "?string";
            readonly controllerName: "?string";
            readonly createable: "boolean";
            readonly custom: "boolean";
            readonly dataTranslationEnabled: "?boolean";
            readonly defaultValue: "?any";
            readonly defaultValueFormula: "?string";
            readonly defaultedOnCreate: "boolean";
            readonly dependentPicklist: "?boolean";
            readonly deprecatedAndHidden: "boolean";
            readonly digits: "number";
            readonly displayLocationInDecimal: "?boolean";
            readonly encrypted: "?boolean";
            readonly externalId: "?boolean";
            readonly extraTypeInfo: "?string";
            readonly filterable: "boolean";
            readonly filteredLookupInfo: "?FilteredLookupInfo";
            readonly formulaTreatNullNumberAsZero: "?boolean";
            readonly groupable: "boolean";
            readonly highScaleNumber: "?boolean";
            readonly htmlFormatted: "?boolean";
            readonly idLookup: "boolean";
            readonly inlineHelpText: "?string";
            readonly label: "string";
            readonly length: "number";
            readonly mask: "?string";
            readonly maskType: "?string";
            readonly name: "string";
            readonly nameField: "boolean";
            readonly namePointing: "?boolean";
            readonly nillable: "boolean";
            readonly permissionable: "boolean";
            readonly picklistValues: readonly ["?", "PicklistEntry"];
            readonly polymorphicForeignKey: "boolean";
            readonly precision: "number";
            readonly queryByDistance: "boolean";
            readonly referenceTargetField: "?string";
            readonly referenceTo: readonly ["?", "string"];
            readonly relationshipName: "?string";
            readonly relationshipOrder: "?number";
            readonly restrictedDelete: "?boolean";
            readonly restrictedPicklist: "boolean";
            readonly scale: "number";
            readonly searchPrefilterable: "boolean";
            readonly soapType: "string";
            readonly sortable: "?boolean";
            readonly type: "string";
            readonly unique: "boolean";
            readonly updateable: "boolean";
            readonly writeRequiresMasterRead: "?boolean";
        };
    };
    readonly PicklistEntry: {
        readonly type: "PicklistEntry";
        readonly props: {
            readonly active: "boolean";
            readonly defaultValue: "boolean";
            readonly label: "?string";
            readonly validFor: "?string";
            readonly value: "string";
        };
    };
    readonly DescribeDataCategoryGroupResult: {
        readonly type: "DescribeDataCategoryGroupResult";
        readonly props: {
            readonly categoryCount: "number";
            readonly description: "string";
            readonly label: "string";
            readonly name: "string";
            readonly sobject: "string";
        };
    };
    readonly DescribeDataCategoryGroupStructureResult: {
        readonly type: "DescribeDataCategoryGroupStructureResult";
        readonly props: {
            readonly description: "string";
            readonly label: "string";
            readonly name: "string";
            readonly sobject: "string";
            readonly topCategories: readonly ["DataCategory"];
        };
    };
    readonly DataCategoryGroupSobjectTypePair: {
        readonly type: "DataCategoryGroupSobjectTypePair";
        readonly props: {
            readonly dataCategoryGroupName: "string";
            readonly sobject: "string";
        };
    };
    readonly DataCategory: {
        readonly type: "DataCategory";
        readonly props: {
            readonly childCategories: readonly ["DataCategory"];
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly DescribeDataCategoryMappingResult: {
        readonly type: "DescribeDataCategoryMappingResult";
        readonly props: {
            readonly dataCategoryGroupId: "string";
            readonly dataCategoryGroupLabel: "string";
            readonly dataCategoryGroupName: "string";
            readonly dataCategoryId: "string";
            readonly dataCategoryLabel: "string";
            readonly dataCategoryName: "string";
            readonly id: "string";
            readonly mappedEntity: "string";
            readonly mappedField: "string";
        };
    };
    readonly KnowledgeSettings: {
        readonly type: "KnowledgeSettings";
        readonly props: {
            readonly defaultLanguage: "?string";
            readonly knowledgeEnabled: "boolean";
            readonly languages: readonly ["KnowledgeLanguageItem"];
        };
    };
    readonly KnowledgeLanguageItem: {
        readonly type: "KnowledgeLanguageItem";
        readonly props: {
            readonly active: "boolean";
            readonly assigneeId: "?string";
            readonly name: "string";
        };
    };
    readonly FieldDiff: {
        readonly type: "FieldDiff";
        readonly props: {
            readonly difference: "string";
            readonly name: "string";
        };
    };
    readonly AdditionalInformationMap: {
        readonly type: "AdditionalInformationMap";
        readonly props: {
            readonly name: "string";
            readonly value: "string";
        };
    };
    readonly MatchRecord: {
        readonly type: "MatchRecord";
        readonly props: {
            readonly additionalInformation: readonly ["AdditionalInformationMap"];
            readonly fieldDiffs: readonly ["FieldDiff"];
            readonly matchConfidence: "number";
            readonly record: "sObject";
        };
    };
    readonly MatchResult: {
        readonly type: "MatchResult";
        readonly props: {
            readonly entityType: "string";
            readonly errors: readonly ["Error"];
            readonly matchEngine: "string";
            readonly matchRecords: readonly ["MatchRecord"];
            readonly rule: "string";
            readonly size: "number";
            readonly success: "boolean";
        };
    };
    readonly DuplicateResult: {
        readonly type: "DuplicateResult";
        readonly props: {
            readonly allowSave: "boolean";
            readonly duplicateRule: "string";
            readonly duplicateRuleEntityType: "string";
            readonly errorMessage: "?string";
            readonly matchResults: readonly ["MatchResult"];
        };
    };
    readonly DuplicateError: {
        readonly type: "DuplicateError";
        readonly props: {
            readonly duplicateResult: "DuplicateResult";
        };
        readonly extends: "Error";
    };
    readonly DescribeNounResult: {
        readonly type: "DescribeNounResult";
        readonly props: {
            readonly caseValues: readonly ["NameCaseValue"];
            readonly developerName: "string";
            readonly gender: "?string";
            readonly name: "string";
            readonly pluralAlias: "?string";
            readonly startsWith: "?string";
        };
    };
    readonly NameCaseValue: {
        readonly type: "NameCaseValue";
        readonly props: {
            readonly article: "?string";
            readonly caseType: "?string";
            readonly number: "?string";
            readonly possessive: "?string";
            readonly value: "?string";
        };
    };
    readonly FindDuplicatesResult: {
        readonly type: "FindDuplicatesResult";
        readonly props: {
            readonly duplicateResults: readonly ["DuplicateResult"];
            readonly errors: readonly ["Error"];
            readonly success: "boolean";
        };
    };
    readonly DescribeAppMenuResult: {
        readonly type: "DescribeAppMenuResult";
        readonly props: {
            readonly appMenuItems: readonly ["DescribeAppMenuItem"];
        };
    };
    readonly DescribeAppMenuItem: {
        readonly type: "DescribeAppMenuItem";
        readonly props: {
            readonly colors: readonly ["DescribeColor"];
            readonly content: "string";
            readonly icons: readonly ["DescribeIcon"];
            readonly label: "string";
            readonly name: "string";
            readonly type: "string";
            readonly url: "string";
        };
    };
    readonly DescribeThemeResult: {
        readonly type: "DescribeThemeResult";
        readonly props: {
            readonly themeItems: readonly ["DescribeThemeItem"];
        };
    };
    readonly DescribeThemeItem: {
        readonly type: "DescribeThemeItem";
        readonly props: {
            readonly colors: readonly ["DescribeColor"];
            readonly icons: readonly ["DescribeIcon"];
            readonly name: "string";
        };
    };
    readonly DescribeSoftphoneLayoutResult: {
        readonly type: "DescribeSoftphoneLayoutResult";
        readonly props: {
            readonly callTypes: readonly ["DescribeSoftphoneLayoutCallType"];
            readonly id: "string";
            readonly name: "string";
        };
    };
    readonly DescribeSoftphoneLayoutCallType: {
        readonly type: "DescribeSoftphoneLayoutCallType";
        readonly props: {
            readonly infoFields: readonly ["DescribeSoftphoneLayoutInfoField"];
            readonly name: "string";
            readonly screenPopOptions: readonly ["DescribeSoftphoneScreenPopOption"];
            readonly screenPopsOpenWithin: "?string";
            readonly sections: readonly ["DescribeSoftphoneLayoutSection"];
        };
    };
    readonly DescribeSoftphoneScreenPopOption: {
        readonly type: "DescribeSoftphoneScreenPopOption";
        readonly props: {
            readonly matchType: "string";
            readonly screenPopData: "string";
            readonly screenPopType: "string";
        };
    };
    readonly DescribeSoftphoneLayoutInfoField: {
        readonly type: "DescribeSoftphoneLayoutInfoField";
        readonly props: {
            readonly name: "string";
        };
    };
    readonly DescribeSoftphoneLayoutSection: {
        readonly type: "DescribeSoftphoneLayoutSection";
        readonly props: {
            readonly entityApiName: "string";
            readonly items: readonly ["DescribeSoftphoneLayoutItem"];
        };
    };
    readonly DescribeSoftphoneLayoutItem: {
        readonly type: "DescribeSoftphoneLayoutItem";
        readonly props: {
            readonly itemApiName: "string";
        };
    };
    readonly DescribeCompactLayoutsResult: {
        readonly type: "DescribeCompactLayoutsResult";
        readonly props: {
            readonly compactLayouts: readonly ["DescribeCompactLayout"];
            readonly defaultCompactLayoutId: "string";
            readonly recordTypeCompactLayoutMappings: readonly ["RecordTypeCompactLayoutMapping"];
        };
    };
    readonly DescribeCompactLayout: {
        readonly type: "DescribeCompactLayout";
        readonly props: {
            readonly actions: readonly ["DescribeLayoutButton"];
            readonly fieldItems: readonly ["DescribeLayoutItem"];
            readonly id: "string";
            readonly imageItems: readonly ["DescribeLayoutItem"];
            readonly label: "string";
            readonly name: "string";
            readonly objectType: "string";
        };
    };
    readonly RecordTypeCompactLayoutMapping: {
        readonly type: "RecordTypeCompactLayoutMapping";
        readonly props: {
            readonly available: "boolean";
            readonly compactLayoutId: "?string";
            readonly compactLayoutName: "string";
            readonly recordTypeId: "string";
            readonly recordTypeName: "string";
        };
    };
    readonly DescribePathAssistantsResult: {
        readonly type: "DescribePathAssistantsResult";
        readonly props: {
            readonly pathAssistants: readonly ["DescribePathAssistant"];
        };
    };
    readonly DescribePathAssistant: {
        readonly type: "DescribePathAssistant";
        readonly props: {
            readonly active: "boolean";
            readonly animationRule: readonly ["?", "DescribeAnimationRule"];
            readonly apiName: "string";
            readonly label: "string";
            readonly pathPicklistField: "string";
            readonly picklistsForRecordType: readonly ["?", "PicklistForRecordType"];
            readonly recordTypeId: "?string";
            readonly steps: readonly ["DescribePathAssistantStep"];
        };
    };
    readonly DescribePathAssistantStep: {
        readonly type: "DescribePathAssistantStep";
        readonly props: {
            readonly closed: "boolean";
            readonly converted: "boolean";
            readonly fields: readonly ["DescribePathAssistantField"];
            readonly info: "?string";
            readonly layoutSection: "?DescribeLayoutSection";
            readonly picklistLabel: "string";
            readonly picklistValue: "string";
            readonly won: "boolean";
        };
    };
    readonly DescribePathAssistantField: {
        readonly type: "DescribePathAssistantField";
        readonly props: {
            readonly apiName: "string";
            readonly label: "string";
            readonly readOnly: "boolean";
            readonly required: "boolean";
        };
    };
    readonly DescribeAnimationRule: {
        readonly type: "DescribeAnimationRule";
        readonly props: {
            readonly animationFrequency: "string";
            readonly isActive: "boolean";
            readonly recordTypeContext: "string";
            readonly recordTypeId: "?string";
            readonly targetField: "string";
            readonly targetFieldChangeToValues: "string";
        };
    };
    readonly DescribeApprovalLayoutResult: {
        readonly type: "DescribeApprovalLayoutResult";
        readonly props: {
            readonly approvalLayouts: readonly ["DescribeApprovalLayout"];
        };
    };
    readonly DescribeApprovalLayout: {
        readonly type: "DescribeApprovalLayout";
        readonly props: {
            readonly id: "string";
            readonly label: "string";
            readonly layoutItems: readonly ["DescribeLayoutItem"];
            readonly name: "string";
        };
    };
    readonly DescribeLayoutResult: {
        readonly type: "DescribeLayoutResult";
        readonly props: {
            readonly layouts: readonly ["DescribeLayout"];
            readonly recordTypeMappings: readonly ["RecordTypeMapping"];
            readonly recordTypeSelectorRequired: "boolean";
        };
    };
    readonly DescribeLayout: {
        readonly type: "DescribeLayout";
        readonly props: {
            readonly buttonLayoutSection: "?DescribeLayoutButtonSection";
            readonly detailLayoutSections: readonly ["DescribeLayoutSection"];
            readonly editLayoutSections: readonly ["DescribeLayoutSection"];
            readonly feedView: "?DescribeLayoutFeedView";
            readonly highlightsPanelLayoutSection: "?DescribeLayoutSection";
            readonly id: "?string";
            readonly quickActionList: "?DescribeQuickActionListResult";
            readonly relatedContent: "?RelatedContent";
            readonly relatedLists: readonly ["RelatedList"];
            readonly saveOptions: readonly ["DescribeLayoutSaveOption"];
        };
    };
    readonly DescribeQuickActionListResult: {
        readonly type: "DescribeQuickActionListResult";
        readonly props: {
            readonly quickActionListItems: readonly ["DescribeQuickActionListItemResult"];
        };
    };
    readonly DescribeQuickActionListItemResult: {
        readonly type: "DescribeQuickActionListItemResult";
        readonly props: {
            readonly accessLevelRequired: "?string";
            readonly colors: readonly ["DescribeColor"];
            readonly iconUrl: "?string";
            readonly icons: readonly ["DescribeIcon"];
            readonly label: "string";
            readonly miniIconUrl: "string";
            readonly quickActionName: "string";
            readonly targetSobjectType: "?string";
            readonly type: "string";
        };
    };
    readonly DescribeLayoutFeedView: {
        readonly type: "DescribeLayoutFeedView";
        readonly props: {
            readonly feedFilters: readonly ["DescribeLayoutFeedFilter"];
        };
    };
    readonly DescribeLayoutFeedFilter: {
        readonly type: "DescribeLayoutFeedFilter";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
            readonly type: "string";
        };
    };
    readonly DescribeLayoutSaveOption: {
        readonly type: "DescribeLayoutSaveOption";
        readonly props: {
            readonly defaultValue: "boolean";
            readonly isDisplayed: "boolean";
            readonly label: "string";
            readonly name: "string";
            readonly restHeaderName: "string";
            readonly soapHeaderName: "string";
        };
    };
    readonly DescribeLayoutSection: {
        readonly type: "DescribeLayoutSection";
        readonly props: {
            readonly collapsed: "boolean";
            readonly columns: "number";
            readonly heading: "?string";
            readonly layoutRows: readonly ["DescribeLayoutRow"];
            readonly layoutSectionId: "?string";
            readonly parentLayoutId: "string";
            readonly rows: "number";
            readonly tabOrder: "string";
            readonly useCollapsibleSection: "boolean";
            readonly useHeading: "boolean";
        };
    };
    readonly DescribeLayoutButtonSection: {
        readonly type: "DescribeLayoutButtonSection";
        readonly props: {
            readonly detailButtons: readonly ["DescribeLayoutButton"];
        };
    };
    readonly DescribeLayoutRow: {
        readonly type: "DescribeLayoutRow";
        readonly props: {
            readonly layoutItems: readonly ["DescribeLayoutItem"];
            readonly numItems: "number";
        };
    };
    readonly DescribeLayoutItem: {
        readonly type: "DescribeLayoutItem";
        readonly props: {
            readonly editableForNew: "boolean";
            readonly editableForUpdate: "boolean";
            readonly label: "?string";
            readonly layoutComponents: readonly ["DescribeLayoutComponent"];
            readonly placeholder: "boolean";
            readonly required: "boolean";
        };
    };
    readonly DescribeLayoutButton: {
        readonly type: "DescribeLayoutButton";
        readonly props: {
            readonly behavior: "?string";
            readonly colors: readonly ["DescribeColor"];
            readonly content: "?string";
            readonly contentSource: "?string";
            readonly custom: "boolean";
            readonly encoding: "?string";
            readonly height: "?number";
            readonly icons: readonly ["DescribeIcon"];
            readonly label: "?string";
            readonly menubar: "?boolean";
            readonly name: "?string";
            readonly overridden: "boolean";
            readonly resizeable: "?boolean";
            readonly scrollbars: "?boolean";
            readonly showsLocation: "?boolean";
            readonly showsStatus: "?boolean";
            readonly toolbar: "?boolean";
            readonly url: "?string";
            readonly width: "?number";
            readonly windowPosition: "?string";
        };
    };
    readonly DescribeLayoutComponent: {
        readonly type: "DescribeLayoutComponent";
        readonly props: {
            readonly displayLines: "number";
            readonly tabOrder: "number";
            readonly type: "string";
            readonly value: "?string";
        };
    };
    readonly FieldComponent: {
        readonly type: "FieldComponent";
        readonly props: {
            readonly field: "Field";
        };
        readonly extends: "DescribeLayoutComponent";
    };
    readonly FieldLayoutComponent: {
        readonly type: "FieldLayoutComponent";
        readonly props: {
            readonly components: readonly ["DescribeLayoutComponent"];
            readonly fieldType: "string";
        };
        readonly extends: "DescribeLayoutComponent";
    };
    readonly VisualforcePage: {
        readonly type: "VisualforcePage";
        readonly props: {
            readonly showLabel: "boolean";
            readonly showScrollbars: "boolean";
            readonly suggestedHeight: "string";
            readonly suggestedWidth: "string";
            readonly url: "string";
        };
        readonly extends: "DescribeLayoutComponent";
    };
    readonly Canvas: {
        readonly type: "Canvas";
        readonly props: {
            readonly displayLocation: "string";
            readonly referenceId: "string";
            readonly showLabel: "boolean";
            readonly showScrollbars: "boolean";
            readonly suggestedHeight: "string";
            readonly suggestedWidth: "string";
        };
        readonly extends: "DescribeLayoutComponent";
    };
    readonly ReportChartComponent: {
        readonly type: "ReportChartComponent";
        readonly props: {
            readonly cacheData: "boolean";
            readonly contextFilterableField: "string";
            readonly error: "string";
            readonly hideOnError: "boolean";
            readonly includeContext: "boolean";
            readonly showTitle: "boolean";
            readonly size: "string";
        };
        readonly extends: "DescribeLayoutComponent";
    };
    readonly AnalyticsCloudComponent: {
        readonly type: "AnalyticsCloudComponent";
        readonly props: {
            readonly error: "string";
            readonly filter: "string";
            readonly height: "string";
            readonly hideOnError: "boolean";
            readonly showSharing: "boolean";
            readonly showTitle: "boolean";
            readonly width: "string";
        };
        readonly extends: "DescribeLayoutComponent";
    };
    readonly CustomLinkComponent: {
        readonly type: "CustomLinkComponent";
        readonly props: {
            readonly customLink: "DescribeLayoutButton";
        };
        readonly extends: "DescribeLayoutComponent";
    };
    readonly NamedLayoutInfo: {
        readonly type: "NamedLayoutInfo";
        readonly props: {
            readonly name: "string";
        };
    };
    readonly RecordTypeInfo: {
        readonly type: "RecordTypeInfo";
        readonly props: {
            readonly active: "boolean";
            readonly available: "boolean";
            readonly defaultRecordTypeMapping: "boolean";
            readonly developerName: "string";
            readonly master: "boolean";
            readonly name: "string";
            readonly recordTypeId: "?string";
        };
    };
    readonly RecordTypeMapping: {
        readonly type: "RecordTypeMapping";
        readonly props: {
            readonly active: "boolean";
            readonly available: "boolean";
            readonly defaultRecordTypeMapping: "boolean";
            readonly developerName: "string";
            readonly layoutId: "string";
            readonly master: "boolean";
            readonly name: "string";
            readonly picklistsForRecordType: readonly ["?", "PicklistForRecordType"];
            readonly recordTypeId: "?string";
        };
    };
    readonly PicklistForRecordType: {
        readonly type: "PicklistForRecordType";
        readonly props: {
            readonly picklistName: "string";
            readonly picklistValues: readonly ["?", "PicklistEntry"];
        };
    };
    readonly RelatedContent: {
        readonly type: "RelatedContent";
        readonly props: {
            readonly relatedContentItems: readonly ["DescribeRelatedContentItem"];
        };
    };
    readonly DescribeRelatedContentItem: {
        readonly type: "DescribeRelatedContentItem";
        readonly props: {
            readonly describeLayoutItem: "DescribeLayoutItem";
        };
    };
    readonly RelatedList: {
        readonly type: "RelatedList";
        readonly props: {
            readonly accessLevelRequiredForCreate: "?string";
            readonly buttons: readonly ["?", "DescribeLayoutButton"];
            readonly columns: readonly ["RelatedListColumn"];
            readonly custom: "boolean";
            readonly field: "?string";
            readonly label: "string";
            readonly limitRows: "number";
            readonly name: "string";
            readonly sobject: "?string";
            readonly sort: readonly ["RelatedListSort"];
        };
    };
    readonly RelatedListColumn: {
        readonly type: "RelatedListColumn";
        readonly props: {
            readonly field: "?string";
            readonly fieldApiName: "string";
            readonly format: "?string";
            readonly label: "string";
            readonly lookupId: "?string";
            readonly name: "string";
            readonly sortable: "boolean";
        };
    };
    readonly RelatedListSort: {
        readonly type: "RelatedListSort";
        readonly props: {
            readonly ascending: "boolean";
            readonly column: "string";
        };
    };
    readonly EmailFileAttachment: {
        readonly type: "EmailFileAttachment";
        readonly props: {
            readonly body: "?string";
            readonly contentType: "?string";
            readonly fileName: "string";
            readonly id: "?string";
            readonly inline: "?boolean";
        };
    };
    readonly Email: {
        readonly type: "Email";
        readonly props: {
            readonly bccSender: "?boolean";
            readonly emailPriority: "?string";
            readonly replyTo: "?string";
            readonly saveAsActivity: "?boolean";
            readonly senderDisplayName: "?string";
            readonly subject: "?string";
            readonly useSignature: "?boolean";
        };
    };
    readonly MassEmailMessage: {
        readonly type: "MassEmailMessage";
        readonly props: {
            readonly description: "?string";
            readonly targetObjectIds: "?string";
            readonly templateId: "string";
            readonly whatIds: "?string";
        };
        readonly extends: "Email";
    };
    readonly SingleEmailMessage: {
        readonly type: "SingleEmailMessage";
        readonly props: {
            readonly bccAddresses: "?string";
            readonly ccAddresses: "?string";
            readonly charset: "?string";
            readonly documentAttachments: readonly ["string"];
            readonly entityAttachments: readonly ["string"];
            readonly fileAttachments: readonly ["EmailFileAttachment"];
            readonly htmlBody: "?string";
            readonly inReplyTo: "?string";
            readonly optOutPolicy: "?string";
            readonly orgWideEmailAddressId: "?string";
            readonly plainTextBody: "?string";
            readonly references: "?string";
            readonly targetObjectId: "?string";
            readonly templateId: "?string";
            readonly templateName: "?string";
            readonly toAddresses: "?string";
            readonly treatBodiesAsTemplate: "?boolean";
            readonly treatTargetObjectAsRecipient: "?boolean";
            readonly whatId: "?string";
        };
        readonly extends: "Email";
    };
    readonly SendEmailResult: {
        readonly type: "SendEmailResult";
        readonly props: {
            readonly errors: readonly ["SendEmailError"];
            readonly success: "boolean";
        };
    };
    readonly ListViewColumn: {
        readonly type: "ListViewColumn";
        readonly props: {
            readonly ascendingLabel: "?string";
            readonly descendingLabel: "?string";
            readonly fieldNameOrPath: "string";
            readonly hidden: "boolean";
            readonly label: "string";
            readonly searchable: "boolean";
            readonly selectListItem: "string";
            readonly sortDirection: "?string";
            readonly sortIndex: "?number";
            readonly sortable: "boolean";
            readonly type: "string";
        };
    };
    readonly ListViewOrderBy: {
        readonly type: "ListViewOrderBy";
        readonly props: {
            readonly fieldNameOrPath: "string";
            readonly nullsPosition: "?string";
            readonly sortDirection: "?string";
        };
    };
    readonly DescribeSoqlListView: {
        readonly type: "DescribeSoqlListView";
        readonly props: {
            readonly columns: readonly ["ListViewColumn"];
            readonly id: "string";
            readonly orderBy: readonly ["ListViewOrderBy"];
            readonly query: "string";
            readonly relatedEntityId: "?string";
            readonly scope: "?string";
            readonly scopeEntityId: "?string";
            readonly sobjectType: "string";
            readonly whereCondition: "?SoqlWhereCondition";
        };
    };
    readonly DescribeSoqlListViewsRequest: {
        readonly type: "DescribeSoqlListViewsRequest";
        readonly props: {
            readonly listViewParams: readonly ["DescribeSoqlListViewParams"];
        };
    };
    readonly DescribeSoqlListViewParams: {
        readonly type: "DescribeSoqlListViewParams";
        readonly props: {
            readonly developerNameOrId: "string";
            readonly sobjectType: "?string";
        };
    };
    readonly DescribeSoqlListViewResult: {
        readonly type: "DescribeSoqlListViewResult";
        readonly props: {
            readonly describeSoqlListViews: readonly ["DescribeSoqlListView"];
        };
    };
    readonly ExecuteListViewRequest: {
        readonly type: "ExecuteListViewRequest";
        readonly props: {
            readonly developerNameOrId: "string";
            readonly limit: "?number";
            readonly offset: "?number";
            readonly orderBy: readonly ["ListViewOrderBy"];
            readonly sobjectType: "string";
        };
    };
    readonly ExecuteListViewResult: {
        readonly type: "ExecuteListViewResult";
        readonly props: {
            readonly columns: readonly ["ListViewColumn"];
            readonly developerName: "string";
            readonly done: "boolean";
            readonly id: "string";
            readonly label: "string";
            readonly records: readonly ["ListViewRecord"];
            readonly size: "number";
        };
    };
    readonly ListViewRecord: {
        readonly type: "ListViewRecord";
        readonly props: {
            readonly columns: readonly ["ListViewRecordColumn"];
        };
    };
    readonly ListViewRecordColumn: {
        readonly type: "ListViewRecordColumn";
        readonly props: {
            readonly fieldNameOrPath: "string";
            readonly value: "?string";
        };
    };
    readonly SoqlWhereCondition: {
        readonly type: "SoqlWhereCondition";
        readonly props: {};
    };
    readonly SoqlCondition: {
        readonly type: "SoqlCondition";
        readonly props: {
            readonly field: "string";
            readonly operator: "string";
            readonly values: readonly ["string"];
        };
        readonly extends: "SoqlWhereCondition";
    };
    readonly SoqlNotCondition: {
        readonly type: "SoqlNotCondition";
        readonly props: {
            readonly condition: "SoqlWhereCondition";
        };
        readonly extends: "SoqlWhereCondition";
    };
    readonly SoqlConditionGroup: {
        readonly type: "SoqlConditionGroup";
        readonly props: {
            readonly conditions: readonly ["SoqlWhereCondition"];
            readonly conjunction: "string";
        };
        readonly extends: "SoqlWhereCondition";
    };
    readonly SoqlSubQueryCondition: {
        readonly type: "SoqlSubQueryCondition";
        readonly props: {
            readonly field: "string";
            readonly operator: "string";
            readonly subQuery: "string";
        };
        readonly extends: "SoqlWhereCondition";
    };
    readonly DescribeSearchLayoutResult: {
        readonly type: "DescribeSearchLayoutResult";
        readonly props: {
            readonly errorMsg: "?string";
            readonly label: "?string";
            readonly limitRows: "?number";
            readonly objectType: "string";
            readonly searchColumns: readonly ["?", "DescribeColumn"];
        };
    };
    readonly DescribeColumn: {
        readonly type: "DescribeColumn";
        readonly props: {
            readonly field: "string";
            readonly format: "?string";
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly DescribeSearchScopeOrderResult: {
        readonly type: "DescribeSearchScopeOrderResult";
        readonly props: {
            readonly keyPrefix: "string";
            readonly name: "string";
        };
    };
    readonly DescribeSearchableEntityResult: {
        readonly type: "DescribeSearchableEntityResult";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
            readonly pluralLabel: "string";
        };
    };
    readonly DescribeTabSetResult: {
        readonly type: "DescribeTabSetResult";
        readonly props: {
            readonly description: "string";
            readonly label: "string";
            readonly logoUrl: "string";
            readonly namespace: "?string";
            readonly selected: "boolean";
            readonly tabSetId: "string";
            readonly tabs: readonly ["DescribeTab"];
        };
    };
    readonly DescribeTab: {
        readonly type: "DescribeTab";
        readonly props: {
            readonly colors: readonly ["DescribeColor"];
            readonly custom: "boolean";
            readonly iconUrl: "string";
            readonly icons: readonly ["DescribeIcon"];
            readonly label: "string";
            readonly miniIconUrl: "string";
            readonly name: "string";
            readonly sobjectName: "?string";
            readonly url: "string";
        };
    };
    readonly DescribeColor: {
        readonly type: "DescribeColor";
        readonly props: {
            readonly color: "string";
            readonly context: "string";
            readonly theme: "string";
        };
    };
    readonly DescribeIcon: {
        readonly type: "DescribeIcon";
        readonly props: {
            readonly contentType: "string";
            readonly height: "?number";
            readonly theme: "string";
            readonly url: "string";
            readonly width: "?number";
        };
    };
    readonly ActionOverride: {
        readonly type: "ActionOverride";
        readonly props: {
            readonly formFactor: "string";
            readonly isAvailableInTouch: "boolean";
            readonly name: "string";
            readonly pageId: "string";
            readonly url: "?string";
        };
    };
    readonly RenderEmailTemplateRequest: {
        readonly type: "RenderEmailTemplateRequest";
        readonly props: {
            readonly escapeHtmlInMergeFields: "?boolean";
            readonly templateBodies: "string";
            readonly whatId: "?string";
            readonly whoId: "?string";
        };
    };
    readonly RenderEmailTemplateBodyResult: {
        readonly type: "RenderEmailTemplateBodyResult";
        readonly props: {
            readonly errors: readonly ["RenderEmailTemplateError"];
            readonly mergedBody: "?string";
            readonly success: "boolean";
        };
    };
    readonly RenderEmailTemplateResult: {
        readonly type: "RenderEmailTemplateResult";
        readonly props: {
            readonly bodyResults: "?RenderEmailTemplateBodyResult";
            readonly errors: readonly ["Error"];
            readonly success: "boolean";
        };
    };
    readonly RenderStoredEmailTemplateRequest: {
        readonly type: "RenderStoredEmailTemplateRequest";
        readonly props: {
            readonly attachmentRetrievalOption: "?string";
            readonly templateId: "string";
            readonly updateTemplateUsage: "?boolean";
            readonly whatId: "?string";
            readonly whoId: "?string";
        };
    };
    readonly RenderStoredEmailTemplateResult: {
        readonly type: "RenderStoredEmailTemplateResult";
        readonly props: {
            readonly errors: readonly ["Error"];
            readonly renderedEmail: "?SingleEmailMessage";
            readonly success: "boolean";
        };
    };
    readonly LimitInfo: {
        readonly type: "LimitInfo";
        readonly props: {
            readonly current: "number";
            readonly limit: "number";
            readonly type: "string";
        };
    };
    readonly OwnerChangeOption: {
        readonly type: "OwnerChangeOption";
        readonly props: {
            readonly type: "string";
            readonly execute: "boolean";
        };
    };
    readonly ApiFault: {
        readonly type: "ApiFault";
        readonly props: {
            readonly exceptionCode: "string";
            readonly exceptionMessage: "string";
            readonly extendedErrorDetails: readonly ["?", "ExtendedErrorDetails"];
        };
    };
    readonly ApiQueryFault: {
        readonly type: "ApiQueryFault";
        readonly props: {
            readonly row: "number";
            readonly column: "number";
        };
        readonly extends: "ApiFault";
    };
    readonly LoginFault: {
        readonly type: "LoginFault";
        readonly props: {};
        readonly extends: "ApiFault";
    };
    readonly InvalidQueryLocatorFault: {
        readonly type: "InvalidQueryLocatorFault";
        readonly props: {};
        readonly extends: "ApiFault";
    };
    readonly InvalidNewPasswordFault: {
        readonly type: "InvalidNewPasswordFault";
        readonly props: {};
        readonly extends: "ApiFault";
    };
    readonly InvalidOldPasswordFault: {
        readonly type: "InvalidOldPasswordFault";
        readonly props: {};
        readonly extends: "ApiFault";
    };
    readonly InvalidIdFault: {
        readonly type: "InvalidIdFault";
        readonly props: {};
        readonly extends: "ApiFault";
    };
    readonly UnexpectedErrorFault: {
        readonly type: "UnexpectedErrorFault";
        readonly props: {};
        readonly extends: "ApiFault";
    };
    readonly InvalidFieldFault: {
        readonly type: "InvalidFieldFault";
        readonly props: {};
        readonly extends: "ApiQueryFault";
    };
    readonly InvalidSObjectFault: {
        readonly type: "InvalidSObjectFault";
        readonly props: {};
        readonly extends: "ApiQueryFault";
    };
    readonly MalformedQueryFault: {
        readonly type: "MalformedQueryFault";
        readonly props: {};
        readonly extends: "ApiQueryFault";
    };
    readonly MalformedSearchFault: {
        readonly type: "MalformedSearchFault";
        readonly props: {};
        readonly extends: "ApiQueryFault";
    };
};
export declare type sObject = {
    type: string;
    fieldsToNull?: string[] | null | undefined;
    Id?: string | null | undefined;
};
export declare type address = location & {
    city?: string | null | undefined;
    country?: string | null | undefined;
    countryCode?: string | null | undefined;
    geocodeAccuracy?: string | null | undefined;
    postalCode?: string | null | undefined;
    state?: string | null | undefined;
    stateCode?: string | null | undefined;
    street?: string | null | undefined;
};
export declare type location = {
    latitude?: number | null | undefined;
    longitude?: number | null | undefined;
};
export declare type QueryResult = {
    done: boolean;
    queryLocator?: string | null | undefined;
    records?: sObject[] | null | undefined;
    size: number;
};
export declare type SearchResult = {
    queryId: string;
    searchRecords: SearchRecord[];
    searchResultsMetadata?: SearchResultsMetadata | null | undefined;
};
export declare type SearchRecord = {
    record: sObject;
    searchRecordMetadata?: SearchRecordMetadata | null | undefined;
    snippet?: SearchSnippet | null | undefined;
};
export declare type SearchRecordMetadata = {
    searchPromoted: boolean;
    spellCorrected: boolean;
};
export declare type SearchSnippet = {
    text?: string | null | undefined;
    wholeFields: NameValuePair[];
};
export declare type SearchResultsMetadata = {
    entityLabelMetadata: LabelsSearchMetadata[];
    entityMetadata: EntitySearchMetadata[];
};
export declare type LabelsSearchMetadata = {
    entityFieldLabels: NameValuePair[];
    entityName: string;
};
export declare type EntitySearchMetadata = {
    entityName: string;
    errorMetadata?: EntityErrorMetadata | null | undefined;
    fieldMetadata: FieldLevelSearchMetadata[];
    intentQueryMetadata?: EntityIntentQueryMetadata | null | undefined;
    searchPromotionMetadata?: EntitySearchPromotionMetadata | null | undefined;
    spellCorrectionMetadata?: EntitySpellCorrectionMetadata | null | undefined;
};
export declare type FieldLevelSearchMetadata = {
    label?: string | null | undefined;
    name: string;
    type?: string | null | undefined;
};
export declare type EntitySpellCorrectionMetadata = {
    correctedQuery: string;
    hasNonCorrectedResults: boolean;
};
export declare type EntitySearchPromotionMetadata = {
    promotedResultCount: number;
};
export declare type EntityIntentQueryMetadata = {
    intentQuery: boolean;
    message?: string | null | undefined;
};
export declare type EntityErrorMetadata = {
    errorCode?: string | null | undefined;
    message?: string | null | undefined;
};
export declare type RelationshipReferenceTo = {
    referenceTo: string[];
};
export declare type RecordTypesSupported = {
    recordTypeInfos: RecordTypeInfo[];
};
export declare type JunctionIdListNames = {
    names: string[];
};
export declare type SearchLayoutButtonsDisplayed = {
    applicable: boolean;
    buttons: SearchLayoutButton[];
};
export declare type SearchLayoutButton = {
    apiName: string;
    label: string;
};
export declare type SearchLayoutFieldsDisplayed = {
    applicable: boolean;
    fields: SearchLayoutField[];
};
export declare type SearchLayoutField = {
    apiName: string;
    label: string;
    sortable: boolean;
};
export declare type NameValuePair = {
    name: string;
    value: string;
};
export declare type NameObjectValuePair = {
    isVisible?: boolean | null | undefined;
    name: string;
    value: any[];
};
export declare type GetUpdatedResult = {
    ids: string[];
    latestDateCovered: string;
};
export declare type GetDeletedResult = {
    deletedRecords: DeletedRecord[];
    earliestDateAvailable: string;
    latestDateCovered: string;
};
export declare type DeletedRecord = {
    deletedDate: string;
    id: string;
};
export declare type GetServerTimestampResult = {
    timestamp: string;
};
export declare type InvalidateSessionsResult = {
    errors: Error[];
    success: boolean;
};
export declare type SetPasswordResult = {};
export declare type ChangeOwnPasswordResult = {};
export declare type ResetPasswordResult = {
    password: string;
};
export declare type GetUserInfoResult = {
    accessibilityMode: boolean;
    chatterExternal: boolean;
    currencySymbol?: string | null | undefined;
    orgAttachmentFileSizeLimit: number;
    orgDefaultCurrencyIsoCode?: string | null | undefined;
    orgDefaultCurrencyLocale?: string | null | undefined;
    orgDisallowHtmlAttachments: boolean;
    orgHasPersonAccounts: boolean;
    organizationId: string;
    organizationMultiCurrency: boolean;
    organizationName: string;
    profileId: string;
    roleId?: string | null | undefined;
    sessionSecondsValid: number;
    userDefaultCurrencyIsoCode?: string | null | undefined;
    userEmail: string;
    userFullName: string;
    userId: string;
    userLanguage: string;
    userLocale: string;
    userName: string;
    userTimeZone: string;
    userType: string;
    userUiSkin: string;
};
export declare type LoginResult = {
    metadataServerUrl?: string | null | undefined;
    passwordExpired: boolean;
    sandbox: boolean;
    serverUrl?: string | null | undefined;
    sessionId?: string | null | undefined;
    userId?: string | null | undefined;
    userInfo?: GetUserInfoResult | null | undefined;
};
export declare type ExtendedErrorDetails = {
    extendedErrorCode: string;
};
export declare type Error = {
    extendedErrorDetails?: ExtendedErrorDetails[] | null | undefined;
    fields?: string[] | null | undefined;
    message: string;
    statusCode: string;
};
export declare type SendEmailError = {
    fields?: string[] | null | undefined;
    message: string;
    statusCode: string;
    targetObjectId?: string | null | undefined;
};
export declare type SaveResult = {
    errors: Error[];
    id?: string | null | undefined;
    success: boolean;
};
export declare type RenderEmailTemplateError = {
    fieldName: string;
    message: string;
    offset: number;
    statusCode: string;
};
export declare type UpsertResult = {
    created: boolean;
    errors: Error[];
    id?: string | null | undefined;
    success: boolean;
};
export declare type PerformQuickActionResult = {
    contextId?: string | null | undefined;
    created: boolean;
    errors: Error[];
    feedItemIds?: string[] | null | undefined;
    ids?: string[] | null | undefined;
    success: boolean;
    successMessage?: string | null | undefined;
};
export declare type QuickActionTemplateResult = {
    contextId?: string | null | undefined;
    defaultValueFormulas?: sObject | null | undefined;
    defaultValues?: sObject | null | undefined;
    errors: Error[];
    success: boolean;
};
export declare type MergeRequest = {
    additionalInformationMap: AdditionalInformationMap[];
    masterRecord: sObject;
    recordToMergeIds: string[];
};
export declare type MergeResult = {
    errors: Error[];
    id?: string | null | undefined;
    mergedRecordIds: string[];
    success: boolean;
    updatedRelatedIds: string[];
};
export declare type ProcessRequest = {
    comments?: string | null | undefined;
    nextApproverIds?: string[] | null | undefined;
};
export declare type ProcessSubmitRequest = ProcessRequest & {
    objectId: string;
    submitterId?: string | null | undefined;
    processDefinitionNameOrId?: string | null | undefined;
    skipEntryCriteria?: boolean | null | undefined;
};
export declare type ProcessWorkitemRequest = ProcessRequest & {
    action: string;
    workitemId: string;
};
export declare type PerformQuickActionRequest = {
    contextId?: string | null | undefined;
    quickActionName: string;
    records?: sObject[] | null | undefined;
};
export declare type DescribeAvailableQuickActionResult = {
    actionEnumOrId: string;
    label: string;
    name: string;
    type: string;
};
export declare type DescribeQuickActionResult = {
    accessLevelRequired?: string | null | undefined;
    actionEnumOrId: string;
    canvasApplicationId?: string | null | undefined;
    canvasApplicationName?: string | null | undefined;
    colors: DescribeColor[];
    contextSobjectType?: string | null | undefined;
    defaultValues?: DescribeQuickActionDefaultValue[] | null | undefined;
    flowDevName?: string | null | undefined;
    flowRecordIdVar?: string | null | undefined;
    height?: number | null | undefined;
    iconName?: string | null | undefined;
    iconUrl?: string | null | undefined;
    icons: DescribeIcon[];
    label: string;
    layout?: DescribeLayoutSection | null | undefined;
    lightningComponentBundleId?: string | null | undefined;
    lightningComponentBundleName?: string | null | undefined;
    lightningComponentQualifiedName?: string | null | undefined;
    miniIconUrl?: string | null | undefined;
    mobileExtensionDisplayMode?: string | null | undefined;
    mobileExtensionId?: string | null | undefined;
    name: string;
    showQuickActionLcHeader: boolean;
    showQuickActionVfHeader: boolean;
    targetParentField?: string | null | undefined;
    targetRecordTypeId?: string | null | undefined;
    targetSobjectType?: string | null | undefined;
    type: string;
    visualforcePageName?: string | null | undefined;
    visualforcePageUrl?: string | null | undefined;
    width?: number | null | undefined;
};
export declare type DescribeQuickActionDefaultValue = {
    defaultValue?: string | null | undefined;
    field: string;
};
export declare type DescribeVisualForceResult = {
    domain: string;
};
export declare type ProcessResult = {
    actorIds: string[];
    entityId?: string | null | undefined;
    errors: Error[];
    instanceId?: string | null | undefined;
    instanceStatus?: string | null | undefined;
    newWorkitemIds?: string[] | null | undefined;
    success: boolean;
};
export declare type DeleteResult = {
    errors?: Error[] | null | undefined;
    id?: string | null | undefined;
    success: boolean;
};
export declare type UndeleteResult = {
    errors: Error[];
    id?: string | null | undefined;
    success: boolean;
};
export declare type DeleteByExampleResult = {
    entity?: sObject | null | undefined;
    errors?: Error[] | null | undefined;
    rowCount: number;
    success: boolean;
};
export declare type EmptyRecycleBinResult = {
    errors: Error[];
    id?: string | null | undefined;
    success: boolean;
};
export declare type LeadConvert = {
    accountId?: string | null | undefined;
    accountRecord?: sObject | null | undefined;
    bypassAccountDedupeCheck?: boolean | null | undefined;
    bypassContactDedupeCheck?: boolean | null | undefined;
    contactId?: string | null | undefined;
    contactRecord?: sObject | null | undefined;
    convertedStatus: string;
    doNotCreateOpportunity: boolean;
    leadId: string;
    opportunityId?: string | null | undefined;
    opportunityName?: string | null | undefined;
    opportunityRecord?: sObject | null | undefined;
    overwriteLeadSource: boolean;
    ownerId?: string | null | undefined;
    sendNotificationEmail: boolean;
};
export declare type LeadConvertResult = {
    accountId?: string | null | undefined;
    contactId?: string | null | undefined;
    errors: Error[];
    leadId?: string | null | undefined;
    opportunityId?: string | null | undefined;
    success: boolean;
};
export declare type DescribeSObjectResult = {
    actionOverrides?: ActionOverride[] | null | undefined;
    activateable: boolean;
    childRelationships: ChildRelationship[];
    compactLayoutable: boolean;
    createable: boolean;
    custom: boolean;
    customSetting: boolean;
    dataTranslationEnabled?: boolean | null | undefined;
    deepCloneable: boolean;
    defaultImplementation?: string | null | undefined;
    deletable: boolean;
    deprecatedAndHidden: boolean;
    feedEnabled: boolean;
    fields?: Field[] | null | undefined;
    hasSubtypes: boolean;
    idEnabled: boolean;
    implementedBy?: string | null | undefined;
    implementsInterfaces?: string | null | undefined;
    isInterface: boolean;
    isSubtype: boolean;
    keyPrefix?: string | null | undefined;
    label: string;
    labelPlural: string;
    layoutable: boolean;
    mergeable: boolean;
    mruEnabled: boolean;
    name: string;
    namedLayoutInfos: NamedLayoutInfo[];
    networkScopeFieldName?: string | null | undefined;
    queryable: boolean;
    recordTypeInfos: RecordTypeInfo[];
    replicateable: boolean;
    retrieveable: boolean;
    searchLayoutable?: boolean | null | undefined;
    searchable: boolean;
    supportedScopes?: ScopeInfo[] | null | undefined;
    triggerable?: boolean | null | undefined;
    undeletable: boolean;
    updateable: boolean;
    urlDetail?: string | null | undefined;
    urlEdit?: string | null | undefined;
    urlNew?: string | null | undefined;
};
export declare type DescribeGlobalSObjectResult = {
    activateable: boolean;
    createable: boolean;
    custom: boolean;
    customSetting: boolean;
    dataTranslationEnabled?: boolean | null | undefined;
    deepCloneable: boolean;
    deletable: boolean;
    deprecatedAndHidden: boolean;
    feedEnabled: boolean;
    hasSubtypes: boolean;
    idEnabled: boolean;
    isInterface: boolean;
    isSubtype: boolean;
    keyPrefix?: string | null | undefined;
    label: string;
    labelPlural: string;
    layoutable: boolean;
    mergeable: boolean;
    mruEnabled: boolean;
    name: string;
    queryable: boolean;
    replicateable: boolean;
    retrieveable: boolean;
    searchable: boolean;
    triggerable: boolean;
    undeletable: boolean;
    updateable: boolean;
};
export declare type ChildRelationship = {
    cascadeDelete: boolean;
    childSObject: string;
    deprecatedAndHidden: boolean;
    field: string;
    junctionIdListNames?: string[] | null | undefined;
    junctionReferenceTo?: string[] | null | undefined;
    relationshipName?: string | null | undefined;
    restrictedDelete?: boolean | null | undefined;
};
export declare type DescribeGlobalResult = {
    encoding?: string | null | undefined;
    maxBatchSize: number;
    sobjects: DescribeGlobalSObjectResult[];
};
export declare type DescribeGlobalTheme = {
    global: DescribeGlobalResult;
    theme: DescribeThemeResult;
};
export declare type ScopeInfo = {
    label: string;
    name: string;
};
export declare type StringList = {
    values: string[];
};
export declare type ChangeEventHeader = {
    entityName: string;
    recordIds: string[];
    commitTimestamp: number;
    commitNumber: number;
    commitUser: string;
    diffFields: string[];
    changeType: string;
    changeOrigin: string;
    transactionKey: string;
    sequenceNumber: number;
    nulledFields: string[];
    changedFields: string[];
};
export declare type FilteredLookupInfo = {
    controllingFields: string[];
    dependent: boolean;
    optionalFilter: boolean;
};
export declare type Field = {
    aggregatable: boolean;
    aiPredictionField: boolean;
    autoNumber: boolean;
    byteLength: number;
    calculated: boolean;
    calculatedFormula?: string | null | undefined;
    cascadeDelete?: boolean | null | undefined;
    caseSensitive: boolean;
    compoundFieldName?: string | null | undefined;
    controllerName?: string | null | undefined;
    createable: boolean;
    custom: boolean;
    dataTranslationEnabled?: boolean | null | undefined;
    defaultValue?: any | null | undefined;
    defaultValueFormula?: string | null | undefined;
    defaultedOnCreate: boolean;
    dependentPicklist?: boolean | null | undefined;
    deprecatedAndHidden: boolean;
    digits: number;
    displayLocationInDecimal?: boolean | null | undefined;
    encrypted?: boolean | null | undefined;
    externalId?: boolean | null | undefined;
    extraTypeInfo?: string | null | undefined;
    filterable: boolean;
    filteredLookupInfo?: FilteredLookupInfo | null | undefined;
    formulaTreatNullNumberAsZero?: boolean | null | undefined;
    groupable: boolean;
    highScaleNumber?: boolean | null | undefined;
    htmlFormatted?: boolean | null | undefined;
    idLookup: boolean;
    inlineHelpText?: string | null | undefined;
    label: string;
    length: number;
    mask?: string | null | undefined;
    maskType?: string | null | undefined;
    name: string;
    nameField: boolean;
    namePointing?: boolean | null | undefined;
    nillable: boolean;
    permissionable: boolean;
    picklistValues?: PicklistEntry[] | null | undefined;
    polymorphicForeignKey: boolean;
    precision: number;
    queryByDistance: boolean;
    referenceTargetField?: string | null | undefined;
    referenceTo?: string[] | null | undefined;
    relationshipName?: string | null | undefined;
    relationshipOrder?: number | null | undefined;
    restrictedDelete?: boolean | null | undefined;
    restrictedPicklist: boolean;
    scale: number;
    searchPrefilterable: boolean;
    soapType: string;
    sortable?: boolean | null | undefined;
    type: string;
    unique: boolean;
    updateable: boolean;
    writeRequiresMasterRead?: boolean | null | undefined;
};
export declare type PicklistEntry = {
    active: boolean;
    defaultValue: boolean;
    label?: string | null | undefined;
    validFor?: string | null | undefined;
    value: string;
};
export declare type DescribeDataCategoryGroupResult = {
    categoryCount: number;
    description: string;
    label: string;
    name: string;
    sobject: string;
};
export declare type DescribeDataCategoryGroupStructureResult = {
    description: string;
    label: string;
    name: string;
    sobject: string;
    topCategories: DataCategory[];
};
export declare type DataCategoryGroupSobjectTypePair = {
    dataCategoryGroupName: string;
    sobject: string;
};
export declare type DataCategory = {
    childCategories: DataCategory[];
    label: string;
    name: string;
};
export declare type DescribeDataCategoryMappingResult = {
    dataCategoryGroupId: string;
    dataCategoryGroupLabel: string;
    dataCategoryGroupName: string;
    dataCategoryId: string;
    dataCategoryLabel: string;
    dataCategoryName: string;
    id: string;
    mappedEntity: string;
    mappedField: string;
};
export declare type KnowledgeSettings = {
    defaultLanguage?: string | null | undefined;
    knowledgeEnabled: boolean;
    languages: KnowledgeLanguageItem[];
};
export declare type KnowledgeLanguageItem = {
    active: boolean;
    assigneeId?: string | null | undefined;
    name: string;
};
export declare type FieldDiff = {
    difference: string;
    name: string;
};
export declare type AdditionalInformationMap = {
    name: string;
    value: string;
};
export declare type MatchRecord = {
    additionalInformation: AdditionalInformationMap[];
    fieldDiffs: FieldDiff[];
    matchConfidence: number;
    record: sObject;
};
export declare type MatchResult = {
    entityType: string;
    errors: Error[];
    matchEngine: string;
    matchRecords: MatchRecord[];
    rule: string;
    size: number;
    success: boolean;
};
export declare type DuplicateResult = {
    allowSave: boolean;
    duplicateRule: string;
    duplicateRuleEntityType: string;
    errorMessage?: string | null | undefined;
    matchResults: MatchResult[];
};
export declare type DuplicateError = Error & {
    duplicateResult: DuplicateResult;
};
export declare type DescribeNounResult = {
    caseValues: NameCaseValue[];
    developerName: string;
    gender?: string | null | undefined;
    name: string;
    pluralAlias?: string | null | undefined;
    startsWith?: string | null | undefined;
};
export declare type NameCaseValue = {
    article?: string | null | undefined;
    caseType?: string | null | undefined;
    number?: string | null | undefined;
    possessive?: string | null | undefined;
    value?: string | null | undefined;
};
export declare type FindDuplicatesResult = {
    duplicateResults: DuplicateResult[];
    errors: Error[];
    success: boolean;
};
export declare type DescribeAppMenuResult = {
    appMenuItems: DescribeAppMenuItem[];
};
export declare type DescribeAppMenuItem = {
    colors: DescribeColor[];
    content: string;
    icons: DescribeIcon[];
    label: string;
    name: string;
    type: string;
    url: string;
};
export declare type DescribeThemeResult = {
    themeItems: DescribeThemeItem[];
};
export declare type DescribeThemeItem = {
    colors: DescribeColor[];
    icons: DescribeIcon[];
    name: string;
};
export declare type DescribeSoftphoneLayoutResult = {
    callTypes: DescribeSoftphoneLayoutCallType[];
    id: string;
    name: string;
};
export declare type DescribeSoftphoneLayoutCallType = {
    infoFields: DescribeSoftphoneLayoutInfoField[];
    name: string;
    screenPopOptions: DescribeSoftphoneScreenPopOption[];
    screenPopsOpenWithin?: string | null | undefined;
    sections: DescribeSoftphoneLayoutSection[];
};
export declare type DescribeSoftphoneScreenPopOption = {
    matchType: string;
    screenPopData: string;
    screenPopType: string;
};
export declare type DescribeSoftphoneLayoutInfoField = {
    name: string;
};
export declare type DescribeSoftphoneLayoutSection = {
    entityApiName: string;
    items: DescribeSoftphoneLayoutItem[];
};
export declare type DescribeSoftphoneLayoutItem = {
    itemApiName: string;
};
export declare type DescribeCompactLayoutsResult = {
    compactLayouts: DescribeCompactLayout[];
    defaultCompactLayoutId: string;
    recordTypeCompactLayoutMappings: RecordTypeCompactLayoutMapping[];
};
export declare type DescribeCompactLayout = {
    actions: DescribeLayoutButton[];
    fieldItems: DescribeLayoutItem[];
    id: string;
    imageItems: DescribeLayoutItem[];
    label: string;
    name: string;
    objectType: string;
};
export declare type RecordTypeCompactLayoutMapping = {
    available: boolean;
    compactLayoutId?: string | null | undefined;
    compactLayoutName: string;
    recordTypeId: string;
    recordTypeName: string;
};
export declare type DescribePathAssistantsResult = {
    pathAssistants: DescribePathAssistant[];
};
export declare type DescribePathAssistant = {
    active: boolean;
    animationRule?: DescribeAnimationRule[] | null | undefined;
    apiName: string;
    label: string;
    pathPicklistField: string;
    picklistsForRecordType?: PicklistForRecordType[] | null | undefined;
    recordTypeId?: string | null | undefined;
    steps: DescribePathAssistantStep[];
};
export declare type DescribePathAssistantStep = {
    closed: boolean;
    converted: boolean;
    fields: DescribePathAssistantField[];
    info?: string | null | undefined;
    layoutSection?: DescribeLayoutSection | null | undefined;
    picklistLabel: string;
    picklistValue: string;
    won: boolean;
};
export declare type DescribePathAssistantField = {
    apiName: string;
    label: string;
    readOnly: boolean;
    required: boolean;
};
export declare type DescribeAnimationRule = {
    animationFrequency: string;
    isActive: boolean;
    recordTypeContext: string;
    recordTypeId?: string | null | undefined;
    targetField: string;
    targetFieldChangeToValues: string;
};
export declare type DescribeApprovalLayoutResult = {
    approvalLayouts: DescribeApprovalLayout[];
};
export declare type DescribeApprovalLayout = {
    id: string;
    label: string;
    layoutItems: DescribeLayoutItem[];
    name: string;
};
export declare type DescribeLayoutResult = {
    layouts: DescribeLayout[];
    recordTypeMappings: RecordTypeMapping[];
    recordTypeSelectorRequired: boolean;
};
export declare type DescribeLayout = {
    buttonLayoutSection?: DescribeLayoutButtonSection | null | undefined;
    detailLayoutSections: DescribeLayoutSection[];
    editLayoutSections: DescribeLayoutSection[];
    feedView?: DescribeLayoutFeedView | null | undefined;
    highlightsPanelLayoutSection?: DescribeLayoutSection | null | undefined;
    id?: string | null | undefined;
    quickActionList?: DescribeQuickActionListResult | null | undefined;
    relatedContent?: RelatedContent | null | undefined;
    relatedLists: RelatedList[];
    saveOptions: DescribeLayoutSaveOption[];
};
export declare type DescribeQuickActionListResult = {
    quickActionListItems: DescribeQuickActionListItemResult[];
};
export declare type DescribeQuickActionListItemResult = {
    accessLevelRequired?: string | null | undefined;
    colors: DescribeColor[];
    iconUrl?: string | null | undefined;
    icons: DescribeIcon[];
    label: string;
    miniIconUrl: string;
    quickActionName: string;
    targetSobjectType?: string | null | undefined;
    type: string;
};
export declare type DescribeLayoutFeedView = {
    feedFilters: DescribeLayoutFeedFilter[];
};
export declare type DescribeLayoutFeedFilter = {
    label: string;
    name: string;
    type: string;
};
export declare type DescribeLayoutSaveOption = {
    defaultValue: boolean;
    isDisplayed: boolean;
    label: string;
    name: string;
    restHeaderName: string;
    soapHeaderName: string;
};
export declare type DescribeLayoutSection = {
    collapsed: boolean;
    columns: number;
    heading?: string | null | undefined;
    layoutRows: DescribeLayoutRow[];
    layoutSectionId?: string | null | undefined;
    parentLayoutId: string;
    rows: number;
    tabOrder: string;
    useCollapsibleSection: boolean;
    useHeading: boolean;
};
export declare type DescribeLayoutButtonSection = {
    detailButtons: DescribeLayoutButton[];
};
export declare type DescribeLayoutRow = {
    layoutItems: DescribeLayoutItem[];
    numItems: number;
};
export declare type DescribeLayoutItem = {
    editableForNew: boolean;
    editableForUpdate: boolean;
    label?: string | null | undefined;
    layoutComponents: DescribeLayoutComponent[];
    placeholder: boolean;
    required: boolean;
};
export declare type DescribeLayoutButton = {
    behavior?: string | null | undefined;
    colors: DescribeColor[];
    content?: string | null | undefined;
    contentSource?: string | null | undefined;
    custom: boolean;
    encoding?: string | null | undefined;
    height?: number | null | undefined;
    icons: DescribeIcon[];
    label?: string | null | undefined;
    menubar?: boolean | null | undefined;
    name?: string | null | undefined;
    overridden: boolean;
    resizeable?: boolean | null | undefined;
    scrollbars?: boolean | null | undefined;
    showsLocation?: boolean | null | undefined;
    showsStatus?: boolean | null | undefined;
    toolbar?: boolean | null | undefined;
    url?: string | null | undefined;
    width?: number | null | undefined;
    windowPosition?: string | null | undefined;
};
export declare type DescribeLayoutComponent = {
    displayLines: number;
    tabOrder: number;
    type: string;
    value?: string | null | undefined;
};
export declare type FieldComponent = DescribeLayoutComponent & {
    field: Field;
};
export declare type FieldLayoutComponent = DescribeLayoutComponent & {
    components: DescribeLayoutComponent[];
    fieldType: string;
};
export declare type VisualforcePage = DescribeLayoutComponent & {
    showLabel: boolean;
    showScrollbars: boolean;
    suggestedHeight: string;
    suggestedWidth: string;
    url: string;
};
export declare type Canvas = DescribeLayoutComponent & {
    displayLocation: string;
    referenceId: string;
    showLabel: boolean;
    showScrollbars: boolean;
    suggestedHeight: string;
    suggestedWidth: string;
};
export declare type ReportChartComponent = DescribeLayoutComponent & {
    cacheData: boolean;
    contextFilterableField: string;
    error: string;
    hideOnError: boolean;
    includeContext: boolean;
    showTitle: boolean;
    size: string;
};
export declare type AnalyticsCloudComponent = DescribeLayoutComponent & {
    error: string;
    filter: string;
    height: string;
    hideOnError: boolean;
    showSharing: boolean;
    showTitle: boolean;
    width: string;
};
export declare type CustomLinkComponent = DescribeLayoutComponent & {
    customLink: DescribeLayoutButton;
};
export declare type NamedLayoutInfo = {
    name: string;
};
export declare type RecordTypeInfo = {
    active: boolean;
    available: boolean;
    defaultRecordTypeMapping: boolean;
    developerName: string;
    master: boolean;
    name: string;
    recordTypeId?: string | null | undefined;
};
export declare type RecordTypeMapping = {
    active: boolean;
    available: boolean;
    defaultRecordTypeMapping: boolean;
    developerName: string;
    layoutId: string;
    master: boolean;
    name: string;
    picklistsForRecordType?: PicklistForRecordType[] | null | undefined;
    recordTypeId?: string | null | undefined;
};
export declare type PicklistForRecordType = {
    picklistName: string;
    picklistValues?: PicklistEntry[] | null | undefined;
};
export declare type RelatedContent = {
    relatedContentItems: DescribeRelatedContentItem[];
};
export declare type DescribeRelatedContentItem = {
    describeLayoutItem: DescribeLayoutItem;
};
export declare type RelatedList = {
    accessLevelRequiredForCreate?: string | null | undefined;
    buttons?: DescribeLayoutButton[] | null | undefined;
    columns: RelatedListColumn[];
    custom: boolean;
    field?: string | null | undefined;
    label: string;
    limitRows: number;
    name: string;
    sobject?: string | null | undefined;
    sort: RelatedListSort[];
};
export declare type RelatedListColumn = {
    field?: string | null | undefined;
    fieldApiName: string;
    format?: string | null | undefined;
    label: string;
    lookupId?: string | null | undefined;
    name: string;
    sortable: boolean;
};
export declare type RelatedListSort = {
    ascending: boolean;
    column: string;
};
export declare type EmailFileAttachment = {
    body?: string | null | undefined;
    contentType?: string | null | undefined;
    fileName: string;
    id?: string | null | undefined;
    inline?: boolean | null | undefined;
};
export declare type Email = {
    bccSender?: boolean | null | undefined;
    emailPriority?: string | null | undefined;
    replyTo?: string | null | undefined;
    saveAsActivity?: boolean | null | undefined;
    senderDisplayName?: string | null | undefined;
    subject?: string | null | undefined;
    useSignature?: boolean | null | undefined;
};
export declare type MassEmailMessage = Email & {
    description?: string | null | undefined;
    targetObjectIds?: string | null | undefined;
    templateId: string;
    whatIds?: string | null | undefined;
};
export declare type SingleEmailMessage = Email & {
    bccAddresses?: string | null | undefined;
    ccAddresses?: string | null | undefined;
    charset?: string | null | undefined;
    documentAttachments: string[];
    entityAttachments: string[];
    fileAttachments: EmailFileAttachment[];
    htmlBody?: string | null | undefined;
    inReplyTo?: string | null | undefined;
    optOutPolicy?: string | null | undefined;
    orgWideEmailAddressId?: string | null | undefined;
    plainTextBody?: string | null | undefined;
    references?: string | null | undefined;
    targetObjectId?: string | null | undefined;
    templateId?: string | null | undefined;
    templateName?: string | null | undefined;
    toAddresses?: string | null | undefined;
    treatBodiesAsTemplate?: boolean | null | undefined;
    treatTargetObjectAsRecipient?: boolean | null | undefined;
    whatId?: string | null | undefined;
};
export declare type SendEmailResult = {
    errors: SendEmailError[];
    success: boolean;
};
export declare type ListViewColumn = {
    ascendingLabel?: string | null | undefined;
    descendingLabel?: string | null | undefined;
    fieldNameOrPath: string;
    hidden: boolean;
    label: string;
    searchable: boolean;
    selectListItem: string;
    sortDirection?: string | null | undefined;
    sortIndex?: number | null | undefined;
    sortable: boolean;
    type: string;
};
export declare type ListViewOrderBy = {
    fieldNameOrPath: string;
    nullsPosition?: string | null | undefined;
    sortDirection?: string | null | undefined;
};
export declare type DescribeSoqlListView = {
    columns: ListViewColumn[];
    id: string;
    orderBy: ListViewOrderBy[];
    query: string;
    relatedEntityId?: string | null | undefined;
    scope?: string | null | undefined;
    scopeEntityId?: string | null | undefined;
    sobjectType: string;
    whereCondition?: SoqlWhereCondition | null | undefined;
};
export declare type DescribeSoqlListViewsRequest = {
    listViewParams: DescribeSoqlListViewParams[];
};
export declare type DescribeSoqlListViewParams = {
    developerNameOrId: string;
    sobjectType?: string | null | undefined;
};
export declare type DescribeSoqlListViewResult = {
    describeSoqlListViews: DescribeSoqlListView[];
};
export declare type ExecuteListViewRequest = {
    developerNameOrId: string;
    limit?: number | null | undefined;
    offset?: number | null | undefined;
    orderBy: ListViewOrderBy[];
    sobjectType: string;
};
export declare type ExecuteListViewResult = {
    columns: ListViewColumn[];
    developerName: string;
    done: boolean;
    id: string;
    label: string;
    records: ListViewRecord[];
    size: number;
};
export declare type ListViewRecord = {
    columns: ListViewRecordColumn[];
};
export declare type ListViewRecordColumn = {
    fieldNameOrPath: string;
    value?: string | null | undefined;
};
export declare type SoqlWhereCondition = {};
export declare type SoqlCondition = SoqlWhereCondition & {
    field: string;
    operator: string;
    values: string[];
};
export declare type SoqlNotCondition = SoqlWhereCondition & {
    condition: SoqlWhereCondition;
};
export declare type SoqlConditionGroup = SoqlWhereCondition & {
    conditions: SoqlWhereCondition[];
    conjunction: string;
};
export declare type SoqlSubQueryCondition = SoqlWhereCondition & {
    field: string;
    operator: string;
    subQuery: string;
};
export declare type DescribeSearchLayoutResult = {
    errorMsg?: string | null | undefined;
    label?: string | null | undefined;
    limitRows?: number | null | undefined;
    objectType: string;
    searchColumns?: DescribeColumn[] | null | undefined;
};
export declare type DescribeColumn = {
    field: string;
    format?: string | null | undefined;
    label: string;
    name: string;
};
export declare type DescribeSearchScopeOrderResult = {
    keyPrefix: string;
    name: string;
};
export declare type DescribeSearchableEntityResult = {
    label: string;
    name: string;
    pluralLabel: string;
};
export declare type DescribeTabSetResult = {
    description: string;
    label: string;
    logoUrl: string;
    namespace?: string | null | undefined;
    selected: boolean;
    tabSetId: string;
    tabs: DescribeTab[];
};
export declare type DescribeTab = {
    colors: DescribeColor[];
    custom: boolean;
    iconUrl: string;
    icons: DescribeIcon[];
    label: string;
    miniIconUrl: string;
    name: string;
    sobjectName?: string | null | undefined;
    url: string;
};
export declare type DescribeColor = {
    color: string;
    context: string;
    theme: string;
};
export declare type DescribeIcon = {
    contentType: string;
    height?: number | null | undefined;
    theme: string;
    url: string;
    width?: number | null | undefined;
};
export declare type ActionOverride = {
    formFactor: string;
    isAvailableInTouch: boolean;
    name: string;
    pageId: string;
    url?: string | null | undefined;
};
export declare type RenderEmailTemplateRequest = {
    escapeHtmlInMergeFields?: boolean | null | undefined;
    templateBodies: string;
    whatId?: string | null | undefined;
    whoId?: string | null | undefined;
};
export declare type RenderEmailTemplateBodyResult = {
    errors: RenderEmailTemplateError[];
    mergedBody?: string | null | undefined;
    success: boolean;
};
export declare type RenderEmailTemplateResult = {
    bodyResults?: RenderEmailTemplateBodyResult | null | undefined;
    errors: Error[];
    success: boolean;
};
export declare type RenderStoredEmailTemplateRequest = {
    attachmentRetrievalOption?: string | null | undefined;
    templateId: string;
    updateTemplateUsage?: boolean | null | undefined;
    whatId?: string | null | undefined;
    whoId?: string | null | undefined;
};
export declare type RenderStoredEmailTemplateResult = {
    errors: Error[];
    renderedEmail?: SingleEmailMessage | null | undefined;
    success: boolean;
};
export declare type LimitInfo = {
    current: number;
    limit: number;
    type: string;
};
export declare type OwnerChangeOption = {
    type: string;
    execute: boolean;
};
export declare type ApiFault = {
    exceptionCode: string;
    exceptionMessage: string;
    extendedErrorDetails?: ExtendedErrorDetails[] | null | undefined;
};
export declare type ApiQueryFault = ApiFault & {
    row: number;
    column: number;
};
export declare type LoginFault = ApiFault & {};
export declare type InvalidQueryLocatorFault = ApiFault & {};
export declare type InvalidNewPasswordFault = ApiFault & {};
export declare type InvalidOldPasswordFault = ApiFault & {};
export declare type InvalidIdFault = ApiFault & {};
export declare type UnexpectedErrorFault = ApiFault & {};
export declare type InvalidFieldFault = ApiQueryFault & {};
export declare type InvalidSObjectFault = ApiQueryFault & {};
export declare type MalformedQueryFault = ApiQueryFault & {};
export declare type MalformedSearchFault = ApiQueryFault & {};
export declare type ApiSchemaTypes = {
    sObject: sObject;
    address: address;
    location: location;
    QueryResult: QueryResult;
    SearchResult: SearchResult;
    SearchRecord: SearchRecord;
    SearchRecordMetadata: SearchRecordMetadata;
    SearchSnippet: SearchSnippet;
    SearchResultsMetadata: SearchResultsMetadata;
    LabelsSearchMetadata: LabelsSearchMetadata;
    EntitySearchMetadata: EntitySearchMetadata;
    FieldLevelSearchMetadata: FieldLevelSearchMetadata;
    EntitySpellCorrectionMetadata: EntitySpellCorrectionMetadata;
    EntitySearchPromotionMetadata: EntitySearchPromotionMetadata;
    EntityIntentQueryMetadata: EntityIntentQueryMetadata;
    EntityErrorMetadata: EntityErrorMetadata;
    RelationshipReferenceTo: RelationshipReferenceTo;
    RecordTypesSupported: RecordTypesSupported;
    JunctionIdListNames: JunctionIdListNames;
    SearchLayoutButtonsDisplayed: SearchLayoutButtonsDisplayed;
    SearchLayoutButton: SearchLayoutButton;
    SearchLayoutFieldsDisplayed: SearchLayoutFieldsDisplayed;
    SearchLayoutField: SearchLayoutField;
    NameValuePair: NameValuePair;
    NameObjectValuePair: NameObjectValuePair;
    GetUpdatedResult: GetUpdatedResult;
    GetDeletedResult: GetDeletedResult;
    DeletedRecord: DeletedRecord;
    GetServerTimestampResult: GetServerTimestampResult;
    InvalidateSessionsResult: InvalidateSessionsResult;
    SetPasswordResult: SetPasswordResult;
    ChangeOwnPasswordResult: ChangeOwnPasswordResult;
    ResetPasswordResult: ResetPasswordResult;
    GetUserInfoResult: GetUserInfoResult;
    LoginResult: LoginResult;
    ExtendedErrorDetails: ExtendedErrorDetails;
    Error: Error;
    SendEmailError: SendEmailError;
    SaveResult: SaveResult;
    RenderEmailTemplateError: RenderEmailTemplateError;
    UpsertResult: UpsertResult;
    PerformQuickActionResult: PerformQuickActionResult;
    QuickActionTemplateResult: QuickActionTemplateResult;
    MergeRequest: MergeRequest;
    MergeResult: MergeResult;
    ProcessRequest: ProcessRequest;
    ProcessSubmitRequest: ProcessSubmitRequest;
    ProcessWorkitemRequest: ProcessWorkitemRequest;
    PerformQuickActionRequest: PerformQuickActionRequest;
    DescribeAvailableQuickActionResult: DescribeAvailableQuickActionResult;
    DescribeQuickActionResult: DescribeQuickActionResult;
    DescribeQuickActionDefaultValue: DescribeQuickActionDefaultValue;
    DescribeVisualForceResult: DescribeVisualForceResult;
    ProcessResult: ProcessResult;
    DeleteResult: DeleteResult;
    UndeleteResult: UndeleteResult;
    DeleteByExampleResult: DeleteByExampleResult;
    EmptyRecycleBinResult: EmptyRecycleBinResult;
    LeadConvert: LeadConvert;
    LeadConvertResult: LeadConvertResult;
    DescribeSObjectResult: DescribeSObjectResult;
    DescribeGlobalSObjectResult: DescribeGlobalSObjectResult;
    ChildRelationship: ChildRelationship;
    DescribeGlobalResult: DescribeGlobalResult;
    DescribeGlobalTheme: DescribeGlobalTheme;
    ScopeInfo: ScopeInfo;
    StringList: StringList;
    ChangeEventHeader: ChangeEventHeader;
    FilteredLookupInfo: FilteredLookupInfo;
    Field: Field;
    PicklistEntry: PicklistEntry;
    DescribeDataCategoryGroupResult: DescribeDataCategoryGroupResult;
    DescribeDataCategoryGroupStructureResult: DescribeDataCategoryGroupStructureResult;
    DataCategoryGroupSobjectTypePair: DataCategoryGroupSobjectTypePair;
    DataCategory: DataCategory;
    DescribeDataCategoryMappingResult: DescribeDataCategoryMappingResult;
    KnowledgeSettings: KnowledgeSettings;
    KnowledgeLanguageItem: KnowledgeLanguageItem;
    FieldDiff: FieldDiff;
    AdditionalInformationMap: AdditionalInformationMap;
    MatchRecord: MatchRecord;
    MatchResult: MatchResult;
    DuplicateResult: DuplicateResult;
    DuplicateError: DuplicateError;
    DescribeNounResult: DescribeNounResult;
    NameCaseValue: NameCaseValue;
    FindDuplicatesResult: FindDuplicatesResult;
    DescribeAppMenuResult: DescribeAppMenuResult;
    DescribeAppMenuItem: DescribeAppMenuItem;
    DescribeThemeResult: DescribeThemeResult;
    DescribeThemeItem: DescribeThemeItem;
    DescribeSoftphoneLayoutResult: DescribeSoftphoneLayoutResult;
    DescribeSoftphoneLayoutCallType: DescribeSoftphoneLayoutCallType;
    DescribeSoftphoneScreenPopOption: DescribeSoftphoneScreenPopOption;
    DescribeSoftphoneLayoutInfoField: DescribeSoftphoneLayoutInfoField;
    DescribeSoftphoneLayoutSection: DescribeSoftphoneLayoutSection;
    DescribeSoftphoneLayoutItem: DescribeSoftphoneLayoutItem;
    DescribeCompactLayoutsResult: DescribeCompactLayoutsResult;
    DescribeCompactLayout: DescribeCompactLayout;
    RecordTypeCompactLayoutMapping: RecordTypeCompactLayoutMapping;
    DescribePathAssistantsResult: DescribePathAssistantsResult;
    DescribePathAssistant: DescribePathAssistant;
    DescribePathAssistantStep: DescribePathAssistantStep;
    DescribePathAssistantField: DescribePathAssistantField;
    DescribeAnimationRule: DescribeAnimationRule;
    DescribeApprovalLayoutResult: DescribeApprovalLayoutResult;
    DescribeApprovalLayout: DescribeApprovalLayout;
    DescribeLayoutResult: DescribeLayoutResult;
    DescribeLayout: DescribeLayout;
    DescribeQuickActionListResult: DescribeQuickActionListResult;
    DescribeQuickActionListItemResult: DescribeQuickActionListItemResult;
    DescribeLayoutFeedView: DescribeLayoutFeedView;
    DescribeLayoutFeedFilter: DescribeLayoutFeedFilter;
    DescribeLayoutSaveOption: DescribeLayoutSaveOption;
    DescribeLayoutSection: DescribeLayoutSection;
    DescribeLayoutButtonSection: DescribeLayoutButtonSection;
    DescribeLayoutRow: DescribeLayoutRow;
    DescribeLayoutItem: DescribeLayoutItem;
    DescribeLayoutButton: DescribeLayoutButton;
    DescribeLayoutComponent: DescribeLayoutComponent;
    FieldComponent: FieldComponent;
    FieldLayoutComponent: FieldLayoutComponent;
    VisualforcePage: VisualforcePage;
    Canvas: Canvas;
    ReportChartComponent: ReportChartComponent;
    AnalyticsCloudComponent: AnalyticsCloudComponent;
    CustomLinkComponent: CustomLinkComponent;
    NamedLayoutInfo: NamedLayoutInfo;
    RecordTypeInfo: RecordTypeInfo;
    RecordTypeMapping: RecordTypeMapping;
    PicklistForRecordType: PicklistForRecordType;
    RelatedContent: RelatedContent;
    DescribeRelatedContentItem: DescribeRelatedContentItem;
    RelatedList: RelatedList;
    RelatedListColumn: RelatedListColumn;
    RelatedListSort: RelatedListSort;
    EmailFileAttachment: EmailFileAttachment;
    Email: Email;
    MassEmailMessage: MassEmailMessage;
    SingleEmailMessage: SingleEmailMessage;
    SendEmailResult: SendEmailResult;
    ListViewColumn: ListViewColumn;
    ListViewOrderBy: ListViewOrderBy;
    DescribeSoqlListView: DescribeSoqlListView;
    DescribeSoqlListViewsRequest: DescribeSoqlListViewsRequest;
    DescribeSoqlListViewParams: DescribeSoqlListViewParams;
    DescribeSoqlListViewResult: DescribeSoqlListViewResult;
    ExecuteListViewRequest: ExecuteListViewRequest;
    ExecuteListViewResult: ExecuteListViewResult;
    ListViewRecord: ListViewRecord;
    ListViewRecordColumn: ListViewRecordColumn;
    SoqlWhereCondition: SoqlWhereCondition;
    SoqlCondition: SoqlCondition;
    SoqlNotCondition: SoqlNotCondition;
    SoqlConditionGroup: SoqlConditionGroup;
    SoqlSubQueryCondition: SoqlSubQueryCondition;
    DescribeSearchLayoutResult: DescribeSearchLayoutResult;
    DescribeColumn: DescribeColumn;
    DescribeSearchScopeOrderResult: DescribeSearchScopeOrderResult;
    DescribeSearchableEntityResult: DescribeSearchableEntityResult;
    DescribeTabSetResult: DescribeTabSetResult;
    DescribeTab: DescribeTab;
    DescribeColor: DescribeColor;
    DescribeIcon: DescribeIcon;
    ActionOverride: ActionOverride;
    RenderEmailTemplateRequest: RenderEmailTemplateRequest;
    RenderEmailTemplateBodyResult: RenderEmailTemplateBodyResult;
    RenderEmailTemplateResult: RenderEmailTemplateResult;
    RenderStoredEmailTemplateRequest: RenderStoredEmailTemplateRequest;
    RenderStoredEmailTemplateResult: RenderStoredEmailTemplateResult;
    LimitInfo: LimitInfo;
    OwnerChangeOption: OwnerChangeOption;
    ApiFault: ApiFault;
    ApiQueryFault: ApiQueryFault;
    LoginFault: LoginFault;
    InvalidQueryLocatorFault: InvalidQueryLocatorFault;
    InvalidNewPasswordFault: InvalidNewPasswordFault;
    InvalidOldPasswordFault: InvalidOldPasswordFault;
    InvalidIdFault: InvalidIdFault;
    UnexpectedErrorFault: UnexpectedErrorFault;
    InvalidFieldFault: InvalidFieldFault;
    InvalidSObjectFault: InvalidSObjectFault;
    MalformedQueryFault: MalformedQueryFault;
    MalformedSearchFault: MalformedSearchFault;
};
