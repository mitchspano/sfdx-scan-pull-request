/**
 * This file is generated from WSDL file by wsdl2schema.ts.
 * Do not modify directly.
 * To generate the file, run "ts-node path/to/wsdl2schema.ts path/to/wsdl.xml path/to/schema.ts"
 */
export declare const ApiSchemas: {
    readonly CancelDeployResult: {
        readonly type: "CancelDeployResult";
        readonly props: {
            readonly done: "boolean";
            readonly id: "string";
        };
    };
    readonly DeployResult: {
        readonly type: "DeployResult";
        readonly props: {
            readonly canceledBy: "?string";
            readonly canceledByName: "?string";
            readonly checkOnly: "boolean";
            readonly completedDate: "?string";
            readonly createdBy: "string";
            readonly createdByName: "string";
            readonly createdDate: "string";
            readonly details: "DeployDetails";
            readonly done: "boolean";
            readonly errorMessage: "?string";
            readonly errorStatusCode: "?string";
            readonly id: "string";
            readonly ignoreWarnings: "boolean";
            readonly lastModifiedDate: "?string";
            readonly numberComponentErrors: "number";
            readonly numberComponentsDeployed: "number";
            readonly numberComponentsTotal: "number";
            readonly numberTestErrors: "number";
            readonly numberTestsCompleted: "number";
            readonly numberTestsTotal: "number";
            readonly rollbackOnError: "boolean";
            readonly runTestsEnabled: "boolean";
            readonly startDate: "?string";
            readonly stateDetail: "?string";
            readonly status: "string";
            readonly success: "boolean";
        };
    };
    readonly DeployDetails: {
        readonly type: "DeployDetails";
        readonly props: {
            readonly componentFailures: readonly ["DeployMessage"];
            readonly componentSuccesses: readonly ["DeployMessage"];
            readonly retrieveResult: "?RetrieveResult";
            readonly runTestResult: "?RunTestsResult";
        };
    };
    readonly DeployMessage: {
        readonly type: "DeployMessage";
        readonly props: {
            readonly changed: "boolean";
            readonly columnNumber: "?number";
            readonly componentType: "?string";
            readonly created: "boolean";
            readonly createdDate: "string";
            readonly deleted: "boolean";
            readonly fileName: "string";
            readonly fullName: "string";
            readonly id: "?string";
            readonly lineNumber: "?number";
            readonly problem: "?string";
            readonly problemType: "?string";
            readonly success: "boolean";
        };
    };
    readonly RetrieveResult: {
        readonly type: "RetrieveResult";
        readonly props: {
            readonly done: "boolean";
            readonly errorMessage: "?string";
            readonly errorStatusCode: "?string";
            readonly fileProperties: readonly ["FileProperties"];
            readonly id: "string";
            readonly messages: readonly ["RetrieveMessage"];
            readonly status: "string";
            readonly success: "boolean";
            readonly zipFile: "string";
        };
    };
    readonly FileProperties: {
        readonly type: "FileProperties";
        readonly props: {
            readonly createdById: "string";
            readonly createdByName: "string";
            readonly createdDate: "string";
            readonly fileName: "string";
            readonly fullName: "string";
            readonly id: "string";
            readonly lastModifiedById: "string";
            readonly lastModifiedByName: "string";
            readonly lastModifiedDate: "string";
            readonly manageableState: "?string";
            readonly namespacePrefix: "?string";
            readonly type: "string";
        };
    };
    readonly RetrieveMessage: {
        readonly type: "RetrieveMessage";
        readonly props: {
            readonly fileName: "string";
            readonly problem: "string";
        };
    };
    readonly RunTestsResult: {
        readonly type: "RunTestsResult";
        readonly props: {
            readonly apexLogId: "?string";
            readonly codeCoverage: readonly ["CodeCoverageResult"];
            readonly codeCoverageWarnings: readonly ["CodeCoverageWarning"];
            readonly failures: readonly ["RunTestFailure"];
            readonly flowCoverage: readonly ["FlowCoverageResult"];
            readonly flowCoverageWarnings: readonly ["FlowCoverageWarning"];
            readonly numFailures: "number";
            readonly numTestsRun: "number";
            readonly successes: readonly ["RunTestSuccess"];
            readonly totalTime: "number";
        };
    };
    readonly CodeCoverageResult: {
        readonly type: "CodeCoverageResult";
        readonly props: {
            readonly dmlInfo: readonly ["CodeLocation"];
            readonly id: "string";
            readonly locationsNotCovered: readonly ["CodeLocation"];
            readonly methodInfo: readonly ["CodeLocation"];
            readonly name: "string";
            readonly namespace: "?string";
            readonly numLocations: "number";
            readonly numLocationsNotCovered: "number";
            readonly soqlInfo: readonly ["CodeLocation"];
            readonly soslInfo: readonly ["CodeLocation"];
            readonly type: "string";
        };
    };
    readonly CodeLocation: {
        readonly type: "CodeLocation";
        readonly props: {
            readonly column: "number";
            readonly line: "number";
            readonly numExecutions: "number";
            readonly time: "number";
        };
    };
    readonly CodeCoverageWarning: {
        readonly type: "CodeCoverageWarning";
        readonly props: {
            readonly id: "string";
            readonly message: "string";
            readonly name: "?string";
            readonly namespace: "?string";
        };
    };
    readonly RunTestFailure: {
        readonly type: "RunTestFailure";
        readonly props: {
            readonly id: "string";
            readonly message: "string";
            readonly methodName: "?string";
            readonly name: "string";
            readonly namespace: "?string";
            readonly packageName: "string";
            readonly seeAllData: "?boolean";
            readonly stackTrace: "?string";
            readonly time: "number";
            readonly type: "string";
        };
    };
    readonly FlowCoverageResult: {
        readonly type: "FlowCoverageResult";
        readonly props: {
            readonly elementsNotCovered: readonly ["string"];
            readonly flowId: "string";
            readonly flowName: "string";
            readonly flowNamespace: "?string";
            readonly numElements: "number";
            readonly numElementsNotCovered: "number";
            readonly processType: "string";
        };
    };
    readonly FlowCoverageWarning: {
        readonly type: "FlowCoverageWarning";
        readonly props: {
            readonly flowId: "?string";
            readonly flowName: "?string";
            readonly flowNamespace: "?string";
            readonly message: "string";
        };
    };
    readonly RunTestSuccess: {
        readonly type: "RunTestSuccess";
        readonly props: {
            readonly id: "string";
            readonly methodName: "string";
            readonly name: "string";
            readonly namespace: "?string";
            readonly seeAllData: "?boolean";
            readonly time: "number";
        };
    };
    readonly Metadata: {
        readonly type: "Metadata";
        readonly props: {
            readonly fullName: "?string";
        };
    };
    readonly AccountRelationshipShareRule: {
        readonly type: "AccountRelationshipShareRule";
        readonly props: {
            readonly accessLevel: "string";
            readonly accountToCriteriaField: "string";
            readonly description: "?string";
            readonly entityType: "string";
            readonly masterLabel: "string";
            readonly staticFormulaCriteria: "?string";
            readonly type: "string";
        };
        readonly extends: "Metadata";
    };
    readonly AccountSettings: {
        readonly type: "AccountSettings";
        readonly props: {
            readonly enableAccountHistoryTracking: "?boolean";
            readonly enableAccountInsightsInMobile: "?boolean";
            readonly enableAccountOwnerReport: "?boolean";
            readonly enableAccountTeams: "?boolean";
            readonly enableContactHistoryTracking: "?boolean";
            readonly enableRelateContactToMultipleAccounts: "?boolean";
            readonly showViewHierarchyLink: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly ActionLinkGroupTemplate: {
        readonly type: "ActionLinkGroupTemplate";
        readonly props: {
            readonly actionLinkTemplates: readonly ["ActionLinkTemplate"];
            readonly category: "string";
            readonly executionsAllowed: "string";
            readonly hoursUntilExpiration: "?number";
            readonly isPublished: "boolean";
            readonly name: "string";
        };
        readonly extends: "Metadata";
    };
    readonly ActionLinkTemplate: {
        readonly type: "ActionLinkTemplate";
        readonly props: {
            readonly actionUrl: "string";
            readonly headers: "?string";
            readonly isConfirmationRequired: "boolean";
            readonly isGroupDefault: "boolean";
            readonly label: "?string";
            readonly labelKey: "string";
            readonly linkType: "string";
            readonly method: "string";
            readonly position: "number";
            readonly requestBody: "?string";
            readonly userAlias: "?string";
            readonly userVisibility: "string";
        };
    };
    readonly ActionPlanTemplate: {
        readonly type: "ActionPlanTemplate";
        readonly props: {
            readonly actionPlanTemplateItem: readonly ["ActionPlanTemplateItem"];
            readonly description: "?string";
            readonly name: "string";
            readonly targetEntityType: "string";
            readonly uniqueName: "string";
        };
        readonly extends: "Metadata";
    };
    readonly ActionPlanTemplateItem: {
        readonly type: "ActionPlanTemplateItem";
        readonly props: {
            readonly actionPlanTemplateItemValue: readonly ["ActionPlanTemplateItemValue"];
            readonly displayOrder: "?number";
            readonly isRequired: "?boolean";
            readonly name: "string";
            readonly uniqueName: "string";
        };
    };
    readonly ActionPlanTemplateItemValue: {
        readonly type: "ActionPlanTemplateItemValue";
        readonly props: {
            readonly name: "string";
            readonly valueFormula: "?string";
            readonly valueLiteral: "?string";
        };
    };
    readonly ActionsSettings: {
        readonly type: "ActionsSettings";
        readonly props: {
            readonly enableDefaultQuickActionsOn: "?boolean";
            readonly enableMdpEnabled: "?boolean";
            readonly enableThirdPartyActions: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly ActivitiesSettings: {
        readonly type: "ActivitiesSettings";
        readonly props: {
            readonly allowUsersToRelateMultipleContactsToTasksAndEvents: "?boolean";
            readonly autoRelateEventAttendees: "?boolean";
            readonly enableActivityReminders: "?boolean";
            readonly enableClickCreateEvents: "?boolean";
            readonly enableDragAndDropScheduling: "?boolean";
            readonly enableEmailTracking: "?boolean";
            readonly enableGroupTasks: "?boolean";
            readonly enableListViewScheduling: "?boolean";
            readonly enableLogNote: "?boolean";
            readonly enableMultidayEvents: "?boolean";
            readonly enableRecurringEvents: "?boolean";
            readonly enableRecurringTasks: "?boolean";
            readonly enableRollUpActivToContactsAcct: "?boolean";
            readonly enableSidebarCalendarShortcut: "?boolean";
            readonly enableSimpleTaskCreateUI: "?boolean";
            readonly enableUNSTaskDelegatedToNotifications: "?boolean";
            readonly enableUserListViewCalendars: "?boolean";
            readonly meetingRequestsLogo: "?string";
            readonly showCustomLogoMeetingRequests: "?boolean";
            readonly showEventDetailsMultiUserCalendar: "?boolean";
            readonly showHomePageHoverLinksForEvents: "?boolean";
            readonly showMyTasksHoverLinks: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly AddressSettings: {
        readonly type: "AddressSettings";
        readonly props: {
            readonly countriesAndStates: "CountriesAndStates";
        };
        readonly extends: "Metadata";
    };
    readonly CountriesAndStates: {
        readonly type: "CountriesAndStates";
        readonly props: {
            readonly countries: readonly ["Country"];
        };
    };
    readonly Country: {
        readonly type: "Country";
        readonly props: {
            readonly active: "boolean";
            readonly integrationValue: "string";
            readonly isoCode: "string";
            readonly label: "string";
            readonly orgDefault: "boolean";
            readonly standard: "boolean";
            readonly states: readonly ["State"];
            readonly visible: "boolean";
        };
    };
    readonly State: {
        readonly type: "State";
        readonly props: {
            readonly active: "boolean";
            readonly integrationValue: "string";
            readonly isoCode: "string";
            readonly label: "string";
            readonly standard: "boolean";
            readonly visible: "boolean";
        };
    };
    readonly AnalyticSnapshot: {
        readonly type: "AnalyticSnapshot";
        readonly props: {
            readonly description: "?string";
            readonly groupColumn: "?string";
            readonly mappings: readonly ["AnalyticSnapshotMapping"];
            readonly name: "string";
            readonly runningUser: "?string";
            readonly sourceReport: "string";
            readonly targetObject: "string";
        };
        readonly extends: "Metadata";
    };
    readonly AnalyticSnapshotMapping: {
        readonly type: "AnalyticSnapshotMapping";
        readonly props: {
            readonly aggregateType: "?string";
            readonly sourceField: "string";
            readonly sourceType: "string";
            readonly targetField: "string";
        };
    };
    readonly AnalyticsSettings: {
        readonly type: "AnalyticsSettings";
        readonly props: {
            readonly alwaysGenPreviews: "?boolean";
            readonly analyticsAdoptionMetadata: "?boolean";
            readonly canAccessAnalyticsViaAPI: "?boolean";
            readonly canAnnotateDashboards: "?boolean";
            readonly canEnableSavedView: "?boolean";
            readonly canExploreDataConversationally: "?boolean";
            readonly canShareAppsWithCommunities: "?boolean";
            readonly canSubscribeDashboardWidgets: "?boolean";
            readonly canViewThumbnailAssets: "?boolean";
            readonly enableAnalyticsSubtotals: "?boolean";
            readonly enableAutoCompleteCombo: "?boolean";
            readonly enableDashboardComponentSnapshot: "?boolean";
            readonly enableDashboardFlexiTable: "?boolean";
            readonly enableEmailReportsToPortalUsers: "?boolean";
            readonly enableFloatingReportHeaders: "?boolean";
            readonly enableInsights: "?boolean";
            readonly enableLightningReportBuilder: "?boolean";
            readonly enableLotusNotesImages: "?boolean";
            readonly enableMassEnableReportBuilder: "?boolean";
            readonly enableNewChartsEngine: "?boolean";
            readonly enablePowerInsights: "?boolean";
            readonly enableRemoveFooterForRepDisplay: "?boolean";
            readonly enableRemoveFooterFromRepExp: "?boolean";
            readonly enableReportFieldToFieldPref: "?boolean";
            readonly enableReportUniqueRowCountPref: "?boolean";
            readonly enableSFXJoinedReportsEnable: "?boolean";
            readonly enableSmartDataDiscovery: "?boolean";
            readonly enableUseOldChartsLookAndFeel: "?boolean";
            readonly enableWaveReplication: "?boolean";
            readonly enableWaveSharingInheritance: "?boolean";
            readonly enableWaveTemplate: "?boolean";
            readonly enableWaveTrendedDatasetCleanup: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly AnimationRule: {
        readonly type: "AnimationRule";
        readonly props: {
            readonly animationFrequency: "string";
            readonly developerName: "string";
            readonly isActive: "boolean";
            readonly masterLabel: "string";
            readonly recordTypeContext: "string";
            readonly recordTypeName: "?string";
            readonly sobjectType: "string";
            readonly targetField: "string";
            readonly targetFieldChangeToValues: "string";
        };
        readonly extends: "Metadata";
    };
    readonly ApexSettings: {
        readonly type: "ApexSettings";
        readonly props: {
            readonly enableAggregateCodeCoverageOnly: "?boolean";
            readonly enableApexAccessRightsPref: "?boolean";
            readonly enableApexApprovalLockUnlock: "?boolean";
            readonly enableApexCtrlImplicitWithSharingPref: "?boolean";
            readonly enableApexPropertyGetterPref: "?boolean";
            readonly enableAuraApexCtrlAuthUserAccessCheckPref: "?boolean";
            readonly enableAuraApexCtrlGuestUserAccessCheckPref: "?boolean";
            readonly enableCompileOnDeploy: "?boolean";
            readonly enableDisableParallelApexTesting: "?boolean";
            readonly enableDoNotEmailDebugLog: "?boolean";
            readonly enableGaplessTestAutoNum: "?boolean";
            readonly enableMngdCtrlActionAccessPref: "?boolean";
            readonly enableNonCertifiedApexMdCrud: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly ApexTestSuite: {
        readonly type: "ApexTestSuite";
        readonly props: {
            readonly testClassName: readonly ["string"];
        };
        readonly extends: "Metadata";
    };
    readonly AppExperienceSettings: {
        readonly type: "AppExperienceSettings";
        readonly props: {
            readonly doesHideAllAppsInAppLauncher: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly AppMenu: {
        readonly type: "AppMenu";
        readonly props: {
            readonly appMenuItems: readonly ["AppMenuItem"];
        };
        readonly extends: "Metadata";
    };
    readonly AppMenuItem: {
        readonly type: "AppMenuItem";
        readonly props: {
            readonly name: "string";
            readonly type: "string";
        };
    };
    readonly AppointmentSchedulingPolicy: {
        readonly type: "AppointmentSchedulingPolicy";
        readonly props: {
            readonly appointmentStartTimeInterval: "string";
            readonly masterLabel: "string";
            readonly shouldConsiderCalendarEvents: "boolean";
            readonly shouldEnforceExcludedResource: "boolean";
            readonly shouldEnforceRequiredResource: "boolean";
            readonly shouldMatchSkill: "boolean";
            readonly shouldMatchSkillLevel: "boolean";
            readonly shouldRespectVisitingHours: "boolean";
            readonly shouldUsePrimaryMembers: "boolean";
            readonly shouldUseSecondaryMembers: "boolean";
        };
        readonly extends: "Metadata";
    };
    readonly ApprovalProcess: {
        readonly type: "ApprovalProcess";
        readonly props: {
            readonly active: "boolean";
            readonly allowRecall: "?boolean";
            readonly allowedSubmitters: readonly ["ApprovalSubmitter"];
            readonly approvalPageFields: "?ApprovalPageField";
            readonly approvalStep: readonly ["ApprovalStep"];
            readonly description: "?string";
            readonly emailTemplate: "?string";
            readonly enableMobileDeviceAccess: "?boolean";
            readonly entryCriteria: "?ApprovalEntryCriteria";
            readonly finalApprovalActions: "?ApprovalAction";
            readonly finalApprovalRecordLock: "?boolean";
            readonly finalRejectionActions: "?ApprovalAction";
            readonly finalRejectionRecordLock: "?boolean";
            readonly initialSubmissionActions: "?ApprovalAction";
            readonly label: "string";
            readonly nextAutomatedApprover: "?NextAutomatedApprover";
            readonly postTemplate: "?string";
            readonly recallActions: "?ApprovalAction";
            readonly recordEditability: "string";
            readonly showApprovalHistory: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly ApprovalSubmitter: {
        readonly type: "ApprovalSubmitter";
        readonly props: {
            readonly submitter: "?string";
            readonly type: "string";
        };
    };
    readonly ApprovalPageField: {
        readonly type: "ApprovalPageField";
        readonly props: {
            readonly field: readonly ["string"];
        };
    };
    readonly ApprovalStep: {
        readonly type: "ApprovalStep";
        readonly props: {
            readonly allowDelegate: "?boolean";
            readonly approvalActions: "?ApprovalAction";
            readonly assignedApprover: "ApprovalStepApprover";
            readonly description: "?string";
            readonly entryCriteria: "?ApprovalEntryCriteria";
            readonly ifCriteriaNotMet: "?string";
            readonly label: "string";
            readonly name: "string";
            readonly rejectBehavior: "?ApprovalStepRejectBehavior";
            readonly rejectionActions: "?ApprovalAction";
        };
    };
    readonly ApprovalAction: {
        readonly type: "ApprovalAction";
        readonly props: {
            readonly action: readonly ["WorkflowActionReference"];
        };
    };
    readonly WorkflowActionReference: {
        readonly type: "WorkflowActionReference";
        readonly props: {
            readonly name: "string";
            readonly type: "string";
        };
    };
    readonly ApprovalStepApprover: {
        readonly type: "ApprovalStepApprover";
        readonly props: {
            readonly approver: readonly ["Approver"];
            readonly whenMultipleApprovers: "?string";
        };
    };
    readonly Approver: {
        readonly type: "Approver";
        readonly props: {
            readonly name: "?string";
            readonly type: "string";
        };
    };
    readonly ApprovalEntryCriteria: {
        readonly type: "ApprovalEntryCriteria";
        readonly props: {
            readonly booleanFilter: "?string";
            readonly criteriaItems: readonly ["FilterItem"];
            readonly formula: "?string";
        };
    };
    readonly FilterItem: {
        readonly type: "FilterItem";
        readonly props: {
            readonly field: "string";
            readonly operation: "string";
            readonly value: "?string";
            readonly valueField: "?string";
        };
    };
    readonly DuplicateRuleFilterItem: {
        readonly type: "DuplicateRuleFilterItem";
        readonly props: {
            readonly sortOrder: "number";
            readonly table: "string";
        };
        readonly extends: "FilterItem";
    };
    readonly ApprovalStepRejectBehavior: {
        readonly type: "ApprovalStepRejectBehavior";
        readonly props: {
            readonly type: "string";
        };
    };
    readonly NextAutomatedApprover: {
        readonly type: "NextAutomatedApprover";
        readonly props: {
            readonly useApproverFieldOfRecordOwner: "?boolean";
            readonly userHierarchyField: "string";
        };
    };
    readonly ArchiveSettings: {
        readonly type: "ArchiveSettings";
        readonly props: {
            readonly enableEntityArchivingEnabled: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly AssignmentRule: {
        readonly type: "AssignmentRule";
        readonly props: {
            readonly active: "?boolean";
            readonly ruleEntry: readonly ["RuleEntry"];
        };
        readonly extends: "Metadata";
    };
    readonly RuleEntry: {
        readonly type: "RuleEntry";
        readonly props: {
            readonly assignedTo: "?string";
            readonly assignedToType: "?string";
            readonly booleanFilter: "?string";
            readonly businessHours: "?string";
            readonly businessHoursSource: "?string";
            readonly criteriaItems: readonly ["FilterItem"];
            readonly disableEscalationWhenModified: "?boolean";
            readonly escalationAction: readonly ["EscalationAction"];
            readonly escalationStartTime: "?string";
            readonly formula: "?string";
            readonly notifyCcRecipients: "?boolean";
            readonly overrideExistingTeams: "?boolean";
            readonly replyToEmail: "?string";
            readonly senderEmail: "?string";
            readonly senderName: "?string";
            readonly team: readonly ["string"];
            readonly template: "?string";
        };
    };
    readonly EscalationAction: {
        readonly type: "EscalationAction";
        readonly props: {
            readonly assignedTo: "?string";
            readonly assignedToTemplate: "?string";
            readonly assignedToType: "?string";
            readonly minutesToEscalation: "?number";
            readonly notifyCaseOwner: "?boolean";
            readonly notifyEmail: readonly ["string"];
            readonly notifyTo: "?string";
            readonly notifyToTemplate: "?string";
        };
    };
    readonly AssignmentRules: {
        readonly type: "AssignmentRules";
        readonly props: {
            readonly assignmentRule: readonly ["AssignmentRule"];
        };
        readonly extends: "Metadata";
    };
    readonly Audience: {
        readonly type: "Audience";
        readonly props: {
            readonly audienceName: "string";
            readonly container: "string";
            readonly criteria: "AudienceCriteria";
            readonly description: "?string";
            readonly formula: "?string";
            readonly formulaFilterType: "?string";
            readonly targets: "?PersonalizationTargetInfos";
        };
        readonly extends: "Metadata";
    };
    readonly AudienceCriteria: {
        readonly type: "AudienceCriteria";
        readonly props: {
            readonly criterion: readonly ["AudienceCriterion"];
        };
    };
    readonly AudienceCriterion: {
        readonly type: "AudienceCriterion";
        readonly props: {
            readonly criteriaNumber: "?number";
            readonly criterionValue: "?AudienceCriteriaValue";
            readonly operator: "?string";
            readonly type: "string";
        };
    };
    readonly AudienceCriteriaValue: {
        readonly type: "AudienceCriteriaValue";
        readonly props: {
            readonly city: "?string";
            readonly country: "?string";
            readonly domain: "?string";
            readonly entityField: "?string";
            readonly entityType: "?string";
            readonly fieldValue: "?string";
            readonly isEnabled: "?string";
            readonly permissionName: "?string";
            readonly permissionType: "?string";
            readonly profile: "?string";
            readonly subdivision: "?string";
        };
    };
    readonly PersonalizationTargetInfos: {
        readonly type: "PersonalizationTargetInfos";
        readonly props: {
            readonly target: readonly ["PersonalizationTargetInfo"];
        };
    };
    readonly PersonalizationTargetInfo: {
        readonly type: "PersonalizationTargetInfo";
        readonly props: {
            readonly groupName: "string";
            readonly priority: "?number";
            readonly targetType: "string";
            readonly targetValue: "string";
        };
    };
    readonly AuraDefinitionBundle: {
        readonly type: "AuraDefinitionBundle";
        readonly props: {
            readonly SVGContent: "?string";
            readonly apiVersion: "?number";
            readonly controllerContent: "?string";
            readonly description: "?string";
            readonly designContent: "?string";
            readonly documentationContent: "?string";
            readonly helperContent: "?string";
            readonly markup: "?string";
            readonly modelContent: "?string";
            readonly packageVersions: readonly ["PackageVersion"];
            readonly rendererContent: "?string";
            readonly styleContent: "?string";
            readonly testsuiteContent: "?string";
            readonly type: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly PackageVersion: {
        readonly type: "PackageVersion";
        readonly props: {
            readonly majorNumber: "number";
            readonly minorNumber: "number";
            readonly namespace: "string";
        };
    };
    readonly AuthProvider: {
        readonly type: "AuthProvider";
        readonly props: {
            readonly appleTeam: "?string";
            readonly authorizeUrl: "?string";
            readonly consumerKey: "?string";
            readonly consumerSecret: "?string";
            readonly customMetadataTypeRecord: "?string";
            readonly defaultScopes: "?string";
            readonly ecKey: "?string";
            readonly errorUrl: "?string";
            readonly executionUser: "?string";
            readonly friendlyName: "string";
            readonly iconUrl: "?string";
            readonly idTokenIssuer: "?string";
            readonly includeOrgIdInIdentifier: "?boolean";
            readonly linkKickoffUrl: "?string";
            readonly logoutUrl: "?string";
            readonly oauthKickoffUrl: "?string";
            readonly plugin: "?string";
            readonly portal: "?string";
            readonly providerType: "string";
            readonly registrationHandler: "?string";
            readonly sendAccessTokenInHeader: "?boolean";
            readonly sendClientCredentialsInHeader: "?boolean";
            readonly sendSecretInApis: "?boolean";
            readonly ssoKickoffUrl: "?string";
            readonly tokenUrl: "?string";
            readonly userInfoUrl: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly AutoResponseRule: {
        readonly type: "AutoResponseRule";
        readonly props: {
            readonly active: "?boolean";
            readonly ruleEntry: readonly ["RuleEntry"];
        };
        readonly extends: "Metadata";
    };
    readonly AutoResponseRules: {
        readonly type: "AutoResponseRules";
        readonly props: {
            readonly autoResponseRule: readonly ["AutoResponseRule"];
        };
        readonly extends: "Metadata";
    };
    readonly BlockchainSettings: {
        readonly type: "BlockchainSettings";
        readonly props: {
            readonly enableBcp: "?boolean";
            readonly enableBcpCoin: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly Bot: {
        readonly type: "Bot";
        readonly props: {
            readonly botMlDomain: "?LocalMlDomain";
            readonly botUser: "?string";
            readonly botVersions: readonly ["BotVersion"];
            readonly contextVariables: readonly ["ConversationContextVariable"];
            readonly description: "?string";
            readonly label: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly LocalMlDomain: {
        readonly type: "LocalMlDomain";
        readonly props: {
            readonly label: "string";
            readonly mlIntents: readonly ["MlIntent"];
            readonly mlSlotClasses: readonly ["MlSlotClass"];
            readonly name: "string";
        };
    };
    readonly MlIntent: {
        readonly type: "MlIntent";
        readonly props: {
            readonly description: "?string";
            readonly developerName: "string";
            readonly label: "string";
            readonly mlIntentUtterances: readonly ["MlIntentUtterance"];
            readonly relatedMlIntents: readonly ["MlRelatedIntent"];
        };
    };
    readonly MlIntentUtterance: {
        readonly type: "MlIntentUtterance";
        readonly props: {
            readonly utterance: "string";
        };
    };
    readonly MlRelatedIntent: {
        readonly type: "MlRelatedIntent";
        readonly props: {
            readonly relatedMlIntent: "string";
        };
    };
    readonly MlSlotClass: {
        readonly type: "MlSlotClass";
        readonly props: {
            readonly dataType: "string";
            readonly description: "?string";
            readonly developerName: "string";
            readonly extractionRegex: "?string";
            readonly extractionType: "?string";
            readonly label: "string";
            readonly mlSlotClassValues: readonly ["MlSlotClassValue"];
        };
    };
    readonly MlSlotClassValue: {
        readonly type: "MlSlotClassValue";
        readonly props: {
            readonly synonymGroup: "?SynonymGroup";
            readonly value: "string";
        };
    };
    readonly SynonymGroup: {
        readonly type: "SynonymGroup";
        readonly props: {
            readonly languages: readonly ["string"];
            readonly terms: readonly ["string"];
        };
    };
    readonly BotVersion: {
        readonly type: "BotVersion";
        readonly props: {
            readonly botDialogGroups: readonly ["BotDialogGroup"];
            readonly botDialogs: readonly ["BotDialog"];
            readonly conversationVariables: readonly ["ConversationVariable"];
            readonly entryDialog: "string";
            readonly mainMenuDialog: "string";
            readonly responseDelayMilliseconds: "?number";
        };
        readonly extends: "Metadata";
    };
    readonly BotDialogGroup: {
        readonly type: "BotDialogGroup";
        readonly props: {
            readonly description: "?string";
            readonly developerName: "string";
            readonly label: "string";
        };
    };
    readonly BotDialog: {
        readonly type: "BotDialog";
        readonly props: {
            readonly botDialogGroup: "?string";
            readonly botSteps: readonly ["BotStep"];
            readonly description: "?string";
            readonly developerName: "string";
            readonly label: "string";
            readonly mlIntent: "?string";
            readonly mlIntentTrainingEnabled: "?boolean";
            readonly showInFooterMenu: "?boolean";
        };
    };
    readonly BotStep: {
        readonly type: "BotStep";
        readonly props: {
            readonly booleanFilter: "?string";
            readonly botInvocation: "?BotInvocation";
            readonly botMessages: readonly ["BotMessage"];
            readonly botNavigation: "?BotNavigation";
            readonly botStepConditions: readonly ["BotStepCondition"];
            readonly botSteps: readonly ["BotStep"];
            readonly botVariableOperation: "?BotVariableOperation";
            readonly conversationRecordLookup: "?ConversationRecordLookup";
            readonly conversationSystemMessage: "?ConversationSystemMessage";
            readonly type: "string";
        };
    };
    readonly BotInvocation: {
        readonly type: "BotInvocation";
        readonly props: {
            readonly invocationActionName: "?string";
            readonly invocationActionType: "?string";
            readonly invocationMappings: readonly ["BotInvocationMapping"];
        };
    };
    readonly BotInvocationMapping: {
        readonly type: "BotInvocationMapping";
        readonly props: {
            readonly parameterName: "string";
            readonly type: "string";
            readonly value: "?string";
            readonly variableName: "?string";
            readonly variableType: "?string";
        };
    };
    readonly BotMessage: {
        readonly type: "BotMessage";
        readonly props: {
            readonly message: "string";
        };
    };
    readonly BotNavigation: {
        readonly type: "BotNavigation";
        readonly props: {
            readonly botNavigationLinks: readonly ["BotNavigationLink"];
            readonly type: "string";
        };
    };
    readonly BotNavigationLink: {
        readonly type: "BotNavigationLink";
        readonly props: {
            readonly label: "?string";
            readonly targetBotDialog: "string";
        };
    };
    readonly BotStepCondition: {
        readonly type: "BotStepCondition";
        readonly props: {
            readonly leftOperandName: "string";
            readonly leftOperandType: "string";
            readonly operatorType: "string";
            readonly rightOperandValue: "?string";
        };
    };
    readonly BotVariableOperation: {
        readonly type: "BotVariableOperation";
        readonly props: {
            readonly botInvocation: "?BotInvocation";
            readonly botMessages: readonly ["BotMessage"];
            readonly botQuickReplyOptions: readonly ["BotQuickReplyOption"];
            readonly botVariableOperands: readonly ["BotVariableOperand"];
            readonly invalidInputBotNavigation: "?BotNavigation";
            readonly quickReplyOptionTemplate: "?string";
            readonly quickReplyType: "?string";
            readonly quickReplyWidgetType: "?string";
            readonly sourceVariableName: "?string";
            readonly sourceVariableType: "?string";
            readonly type: "string";
        };
    };
    readonly BotQuickReplyOption: {
        readonly type: "BotQuickReplyOption";
        readonly props: {
            readonly literalValue: "string";
        };
    };
    readonly BotVariableOperand: {
        readonly type: "BotVariableOperand";
        readonly props: {
            readonly disableAutoFill: "?boolean";
            readonly sourceName: "?string";
            readonly sourceType: "?string";
            readonly sourceValue: "?string";
            readonly targetName: "string";
            readonly targetType: "string";
        };
    };
    readonly ConversationRecordLookup: {
        readonly type: "ConversationRecordLookup";
        readonly props: {
            readonly SObjectType: "string";
            readonly lookupFields: readonly ["ConversationRecordLookupField"];
            readonly maxLookupResults: "number";
            readonly sourceVariableName: "string";
            readonly sourceVariableType: "string";
            readonly targetVariableName: "string";
        };
    };
    readonly ConversationRecordLookupField: {
        readonly type: "ConversationRecordLookupField";
        readonly props: {
            readonly fieldName: "string";
        };
    };
    readonly ConversationSystemMessage: {
        readonly type: "ConversationSystemMessage";
        readonly props: {
            readonly systemMessageMappings: readonly ["ConversationSystemMessageMapping"];
            readonly type: "string";
        };
    };
    readonly ConversationSystemMessageMapping: {
        readonly type: "ConversationSystemMessageMapping";
        readonly props: {
            readonly mappingType: "string";
            readonly parameterType: "string";
            readonly variableName: "string";
        };
    };
    readonly ConversationVariable: {
        readonly type: "ConversationVariable";
        readonly props: {
            readonly SObjectType: "?string";
            readonly collectionType: "?string";
            readonly dataType: "string";
            readonly developerName: "string";
            readonly label: "string";
        };
    };
    readonly ConversationContextVariable: {
        readonly type: "ConversationContextVariable";
        readonly props: {
            readonly SObjectType: "?string";
            readonly contextVariableMappings: readonly ["ConversationContextVariableMapping"];
            readonly dataType: "string";
            readonly developerName: "string";
            readonly label: "string";
        };
    };
    readonly ConversationContextVariableMapping: {
        readonly type: "ConversationContextVariableMapping";
        readonly props: {
            readonly SObjectType: "string";
            readonly fieldName: "string";
            readonly messageType: "string";
        };
    };
    readonly BotSettings: {
        readonly type: "BotSettings";
        readonly props: {
            readonly enableBots: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly BrandingSet: {
        readonly type: "BrandingSet";
        readonly props: {
            readonly brandingSetProperty: readonly ["BrandingSetProperty"];
            readonly description: "?string";
            readonly masterLabel: "string";
            readonly type: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly BrandingSetProperty: {
        readonly type: "BrandingSetProperty";
        readonly props: {
            readonly propertyName: "string";
            readonly propertyValue: "?string";
        };
    };
    readonly BusinessHoursEntry: {
        readonly type: "BusinessHoursEntry";
        readonly props: {
            readonly active: "?boolean";
            readonly default: "boolean";
            readonly fridayEndTime: "?string";
            readonly fridayStartTime: "?string";
            readonly mondayEndTime: "?string";
            readonly mondayStartTime: "?string";
            readonly name: "?string";
            readonly saturdayEndTime: "?string";
            readonly saturdayStartTime: "?string";
            readonly sundayEndTime: "?string";
            readonly sundayStartTime: "?string";
            readonly thursdayEndTime: "?string";
            readonly thursdayStartTime: "?string";
            readonly timeZoneId: "?string";
            readonly tuesdayEndTime: "?string";
            readonly tuesdayStartTime: "?string";
            readonly wednesdayEndTime: "?string";
            readonly wednesdayStartTime: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly BusinessHoursSettings: {
        readonly type: "BusinessHoursSettings";
        readonly props: {
            readonly businessHours: readonly ["BusinessHoursEntry"];
            readonly holidays: readonly ["Holiday"];
        };
        readonly extends: "Metadata";
    };
    readonly Holiday: {
        readonly type: "Holiday";
        readonly props: {
            readonly activityDate: "?string";
            readonly businessHours: readonly ["string"];
            readonly description: "?string";
            readonly endTime: "?string";
            readonly isRecurring: "?boolean";
            readonly name: "?string";
            readonly recurrenceDayOfMonth: "?number";
            readonly recurrenceDayOfWeek: readonly ["string"];
            readonly recurrenceDayOfWeekMask: "?number";
            readonly recurrenceEndDate: "?string";
            readonly recurrenceInstance: "?string";
            readonly recurrenceInterval: "?number";
            readonly recurrenceMonthOfYear: "?string";
            readonly recurrenceStartDate: "?string";
            readonly recurrenceType: "?string";
            readonly startTime: "?string";
        };
    };
    readonly BusinessProcess: {
        readonly type: "BusinessProcess";
        readonly props: {
            readonly description: "?string";
            readonly isActive: "?boolean";
            readonly values: readonly ["PicklistValue"];
        };
        readonly extends: "Metadata";
    };
    readonly PicklistValue: {
        readonly type: "PicklistValue";
        readonly props: {
            readonly color: "?string";
            readonly default: "boolean";
            readonly description: "?string";
            readonly isActive: "?boolean";
            readonly allowEmail: "?boolean";
            readonly closed: "?boolean";
            readonly controllingFieldValues: readonly ["string"];
            readonly converted: "?boolean";
            readonly cssExposed: "?boolean";
            readonly forecastCategory: "?string";
            readonly highPriority: "?boolean";
            readonly probability: "?number";
            readonly reverseRole: "?string";
            readonly reviewed: "?boolean";
            readonly won: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly CMSConnectSource: {
        readonly type: "CMSConnectSource";
        readonly props: {
            readonly cmsConnectAsset: readonly ["CMSConnectAsset"];
            readonly cmsConnectLanguage: readonly ["CMSConnectLanguage"];
            readonly cmsConnectPersonalization: "?CMSConnectPersonalization";
            readonly cmsConnectResourceType: readonly ["CMSConnectResourceType"];
            readonly connectionType: "string";
            readonly cssScope: "?string";
            readonly developerName: "string";
            readonly languageEnabled: "?string";
            readonly masterLabel: "string";
            readonly namedCredential: "?string";
            readonly personalizationEnabled: "?string";
            readonly rootPath: "?string";
            readonly sortOrder: "number";
            readonly status: "string";
            readonly type: "string";
            readonly websiteUrl: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly CMSConnectAsset: {
        readonly type: "CMSConnectAsset";
        readonly props: {
            readonly assetPath: "string";
            readonly assetType: "string";
            readonly sortOrder: "number";
        };
    };
    readonly CMSConnectLanguage: {
        readonly type: "CMSConnectLanguage";
        readonly props: {
            readonly cmsLanguage: "string";
            readonly language: "string";
        };
    };
    readonly CMSConnectPersonalization: {
        readonly type: "CMSConnectPersonalization";
        readonly props: {
            readonly connectorPage: "string";
            readonly connectorPageAsset: "string";
        };
    };
    readonly CMSConnectResourceType: {
        readonly type: "CMSConnectResourceType";
        readonly props: {
            readonly cmsConnectResourceDefinition: readonly ["CMSConnectResourceDefinition"];
            readonly developerName: "string";
            readonly masterLabel: "string";
            readonly resourceType: "string";
        };
    };
    readonly CMSConnectResourceDefinition: {
        readonly type: "CMSConnectResourceDefinition";
        readonly props: {
            readonly developerName: "string";
            readonly masterLabel: "string";
            readonly options: "number";
            readonly payloadType: "string";
            readonly resourceIdPath: "?string";
            readonly resourceNamePath: "?string";
            readonly resourcePath: "string";
            readonly rootNodePath: "?string";
        };
    };
    readonly CallCenter: {
        readonly type: "CallCenter";
        readonly props: {
            readonly adapterUrl: "?string";
            readonly customSettings: "?string";
            readonly displayName: "string";
            readonly displayNameLabel: "string";
            readonly internalNameLabel: "string";
            readonly sections: readonly ["CallCenterSection"];
            readonly version: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly CallCenterSection: {
        readonly type: "CallCenterSection";
        readonly props: {
            readonly items: readonly ["CallCenterItem"];
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly CallCenterItem: {
        readonly type: "CallCenterItem";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
            readonly value: "string";
        };
    };
    readonly CampaignInfluenceModel: {
        readonly type: "CampaignInfluenceModel";
        readonly props: {
            readonly isActive: "?boolean";
            readonly isDefaultModel: "boolean";
            readonly isModelLocked: "boolean";
            readonly modelDescription: "?string";
            readonly name: "string";
            readonly recordPreference: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly CampaignSettings: {
        readonly type: "CampaignSettings";
        readonly props: {
            readonly enableAutoCampInfluenceDisabled: "?boolean";
            readonly enableB2bmaCampaignInfluence2: "?boolean";
            readonly enableCampaignHistoryTrackEnabled: "?boolean";
            readonly enableCampaignInfluence2: "?boolean";
            readonly enableCampaignMemberTWCF: "?boolean";
            readonly enableSuppressNoValueCI2: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly CanvasMetadata: {
        readonly type: "CanvasMetadata";
        readonly props: {
            readonly accessMethod: "string";
            readonly canvasOptions: "?string";
            readonly canvasUrl: "string";
            readonly lifecycleClass: "?string";
            readonly locationOptions: "?string";
            readonly samlInitiationMethod: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly CaseClassificationSettings: {
        readonly type: "CaseClassificationSettings";
        readonly props: {
            readonly caseClassificationRecommendations: "?boolean";
            readonly reRunAttributeBasedRules: "?boolean";
            readonly runAssignmentRules: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly CaseSettings: {
        readonly type: "CaseSettings";
        readonly props: {
            readonly caseAssignNotificationTemplate: "?string";
            readonly caseAutoProcUser: "?boolean";
            readonly caseCloseNotificationTemplate: "?string";
            readonly caseCommentNotificationTemplate: "?string";
            readonly caseCreateNotificationTemplate: "?string";
            readonly caseFeedItemSettings: readonly ["FeedItemSettings"];
            readonly caseFeedReadUnreadLtng: "?boolean";
            readonly caseMergeInLightning: "?boolean";
            readonly closeCaseThroughStatusChange: "?boolean";
            readonly defaultCaseFeedLayoutOn: "?boolean";
            readonly defaultCaseOwner: "?string";
            readonly defaultCaseOwnerType: "?string";
            readonly defaultCaseUser: "?string";
            readonly emailActionDefaultsHandlerClass: "?string";
            readonly emailToCase: "?EmailToCaseSettings";
            readonly enableCaseFeed: "?boolean";
            readonly enableCollapseEmailThread: "?boolean";
            readonly enableDraftEmails: "?boolean";
            readonly enableEarlyEscalationRuleTriggers: "?boolean";
            readonly enableEmailActionDefaultsHandler: "?boolean";
            readonly enableSuggestedArticlesApplication: "?boolean";
            readonly enableSuggestedArticlesCustomerPortal: "?boolean";
            readonly enableSuggestedArticlesPartnerPortal: "?boolean";
            readonly enableSuggestedSolutions: "?boolean";
            readonly escalateCaseBefore: "?boolean";
            readonly genericMessageEnabled: "?boolean";
            readonly keepRecordTypeOnAssignmentRule: "?boolean";
            readonly notifyContactOnCaseComment: "?boolean";
            readonly notifyDefaultCaseOwner: "?boolean";
            readonly notifyOwnerOnCaseComment: "?boolean";
            readonly notifyOwnerOnCaseOwnerChange: "?boolean";
            readonly predictiveSupportEnabled: "?boolean";
            readonly showEmailAttachmentsInCaseAttachmentsRL: "?boolean";
            readonly showFewerCloseActions: "?boolean";
            readonly systemUserEmail: "?string";
            readonly useSystemEmailAddress: "?boolean";
            readonly useSystemUserAsDefaultCaseUser: "?boolean";
            readonly webToCase: "?WebToCaseSettings";
        };
        readonly extends: "Metadata";
    };
    readonly FeedItemSettings: {
        readonly type: "FeedItemSettings";
        readonly props: {
            readonly characterLimit: "?number";
            readonly displayFormat: "?string";
            readonly feedItemType: "string";
        };
    };
    readonly EmailToCaseSettings: {
        readonly type: "EmailToCaseSettings";
        readonly props: {
            readonly enableE2CAttachmentAsFile: "?boolean";
            readonly enableE2CSourceTracking: "?boolean";
            readonly enableEmailToCase: "?boolean";
            readonly enableHtmlEmail: "?boolean";
            readonly enableOnDemandEmailToCase: "?boolean";
            readonly enableThreadIDInBody: "?boolean";
            readonly enableThreadIDInSubject: "?boolean";
            readonly notifyOwnerOnNewCaseEmail: "?boolean";
            readonly overEmailLimitAction: "?string";
            readonly preQuoteSignature: "?boolean";
            readonly routingAddresses: readonly ["EmailToCaseRoutingAddress"];
            readonly unauthorizedSenderAction: "?string";
        };
    };
    readonly EmailToCaseRoutingAddress: {
        readonly type: "EmailToCaseRoutingAddress";
        readonly props: {
            readonly addressType: "?string";
            readonly authorizedSenders: "?string";
            readonly caseOrigin: "?string";
            readonly caseOwner: "?string";
            readonly caseOwnerType: "?string";
            readonly casePriority: "?string";
            readonly createTask: "?boolean";
            readonly emailAddress: "?string";
            readonly emailServicesAddress: "?string";
            readonly isVerified: "?boolean";
            readonly routingName: "?string";
            readonly saveEmailHeaders: "?boolean";
            readonly taskStatus: "?string";
        };
    };
    readonly WebToCaseSettings: {
        readonly type: "WebToCaseSettings";
        readonly props: {
            readonly caseOrigin: "?string";
            readonly defaultResponseTemplate: "?string";
            readonly enableWebToCase: "?boolean";
        };
    };
    readonly CaseSubjectParticle: {
        readonly type: "CaseSubjectParticle";
        readonly props: {
            readonly index: "number";
            readonly textField: "?string";
            readonly type: "string";
        };
        readonly extends: "Metadata";
    };
    readonly ChannelLayout: {
        readonly type: "ChannelLayout";
        readonly props: {
            readonly enabledChannels: readonly ["string"];
            readonly label: "string";
            readonly layoutItems: readonly ["ChannelLayoutItem"];
            readonly recordType: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly ChannelLayoutItem: {
        readonly type: "ChannelLayoutItem";
        readonly props: {
            readonly field: "string";
        };
    };
    readonly ChatterAnswersSettings: {
        readonly type: "ChatterAnswersSettings";
        readonly props: {
            readonly emailFollowersOnBestAnswer: "?boolean";
            readonly emailFollowersOnReply: "?boolean";
            readonly emailOwnerOnPrivateReply: "?boolean";
            readonly emailOwnerOnReply: "?boolean";
            readonly enableAnswerViaEmail: "?boolean";
            readonly enableChatterAnswers: "boolean";
            readonly enableFacebookSSO: "?boolean";
            readonly enableInlinePublisher: "?boolean";
            readonly enableReputation: "?boolean";
            readonly enableRichTextEditor: "?boolean";
            readonly facebookAuthProvider: "?string";
            readonly showInPortals: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly ChatterEmailsMDSettings: {
        readonly type: "ChatterEmailsMDSettings";
        readonly props: {
            readonly enableChatterDigestEmailsApiOnly: "?boolean";
            readonly enableChatterEmailAttachment: "?boolean";
            readonly enableCollaborationEmail: "?boolean";
            readonly enableDisplayAppDownloadBadges: "?boolean";
            readonly enableEmailReplyToChatter: "?boolean";
            readonly enableEmailToChatter: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly ChatterExtension: {
        readonly type: "ChatterExtension";
        readonly props: {
            readonly compositionComponent: "string";
            readonly description: "string";
            readonly extensionName: "string";
            readonly headerText: "?string";
            readonly hoverText: "?string";
            readonly icon: "string";
            readonly isProtected: "?boolean";
            readonly masterLabel: "string";
            readonly renderComponent: "string";
            readonly type: "string";
        };
        readonly extends: "Metadata";
    };
    readonly ChatterSettings: {
        readonly type: "ChatterSettings";
        readonly props: {
            readonly allowChatterGroupArchiving: "?boolean";
            readonly allowRecordsInChatterGroup: "?boolean";
            readonly allowSharingInChatterGroup: "?boolean";
            readonly enableApprovalRequest: "?boolean";
            readonly enableChatter: "?boolean";
            readonly enableChatterEmoticons: "?boolean";
            readonly enableFeedEdit: "?boolean";
            readonly enableFeedPinning: "?boolean";
            readonly enableFeedsDraftPosts: "?boolean";
            readonly enableFeedsRichText: "?boolean";
            readonly enableInviteCsnUsers: "?boolean";
            readonly enableOutOfOfficeEnabledPref: "?boolean";
            readonly enableRichLinkPreviewsInFeed: "?boolean";
            readonly enableTodayRecsInFeed: "?boolean";
            readonly unlistedGroupsEnabled: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly CleanDataService: {
        readonly type: "CleanDataService";
        readonly props: {
            readonly cleanRules: readonly ["CleanRule"];
            readonly description: "string";
            readonly masterLabel: "string";
            readonly matchEngine: "string";
        };
        readonly extends: "Metadata";
    };
    readonly CleanRule: {
        readonly type: "CleanRule";
        readonly props: {
            readonly bulkEnabled: "boolean";
            readonly bypassTriggers: "boolean";
            readonly bypassWorkflow: "boolean";
            readonly description: "string";
            readonly developerName: "string";
            readonly fieldMappings: readonly ["FieldMapping"];
            readonly masterLabel: "string";
            readonly matchRule: "string";
            readonly sourceSobjectType: "string";
            readonly status: "string";
            readonly targetSobjectType: "string";
        };
    };
    readonly FieldMapping: {
        readonly type: "FieldMapping";
        readonly props: {
            readonly SObjectType: "string";
            readonly developerName: "string";
            readonly fieldMappingRows: readonly ["FieldMappingRow"];
            readonly masterLabel: "string";
        };
    };
    readonly FieldMappingRow: {
        readonly type: "FieldMappingRow";
        readonly props: {
            readonly SObjectType: "string";
            readonly fieldMappingFields: readonly ["FieldMappingField"];
            readonly fieldName: "string";
            readonly mappingOperation: "string";
        };
    };
    readonly FieldMappingField: {
        readonly type: "FieldMappingField";
        readonly props: {
            readonly dataServiceField: "string";
            readonly dataServiceObjectName: "string";
            readonly priority: "number";
        };
    };
    readonly CommandAction: {
        readonly type: "CommandAction";
        readonly props: {
            readonly actionType: "string";
            readonly description: "?string";
            readonly intents: readonly ["CommandActionIntent"];
            readonly label: "string";
            readonly parameters: readonly ["CommandActionParam"];
            readonly responseTemplates: readonly ["CommandActionResponse"];
            readonly target: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly CommandActionIntent: {
        readonly type: "CommandActionIntent";
        readonly props: {
            readonly phrase: "string";
            readonly responseTemplates: readonly ["CommandActionResponse"];
        };
    };
    readonly CommandActionResponse: {
        readonly type: "CommandActionResponse";
        readonly props: {
            readonly template: "string";
        };
    };
    readonly CommandActionParam: {
        readonly type: "CommandActionParam";
        readonly props: {
            readonly defaultValue: "?string";
            readonly description: "?string";
            readonly name: "string";
            readonly required: "?boolean";
            readonly type: "string";
        };
    };
    readonly CommunitiesSettings: {
        readonly type: "CommunitiesSettings";
        readonly props: {
            readonly canModerateAllFeedPosts: "?boolean";
            readonly canModerateInternalFeedPosts: "?boolean";
            readonly embeddedVisualforcePages: "?boolean";
            readonly enableCommunityWorkspaces: "?boolean";
            readonly enableCspContactVisibilityPref: "?boolean";
            readonly enableCspNotesOnAccConPref: "?boolean";
            readonly enableEnablePRM: "?boolean";
            readonly enableExternalAccHierPref: "?boolean";
            readonly enableGuestRecordReassignOrgPref: "?boolean";
            readonly enableInviteChatterGuestEnabled: "?boolean";
            readonly enableNetPortalUserReportOpts: "?boolean";
            readonly enableNetworksEnabled: "?boolean";
            readonly enableOotbProfExtUserOpsEnable: "?boolean";
            readonly enablePRMAccRelPref: "?boolean";
            readonly enablePowerCustomerCaseStatus: "?boolean";
            readonly enableRelaxPartnerAccountFieldPref: "?boolean";
            readonly enableUsernameUniqForOrgPref: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly Community: {
        readonly type: "Community";
        readonly props: {
            readonly active: "?boolean";
            readonly chatterAnswersFacebookSsoUrl: "?string";
            readonly communityFeedPage: "?string";
            readonly dataCategoryName: "?string";
            readonly description: "?string";
            readonly emailFooterDocument: "?string";
            readonly emailHeaderDocument: "?string";
            readonly emailNotificationUrl: "?string";
            readonly enableChatterAnswers: "?boolean";
            readonly enablePrivateQuestions: "?boolean";
            readonly expertsGroup: "?string";
            readonly portal: "?string";
            readonly reputationLevels: "?ReputationLevels";
            readonly showInPortal: "?boolean";
            readonly site: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly ReputationLevels: {
        readonly type: "ReputationLevels";
        readonly props: {
            readonly chatterAnswersReputationLevels: readonly ["ChatterAnswersReputationLevel"];
            readonly ideaReputationLevels: readonly ["IdeaReputationLevel"];
        };
    };
    readonly ChatterAnswersReputationLevel: {
        readonly type: "ChatterAnswersReputationLevel";
        readonly props: {
            readonly name: "string";
            readonly value: "number";
        };
    };
    readonly IdeaReputationLevel: {
        readonly type: "IdeaReputationLevel";
        readonly props: {
            readonly name: "string";
            readonly value: "number";
        };
    };
    readonly CommunityTemplateDefinition: {
        readonly type: "CommunityTemplateDefinition";
        readonly props: {
            readonly baseTemplate: "?string";
            readonly bundlesInfo: readonly ["CommunityTemplateBundleInfo"];
            readonly category: "string";
            readonly defaultBrandingSet: "?string";
            readonly defaultThemeDefinition: "string";
            readonly description: "?string";
            readonly enableExtendedCleanUpOnDelete: "?boolean";
            readonly masterLabel: "string";
            readonly navigationLinkSet: readonly ["NavigationLinkSet"];
            readonly pageSetting: readonly ["CommunityTemplatePageSetting"];
            readonly publisher: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly CommunityTemplateBundleInfo: {
        readonly type: "CommunityTemplateBundleInfo";
        readonly props: {
            readonly description: "?string";
            readonly image: "?string";
            readonly order: "number";
            readonly title: "string";
            readonly type: "string";
        };
    };
    readonly CommunityThemeBundleInfo: {
        readonly type: "CommunityThemeBundleInfo";
        readonly props: {};
        readonly extends: "CommunityTemplateBundleInfo";
    };
    readonly NavigationLinkSet: {
        readonly type: "NavigationLinkSet";
        readonly props: {
            readonly navigationMenuItem: readonly ["NavigationMenuItem"];
        };
    };
    readonly NavigationMenuItem: {
        readonly type: "NavigationMenuItem";
        readonly props: {
            readonly defaultListViewId: "?string";
            readonly label: "string";
            readonly menuItemBranding: "?NavigationMenuItemBranding";
            readonly position: "number";
            readonly publiclyAvailable: "?boolean";
            readonly subMenu: "?NavigationSubMenu";
            readonly target: "?string";
            readonly targetPreference: "?string";
            readonly type: "string";
        };
    };
    readonly NavigationMenuItemBranding: {
        readonly type: "NavigationMenuItemBranding";
        readonly props: {
            readonly tileImage: "?string";
        };
    };
    readonly NavigationSubMenu: {
        readonly type: "NavigationSubMenu";
        readonly props: {
            readonly navigationMenuItem: readonly ["NavigationMenuItem"];
        };
    };
    readonly CommunityTemplatePageSetting: {
        readonly type: "CommunityTemplatePageSetting";
        readonly props: {
            readonly page: "string";
            readonly themeLayout: "string";
        };
    };
    readonly CommunityThemeDefinition: {
        readonly type: "CommunityThemeDefinition";
        readonly props: {
            readonly bundlesInfo: readonly ["CommunityThemeBundleInfo"];
            readonly customThemeLayoutType: readonly ["CommunityCustomThemeLayoutType"];
            readonly defaultBrandingSet: "?string";
            readonly description: "?string";
            readonly enableExtendedCleanUpOnDelete: "?boolean";
            readonly masterLabel: "string";
            readonly publisher: "?string";
            readonly themeRouteOverride: readonly ["CommunityThemeRouteOverride"];
            readonly themeSetting: readonly ["CommunityThemeSetting"];
        };
        readonly extends: "Metadata";
    };
    readonly CommunityCustomThemeLayoutType: {
        readonly type: "CommunityCustomThemeLayoutType";
        readonly props: {
            readonly description: "?string";
            readonly label: "string";
        };
    };
    readonly CommunityThemeRouteOverride: {
        readonly type: "CommunityThemeRouteOverride";
        readonly props: {
            readonly customThemeLayoutType: "?string";
            readonly pageAttributes: "string";
            readonly pageType: "string";
            readonly themeLayoutType: "?string";
        };
    };
    readonly CommunityThemeSetting: {
        readonly type: "CommunityThemeSetting";
        readonly props: {
            readonly customThemeLayoutType: "?string";
            readonly themeLayout: "string";
            readonly themeLayoutType: "?string";
        };
    };
    readonly CompactLayout: {
        readonly type: "CompactLayout";
        readonly props: {
            readonly fields: readonly ["string"];
            readonly label: "string";
        };
        readonly extends: "Metadata";
    };
    readonly CompanySettings: {
        readonly type: "CompanySettings";
        readonly props: {
            readonly enableCustomFiscalYear: "boolean";
            readonly fiscalYear: "?FiscalYearSettings";
        };
        readonly extends: "Metadata";
    };
    readonly FiscalYearSettings: {
        readonly type: "FiscalYearSettings";
        readonly props: {
            readonly fiscalYearNameBasedOn: "?string";
            readonly startMonth: "?string";
        };
    };
    readonly ConnectedApp: {
        readonly type: "ConnectedApp";
        readonly props: {
            readonly attributes: readonly ["ConnectedAppAttribute"];
            readonly canvas: "?CanvasMetadata";
            readonly canvasConfig: "?ConnectedAppCanvasConfig";
            readonly contactEmail: "string";
            readonly contactPhone: "?string";
            readonly description: "?string";
            readonly iconUrl: "?string";
            readonly infoUrl: "?string";
            readonly ipRanges: readonly ["ConnectedAppIpRange"];
            readonly label: "string";
            readonly logoUrl: "?string";
            readonly mobileAppConfig: "?ConnectedAppMobileDetailConfig";
            readonly mobileStartUrl: "?string";
            readonly oauthConfig: "?ConnectedAppOauthConfig";
            readonly permissionSetName: readonly ["string"];
            readonly plugin: "?string";
            readonly pluginExecutionUser: "?string";
            readonly profileName: readonly ["string"];
            readonly samlConfig: "?ConnectedAppSamlConfig";
            readonly startUrl: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly ConnectedAppAttribute: {
        readonly type: "ConnectedAppAttribute";
        readonly props: {
            readonly formula: "string";
            readonly key: "string";
        };
    };
    readonly ConnectedAppCanvasConfig: {
        readonly type: "ConnectedAppCanvasConfig";
        readonly props: {
            readonly accessMethod: "string";
            readonly canvasUrl: "string";
            readonly lifecycleClass: "?string";
            readonly locations: readonly ["string"];
            readonly options: readonly ["string"];
            readonly samlInitiationMethod: "?string";
        };
    };
    readonly ConnectedAppIpRange: {
        readonly type: "ConnectedAppIpRange";
        readonly props: {
            readonly description: "?string";
            readonly end: "string";
            readonly start: "string";
        };
    };
    readonly ConnectedAppMobileDetailConfig: {
        readonly type: "ConnectedAppMobileDetailConfig";
        readonly props: {
            readonly applicationBinaryFile: "?string";
            readonly applicationBinaryFileName: "?string";
            readonly applicationBundleIdentifier: "?string";
            readonly applicationFileLength: "?number";
            readonly applicationIconFile: "?string";
            readonly applicationIconFileName: "?string";
            readonly applicationInstallUrl: "?string";
            readonly devicePlatform: "string";
            readonly deviceType: "?string";
            readonly minimumOsVersion: "?string";
            readonly privateApp: "?boolean";
            readonly version: "string";
        };
    };
    readonly ConnectedAppOauthConfig: {
        readonly type: "ConnectedAppOauthConfig";
        readonly props: {
            readonly callbackUrl: "string";
            readonly certificate: "?string";
            readonly consumerKey: "?string";
            readonly consumerSecret: "?string";
            readonly idTokenConfig: "?ConnectedAppOauthIdToken";
            readonly isAdminApproved: "?boolean";
            readonly scopes: readonly ["string"];
            readonly singleLogoutUrl: "?string";
        };
    };
    readonly ConnectedAppOauthIdToken: {
        readonly type: "ConnectedAppOauthIdToken";
        readonly props: {
            readonly idTokenAudience: "?string";
            readonly idTokenIncludeAttributes: "?boolean";
            readonly idTokenIncludeCustomPerms: "?boolean";
            readonly idTokenIncludeStandardClaims: "?boolean";
            readonly idTokenValidity: "?number";
        };
    };
    readonly ConnectedAppSamlConfig: {
        readonly type: "ConnectedAppSamlConfig";
        readonly props: {
            readonly acsUrl: "string";
            readonly certificate: "?string";
            readonly encryptionCertificate: "?string";
            readonly encryptionType: "?string";
            readonly entityUrl: "string";
            readonly issuer: "?string";
            readonly samlIdpSLOBindingEnum: "?string";
            readonly samlNameIdFormat: "?string";
            readonly samlSloUrl: "?string";
            readonly samlSubjectCustomAttr: "?string";
            readonly samlSubjectType: "string";
        };
    };
    readonly ConnectedAppSettings: {
        readonly type: "ConnectedAppSettings";
        readonly props: {
            readonly enableAdminApprovedAppsOnly: "?boolean";
            readonly enableSkipUserProvisioningWizardWelcomePage: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly ContentSettings: {
        readonly type: "ContentSettings";
        readonly props: {
            readonly enableChatterFileLink: "?boolean";
            readonly enableContent: "?boolean";
            readonly enableContentAutoAssign: "?boolean";
            readonly enableContentDistForPortalUsers: "?boolean";
            readonly enableContentDistPwOptionsBit1: "?boolean";
            readonly enableContentDistPwOptionsBit2: "?boolean";
            readonly enableContentDistribution: "?boolean";
            readonly enableContentSupportMultiLanguage: "?boolean";
            readonly enableContentWorkspaceAccess: "?boolean";
            readonly enableFileShareSetByRecord: "?boolean";
            readonly enableFilesUsrShareNetRestricted: "?boolean";
            readonly enableJPGPreviews: "?boolean";
            readonly enableLibraryManagedFiles: "?boolean";
            readonly enableSiteGuestUserToUploadFiles: "?boolean";
            readonly enableUploadFilesOnAttachments: "?boolean";
            readonly skipContentAssetTriggers: "?boolean";
            readonly skipContentAssetTriggersOnDeploy: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly ContractSettings: {
        readonly type: "ContractSettings";
        readonly props: {
            readonly autoCalculateEndDate: "?boolean";
            readonly autoExpirationDelay: "?string";
            readonly autoExpirationRecipient: "?string";
            readonly autoExpireContracts: "?boolean";
            readonly enableContractHistoryTracking: "?boolean";
            readonly notifyOwnersOnContractExpiration: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly CorsWhitelistOrigin: {
        readonly type: "CorsWhitelistOrigin";
        readonly props: {
            readonly urlPattern: "string";
        };
        readonly extends: "Metadata";
    };
    readonly CspTrustedSite: {
        readonly type: "CspTrustedSite";
        readonly props: {
            readonly context: "?string";
            readonly description: "?string";
            readonly endpointUrl: "string";
            readonly isActive: "boolean";
        };
        readonly extends: "Metadata";
    };
    readonly CurrencySettings: {
        readonly type: "CurrencySettings";
        readonly props: {
            readonly enableCurrencyEffectiveDates: "?boolean";
            readonly enableCurrencySymbolWithMultiCurrency: "?boolean";
            readonly enableMultiCurrency: "?boolean";
            readonly isMultiCurrencyActivationAllowed: "?boolean";
            readonly isParenCurrencyConvDisabled: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly CustomApplication: {
        readonly type: "CustomApplication";
        readonly props: {
            readonly actionOverrides: readonly ["AppActionOverride"];
            readonly brand: "?AppBrand";
            readonly consoleConfig: "?ServiceCloudConsoleConfig";
            readonly defaultLandingTab: "?string";
            readonly description: "?string";
            readonly formFactors: readonly ["string"];
            readonly isNavAutoTempTabsDisabled: "?boolean";
            readonly isNavPersonalizationDisabled: "?boolean";
            readonly isServiceCloudConsole: "?boolean";
            readonly label: "?string";
            readonly logo: "?string";
            readonly navType: "?string";
            readonly preferences: "?AppPreferences";
            readonly profileActionOverrides: readonly ["AppProfileActionOverride"];
            readonly setupExperience: "?string";
            readonly subscriberTabs: readonly ["string"];
            readonly tabs: readonly ["string"];
            readonly uiType: "?string";
            readonly utilityBar: "?string";
            readonly workspaceConfig: "?AppWorkspaceConfig";
        };
        readonly extends: "Metadata";
    };
    readonly AppActionOverride: {
        readonly type: "AppActionOverride";
        readonly props: {
            readonly pageOrSobjectType: "string";
        };
        readonly extends: "ActionOverride";
    };
    readonly ActionOverride: {
        readonly type: "ActionOverride";
        readonly props: {
            readonly actionName: "?string";
            readonly comment: "?string";
            readonly content: "?string";
            readonly formFactor: "?string";
            readonly skipRecordTypeSelect: "?boolean";
            readonly type: "?string";
        };
    };
    readonly AppBrand: {
        readonly type: "AppBrand";
        readonly props: {
            readonly footerColor: "?string";
            readonly headerColor: "?string";
            readonly logo: "?string";
            readonly logoVersion: "?number";
            readonly shouldOverrideOrgTheme: "?boolean";
        };
    };
    readonly ServiceCloudConsoleConfig: {
        readonly type: "ServiceCloudConsoleConfig";
        readonly props: {
            readonly componentList: "?AppComponentList";
            readonly detailPageRefreshMethod: "string";
            readonly footerColor: "?string";
            readonly headerColor: "?string";
            readonly keyboardShortcuts: "KeyboardShortcuts";
            readonly listPlacement: "ListPlacement";
            readonly listRefreshMethod: "string";
            readonly liveAgentConfig: "?LiveAgentConfig";
            readonly primaryTabColor: "?string";
            readonly pushNotifications: readonly ["PushNotification"];
            readonly tabLimitConfig: "?TabLimitConfig";
            readonly whitelistedDomains: readonly ["string"];
        };
    };
    readonly AppComponentList: {
        readonly type: "AppComponentList";
        readonly props: {
            readonly alignment: "string";
            readonly components: readonly ["string"];
        };
    };
    readonly KeyboardShortcuts: {
        readonly type: "KeyboardShortcuts";
        readonly props: {
            readonly customShortcuts: readonly ["CustomShortcut"];
            readonly defaultShortcuts: readonly ["DefaultShortcut"];
        };
    };
    readonly CustomShortcut: {
        readonly type: "CustomShortcut";
        readonly props: {
            readonly description: "?string";
            readonly eventName: "string";
        };
        readonly extends: "DefaultShortcut";
    };
    readonly DefaultShortcut: {
        readonly type: "DefaultShortcut";
        readonly props: {
            readonly action: "string";
            readonly active: "boolean";
            readonly keyCommand: "string";
        };
    };
    readonly ListPlacement: {
        readonly type: "ListPlacement";
        readonly props: {
            readonly height: "?number";
            readonly location: "string";
            readonly units: "?string";
            readonly width: "?number";
        };
    };
    readonly LiveAgentConfig: {
        readonly type: "LiveAgentConfig";
        readonly props: {
            readonly enableLiveChat: "?boolean";
            readonly openNewAccountSubtab: "?boolean";
            readonly openNewCaseSubtab: "?boolean";
            readonly openNewContactSubtab: "?boolean";
            readonly openNewLeadSubtab: "?boolean";
            readonly openNewVFPageSubtab: "?boolean";
            readonly pageNamesToOpen: readonly ["string"];
            readonly showKnowledgeArticles: "?boolean";
        };
    };
    readonly PushNotification: {
        readonly type: "PushNotification";
        readonly props: {
            readonly fieldNames: readonly ["string"];
            readonly objectName: "string";
        };
    };
    readonly TabLimitConfig: {
        readonly type: "TabLimitConfig";
        readonly props: {
            readonly maxNumberOfPrimaryTabs: "?string";
            readonly maxNumberOfSubTabs: "?string";
        };
    };
    readonly AppPreferences: {
        readonly type: "AppPreferences";
        readonly props: {
            readonly enableCustomizeMyTabs: "boolean";
            readonly enableKeyboardShortcuts: "boolean";
            readonly enableListViewHover: "boolean";
            readonly enableListViewReskin: "boolean";
            readonly enableMultiMonitorComponents: "boolean";
            readonly enablePinTabs: "boolean";
            readonly enableTabHover: "boolean";
            readonly enableTabLimits: "boolean";
            readonly saveUserSessions: "boolean";
        };
    };
    readonly AppProfileActionOverride: {
        readonly type: "AppProfileActionOverride";
        readonly props: {
            readonly profile: "string";
        };
        readonly extends: "ProfileActionOverride";
    };
    readonly ProfileActionOverride: {
        readonly type: "ProfileActionOverride";
        readonly props: {
            readonly actionName: "string";
            readonly content: "?string";
            readonly formFactor: "string";
            readonly pageOrSobjectType: "string";
            readonly recordType: "?string";
            readonly type: "string";
        };
    };
    readonly AppWorkspaceConfig: {
        readonly type: "AppWorkspaceConfig";
        readonly props: {
            readonly mappings: readonly ["WorkspaceMapping"];
        };
    };
    readonly WorkspaceMapping: {
        readonly type: "WorkspaceMapping";
        readonly props: {
            readonly fieldName: "?string";
            readonly tab: "string";
        };
    };
    readonly CustomApplicationComponent: {
        readonly type: "CustomApplicationComponent";
        readonly props: {
            readonly buttonIconUrl: "?string";
            readonly buttonStyle: "?string";
            readonly buttonText: "?string";
            readonly buttonWidth: "?number";
            readonly height: "?number";
            readonly isHeightFixed: "boolean";
            readonly isHidden: "boolean";
            readonly isWidthFixed: "boolean";
            readonly visualforcePage: "string";
            readonly width: "?number";
        };
        readonly extends: "Metadata";
    };
    readonly CustomFeedFilter: {
        readonly type: "CustomFeedFilter";
        readonly props: {
            readonly criteria: readonly ["FeedFilterCriterion"];
            readonly description: "?string";
            readonly isProtected: "?boolean";
            readonly label: "string";
        };
        readonly extends: "Metadata";
    };
    readonly FeedFilterCriterion: {
        readonly type: "FeedFilterCriterion";
        readonly props: {
            readonly feedItemType: "string";
            readonly feedItemVisibility: "?string";
            readonly relatedSObjectType: "?string";
        };
    };
    readonly CustomField: {
        readonly type: "CustomField";
        readonly props: {
            readonly businessOwnerGroup: "?string";
            readonly businessOwnerUser: "?string";
            readonly businessStatus: "?string";
            readonly caseSensitive: "?boolean";
            readonly complianceGroup: "?string";
            readonly customDataType: "?string";
            readonly defaultValue: "?string";
            readonly deleteConstraint: "?string";
            readonly deprecated: "?boolean";
            readonly description: "?string";
            readonly displayFormat: "?string";
            readonly encryptionScheme: "?string";
            readonly escapeMarkup: "?boolean";
            readonly externalDeveloperName: "?string";
            readonly externalId: "?boolean";
            readonly fieldManageability: "?string";
            readonly formula: "?string";
            readonly formulaTreatBlanksAs: "?string";
            readonly inlineHelpText: "?string";
            readonly isAIPredictionField: "?boolean";
            readonly isConvertLeadDisabled: "?boolean";
            readonly isFilteringDisabled: "?boolean";
            readonly isNameField: "?boolean";
            readonly isSortingDisabled: "?boolean";
            readonly label: "?string";
            readonly length: "?number";
            readonly lookupFilter: "?LookupFilter";
            readonly maskChar: "?string";
            readonly maskType: "?string";
            readonly metadataRelationshipControllingField: "?string";
            readonly populateExistingRows: "?boolean";
            readonly precision: "?number";
            readonly referenceTargetField: "?string";
            readonly referenceTo: "?string";
            readonly relationshipLabel: "?string";
            readonly relationshipName: "?string";
            readonly relationshipOrder: "?number";
            readonly reparentableMasterDetail: "?boolean";
            readonly required: "?boolean";
            readonly restrictedAdminField: "?boolean";
            readonly scale: "?number";
            readonly securityClassification: "?string";
            readonly startingNumber: "?number";
            readonly stripMarkup: "?boolean";
            readonly summarizedField: "?string";
            readonly summaryFilterItems: readonly ["FilterItem"];
            readonly summaryForeignKey: "?string";
            readonly summaryOperation: "?string";
            readonly trackFeedHistory: "?boolean";
            readonly trackHistory: "?boolean";
            readonly trackTrending: "?boolean";
            readonly translateData: "?boolean";
            readonly type: "?string";
            readonly unique: "?boolean";
            readonly valueSet: "?ValueSet";
            readonly visibleLines: "?number";
            readonly writeRequiresMasterRead: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly LookupFilter: {
        readonly type: "LookupFilter";
        readonly props: {
            readonly active: "boolean";
            readonly booleanFilter: "?string";
            readonly description: "?string";
            readonly errorMessage: "?string";
            readonly filterItems: readonly ["FilterItem"];
            readonly infoMessage: "?string";
            readonly isOptional: "boolean";
        };
    };
    readonly ValueSet: {
        readonly type: "ValueSet";
        readonly props: {
            readonly controllingField: "?string";
            readonly restricted: "?boolean";
            readonly valueSetDefinition: "?ValueSetValuesDefinition";
            readonly valueSetName: "?string";
            readonly valueSettings: readonly ["ValueSettings"];
        };
    };
    readonly ValueSetValuesDefinition: {
        readonly type: "ValueSetValuesDefinition";
        readonly props: {
            readonly sorted: "boolean";
            readonly value: readonly ["CustomValue"];
        };
    };
    readonly CustomValue: {
        readonly type: "CustomValue";
        readonly props: {
            readonly color: "?string";
            readonly default: "boolean";
            readonly description: "?string";
            readonly isActive: "?boolean";
            readonly label: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly StandardValue: {
        readonly type: "StandardValue";
        readonly props: {
            readonly allowEmail: "?boolean";
            readonly closed: "?boolean";
            readonly converted: "?boolean";
            readonly cssExposed: "?boolean";
            readonly forecastCategory: "?string";
            readonly groupingString: "?string";
            readonly highPriority: "?boolean";
            readonly probability: "?number";
            readonly reverseRole: "?string";
            readonly reviewed: "?boolean";
            readonly won: "?boolean";
        };
        readonly extends: "CustomValue";
    };
    readonly ValueSettings: {
        readonly type: "ValueSettings";
        readonly props: {
            readonly controllingFieldValue: readonly ["string"];
            readonly valueName: "string";
        };
    };
    readonly CustomHelpMenuSection: {
        readonly type: "CustomHelpMenuSection";
        readonly props: {
            readonly customHelpMenuItems: readonly ["CustomHelpMenuItem"];
            readonly masterLabel: "string";
        };
        readonly extends: "Metadata";
    };
    readonly CustomHelpMenuItem: {
        readonly type: "CustomHelpMenuItem";
        readonly props: {
            readonly linkUrl: "string";
            readonly masterLabel: "string";
            readonly sortOrder: "number";
        };
    };
    readonly CustomLabel: {
        readonly type: "CustomLabel";
        readonly props: {
            readonly categories: "?string";
            readonly language: "string";
            readonly protected: "boolean";
            readonly shortDescription: "string";
            readonly value: "string";
        };
        readonly extends: "Metadata";
    };
    readonly CustomLabels: {
        readonly type: "CustomLabels";
        readonly props: {
            readonly labels: readonly ["CustomLabel"];
        };
        readonly extends: "Metadata";
    };
    readonly CustomMetadata: {
        readonly type: "CustomMetadata";
        readonly props: {
            readonly description: "?string";
            readonly label: "?string";
            readonly protected: "?boolean";
            readonly values: readonly ["CustomMetadataValue"];
        };
        readonly extends: "Metadata";
    };
    readonly CustomMetadataValue: {
        readonly type: "CustomMetadataValue";
        readonly props: {
            readonly field: "string";
            readonly value: "?any";
        };
    };
    readonly CustomNotificationType: {
        readonly type: "CustomNotificationType";
        readonly props: {
            readonly customNotifTypeName: "string";
            readonly description: "?string";
            readonly desktop: "boolean";
            readonly masterLabel: "string";
            readonly mobile: "boolean";
        };
        readonly extends: "Metadata";
    };
    readonly CustomObject: {
        readonly type: "CustomObject";
        readonly props: {
            readonly actionOverrides: readonly ["ActionOverride"];
            readonly allowInChatterGroups: "?boolean";
            readonly articleTypeChannelDisplay: "?ArticleTypeChannelDisplay";
            readonly businessProcesses: readonly ["BusinessProcess"];
            readonly compactLayoutAssignment: "?string";
            readonly compactLayouts: readonly ["CompactLayout"];
            readonly customHelp: "?string";
            readonly customHelpPage: "?string";
            readonly customSettingsType: "?string";
            readonly deploymentStatus: "?string";
            readonly deprecated: "?boolean";
            readonly description: "?string";
            readonly enableActivities: "?boolean";
            readonly enableBulkApi: "?boolean";
            readonly enableDataTranslation: "?boolean";
            readonly enableDivisions: "?boolean";
            readonly enableEnhancedLookup: "?boolean";
            readonly enableFeeds: "?boolean";
            readonly enableHistory: "?boolean";
            readonly enableLicensing: "?boolean";
            readonly enableReports: "?boolean";
            readonly enableSearch: "?boolean";
            readonly enableSharing: "?boolean";
            readonly enableStreamingApi: "?boolean";
            readonly eventType: "?string";
            readonly externalDataSource: "?string";
            readonly externalName: "?string";
            readonly externalRepository: "?string";
            readonly externalSharingModel: "?string";
            readonly fieldSets: readonly ["FieldSet"];
            readonly fields: readonly ["CustomField"];
            readonly gender: "?string";
            readonly historyRetentionPolicy: "?HistoryRetentionPolicy";
            readonly household: "?boolean";
            readonly indexes: readonly ["Index"];
            readonly label: "?string";
            readonly listViews: readonly ["ListView"];
            readonly nameField: "?CustomField";
            readonly pluralLabel: "?string";
            readonly profileSearchLayouts: readonly ["ProfileSearchLayouts"];
            readonly publishBehavior: "?string";
            readonly recordTypeTrackFeedHistory: "?boolean";
            readonly recordTypeTrackHistory: "?boolean";
            readonly recordTypes: readonly ["RecordType"];
            readonly searchLayouts: "?SearchLayouts";
            readonly sharingModel: "?string";
            readonly sharingReasons: readonly ["SharingReason"];
            readonly sharingRecalculations: readonly ["SharingRecalculation"];
            readonly startsWith: "?string";
            readonly validationRules: readonly ["ValidationRule"];
            readonly visibility: "?string";
            readonly webLinks: readonly ["WebLink"];
        };
        readonly extends: "Metadata";
    };
    readonly ArticleTypeChannelDisplay: {
        readonly type: "ArticleTypeChannelDisplay";
        readonly props: {
            readonly articleTypeTemplates: readonly ["ArticleTypeTemplate"];
        };
    };
    readonly ArticleTypeTemplate: {
        readonly type: "ArticleTypeTemplate";
        readonly props: {
            readonly channel: "string";
            readonly page: "?string";
            readonly template: "string";
        };
    };
    readonly FieldSet: {
        readonly type: "FieldSet";
        readonly props: {
            readonly availableFields: readonly ["FieldSetItem"];
            readonly description: "string";
            readonly displayedFields: readonly ["FieldSetItem"];
            readonly label: "string";
        };
        readonly extends: "Metadata";
    };
    readonly FieldSetItem: {
        readonly type: "FieldSetItem";
        readonly props: {
            readonly field: "?string";
            readonly isFieldManaged: "?boolean";
            readonly isRequired: "?boolean";
        };
    };
    readonly HistoryRetentionPolicy: {
        readonly type: "HistoryRetentionPolicy";
        readonly props: {
            readonly archiveAfterMonths: "number";
            readonly archiveRetentionYears: "number";
            readonly description: "?string";
        };
    };
    readonly Index: {
        readonly type: "Index";
        readonly props: {
            readonly fields: readonly ["IndexField"];
            readonly label: "string";
        };
        readonly extends: "Metadata";
    };
    readonly IndexField: {
        readonly type: "IndexField";
        readonly props: {
            readonly name: "string";
            readonly sortDirection: "string";
        };
    };
    readonly ListView: {
        readonly type: "ListView";
        readonly props: {
            readonly booleanFilter: "?string";
            readonly columns: readonly ["string"];
            readonly division: "?string";
            readonly filterScope: "string";
            readonly filters: readonly ["ListViewFilter"];
            readonly label: "string";
            readonly language: "?string";
            readonly queue: "?string";
            readonly sharedTo: "?SharedTo";
        };
        readonly extends: "Metadata";
    };
    readonly ListViewFilter: {
        readonly type: "ListViewFilter";
        readonly props: {
            readonly field: "string";
            readonly operation: "string";
            readonly value: "?string";
        };
    };
    readonly SharedTo: {
        readonly type: "SharedTo";
        readonly props: {
            readonly allCustomerPortalUsers: "?string";
            readonly allInternalUsers: "?string";
            readonly allPartnerUsers: "?string";
            readonly channelProgramGroup: readonly ["string"];
            readonly channelProgramGroups: readonly ["string"];
            readonly group: readonly ["string"];
            readonly groups: readonly ["string"];
            readonly guestUser: readonly ["string"];
            readonly managerSubordinates: readonly ["string"];
            readonly managers: readonly ["string"];
            readonly portalRole: readonly ["string"];
            readonly portalRoleAndSubordinates: readonly ["string"];
            readonly queue: readonly ["string"];
            readonly role: readonly ["string"];
            readonly roleAndSubordinates: readonly ["string"];
            readonly roleAndSubordinatesInternal: readonly ["string"];
            readonly roles: readonly ["string"];
            readonly rolesAndSubordinates: readonly ["string"];
            readonly territories: readonly ["string"];
            readonly territoriesAndSubordinates: readonly ["string"];
            readonly territory: readonly ["string"];
            readonly territoryAndSubordinates: readonly ["string"];
        };
    };
    readonly ProfileSearchLayouts: {
        readonly type: "ProfileSearchLayouts";
        readonly props: {
            readonly fields: readonly ["string"];
            readonly profileName: "?string";
        };
    };
    readonly RecordType: {
        readonly type: "RecordType";
        readonly props: {
            readonly active: "boolean";
            readonly businessProcess: "?string";
            readonly compactLayoutAssignment: "?string";
            readonly description: "?string";
            readonly label: "string";
            readonly picklistValues: readonly ["RecordTypePicklistValue"];
        };
        readonly extends: "Metadata";
    };
    readonly RecordTypePicklistValue: {
        readonly type: "RecordTypePicklistValue";
        readonly props: {
            readonly picklist: "string";
            readonly values: readonly ["PicklistValue"];
        };
    };
    readonly SearchLayouts: {
        readonly type: "SearchLayouts";
        readonly props: {
            readonly customTabListAdditionalFields: readonly ["string"];
            readonly excludedStandardButtons: readonly ["string"];
            readonly listViewButtons: readonly ["string"];
            readonly lookupDialogsAdditionalFields: readonly ["string"];
            readonly lookupFilterFields: readonly ["string"];
            readonly lookupPhoneDialogsAdditionalFields: readonly ["string"];
            readonly massQuickActions: readonly ["string"];
            readonly searchFilterFields: readonly ["string"];
            readonly searchResultsAdditionalFields: readonly ["string"];
            readonly searchResultsCustomButtons: readonly ["string"];
        };
    };
    readonly SharingReason: {
        readonly type: "SharingReason";
        readonly props: {
            readonly label: "string";
        };
        readonly extends: "Metadata";
    };
    readonly SharingRecalculation: {
        readonly type: "SharingRecalculation";
        readonly props: {
            readonly className: "string";
        };
    };
    readonly ValidationRule: {
        readonly type: "ValidationRule";
        readonly props: {
            readonly active: "boolean";
            readonly description: "?string";
            readonly errorConditionFormula: "string";
            readonly errorDisplayField: "?string";
            readonly errorMessage: "string";
        };
        readonly extends: "Metadata";
    };
    readonly WebLink: {
        readonly type: "WebLink";
        readonly props: {
            readonly availability: "string";
            readonly description: "?string";
            readonly displayType: "string";
            readonly encodingKey: "?string";
            readonly hasMenubar: "?boolean";
            readonly hasScrollbars: "?boolean";
            readonly hasToolbar: "?boolean";
            readonly height: "?number";
            readonly isResizable: "?boolean";
            readonly linkType: "string";
            readonly masterLabel: "?string";
            readonly openType: "string";
            readonly page: "?string";
            readonly position: "?string";
            readonly protected: "boolean";
            readonly requireRowSelection: "?boolean";
            readonly scontrol: "?string";
            readonly showsLocation: "?boolean";
            readonly showsStatus: "?boolean";
            readonly url: "?string";
            readonly width: "?number";
        };
        readonly extends: "Metadata";
    };
    readonly CustomObjectTranslation: {
        readonly type: "CustomObjectTranslation";
        readonly props: {
            readonly caseValues: readonly ["ObjectNameCaseValue"];
            readonly fieldSets: readonly ["FieldSetTranslation"];
            readonly fields: readonly ["CustomFieldTranslation"];
            readonly gender: "?string";
            readonly layouts: readonly ["LayoutTranslation"];
            readonly nameFieldLabel: "?string";
            readonly quickActions: readonly ["QuickActionTranslation"];
            readonly recordTypes: readonly ["RecordTypeTranslation"];
            readonly sharingReasons: readonly ["SharingReasonTranslation"];
            readonly standardFields: readonly ["StandardFieldTranslation"];
            readonly startsWith: "?string";
            readonly validationRules: readonly ["ValidationRuleTranslation"];
            readonly webLinks: readonly ["WebLinkTranslation"];
            readonly workflowTasks: readonly ["WorkflowTaskTranslation"];
        };
        readonly extends: "Metadata";
    };
    readonly ObjectNameCaseValue: {
        readonly type: "ObjectNameCaseValue";
        readonly props: {
            readonly article: "?string";
            readonly caseType: "?string";
            readonly plural: "?boolean";
            readonly possessive: "?string";
            readonly value: "string";
        };
    };
    readonly FieldSetTranslation: {
        readonly type: "FieldSetTranslation";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly CustomFieldTranslation: {
        readonly type: "CustomFieldTranslation";
        readonly props: {
            readonly caseValues: readonly ["ObjectNameCaseValue"];
            readonly gender: "?string";
            readonly help: "?string";
            readonly label: "?string";
            readonly lookupFilter: "?LookupFilterTranslation";
            readonly name: "string";
            readonly picklistValues: readonly ["PicklistValueTranslation"];
            readonly relationshipLabel: "?string";
            readonly startsWith: "?string";
        };
    };
    readonly LookupFilterTranslation: {
        readonly type: "LookupFilterTranslation";
        readonly props: {
            readonly errorMessage: "string";
            readonly informationalMessage: "string";
        };
    };
    readonly PicklistValueTranslation: {
        readonly type: "PicklistValueTranslation";
        readonly props: {
            readonly masterLabel: "string";
            readonly translation: "?string";
        };
    };
    readonly LayoutTranslation: {
        readonly type: "LayoutTranslation";
        readonly props: {
            readonly layout: "string";
            readonly layoutType: "?string";
            readonly sections: readonly ["LayoutSectionTranslation"];
        };
    };
    readonly LayoutSectionTranslation: {
        readonly type: "LayoutSectionTranslation";
        readonly props: {
            readonly label: "string";
            readonly section: "string";
        };
    };
    readonly QuickActionTranslation: {
        readonly type: "QuickActionTranslation";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly RecordTypeTranslation: {
        readonly type: "RecordTypeTranslation";
        readonly props: {
            readonly description: "?string";
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly SharingReasonTranslation: {
        readonly type: "SharingReasonTranslation";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly StandardFieldTranslation: {
        readonly type: "StandardFieldTranslation";
        readonly props: {
            readonly label: "?string";
            readonly name: "string";
        };
    };
    readonly ValidationRuleTranslation: {
        readonly type: "ValidationRuleTranslation";
        readonly props: {
            readonly errorMessage: "string";
            readonly name: "string";
        };
    };
    readonly WebLinkTranslation: {
        readonly type: "WebLinkTranslation";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly WorkflowTaskTranslation: {
        readonly type: "WorkflowTaskTranslation";
        readonly props: {
            readonly description: "?string";
            readonly name: "string";
            readonly subject: "?string";
        };
    };
    readonly CustomPageWebLink: {
        readonly type: "CustomPageWebLink";
        readonly props: {
            readonly availability: "string";
            readonly description: "?string";
            readonly displayType: "string";
            readonly encodingKey: "?string";
            readonly hasMenubar: "?boolean";
            readonly hasScrollbars: "?boolean";
            readonly hasToolbar: "?boolean";
            readonly height: "?number";
            readonly isResizable: "?boolean";
            readonly linkType: "string";
            readonly masterLabel: "?string";
            readonly openType: "string";
            readonly page: "?string";
            readonly position: "?string";
            readonly protected: "boolean";
            readonly requireRowSelection: "?boolean";
            readonly scontrol: "?string";
            readonly showsLocation: "?boolean";
            readonly showsStatus: "?boolean";
            readonly url: "?string";
            readonly width: "?number";
        };
        readonly extends: "Metadata";
    };
    readonly CustomPermission: {
        readonly type: "CustomPermission";
        readonly props: {
            readonly connectedApp: "?string";
            readonly description: "?string";
            readonly label: "string";
            readonly requiredPermission: readonly ["CustomPermissionDependencyRequired"];
        };
        readonly extends: "Metadata";
    };
    readonly CustomPermissionDependencyRequired: {
        readonly type: "CustomPermissionDependencyRequired";
        readonly props: {
            readonly customPermission: "string";
            readonly dependency: "boolean";
        };
    };
    readonly CustomSite: {
        readonly type: "CustomSite";
        readonly props: {
            readonly active: "boolean";
            readonly allowHomePage: "boolean";
            readonly allowStandardAnswersPages: "?boolean";
            readonly allowStandardIdeasPages: "boolean";
            readonly allowStandardLookups: "boolean";
            readonly allowStandardPortalPages: "boolean";
            readonly allowStandardSearch: "boolean";
            readonly analyticsTrackingCode: "?string";
            readonly authorizationRequiredPage: "?string";
            readonly bandwidthExceededPage: "?string";
            readonly browserXssProtection: "boolean";
            readonly changePasswordPage: "?string";
            readonly chatterAnswersForgotPasswordConfirmPage: "?string";
            readonly chatterAnswersForgotPasswordPage: "?string";
            readonly chatterAnswersHelpPage: "?string";
            readonly chatterAnswersLoginPage: "?string";
            readonly chatterAnswersRegistrationPage: "?string";
            readonly clickjackProtectionLevel: "string";
            readonly contentSniffingProtection: "boolean";
            readonly cspUpgradeInsecureRequests: "boolean";
            readonly customWebAddresses: readonly ["SiteWebAddress"];
            readonly description: "?string";
            readonly enableAuraRequests: "?boolean";
            readonly favoriteIcon: "?string";
            readonly fileNotFoundPage: "?string";
            readonly forgotPasswordPage: "?string";
            readonly genericErrorPage: "?string";
            readonly guestProfile: "?string";
            readonly inMaintenancePage: "?string";
            readonly inactiveIndexPage: "?string";
            readonly indexPage: "string";
            readonly masterLabel: "string";
            readonly myProfilePage: "?string";
            readonly portal: "?string";
            readonly referrerPolicyOriginWhenCrossOrigin: "boolean";
            readonly requireHttps: "boolean";
            readonly requireInsecurePortalAccess: "boolean";
            readonly robotsTxtPage: "?string";
            readonly rootComponent: "?string";
            readonly selfRegPage: "?string";
            readonly serverIsDown: "?string";
            readonly siteAdmin: "?string";
            readonly siteRedirectMappings: readonly ["SiteRedirectMapping"];
            readonly siteTemplate: "?string";
            readonly siteType: "string";
            readonly subdomain: "?string";
            readonly urlPathPrefix: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly SiteWebAddress: {
        readonly type: "SiteWebAddress";
        readonly props: {
            readonly certificate: "?string";
            readonly domainName: "string";
            readonly primary: "boolean";
        };
    };
    readonly SiteRedirectMapping: {
        readonly type: "SiteRedirectMapping";
        readonly props: {
            readonly action: "string";
            readonly isActive: "?boolean";
            readonly source: "string";
            readonly target: "string";
        };
    };
    readonly CustomTab: {
        readonly type: "CustomTab";
        readonly props: {
            readonly actionOverrides: readonly ["ActionOverride"];
            readonly auraComponent: "?string";
            readonly customObject: "?boolean";
            readonly description: "?string";
            readonly flexiPage: "?string";
            readonly frameHeight: "?number";
            readonly hasSidebar: "?boolean";
            readonly icon: "?string";
            readonly label: "?string";
            readonly lwcComponent: "?string";
            readonly motif: "?string";
            readonly page: "?string";
            readonly scontrol: "?string";
            readonly splashPageLink: "?string";
            readonly url: "?string";
            readonly urlEncodingKey: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly Dashboard: {
        readonly type: "Dashboard";
        readonly props: {
            readonly backgroundEndColor: "string";
            readonly backgroundFadeDirection: "string";
            readonly backgroundStartColor: "string";
            readonly chartTheme: "?string";
            readonly colorPalette: "?string";
            readonly dashboardChartTheme: "?string";
            readonly dashboardColorPalette: "?string";
            readonly dashboardFilters: readonly ["DashboardFilter"];
            readonly dashboardGridLayout: "?DashboardGridLayout";
            readonly dashboardResultRefreshedDate: "?string";
            readonly dashboardResultRunningUser: "?string";
            readonly dashboardType: "?string";
            readonly description: "?string";
            readonly folderName: "?string";
            readonly isGridLayout: "?boolean";
            readonly leftSection: "?DashboardComponentSection";
            readonly middleSection: "?DashboardComponentSection";
            readonly numSubscriptions: "?number";
            readonly rightSection: "?DashboardComponentSection";
            readonly runningUser: "?string";
            readonly textColor: "string";
            readonly title: "string";
            readonly titleColor: "string";
            readonly titleSize: "number";
        };
        readonly extends: "Metadata";
    };
    readonly DashboardFilter: {
        readonly type: "DashboardFilter";
        readonly props: {
            readonly dashboardFilterOptions: readonly ["DashboardFilterOption"];
            readonly name: "string";
        };
    };
    readonly DashboardFilterOption: {
        readonly type: "DashboardFilterOption";
        readonly props: {
            readonly operator: "string";
            readonly values: readonly ["string"];
        };
    };
    readonly DashboardGridLayout: {
        readonly type: "DashboardGridLayout";
        readonly props: {
            readonly dashboardGridComponents: readonly ["DashboardGridComponent"];
            readonly numberOfColumns: "number";
            readonly rowHeight: "number";
        };
    };
    readonly DashboardGridComponent: {
        readonly type: "DashboardGridComponent";
        readonly props: {
            readonly colSpan: "number";
            readonly columnIndex: "number";
            readonly dashboardComponent: "DashboardComponent";
            readonly rowIndex: "number";
            readonly rowSpan: "number";
        };
    };
    readonly DashboardComponent: {
        readonly type: "DashboardComponent";
        readonly props: {
            readonly autoselectColumnsFromReport: "?boolean";
            readonly chartAxisRange: "?string";
            readonly chartAxisRangeMax: "?number";
            readonly chartAxisRangeMin: "?number";
            readonly chartSummary: readonly ["ChartSummary"];
            readonly componentChartTheme: "?string";
            readonly componentType: "string";
            readonly dashboardFilterColumns: readonly ["DashboardFilterColumn"];
            readonly dashboardTableColumn: readonly ["DashboardTableColumn"];
            readonly decimalPrecision: "?number";
            readonly displayUnits: "?string";
            readonly drillDownUrl: "?string";
            readonly drillEnabled: "?boolean";
            readonly drillToDetailEnabled: "?boolean";
            readonly enableHover: "?boolean";
            readonly expandOthers: "?boolean";
            readonly flexComponentProperties: "?DashboardFlexTableComponentProperties";
            readonly footer: "?string";
            readonly gaugeMax: "?number";
            readonly gaugeMin: "?number";
            readonly groupingColumn: readonly ["string"];
            readonly groupingSortProperties: "?DashboardComponentGroupingSortProperties";
            readonly header: "?string";
            readonly indicatorBreakpoint1: "?number";
            readonly indicatorBreakpoint2: "?number";
            readonly indicatorHighColor: "?string";
            readonly indicatorLowColor: "?string";
            readonly indicatorMiddleColor: "?string";
            readonly legendPosition: "?string";
            readonly maxValuesDisplayed: "?number";
            readonly metricLabel: "?string";
            readonly page: "?string";
            readonly pageHeightInPixels: "?number";
            readonly report: "?string";
            readonly scontrol: "?string";
            readonly scontrolHeightInPixels: "?number";
            readonly showPercentage: "?boolean";
            readonly showPicturesOnCharts: "?boolean";
            readonly showPicturesOnTables: "?boolean";
            readonly showRange: "?boolean";
            readonly showTotal: "?boolean";
            readonly showValues: "?boolean";
            readonly sortBy: "?string";
            readonly title: "?string";
            readonly useReportChart: "?boolean";
        };
    };
    readonly ChartSummary: {
        readonly type: "ChartSummary";
        readonly props: {
            readonly aggregate: "?string";
            readonly axisBinding: "?string";
            readonly column: "string";
        };
    };
    readonly DashboardFilterColumn: {
        readonly type: "DashboardFilterColumn";
        readonly props: {
            readonly column: "string";
        };
    };
    readonly DashboardTableColumn: {
        readonly type: "DashboardTableColumn";
        readonly props: {
            readonly aggregateType: "?string";
            readonly calculatePercent: "?boolean";
            readonly column: "string";
            readonly decimalPlaces: "?number";
            readonly showSubTotal: "?boolean";
            readonly showTotal: "?boolean";
            readonly sortBy: "?string";
        };
    };
    readonly DashboardFlexTableComponentProperties: {
        readonly type: "DashboardFlexTableComponentProperties";
        readonly props: {
            readonly decimalPrecision: "?number";
            readonly flexTableColumn: readonly ["DashboardComponentColumn"];
            readonly flexTableSortInfo: "?DashboardComponentSortInfo";
            readonly hideChatterPhotos: "?boolean";
        };
    };
    readonly DashboardComponentColumn: {
        readonly type: "DashboardComponentColumn";
        readonly props: {
            readonly breakPoint1: "?number";
            readonly breakPoint2: "?number";
            readonly breakPointOrder: "?number";
            readonly highRangeColor: "?number";
            readonly lowRangeColor: "?number";
            readonly midRangeColor: "?number";
            readonly reportColumn: "string";
            readonly showSubTotal: "?boolean";
            readonly showTotal: "?boolean";
            readonly type: "string";
        };
    };
    readonly DashboardComponentSortInfo: {
        readonly type: "DashboardComponentSortInfo";
        readonly props: {
            readonly sortColumn: "?string";
            readonly sortOrder: "?string";
        };
    };
    readonly DashboardComponentGroupingSortProperties: {
        readonly type: "DashboardComponentGroupingSortProperties";
        readonly props: {
            readonly groupingSorts: readonly ["DashboardComponentGroupingSort"];
        };
    };
    readonly DashboardComponentGroupingSort: {
        readonly type: "DashboardComponentGroupingSort";
        readonly props: {
            readonly groupingLevel: "string";
            readonly inheritedReportGroupingSort: "?string";
            readonly sortColumn: "?string";
            readonly sortOrder: "?string";
        };
    };
    readonly DashboardComponentSection: {
        readonly type: "DashboardComponentSection";
        readonly props: {
            readonly columnSize: "string";
            readonly components: readonly ["DashboardComponent"];
        };
    };
    readonly DataCategoryGroup: {
        readonly type: "DataCategoryGroup";
        readonly props: {
            readonly active: "boolean";
            readonly dataCategory: "DataCategory";
            readonly description: "?string";
            readonly label: "string";
            readonly objectUsage: "?ObjectUsage";
        };
        readonly extends: "Metadata";
    };
    readonly DataCategory: {
        readonly type: "DataCategory";
        readonly props: {
            readonly dataCategory: readonly ["DataCategory"];
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly ObjectUsage: {
        readonly type: "ObjectUsage";
        readonly props: {
            readonly object: readonly ["string"];
        };
    };
    readonly DataDotComSettings: {
        readonly type: "DataDotComSettings";
        readonly props: {
            readonly enableAccountExportButtonOff: "?boolean";
            readonly enableAccountImportButtonOff: "?boolean";
            readonly enableAllowDupeContactFromLead: "?boolean";
            readonly enableAllowDupeLeadFromContact: "?boolean";
            readonly enableCleanUpgradeRequested: "?boolean";
            readonly enableContactExportButtonOff: "?boolean";
            readonly enableContactImportButtonOff: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly DelegateGroup: {
        readonly type: "DelegateGroup";
        readonly props: {
            readonly customObjects: readonly ["string"];
            readonly groups: readonly ["string"];
            readonly label: "string";
            readonly loginAccess: "boolean";
            readonly permissionSets: readonly ["string"];
            readonly profiles: readonly ["string"];
            readonly roles: readonly ["string"];
        };
        readonly extends: "Metadata";
    };
    readonly DeploymentSettings: {
        readonly type: "DeploymentSettings";
        readonly props: {
            readonly doesSkipAsyncApexValidation: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly DevHubSettings: {
        readonly type: "DevHubSettings";
        readonly props: {
            readonly enableShapeExportPref: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly DiscoverySettings: {
        readonly type: "DiscoverySettings";
        readonly props: {
            readonly enableEinsteinAnswersPref: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly DocumentType: {
        readonly type: "DocumentType";
        readonly props: {
            readonly description: "string";
            readonly isActive: "boolean";
            readonly masterLabel: "string";
        };
        readonly extends: "Metadata";
    };
    readonly DuplicateRule: {
        readonly type: "DuplicateRule";
        readonly props: {
            readonly actionOnInsert: "string";
            readonly actionOnUpdate: "string";
            readonly alertText: "?string";
            readonly description: "?string";
            readonly duplicateRuleFilter: "?DuplicateRuleFilter";
            readonly duplicateRuleMatchRules: readonly ["?", "DuplicateRuleMatchRule"];
            readonly isActive: "boolean";
            readonly masterLabel: "string";
            readonly operationsOnInsert: readonly ["string"];
            readonly operationsOnUpdate: readonly ["string"];
            readonly securityOption: "string";
            readonly sortOrder: "number";
        };
        readonly extends: "Metadata";
    };
    readonly DuplicateRuleFilter: {
        readonly type: "DuplicateRuleFilter";
        readonly props: {
            readonly booleanFilter: "?string";
            readonly duplicateRuleFilterItems: readonly ["DuplicateRuleFilterItem"];
        };
    };
    readonly DuplicateRuleMatchRule: {
        readonly type: "DuplicateRuleMatchRule";
        readonly props: {
            readonly matchRuleSObjectType: "string";
            readonly matchingRule: "string";
            readonly objectMapping: "?ObjectMapping";
        };
    };
    readonly ObjectMapping: {
        readonly type: "ObjectMapping";
        readonly props: {
            readonly inputObject: "string";
            readonly mappingFields: readonly ["ObjectMappingField"];
            readonly outputObject: "string";
        };
    };
    readonly ObjectMappingField: {
        readonly type: "ObjectMappingField";
        readonly props: {
            readonly inputField: "string";
            readonly outputField: "string";
        };
    };
    readonly EACSettings: {
        readonly type: "EACSettings";
        readonly props: {
            readonly enableEACForEveryonePref: "?boolean";
            readonly enableInboxActivitySharing: "?boolean";
            readonly enableInsightsInTimeline: "?boolean";
            readonly enableInsightsInTimelineEacStd: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly EmailAdministrationSettings: {
        readonly type: "EmailAdministrationSettings";
        readonly props: {
            readonly enableComplianceBcc: "?boolean";
            readonly enableEmailConsentManagement: "?boolean";
            readonly enableEmailSenderIdCompliance: "?boolean";
            readonly enableEmailSpfCompliance: "?boolean";
            readonly enableEmailToSalesforce: "?boolean";
            readonly enableEmailWorkflowApproval: "?boolean";
            readonly enableEnhancedEmailEnabled: "?boolean";
            readonly enableHandleBouncedEmails: "?boolean";
            readonly enableHtmlEmail: "?boolean";
            readonly enableListEmailLogActivities: "?boolean";
            readonly enableResendBouncedEmails: "?boolean";
            readonly enableRestrictTlsToDomains: "?boolean";
            readonly enableSendThroughGmailPref: "?boolean";
            readonly enableSendViaExchangePref: "?boolean";
            readonly enableSendViaGmailPref: "?boolean";
            readonly enableSetMatchingEmailsOnBounce: "?boolean";
            readonly enableUseOrgFootersForExtTrans: "?boolean";
            readonly sendEmailsEvenWhenAutomationUpdatesSameRecord: "?boolean";
            readonly sendMassEmailNotification: "?boolean";
            readonly sendTextOnlySystemEmails: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly EmailIntegrationSettings: {
        readonly type: "EmailIntegrationSettings";
        readonly props: {
            readonly doesEmailLogAsEmailMessageInOutlook: "?boolean";
            readonly doesGmailStayConnectedToSalesforce: "?boolean";
            readonly enableContactAndEventSync: "?boolean";
            readonly enableEmailTrackingInMobile: "?boolean";
            readonly enableEngageForOutlook: "?boolean";
            readonly enableGmailIntegration: "?boolean";
            readonly enableOutlookIntegration: "?boolean";
            readonly enableProductivityFeatures: "?boolean";
            readonly enableSupplementalContactInfoInMobile: "?boolean";
            readonly isLayoutCustomizationAllowed: "?boolean";
            readonly shouldUseTrustedDomainsList: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly EmailServicesFunction: {
        readonly type: "EmailServicesFunction";
        readonly props: {
            readonly apexClass: "string";
            readonly attachmentOption: "string";
            readonly authenticationFailureAction: "string";
            readonly authorizationFailureAction: "string";
            readonly authorizedSenders: "?string";
            readonly emailServicesAddresses: readonly ["EmailServicesAddress"];
            readonly errorRoutingAddress: "?string";
            readonly functionInactiveAction: "string";
            readonly functionName: "string";
            readonly isActive: "?boolean";
            readonly isAuthenticationRequired: "?boolean";
            readonly isErrorRoutingEnabled: "?boolean";
            readonly isTextAttachmentsAsBinary: "?boolean";
            readonly isTlsRequired: "?boolean";
            readonly overLimitAction: "string";
        };
        readonly extends: "Metadata";
    };
    readonly EmailServicesAddress: {
        readonly type: "EmailServicesAddress";
        readonly props: {
            readonly authorizedSenders: "?string";
            readonly developerName: "string";
            readonly isActive: "?boolean";
            readonly localPart: "string";
            readonly runAsUser: "string";
        };
    };
    readonly EmailTemplateSettings: {
        readonly type: "EmailTemplateSettings";
        readonly props: {
            readonly enableLwcEmailTemplateBuilder: "?boolean";
            readonly enableTemplateEnhancedFolderPref: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly EmbeddedServiceBranding: {
        readonly type: "EmbeddedServiceBranding";
        readonly props: {
            readonly contrastInvertedColor: "?string";
            readonly contrastPrimaryColor: "?string";
            readonly embeddedServiceConfig: "string";
            readonly font: "?string";
            readonly height: "?number";
            readonly masterLabel: "string";
            readonly navBarColor: "?string";
            readonly primaryColor: "?string";
            readonly secondaryColor: "?string";
            readonly width: "?number";
        };
        readonly extends: "Metadata";
    };
    readonly EmbeddedServiceConfig: {
        readonly type: "EmbeddedServiceConfig";
        readonly props: {
            readonly areGuestUsersAllowed: "?boolean";
            readonly authMethod: "?string";
            readonly embeddedServiceAppointmentSettings: "?EmbeddedServiceAppointmentSettings";
            readonly embeddedServiceCustomComponents: readonly ["EmbeddedServiceCustomComponent"];
            readonly embeddedServiceCustomLabels: readonly ["EmbeddedServiceCustomLabel"];
            readonly embeddedServiceFlowConfig: "?EmbeddedServiceFlowConfig";
            readonly embeddedServiceFlows: readonly ["EmbeddedServiceFlow"];
            readonly embeddedServiceLayouts: readonly ["EmbeddedServiceLayout"];
            readonly masterLabel: "string";
            readonly shouldHideAuthDialog: "?boolean";
            readonly site: "string";
        };
        readonly extends: "Metadata";
    };
    readonly EmbeddedServiceAppointmentSettings: {
        readonly type: "EmbeddedServiceAppointmentSettings";
        readonly props: {
            readonly appointmentConfirmImg: "?string";
            readonly enabled: "boolean";
            readonly homeImg: "?string";
            readonly logoImg: "?string";
            readonly shouldShowExistingAppointment: "?boolean";
            readonly shouldShowNewAppointment: "?boolean";
        };
    };
    readonly EmbeddedServiceCustomComponent: {
        readonly type: "EmbeddedServiceCustomComponent";
        readonly props: {
            readonly componentBundleType: "?string";
            readonly customComponent: "?string";
            readonly customComponentType: "?string";
        };
    };
    readonly EmbeddedServiceCustomLabel: {
        readonly type: "EmbeddedServiceCustomLabel";
        readonly props: {
            readonly customLabel: "?string";
            readonly feature: "?string";
            readonly labelKey: "?string";
        };
    };
    readonly EmbeddedServiceFlowConfig: {
        readonly type: "EmbeddedServiceFlowConfig";
        readonly props: {
            readonly enabled: "boolean";
        };
        readonly extends: "Metadata";
    };
    readonly EmbeddedServiceFlow: {
        readonly type: "EmbeddedServiceFlow";
        readonly props: {
            readonly flow: "string";
            readonly flowType: "string";
            readonly isAuthenticationRequired: "boolean";
        };
    };
    readonly EmbeddedServiceLayout: {
        readonly type: "EmbeddedServiceLayout";
        readonly props: {
            readonly embeddedServiceLayoutRules: readonly ["EmbeddedServiceLayoutRule"];
            readonly layout: "string";
            readonly layoutType: "?string";
        };
    };
    readonly EmbeddedServiceLayoutRule: {
        readonly type: "EmbeddedServiceLayoutRule";
        readonly props: {
            readonly appointmentStatus: "string";
        };
    };
    readonly EmbeddedServiceLiveAgent: {
        readonly type: "EmbeddedServiceLiveAgent";
        readonly props: {
            readonly avatarImg: "?string";
            readonly embeddedServiceConfig: "string";
            readonly embeddedServiceQuickActions: readonly ["EmbeddedServiceQuickAction"];
            readonly enabled: "boolean";
            readonly fontSize: "string";
            readonly headerBackgroundImg: "?string";
            readonly isOfflineCaseEnabled: "?boolean";
            readonly isQueuePositionEnabled: "?boolean";
            readonly liveAgentChatUrl: "?string";
            readonly liveAgentContentUrl: "?string";
            readonly liveChatButton: "string";
            readonly liveChatDeployment: "string";
            readonly masterLabel: "string";
            readonly offlineCaseBackgroundImg: "?string";
            readonly prechatBackgroundImg: "?string";
            readonly prechatEnabled: "boolean";
            readonly prechatJson: "?string";
            readonly scenario: "string";
            readonly smallCompanyLogoImg: "?string";
            readonly waitingStateBackgroundImg: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly EmbeddedServiceQuickAction: {
        readonly type: "EmbeddedServiceQuickAction";
        readonly props: {
            readonly embeddedServiceLiveAgent: "string";
            readonly order: "number";
            readonly quickActionDefinition: "string";
            readonly quickActionType: "?string";
        };
    };
    readonly EmbeddedServiceMenuSettings: {
        readonly type: "EmbeddedServiceMenuSettings";
        readonly props: {
            readonly branding: "?string";
            readonly embeddedServiceMenuItems: readonly ["EmbeddedServiceMenuItem"];
            readonly isEnabled: "?boolean";
            readonly masterLabel: "?string";
            readonly site: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly EmbeddedServiceMenuItem: {
        readonly type: "EmbeddedServiceMenuItem";
        readonly props: {
            readonly channel: "?string";
            readonly channelType: "?string";
            readonly displayOrder: "?number";
            readonly phoneNumber: "?string";
        };
    };
    readonly EncryptionKeySettings: {
        readonly type: "EncryptionKeySettings";
        readonly props: {
            readonly canOptOutOfDerivationWithBYOK: "?boolean";
            readonly enableCacheOnlyKeys: "?boolean";
            readonly enableReplayDetection: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly EnhancedNotesSettings: {
        readonly type: "EnhancedNotesSettings";
        readonly props: {
            readonly enableEnhancedNotes: "?boolean";
            readonly enableTasksOnEnhancedNotes: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly EntitlementProcess: {
        readonly type: "EntitlementProcess";
        readonly props: {
            readonly SObjectType: "?string";
            readonly active: "?boolean";
            readonly businessHours: "?string";
            readonly description: "?string";
            readonly entryStartDateField: "?string";
            readonly exitCriteriaBooleanFilter: "?string";
            readonly exitCriteriaFilterItems: readonly ["FilterItem"];
            readonly exitCriteriaFormula: "?string";
            readonly isRecordTypeApplied: "?boolean";
            readonly isVersionDefault: "?boolean";
            readonly milestones: readonly ["EntitlementProcessMilestoneItem"];
            readonly name: "?string";
            readonly recordType: "?string";
            readonly versionMaster: "?string";
            readonly versionNotes: "?string";
            readonly versionNumber: "?number";
        };
        readonly extends: "Metadata";
    };
    readonly EntitlementProcessMilestoneItem: {
        readonly type: "EntitlementProcessMilestoneItem";
        readonly props: {
            readonly businessHours: "?string";
            readonly criteriaBooleanFilter: "?string";
            readonly milestoneCriteriaFilterItems: readonly ["FilterItem"];
            readonly milestoneCriteriaFormula: "?string";
            readonly milestoneName: "?string";
            readonly minutesCustomClass: "?string";
            readonly minutesToComplete: "?number";
            readonly successActions: readonly ["WorkflowActionReference"];
            readonly timeTriggers: readonly ["EntitlementProcessMilestoneTimeTrigger"];
            readonly useCriteriaStartTime: "?boolean";
        };
    };
    readonly EntitlementProcessMilestoneTimeTrigger: {
        readonly type: "EntitlementProcessMilestoneTimeTrigger";
        readonly props: {
            readonly actions: readonly ["WorkflowActionReference"];
            readonly timeLength: "?number";
            readonly workflowTimeTriggerUnit: "string";
        };
    };
    readonly EntitlementSettings: {
        readonly type: "EntitlementSettings";
        readonly props: {
            readonly assetLookupLimitedToActiveEntitlementsOnAccount: "?boolean";
            readonly assetLookupLimitedToActiveEntitlementsOnContact: "?boolean";
            readonly assetLookupLimitedToSameAccount: "?boolean";
            readonly assetLookupLimitedToSameContact: "?boolean";
            readonly enableEntitlementVersioning: "boolean";
            readonly enableEntitlements: "boolean";
            readonly enableMilestoneFeedItem: "?boolean";
            readonly enableMilestoneStoppedTime: "?boolean";
            readonly entitlementLookupLimitedToActiveStatus: "?boolean";
            readonly entitlementLookupLimitedToSameAccount: "?boolean";
            readonly entitlementLookupLimitedToSameAsset: "?boolean";
            readonly entitlementLookupLimitedToSameContact: "?boolean";
            readonly ignoreMilestoneBusinessHours: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly EntitlementTemplate: {
        readonly type: "EntitlementTemplate";
        readonly props: {
            readonly businessHours: "?string";
            readonly casesPerEntitlement: "?number";
            readonly entitlementProcess: "?string";
            readonly isPerIncident: "?boolean";
            readonly term: "?number";
            readonly type: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly EntityImplements: {
        readonly type: "EntityImplements";
        readonly props: {
            readonly fieldMap: readonly ["FieldImplements"];
            readonly interface: "?string";
            readonly isDefault: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly FieldImplements: {
        readonly type: "FieldImplements";
        readonly props: {
            readonly field: "?string";
            readonly interfaceField: "?string";
        };
    };
    readonly EscalationRule: {
        readonly type: "EscalationRule";
        readonly props: {
            readonly active: "?boolean";
            readonly ruleEntry: readonly ["RuleEntry"];
        };
        readonly extends: "Metadata";
    };
    readonly EscalationRules: {
        readonly type: "EscalationRules";
        readonly props: {
            readonly escalationRule: readonly ["EscalationRule"];
        };
        readonly extends: "Metadata";
    };
    readonly EssentialsSettings: {
        readonly type: "EssentialsSettings";
        readonly props: {
            readonly emailConnectorEnabled: "?boolean";
            readonly essentialsAppEnabled: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly EssentialsTrialOrgSettings: {
        readonly type: "EssentialsTrialOrgSettings";
        readonly props: {
            readonly enableSampleDataDeleted: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly EventSettings: {
        readonly type: "EventSettings";
        readonly props: {
            readonly enableApexLimitEvents: "?boolean";
            readonly enableDeleteMonitoringData: "?boolean";
            readonly enableDynamicStreamingChannel: "?boolean";
            readonly enableEventLogWaveIntegration: "?boolean";
            readonly enableLoginForensics: "?boolean";
            readonly enableStreamingApi: "?boolean";
            readonly enableTerminateOldestSession: "?boolean";
            readonly enableTransactionSecurityPolicies: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly ExperienceBundleSettings: {
        readonly type: "ExperienceBundleSettings";
        readonly props: {
            readonly enableExperienceBundleMetadata: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly ExternalDataSource: {
        readonly type: "ExternalDataSource";
        readonly props: {
            readonly authProvider: "?string";
            readonly certificate: "?string";
            readonly customConfiguration: "?string";
            readonly customHttpHeaders: readonly ["CustomHttpHeader"];
            readonly endpoint: "?string";
            readonly isWritable: "?boolean";
            readonly label: "string";
            readonly oauthRefreshToken: "?string";
            readonly oauthScope: "?string";
            readonly oauthToken: "?string";
            readonly password: "?string";
            readonly principalType: "string";
            readonly protocol: "string";
            readonly repository: "?string";
            readonly type: "string";
            readonly username: "?string";
            readonly version: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly CustomHttpHeader: {
        readonly type: "CustomHttpHeader";
        readonly props: {
            readonly description: "?string";
            readonly headerFieldName: "string";
            readonly headerFieldValue: "string";
            readonly isActive: "?boolean";
        };
    };
    readonly ExternalServiceRegistration: {
        readonly type: "ExternalServiceRegistration";
        readonly props: {
            readonly description: "?string";
            readonly label: "string";
            readonly namedCredential: "?string";
            readonly schema: "?string";
            readonly schemaType: "?string";
            readonly schemaUrl: "?string";
            readonly status: "string";
        };
        readonly extends: "Metadata";
    };
    readonly ExternalServicesSettings: {
        readonly type: "ExternalServicesSettings";
        readonly props: {
            readonly enableEnhancedExternalServices: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly FieldServiceSettings: {
        readonly type: "FieldServiceSettings";
        readonly props: {
            readonly capacityUsageCalcClassId: "?string";
            readonly doesAllowEditSaForCrew: "?boolean";
            readonly doesShareSaParentWoWithAr: "?boolean";
            readonly doesShareSaWithAr: "?boolean";
            readonly enableWorkOrders: "?boolean";
            readonly fieldServiceNotificationsOrgPref: "?boolean";
            readonly fieldServiceOrgPref: "?boolean";
            readonly isGeoCodeSyncEnabled: "?boolean";
            readonly isLocationHistoryEnabled: "?boolean";
            readonly serviceAppointmentsDueDateOffsetOrgValue: "?number";
            readonly workOrderLineItemSearchFields: readonly ["string"];
            readonly workOrderSearchFields: readonly ["string"];
        };
        readonly extends: "Metadata";
    };
    readonly FileUploadAndDownloadSecuritySettings: {
        readonly type: "FileUploadAndDownloadSecuritySettings";
        readonly props: {
            readonly dispositions: readonly ["FileTypeDispositionAssignmentBean"];
            readonly noHtmlUploadAsAttachment: "boolean";
        };
        readonly extends: "Metadata";
    };
    readonly FileTypeDispositionAssignmentBean: {
        readonly type: "FileTypeDispositionAssignmentBean";
        readonly props: {
            readonly behavior: "string";
            readonly fileType: "string";
            readonly securityRiskFileType: "boolean";
        };
    };
    readonly FilesConnectSettings: {
        readonly type: "FilesConnectSettings";
        readonly props: {
            readonly enableContentHubAllowed: "?boolean";
            readonly enableContentHubCvtLinksAllowed: "?boolean";
            readonly enableContentHubEOSearchLayout: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly FlexiPage: {
        readonly type: "FlexiPage";
        readonly props: {
            readonly description: "?string";
            readonly flexiPageRegions: readonly ["FlexiPageRegion"];
            readonly masterLabel: "string";
            readonly parentFlexiPage: "?string";
            readonly platformActionlist: "?PlatformActionList";
            readonly quickActionList: "?QuickActionList";
            readonly sobjectType: "?string";
            readonly template: "FlexiPageTemplateInstance";
            readonly type: "string";
        };
        readonly extends: "Metadata";
    };
    readonly FlexiPageRegion: {
        readonly type: "FlexiPageRegion";
        readonly props: {
            readonly appendable: "?string";
            readonly componentInstances: readonly ["ComponentInstance"];
            readonly mode: "?string";
            readonly name: "string";
            readonly prependable: "?string";
            readonly replaceable: "?string";
            readonly type: "string";
        };
    };
    readonly ComponentInstance: {
        readonly type: "ComponentInstance";
        readonly props: {
            readonly componentInstanceProperties: readonly ["ComponentInstanceProperty"];
            readonly componentName: "string";
            readonly visibilityRule: "?UiFormulaRule";
        };
    };
    readonly ComponentInstanceProperty: {
        readonly type: "ComponentInstanceProperty";
        readonly props: {
            readonly name: "?string";
            readonly type: "?string";
            readonly value: "?string";
        };
    };
    readonly UiFormulaRule: {
        readonly type: "UiFormulaRule";
        readonly props: {
            readonly booleanFilter: "?string";
            readonly criteria: readonly ["UiFormulaCriterion"];
        };
    };
    readonly UiFormulaCriterion: {
        readonly type: "UiFormulaCriterion";
        readonly props: {
            readonly leftValue: "string";
            readonly operator: "string";
            readonly rightValue: "?string";
        };
    };
    readonly PlatformActionList: {
        readonly type: "PlatformActionList";
        readonly props: {
            readonly actionListContext: "string";
            readonly platformActionListItems: readonly ["PlatformActionListItem"];
            readonly relatedSourceEntity: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly PlatformActionListItem: {
        readonly type: "PlatformActionListItem";
        readonly props: {
            readonly actionName: "string";
            readonly actionType: "string";
            readonly sortOrder: "number";
            readonly subtype: "?string";
        };
    };
    readonly QuickActionList: {
        readonly type: "QuickActionList";
        readonly props: {
            readonly quickActionListItems: readonly ["QuickActionListItem"];
        };
    };
    readonly QuickActionListItem: {
        readonly type: "QuickActionListItem";
        readonly props: {
            readonly quickActionName: "string";
        };
    };
    readonly FlexiPageTemplateInstance: {
        readonly type: "FlexiPageTemplateInstance";
        readonly props: {
            readonly name: "string";
            readonly properties: readonly ["ComponentInstanceProperty"];
        };
    };
    readonly Flow: {
        readonly type: "Flow";
        readonly props: {
            readonly actionCalls: readonly ["FlowActionCall"];
            readonly apexPluginCalls: readonly ["FlowApexPluginCall"];
            readonly assignments: readonly ["FlowAssignment"];
            readonly choices: readonly ["FlowChoice"];
            readonly constants: readonly ["FlowConstant"];
            readonly decisions: readonly ["FlowDecision"];
            readonly description: "?string";
            readonly dynamicChoiceSets: readonly ["FlowDynamicChoiceSet"];
            readonly formulas: readonly ["FlowFormula"];
            readonly interviewLabel: "?string";
            readonly isAdditionalPermissionRequiredToRun: "?boolean";
            readonly isTemplate: "?boolean";
            readonly label: "string";
            readonly loops: readonly ["FlowLoop"];
            readonly processMetadataValues: readonly ["FlowMetadataValue"];
            readonly processType: "?string";
            readonly recordCreates: readonly ["FlowRecordCreate"];
            readonly recordDeletes: readonly ["FlowRecordDelete"];
            readonly recordLookups: readonly ["FlowRecordLookup"];
            readonly recordUpdates: readonly ["FlowRecordUpdate"];
            readonly screens: readonly ["FlowScreen"];
            readonly stages: readonly ["FlowStage"];
            readonly start: "?FlowStart";
            readonly startElementReference: "?string";
            readonly status: "?string";
            readonly steps: readonly ["FlowStep"];
            readonly subflows: readonly ["FlowSubflow"];
            readonly textTemplates: readonly ["FlowTextTemplate"];
            readonly variables: readonly ["FlowVariable"];
            readonly waits: readonly ["FlowWait"];
        };
        readonly extends: "Metadata";
    };
    readonly FlowActionCall: {
        readonly type: "FlowActionCall";
        readonly props: {
            readonly actionName: "string";
            readonly actionType: "string";
            readonly connector: "?FlowConnector";
            readonly faultConnector: "?FlowConnector";
            readonly inputParameters: readonly ["FlowActionCallInputParameter"];
            readonly outputParameters: readonly ["FlowActionCallOutputParameter"];
        };
        readonly extends: "FlowNode";
    };
    readonly FlowNode: {
        readonly type: "FlowNode";
        readonly props: {
            readonly label: "?string";
            readonly locationX: "number";
            readonly locationY: "number";
        };
        readonly extends: "FlowElement";
    };
    readonly FlowElement: {
        readonly type: "FlowElement";
        readonly props: {
            readonly description: "?string";
            readonly name: "?string";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowBaseElement: {
        readonly type: "FlowBaseElement";
        readonly props: {
            readonly processMetadataValues: readonly ["FlowMetadataValue"];
        };
    };
    readonly FlowMetadataValue: {
        readonly type: "FlowMetadataValue";
        readonly props: {
            readonly name: "string";
            readonly value: "?FlowElementReferenceOrValue";
        };
    };
    readonly FlowElementReferenceOrValue: {
        readonly type: "FlowElementReferenceOrValue";
        readonly props: {
            readonly booleanValue: "?boolean";
            readonly dateTimeValue: "?string";
            readonly dateValue: "?string";
            readonly elementReference: "?string";
            readonly numberValue: "?number";
            readonly stringValue: "?string";
        };
    };
    readonly FlowActionCallInputParameter: {
        readonly type: "FlowActionCallInputParameter";
        readonly props: {
            readonly name: "string";
            readonly value: "?FlowElementReferenceOrValue";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowActionCallOutputParameter: {
        readonly type: "FlowActionCallOutputParameter";
        readonly props: {
            readonly assignToReference: "string";
            readonly name: "string";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowApexPluginCallInputParameter: {
        readonly type: "FlowApexPluginCallInputParameter";
        readonly props: {
            readonly name: "string";
            readonly value: "?FlowElementReferenceOrValue";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowApexPluginCallOutputParameter: {
        readonly type: "FlowApexPluginCallOutputParameter";
        readonly props: {
            readonly assignToReference: "string";
            readonly name: "string";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowAssignmentItem: {
        readonly type: "FlowAssignmentItem";
        readonly props: {
            readonly assignToReference: "string";
            readonly operator: "string";
            readonly value: "?FlowElementReferenceOrValue";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowChoiceUserInput: {
        readonly type: "FlowChoiceUserInput";
        readonly props: {
            readonly isRequired: "?boolean";
            readonly promptText: "?string";
            readonly validationRule: "?FlowInputValidationRule";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowInputValidationRule: {
        readonly type: "FlowInputValidationRule";
        readonly props: {
            readonly errorMessage: "string";
            readonly formulaExpression: "string";
        };
    };
    readonly FlowCondition: {
        readonly type: "FlowCondition";
        readonly props: {
            readonly leftValueReference: "string";
            readonly operator: "string";
            readonly rightValue: "?FlowElementReferenceOrValue";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowConnector: {
        readonly type: "FlowConnector";
        readonly props: {
            readonly targetReference: "string";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowInputFieldAssignment: {
        readonly type: "FlowInputFieldAssignment";
        readonly props: {
            readonly field: "string";
            readonly value: "?FlowElementReferenceOrValue";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowOutputFieldAssignment: {
        readonly type: "FlowOutputFieldAssignment";
        readonly props: {
            readonly assignToReference: "string";
            readonly field: "string";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowRecordFilter: {
        readonly type: "FlowRecordFilter";
        readonly props: {
            readonly field: "string";
            readonly operator: "string";
            readonly value: "?FlowElementReferenceOrValue";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowScreenFieldInputParameter: {
        readonly type: "FlowScreenFieldInputParameter";
        readonly props: {
            readonly name: "string";
            readonly value: "?FlowElementReferenceOrValue";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowScreenFieldOutputParameter: {
        readonly type: "FlowScreenFieldOutputParameter";
        readonly props: {
            readonly assignToReference: "string";
            readonly name: "string";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowScreenRule: {
        readonly type: "FlowScreenRule";
        readonly props: {
            readonly conditionLogic: "?string";
            readonly conditions: readonly ["FlowCondition"];
            readonly label: "string";
            readonly ruleActions: readonly ["FlowScreenRuleAction"];
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowScreenRuleAction: {
        readonly type: "FlowScreenRuleAction";
        readonly props: {
            readonly attribute: "string";
            readonly fieldReference: "string";
            readonly value: "?FlowElementReferenceOrValue";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowSubflowInputAssignment: {
        readonly type: "FlowSubflowInputAssignment";
        readonly props: {
            readonly name: "string";
            readonly value: "?FlowElementReferenceOrValue";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowSubflowOutputAssignment: {
        readonly type: "FlowSubflowOutputAssignment";
        readonly props: {
            readonly assignToReference: "string";
            readonly name: "string";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowVisibilityRule: {
        readonly type: "FlowVisibilityRule";
        readonly props: {
            readonly conditionLogic: "?string";
            readonly conditions: readonly ["FlowCondition"];
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowWaitEventInputParameter: {
        readonly type: "FlowWaitEventInputParameter";
        readonly props: {
            readonly name: "string";
            readonly value: "?FlowElementReferenceOrValue";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowWaitEventOutputParameter: {
        readonly type: "FlowWaitEventOutputParameter";
        readonly props: {
            readonly assignToReference: "string";
            readonly name: "string";
        };
        readonly extends: "FlowBaseElement";
    };
    readonly FlowChoice: {
        readonly type: "FlowChoice";
        readonly props: {
            readonly choiceText: "string";
            readonly dataType: "string";
            readonly userInput: "?FlowChoiceUserInput";
            readonly value: "?FlowElementReferenceOrValue";
        };
        readonly extends: "FlowElement";
    };
    readonly FlowConstant: {
        readonly type: "FlowConstant";
        readonly props: {
            readonly dataType: "string";
            readonly value: "?FlowElementReferenceOrValue";
        };
        readonly extends: "FlowElement";
    };
    readonly FlowDynamicChoiceSet: {
        readonly type: "FlowDynamicChoiceSet";
        readonly props: {
            readonly dataType: "string";
            readonly displayField: "string";
            readonly filters: readonly ["FlowRecordFilter"];
            readonly limit: "?number";
            readonly object: "string";
            readonly outputAssignments: readonly ["FlowOutputFieldAssignment"];
            readonly picklistField: "?string";
            readonly picklistObject: "?string";
            readonly sortField: "?string";
            readonly sortOrder: "?string";
            readonly valueField: "?string";
        };
        readonly extends: "FlowElement";
    };
    readonly FlowFormula: {
        readonly type: "FlowFormula";
        readonly props: {
            readonly dataType: "?string";
            readonly expression: "string";
            readonly scale: "?number";
        };
        readonly extends: "FlowElement";
    };
    readonly FlowRule: {
        readonly type: "FlowRule";
        readonly props: {
            readonly conditionLogic: "string";
            readonly conditions: readonly ["FlowCondition"];
            readonly connector: "?FlowConnector";
            readonly label: "string";
        };
        readonly extends: "FlowElement";
    };
    readonly FlowScreenField: {
        readonly type: "FlowScreenField";
        readonly props: {
            readonly choiceReferences: readonly ["string"];
            readonly dataType: "?string";
            readonly defaultSelectedChoiceReference: "?string";
            readonly defaultValue: "?FlowElementReferenceOrValue";
            readonly extensionName: "?string";
            readonly fieldText: "?string";
            readonly fieldType: "string";
            readonly helpText: "?string";
            readonly inputParameters: readonly ["FlowScreenFieldInputParameter"];
            readonly isRequired: "?boolean";
            readonly isVisible: "?boolean";
            readonly outputParameters: readonly ["FlowScreenFieldOutputParameter"];
            readonly scale: "?number";
            readonly storeOutputAutomatically: "?boolean";
            readonly validationRule: "?FlowInputValidationRule";
            readonly visibilityRule: "?FlowVisibilityRule";
        };
        readonly extends: "FlowElement";
    };
    readonly FlowStage: {
        readonly type: "FlowStage";
        readonly props: {
            readonly isActive: "boolean";
            readonly label: "string";
            readonly stageOrder: "number";
        };
        readonly extends: "FlowElement";
    };
    readonly FlowTextTemplate: {
        readonly type: "FlowTextTemplate";
        readonly props: {
            readonly text: "string";
        };
        readonly extends: "FlowElement";
    };
    readonly FlowVariable: {
        readonly type: "FlowVariable";
        readonly props: {
            readonly apexClass: "?string";
            readonly dataType: "string";
            readonly isCollection: "?boolean";
            readonly isInput: "?boolean";
            readonly isOutput: "?boolean";
            readonly objectType: "?string";
            readonly scale: "?number";
            readonly value: "?FlowElementReferenceOrValue";
        };
        readonly extends: "FlowElement";
    };
    readonly FlowWaitEvent: {
        readonly type: "FlowWaitEvent";
        readonly props: {
            readonly conditionLogic: "?string";
            readonly conditions: readonly ["FlowCondition"];
            readonly connector: "FlowConnector";
            readonly eventType: "string";
            readonly inputParameters: readonly ["FlowWaitEventInputParameter"];
            readonly label: "string";
            readonly outputParameters: readonly ["FlowWaitEventOutputParameter"];
        };
        readonly extends: "FlowElement";
    };
    readonly FlowApexPluginCall: {
        readonly type: "FlowApexPluginCall";
        readonly props: {
            readonly apexClass: "string";
            readonly connector: "?FlowConnector";
            readonly faultConnector: "?FlowConnector";
            readonly inputParameters: readonly ["FlowApexPluginCallInputParameter"];
            readonly outputParameters: readonly ["FlowApexPluginCallOutputParameter"];
        };
        readonly extends: "FlowNode";
    };
    readonly FlowAssignment: {
        readonly type: "FlowAssignment";
        readonly props: {
            readonly assignmentItems: readonly ["FlowAssignmentItem"];
            readonly connector: "?FlowConnector";
        };
        readonly extends: "FlowNode";
    };
    readonly FlowDecision: {
        readonly type: "FlowDecision";
        readonly props: {
            readonly defaultConnector: "?FlowConnector";
            readonly defaultConnectorLabel: "?string";
            readonly rules: readonly ["FlowRule"];
        };
        readonly extends: "FlowNode";
    };
    readonly FlowLoop: {
        readonly type: "FlowLoop";
        readonly props: {
            readonly assignNextValueToReference: "string";
            readonly collectionReference: "string";
            readonly iterationOrder: "?string";
            readonly nextValueConnector: "?FlowConnector";
            readonly noMoreValuesConnector: "?FlowConnector";
        };
        readonly extends: "FlowNode";
    };
    readonly FlowRecordCreate: {
        readonly type: "FlowRecordCreate";
        readonly props: {
            readonly assignRecordIdToReference: "?string";
            readonly connector: "?FlowConnector";
            readonly faultConnector: "?FlowConnector";
            readonly inputAssignments: readonly ["FlowInputFieldAssignment"];
            readonly inputReference: "?string";
            readonly object: "?string";
        };
        readonly extends: "FlowNode";
    };
    readonly FlowRecordDelete: {
        readonly type: "FlowRecordDelete";
        readonly props: {
            readonly connector: "?FlowConnector";
            readonly faultConnector: "?FlowConnector";
            readonly filters: readonly ["FlowRecordFilter"];
            readonly inputReference: "?string";
            readonly object: "?string";
        };
        readonly extends: "FlowNode";
    };
    readonly FlowRecordLookup: {
        readonly type: "FlowRecordLookup";
        readonly props: {
            readonly assignNullValuesIfNoRecordsFound: "?boolean";
            readonly connector: "?FlowConnector";
            readonly faultConnector: "?FlowConnector";
            readonly filters: readonly ["FlowRecordFilter"];
            readonly getFirstRecordOnly: "?boolean";
            readonly object: "string";
            readonly outputAssignments: readonly ["FlowOutputFieldAssignment"];
            readonly outputReference: "?string";
            readonly queriedFields: readonly ["string"];
            readonly sortField: "?string";
            readonly sortOrder: "?string";
            readonly storeOutputAutomatically: "?boolean";
        };
        readonly extends: "FlowNode";
    };
    readonly FlowRecordUpdate: {
        readonly type: "FlowRecordUpdate";
        readonly props: {
            readonly connector: "?FlowConnector";
            readonly faultConnector: "?FlowConnector";
            readonly filters: readonly ["FlowRecordFilter"];
            readonly inputAssignments: readonly ["FlowInputFieldAssignment"];
            readonly inputReference: "?string";
            readonly object: "?string";
        };
        readonly extends: "FlowNode";
    };
    readonly FlowScreen: {
        readonly type: "FlowScreen";
        readonly props: {
            readonly allowBack: "?boolean";
            readonly allowFinish: "?boolean";
            readonly allowPause: "?boolean";
            readonly connector: "?FlowConnector";
            readonly fields: readonly ["FlowScreenField"];
            readonly helpText: "?string";
            readonly pausedText: "?string";
            readonly rules: readonly ["FlowScreenRule"];
            readonly showFooter: "?boolean";
            readonly showHeader: "?boolean";
        };
        readonly extends: "FlowNode";
    };
    readonly FlowStart: {
        readonly type: "FlowStart";
        readonly props: {
            readonly connector: "?FlowConnector";
            readonly filters: readonly ["FlowRecordFilter"];
            readonly object: "?string";
            readonly schedule: "?FlowSchedule";
            readonly triggerType: "?string";
        };
        readonly extends: "FlowNode";
    };
    readonly FlowSchedule: {
        readonly type: "FlowSchedule";
        readonly props: {
            readonly frequency: "?string";
            readonly startDate: "?string";
            readonly startTime: "?string";
        };
    };
    readonly FlowStep: {
        readonly type: "FlowStep";
        readonly props: {
            readonly connectors: readonly ["FlowConnector"];
        };
        readonly extends: "FlowNode";
    };
    readonly FlowSubflow: {
        readonly type: "FlowSubflow";
        readonly props: {
            readonly connector: "?FlowConnector";
            readonly flowName: "string";
            readonly inputAssignments: readonly ["FlowSubflowInputAssignment"];
            readonly outputAssignments: readonly ["FlowSubflowOutputAssignment"];
        };
        readonly extends: "FlowNode";
    };
    readonly FlowWait: {
        readonly type: "FlowWait";
        readonly props: {
            readonly defaultConnector: "?FlowConnector";
            readonly defaultConnectorLabel: "string";
            readonly faultConnector: "?FlowConnector";
            readonly waitEvents: readonly ["FlowWaitEvent"];
        };
        readonly extends: "FlowNode";
    };
    readonly FlowCategory: {
        readonly type: "FlowCategory";
        readonly props: {
            readonly description: "?string";
            readonly flowCategoryItems: readonly ["FlowCategoryItems"];
            readonly masterLabel: "string";
        };
        readonly extends: "Metadata";
    };
    readonly FlowCategoryItems: {
        readonly type: "FlowCategoryItems";
        readonly props: {
            readonly flow: "string";
        };
    };
    readonly FlowDefinition: {
        readonly type: "FlowDefinition";
        readonly props: {
            readonly activeVersionNumber: "?number";
            readonly description: "?string";
            readonly masterLabel: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly FlowSettings: {
        readonly type: "FlowSettings";
        readonly props: {
            readonly enableFlowBREncodedFixEnabled: "?boolean";
            readonly enableFlowDeployAsActiveEnabled: "?boolean";
            readonly enableFlowFieldFilterEnabled: "?boolean";
            readonly enableFlowFormulasFixEnabled: "?boolean";
            readonly enableFlowInterviewSharingEnabled: "?boolean";
            readonly enableFlowNullPreviousValueFix: "?boolean";
            readonly enableFlowPauseEnabled: "?boolean";
            readonly enableFlowUseApexExceptionEmail: "?boolean";
            readonly enableInvocableFlowFixEnabled: "?boolean";
            readonly enableLightningRuntimeEnabled: "?boolean";
            readonly enableUseFlowBuilder: "?boolean";
            readonly isAccessToInvokedApexRequired: "?boolean";
            readonly isEnhancedFlowListViewVisible: "?boolean";
            readonly isManageFlowRequiredForAutomationCharts: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly Folder: {
        readonly type: "Folder";
        readonly props: {
            readonly accessType: "?string";
            readonly folderShares: readonly ["FolderShare"];
            readonly name: "string";
            readonly publicFolderAccess: "?string";
            readonly sharedTo: "?SharedTo";
        };
        readonly extends: "Metadata";
    };
    readonly FolderShare: {
        readonly type: "FolderShare";
        readonly props: {
            readonly accessLevel: "string";
            readonly sharedTo: "string";
            readonly sharedToType: "string";
        };
    };
    readonly DashboardFolder: {
        readonly type: "DashboardFolder";
        readonly props: {};
        readonly extends: "Folder";
    };
    readonly DocumentFolder: {
        readonly type: "DocumentFolder";
        readonly props: {};
        readonly extends: "Folder";
    };
    readonly EmailFolder: {
        readonly type: "EmailFolder";
        readonly props: {};
        readonly extends: "Folder";
    };
    readonly ReportFolder: {
        readonly type: "ReportFolder";
        readonly props: {};
        readonly extends: "Folder";
    };
    readonly ForecastingSettings: {
        readonly type: "ForecastingSettings";
        readonly props: {
            readonly defaultToPersonalCurrency: "?boolean";
            readonly enableForecasts: "?boolean";
            readonly forecastingCategoryMappings: readonly ["ForecastingCategoryMapping"];
            readonly forecastingDisplayedFamilySettings: readonly ["ForecastingDisplayedFamilySettings"];
            readonly forecastingTypeSettings: readonly ["ForecastingTypeSettings"];
        };
        readonly extends: "Metadata";
    };
    readonly ForecastingCategoryMapping: {
        readonly type: "ForecastingCategoryMapping";
        readonly props: {
            readonly forecastingItemCategoryApiName: "string";
            readonly weightedSourceCategories: readonly ["WeightedSourceCategory"];
        };
    };
    readonly WeightedSourceCategory: {
        readonly type: "WeightedSourceCategory";
        readonly props: {
            readonly sourceCategoryApiName: "string";
            readonly weight: "number";
        };
    };
    readonly ForecastingDisplayedFamilySettings: {
        readonly type: "ForecastingDisplayedFamilySettings";
        readonly props: {
            readonly productFamily: "?string";
        };
    };
    readonly ForecastingTypeSettings: {
        readonly type: "ForecastingTypeSettings";
        readonly props: {
            readonly active: "boolean";
            readonly adjustmentsSettings: "AdjustmentsSettings";
            readonly displayedCategoryApiNames: readonly ["string"];
            readonly forecastRangeSettings: "ForecastRangeSettings";
            readonly forecastedCategoryApiNames: readonly ["string"];
            readonly forecastingDateType: "string";
            readonly hasProductFamily: "boolean";
            readonly isAmount: "boolean";
            readonly isAvailable: "boolean";
            readonly isQuantity: "boolean";
            readonly managerAdjustableCategoryApiNames: readonly ["string"];
            readonly masterLabel: "string";
            readonly name: "string";
            readonly opportunityListFieldsLabelMappings: readonly ["OpportunityListFieldsLabelMapping"];
            readonly opportunityListFieldsSelectedSettings: "OpportunityListFieldsSelectedSettings";
            readonly opportunityListFieldsUnselectedSettings: "OpportunityListFieldsUnselectedSettings";
            readonly opportunitySplitName: "?string";
            readonly ownerAdjustableCategoryApiNames: readonly ["string"];
            readonly quotasSettings: "QuotasSettings";
            readonly territory2ModelName: "?string";
        };
    };
    readonly AdjustmentsSettings: {
        readonly type: "AdjustmentsSettings";
        readonly props: {
            readonly enableAdjustments: "boolean";
            readonly enableOwnerAdjustments: "boolean";
        };
    };
    readonly ForecastRangeSettings: {
        readonly type: "ForecastRangeSettings";
        readonly props: {
            readonly beginning: "number";
            readonly displaying: "number";
            readonly periodType: "string";
        };
    };
    readonly OpportunityListFieldsLabelMapping: {
        readonly type: "OpportunityListFieldsLabelMapping";
        readonly props: {
            readonly field: "string";
            readonly label: "string";
        };
    };
    readonly OpportunityListFieldsSelectedSettings: {
        readonly type: "OpportunityListFieldsSelectedSettings";
        readonly props: {
            readonly field: readonly ["string"];
        };
    };
    readonly OpportunityListFieldsUnselectedSettings: {
        readonly type: "OpportunityListFieldsUnselectedSettings";
        readonly props: {
            readonly field: readonly ["string"];
        };
    };
    readonly QuotasSettings: {
        readonly type: "QuotasSettings";
        readonly props: {
            readonly showQuotas: "boolean";
        };
    };
    readonly Form: {
        readonly type: "Form";
        readonly props: {
            readonly description: "?string";
            readonly formSections: readonly ["FormSection"];
            readonly masterLabel: "string";
        };
        readonly extends: "Metadata";
    };
    readonly FormSection: {
        readonly type: "FormSection";
        readonly props: {
            readonly formColumns: readonly ["FormColumn"];
            readonly masterLabel: "string";
            readonly tabOrderType: "string";
        };
        readonly extends: "Metadata";
    };
    readonly FormColumn: {
        readonly type: "FormColumn";
        readonly props: {
            readonly formItems: readonly ["FormItem"];
        };
    };
    readonly FormItem: {
        readonly type: "FormItem";
        readonly props: {
            readonly emptySpace: "?boolean";
            readonly expression: "?string";
            readonly formLayoutableItem: "?string";
            readonly helpText: "?string";
        };
    };
    readonly FormulaSettings: {
        readonly type: "FormulaSettings";
        readonly props: {
            readonly enableDSTAwareDatevalue: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly GlobalValueSet: {
        readonly type: "GlobalValueSet";
        readonly props: {
            readonly customValue: readonly ["CustomValue"];
            readonly description: "?string";
            readonly masterLabel: "string";
            readonly sorted: "boolean";
        };
        readonly extends: "Metadata";
    };
    readonly GlobalValueSetTranslation: {
        readonly type: "GlobalValueSetTranslation";
        readonly props: {
            readonly valueTranslation: readonly ["ValueTranslation"];
        };
        readonly extends: "Metadata";
    };
    readonly ValueTranslation: {
        readonly type: "ValueTranslation";
        readonly props: {
            readonly masterLabel: "string";
            readonly translation: "?string";
        };
    };
    readonly GoogleAppsSettings: {
        readonly type: "GoogleAppsSettings";
        readonly props: {
            readonly enableGmailButtons: "?boolean";
            readonly enableGmailButtonsAndLinks: "?boolean";
            readonly enableGmailLinks: "?boolean";
            readonly enableGoogleDocs: "?boolean";
            readonly enableGoogleDocsTab: "?boolean";
            readonly enableGoogleTalk: "?boolean";
            readonly googleAppsDomain: "?string";
            readonly googleAppsDomainLinked: "?boolean";
            readonly googleAppsDomainValidated: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly Group: {
        readonly type: "Group";
        readonly props: {
            readonly doesIncludeBosses: "?boolean";
            readonly name: "string";
        };
        readonly extends: "Metadata";
    };
    readonly HighVelocitySalesSettings: {
        readonly type: "HighVelocitySalesSettings";
        readonly props: {
            readonly enableDispositionCategory: "?boolean";
            readonly enableEngagementWaveAnalyticsPref: "?boolean";
            readonly enableHighVelocitySales: "?boolean";
            readonly enableHighVelocitySalesSetup: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly HomePageComponent: {
        readonly type: "HomePageComponent";
        readonly props: {
            readonly body: "?string";
            readonly height: "?number";
            readonly links: readonly ["string"];
            readonly page: "?string";
            readonly pageComponentType: "string";
            readonly showLabel: "?boolean";
            readonly showScrollbars: "?boolean";
            readonly width: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly HomePageLayout: {
        readonly type: "HomePageLayout";
        readonly props: {
            readonly narrowComponents: readonly ["string"];
            readonly wideComponents: readonly ["string"];
        };
        readonly extends: "Metadata";
    };
    readonly IdeasSettings: {
        readonly type: "IdeasSettings";
        readonly props: {
            readonly enableChatterProfile: "?boolean";
            readonly enableHtmlIdea: "?boolean";
            readonly enableIdeaMultipleCategory: "?boolean";
            readonly enableIdeaThemes: "?boolean";
            readonly enableIdeas: "?boolean";
            readonly enableIdeasControllerExtensions: "?boolean";
            readonly enableIdeasReputation: "?boolean";
            readonly halfLife: "?number";
            readonly ideasProfilePage: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly IndustriesManufacturingSettings: {
        readonly type: "IndustriesManufacturingSettings";
        readonly props: {
            readonly enableIndManufacturing: "?boolean";
            readonly enableIndustriesMfgAccountForecast: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly IndustriesSettings: {
        readonly type: "IndustriesSettings";
        readonly props: {
            readonly allowMultipleProducersToWorkOnSamePolicy: "?boolean";
            readonly enableAccessToMasterListOfCoverageTypes: "?boolean";
            readonly enableBlockResourceAvailabilityOrgPref: "?boolean";
            readonly enableEventManagementOrgPref: "?boolean";
            readonly enableHCReferralScoring: "?boolean";
            readonly enableManyToManyRelationships: "?boolean";
            readonly enableMortgageRlaTotalsOrgPref: "?boolean";
            readonly enableMultiResourceOrgPref: "?boolean";
            readonly enableObjectDetection: "?boolean";
            readonly enableOverbookingOrgPref: "?boolean";
            readonly enableProviderSearchSyncOrgPref: "?boolean";
            readonly enableReferralScoring: "?boolean";
            readonly enableSentimentAnalysis: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly InstalledPackage: {
        readonly type: "InstalledPackage";
        readonly props: {
            readonly activateRSS: "boolean";
            readonly password: "?string";
            readonly versionNumber: "string";
        };
        readonly extends: "Metadata";
    };
    readonly IntegrationHubSettings: {
        readonly type: "IntegrationHubSettings";
        readonly props: {
            readonly canonicalName: "?string";
            readonly canonicalNameBindingChar: "?string";
            readonly description: "?string";
            readonly isEnabled: "?boolean";
            readonly isProtected: "?boolean";
            readonly masterLabel: "string";
            readonly setupData: "?string";
            readonly setupDefinition: "?string";
            readonly setupNamespace: "?string";
            readonly setupSimpleName: "string";
            readonly uUID: "?string";
            readonly version: "?string";
            readonly versionBuild: "?number";
            readonly versionMajor: "?number";
            readonly versionMinor: "?number";
            readonly versionSetUuid: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly IntegrationHubSettingsType: {
        readonly type: "IntegrationHubSettingsType";
        readonly props: {
            readonly canonicalName: "?string";
            readonly canonicalNameBindingChar: "?string";
            readonly description: "?string";
            readonly isEnabled: "?boolean";
            readonly isProtected: "?boolean";
            readonly masterLabel: "string";
            readonly setupNamespace: "?string";
            readonly setupSimpleName: "string";
            readonly uUID: "?string";
            readonly version: "?string";
            readonly versionBuild: "?number";
            readonly versionMajor: "?number";
            readonly versionMinor: "?number";
            readonly versionSetUuid: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly InvocableActionSettings: {
        readonly type: "InvocableActionSettings";
        readonly props: {
            readonly isPartialSaveAllowed: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly IoTSettings: {
        readonly type: "IoTSettings";
        readonly props: {
            readonly enableIoT: "?boolean";
            readonly enableIoTInsightsPilot: "?boolean";
            readonly enableIoTUsageEmail: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly IsvHammerSettings: {
        readonly type: "IsvHammerSettings";
        readonly props: {
            readonly enableIsvHammerSubIsOptedOut: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly KeywordList: {
        readonly type: "KeywordList";
        readonly props: {
            readonly description: "?string";
            readonly keywords: readonly ["Keyword"];
            readonly masterLabel: "string";
        };
        readonly extends: "Metadata";
    };
    readonly Keyword: {
        readonly type: "Keyword";
        readonly props: {
            readonly keyword: "string";
        };
    };
    readonly KnowledgeSettings: {
        readonly type: "KnowledgeSettings";
        readonly props: {
            readonly answers: "?KnowledgeAnswerSettings";
            readonly cases: "?KnowledgeCaseSettings";
            readonly defaultLanguage: "?string";
            readonly enableChatterQuestionKBDeflection: "?boolean";
            readonly enableCreateEditOnArticlesTab: "?boolean";
            readonly enableExternalMediaContent: "?boolean";
            readonly enableKnowledge: "?boolean";
            readonly enableKnowledgeArticleTextHighlights: "?boolean";
            readonly enableKnowledgeKeywordAutoComplete: "?boolean";
            readonly enableKnowledgeTitleAutoComplete: "?boolean";
            readonly enableLightningKbAutoLoadRichTextField: "?boolean";
            readonly enableLightningKnowledge: "?boolean";
            readonly languages: "?KnowledgeLanguageSettings";
            readonly showArticleSummariesCustomerPortal: "?boolean";
            readonly showArticleSummariesInternalApp: "?boolean";
            readonly showArticleSummariesPartnerPortal: "?boolean";
            readonly showValidationStatusField: "?boolean";
            readonly suggestedArticles: "?KnowledgeSuggestedArticlesSettings";
        };
        readonly extends: "Metadata";
    };
    readonly KnowledgeAnswerSettings: {
        readonly type: "KnowledgeAnswerSettings";
        readonly props: {
            readonly assignTo: "?string";
            readonly defaultArticleType: "?string";
            readonly enableArticleCreation: "?boolean";
        };
    };
    readonly KnowledgeCaseSettings: {
        readonly type: "KnowledgeCaseSettings";
        readonly props: {
            readonly articlePDFCreationProfile: "?string";
            readonly articlePublicSharingCommunities: "?KnowledgeCommunitiesSettings";
            readonly articlePublicSharingSites: "?KnowledgeSitesSettings";
            readonly articlePublicSharingSitesChatterAnswers: "?KnowledgeSitesSettings";
            readonly assignTo: "?string";
            readonly customizationClass: "?string";
            readonly defaultContributionArticleType: "?string";
            readonly editor: "?string";
            readonly enableArticleCreation: "?boolean";
            readonly enableArticlePublicSharingSites: "?boolean";
            readonly enableCaseDataCategoryMapping: "?boolean";
            readonly useProfileForPDFCreation: "?boolean";
        };
    };
    readonly KnowledgeCommunitiesSettings: {
        readonly type: "KnowledgeCommunitiesSettings";
        readonly props: {
            readonly community: readonly ["string"];
        };
    };
    readonly KnowledgeSitesSettings: {
        readonly type: "KnowledgeSitesSettings";
        readonly props: {
            readonly site: readonly ["string"];
        };
    };
    readonly KnowledgeLanguageSettings: {
        readonly type: "KnowledgeLanguageSettings";
        readonly props: {
            readonly language: readonly ["KnowledgeLanguage"];
        };
    };
    readonly KnowledgeLanguage: {
        readonly type: "KnowledgeLanguage";
        readonly props: {
            readonly active: "?boolean";
            readonly defaultAssignee: "?string";
            readonly defaultAssigneeType: "?string";
            readonly defaultReviewer: "?string";
            readonly defaultReviewerType: "?string";
            readonly name: "string";
        };
    };
    readonly KnowledgeSuggestedArticlesSettings: {
        readonly type: "KnowledgeSuggestedArticlesSettings";
        readonly props: {
            readonly caseFields: "?KnowledgeCaseFieldsSettings";
            readonly useSuggestedArticlesForCase: "?boolean";
            readonly workOrderFields: "?KnowledgeWorkOrderFieldsSettings";
            readonly workOrderLineItemFields: "?KnowledgeWorkOrderLineItemFieldsSettings";
        };
    };
    readonly KnowledgeCaseFieldsSettings: {
        readonly type: "KnowledgeCaseFieldsSettings";
        readonly props: {
            readonly field: readonly ["KnowledgeCaseField"];
        };
    };
    readonly KnowledgeCaseField: {
        readonly type: "KnowledgeCaseField";
        readonly props: {
            readonly name: "?string";
        };
    };
    readonly KnowledgeWorkOrderFieldsSettings: {
        readonly type: "KnowledgeWorkOrderFieldsSettings";
        readonly props: {
            readonly field: readonly ["KnowledgeWorkOrderField"];
        };
    };
    readonly KnowledgeWorkOrderField: {
        readonly type: "KnowledgeWorkOrderField";
        readonly props: {
            readonly name: "?string";
        };
    };
    readonly KnowledgeWorkOrderLineItemFieldsSettings: {
        readonly type: "KnowledgeWorkOrderLineItemFieldsSettings";
        readonly props: {
            readonly field: readonly ["KnowledgeWorkOrderLineItemField"];
        };
    };
    readonly KnowledgeWorkOrderLineItemField: {
        readonly type: "KnowledgeWorkOrderLineItemField";
        readonly props: {
            readonly name: "?string";
        };
    };
    readonly LanguageSettings: {
        readonly type: "LanguageSettings";
        readonly props: {
            readonly enableCanadaIcuFormat: "?boolean";
            readonly enableEndUserLanguages: "?boolean";
            readonly enableICULocaleDateFormat: "?boolean";
            readonly enablePlatformLanguages: "?boolean";
            readonly enableTranslationWorkbench: "?boolean";
            readonly useLanguageFallback: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly Layout: {
        readonly type: "Layout";
        readonly props: {
            readonly customButtons: readonly ["string"];
            readonly customConsoleComponents: "?CustomConsoleComponents";
            readonly emailDefault: "?boolean";
            readonly excludeButtons: readonly ["string"];
            readonly feedLayout: "?FeedLayout";
            readonly headers: readonly ["string"];
            readonly layoutSections: readonly ["LayoutSection"];
            readonly miniLayout: "?MiniLayout";
            readonly multilineLayoutFields: readonly ["string"];
            readonly platformActionList: "?PlatformActionList";
            readonly quickActionList: "?QuickActionList";
            readonly relatedContent: "?RelatedContent";
            readonly relatedLists: readonly ["RelatedListItem"];
            readonly relatedObjects: readonly ["string"];
            readonly runAssignmentRulesDefault: "?boolean";
            readonly showEmailCheckbox: "?boolean";
            readonly showHighlightsPanel: "?boolean";
            readonly showInteractionLogPanel: "?boolean";
            readonly showKnowledgeComponent: "?boolean";
            readonly showRunAssignmentRulesCheckbox: "?boolean";
            readonly showSolutionSection: "?boolean";
            readonly showSubmitAndAttachButton: "?boolean";
            readonly summaryLayout: "?SummaryLayout";
        };
        readonly extends: "Metadata";
    };
    readonly CustomConsoleComponents: {
        readonly type: "CustomConsoleComponents";
        readonly props: {
            readonly primaryTabComponents: "?PrimaryTabComponents";
            readonly subtabComponents: "?SubtabComponents";
        };
    };
    readonly PrimaryTabComponents: {
        readonly type: "PrimaryTabComponents";
        readonly props: {
            readonly containers: readonly ["Container"];
        };
    };
    readonly Container: {
        readonly type: "Container";
        readonly props: {
            readonly height: "?number";
            readonly isContainerAutoSizeEnabled: "boolean";
            readonly region: "string";
            readonly sidebarComponents: readonly ["SidebarComponent"];
            readonly style: "string";
            readonly unit: "string";
            readonly width: "?number";
        };
    };
    readonly SidebarComponent: {
        readonly type: "SidebarComponent";
        readonly props: {
            readonly componentType: "string";
            readonly createAction: "?string";
            readonly enableLinking: "?boolean";
            readonly height: "?number";
            readonly label: "?string";
            readonly lookup: "?string";
            readonly page: "?string";
            readonly relatedLists: readonly ["RelatedList"];
            readonly unit: "?string";
            readonly updateAction: "?string";
            readonly width: "?number";
        };
    };
    readonly RelatedList: {
        readonly type: "RelatedList";
        readonly props: {
            readonly hideOnDetail: "boolean";
            readonly name: "string";
        };
    };
    readonly SubtabComponents: {
        readonly type: "SubtabComponents";
        readonly props: {
            readonly containers: readonly ["Container"];
        };
    };
    readonly FeedLayout: {
        readonly type: "FeedLayout";
        readonly props: {
            readonly autocollapsePublisher: "?boolean";
            readonly compactFeed: "?boolean";
            readonly feedFilterPosition: "?string";
            readonly feedFilters: readonly ["FeedLayoutFilter"];
            readonly fullWidthFeed: "?boolean";
            readonly hideSidebar: "?boolean";
            readonly highlightExternalFeedItems: "?boolean";
            readonly leftComponents: readonly ["FeedLayoutComponent"];
            readonly rightComponents: readonly ["FeedLayoutComponent"];
            readonly useInlineFiltersInConsole: "?boolean";
        };
    };
    readonly FeedLayoutFilter: {
        readonly type: "FeedLayoutFilter";
        readonly props: {
            readonly feedFilterName: "?string";
            readonly feedFilterType: "string";
            readonly feedItemType: "?string";
        };
    };
    readonly FeedLayoutComponent: {
        readonly type: "FeedLayoutComponent";
        readonly props: {
            readonly componentType: "string";
            readonly height: "?number";
            readonly page: "?string";
        };
    };
    readonly LayoutSection: {
        readonly type: "LayoutSection";
        readonly props: {
            readonly customLabel: "?boolean";
            readonly detailHeading: "?boolean";
            readonly editHeading: "?boolean";
            readonly label: "?string";
            readonly layoutColumns: readonly ["LayoutColumn"];
            readonly style: "string";
        };
    };
    readonly LayoutColumn: {
        readonly type: "LayoutColumn";
        readonly props: {
            readonly layoutItems: readonly ["LayoutItem"];
            readonly reserved: "?string";
        };
    };
    readonly LayoutItem: {
        readonly type: "LayoutItem";
        readonly props: {
            readonly analyticsCloudComponent: "?AnalyticsCloudComponentLayoutItem";
            readonly behavior: "?string";
            readonly canvas: "?string";
            readonly component: "?string";
            readonly customLink: "?string";
            readonly emptySpace: "?boolean";
            readonly field: "?string";
            readonly height: "?number";
            readonly page: "?string";
            readonly reportChartComponent: "?ReportChartComponentLayoutItem";
            readonly scontrol: "?string";
            readonly showLabel: "?boolean";
            readonly showScrollbars: "?boolean";
            readonly width: "?string";
        };
    };
    readonly AnalyticsCloudComponentLayoutItem: {
        readonly type: "AnalyticsCloudComponentLayoutItem";
        readonly props: {
            readonly assetType: "string";
            readonly devName: "string";
            readonly error: "?string";
            readonly filter: "?string";
            readonly height: "?number";
            readonly hideOnError: "?boolean";
            readonly showHeader: "?boolean";
            readonly showSharing: "?boolean";
            readonly showTitle: "?boolean";
            readonly width: "?string";
        };
    };
    readonly ReportChartComponentLayoutItem: {
        readonly type: "ReportChartComponentLayoutItem";
        readonly props: {
            readonly cacheData: "?boolean";
            readonly contextFilterableField: "?string";
            readonly error: "?string";
            readonly hideOnError: "?boolean";
            readonly includeContext: "?boolean";
            readonly reportName: "string";
            readonly showTitle: "?boolean";
            readonly size: "?string";
        };
    };
    readonly MiniLayout: {
        readonly type: "MiniLayout";
        readonly props: {
            readonly fields: readonly ["string"];
            readonly relatedLists: readonly ["RelatedListItem"];
        };
    };
    readonly RelatedListItem: {
        readonly type: "RelatedListItem";
        readonly props: {
            readonly customButtons: readonly ["string"];
            readonly excludeButtons: readonly ["string"];
            readonly fields: readonly ["string"];
            readonly relatedList: "string";
            readonly sortField: "?string";
            readonly sortOrder: "?string";
        };
    };
    readonly RelatedContent: {
        readonly type: "RelatedContent";
        readonly props: {
            readonly relatedContentItems: readonly ["RelatedContentItem"];
        };
    };
    readonly RelatedContentItem: {
        readonly type: "RelatedContentItem";
        readonly props: {
            readonly layoutItem: "LayoutItem";
        };
    };
    readonly SummaryLayout: {
        readonly type: "SummaryLayout";
        readonly props: {
            readonly masterLabel: "string";
            readonly sizeX: "number";
            readonly sizeY: "?number";
            readonly sizeZ: "?number";
            readonly summaryLayoutItems: readonly ["SummaryLayoutItem"];
            readonly summaryLayoutStyle: "string";
        };
    };
    readonly SummaryLayoutItem: {
        readonly type: "SummaryLayoutItem";
        readonly props: {
            readonly customLink: "?string";
            readonly field: "?string";
            readonly posX: "number";
            readonly posY: "?number";
            readonly posZ: "?number";
        };
    };
    readonly LeadConfigSettings: {
        readonly type: "LeadConfigSettings";
        readonly props: {
            readonly doesEnableLeadConvertDefaultSubjectBlankTaskCreation: "?boolean";
            readonly doesHideOpportunityInConvertLeadWindow: "?boolean";
            readonly doesPreserveLeadStatus: "?boolean";
            readonly doesSelectNoOpportunityOnConvertLead: "?boolean";
            readonly doesTrackHistory: "?boolean";
            readonly enableConversionsOnMobile: "?boolean";
            readonly enableOrgWideMergeAndDelete: "?boolean";
            readonly shouldLeadConvertRequireValidation: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly LeadConvertSettings: {
        readonly type: "LeadConvertSettings";
        readonly props: {
            readonly allowOwnerChange: "?boolean";
            readonly objectMapping: readonly ["ObjectMapping"];
            readonly opportunityCreationOptions: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly Letterhead: {
        readonly type: "Letterhead";
        readonly props: {
            readonly available: "boolean";
            readonly backgroundColor: "string";
            readonly bodyColor: "string";
            readonly bottomLine: "LetterheadLine";
            readonly description: "?string";
            readonly footer: "LetterheadHeaderFooter";
            readonly header: "LetterheadHeaderFooter";
            readonly middleLine: "LetterheadLine";
            readonly name: "string";
            readonly topLine: "LetterheadLine";
        };
        readonly extends: "Metadata";
    };
    readonly LetterheadLine: {
        readonly type: "LetterheadLine";
        readonly props: {
            readonly color: "string";
            readonly height: "number";
        };
    };
    readonly LetterheadHeaderFooter: {
        readonly type: "LetterheadHeaderFooter";
        readonly props: {
            readonly backgroundColor: "string";
            readonly height: "number";
            readonly horizontalAlignment: "?string";
            readonly logo: "?string";
            readonly verticalAlignment: "?string";
        };
    };
    readonly LicenseDefinition: {
        readonly type: "LicenseDefinition";
        readonly props: {
            readonly aggregationGroup: "string";
            readonly description: "?string";
            readonly isPublished: "boolean";
            readonly label: "string";
            readonly licensedCustomPermissions: readonly ["LicensedCustomPermissions"];
            readonly licensingAuthority: "string";
            readonly licensingAuthorityProvider: "string";
            readonly minPlatformVersion: "number";
            readonly origin: "string";
            readonly revision: "number";
            readonly trialLicenseDuration: "number";
            readonly trialLicenseQuantity: "number";
        };
        readonly extends: "Metadata";
    };
    readonly LicensedCustomPermissions: {
        readonly type: "LicensedCustomPermissions";
        readonly props: {
            readonly customPermission: "string";
            readonly licenseDefinition: "string";
        };
    };
    readonly LightningBolt: {
        readonly type: "LightningBolt";
        readonly props: {
            readonly category: "string";
            readonly lightningBoltFeatures: readonly ["LightningBoltFeatures"];
            readonly lightningBoltImages: readonly ["LightningBoltImages"];
            readonly lightningBoltItems: readonly ["LightningBoltItems"];
            readonly masterLabel: "string";
            readonly publisher: "string";
            readonly summary: "string";
        };
        readonly extends: "Metadata";
    };
    readonly LightningBoltFeatures: {
        readonly type: "LightningBoltFeatures";
        readonly props: {
            readonly description: "?string";
            readonly order: "number";
            readonly title: "string";
        };
    };
    readonly LightningBoltImages: {
        readonly type: "LightningBoltImages";
        readonly props: {
            readonly image: "string";
            readonly order: "number";
        };
    };
    readonly LightningBoltItems: {
        readonly type: "LightningBoltItems";
        readonly props: {
            readonly name: "string";
            readonly type: "string";
        };
    };
    readonly LightningComponentBundle: {
        readonly type: "LightningComponentBundle";
        readonly props: {
            readonly apiVersion: "?number";
            readonly description: "?string";
            readonly isExplicitImport: "?boolean";
            readonly isExposed: "?boolean";
            readonly lwcResources: "?LwcResources";
            readonly masterLabel: "?string";
            readonly runtimeNamespace: "?string";
            readonly targetConfigs: "?string";
            readonly targets: "?Targets";
        };
        readonly extends: "Metadata";
    };
    readonly LwcResources: {
        readonly type: "LwcResources";
        readonly props: {
            readonly lwcResource: readonly ["LwcResource"];
        };
    };
    readonly LwcResource: {
        readonly type: "LwcResource";
        readonly props: {
            readonly filePath: "string";
            readonly source: "string";
        };
    };
    readonly Targets: {
        readonly type: "Targets";
        readonly props: {
            readonly target: readonly ["string"];
        };
    };
    readonly LightningExperienceSettings: {
        readonly type: "LightningExperienceSettings";
        readonly props: {
            readonly enableAccessCheckCrucPref: "?boolean";
            readonly enableApiUserLtngOutAccessPref: "?boolean";
            readonly enableAuraCDNPref: "?boolean";
            readonly enableFeedbackInMobile: "?boolean";
            readonly enableIE11DeprecationMsgHidden: "?boolean";
            readonly enableIE11LEXCrucPref: "?boolean";
            readonly enableInAppTooltips: "?boolean";
            readonly enableLEXOnIpadEnabled: "?boolean";
            readonly enableLexEndUsersNoSwitching: "?boolean";
            readonly enableNavPersonalizationOptOut: "?boolean";
            readonly enableRemoveThemeBrandBanner: "?boolean";
            readonly enableS1BannerPref: "?boolean";
            readonly enableS1BrowserEnabled: "?boolean";
            readonly enableS1DesktopEnabled: "?boolean";
            readonly enableS1UiLoggingEnabled: "?boolean";
            readonly enableTryLightningOptOut: "?boolean";
            readonly enableUseS1AlohaDesktop: "?boolean";
            readonly enableUsersAreLightningOnly: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly LightningExperienceTheme: {
        readonly type: "LightningExperienceTheme";
        readonly props: {
            readonly defaultBrandingSet: "string";
            readonly description: "?string";
            readonly masterLabel: "string";
            readonly shouldOverrideLoadingImage: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly LightningMessageChannel: {
        readonly type: "LightningMessageChannel";
        readonly props: {
            readonly description: "?string";
            readonly isExposed: "?boolean";
            readonly lightningMessageFields: readonly ["LightningMessageField"];
            readonly masterLabel: "string";
        };
        readonly extends: "Metadata";
    };
    readonly LightningMessageField: {
        readonly type: "LightningMessageField";
        readonly props: {
            readonly description: "?string";
            readonly fieldName: "string";
        };
    };
    readonly LightningOnboardingConfig: {
        readonly type: "LightningOnboardingConfig";
        readonly props: {
            readonly collaborationGroup: "?string";
            readonly customQuestion: "string";
            readonly feedbackFormDaysFrequency: "number";
            readonly isCustom: "boolean";
            readonly masterLabel: "string";
            readonly sendFeedbackToSalesforce: "boolean";
        };
        readonly extends: "Metadata";
    };
    readonly LiveAgentSettings: {
        readonly type: "LiveAgentSettings";
        readonly props: {
            readonly enableLiveAgent: "?boolean";
            readonly enableQuickTextEnabled: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly LiveChatAgentConfig: {
        readonly type: "LiveChatAgentConfig";
        readonly props: {
            readonly assignments: "?AgentConfigAssignments";
            readonly autoGreeting: "?string";
            readonly capacity: "?number";
            readonly criticalWaitTime: "?number";
            readonly customAgentName: "?string";
            readonly enableAgentFileTransfer: "?boolean";
            readonly enableAgentSneakPeek: "?boolean";
            readonly enableAssistanceFlag: "?boolean";
            readonly enableAutoAwayOnDecline: "?boolean";
            readonly enableAutoAwayOnPushTimeout: "?boolean";
            readonly enableChatConferencing: "?boolean";
            readonly enableChatMonitoring: "?boolean";
            readonly enableChatTransferToAgent: "?boolean";
            readonly enableChatTransferToButton: "?boolean";
            readonly enableChatTransferToSkill: "?boolean";
            readonly enableLogoutSound: "?boolean";
            readonly enableNotifications: "?boolean";
            readonly enableRequestSound: "?boolean";
            readonly enableSneakPeek: "?boolean";
            readonly enableVisitorBlocking: "?boolean";
            readonly enableWhisperMessage: "?boolean";
            readonly label: "string";
            readonly supervisorDefaultAgentStatusFilter: "?string";
            readonly supervisorDefaultButtonFilter: "?string";
            readonly supervisorDefaultSkillFilter: "?string";
            readonly supervisorSkills: "?SupervisorAgentConfigSkills";
            readonly transferableButtons: "?AgentConfigButtons";
            readonly transferableSkills: "?AgentConfigSkills";
        };
        readonly extends: "Metadata";
    };
    readonly AgentConfigAssignments: {
        readonly type: "AgentConfigAssignments";
        readonly props: {
            readonly profiles: "?AgentConfigProfileAssignments";
            readonly users: "?AgentConfigUserAssignments";
        };
    };
    readonly AgentConfigProfileAssignments: {
        readonly type: "AgentConfigProfileAssignments";
        readonly props: {
            readonly profile: readonly ["string"];
        };
    };
    readonly AgentConfigUserAssignments: {
        readonly type: "AgentConfigUserAssignments";
        readonly props: {
            readonly user: readonly ["string"];
        };
    };
    readonly SupervisorAgentConfigSkills: {
        readonly type: "SupervisorAgentConfigSkills";
        readonly props: {
            readonly skill: readonly ["string"];
        };
    };
    readonly AgentConfigButtons: {
        readonly type: "AgentConfigButtons";
        readonly props: {
            readonly button: readonly ["string"];
        };
    };
    readonly AgentConfigSkills: {
        readonly type: "AgentConfigSkills";
        readonly props: {
            readonly skill: readonly ["string"];
        };
    };
    readonly LiveChatButton: {
        readonly type: "LiveChatButton";
        readonly props: {
            readonly animation: "?string";
            readonly autoGreeting: "?string";
            readonly chasitorIdleTimeout: "?number";
            readonly chasitorIdleTimeoutWarning: "?number";
            readonly chatPage: "?string";
            readonly customAgentName: "?string";
            readonly deployments: "?LiveChatButtonDeployments";
            readonly enableQueue: "?boolean";
            readonly inviteEndPosition: "?string";
            readonly inviteImage: "?string";
            readonly inviteStartPosition: "?string";
            readonly isActive: "?boolean";
            readonly label: "string";
            readonly numberOfReroutingAttempts: "?number";
            readonly offlineImage: "?string";
            readonly onlineImage: "?string";
            readonly optionsCustomRoutingIsEnabled: "?boolean";
            readonly optionsHasChasitorIdleTimeout: "boolean";
            readonly optionsHasInviteAfterAccept: "?boolean";
            readonly optionsHasInviteAfterReject: "?boolean";
            readonly optionsHasRerouteDeclinedRequest: "?boolean";
            readonly optionsIsAutoAccept: "?boolean";
            readonly optionsIsInviteAutoRemove: "?boolean";
            readonly overallQueueLength: "?number";
            readonly perAgentQueueLength: "?number";
            readonly postChatPage: "?string";
            readonly postChatUrl: "?string";
            readonly preChatFormPage: "?string";
            readonly preChatFormUrl: "?string";
            readonly pushTimeOut: "?number";
            readonly routingType: "string";
            readonly site: "?string";
            readonly skills: "?LiveChatButtonSkills";
            readonly timeToRemoveInvite: "?number";
            readonly type: "string";
            readonly windowLanguage: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly LiveChatButtonDeployments: {
        readonly type: "LiveChatButtonDeployments";
        readonly props: {
            readonly deployment: readonly ["string"];
        };
    };
    readonly LiveChatButtonSkills: {
        readonly type: "LiveChatButtonSkills";
        readonly props: {
            readonly skill: readonly ["string"];
        };
    };
    readonly LiveChatDeployment: {
        readonly type: "LiveChatDeployment";
        readonly props: {
            readonly brandingImage: "?string";
            readonly connectionTimeoutDuration: "?number";
            readonly connectionWarningDuration: "?number";
            readonly displayQueuePosition: "?boolean";
            readonly domainWhiteList: "?LiveChatDeploymentDomainWhitelist";
            readonly enablePrechatApi: "?boolean";
            readonly enableTranscriptSave: "?boolean";
            readonly label: "string";
            readonly mobileBrandingImage: "?string";
            readonly site: "?string";
            readonly windowTitle: "string";
        };
        readonly extends: "Metadata";
    };
    readonly LiveChatDeploymentDomainWhitelist: {
        readonly type: "LiveChatDeploymentDomainWhitelist";
        readonly props: {
            readonly domain: readonly ["string"];
        };
    };
    readonly LiveChatSensitiveDataRule: {
        readonly type: "LiveChatSensitiveDataRule";
        readonly props: {
            readonly actionType: "string";
            readonly description: "?string";
            readonly enforceOn: "number";
            readonly isEnabled: "boolean";
            readonly pattern: "string";
            readonly priority: "number";
            readonly replacement: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly LiveMessageSettings: {
        readonly type: "LiveMessageSettings";
        readonly props: {
            readonly enableLiveMessage: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly MacroSettings: {
        readonly type: "MacroSettings";
        readonly props: {
            readonly enableAdvancedSearch: "?boolean";
            readonly macrosInFolders: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly ManagedContentType: {
        readonly type: "ManagedContentType";
        readonly props: {
            readonly description: "?string";
            readonly developerName: "string";
            readonly managedContentNodeTypes: readonly ["ManagedContentNodeType"];
            readonly masterLabel: "string";
        };
        readonly extends: "Metadata";
    };
    readonly ManagedContentNodeType: {
        readonly type: "ManagedContentNodeType";
        readonly props: {
            readonly helpText: "?string";
            readonly isLocalizable: "?boolean";
            readonly isRequired: "?boolean";
            readonly nodeLabel: "string";
            readonly nodeName: "string";
            readonly nodeType: "string";
            readonly placeholderText: "?string";
        };
    };
    readonly ManagedTopic: {
        readonly type: "ManagedTopic";
        readonly props: {
            readonly managedTopicType: "string";
            readonly name: "string";
            readonly parentName: "string";
            readonly position: "number";
            readonly topicDescription: "string";
        };
        readonly extends: "Metadata";
    };
    readonly ManagedTopics: {
        readonly type: "ManagedTopics";
        readonly props: {
            readonly managedTopic: readonly ["ManagedTopic"];
        };
        readonly extends: "Metadata";
    };
    readonly SourceTrackingSettings: {
        readonly type: "SourceTrackingSettings";
        readonly props: {
            readonly enableSourceTrackingSandboxes: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly MapsAndLocationSettings: {
        readonly type: "MapsAndLocationSettings";
        readonly props: {
            readonly enableAddressAutoComplete: "?boolean";
            readonly enableMapsAndLocation: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly MatchingRule: {
        readonly type: "MatchingRule";
        readonly props: {
            readonly booleanFilter: "?string";
            readonly description: "?string";
            readonly label: "string";
            readonly matchingRuleItems: readonly ["MatchingRuleItem"];
            readonly ruleStatus: "string";
        };
        readonly extends: "Metadata";
    };
    readonly MatchingRuleItem: {
        readonly type: "MatchingRuleItem";
        readonly props: {
            readonly blankValueBehavior: "?string";
            readonly fieldName: "string";
            readonly matchingMethod: "string";
        };
    };
    readonly MatchingRules: {
        readonly type: "MatchingRules";
        readonly props: {
            readonly matchingRules: readonly ["MatchingRule"];
        };
        readonly extends: "Metadata";
    };
    readonly MetadataWithContent: {
        readonly type: "MetadataWithContent";
        readonly props: {
            readonly content: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly AccessControlPolicy: {
        readonly type: "AccessControlPolicy";
        readonly props: {
            readonly active: "boolean";
            readonly deploymentStatus: "string";
            readonly description: "?string";
            readonly masterLabel: "string";
            readonly targetEntity: "string";
            readonly version: "number";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly ApexClass: {
        readonly type: "ApexClass";
        readonly props: {
            readonly apiVersion: "number";
            readonly packageVersions: readonly ["PackageVersion"];
            readonly status: "string";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly ApexComponent: {
        readonly type: "ApexComponent";
        readonly props: {
            readonly apiVersion: "?number";
            readonly description: "?string";
            readonly label: "string";
            readonly packageVersions: readonly ["PackageVersion"];
        };
        readonly extends: "MetadataWithContent";
    };
    readonly ApexPage: {
        readonly type: "ApexPage";
        readonly props: {
            readonly apiVersion: "number";
            readonly availableInTouch: "?boolean";
            readonly confirmationTokenRequired: "?boolean";
            readonly description: "?string";
            readonly label: "string";
            readonly packageVersions: readonly ["PackageVersion"];
        };
        readonly extends: "MetadataWithContent";
    };
    readonly ApexTrigger: {
        readonly type: "ApexTrigger";
        readonly props: {
            readonly apiVersion: "number";
            readonly packageVersions: readonly ["PackageVersion"];
            readonly status: "string";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly Certificate: {
        readonly type: "Certificate";
        readonly props: {
            readonly caSigned: "boolean";
            readonly encryptedWithPlatformEncryption: "?boolean";
            readonly expirationDate: "?string";
            readonly keySize: "?number";
            readonly masterLabel: "string";
            readonly privateKeyExportable: "?boolean";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly ContentAsset: {
        readonly type: "ContentAsset";
        readonly props: {
            readonly format: "?string";
            readonly isVisibleByExternalUsers: "?boolean";
            readonly language: "string";
            readonly masterLabel: "string";
            readonly originNetwork: "?string";
            readonly relationships: "?ContentAssetRelationships";
            readonly versions: "ContentAssetVersions";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly ContentAssetRelationships: {
        readonly type: "ContentAssetRelationships";
        readonly props: {
            readonly insightsApplication: readonly ["ContentAssetLink"];
            readonly network: readonly ["ContentAssetLink"];
            readonly organization: "?ContentAssetLink";
            readonly workspace: readonly ["ContentAssetLink"];
        };
    };
    readonly ContentAssetLink: {
        readonly type: "ContentAssetLink";
        readonly props: {
            readonly access: "string";
            readonly isManagingWorkspace: "?boolean";
            readonly name: "?string";
        };
    };
    readonly ContentAssetVersions: {
        readonly type: "ContentAssetVersions";
        readonly props: {
            readonly version: readonly ["ContentAssetVersion"];
        };
    };
    readonly ContentAssetVersion: {
        readonly type: "ContentAssetVersion";
        readonly props: {
            readonly number: "string";
            readonly pathOnClient: "string";
            readonly zipEntry: "?string";
        };
    };
    readonly Document: {
        readonly type: "Document";
        readonly props: {
            readonly description: "?string";
            readonly internalUseOnly: "boolean";
            readonly keywords: "?string";
            readonly name: "?string";
            readonly public: "boolean";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly EclairGeoData: {
        readonly type: "EclairGeoData";
        readonly props: {
            readonly maps: readonly ["EclairMap"];
            readonly masterLabel: "string";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly EclairMap: {
        readonly type: "EclairMap";
        readonly props: {
            readonly boundingBoxBottom: "?number";
            readonly boundingBoxLeft: "?number";
            readonly boundingBoxRight: "?number";
            readonly boundingBoxTop: "?number";
            readonly mapLabel: "?string";
            readonly mapName: "string";
            readonly projection: "string";
        };
    };
    readonly EmailTemplate: {
        readonly type: "EmailTemplate";
        readonly props: {
            readonly apiVersion: "?number";
            readonly attachedDocuments: readonly ["string"];
            readonly attachments: readonly ["Attachment"];
            readonly available: "boolean";
            readonly description: "?string";
            readonly encodingKey: "string";
            readonly letterhead: "?string";
            readonly name: "string";
            readonly packageVersions: readonly ["PackageVersion"];
            readonly relatedEntityType: "?string";
            readonly style: "string";
            readonly subject: "?string";
            readonly textOnly: "?string";
            readonly type: "string";
            readonly uiType: "?string";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly Attachment: {
        readonly type: "Attachment";
        readonly props: {
            readonly content: "string";
            readonly name: "string";
        };
    };
    readonly NetworkBranding: {
        readonly type: "NetworkBranding";
        readonly props: {
            readonly loginBackgroundImageUrl: "?string";
            readonly loginFooterText: "?string";
            readonly loginLogo: "?string";
            readonly loginLogoName: "?string";
            readonly loginPrimaryColor: "?string";
            readonly loginQuaternaryColor: "?string";
            readonly loginRightFrameUrl: "?string";
            readonly network: "?string";
            readonly pageFooter: "?string";
            readonly pageHeader: "?string";
            readonly primaryColor: "string";
            readonly primaryComplementColor: "string";
            readonly quaternaryColor: "string";
            readonly quaternaryComplementColor: "string";
            readonly secondaryColor: "string";
            readonly staticLogoImageUrl: "?string";
            readonly tertiaryColor: "string";
            readonly tertiaryComplementColor: "string";
            readonly zeronaryColor: "string";
            readonly zeronaryComplementColor: "string";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly Orchestration: {
        readonly type: "Orchestration";
        readonly props: {
            readonly context: "string";
            readonly masterLabel: "string";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly Scontrol: {
        readonly type: "Scontrol";
        readonly props: {
            readonly contentSource: "string";
            readonly description: "?string";
            readonly encodingKey: "string";
            readonly fileContent: "?string";
            readonly fileName: "?string";
            readonly name: "string";
            readonly supportsCaching: "boolean";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly SiteDotCom: {
        readonly type: "SiteDotCom";
        readonly props: {
            readonly label: "string";
            readonly siteType: "string";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly StaticResource: {
        readonly type: "StaticResource";
        readonly props: {
            readonly cacheControl: "string";
            readonly contentType: "string";
            readonly description: "?string";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly UiPlugin: {
        readonly type: "UiPlugin";
        readonly props: {
            readonly description: "?string";
            readonly extensionPointIdentifier: "string";
            readonly isEnabled: "boolean";
            readonly language: "string";
            readonly masterLabel: "string";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly WaveDashboard: {
        readonly type: "WaveDashboard";
        readonly props: {
            readonly application: "string";
            readonly description: "?string";
            readonly masterLabel: "string";
            readonly templateAssetSourceName: "?string";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly WaveDataflow: {
        readonly type: "WaveDataflow";
        readonly props: {
            readonly dataflowType: "?string";
            readonly description: "?string";
            readonly masterLabel: "string";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly WaveLens: {
        readonly type: "WaveLens";
        readonly props: {
            readonly application: "string";
            readonly datasets: readonly ["string"];
            readonly description: "?string";
            readonly masterLabel: "string";
            readonly templateAssetSourceName: "?string";
            readonly visualizationType: "string";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly WaveRecipe: {
        readonly type: "WaveRecipe";
        readonly props: {
            readonly dataflow: "string";
            readonly masterLabel: "string";
            readonly securityPredicate: "?string";
            readonly targetDatasetAlias: "string";
        };
        readonly extends: "MetadataWithContent";
    };
    readonly MilestoneType: {
        readonly type: "MilestoneType";
        readonly props: {
            readonly description: "?string";
            readonly recurrenceType: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly MlDomain: {
        readonly type: "MlDomain";
        readonly props: {
            readonly description: "?string";
            readonly label: "string";
            readonly mlIntents: readonly ["MlIntent"];
            readonly mlSlotClasses: readonly ["MlSlotClass"];
        };
        readonly extends: "Metadata";
    };
    readonly MobileApplicationDetail: {
        readonly type: "MobileApplicationDetail";
        readonly props: {
            readonly applicationBinaryFile: "?string";
            readonly applicationBinaryFileName: "?string";
            readonly applicationBundleIdentifier: "?string";
            readonly applicationFileLength: "?number";
            readonly applicationIconFile: "?string";
            readonly applicationIconFileName: "?string";
            readonly applicationInstallUrl: "?string";
            readonly devicePlatform: "string";
            readonly deviceType: "?string";
            readonly minimumOsVersion: "?string";
            readonly privateApp: "?boolean";
            readonly version: "string";
        };
        readonly extends: "Metadata";
    };
    readonly MobileSettings: {
        readonly type: "MobileSettings";
        readonly props: {
            readonly dashboardMobile: "?DashboardMobileSettings";
            readonly enableImportContactFromDevice: "?boolean";
            readonly enableLightningOnMobile: "?boolean";
            readonly enableOfflineDraftsEnabled: "?boolean";
            readonly enablePopulateNameManuallyInToday: "?boolean";
            readonly enableS1EncryptedStoragePref2: "?boolean";
            readonly enableS1OfflinePref: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly DashboardMobileSettings: {
        readonly type: "DashboardMobileSettings";
        readonly props: {
            readonly enableDashboardIPadApp: "?boolean";
        };
    };
    readonly ModerationRule: {
        readonly type: "ModerationRule";
        readonly props: {
            readonly action: "string";
            readonly actionLimit: "?number";
            readonly active: "boolean";
            readonly description: "?string";
            readonly entitiesAndFields: readonly ["ModeratedEntityField"];
            readonly masterLabel: "string";
            readonly notifyLimit: "?number";
            readonly timePeriod: "?string";
            readonly type: "?string";
            readonly userCriteria: readonly ["string"];
            readonly userMessage: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly ModeratedEntityField: {
        readonly type: "ModeratedEntityField";
        readonly props: {
            readonly entityName: "string";
            readonly fieldName: "?string";
            readonly keywordList: "?string";
        };
    };
    readonly MyDomainSettings: {
        readonly type: "MyDomainSettings";
        readonly props: {
            readonly canOnlyLoginWithMyDomainUrl: "?boolean";
            readonly doesApiLoginRequireOrgDomain: "?boolean";
            readonly enableNativeBrowserForAuthOnAndroid: "?boolean";
            readonly enableNativeBrowserForAuthOnIos: "?boolean";
            readonly useStabilizedMyDomainHostnames: "?boolean";
            readonly useStabilizedSandboxMyDomainHostnames: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly NameSettings: {
        readonly type: "NameSettings";
        readonly props: {
            readonly enableMiddleName: "?boolean";
            readonly enableNameSuffix: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly NamedCredential: {
        readonly type: "NamedCredential";
        readonly props: {
            readonly allowMergeFieldsInBody: "?boolean";
            readonly allowMergeFieldsInHeader: "?boolean";
            readonly authProvider: "?string";
            readonly authTokenEndpointUrl: "?string";
            readonly awsAccessKey: "?string";
            readonly awsAccessSecret: "?string";
            readonly awsRegion: "?string";
            readonly awsService: "?string";
            readonly certificate: "?string";
            readonly endpoint: "?string";
            readonly generateAuthorizationHeader: "?boolean";
            readonly jwtAudience: "?string";
            readonly jwtFormulaSubject: "?string";
            readonly jwtIssuer: "?string";
            readonly jwtSigningCertificate: "?string";
            readonly jwtTextSubject: "?string";
            readonly jwtValidityPeriodSeconds: "?number";
            readonly label: "string";
            readonly oauthRefreshToken: "?string";
            readonly oauthScope: "?string";
            readonly oauthToken: "?string";
            readonly password: "?string";
            readonly principalType: "string";
            readonly privateConnection: "?string";
            readonly protocol: "string";
            readonly username: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly NavigationMenu: {
        readonly type: "NavigationMenu";
        readonly props: {
            readonly container: "string";
            readonly containerType: "string";
            readonly label: "string";
            readonly navigationMenuItem: readonly ["NavigationMenuItem"];
        };
        readonly extends: "Metadata";
    };
    readonly Network: {
        readonly type: "Network";
        readonly props: {
            readonly allowInternalUserLogin: "?boolean";
            readonly allowMembersToFlag: "?boolean";
            readonly allowedExtensions: "?string";
            readonly caseCommentEmailTemplate: "?string";
            readonly changePasswordTemplate: "string";
            readonly communityRoles: "?CommunityRoles";
            readonly description: "?string";
            readonly disableReputationRecordConversations: "?boolean";
            readonly emailFooterLogo: "?string";
            readonly emailFooterText: "?string";
            readonly emailSenderAddress: "string";
            readonly emailSenderName: "string";
            readonly enableCustomVFErrorPageOverrides: "?boolean";
            readonly enableDirectMessages: "?boolean";
            readonly enableGuestChatter: "?boolean";
            readonly enableGuestFileAccess: "?boolean";
            readonly enableGuestMemberVisibility: "?boolean";
            readonly enableInvitation: "?boolean";
            readonly enableKnowledgeable: "?boolean";
            readonly enableMemberVisibility: "?boolean";
            readonly enableNicknameDisplay: "?boolean";
            readonly enablePrivateMessages: "?boolean";
            readonly enableReputation: "?boolean";
            readonly enableShowAllNetworkSettings: "?boolean";
            readonly enableSiteAsContainer: "?boolean";
            readonly enableTalkingAboutStats: "?boolean";
            readonly enableTopicAssignmentRules: "?boolean";
            readonly enableTopicSuggestions: "?boolean";
            readonly enableUpDownVote: "?boolean";
            readonly feedChannel: "?string";
            readonly forgotPasswordTemplate: "string";
            readonly gatherCustomerSentimentData: "?boolean";
            readonly lockoutTemplate: "?string";
            readonly logoutUrl: "?string";
            readonly maxFileSizeKb: "?number";
            readonly navigationLinkSet: "?NavigationLinkSet";
            readonly networkMemberGroups: "?NetworkMemberGroup";
            readonly networkPageOverrides: "?NetworkPageOverride";
            readonly newSenderAddress: "?string";
            readonly picassoSite: "?string";
            readonly recommendationAudience: "?RecommendationAudience";
            readonly recommendationDefinition: "?RecommendationDefinition";
            readonly reputationLevels: "?ReputationLevelDefinitions";
            readonly reputationPointsRules: "?ReputationPointsRules";
            readonly selfRegProfile: "?string";
            readonly selfRegistration: "?boolean";
            readonly sendWelcomeEmail: "?boolean";
            readonly site: "string";
            readonly status: "string";
            readonly tabs: "NetworkTabSet";
            readonly urlPathPrefix: "?string";
            readonly verificationTemplate: "?string";
            readonly welcomeTemplate: "string";
        };
        readonly extends: "Metadata";
    };
    readonly CommunityRoles: {
        readonly type: "CommunityRoles";
        readonly props: {
            readonly customerUserRole: "?string";
            readonly employeeUserRole: "?string";
            readonly partnerUserRole: "?string";
        };
    };
    readonly NetworkMemberGroup: {
        readonly type: "NetworkMemberGroup";
        readonly props: {
            readonly permissionSet: readonly ["string"];
            readonly profile: readonly ["string"];
        };
    };
    readonly NetworkPageOverride: {
        readonly type: "NetworkPageOverride";
        readonly props: {
            readonly changePasswordPageOverrideSetting: "?string";
            readonly forgotPasswordPageOverrideSetting: "?string";
            readonly homePageOverrideSetting: "?string";
            readonly loginPageOverrideSetting: "?string";
            readonly selfRegProfilePageOverrideSetting: "?string";
        };
    };
    readonly RecommendationAudience: {
        readonly type: "RecommendationAudience";
        readonly props: {
            readonly recommendationAudienceDetails: readonly ["RecommendationAudienceDetail"];
        };
    };
    readonly RecommendationAudienceDetail: {
        readonly type: "RecommendationAudienceDetail";
        readonly props: {
            readonly audienceCriteriaType: "?string";
            readonly audienceCriteriaValue: "?string";
            readonly setupName: "?string";
        };
    };
    readonly RecommendationDefinition: {
        readonly type: "RecommendationDefinition";
        readonly props: {
            readonly recommendationDefinitionDetails: readonly ["RecommendationDefinitionDetail"];
        };
    };
    readonly RecommendationDefinitionDetail: {
        readonly type: "RecommendationDefinitionDetail";
        readonly props: {
            readonly actionUrl: "?string";
            readonly description: "?string";
            readonly linkText: "?string";
            readonly scheduledRecommendations: "?ScheduledRecommendation";
            readonly setupName: "?string";
            readonly title: "?string";
        };
    };
    readonly ScheduledRecommendation: {
        readonly type: "ScheduledRecommendation";
        readonly props: {
            readonly scheduledRecommendationDetails: readonly ["ScheduledRecommendationDetail"];
        };
    };
    readonly ScheduledRecommendationDetail: {
        readonly type: "ScheduledRecommendationDetail";
        readonly props: {
            readonly channel: "?string";
            readonly enabled: "?boolean";
            readonly rank: "?number";
            readonly recommendationAudience: "?string";
        };
    };
    readonly ReputationLevelDefinitions: {
        readonly type: "ReputationLevelDefinitions";
        readonly props: {
            readonly level: readonly ["ReputationLevel"];
        };
    };
    readonly ReputationLevel: {
        readonly type: "ReputationLevel";
        readonly props: {
            readonly branding: "?ReputationBranding";
            readonly label: "?string";
            readonly lowerThreshold: "number";
        };
    };
    readonly ReputationBranding: {
        readonly type: "ReputationBranding";
        readonly props: {
            readonly smallImage: "?string";
        };
    };
    readonly ReputationPointsRules: {
        readonly type: "ReputationPointsRules";
        readonly props: {
            readonly pointsRule: readonly ["ReputationPointsRule"];
        };
    };
    readonly ReputationPointsRule: {
        readonly type: "ReputationPointsRule";
        readonly props: {
            readonly eventType: "string";
            readonly points: "number";
        };
    };
    readonly NetworkTabSet: {
        readonly type: "NetworkTabSet";
        readonly props: {
            readonly customTab: readonly ["string"];
            readonly defaultTab: "string";
            readonly standardTab: readonly ["string"];
        };
    };
    readonly NotificationsSettings: {
        readonly type: "NotificationsSettings";
        readonly props: {
            readonly enableMobileAppPushNotifications: "?boolean";
            readonly enableNotifications: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly OauthCustomScope: {
        readonly type: "OauthCustomScope";
        readonly props: {
            readonly description: "string";
            readonly developerName: "string";
            readonly isProtected: "?boolean";
            readonly isPublic: "?boolean";
            readonly masterLabel: "string";
        };
        readonly extends: "Metadata";
    };
    readonly ObjectLinkingSettings: {
        readonly type: "ObjectLinkingSettings";
        readonly props: {
            readonly enableObjectLinking: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly OmniChannelSettings: {
        readonly type: "OmniChannelSettings";
        readonly props: {
            readonly enableOmniAutoLoginPrompt: "?boolean";
            readonly enableOmniChannel: "?boolean";
            readonly enableOmniSecondaryRoutingPriority: "?boolean";
            readonly enableOmniSkillsRouting: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly OpportunitySettings: {
        readonly type: "OpportunitySettings";
        readonly props: {
            readonly autoActivateNewReminders: "?boolean";
            readonly customizableProductSchedulesEnabled: "?boolean";
            readonly doesAutoAddSplitOwnerAsOpportunityTeamMember: "?boolean";
            readonly doesEnforceStandardOpportunitySaveLogic: "?boolean";
            readonly enableFindSimilarOpportunities: "?boolean";
            readonly enableOpportunityFieldHistoryTracking: "?boolean";
            readonly enableOpportunityInsightsInMobile: "?boolean";
            readonly enableOpportunityTeam: "?boolean";
            readonly enableUpdateReminders: "?boolean";
            readonly findSimilarOppFilter: "?FindSimilarOppFilter";
            readonly promptToAddProducts: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly FindSimilarOppFilter: {
        readonly type: "FindSimilarOppFilter";
        readonly props: {
            readonly similarOpportunitiesDisplayColumns: readonly ["string"];
            readonly similarOpportunitiesMatchFields: readonly ["string"];
        };
    };
    readonly OrchestrationContext: {
        readonly type: "OrchestrationContext";
        readonly props: {
            readonly datasets: readonly ["OrchestrationContextDataset"];
            readonly description: "?string";
            readonly events: readonly ["OrchestrationContextEvent"];
            readonly imageFile: "string";
            readonly imageScale: "number";
            readonly masterLabel: "string";
            readonly runtimeType: "string";
            readonly salesforceObject: "?string";
            readonly salesforceObjectPrimaryKey: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly OrchestrationContextDataset: {
        readonly type: "OrchestrationContextDataset";
        readonly props: {
            readonly datasetType: "string";
            readonly orchestrationDataset: "string";
        };
    };
    readonly OrchestrationContextEvent: {
        readonly type: "OrchestrationContextEvent";
        readonly props: {
            readonly eventType: "string";
            readonly orchestrationEvent: "string";
            readonly platformEvent: "string";
            readonly platformEventPrimaryKey: "string";
        };
    };
    readonly OrderManagementSettings: {
        readonly type: "OrderManagementSettings";
        readonly props: {
            readonly enableOrderManagement: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly OrderSettings: {
        readonly type: "OrderSettings";
        readonly props: {
            readonly enableNegativeQuantity: "?boolean";
            readonly enableOrders: "?boolean";
            readonly enableReductionOrders: "?boolean";
            readonly enableZeroQuantity: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly OrgPreferenceSettings: {
        readonly type: "OrgPreferenceSettings";
        readonly props: {
            readonly preferences: readonly ["OrganizationSettingsDetail"];
        };
        readonly extends: "Metadata";
    };
    readonly OrganizationSettingsDetail: {
        readonly type: "OrganizationSettingsDetail";
        readonly props: {
            readonly settingName: "string";
            readonly settingValue: "boolean";
        };
    };
    readonly OrgSettings: {
        readonly type: "OrgSettings";
        readonly props: {
            readonly enableCustomerSuccessPortal: "?boolean";
            readonly enableExtendedMailMerge: "?boolean";
            readonly enableIncludeContractStatus: "?boolean";
            readonly enableMakeDeploymentsMandatory: "?boolean";
            readonly enableManageSelfServiceUsers: "?boolean";
            readonly enableOrgFeedSentimentAnalysis: "?boolean";
            readonly enableRADeploymentAttributeOnly: "?boolean";
            readonly enableResetDivisionOnLogin: "?boolean";
            readonly saveMailMergeDocsAsSalesforceDocs: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly Package: {
        readonly type: "Package";
        readonly props: {
            readonly apiAccessLevel: "?string";
            readonly description: "?string";
            readonly namespacePrefix: "?string";
            readonly objectPermissions: readonly ["ProfileObjectPermissions"];
            readonly packageType: "?string";
            readonly postInstallClass: "?string";
            readonly setupWeblink: "?string";
            readonly types: readonly ["PackageTypeMembers"];
            readonly uninstallClass: "?string";
            readonly version: "string";
        };
        readonly extends: "Metadata";
    };
    readonly ProfileObjectPermissions: {
        readonly type: "ProfileObjectPermissions";
        readonly props: {
            readonly allowCreate: "?boolean";
            readonly allowDelete: "?boolean";
            readonly allowEdit: "?boolean";
            readonly allowRead: "?boolean";
            readonly modifyAllRecords: "?boolean";
            readonly object: "string";
            readonly viewAllRecords: "?boolean";
        };
    };
    readonly PackageTypeMembers: {
        readonly type: "PackageTypeMembers";
        readonly props: {
            readonly members: readonly ["string"];
            readonly name: "string";
        };
    };
    readonly PardotEinsteinSettings: {
        readonly type: "PardotEinsteinSettings";
        readonly props: {
            readonly enableCampaignInsight: "?boolean";
            readonly enableEngagementScore: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly PardotSettings: {
        readonly type: "PardotSettings";
        readonly props: {
            readonly enableB2bmaAppEnabled: "?boolean";
            readonly enableEngagementHistoryDashboards: "?boolean";
            readonly enablePardotAppV1Enabled: "?boolean";
            readonly enablePardotEnabled: "?boolean";
            readonly enableProspectActivityDataset: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly PartyDataModelSettings: {
        readonly type: "PartyDataModelSettings";
        readonly props: {
            readonly enableAutoSelectIndividualOnMerge: "?boolean";
            readonly enableConsentManagement: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly PathAssistant: {
        readonly type: "PathAssistant";
        readonly props: {
            readonly active: "boolean";
            readonly entityName: "string";
            readonly fieldName: "string";
            readonly masterLabel: "string";
            readonly pathAssistantSteps: readonly ["PathAssistantStep"];
            readonly recordTypeName: "string";
        };
        readonly extends: "Metadata";
    };
    readonly PathAssistantStep: {
        readonly type: "PathAssistantStep";
        readonly props: {
            readonly fieldNames: readonly ["string"];
            readonly info: "?string";
            readonly picklistValueName: "string";
        };
    };
    readonly PathAssistantSettings: {
        readonly type: "PathAssistantSettings";
        readonly props: {
            readonly canOverrideAutoPathCollapseWithUserPref: "?boolean";
            readonly pathAssistantEnabled: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly PermissionSet: {
        readonly type: "PermissionSet";
        readonly props: {
            readonly applicationVisibilities: readonly ["PermissionSetApplicationVisibility"];
            readonly classAccesses: readonly ["PermissionSetApexClassAccess"];
            readonly customMetadataTypeAccesses: readonly ["PermissionSetCustomMetadataTypeAccess"];
            readonly customPermissions: readonly ["PermissionSetCustomPermissions"];
            readonly description: "?string";
            readonly externalDataSourceAccesses: readonly ["PermissionSetExternalDataSourceAccess"];
            readonly fieldPermissions: readonly ["PermissionSetFieldPermissions"];
            readonly flowAccesses: readonly ["PermissionSetFlowAccess"];
            readonly hasActivationRequired: "?boolean";
            readonly label: "string";
            readonly license: "?string";
            readonly objectPermissions: readonly ["PermissionSetObjectPermissions"];
            readonly pageAccesses: readonly ["PermissionSetApexPageAccess"];
            readonly recordTypeVisibilities: readonly ["PermissionSetRecordTypeVisibility"];
            readonly tabSettings: readonly ["PermissionSetTabSetting"];
            readonly userPermissions: readonly ["PermissionSetUserPermission"];
        };
        readonly extends: "Metadata";
    };
    readonly PermissionSetApplicationVisibility: {
        readonly type: "PermissionSetApplicationVisibility";
        readonly props: {
            readonly application: "string";
            readonly visible: "boolean";
        };
    };
    readonly PermissionSetApexClassAccess: {
        readonly type: "PermissionSetApexClassAccess";
        readonly props: {
            readonly apexClass: "string";
            readonly enabled: "boolean";
        };
    };
    readonly PermissionSetCustomMetadataTypeAccess: {
        readonly type: "PermissionSetCustomMetadataTypeAccess";
        readonly props: {
            readonly enabled: "boolean";
            readonly name: "string";
        };
    };
    readonly PermissionSetCustomPermissions: {
        readonly type: "PermissionSetCustomPermissions";
        readonly props: {
            readonly enabled: "boolean";
            readonly name: "string";
        };
    };
    readonly PermissionSetExternalDataSourceAccess: {
        readonly type: "PermissionSetExternalDataSourceAccess";
        readonly props: {
            readonly enabled: "boolean";
            readonly externalDataSource: "string";
        };
    };
    readonly PermissionSetFieldPermissions: {
        readonly type: "PermissionSetFieldPermissions";
        readonly props: {
            readonly editable: "boolean";
            readonly field: "string";
            readonly readable: "?boolean";
        };
    };
    readonly PermissionSetFlowAccess: {
        readonly type: "PermissionSetFlowAccess";
        readonly props: {
            readonly enabled: "boolean";
            readonly flow: "string";
        };
    };
    readonly PermissionSetObjectPermissions: {
        readonly type: "PermissionSetObjectPermissions";
        readonly props: {
            readonly allowCreate: "boolean";
            readonly allowDelete: "boolean";
            readonly allowEdit: "boolean";
            readonly allowRead: "boolean";
            readonly modifyAllRecords: "boolean";
            readonly object: "string";
            readonly viewAllRecords: "boolean";
        };
    };
    readonly PermissionSetApexPageAccess: {
        readonly type: "PermissionSetApexPageAccess";
        readonly props: {
            readonly apexPage: "string";
            readonly enabled: "boolean";
        };
    };
    readonly PermissionSetRecordTypeVisibility: {
        readonly type: "PermissionSetRecordTypeVisibility";
        readonly props: {
            readonly recordType: "string";
            readonly visible: "boolean";
        };
    };
    readonly PermissionSetTabSetting: {
        readonly type: "PermissionSetTabSetting";
        readonly props: {
            readonly tab: "string";
            readonly visibility: "string";
        };
    };
    readonly PermissionSetUserPermission: {
        readonly type: "PermissionSetUserPermission";
        readonly props: {
            readonly enabled: "boolean";
            readonly name: "string";
        };
    };
    readonly MutingPermissionSet: {
        readonly type: "MutingPermissionSet";
        readonly props: {
            readonly label: "string";
        };
        readonly extends: "PermissionSet";
    };
    readonly PermissionSetGroup: {
        readonly type: "PermissionSetGroup";
        readonly props: {
            readonly description: "?string";
            readonly label: "string";
            readonly mutingPermissionSets: readonly ["string"];
            readonly permissionSets: readonly ["string"];
            readonly status: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly PersonListSettings: {
        readonly type: "PersonListSettings";
        readonly props: {
            readonly enablePersonList: "boolean";
        };
        readonly extends: "Metadata";
    };
    readonly PicklistSettings: {
        readonly type: "PicklistSettings";
        readonly props: {
            readonly isPicklistApiNameEditDisabled: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly PlatformCachePartition: {
        readonly type: "PlatformCachePartition";
        readonly props: {
            readonly description: "?string";
            readonly isDefaultPartition: "boolean";
            readonly masterLabel: "string";
            readonly platformCachePartitionTypes: readonly ["PlatformCachePartitionType"];
        };
        readonly extends: "Metadata";
    };
    readonly PlatformCachePartitionType: {
        readonly type: "PlatformCachePartitionType";
        readonly props: {
            readonly allocatedCapacity: "number";
            readonly allocatedPurchasedCapacity: "number";
            readonly allocatedTrialCapacity: "number";
            readonly cacheType: "string";
        };
    };
    readonly PlatformEncryptionSettings: {
        readonly type: "PlatformEncryptionSettings";
        readonly props: {
            readonly canEncryptManagedPackageFields: "?boolean";
            readonly enableDeterministicEncryption: "?boolean";
            readonly enableEncryptFieldHistory: "?boolean";
            readonly enableEventBusEncryption: "?boolean";
            readonly isMEKForEncryptionRequired: "?boolean";
            readonly isUseHighAssuranceKeysRequired: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly PlatformEventChannel: {
        readonly type: "PlatformEventChannel";
        readonly props: {
            readonly channelType: "string";
            readonly label: "string";
        };
        readonly extends: "Metadata";
    };
    readonly PlatformEventChannelMember: {
        readonly type: "PlatformEventChannelMember";
        readonly props: {
            readonly eventChannel: "string";
            readonly selectedEntity: "string";
        };
        readonly extends: "Metadata";
    };
    readonly Portal: {
        readonly type: "Portal";
        readonly props: {
            readonly active: "boolean";
            readonly admin: "?string";
            readonly defaultLanguage: "?string";
            readonly description: "?string";
            readonly emailSenderAddress: "string";
            readonly emailSenderName: "string";
            readonly enableSelfCloseCase: "?boolean";
            readonly footerDocument: "?string";
            readonly forgotPassTemplate: "?string";
            readonly headerDocument: "?string";
            readonly isSelfRegistrationActivated: "?boolean";
            readonly loginHeaderDocument: "?string";
            readonly logoDocument: "?string";
            readonly logoutUrl: "?string";
            readonly newCommentTemplate: "?string";
            readonly newPassTemplate: "?string";
            readonly newUserTemplate: "?string";
            readonly ownerNotifyTemplate: "?string";
            readonly selfRegNewUserUrl: "?string";
            readonly selfRegUserDefaultProfile: "?string";
            readonly selfRegUserDefaultRole: "?string";
            readonly selfRegUserTemplate: "?string";
            readonly showActionConfirmation: "?boolean";
            readonly stylesheetDocument: "?string";
            readonly type: "string";
        };
        readonly extends: "Metadata";
    };
    readonly PostTemplate: {
        readonly type: "PostTemplate";
        readonly props: {
            readonly default: "?boolean";
            readonly description: "?string";
            readonly fields: readonly ["string"];
            readonly label: "string";
        };
        readonly extends: "Metadata";
    };
    readonly PresenceDeclineReason: {
        readonly type: "PresenceDeclineReason";
        readonly props: {
            readonly label: "string";
        };
        readonly extends: "Metadata";
    };
    readonly PresenceUserConfig: {
        readonly type: "PresenceUserConfig";
        readonly props: {
            readonly assignments: "?PresenceConfigAssignments";
            readonly capacity: "number";
            readonly declineReasons: readonly ["string"];
            readonly enableAutoAccept: "?boolean";
            readonly enableDecline: "?boolean";
            readonly enableDeclineReason: "?boolean";
            readonly enableDisconnectSound: "?boolean";
            readonly enableRequestSound: "?boolean";
            readonly label: "string";
            readonly presenceStatusOnDecline: "?string";
            readonly presenceStatusOnPushTimeout: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly PresenceConfigAssignments: {
        readonly type: "PresenceConfigAssignments";
        readonly props: {
            readonly profiles: "?PresenceConfigProfileAssignments";
            readonly users: "?PresenceConfigUserAssignments";
        };
    };
    readonly PresenceConfigProfileAssignments: {
        readonly type: "PresenceConfigProfileAssignments";
        readonly props: {
            readonly profile: readonly ["string"];
        };
    };
    readonly PresenceConfigUserAssignments: {
        readonly type: "PresenceConfigUserAssignments";
        readonly props: {
            readonly user: readonly ["string"];
        };
    };
    readonly PrivacySettings: {
        readonly type: "PrivacySettings";
        readonly props: {
            readonly enableConsentAuditTrail: "?boolean";
            readonly enableConsentEventStream: "?boolean";
            readonly enableDefaultMetadataValues: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly PrivateConnection: {
        readonly type: "PrivateConnection";
        readonly props: {
            readonly description: "?string";
            readonly direction: "string";
            readonly externalConnectionProperties: readonly ["ExternalConnectionProperty"];
            readonly label: "string";
            readonly status: "string";
            readonly type: "string";
        };
        readonly extends: "Metadata";
    };
    readonly ExternalConnectionProperty: {
        readonly type: "ExternalConnectionProperty";
        readonly props: {
            readonly propertyName: "string";
            readonly propertyValue: "string";
        };
    };
    readonly ProductSettings: {
        readonly type: "ProductSettings";
        readonly props: {
            readonly enableCascadeActivateToRelatedPrices: "?boolean";
            readonly enableMySettings: "?boolean";
            readonly enableQuantitySchedule: "?boolean";
            readonly enableRevenueSchedule: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly Profile: {
        readonly type: "Profile";
        readonly props: {
            readonly applicationVisibilities: readonly ["ProfileApplicationVisibility"];
            readonly categoryGroupVisibilities: readonly ["ProfileCategoryGroupVisibility"];
            readonly classAccesses: readonly ["ProfileApexClassAccess"];
            readonly custom: "?boolean";
            readonly customMetadataTypeAccesses: readonly ["ProfileCustomMetadataTypeAccess"];
            readonly customPermissions: readonly ["ProfileCustomPermissions"];
            readonly description: "?string";
            readonly externalDataSourceAccesses: readonly ["ProfileExternalDataSourceAccess"];
            readonly fieldPermissions: readonly ["ProfileFieldLevelSecurity"];
            readonly flowAccesses: readonly ["ProfileFlowAccess"];
            readonly layoutAssignments: readonly ["ProfileLayoutAssignment"];
            readonly loginHours: "?ProfileLoginHours";
            readonly loginIpRanges: readonly ["ProfileLoginIpRange"];
            readonly objectPermissions: readonly ["ProfileObjectPermissions"];
            readonly pageAccesses: readonly ["ProfileApexPageAccess"];
            readonly profileActionOverrides: readonly ["ProfileActionOverride"];
            readonly recordTypeVisibilities: readonly ["ProfileRecordTypeVisibility"];
            readonly tabVisibilities: readonly ["ProfileTabVisibility"];
            readonly userLicense: "?string";
            readonly userPermissions: readonly ["ProfileUserPermission"];
        };
        readonly extends: "Metadata";
    };
    readonly ProfileApplicationVisibility: {
        readonly type: "ProfileApplicationVisibility";
        readonly props: {
            readonly application: "string";
            readonly default: "boolean";
            readonly visible: "boolean";
        };
    };
    readonly ProfileCategoryGroupVisibility: {
        readonly type: "ProfileCategoryGroupVisibility";
        readonly props: {
            readonly dataCategories: readonly ["string"];
            readonly dataCategoryGroup: "string";
            readonly visibility: "string";
        };
    };
    readonly ProfileApexClassAccess: {
        readonly type: "ProfileApexClassAccess";
        readonly props: {
            readonly apexClass: "string";
            readonly enabled: "boolean";
        };
    };
    readonly ProfileCustomMetadataTypeAccess: {
        readonly type: "ProfileCustomMetadataTypeAccess";
        readonly props: {
            readonly enabled: "boolean";
            readonly name: "string";
        };
    };
    readonly ProfileCustomPermissions: {
        readonly type: "ProfileCustomPermissions";
        readonly props: {
            readonly enabled: "boolean";
            readonly name: "string";
        };
    };
    readonly ProfileExternalDataSourceAccess: {
        readonly type: "ProfileExternalDataSourceAccess";
        readonly props: {
            readonly enabled: "boolean";
            readonly externalDataSource: "string";
        };
    };
    readonly ProfileFieldLevelSecurity: {
        readonly type: "ProfileFieldLevelSecurity";
        readonly props: {
            readonly editable: "boolean";
            readonly field: "string";
            readonly readable: "?boolean";
        };
    };
    readonly ProfileFlowAccess: {
        readonly type: "ProfileFlowAccess";
        readonly props: {
            readonly enabled: "boolean";
            readonly flow: "string";
        };
    };
    readonly ProfileLayoutAssignment: {
        readonly type: "ProfileLayoutAssignment";
        readonly props: {
            readonly layout: "string";
            readonly recordType: "?string";
        };
    };
    readonly ProfileLoginHours: {
        readonly type: "ProfileLoginHours";
        readonly props: {
            readonly fridayEnd: "?string";
            readonly fridayStart: "?string";
            readonly mondayEnd: "?string";
            readonly mondayStart: "?string";
            readonly saturdayEnd: "?string";
            readonly saturdayStart: "?string";
            readonly sundayEnd: "?string";
            readonly sundayStart: "?string";
            readonly thursdayEnd: "?string";
            readonly thursdayStart: "?string";
            readonly tuesdayEnd: "?string";
            readonly tuesdayStart: "?string";
            readonly wednesdayEnd: "?string";
            readonly wednesdayStart: "?string";
        };
    };
    readonly ProfileLoginIpRange: {
        readonly type: "ProfileLoginIpRange";
        readonly props: {
            readonly description: "?string";
            readonly endAddress: "string";
            readonly startAddress: "string";
        };
    };
    readonly ProfileApexPageAccess: {
        readonly type: "ProfileApexPageAccess";
        readonly props: {
            readonly apexPage: "string";
            readonly enabled: "boolean";
        };
    };
    readonly ProfileRecordTypeVisibility: {
        readonly type: "ProfileRecordTypeVisibility";
        readonly props: {
            readonly default: "boolean";
            readonly personAccountDefault: "?boolean";
            readonly recordType: "string";
            readonly visible: "boolean";
        };
    };
    readonly ProfileTabVisibility: {
        readonly type: "ProfileTabVisibility";
        readonly props: {
            readonly tab: "string";
            readonly visibility: "string";
        };
    };
    readonly ProfileUserPermission: {
        readonly type: "ProfileUserPermission";
        readonly props: {
            readonly enabled: "boolean";
            readonly name: "string";
        };
    };
    readonly ProfilePasswordPolicy: {
        readonly type: "ProfilePasswordPolicy";
        readonly props: {
            readonly forgotPasswordRedirect: "?boolean";
            readonly lockoutInterval: "number";
            readonly maxLoginAttempts: "number";
            readonly minimumPasswordLength: "number";
            readonly minimumPasswordLifetime: "?boolean";
            readonly obscure: "?boolean";
            readonly passwordComplexity: "number";
            readonly passwordExpiration: "number";
            readonly passwordHistory: "number";
            readonly passwordQuestion: "number";
            readonly profile: "string";
        };
        readonly extends: "Metadata";
    };
    readonly ProfileSessionSetting: {
        readonly type: "ProfileSessionSetting";
        readonly props: {
            readonly externalCommunityUserIdentityVerif: "boolean";
            readonly forceLogout: "boolean";
            readonly profile: "string";
            readonly requiredSessionLevel: "?string";
            readonly sessionPersistence: "boolean";
            readonly sessionTimeout: "number";
            readonly sessionTimeoutWarning: "boolean";
        };
        readonly extends: "Metadata";
    };
    readonly Prompt: {
        readonly type: "Prompt";
        readonly props: {
            readonly masterLabel: "string";
            readonly promptVersions: readonly ["PromptVersion"];
        };
        readonly extends: "Metadata";
    };
    readonly PromptVersion: {
        readonly type: "PromptVersion";
        readonly props: {
            readonly actionButtonLabel: "?string";
            readonly actionButtonLink: "?string";
            readonly body: "string";
            readonly customApplication: "?string";
            readonly delayDays: "number";
            readonly description: "?string";
            readonly dismissButtonLabel: "?string";
            readonly displayPosition: "?string";
            readonly displayType: "string";
            readonly endDate: "?string";
            readonly header: "?string";
            readonly indexWithIsPublished: "?string";
            readonly indexWithoutIsPublished: "?string";
            readonly isPublished: "?boolean";
            readonly masterLabel: "string";
            readonly publishedByUser: "?string";
            readonly publishedDate: "?string";
            readonly shouldDisplayActionButton: "boolean";
            readonly startDate: "string";
            readonly targetAppDeveloperName: "string";
            readonly targetAppNamespacePrefix: "?string";
            readonly targetPageKey1: "string";
            readonly targetPageKey2: "?string";
            readonly targetPageType: "string";
            readonly timesToDisplay: "number";
            readonly title: "string";
            readonly uiFormulaRule: "?UiFormulaRule";
            readonly userAccess: "string";
            readonly versionNumber: "number";
        };
    };
    readonly Queue: {
        readonly type: "Queue";
        readonly props: {
            readonly doesSendEmailToMembers: "?boolean";
            readonly email: "?string";
            readonly name: "string";
            readonly queueMembers: "?QueueMembers";
            readonly queueRoutingConfig: "?string";
            readonly queueSobject: readonly ["QueueSobject"];
        };
        readonly extends: "Metadata";
    };
    readonly QueueMembers: {
        readonly type: "QueueMembers";
        readonly props: {
            readonly publicGroups: "?PublicGroups";
            readonly roleAndSubordinates: "?RoleAndSubordinates";
            readonly roleAndSubordinatesInternal: "?RoleAndSubordinatesInternal";
            readonly roles: "?Roles";
            readonly users: "?Users";
        };
    };
    readonly PublicGroups: {
        readonly type: "PublicGroups";
        readonly props: {
            readonly publicGroup: readonly ["string"];
        };
    };
    readonly RoleAndSubordinates: {
        readonly type: "RoleAndSubordinates";
        readonly props: {
            readonly roleAndSubordinate: readonly ["string"];
        };
    };
    readonly RoleAndSubordinatesInternal: {
        readonly type: "RoleAndSubordinatesInternal";
        readonly props: {
            readonly roleAndSubordinateInternal: readonly ["string"];
        };
    };
    readonly Roles: {
        readonly type: "Roles";
        readonly props: {
            readonly role: readonly ["string"];
        };
    };
    readonly Users: {
        readonly type: "Users";
        readonly props: {
            readonly user: readonly ["string"];
        };
    };
    readonly QueueSobject: {
        readonly type: "QueueSobject";
        readonly props: {
            readonly sobjectType: "string";
        };
    };
    readonly QueueRoutingConfig: {
        readonly type: "QueueRoutingConfig";
        readonly props: {
            readonly capacityPercentage: "?number";
            readonly capacityWeight: "?number";
            readonly dropAdditionalSkillsTimeout: "?number";
            readonly isAttributeBased: "?boolean";
            readonly label: "string";
            readonly pushTimeout: "?number";
            readonly queueOverflowAssignee: "?string";
            readonly routingModel: "string";
            readonly routingPriority: "number";
            readonly userOverflowAssignee: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly QuickAction: {
        readonly type: "QuickAction";
        readonly props: {
            readonly canvas: "?string";
            readonly description: "?string";
            readonly fieldOverrides: readonly ["FieldOverride"];
            readonly flowDefinition: "?string";
            readonly height: "?number";
            readonly icon: "?string";
            readonly isProtected: "?boolean";
            readonly label: "?string";
            readonly lightningComponent: "?string";
            readonly mobExtDisplayMode: "?string";
            readonly optionsCreateFeedItem: "boolean";
            readonly page: "?string";
            readonly quickActionLayout: "?QuickActionLayout";
            readonly quickActionSendEmailOptions: "?QuickActionSendEmailOptions";
            readonly standardLabel: "?string";
            readonly successMessage: "?string";
            readonly targetObject: "?string";
            readonly targetParentField: "?string";
            readonly targetRecordType: "?string";
            readonly type: "string";
            readonly width: "?number";
        };
        readonly extends: "Metadata";
    };
    readonly FieldOverride: {
        readonly type: "FieldOverride";
        readonly props: {
            readonly field: "string";
            readonly formula: "?string";
            readonly literalValue: "?string";
        };
    };
    readonly QuickActionLayout: {
        readonly type: "QuickActionLayout";
        readonly props: {
            readonly layoutSectionStyle: "string";
            readonly quickActionLayoutColumns: readonly ["QuickActionLayoutColumn"];
        };
    };
    readonly QuickActionLayoutColumn: {
        readonly type: "QuickActionLayoutColumn";
        readonly props: {
            readonly quickActionLayoutItems: readonly ["QuickActionLayoutItem"];
        };
    };
    readonly QuickActionLayoutItem: {
        readonly type: "QuickActionLayoutItem";
        readonly props: {
            readonly emptySpace: "?boolean";
            readonly field: "?string";
            readonly uiBehavior: "?string";
        };
    };
    readonly QuickActionSendEmailOptions: {
        readonly type: "QuickActionSendEmailOptions";
        readonly props: {
            readonly defaultEmailTemplateName: "?string";
            readonly ignoreDefaultEmailTemplateSubject: "boolean";
        };
    };
    readonly QuoteSettings: {
        readonly type: "QuoteSettings";
        readonly props: {
            readonly enableQuote: "boolean";
            readonly enableQuotesWithoutOppEnabled: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly RecommendationStrategy: {
        readonly type: "RecommendationStrategy";
        readonly props: {
            readonly actionContext: readonly ["StrategyAction"];
            readonly contextRecordType: "?string";
            readonly description: "?string";
            readonly filter: readonly ["StrategyNodeFilter"];
            readonly if: readonly ["StrategyNodeIf"];
            readonly invocableAction: readonly ["StrategyNodeInvocableAction"];
            readonly isTemplate: "?boolean";
            readonly label: "string";
            readonly map: readonly ["StrategyNodeMap"];
            readonly mutuallyExclusive: readonly ["StrategyNodeExclusive"];
            readonly onBehalfOfExpression: "?string";
            readonly recommendationLimit: readonly ["StrategyNodeRecommendationLimit"];
            readonly recommendationLoad: readonly ["StrategyNodeRecommendationLoad"];
            readonly sort: readonly ["StrategyNodeSort"];
            readonly union: readonly ["StrategyNodeUnion"];
        };
        readonly extends: "Metadata";
    };
    readonly StrategyAction: {
        readonly type: "StrategyAction";
        readonly props: {
            readonly action: "string";
            readonly argument: readonly ["StrategyActionArg"];
            readonly description: "?string";
            readonly label: "?string";
            readonly name: "string";
            readonly type: "string";
        };
    };
    readonly StrategyActionArg: {
        readonly type: "StrategyActionArg";
        readonly props: {
            readonly name: "string";
            readonly value: "string";
        };
    };
    readonly StrategyNodeFilter: {
        readonly type: "StrategyNodeFilter";
        readonly props: {
            readonly expression: "string";
        };
        readonly extends: "StrategyNodeUnionBase";
    };
    readonly StrategyNodeUnionBase: {
        readonly type: "StrategyNodeUnionBase";
        readonly props: {
            readonly limit: "?number";
        };
        readonly extends: "StrategyNodeBase";
    };
    readonly StrategyNodeBase: {
        readonly type: "StrategyNodeBase";
        readonly props: {
            readonly childNode: readonly ["string"];
            readonly description: "?string";
            readonly label: "?string";
            readonly name: "string";
        };
    };
    readonly StrategyNodeExclusive: {
        readonly type: "StrategyNodeExclusive";
        readonly props: {};
        readonly extends: "StrategyNodeUnionBase";
    };
    readonly StrategyNodeIf: {
        readonly type: "StrategyNodeIf";
        readonly props: {
            readonly childNodeExpression: readonly ["IfExpression"];
            readonly onlyFirstMatch: "?boolean";
        };
        readonly extends: "StrategyNodeUnionBase";
    };
    readonly IfExpression: {
        readonly type: "IfExpression";
        readonly props: {
            readonly childName: "string";
            readonly expression: "string";
        };
    };
    readonly StrategyNodeInvocableAction: {
        readonly type: "StrategyNodeInvocableAction";
        readonly props: {
            readonly action: "string";
            readonly argument: readonly ["StrategyNodeInvocableActionArg"];
            readonly isGenerator: "boolean";
            readonly type: "string";
        };
        readonly extends: "StrategyNodeUnionBase";
    };
    readonly StrategyNodeInvocableActionArg: {
        readonly type: "StrategyNodeInvocableActionArg";
        readonly props: {
            readonly name: "string";
            readonly value: "string";
        };
    };
    readonly StrategyNodeMap: {
        readonly type: "StrategyNodeMap";
        readonly props: {
            readonly mapExpression: readonly ["MapExpression"];
        };
        readonly extends: "StrategyNodeUnionBase";
    };
    readonly MapExpression: {
        readonly type: "MapExpression";
        readonly props: {
            readonly expression: "string";
            readonly name: "string";
            readonly type: "string";
        };
    };
    readonly StrategyNodeRecommendationLimit: {
        readonly type: "StrategyNodeRecommendationLimit";
        readonly props: {
            readonly filterMode: readonly ["string"];
            readonly lookbackDuration: "?number";
            readonly maxRecommendationCount: "?number";
        };
        readonly extends: "StrategyNodeUnionBase";
    };
    readonly StrategyNodeRecommendationLoad: {
        readonly type: "StrategyNodeRecommendationLoad";
        readonly props: {
            readonly condition: readonly ["RecommendationLoadCondition"];
            readonly conditionLogic: "?string";
        };
        readonly extends: "StrategyNodeUnionBase";
    };
    readonly RecommendationLoadCondition: {
        readonly type: "RecommendationLoadCondition";
        readonly props: {
            readonly field: "string";
            readonly operator: "string";
            readonly value: "RecommendationConditionValue";
        };
    };
    readonly RecommendationConditionValue: {
        readonly type: "RecommendationConditionValue";
        readonly props: {
            readonly type: "string";
            readonly value: "?string";
        };
    };
    readonly StrategyNodeSort: {
        readonly type: "StrategyNodeSort";
        readonly props: {
            readonly field: readonly ["StrategyNodeSortField"];
        };
        readonly extends: "StrategyNodeUnionBase";
    };
    readonly StrategyNodeSortField: {
        readonly type: "StrategyNodeSortField";
        readonly props: {
            readonly name: "string";
            readonly nullsFirst: "?boolean";
            readonly order: "?string";
        };
    };
    readonly StrategyNodeUnion: {
        readonly type: "StrategyNodeUnion";
        readonly props: {};
        readonly extends: "StrategyNodeUnionBase";
    };
    readonly RecordActionDeployment: {
        readonly type: "RecordActionDeployment";
        readonly props: {
            readonly channelConfigurations: readonly ["RecordActionDeploymentChannel"];
            readonly deploymentContexts: readonly ["RecordActionDeploymentContext"];
            readonly hasGuidedActions: "?boolean";
            readonly hasRecommendations: "?boolean";
            readonly masterLabel: "string";
            readonly recommendation: "?RecordActionRecommendation";
            readonly selectableItems: readonly ["RecordActionSelectableItem"];
        };
        readonly extends: "Metadata";
    };
    readonly RecordActionDeploymentChannel: {
        readonly type: "RecordActionDeploymentChannel";
        readonly props: {
            readonly channel: "string";
            readonly channelItems: readonly ["RecordActionDefaultItem"];
            readonly isAutopopEnabled: "?boolean";
        };
    };
    readonly RecordActionDefaultItem: {
        readonly type: "RecordActionDefaultItem";
        readonly props: {
            readonly action: "string";
            readonly isMandatory: "?boolean";
            readonly isUiRemoveHidden: "?boolean";
            readonly pinned: "string";
            readonly position: "number";
            readonly type: "string";
        };
    };
    readonly RecordActionDeploymentContext: {
        readonly type: "RecordActionDeploymentContext";
        readonly props: {
            readonly entityName: "string";
            readonly recommendationStrategy: "?string";
        };
    };
    readonly RecordActionRecommendation: {
        readonly type: "RecordActionRecommendation";
        readonly props: {
            readonly defaultStrategy: "?string";
            readonly hasDescription: "boolean";
            readonly hasImage: "boolean";
            readonly hasRejectAction: "boolean";
            readonly hasTitle: "boolean";
            readonly maxDisplayRecommendations: "number";
        };
    };
    readonly RecordActionSelectableItem: {
        readonly type: "RecordActionSelectableItem";
        readonly props: {
            readonly action: "string";
            readonly type: "string";
        };
    };
    readonly RecordPageSettings: {
        readonly type: "RecordPageSettings";
        readonly props: {
            readonly enableActivityRelatedList: "?boolean";
            readonly enableFullRecordView: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly RemoteSiteSetting: {
        readonly type: "RemoteSiteSetting";
        readonly props: {
            readonly description: "?string";
            readonly disableProtocolSecurity: "boolean";
            readonly isActive: "boolean";
            readonly url: "string";
        };
        readonly extends: "Metadata";
    };
    readonly Report: {
        readonly type: "Report";
        readonly props: {
            readonly aggregates: readonly ["ReportAggregate"];
            readonly block: readonly ["Report"];
            readonly blockInfo: "?ReportBlockInfo";
            readonly buckets: readonly ["ReportBucketField"];
            readonly chart: "?ReportChart";
            readonly colorRanges: readonly ["ReportColorRange"];
            readonly columns: readonly ["ReportColumn"];
            readonly crossFilters: readonly ["ReportCrossFilter"];
            readonly currency: "?string";
            readonly customDetailFormulas: readonly ["ReportCustomDetailFormula"];
            readonly dataCategoryFilters: readonly ["ReportDataCategoryFilter"];
            readonly description: "?string";
            readonly division: "?string";
            readonly filter: "?ReportFilter";
            readonly folderName: "?string";
            readonly format: "string";
            readonly formattingRules: readonly ["ReportFormattingRule"];
            readonly groupingsAcross: readonly ["ReportGrouping"];
            readonly groupingsDown: readonly ["ReportGrouping"];
            readonly historicalSelector: "?ReportHistoricalSelector";
            readonly name: "string";
            readonly numSubscriptions: "?number";
            readonly params: readonly ["ReportParam"];
            readonly reportType: "string";
            readonly roleHierarchyFilter: "?string";
            readonly rowLimit: "?number";
            readonly scope: "?string";
            readonly showCurrentDate: "?boolean";
            readonly showDetails: "?boolean";
            readonly showGrandTotal: "?boolean";
            readonly showSubTotals: "?boolean";
            readonly sortColumn: "?string";
            readonly sortOrder: "?string";
            readonly territoryHierarchyFilter: "?string";
            readonly timeFrameFilter: "?ReportTimeFrameFilter";
            readonly userFilter: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly ReportAggregate: {
        readonly type: "ReportAggregate";
        readonly props: {
            readonly acrossGroupingContext: "?string";
            readonly calculatedFormula: "string";
            readonly datatype: "string";
            readonly description: "?string";
            readonly developerName: "string";
            readonly downGroupingContext: "?string";
            readonly isActive: "boolean";
            readonly isCrossBlock: "?boolean";
            readonly masterLabel: "string";
            readonly reportType: "?string";
            readonly scale: "?number";
        };
    };
    readonly ReportBlockInfo: {
        readonly type: "ReportBlockInfo";
        readonly props: {
            readonly aggregateReferences: readonly ["ReportAggregateReference"];
            readonly blockId: "string";
            readonly joinTable: "string";
        };
    };
    readonly ReportAggregateReference: {
        readonly type: "ReportAggregateReference";
        readonly props: {
            readonly aggregate: "string";
        };
    };
    readonly ReportBucketField: {
        readonly type: "ReportBucketField";
        readonly props: {
            readonly bucketType: "string";
            readonly developerName: "string";
            readonly masterLabel: "string";
            readonly nullTreatment: "?string";
            readonly otherBucketLabel: "?string";
            readonly sourceColumnName: "string";
            readonly useOther: "?boolean";
            readonly values: readonly ["ReportBucketFieldValue"];
        };
    };
    readonly ReportBucketFieldValue: {
        readonly type: "ReportBucketFieldValue";
        readonly props: {
            readonly sourceValues: readonly ["ReportBucketFieldSourceValue"];
            readonly value: "string";
        };
    };
    readonly ReportBucketFieldSourceValue: {
        readonly type: "ReportBucketFieldSourceValue";
        readonly props: {
            readonly from: "?string";
            readonly sourceValue: "?string";
            readonly to: "?string";
        };
    };
    readonly ReportChart: {
        readonly type: "ReportChart";
        readonly props: {
            readonly backgroundColor1: "?string";
            readonly backgroundColor2: "?string";
            readonly backgroundFadeDir: "?string";
            readonly chartSummaries: readonly ["ChartSummary"];
            readonly chartType: "string";
            readonly enableHoverLabels: "?boolean";
            readonly expandOthers: "?boolean";
            readonly groupingColumn: "?string";
            readonly legendPosition: "?string";
            readonly location: "?string";
            readonly secondaryGroupingColumn: "?string";
            readonly showAxisLabels: "?boolean";
            readonly showPercentage: "?boolean";
            readonly showTotal: "?boolean";
            readonly showValues: "?boolean";
            readonly size: "?string";
            readonly summaryAxisManualRangeEnd: "?number";
            readonly summaryAxisManualRangeStart: "?number";
            readonly summaryAxisRange: "?string";
            readonly textColor: "?string";
            readonly textSize: "?number";
            readonly title: "?string";
            readonly titleColor: "?string";
            readonly titleSize: "?number";
        };
    };
    readonly ReportColorRange: {
        readonly type: "ReportColorRange";
        readonly props: {
            readonly aggregate: "?string";
            readonly columnName: "string";
            readonly highBreakpoint: "?number";
            readonly highColor: "string";
            readonly lowBreakpoint: "?number";
            readonly lowColor: "string";
            readonly midColor: "string";
        };
    };
    readonly ReportColumn: {
        readonly type: "ReportColumn";
        readonly props: {
            readonly aggregateTypes: readonly ["string"];
            readonly field: "string";
            readonly reverseColors: "?boolean";
            readonly showChanges: "?boolean";
        };
    };
    readonly ReportCrossFilter: {
        readonly type: "ReportCrossFilter";
        readonly props: {
            readonly criteriaItems: readonly ["ReportFilterItem"];
            readonly operation: "string";
            readonly primaryTableColumn: "string";
            readonly relatedTable: "string";
            readonly relatedTableJoinColumn: "string";
        };
    };
    readonly ReportFilterItem: {
        readonly type: "ReportFilterItem";
        readonly props: {
            readonly column: "string";
            readonly columnToColumn: "?boolean";
            readonly isUnlocked: "?boolean";
            readonly operator: "string";
            readonly snapshot: "?string";
            readonly value: "?string";
        };
    };
    readonly ReportCustomDetailFormula: {
        readonly type: "ReportCustomDetailFormula";
        readonly props: {
            readonly calculatedFormula: "string";
            readonly dataType: "string";
            readonly description: "?string";
            readonly developerName: "string";
            readonly label: "string";
            readonly scale: "number";
        };
    };
    readonly ReportDataCategoryFilter: {
        readonly type: "ReportDataCategoryFilter";
        readonly props: {
            readonly dataCategory: "string";
            readonly dataCategoryGroup: "string";
            readonly operator: "string";
        };
    };
    readonly ReportFilter: {
        readonly type: "ReportFilter";
        readonly props: {
            readonly booleanFilter: "?string";
            readonly criteriaItems: readonly ["ReportFilterItem"];
            readonly language: "?string";
        };
    };
    readonly ReportFormattingRule: {
        readonly type: "ReportFormattingRule";
        readonly props: {
            readonly aggregate: "?string";
            readonly columnName: "string";
            readonly values: readonly ["ReportFormattingRuleValue"];
        };
    };
    readonly ReportFormattingRuleValue: {
        readonly type: "ReportFormattingRuleValue";
        readonly props: {
            readonly backgroundColor: "?string";
            readonly rangeUpperBound: "?number";
        };
    };
    readonly ReportGrouping: {
        readonly type: "ReportGrouping";
        readonly props: {
            readonly aggregateType: "?string";
            readonly dateGranularity: "?string";
            readonly field: "string";
            readonly sortByName: "?string";
            readonly sortOrder: "string";
            readonly sortType: "?string";
        };
    };
    readonly ReportHistoricalSelector: {
        readonly type: "ReportHistoricalSelector";
        readonly props: {
            readonly snapshot: readonly ["string"];
        };
    };
    readonly ReportParam: {
        readonly type: "ReportParam";
        readonly props: {
            readonly name: "string";
            readonly value: "string";
        };
    };
    readonly ReportTimeFrameFilter: {
        readonly type: "ReportTimeFrameFilter";
        readonly props: {
            readonly dateColumn: "string";
            readonly endDate: "?string";
            readonly interval: "string";
            readonly startDate: "?string";
        };
    };
    readonly ReportType: {
        readonly type: "ReportType";
        readonly props: {
            readonly autogenerated: "?boolean";
            readonly baseObject: "string";
            readonly category: "string";
            readonly deployed: "boolean";
            readonly description: "?string";
            readonly join: "?ObjectRelationship";
            readonly label: "string";
            readonly sections: readonly ["ReportLayoutSection"];
        };
        readonly extends: "Metadata";
    };
    readonly ObjectRelationship: {
        readonly type: "ObjectRelationship";
        readonly props: {
            readonly join: "?ObjectRelationship";
            readonly outerJoin: "boolean";
            readonly relationship: "string";
        };
    };
    readonly ReportLayoutSection: {
        readonly type: "ReportLayoutSection";
        readonly props: {
            readonly columns: readonly ["ReportTypeColumn"];
            readonly masterLabel: "string";
        };
    };
    readonly ReportTypeColumn: {
        readonly type: "ReportTypeColumn";
        readonly props: {
            readonly checkedByDefault: "boolean";
            readonly displayNameOverride: "?string";
            readonly field: "string";
            readonly table: "string";
        };
    };
    readonly RestrictionRule: {
        readonly type: "RestrictionRule";
        readonly props: {
            readonly active: "boolean";
            readonly description: "string";
            readonly enforcementType: "string";
            readonly masterLabel: "string";
            readonly recordFilter: "string";
            readonly targetEntity: "string";
            readonly userCriteria: "string";
            readonly version: "number";
        };
        readonly extends: "Metadata";
    };
    readonly RetailExecutionSettings: {
        readonly type: "RetailExecutionSettings";
        readonly props: {
            readonly enableRetailExecution: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly RoleOrTerritory: {
        readonly type: "RoleOrTerritory";
        readonly props: {
            readonly caseAccessLevel: "?string";
            readonly contactAccessLevel: "?string";
            readonly description: "?string";
            readonly mayForecastManagerShare: "?boolean";
            readonly name: "string";
            readonly opportunityAccessLevel: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly Role: {
        readonly type: "Role";
        readonly props: {
            readonly parentRole: "?string";
        };
        readonly extends: "RoleOrTerritory";
    };
    readonly Territory: {
        readonly type: "Territory";
        readonly props: {
            readonly accountAccessLevel: "?string";
            readonly parentTerritory: "?string";
        };
        readonly extends: "RoleOrTerritory";
    };
    readonly SamlSsoConfig: {
        readonly type: "SamlSsoConfig";
        readonly props: {
            readonly attributeName: "?string";
            readonly attributeNameIdFormat: "?string";
            readonly decryptionCertificate: "?string";
            readonly errorUrl: "?string";
            readonly executionUserId: "?string";
            readonly identityLocation: "string";
            readonly identityMapping: "string";
            readonly issuer: "string";
            readonly loginUrl: "?string";
            readonly logoutUrl: "?string";
            readonly name: "string";
            readonly oauthTokenEndpoint: "?string";
            readonly redirectBinding: "?boolean";
            readonly requestSignatureMethod: "?string";
            readonly requestSigningCertId: "?string";
            readonly salesforceLoginUrl: "?string";
            readonly samlEntityId: "string";
            readonly samlJitHandlerId: "?string";
            readonly samlVersion: "string";
            readonly singleLogoutBinding: "?string";
            readonly singleLogoutUrl: "?string";
            readonly userProvisioning: "?boolean";
            readonly validationCert: "string";
        };
        readonly extends: "Metadata";
    };
    readonly SchemaSettings: {
        readonly type: "SchemaSettings";
        readonly props: {
            readonly enableAdvancedCMTSecurity: "?boolean";
            readonly enableAdvancedCSSecurity: "?boolean";
            readonly enableListCustomSettingCreation: "?boolean";
            readonly enableSOSLOnCustomSettings: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly SearchSettings: {
        readonly type: "SearchSettings";
        readonly props: {
            readonly documentContentSearchEnabled: "boolean";
            readonly enableAdvancedSearchInAlohaSidebar: "?boolean";
            readonly enableEinsteinSearchPersonalization: "?boolean";
            readonly enableQuerySuggestionPigOn: "?boolean";
            readonly enableSalesforceGeneratedSynonyms: "?boolean";
            readonly enableSetupSearch: "?boolean";
            readonly optimizeSearchForCJKEnabled: "boolean";
            readonly recentlyViewedUsersForBlankLookupEnabled: "boolean";
            readonly searchSettingsByObject: "SearchSettingsByObject";
            readonly sidebarAutoCompleteEnabled: "boolean";
            readonly sidebarDropDownListEnabled: "boolean";
            readonly sidebarLimitToItemsIOwnCheckboxEnabled: "boolean";
            readonly singleSearchResultShortcutEnabled: "boolean";
            readonly spellCorrectKnowledgeSearchEnabled: "boolean";
        };
        readonly extends: "Metadata";
    };
    readonly SearchSettingsByObject: {
        readonly type: "SearchSettingsByObject";
        readonly props: {
            readonly searchSettingsByObject: readonly ["ObjectSearchSetting"];
        };
    };
    readonly ObjectSearchSetting: {
        readonly type: "ObjectSearchSetting";
        readonly props: {
            readonly enhancedLookupEnabled: "boolean";
            readonly lookupAutoCompleteEnabled: "boolean";
            readonly name: "string";
            readonly resultsPerPageCount: "number";
        };
    };
    readonly SecuritySettings: {
        readonly type: "SecuritySettings";
        readonly props: {
            readonly canUsersGrantLoginAccess: "?boolean";
            readonly enableAdminLoginAsAnyUser: "?boolean";
            readonly enableAuditFieldsInactiveOwner: "?boolean";
            readonly enableAuraSecureEvalPref: "?boolean";
            readonly enableRequireHttpsConnection: "?boolean";
            readonly isTLSv12Required: "?boolean";
            readonly isTLSv12RequiredCommunities: "?boolean";
            readonly networkAccess: "?NetworkAccess";
            readonly passwordPolicies: "?PasswordPolicies";
            readonly sessionSettings: "?SessionSettings";
            readonly singleSignOnSettings: "?SingleSignOnSettings";
        };
        readonly extends: "Metadata";
    };
    readonly NetworkAccess: {
        readonly type: "NetworkAccess";
        readonly props: {
            readonly ipRanges: readonly ["IpRange"];
        };
    };
    readonly IpRange: {
        readonly type: "IpRange";
        readonly props: {
            readonly description: "?string";
            readonly end: "?string";
            readonly start: "?string";
        };
    };
    readonly PasswordPolicies: {
        readonly type: "PasswordPolicies";
        readonly props: {
            readonly apiOnlyUserHomePageURL: "?string";
            readonly complexity: "?string";
            readonly enableSetPasswordInApi: "?boolean";
            readonly expiration: "?string";
            readonly historyRestriction: "?string";
            readonly lockoutInterval: "?string";
            readonly maxLoginAttempts: "?string";
            readonly minimumPasswordLength: "?string";
            readonly minimumPasswordLifetime: "?boolean";
            readonly obscureSecretAnswer: "?boolean";
            readonly passwordAssistanceMessage: "?string";
            readonly passwordAssistanceURL: "?string";
            readonly questionRestriction: "?string";
        };
    };
    readonly SessionSettings: {
        readonly type: "SessionSettings";
        readonly props: {
            readonly allowUserAuthenticationByCertificate: "?boolean";
            readonly canConfirmEmailChangeInLightningCommunities: "?boolean";
            readonly disableTimeoutWarning: "?boolean";
            readonly enableCSPOnEmail: "?boolean";
            readonly enableCSRFOnGet: "?boolean";
            readonly enableCSRFOnPost: "?boolean";
            readonly enableCacheAndAutocomplete: "?boolean";
            readonly enableClickjackNonsetupSFDC: "?boolean";
            readonly enableClickjackNonsetupUser: "?boolean";
            readonly enableClickjackNonsetupUserHeaderless: "?boolean";
            readonly enableClickjackSetup: "?boolean";
            readonly enableContentSniffingProtection: "?boolean";
            readonly enableLightningLogin: "?boolean";
            readonly enableLightningLoginOnlyWithUserPerm: "?boolean";
            readonly enablePostForSessions: "?boolean";
            readonly enableSMSIdentity: "?boolean";
            readonly enableU2F: "?boolean";
            readonly enableUpgradeInsecureRequests: "?boolean";
            readonly enableXssProtection: "?boolean";
            readonly enforceIpRangesEveryRequest: "?boolean";
            readonly forceLogoutOnSessionTimeout: "?boolean";
            readonly forceRelogin: "?boolean";
            readonly hasRetainedLoginHints: "?boolean";
            readonly hasUserSwitching: "?boolean";
            readonly hstsOnForcecomSites: "?boolean";
            readonly identityConfirmationOnEmailChange: "?boolean";
            readonly identityConfirmationOnTwoFactorRegistrationEnabled: "?boolean";
            readonly lockSessionsToDomain: "?boolean";
            readonly lockSessionsToIp: "?boolean";
            readonly lockerServiceAPIVersion: "?string";
            readonly lockerServiceCSP: "?boolean";
            readonly lockerServiceFrozenRealm: "?boolean";
            readonly logoutURL: "?string";
            readonly redirectionWarning: "?boolean";
            readonly referrerPolicy: "?boolean";
            readonly requireHttpOnly: "?boolean";
            readonly requireHttps: "?boolean";
            readonly securityCentralKillSession: "?boolean";
            readonly sessionTimeout: "?string";
        };
    };
    readonly SingleSignOnSettings: {
        readonly type: "SingleSignOnSettings";
        readonly props: {
            readonly enableForceDelegatedCallout: "?boolean";
            readonly enableMultipleSamlConfigs: "?boolean";
            readonly enableSamlJitProvisioning: "?boolean";
            readonly enableSamlLogin: "?boolean";
        };
    };
    readonly ServiceChannel: {
        readonly type: "ServiceChannel";
        readonly props: {
            readonly interactionComponent: "?string";
            readonly label: "string";
            readonly relatedEntityType: "string";
            readonly secondaryRoutingPriorityField: "?string";
            readonly serviceChannelFieldPriorities: readonly ["ServiceChannelFieldPriority"];
        };
        readonly extends: "Metadata";
    };
    readonly ServiceChannelFieldPriority: {
        readonly type: "ServiceChannelFieldPriority";
        readonly props: {
            readonly priority: "number";
            readonly value: "string";
        };
    };
    readonly ServicePresenceStatus: {
        readonly type: "ServicePresenceStatus";
        readonly props: {
            readonly channels: "?ServiceChannelStatus";
            readonly label: "string";
        };
        readonly extends: "Metadata";
    };
    readonly ServiceChannelStatus: {
        readonly type: "ServiceChannelStatus";
        readonly props: {
            readonly channel: readonly ["string"];
        };
    };
    readonly SharingBaseRule: {
        readonly type: "SharingBaseRule";
        readonly props: {
            readonly accessLevel: "string";
            readonly accountSettings: "?AccountSharingRuleSettings";
            readonly description: "?string";
            readonly label: "string";
            readonly sharedTo: "SharedTo";
        };
        readonly extends: "Metadata";
    };
    readonly AccountSharingRuleSettings: {
        readonly type: "AccountSharingRuleSettings";
        readonly props: {
            readonly caseAccessLevel: "string";
            readonly contactAccessLevel: "string";
            readonly opportunityAccessLevel: "string";
        };
    };
    readonly SharingCriteriaRule: {
        readonly type: "SharingCriteriaRule";
        readonly props: {
            readonly booleanFilter: "?string";
            readonly criteriaItems: readonly ["FilterItem"];
        };
        readonly extends: "SharingBaseRule";
    };
    readonly SharingGuestRule: {
        readonly type: "SharingGuestRule";
        readonly props: {
            readonly booleanFilter: "?string";
            readonly criteriaItems: readonly ["FilterItem"];
        };
        readonly extends: "SharingBaseRule";
    };
    readonly SharingOwnerRule: {
        readonly type: "SharingOwnerRule";
        readonly props: {
            readonly sharedFrom: "SharedTo";
        };
        readonly extends: "SharingBaseRule";
    };
    readonly SharingTerritoryRule: {
        readonly type: "SharingTerritoryRule";
        readonly props: {};
        readonly extends: "SharingOwnerRule";
    };
    readonly SharingRules: {
        readonly type: "SharingRules";
        readonly props: {
            readonly sharingCriteriaRules: readonly ["SharingCriteriaRule"];
            readonly sharingGuestRules: readonly ["SharingGuestRule"];
            readonly sharingOwnerRules: readonly ["SharingOwnerRule"];
            readonly sharingTerritoryRules: readonly ["SharingTerritoryRule"];
        };
        readonly extends: "Metadata";
    };
    readonly SharingSet: {
        readonly type: "SharingSet";
        readonly props: {
            readonly accessMappings: readonly ["AccessMapping"];
            readonly description: "?string";
            readonly name: "string";
            readonly profiles: readonly ["string"];
        };
        readonly extends: "Metadata";
    };
    readonly AccessMapping: {
        readonly type: "AccessMapping";
        readonly props: {
            readonly accessLevel: "string";
            readonly object: "string";
            readonly objectField: "string";
            readonly userField: "string";
        };
    };
    readonly SharingSettings: {
        readonly type: "SharingSettings";
        readonly props: {
            readonly enableAccountRoleOptimization: "?boolean";
            readonly enableAssetSharing: "?boolean";
            readonly enableCommunityUserVisibility: "?boolean";
            readonly enableExternalSharingModel: "?boolean";
            readonly enableManagerGroups: "?boolean";
            readonly enableManualUserRecordSharing: "?boolean";
            readonly enablePartnerSuperUserAccess: "?boolean";
            readonly enablePortalUserCaseSharing: "?boolean";
            readonly enablePortalUserVisibility: "?boolean";
            readonly enableRemoveTMGroupMembership: "?boolean";
            readonly enableSecureGuestAccess: "?boolean";
            readonly enableStandardReportVisibility: "?boolean";
            readonly enableTerritoryForecastManager: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly SiteSettings: {
        readonly type: "SiteSettings";
        readonly props: {
            readonly enableProxyLoginICHeader: "?boolean";
            readonly enableTopicsInSites: "?boolean";
            readonly enableVisualforceApiAccessAllowed: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly Skill: {
        readonly type: "Skill";
        readonly props: {
            readonly assignments: "?SkillAssignments";
            readonly description: "?string";
            readonly label: "string";
        };
        readonly extends: "Metadata";
    };
    readonly SkillAssignments: {
        readonly type: "SkillAssignments";
        readonly props: {
            readonly profiles: "?SkillProfileAssignments";
            readonly users: "?SkillUserAssignments";
        };
    };
    readonly SkillProfileAssignments: {
        readonly type: "SkillProfileAssignments";
        readonly props: {
            readonly profile: readonly ["string"];
        };
    };
    readonly SkillUserAssignments: {
        readonly type: "SkillUserAssignments";
        readonly props: {
            readonly user: readonly ["string"];
        };
    };
    readonly SocialCustomerServiceSettings: {
        readonly type: "SocialCustomerServiceSettings";
        readonly props: {
            readonly caseSubjectOption: "string";
            readonly enableSocialApprovals: "?boolean";
            readonly enableSocialCaseAssignmentRules: "?boolean";
            readonly enableSocialCustomerService: "?boolean";
            readonly enableSocialPersonaHistoryTracking: "?boolean";
            readonly enableSocialPostHistoryTracking: "?boolean";
            readonly enableSocialReceiveParentPost: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly SocialProfileSettings: {
        readonly type: "SocialProfileSettings";
        readonly props: {
            readonly enableSocialProfiles: "?boolean";
            readonly isFacebookSocialProfilesDisabled: "?boolean";
            readonly isLinkedInSocialProfilesDisabled: "?boolean";
            readonly isTwitterSocialProfilesDisabled: "?boolean";
            readonly isYouTubeSocialProfilesDisabled: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly StandardValueSet: {
        readonly type: "StandardValueSet";
        readonly props: {
            readonly groupingStringEnum: "?string";
            readonly sorted: "boolean";
            readonly standardValue: readonly ["StandardValue"];
        };
        readonly extends: "Metadata";
    };
    readonly StandardValueSetTranslation: {
        readonly type: "StandardValueSetTranslation";
        readonly props: {
            readonly valueTranslation: readonly ["ValueTranslation"];
        };
        readonly extends: "Metadata";
    };
    readonly SurveySettings: {
        readonly type: "SurveySettings";
        readonly props: {
            readonly enableSurvey: "?boolean";
            readonly enableSurveyOwnerCanManageResponse: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly SynonymDictionary: {
        readonly type: "SynonymDictionary";
        readonly props: {
            readonly groups: readonly ["SynonymGroup"];
            readonly isProtected: "?boolean";
            readonly label: "string";
        };
        readonly extends: "Metadata";
    };
    readonly SystemNotificationSettings: {
        readonly type: "SystemNotificationSettings";
        readonly props: {
            readonly disableDowntimeNotifications: "?boolean";
            readonly disableMaintenanceNotifications: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly Territory2: {
        readonly type: "Territory2";
        readonly props: {
            readonly accountAccessLevel: "?string";
            readonly caseAccessLevel: "?string";
            readonly contactAccessLevel: "?string";
            readonly customFields: readonly ["FieldValue"];
            readonly description: "?string";
            readonly name: "string";
            readonly opportunityAccessLevel: "?string";
            readonly parentTerritory: "?string";
            readonly ruleAssociations: readonly ["Territory2RuleAssociation"];
            readonly territory2Type: "string";
        };
        readonly extends: "Metadata";
    };
    readonly FieldValue: {
        readonly type: "FieldValue";
        readonly props: {
            readonly name: "string";
            readonly value: "?any";
        };
    };
    readonly Territory2RuleAssociation: {
        readonly type: "Territory2RuleAssociation";
        readonly props: {
            readonly inherited: "boolean";
            readonly ruleName: "string";
        };
    };
    readonly Territory2Model: {
        readonly type: "Territory2Model";
        readonly props: {
            readonly customFields: readonly ["FieldValue"];
            readonly description: "?string";
            readonly name: "string";
        };
        readonly extends: "Metadata";
    };
    readonly Territory2Rule: {
        readonly type: "Territory2Rule";
        readonly props: {
            readonly active: "boolean";
            readonly booleanFilter: "?string";
            readonly name: "string";
            readonly objectType: "string";
            readonly ruleItems: readonly ["Territory2RuleItem"];
        };
        readonly extends: "Metadata";
    };
    readonly Territory2RuleItem: {
        readonly type: "Territory2RuleItem";
        readonly props: {
            readonly field: "string";
            readonly operation: "string";
            readonly value: "?string";
        };
    };
    readonly Territory2Settings: {
        readonly type: "Territory2Settings";
        readonly props: {
            readonly defaultAccountAccessLevel: "?string";
            readonly defaultCaseAccessLevel: "?string";
            readonly defaultContactAccessLevel: "?string";
            readonly defaultOpportunityAccessLevel: "?string";
            readonly enableTerritoryManagement2: "?boolean";
            readonly opportunityFilterSettings: "?Territory2SettingsOpportunityFilter";
        };
        readonly extends: "Metadata";
    };
    readonly Territory2SettingsOpportunityFilter: {
        readonly type: "Territory2SettingsOpportunityFilter";
        readonly props: {
            readonly apexClassName: "?string";
            readonly enableFilter: "boolean";
            readonly runOnCreate: "boolean";
        };
    };
    readonly Territory2Type: {
        readonly type: "Territory2Type";
        readonly props: {
            readonly description: "?string";
            readonly name: "string";
            readonly priority: "number";
        };
        readonly extends: "Metadata";
    };
    readonly TimeSheetTemplate: {
        readonly type: "TimeSheetTemplate";
        readonly props: {
            readonly active: "boolean";
            readonly description: "?string";
            readonly frequency: "string";
            readonly masterLabel: "string";
            readonly startDate: "string";
            readonly timeSheetTemplateAssignments: readonly ["TimeSheetTemplateAssignment"];
            readonly workWeekEndDay: "string";
            readonly workWeekStartDay: "string";
        };
        readonly extends: "Metadata";
    };
    readonly TimeSheetTemplateAssignment: {
        readonly type: "TimeSheetTemplateAssignment";
        readonly props: {
            readonly assignedTo: "?string";
        };
    };
    readonly TopicsForObjects: {
        readonly type: "TopicsForObjects";
        readonly props: {
            readonly enableTopics: "boolean";
            readonly entityApiName: "string";
        };
        readonly extends: "Metadata";
    };
    readonly TrailheadSettings: {
        readonly type: "TrailheadSettings";
        readonly props: {
            readonly enableMyTrailheadPref: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly TransactionSecurityPolicy: {
        readonly type: "TransactionSecurityPolicy";
        readonly props: {
            readonly action: "TransactionSecurityAction";
            readonly active: "boolean";
            readonly apexClass: "?string";
            readonly description: "?string";
            readonly developerName: "?string";
            readonly eventName: "?string";
            readonly eventType: "?string";
            readonly executionUser: "?string";
            readonly flow: "?string";
            readonly masterLabel: "?string";
            readonly resourceName: "?string";
            readonly type: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly TransactionSecurityAction: {
        readonly type: "TransactionSecurityAction";
        readonly props: {
            readonly block: "boolean";
            readonly endSession: "boolean";
            readonly freezeUser: "boolean";
            readonly notifications: readonly ["TransactionSecurityNotification"];
            readonly twoFactorAuthentication: "boolean";
        };
    };
    readonly TransactionSecurityNotification: {
        readonly type: "TransactionSecurityNotification";
        readonly props: {
            readonly inApp: "boolean";
            readonly sendEmail: "boolean";
            readonly user: "string";
        };
    };
    readonly Translations: {
        readonly type: "Translations";
        readonly props: {
            readonly customApplications: readonly ["CustomApplicationTranslation"];
            readonly customDataTypeTranslations: readonly ["CustomDataTypeTranslation"];
            readonly customLabels: readonly ["CustomLabelTranslation"];
            readonly customPageWebLinks: readonly ["CustomPageWebLinkTranslation"];
            readonly customTabs: readonly ["CustomTabTranslation"];
            readonly flowDefinitions: readonly ["FlowDefinitionTranslation"];
            readonly quickActions: readonly ["GlobalQuickActionTranslation"];
            readonly reportTypes: readonly ["ReportTypeTranslation"];
            readonly scontrols: readonly ["ScontrolTranslation"];
        };
        readonly extends: "Metadata";
    };
    readonly CustomApplicationTranslation: {
        readonly type: "CustomApplicationTranslation";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly CustomDataTypeTranslation: {
        readonly type: "CustomDataTypeTranslation";
        readonly props: {
            readonly components: readonly ["CustomDataTypeComponentTranslation"];
            readonly customDataTypeName: "string";
            readonly description: "?string";
            readonly label: "?string";
        };
    };
    readonly CustomDataTypeComponentTranslation: {
        readonly type: "CustomDataTypeComponentTranslation";
        readonly props: {
            readonly developerSuffix: "string";
            readonly label: "?string";
        };
    };
    readonly CustomLabelTranslation: {
        readonly type: "CustomLabelTranslation";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly CustomPageWebLinkTranslation: {
        readonly type: "CustomPageWebLinkTranslation";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly CustomTabTranslation: {
        readonly type: "CustomTabTranslation";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly FlowDefinitionTranslation: {
        readonly type: "FlowDefinitionTranslation";
        readonly props: {
            readonly flows: readonly ["FlowTranslation"];
            readonly fullName: "string";
            readonly label: "?string";
        };
    };
    readonly FlowTranslation: {
        readonly type: "FlowTranslation";
        readonly props: {
            readonly choices: readonly ["FlowChoiceTranslation"];
            readonly fullName: "string";
            readonly label: "?string";
            readonly screens: readonly ["FlowScreenTranslation"];
            readonly stages: readonly ["FlowStageTranslation"];
            readonly textTemplates: readonly ["FlowTextTemplateTranslation"];
        };
    };
    readonly FlowChoiceTranslation: {
        readonly type: "FlowChoiceTranslation";
        readonly props: {
            readonly choiceText: "?string";
            readonly name: "string";
            readonly userInput: "?FlowChoiceUserInputTranslation";
        };
    };
    readonly FlowChoiceUserInputTranslation: {
        readonly type: "FlowChoiceUserInputTranslation";
        readonly props: {
            readonly promptText: "?string";
            readonly validationRule: "?FlowInputValidationRuleTranslation";
        };
    };
    readonly FlowInputValidationRuleTranslation: {
        readonly type: "FlowInputValidationRuleTranslation";
        readonly props: {
            readonly errorMessage: "?string";
        };
    };
    readonly FlowScreenTranslation: {
        readonly type: "FlowScreenTranslation";
        readonly props: {
            readonly fields: readonly ["FlowScreenFieldTranslation"];
            readonly helpText: "?string";
            readonly name: "string";
            readonly pausedText: "?string";
        };
    };
    readonly FlowScreenFieldTranslation: {
        readonly type: "FlowScreenFieldTranslation";
        readonly props: {
            readonly fieldText: "?string";
            readonly helpText: "?string";
            readonly name: "string";
            readonly validationRule: "?FlowInputValidationRuleTranslation";
        };
    };
    readonly FlowStageTranslation: {
        readonly type: "FlowStageTranslation";
        readonly props: {
            readonly label: "?string";
            readonly name: "string";
        };
    };
    readonly FlowTextTemplateTranslation: {
        readonly type: "FlowTextTemplateTranslation";
        readonly props: {
            readonly name: "string";
            readonly text: "?string";
        };
    };
    readonly GlobalQuickActionTranslation: {
        readonly type: "GlobalQuickActionTranslation";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly ReportTypeTranslation: {
        readonly type: "ReportTypeTranslation";
        readonly props: {
            readonly description: "?string";
            readonly label: "?string";
            readonly name: "string";
            readonly sections: readonly ["ReportTypeSectionTranslation"];
        };
    };
    readonly ReportTypeSectionTranslation: {
        readonly type: "ReportTypeSectionTranslation";
        readonly props: {
            readonly columns: readonly ["ReportTypeColumnTranslation"];
            readonly label: "?string";
            readonly name: "string";
        };
    };
    readonly ReportTypeColumnTranslation: {
        readonly type: "ReportTypeColumnTranslation";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly ScontrolTranslation: {
        readonly type: "ScontrolTranslation";
        readonly props: {
            readonly label: "string";
            readonly name: "string";
        };
    };
    readonly UIObjectRelationConfig: {
        readonly type: "UIObjectRelationConfig";
        readonly props: {
            readonly UIObjectRelationFieldConfigs: readonly ["UIObjectRelationFieldConfig"];
            readonly contextObject: "string";
            readonly contextObjectRecordType: "?string";
            readonly directRelationshipField: "?string";
            readonly indirectObjectContextField: "?string";
            readonly indirectObjectRelatedField: "?string";
            readonly indirectRelationshipObject: "?string";
            readonly isActive: "boolean";
            readonly masterLabel: "string";
            readonly relatedObject: "string";
            readonly relatedObjectRecordType: "?string";
            readonly relationshipType: "string";
        };
        readonly extends: "Metadata";
    };
    readonly UIObjectRelationFieldConfig: {
        readonly type: "UIObjectRelationFieldConfig";
        readonly props: {
            readonly displayLabel: "string";
            readonly queryText: "string";
            readonly rowOrder: "number";
        };
    };
    readonly UserCriteria: {
        readonly type: "UserCriteria";
        readonly props: {
            readonly creationAgeInSeconds: "?number";
            readonly description: "?string";
            readonly lastChatterActivityAgeInSeconds: "?number";
            readonly masterLabel: "string";
            readonly profiles: readonly ["string"];
            readonly userTypes: readonly ["string"];
        };
        readonly extends: "Metadata";
    };
    readonly UserEngagementSettings: {
        readonly type: "UserEngagementSettings";
        readonly props: {
            readonly canGovCloudUseAdoptionApps: "?boolean";
            readonly doesScheduledSwitcherRunDaily: "?boolean";
            readonly enableCustomHelpGlobalSection: "?boolean";
            readonly enableHelpMenuShowFeedback: "?boolean";
            readonly enableHelpMenuShowHelp: "?boolean";
            readonly enableHelpMenuShowNewUser: "?boolean";
            readonly enableHelpMenuShowSearch: "?boolean";
            readonly enableHelpMenuShowSfdcContent: "?boolean";
            readonly enableHelpMenuShowShortcut: "?boolean";
            readonly enableHelpMenuShowSupport: "?boolean";
            readonly enableHelpMenuShowTrailhead: "?boolean";
            readonly enableIBILOptOutDashboards: "?boolean";
            readonly enableIBILOptOutEvents: "?boolean";
            readonly enableIBILOptOutReports: "?boolean";
            readonly enableIBILOptOutTasks: "?boolean";
            readonly enableLexToClassicFeedbackEnable: "?boolean";
            readonly enableOrchestrationInSandbox: "?boolean";
            readonly enableOrgUserAssistEnabled: "?boolean";
            readonly enableScheduledSwitcher: "?boolean";
            readonly enableSfdcProductFeedbackSurvey: "?boolean";
            readonly enableShowSalesforceUserAssist: "?boolean";
            readonly isAutoTransitionDelayed: "?boolean";
            readonly isCrucNotificationDisabled: "?boolean";
            readonly isCustomProfileAutoTransitionDelayed: "?boolean";
            readonly isLEXWelcomeMatDisabled: "?boolean";
            readonly isMeetTheAssistantDisabledInClassic: "?boolean";
            readonly isMeetTheAssistantDisabledInLightning: "?boolean";
            readonly optimizerAppEnabled: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly UserInterfaceSettings: {
        readonly type: "UserInterfaceSettings";
        readonly props: {
            readonly alternateAlohaListView: "?boolean";
            readonly enableAsyncRelatedLists: "?boolean";
            readonly enableClickjackUserPageHeaderless: "?boolean";
            readonly enableCollapsibleSections: "?boolean";
            readonly enableCollapsibleSideBar: "?boolean";
            readonly enableCustomObjectTruncate: "?boolean";
            readonly enableCustomeSideBarOnAllPages: "?boolean";
            readonly enableDeleteFieldHistory: "?boolean";
            readonly enableHoverDetails: "?boolean";
            readonly enableInlineEdit: "?boolean";
            readonly enableNewPageLayoutEditor: "?boolean";
            readonly enablePersonalCanvas: "?boolean";
            readonly enablePrintableListViews: "?boolean";
            readonly enableProfileCustomTabsets: "?boolean";
            readonly enableQuickCreate: "?boolean";
            readonly enableTabOrganizer: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly UserManagementSettings: {
        readonly type: "UserManagementSettings";
        readonly props: {
            readonly enableCanAnswerContainUsername: "?boolean";
            readonly enableCanSaveUserPerm: "?boolean";
            readonly enableConcealPersonalInfo: "?boolean";
            readonly enableContactlessExternalIdentityUsers: "?boolean";
            readonly enableEnhancedPermsetMgmt: "?boolean";
            readonly enableEnhancedProfileMgmt: "?boolean";
            readonly enableNewProfileUI: "?boolean";
            readonly enableScrambleUserData: "?boolean";
            readonly enableUserSelfDeactivate: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly VoiceSettings: {
        readonly type: "VoiceSettings";
        readonly props: {
            readonly enableCallDisposition: "?boolean";
            readonly enableVoiceCallList: "?boolean";
            readonly enableVoiceCallRecording: "?boolean";
            readonly enableVoiceCoaching: "?boolean";
            readonly enableVoiceConferencing: "?boolean";
            readonly enableVoiceLocalPresence: "?boolean";
            readonly enableVoiceMail: "?boolean";
            readonly enableVoiceMailDrop: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly WaveApplication: {
        readonly type: "WaveApplication";
        readonly props: {
            readonly assetIcon: "?string";
            readonly description: "?string";
            readonly folder: "string";
            readonly masterLabel: "string";
            readonly shares: readonly ["FolderShare"];
            readonly templateOrigin: "?string";
            readonly templateVersion: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly WaveDataset: {
        readonly type: "WaveDataset";
        readonly props: {
            readonly application: "string";
            readonly description: "?string";
            readonly masterLabel: "string";
            readonly templateAssetSourceName: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly WaveTemplateBundle: {
        readonly type: "WaveTemplateBundle";
        readonly props: {
            readonly assetIcon: "?string";
            readonly assetVersion: "?number";
            readonly description: "?string";
            readonly label: "string";
            readonly templateType: "string";
        };
        readonly extends: "Metadata";
    };
    readonly WaveXmd: {
        readonly type: "WaveXmd";
        readonly props: {
            readonly application: "?string";
            readonly dataset: "string";
            readonly datasetConnector: "?string";
            readonly datasetFullyQualifiedName: "?string";
            readonly dates: readonly ["WaveXmdDate"];
            readonly dimensions: readonly ["WaveXmdDimension"];
            readonly measures: readonly ["WaveXmdMeasure"];
            readonly organizations: readonly ["WaveXmdOrganization"];
            readonly origin: "?string";
            readonly type: "?string";
            readonly waveVisualization: "?string";
        };
        readonly extends: "Metadata";
    };
    readonly WaveXmdDate: {
        readonly type: "WaveXmdDate";
        readonly props: {
            readonly alias: "string";
            readonly compact: "?boolean";
            readonly dateFieldDay: "?string";
            readonly dateFieldEpochDay: "?string";
            readonly dateFieldEpochSecond: "?string";
            readonly dateFieldFiscalMonth: "?string";
            readonly dateFieldFiscalQuarter: "?string";
            readonly dateFieldFiscalWeek: "?string";
            readonly dateFieldFiscalYear: "?string";
            readonly dateFieldFullYear: "?string";
            readonly dateFieldHour: "?string";
            readonly dateFieldMinute: "?string";
            readonly dateFieldMonth: "?string";
            readonly dateFieldQuarter: "?string";
            readonly dateFieldSecond: "?string";
            readonly dateFieldWeek: "?string";
            readonly dateFieldYear: "?string";
            readonly description: "?string";
            readonly firstDayOfWeek: "number";
            readonly fiscalMonthOffset: "number";
            readonly isYearEndFiscalYear: "?boolean";
            readonly label: "?string";
            readonly showInExplorer: "?boolean";
            readonly sortIndex: "number";
            readonly type: "string";
        };
    };
    readonly WaveXmdDimension: {
        readonly type: "WaveXmdDimension";
        readonly props: {
            readonly conditionalFormatting: readonly ["WaveXmdFormattingProperty"];
            readonly customActions: readonly ["WaveXmdDimensionCustomAction"];
            readonly customActionsEnabled: "?boolean";
            readonly dateFormat: "?string";
            readonly description: "?string";
            readonly field: "string";
            readonly fullyQualifiedName: "?string";
            readonly imageTemplate: "?string";
            readonly isDerived: "boolean";
            readonly isMultiValue: "?boolean";
            readonly label: "?string";
            readonly linkTemplate: "?string";
            readonly linkTemplateEnabled: "?boolean";
            readonly linkTooltip: "?string";
            readonly members: readonly ["WaveXmdDimensionMember"];
            readonly origin: "?string";
            readonly recordDisplayFields: readonly ["WaveXmdRecordDisplayLookup"];
            readonly recordIdField: "?string";
            readonly recordOrganizationIdField: "?string";
            readonly salesforceActions: readonly ["WaveXmdDimensionSalesforceAction"];
            readonly salesforceActionsEnabled: "?boolean";
            readonly showDetailsDefaultFieldIndex: "?number";
            readonly showInExplorer: "?boolean";
            readonly sortIndex: "number";
        };
    };
    readonly WaveXmdFormattingProperty: {
        readonly type: "WaveXmdFormattingProperty";
        readonly props: {
            readonly formattingBins: readonly ["WaveXmdFormattingBin"];
            readonly formattingPredicates: readonly ["WaveXmdFormattingPredicate"];
            readonly property: "string";
            readonly referenceField: "string";
            readonly sortIndex: "number";
            readonly type: "string";
        };
    };
    readonly WaveXmdFormattingBin: {
        readonly type: "WaveXmdFormattingBin";
        readonly props: {
            readonly bin: "string";
            readonly formatValue: "string";
            readonly label: "string";
            readonly sortIndex: "number";
        };
    };
    readonly WaveXmdFormattingPredicate: {
        readonly type: "WaveXmdFormattingPredicate";
        readonly props: {
            readonly formatValue: "string";
            readonly operator: "string";
            readonly sortIndex: "number";
            readonly value: "string";
        };
    };
    readonly WaveXmdDimensionCustomAction: {
        readonly type: "WaveXmdDimensionCustomAction";
        readonly props: {
            readonly customActionName: "string";
            readonly enabled: "boolean";
            readonly icon: "?string";
            readonly method: "?string";
            readonly sortIndex: "number";
            readonly target: "?string";
            readonly tooltip: "?string";
            readonly url: "?string";
        };
    };
    readonly WaveXmdDimensionMember: {
        readonly type: "WaveXmdDimensionMember";
        readonly props: {
            readonly color: "?string";
            readonly label: "?string";
            readonly member: "string";
            readonly sortIndex: "number";
        };
    };
    readonly WaveXmdRecordDisplayLookup: {
        readonly type: "WaveXmdRecordDisplayLookup";
        readonly props: {
            readonly recordDisplayField: "string";
        };
    };
    readonly WaveXmdDimensionSalesforceAction: {
        readonly type: "WaveXmdDimensionSalesforceAction";
        readonly props: {
            readonly enabled: "boolean";
            readonly salesforceActionName: "string";
            readonly sortIndex: "number";
        };
    };
    readonly WaveXmdMeasure: {
        readonly type: "WaveXmdMeasure";
        readonly props: {
            readonly conditionalFormatting: readonly ["WaveXmdFormattingProperty"];
            readonly dateFormat: "?string";
            readonly description: "?string";
            readonly field: "string";
            readonly formatCustomFormat: "?string";
            readonly formatDecimalDigits: "?number";
            readonly formatIsNegativeParens: "?boolean";
            readonly formatPrefix: "?string";
            readonly formatSuffix: "?string";
            readonly formatUnit: "?string";
            readonly formatUnitMultiplier: "?number";
            readonly fullyQualifiedName: "?string";
            readonly isDerived: "boolean";
            readonly label: "?string";
            readonly origin: "?string";
            readonly showDetailsDefaultFieldIndex: "?number";
            readonly showInExplorer: "?boolean";
            readonly sortIndex: "number";
        };
    };
    readonly WaveXmdOrganization: {
        readonly type: "WaveXmdOrganization";
        readonly props: {
            readonly instanceUrl: "string";
            readonly label: "string";
            readonly organizationIdentifier: "string";
            readonly sortIndex: "number";
        };
    };
    readonly WorkDotComSettings: {
        readonly type: "WorkDotComSettings";
        readonly props: {
            readonly enableCoachingManagerGroupAccess: "?boolean";
            readonly enableGoalManagerGroupAccess: "?boolean";
            readonly enableProfileSkills: "?boolean";
            readonly enableProfileSkillsAddFeedPost: "?boolean";
            readonly enableProfileSkillsAutoSuggest: "?boolean";
            readonly enableProfileSkillsUsePlatform: "?boolean";
            readonly enableWorkBadgeDefRestrictPref: "?boolean";
            readonly enableWorkCalibration: "?boolean";
            readonly enableWorkCanvasPref: "?boolean";
            readonly enableWorkCertification: "?boolean";
            readonly enableWorkCertificationNotification: "?boolean";
            readonly enableWorkRewardsPref: "?boolean";
            readonly enableWorkThanksPref: "?boolean";
            readonly enableWorkUseObjectivesForGoals: "?boolean";
        };
        readonly extends: "Metadata";
    };
    readonly Workflow: {
        readonly type: "Workflow";
        readonly props: {
            readonly alerts: readonly ["WorkflowAlert"];
            readonly fieldUpdates: readonly ["WorkflowFieldUpdate"];
            readonly flowActions: readonly ["WorkflowFlowAction"];
            readonly knowledgePublishes: readonly ["WorkflowKnowledgePublish"];
            readonly outboundMessages: readonly ["WorkflowOutboundMessage"];
            readonly rules: readonly ["WorkflowRule"];
            readonly send: readonly ["WorkflowSend"];
            readonly tasks: readonly ["WorkflowTask"];
        };
        readonly extends: "Metadata";
    };
    readonly WorkflowAlert: {
        readonly type: "WorkflowAlert";
        readonly props: {
            readonly ccEmails: readonly ["string"];
            readonly description: "string";
            readonly protected: "boolean";
            readonly recipients: readonly ["WorkflowEmailRecipient"];
            readonly senderAddress: "?string";
            readonly senderType: "?string";
            readonly template: "string";
        };
        readonly extends: "WorkflowAction";
    };
    readonly WorkflowAction: {
        readonly type: "WorkflowAction";
        readonly props: {};
        readonly extends: "Metadata";
    };
    readonly WorkflowFieldUpdate: {
        readonly type: "WorkflowFieldUpdate";
        readonly props: {
            readonly description: "?string";
            readonly field: "string";
            readonly formula: "?string";
            readonly literalValue: "?string";
            readonly lookupValue: "?string";
            readonly lookupValueType: "?string";
            readonly name: "string";
            readonly notifyAssignee: "boolean";
            readonly operation: "string";
            readonly protected: "boolean";
            readonly reevaluateOnChange: "?boolean";
            readonly targetObject: "?string";
        };
        readonly extends: "WorkflowAction";
    };
    readonly WorkflowFlowAction: {
        readonly type: "WorkflowFlowAction";
        readonly props: {
            readonly description: "?string";
            readonly flow: "string";
            readonly flowInputs: readonly ["WorkflowFlowActionParameter"];
            readonly label: "string";
            readonly language: "?string";
            readonly protected: "boolean";
        };
        readonly extends: "WorkflowAction";
    };
    readonly WorkflowFlowActionParameter: {
        readonly type: "WorkflowFlowActionParameter";
        readonly props: {
            readonly name: "string";
            readonly value: "?string";
        };
    };
    readonly WorkflowKnowledgePublish: {
        readonly type: "WorkflowKnowledgePublish";
        readonly props: {
            readonly action: "string";
            readonly description: "?string";
            readonly label: "string";
            readonly language: "?string";
            readonly protected: "boolean";
        };
        readonly extends: "WorkflowAction";
    };
    readonly WorkflowOutboundMessage: {
        readonly type: "WorkflowOutboundMessage";
        readonly props: {
            readonly apiVersion: "number";
            readonly description: "?string";
            readonly endpointUrl: "string";
            readonly fields: readonly ["string"];
            readonly includeSessionId: "boolean";
            readonly integrationUser: "string";
            readonly name: "string";
            readonly protected: "boolean";
            readonly useDeadLetterQueue: "?boolean";
        };
        readonly extends: "WorkflowAction";
    };
    readonly WorkflowSend: {
        readonly type: "WorkflowSend";
        readonly props: {
            readonly action: "string";
            readonly description: "?string";
            readonly label: "string";
            readonly language: "?string";
            readonly protected: "boolean";
        };
        readonly extends: "WorkflowAction";
    };
    readonly WorkflowTask: {
        readonly type: "WorkflowTask";
        readonly props: {
            readonly assignedTo: "?string";
            readonly assignedToType: "string";
            readonly description: "?string";
            readonly dueDateOffset: "number";
            readonly notifyAssignee: "boolean";
            readonly offsetFromField: "?string";
            readonly priority: "string";
            readonly protected: "boolean";
            readonly status: "string";
            readonly subject: "string";
        };
        readonly extends: "WorkflowAction";
    };
    readonly WorkflowEmailRecipient: {
        readonly type: "WorkflowEmailRecipient";
        readonly props: {
            readonly field: "?string";
            readonly recipient: "?string";
            readonly type: "string";
        };
    };
    readonly WorkflowRule: {
        readonly type: "WorkflowRule";
        readonly props: {
            readonly actions: readonly ["WorkflowActionReference"];
            readonly active: "boolean";
            readonly booleanFilter: "?string";
            readonly criteriaItems: readonly ["FilterItem"];
            readonly description: "?string";
            readonly formula: "?string";
            readonly triggerType: "string";
            readonly workflowTimeTriggers: readonly ["WorkflowTimeTrigger"];
        };
        readonly extends: "Metadata";
    };
    readonly WorkflowTimeTrigger: {
        readonly type: "WorkflowTimeTrigger";
        readonly props: {
            readonly actions: readonly ["WorkflowActionReference"];
            readonly offsetFromField: "?string";
            readonly timeLength: "?string";
            readonly workflowTimeTriggerUnit: "string";
        };
    };
    readonly SaveResult: {
        readonly type: "SaveResult";
        readonly props: {
            readonly errors: readonly ["Error"];
            readonly fullName: "string";
            readonly success: "boolean";
        };
    };
    readonly Error: {
        readonly type: "Error";
        readonly props: {
            readonly extendedErrorDetails: readonly ["ExtendedErrorDetails"];
            readonly fields: readonly ["string"];
            readonly message: "string";
            readonly statusCode: "string";
        };
    };
    readonly ExtendedErrorDetails: {
        readonly type: "ExtendedErrorDetails";
        readonly props: {
            readonly extendedErrorCode: "string";
        };
    };
    readonly DeleteResult: {
        readonly type: "DeleteResult";
        readonly props: {
            readonly errors: readonly ["Error"];
            readonly fullName: "string";
            readonly success: "boolean";
        };
    };
    readonly DeployOptions: {
        readonly type: "DeployOptions";
        readonly props: {
            readonly allowMissingFiles: "boolean";
            readonly autoUpdatePackage: "boolean";
            readonly checkOnly: "boolean";
            readonly ignoreWarnings: "boolean";
            readonly performRetrieve: "boolean";
            readonly purgeOnDelete: "boolean";
            readonly rollbackOnError: "boolean";
            readonly runTests: readonly ["string"];
            readonly singlePackage: "boolean";
            readonly testLevel: "string";
        };
    };
    readonly AsyncResult: {
        readonly type: "AsyncResult";
        readonly props: {
            readonly done: "boolean";
            readonly id: "string";
            readonly message: "?string";
            readonly state: "string";
            readonly statusCode: "?string";
        };
    };
    readonly DescribeMetadataResult: {
        readonly type: "DescribeMetadataResult";
        readonly props: {
            readonly metadataObjects: readonly ["DescribeMetadataObject"];
            readonly organizationNamespace: "string";
            readonly partialSaveAllowed: "boolean";
            readonly testRequired: "boolean";
        };
    };
    readonly DescribeMetadataObject: {
        readonly type: "DescribeMetadataObject";
        readonly props: {
            readonly childXmlNames: readonly ["string"];
            readonly directoryName: "string";
            readonly inFolder: "boolean";
            readonly metaFile: "boolean";
            readonly suffix: "?string";
            readonly xmlName: "string";
        };
    };
    readonly DescribeValueTypeResult: {
        readonly type: "DescribeValueTypeResult";
        readonly props: {
            readonly apiCreatable: "boolean";
            readonly apiDeletable: "boolean";
            readonly apiReadable: "boolean";
            readonly apiUpdatable: "boolean";
            readonly parentField: "?ValueTypeField";
            readonly valueTypeFields: readonly ["ValueTypeField"];
        };
    };
    readonly ValueTypeField: {
        readonly type: "ValueTypeField";
        readonly props: {
            readonly fields: readonly ["ValueTypeField"];
            readonly foreignKeyDomain: readonly ["string"];
            readonly isForeignKey: "boolean";
            readonly isNameField: "boolean";
            readonly minOccurs: "number";
            readonly name: "string";
            readonly picklistValues: readonly ["PicklistEntry"];
            readonly soapType: "string";
            readonly valueRequired: "boolean";
        };
    };
    readonly PicklistEntry: {
        readonly type: "PicklistEntry";
        readonly props: {
            readonly active: "boolean";
            readonly defaultValue: "boolean";
            readonly label: "string";
            readonly validFor: "?string";
            readonly value: "string";
        };
    };
    readonly ListMetadataQuery: {
        readonly type: "ListMetadataQuery";
        readonly props: {
            readonly folder: "?string";
            readonly type: "string";
        };
    };
    readonly ReadResult: {
        readonly type: "ReadResult";
        readonly props: {
            readonly records: readonly ["Metadata"];
        };
    };
    readonly RetrieveRequest: {
        readonly type: "RetrieveRequest";
        readonly props: {
            readonly apiVersion: "number";
            readonly packageNames: readonly ["string"];
            readonly singlePackage: "boolean";
            readonly specificFiles: readonly ["string"];
            readonly unpackaged: "?Package";
        };
    };
    readonly UpsertResult: {
        readonly type: "UpsertResult";
        readonly props: {
            readonly created: "boolean";
            readonly errors: readonly ["Error"];
            readonly fullName: "string";
            readonly success: "boolean";
        };
    };
    readonly LogInfo: {
        readonly type: "LogInfo";
        readonly props: {
            readonly category: "string";
            readonly level: "string";
        };
    };
};
export declare type CancelDeployResult = {
    done: boolean;
    id: string;
};
export declare type DeployResult = {
    canceledBy?: string | null | undefined;
    canceledByName?: string | null | undefined;
    checkOnly: boolean;
    completedDate?: string | null | undefined;
    createdBy: string;
    createdByName: string;
    createdDate: string;
    details: DeployDetails;
    done: boolean;
    errorMessage?: string | null | undefined;
    errorStatusCode?: string | null | undefined;
    id: string;
    ignoreWarnings: boolean;
    lastModifiedDate?: string | null | undefined;
    numberComponentErrors: number;
    numberComponentsDeployed: number;
    numberComponentsTotal: number;
    numberTestErrors: number;
    numberTestsCompleted: number;
    numberTestsTotal: number;
    rollbackOnError: boolean;
    runTestsEnabled: boolean;
    startDate?: string | null | undefined;
    stateDetail?: string | null | undefined;
    status: string;
    success: boolean;
};
export declare type DeployDetails = {
    componentFailures: DeployMessage[];
    componentSuccesses: DeployMessage[];
    retrieveResult?: RetrieveResult | null | undefined;
    runTestResult?: RunTestsResult | null | undefined;
};
export declare type DeployMessage = {
    changed: boolean;
    columnNumber?: number | null | undefined;
    componentType?: string | null | undefined;
    created: boolean;
    createdDate: string;
    deleted: boolean;
    fileName: string;
    fullName: string;
    id?: string | null | undefined;
    lineNumber?: number | null | undefined;
    problem?: string | null | undefined;
    problemType?: string | null | undefined;
    success: boolean;
};
export declare type RetrieveResult = {
    done: boolean;
    errorMessage?: string | null | undefined;
    errorStatusCode?: string | null | undefined;
    fileProperties: FileProperties[];
    id: string;
    messages: RetrieveMessage[];
    status: string;
    success: boolean;
    zipFile: string;
};
export declare type FileProperties = {
    createdById: string;
    createdByName: string;
    createdDate: string;
    fileName: string;
    fullName: string;
    id: string;
    lastModifiedById: string;
    lastModifiedByName: string;
    lastModifiedDate: string;
    manageableState?: string | null | undefined;
    namespacePrefix?: string | null | undefined;
    type: string;
};
export declare type RetrieveMessage = {
    fileName: string;
    problem: string;
};
export declare type RunTestsResult = {
    apexLogId?: string | null | undefined;
    codeCoverage: CodeCoverageResult[];
    codeCoverageWarnings: CodeCoverageWarning[];
    failures: RunTestFailure[];
    flowCoverage: FlowCoverageResult[];
    flowCoverageWarnings: FlowCoverageWarning[];
    numFailures: number;
    numTestsRun: number;
    successes: RunTestSuccess[];
    totalTime: number;
};
export declare type CodeCoverageResult = {
    dmlInfo: CodeLocation[];
    id: string;
    locationsNotCovered: CodeLocation[];
    methodInfo: CodeLocation[];
    name: string;
    namespace?: string | null | undefined;
    numLocations: number;
    numLocationsNotCovered: number;
    soqlInfo: CodeLocation[];
    soslInfo: CodeLocation[];
    type: string;
};
export declare type CodeLocation = {
    column: number;
    line: number;
    numExecutions: number;
    time: number;
};
export declare type CodeCoverageWarning = {
    id: string;
    message: string;
    name?: string | null | undefined;
    namespace?: string | null | undefined;
};
export declare type RunTestFailure = {
    id: string;
    message: string;
    methodName?: string | null | undefined;
    name: string;
    namespace?: string | null | undefined;
    packageName: string;
    seeAllData?: boolean | null | undefined;
    stackTrace?: string | null | undefined;
    time: number;
    type: string;
};
export declare type FlowCoverageResult = {
    elementsNotCovered: string[];
    flowId: string;
    flowName: string;
    flowNamespace?: string | null | undefined;
    numElements: number;
    numElementsNotCovered: number;
    processType: string;
};
export declare type FlowCoverageWarning = {
    flowId?: string | null | undefined;
    flowName?: string | null | undefined;
    flowNamespace?: string | null | undefined;
    message: string;
};
export declare type RunTestSuccess = {
    id: string;
    methodName: string;
    name: string;
    namespace?: string | null | undefined;
    seeAllData?: boolean | null | undefined;
    time: number;
};
export declare type Metadata = {
    fullName?: string | null | undefined;
};
export declare type AccountRelationshipShareRule = Metadata & {
    accessLevel: string;
    accountToCriteriaField: string;
    description?: string | null | undefined;
    entityType: string;
    masterLabel: string;
    staticFormulaCriteria?: string | null | undefined;
    type: string;
};
export declare type AccountSettings = Metadata & {
    enableAccountHistoryTracking?: boolean | null | undefined;
    enableAccountInsightsInMobile?: boolean | null | undefined;
    enableAccountOwnerReport?: boolean | null | undefined;
    enableAccountTeams?: boolean | null | undefined;
    enableContactHistoryTracking?: boolean | null | undefined;
    enableRelateContactToMultipleAccounts?: boolean | null | undefined;
    showViewHierarchyLink?: boolean | null | undefined;
};
export declare type ActionLinkGroupTemplate = Metadata & {
    actionLinkTemplates: ActionLinkTemplate[];
    category: string;
    executionsAllowed: string;
    hoursUntilExpiration?: number | null | undefined;
    isPublished: boolean;
    name: string;
};
export declare type ActionLinkTemplate = {
    actionUrl: string;
    headers?: string | null | undefined;
    isConfirmationRequired: boolean;
    isGroupDefault: boolean;
    label?: string | null | undefined;
    labelKey: string;
    linkType: string;
    method: string;
    position: number;
    requestBody?: string | null | undefined;
    userAlias?: string | null | undefined;
    userVisibility: string;
};
export declare type ActionPlanTemplate = Metadata & {
    actionPlanTemplateItem: ActionPlanTemplateItem[];
    description?: string | null | undefined;
    name: string;
    targetEntityType: string;
    uniqueName: string;
};
export declare type ActionPlanTemplateItem = {
    actionPlanTemplateItemValue: ActionPlanTemplateItemValue[];
    displayOrder?: number | null | undefined;
    isRequired?: boolean | null | undefined;
    name: string;
    uniqueName: string;
};
export declare type ActionPlanTemplateItemValue = {
    name: string;
    valueFormula?: string | null | undefined;
    valueLiteral?: string | null | undefined;
};
export declare type ActionsSettings = Metadata & {
    enableDefaultQuickActionsOn?: boolean | null | undefined;
    enableMdpEnabled?: boolean | null | undefined;
    enableThirdPartyActions?: boolean | null | undefined;
};
export declare type ActivitiesSettings = Metadata & {
    allowUsersToRelateMultipleContactsToTasksAndEvents?: boolean | null | undefined;
    autoRelateEventAttendees?: boolean | null | undefined;
    enableActivityReminders?: boolean | null | undefined;
    enableClickCreateEvents?: boolean | null | undefined;
    enableDragAndDropScheduling?: boolean | null | undefined;
    enableEmailTracking?: boolean | null | undefined;
    enableGroupTasks?: boolean | null | undefined;
    enableListViewScheduling?: boolean | null | undefined;
    enableLogNote?: boolean | null | undefined;
    enableMultidayEvents?: boolean | null | undefined;
    enableRecurringEvents?: boolean | null | undefined;
    enableRecurringTasks?: boolean | null | undefined;
    enableRollUpActivToContactsAcct?: boolean | null | undefined;
    enableSidebarCalendarShortcut?: boolean | null | undefined;
    enableSimpleTaskCreateUI?: boolean | null | undefined;
    enableUNSTaskDelegatedToNotifications?: boolean | null | undefined;
    enableUserListViewCalendars?: boolean | null | undefined;
    meetingRequestsLogo?: string | null | undefined;
    showCustomLogoMeetingRequests?: boolean | null | undefined;
    showEventDetailsMultiUserCalendar?: boolean | null | undefined;
    showHomePageHoverLinksForEvents?: boolean | null | undefined;
    showMyTasksHoverLinks?: boolean | null | undefined;
};
export declare type AddressSettings = Metadata & {
    countriesAndStates: CountriesAndStates;
};
export declare type CountriesAndStates = {
    countries: Country[];
};
export declare type Country = {
    active: boolean;
    integrationValue: string;
    isoCode: string;
    label: string;
    orgDefault: boolean;
    standard: boolean;
    states: State[];
    visible: boolean;
};
export declare type State = {
    active: boolean;
    integrationValue: string;
    isoCode: string;
    label: string;
    standard: boolean;
    visible: boolean;
};
export declare type AnalyticSnapshot = Metadata & {
    description?: string | null | undefined;
    groupColumn?: string | null | undefined;
    mappings: AnalyticSnapshotMapping[];
    name: string;
    runningUser?: string | null | undefined;
    sourceReport: string;
    targetObject: string;
};
export declare type AnalyticSnapshotMapping = {
    aggregateType?: string | null | undefined;
    sourceField: string;
    sourceType: string;
    targetField: string;
};
export declare type AnalyticsSettings = Metadata & {
    alwaysGenPreviews?: boolean | null | undefined;
    analyticsAdoptionMetadata?: boolean | null | undefined;
    canAccessAnalyticsViaAPI?: boolean | null | undefined;
    canAnnotateDashboards?: boolean | null | undefined;
    canEnableSavedView?: boolean | null | undefined;
    canExploreDataConversationally?: boolean | null | undefined;
    canShareAppsWithCommunities?: boolean | null | undefined;
    canSubscribeDashboardWidgets?: boolean | null | undefined;
    canViewThumbnailAssets?: boolean | null | undefined;
    enableAnalyticsSubtotals?: boolean | null | undefined;
    enableAutoCompleteCombo?: boolean | null | undefined;
    enableDashboardComponentSnapshot?: boolean | null | undefined;
    enableDashboardFlexiTable?: boolean | null | undefined;
    enableEmailReportsToPortalUsers?: boolean | null | undefined;
    enableFloatingReportHeaders?: boolean | null | undefined;
    enableInsights?: boolean | null | undefined;
    enableLightningReportBuilder?: boolean | null | undefined;
    enableLotusNotesImages?: boolean | null | undefined;
    enableMassEnableReportBuilder?: boolean | null | undefined;
    enableNewChartsEngine?: boolean | null | undefined;
    enablePowerInsights?: boolean | null | undefined;
    enableRemoveFooterForRepDisplay?: boolean | null | undefined;
    enableRemoveFooterFromRepExp?: boolean | null | undefined;
    enableReportFieldToFieldPref?: boolean | null | undefined;
    enableReportUniqueRowCountPref?: boolean | null | undefined;
    enableSFXJoinedReportsEnable?: boolean | null | undefined;
    enableSmartDataDiscovery?: boolean | null | undefined;
    enableUseOldChartsLookAndFeel?: boolean | null | undefined;
    enableWaveReplication?: boolean | null | undefined;
    enableWaveSharingInheritance?: boolean | null | undefined;
    enableWaveTemplate?: boolean | null | undefined;
    enableWaveTrendedDatasetCleanup?: boolean | null | undefined;
};
export declare type AnimationRule = Metadata & {
    animationFrequency: string;
    developerName: string;
    isActive: boolean;
    masterLabel: string;
    recordTypeContext: string;
    recordTypeName?: string | null | undefined;
    sobjectType: string;
    targetField: string;
    targetFieldChangeToValues: string;
};
export declare type ApexSettings = Metadata & {
    enableAggregateCodeCoverageOnly?: boolean | null | undefined;
    enableApexAccessRightsPref?: boolean | null | undefined;
    enableApexApprovalLockUnlock?: boolean | null | undefined;
    enableApexCtrlImplicitWithSharingPref?: boolean | null | undefined;
    enableApexPropertyGetterPref?: boolean | null | undefined;
    enableAuraApexCtrlAuthUserAccessCheckPref?: boolean | null | undefined;
    enableAuraApexCtrlGuestUserAccessCheckPref?: boolean | null | undefined;
    enableCompileOnDeploy?: boolean | null | undefined;
    enableDisableParallelApexTesting?: boolean | null | undefined;
    enableDoNotEmailDebugLog?: boolean | null | undefined;
    enableGaplessTestAutoNum?: boolean | null | undefined;
    enableMngdCtrlActionAccessPref?: boolean | null | undefined;
    enableNonCertifiedApexMdCrud?: boolean | null | undefined;
};
export declare type ApexTestSuite = Metadata & {
    testClassName: string[];
};
export declare type AppExperienceSettings = Metadata & {
    doesHideAllAppsInAppLauncher?: boolean | null | undefined;
};
export declare type AppMenu = Metadata & {
    appMenuItems: AppMenuItem[];
};
export declare type AppMenuItem = {
    name: string;
    type: string;
};
export declare type AppointmentSchedulingPolicy = Metadata & {
    appointmentStartTimeInterval: string;
    masterLabel: string;
    shouldConsiderCalendarEvents: boolean;
    shouldEnforceExcludedResource: boolean;
    shouldEnforceRequiredResource: boolean;
    shouldMatchSkill: boolean;
    shouldMatchSkillLevel: boolean;
    shouldRespectVisitingHours: boolean;
    shouldUsePrimaryMembers: boolean;
    shouldUseSecondaryMembers: boolean;
};
export declare type ApprovalProcess = Metadata & {
    active: boolean;
    allowRecall?: boolean | null | undefined;
    allowedSubmitters: ApprovalSubmitter[];
    approvalPageFields?: ApprovalPageField | null | undefined;
    approvalStep: ApprovalStep[];
    description?: string | null | undefined;
    emailTemplate?: string | null | undefined;
    enableMobileDeviceAccess?: boolean | null | undefined;
    entryCriteria?: ApprovalEntryCriteria | null | undefined;
    finalApprovalActions?: ApprovalAction | null | undefined;
    finalApprovalRecordLock?: boolean | null | undefined;
    finalRejectionActions?: ApprovalAction | null | undefined;
    finalRejectionRecordLock?: boolean | null | undefined;
    initialSubmissionActions?: ApprovalAction | null | undefined;
    label: string;
    nextAutomatedApprover?: NextAutomatedApprover | null | undefined;
    postTemplate?: string | null | undefined;
    recallActions?: ApprovalAction | null | undefined;
    recordEditability: string;
    showApprovalHistory?: boolean | null | undefined;
};
export declare type ApprovalSubmitter = {
    submitter?: string | null | undefined;
    type: string;
};
export declare type ApprovalPageField = {
    field: string[];
};
export declare type ApprovalStep = {
    allowDelegate?: boolean | null | undefined;
    approvalActions?: ApprovalAction | null | undefined;
    assignedApprover: ApprovalStepApprover;
    description?: string | null | undefined;
    entryCriteria?: ApprovalEntryCriteria | null | undefined;
    ifCriteriaNotMet?: string | null | undefined;
    label: string;
    name: string;
    rejectBehavior?: ApprovalStepRejectBehavior | null | undefined;
    rejectionActions?: ApprovalAction | null | undefined;
};
export declare type ApprovalAction = {
    action: WorkflowActionReference[];
};
export declare type WorkflowActionReference = {
    name: string;
    type: string;
};
export declare type ApprovalStepApprover = {
    approver: Approver[];
    whenMultipleApprovers?: string | null | undefined;
};
export declare type Approver = {
    name?: string | null | undefined;
    type: string;
};
export declare type ApprovalEntryCriteria = {
    booleanFilter?: string | null | undefined;
    criteriaItems: FilterItem[];
    formula?: string | null | undefined;
};
export declare type FilterItem = {
    field: string;
    operation: string;
    value?: string | null | undefined;
    valueField?: string | null | undefined;
};
export declare type DuplicateRuleFilterItem = FilterItem & {
    sortOrder: number;
    table: string;
};
export declare type ApprovalStepRejectBehavior = {
    type: string;
};
export declare type NextAutomatedApprover = {
    useApproverFieldOfRecordOwner?: boolean | null | undefined;
    userHierarchyField: string;
};
export declare type ArchiveSettings = Metadata & {
    enableEntityArchivingEnabled?: boolean | null | undefined;
};
export declare type AssignmentRule = Metadata & {
    active?: boolean | null | undefined;
    ruleEntry: RuleEntry[];
};
export declare type RuleEntry = {
    assignedTo?: string | null | undefined;
    assignedToType?: string | null | undefined;
    booleanFilter?: string | null | undefined;
    businessHours?: string | null | undefined;
    businessHoursSource?: string | null | undefined;
    criteriaItems: FilterItem[];
    disableEscalationWhenModified?: boolean | null | undefined;
    escalationAction: EscalationAction[];
    escalationStartTime?: string | null | undefined;
    formula?: string | null | undefined;
    notifyCcRecipients?: boolean | null | undefined;
    overrideExistingTeams?: boolean | null | undefined;
    replyToEmail?: string | null | undefined;
    senderEmail?: string | null | undefined;
    senderName?: string | null | undefined;
    team: string[];
    template?: string | null | undefined;
};
export declare type EscalationAction = {
    assignedTo?: string | null | undefined;
    assignedToTemplate?: string | null | undefined;
    assignedToType?: string | null | undefined;
    minutesToEscalation?: number | null | undefined;
    notifyCaseOwner?: boolean | null | undefined;
    notifyEmail: string[];
    notifyTo?: string | null | undefined;
    notifyToTemplate?: string | null | undefined;
};
export declare type AssignmentRules = Metadata & {
    assignmentRule: AssignmentRule[];
};
export declare type Audience = Metadata & {
    audienceName: string;
    container: string;
    criteria: AudienceCriteria;
    description?: string | null | undefined;
    formula?: string | null | undefined;
    formulaFilterType?: string | null | undefined;
    targets?: PersonalizationTargetInfos | null | undefined;
};
export declare type AudienceCriteria = {
    criterion: AudienceCriterion[];
};
export declare type AudienceCriterion = {
    criteriaNumber?: number | null | undefined;
    criterionValue?: AudienceCriteriaValue | null | undefined;
    operator?: string | null | undefined;
    type: string;
};
export declare type AudienceCriteriaValue = {
    city?: string | null | undefined;
    country?: string | null | undefined;
    domain?: string | null | undefined;
    entityField?: string | null | undefined;
    entityType?: string | null | undefined;
    fieldValue?: string | null | undefined;
    isEnabled?: string | null | undefined;
    permissionName?: string | null | undefined;
    permissionType?: string | null | undefined;
    profile?: string | null | undefined;
    subdivision?: string | null | undefined;
};
export declare type PersonalizationTargetInfos = {
    target: PersonalizationTargetInfo[];
};
export declare type PersonalizationTargetInfo = {
    groupName: string;
    priority?: number | null | undefined;
    targetType: string;
    targetValue: string;
};
export declare type AuraDefinitionBundle = Metadata & {
    SVGContent?: string | null | undefined;
    apiVersion?: number | null | undefined;
    controllerContent?: string | null | undefined;
    description?: string | null | undefined;
    designContent?: string | null | undefined;
    documentationContent?: string | null | undefined;
    helperContent?: string | null | undefined;
    markup?: string | null | undefined;
    modelContent?: string | null | undefined;
    packageVersions: PackageVersion[];
    rendererContent?: string | null | undefined;
    styleContent?: string | null | undefined;
    testsuiteContent?: string | null | undefined;
    type?: string | null | undefined;
};
export declare type PackageVersion = {
    majorNumber: number;
    minorNumber: number;
    namespace: string;
};
export declare type AuthProvider = Metadata & {
    appleTeam?: string | null | undefined;
    authorizeUrl?: string | null | undefined;
    consumerKey?: string | null | undefined;
    consumerSecret?: string | null | undefined;
    customMetadataTypeRecord?: string | null | undefined;
    defaultScopes?: string | null | undefined;
    ecKey?: string | null | undefined;
    errorUrl?: string | null | undefined;
    executionUser?: string | null | undefined;
    friendlyName: string;
    iconUrl?: string | null | undefined;
    idTokenIssuer?: string | null | undefined;
    includeOrgIdInIdentifier?: boolean | null | undefined;
    linkKickoffUrl?: string | null | undefined;
    logoutUrl?: string | null | undefined;
    oauthKickoffUrl?: string | null | undefined;
    plugin?: string | null | undefined;
    portal?: string | null | undefined;
    providerType: string;
    registrationHandler?: string | null | undefined;
    sendAccessTokenInHeader?: boolean | null | undefined;
    sendClientCredentialsInHeader?: boolean | null | undefined;
    sendSecretInApis?: boolean | null | undefined;
    ssoKickoffUrl?: string | null | undefined;
    tokenUrl?: string | null | undefined;
    userInfoUrl?: string | null | undefined;
};
export declare type AutoResponseRule = Metadata & {
    active?: boolean | null | undefined;
    ruleEntry: RuleEntry[];
};
export declare type AutoResponseRules = Metadata & {
    autoResponseRule: AutoResponseRule[];
};
export declare type BlockchainSettings = Metadata & {
    enableBcp?: boolean | null | undefined;
    enableBcpCoin?: boolean | null | undefined;
};
export declare type Bot = Metadata & {
    botMlDomain?: LocalMlDomain | null | undefined;
    botUser?: string | null | undefined;
    botVersions: BotVersion[];
    contextVariables: ConversationContextVariable[];
    description?: string | null | undefined;
    label?: string | null | undefined;
};
export declare type LocalMlDomain = {
    label: string;
    mlIntents: MlIntent[];
    mlSlotClasses: MlSlotClass[];
    name: string;
};
export declare type MlIntent = {
    description?: string | null | undefined;
    developerName: string;
    label: string;
    mlIntentUtterances: MlIntentUtterance[];
    relatedMlIntents: MlRelatedIntent[];
};
export declare type MlIntentUtterance = {
    utterance: string;
};
export declare type MlRelatedIntent = {
    relatedMlIntent: string;
};
export declare type MlSlotClass = {
    dataType: string;
    description?: string | null | undefined;
    developerName: string;
    extractionRegex?: string | null | undefined;
    extractionType?: string | null | undefined;
    label: string;
    mlSlotClassValues: MlSlotClassValue[];
};
export declare type MlSlotClassValue = {
    synonymGroup?: SynonymGroup | null | undefined;
    value: string;
};
export declare type SynonymGroup = {
    languages: string[];
    terms: string[];
};
export declare type BotVersion = Metadata & {
    botDialogGroups: BotDialogGroup[];
    botDialogs: BotDialog[];
    conversationVariables: ConversationVariable[];
    entryDialog: string;
    mainMenuDialog: string;
    responseDelayMilliseconds?: number | null | undefined;
};
export declare type BotDialogGroup = {
    description?: string | null | undefined;
    developerName: string;
    label: string;
};
export declare type BotDialog = {
    botDialogGroup?: string | null | undefined;
    botSteps: BotStep[];
    description?: string | null | undefined;
    developerName: string;
    label: string;
    mlIntent?: string | null | undefined;
    mlIntentTrainingEnabled?: boolean | null | undefined;
    showInFooterMenu?: boolean | null | undefined;
};
export declare type BotStep = {
    booleanFilter?: string | null | undefined;
    botInvocation?: BotInvocation | null | undefined;
    botMessages: BotMessage[];
    botNavigation?: BotNavigation | null | undefined;
    botStepConditions: BotStepCondition[];
    botSteps: BotStep[];
    botVariableOperation?: BotVariableOperation | null | undefined;
    conversationRecordLookup?: ConversationRecordLookup | null | undefined;
    conversationSystemMessage?: ConversationSystemMessage | null | undefined;
    type: string;
};
export declare type BotInvocation = {
    invocationActionName?: string | null | undefined;
    invocationActionType?: string | null | undefined;
    invocationMappings: BotInvocationMapping[];
};
export declare type BotInvocationMapping = {
    parameterName: string;
    type: string;
    value?: string | null | undefined;
    variableName?: string | null | undefined;
    variableType?: string | null | undefined;
};
export declare type BotMessage = {
    message: string;
};
export declare type BotNavigation = {
    botNavigationLinks: BotNavigationLink[];
    type: string;
};
export declare type BotNavigationLink = {
    label?: string | null | undefined;
    targetBotDialog: string;
};
export declare type BotStepCondition = {
    leftOperandName: string;
    leftOperandType: string;
    operatorType: string;
    rightOperandValue?: string | null | undefined;
};
export declare type BotVariableOperation = {
    botInvocation?: BotInvocation | null | undefined;
    botMessages: BotMessage[];
    botQuickReplyOptions: BotQuickReplyOption[];
    botVariableOperands: BotVariableOperand[];
    invalidInputBotNavigation?: BotNavigation | null | undefined;
    quickReplyOptionTemplate?: string | null | undefined;
    quickReplyType?: string | null | undefined;
    quickReplyWidgetType?: string | null | undefined;
    sourceVariableName?: string | null | undefined;
    sourceVariableType?: string | null | undefined;
    type: string;
};
export declare type BotQuickReplyOption = {
    literalValue: string;
};
export declare type BotVariableOperand = {
    disableAutoFill?: boolean | null | undefined;
    sourceName?: string | null | undefined;
    sourceType?: string | null | undefined;
    sourceValue?: string | null | undefined;
    targetName: string;
    targetType: string;
};
export declare type ConversationRecordLookup = {
    SObjectType: string;
    lookupFields: ConversationRecordLookupField[];
    maxLookupResults: number;
    sourceVariableName: string;
    sourceVariableType: string;
    targetVariableName: string;
};
export declare type ConversationRecordLookupField = {
    fieldName: string;
};
export declare type ConversationSystemMessage = {
    systemMessageMappings: ConversationSystemMessageMapping[];
    type: string;
};
export declare type ConversationSystemMessageMapping = {
    mappingType: string;
    parameterType: string;
    variableName: string;
};
export declare type ConversationVariable = {
    SObjectType?: string | null | undefined;
    collectionType?: string | null | undefined;
    dataType: string;
    developerName: string;
    label: string;
};
export declare type ConversationContextVariable = {
    SObjectType?: string | null | undefined;
    contextVariableMappings: ConversationContextVariableMapping[];
    dataType: string;
    developerName: string;
    label: string;
};
export declare type ConversationContextVariableMapping = {
    SObjectType: string;
    fieldName: string;
    messageType: string;
};
export declare type BotSettings = Metadata & {
    enableBots?: boolean | null | undefined;
};
export declare type BrandingSet = Metadata & {
    brandingSetProperty: BrandingSetProperty[];
    description?: string | null | undefined;
    masterLabel: string;
    type?: string | null | undefined;
};
export declare type BrandingSetProperty = {
    propertyName: string;
    propertyValue?: string | null | undefined;
};
export declare type BusinessHoursEntry = Metadata & {
    active?: boolean | null | undefined;
    default: boolean;
    fridayEndTime?: string | null | undefined;
    fridayStartTime?: string | null | undefined;
    mondayEndTime?: string | null | undefined;
    mondayStartTime?: string | null | undefined;
    name?: string | null | undefined;
    saturdayEndTime?: string | null | undefined;
    saturdayStartTime?: string | null | undefined;
    sundayEndTime?: string | null | undefined;
    sundayStartTime?: string | null | undefined;
    thursdayEndTime?: string | null | undefined;
    thursdayStartTime?: string | null | undefined;
    timeZoneId?: string | null | undefined;
    tuesdayEndTime?: string | null | undefined;
    tuesdayStartTime?: string | null | undefined;
    wednesdayEndTime?: string | null | undefined;
    wednesdayStartTime?: string | null | undefined;
};
export declare type BusinessHoursSettings = Metadata & {
    businessHours: BusinessHoursEntry[];
    holidays: Holiday[];
};
export declare type Holiday = {
    activityDate?: string | null | undefined;
    businessHours: string[];
    description?: string | null | undefined;
    endTime?: string | null | undefined;
    isRecurring?: boolean | null | undefined;
    name?: string | null | undefined;
    recurrenceDayOfMonth?: number | null | undefined;
    recurrenceDayOfWeek: string[];
    recurrenceDayOfWeekMask?: number | null | undefined;
    recurrenceEndDate?: string | null | undefined;
    recurrenceInstance?: string | null | undefined;
    recurrenceInterval?: number | null | undefined;
    recurrenceMonthOfYear?: string | null | undefined;
    recurrenceStartDate?: string | null | undefined;
    recurrenceType?: string | null | undefined;
    startTime?: string | null | undefined;
};
export declare type BusinessProcess = Metadata & {
    description?: string | null | undefined;
    isActive?: boolean | null | undefined;
    values: PicklistValue[];
};
export declare type PicklistValue = Metadata & {
    color?: string | null | undefined;
    default: boolean;
    description?: string | null | undefined;
    isActive?: boolean | null | undefined;
    allowEmail?: boolean | null | undefined;
    closed?: boolean | null | undefined;
    controllingFieldValues: string[];
    converted?: boolean | null | undefined;
    cssExposed?: boolean | null | undefined;
    forecastCategory?: string | null | undefined;
    highPriority?: boolean | null | undefined;
    probability?: number | null | undefined;
    reverseRole?: string | null | undefined;
    reviewed?: boolean | null | undefined;
    won?: boolean | null | undefined;
};
export declare type CMSConnectSource = Metadata & {
    cmsConnectAsset: CMSConnectAsset[];
    cmsConnectLanguage: CMSConnectLanguage[];
    cmsConnectPersonalization?: CMSConnectPersonalization | null | undefined;
    cmsConnectResourceType: CMSConnectResourceType[];
    connectionType: string;
    cssScope?: string | null | undefined;
    developerName: string;
    languageEnabled?: string | null | undefined;
    masterLabel: string;
    namedCredential?: string | null | undefined;
    personalizationEnabled?: string | null | undefined;
    rootPath?: string | null | undefined;
    sortOrder: number;
    status: string;
    type: string;
    websiteUrl?: string | null | undefined;
};
export declare type CMSConnectAsset = {
    assetPath: string;
    assetType: string;
    sortOrder: number;
};
export declare type CMSConnectLanguage = {
    cmsLanguage: string;
    language: string;
};
export declare type CMSConnectPersonalization = {
    connectorPage: string;
    connectorPageAsset: string;
};
export declare type CMSConnectResourceType = {
    cmsConnectResourceDefinition: CMSConnectResourceDefinition[];
    developerName: string;
    masterLabel: string;
    resourceType: string;
};
export declare type CMSConnectResourceDefinition = {
    developerName: string;
    masterLabel: string;
    options: number;
    payloadType: string;
    resourceIdPath?: string | null | undefined;
    resourceNamePath?: string | null | undefined;
    resourcePath: string;
    rootNodePath?: string | null | undefined;
};
export declare type CallCenter = Metadata & {
    adapterUrl?: string | null | undefined;
    customSettings?: string | null | undefined;
    displayName: string;
    displayNameLabel: string;
    internalNameLabel: string;
    sections: CallCenterSection[];
    version?: string | null | undefined;
};
export declare type CallCenterSection = {
    items: CallCenterItem[];
    label: string;
    name: string;
};
export declare type CallCenterItem = {
    label: string;
    name: string;
    value: string;
};
export declare type CampaignInfluenceModel = Metadata & {
    isActive?: boolean | null | undefined;
    isDefaultModel: boolean;
    isModelLocked: boolean;
    modelDescription?: string | null | undefined;
    name: string;
    recordPreference?: string | null | undefined;
};
export declare type CampaignSettings = Metadata & {
    enableAutoCampInfluenceDisabled?: boolean | null | undefined;
    enableB2bmaCampaignInfluence2?: boolean | null | undefined;
    enableCampaignHistoryTrackEnabled?: boolean | null | undefined;
    enableCampaignInfluence2?: boolean | null | undefined;
    enableCampaignMemberTWCF?: boolean | null | undefined;
    enableSuppressNoValueCI2?: boolean | null | undefined;
};
export declare type CanvasMetadata = Metadata & {
    accessMethod: string;
    canvasOptions?: string | null | undefined;
    canvasUrl: string;
    lifecycleClass?: string | null | undefined;
    locationOptions?: string | null | undefined;
    samlInitiationMethod?: string | null | undefined;
};
export declare type CaseClassificationSettings = Metadata & {
    caseClassificationRecommendations?: boolean | null | undefined;
    reRunAttributeBasedRules?: boolean | null | undefined;
    runAssignmentRules?: boolean | null | undefined;
};
export declare type CaseSettings = Metadata & {
    caseAssignNotificationTemplate?: string | null | undefined;
    caseAutoProcUser?: boolean | null | undefined;
    caseCloseNotificationTemplate?: string | null | undefined;
    caseCommentNotificationTemplate?: string | null | undefined;
    caseCreateNotificationTemplate?: string | null | undefined;
    caseFeedItemSettings: FeedItemSettings[];
    caseFeedReadUnreadLtng?: boolean | null | undefined;
    caseMergeInLightning?: boolean | null | undefined;
    closeCaseThroughStatusChange?: boolean | null | undefined;
    defaultCaseFeedLayoutOn?: boolean | null | undefined;
    defaultCaseOwner?: string | null | undefined;
    defaultCaseOwnerType?: string | null | undefined;
    defaultCaseUser?: string | null | undefined;
    emailActionDefaultsHandlerClass?: string | null | undefined;
    emailToCase?: EmailToCaseSettings | null | undefined;
    enableCaseFeed?: boolean | null | undefined;
    enableCollapseEmailThread?: boolean | null | undefined;
    enableDraftEmails?: boolean | null | undefined;
    enableEarlyEscalationRuleTriggers?: boolean | null | undefined;
    enableEmailActionDefaultsHandler?: boolean | null | undefined;
    enableSuggestedArticlesApplication?: boolean | null | undefined;
    enableSuggestedArticlesCustomerPortal?: boolean | null | undefined;
    enableSuggestedArticlesPartnerPortal?: boolean | null | undefined;
    enableSuggestedSolutions?: boolean | null | undefined;
    escalateCaseBefore?: boolean | null | undefined;
    genericMessageEnabled?: boolean | null | undefined;
    keepRecordTypeOnAssignmentRule?: boolean | null | undefined;
    notifyContactOnCaseComment?: boolean | null | undefined;
    notifyDefaultCaseOwner?: boolean | null | undefined;
    notifyOwnerOnCaseComment?: boolean | null | undefined;
    notifyOwnerOnCaseOwnerChange?: boolean | null | undefined;
    predictiveSupportEnabled?: boolean | null | undefined;
    showEmailAttachmentsInCaseAttachmentsRL?: boolean | null | undefined;
    showFewerCloseActions?: boolean | null | undefined;
    systemUserEmail?: string | null | undefined;
    useSystemEmailAddress?: boolean | null | undefined;
    useSystemUserAsDefaultCaseUser?: boolean | null | undefined;
    webToCase?: WebToCaseSettings | null | undefined;
};
export declare type FeedItemSettings = {
    characterLimit?: number | null | undefined;
    displayFormat?: string | null | undefined;
    feedItemType: string;
};
export declare type EmailToCaseSettings = {
    enableE2CAttachmentAsFile?: boolean | null | undefined;
    enableE2CSourceTracking?: boolean | null | undefined;
    enableEmailToCase?: boolean | null | undefined;
    enableHtmlEmail?: boolean | null | undefined;
    enableOnDemandEmailToCase?: boolean | null | undefined;
    enableThreadIDInBody?: boolean | null | undefined;
    enableThreadIDInSubject?: boolean | null | undefined;
    notifyOwnerOnNewCaseEmail?: boolean | null | undefined;
    overEmailLimitAction?: string | null | undefined;
    preQuoteSignature?: boolean | null | undefined;
    routingAddresses: EmailToCaseRoutingAddress[];
    unauthorizedSenderAction?: string | null | undefined;
};
export declare type EmailToCaseRoutingAddress = {
    addressType?: string | null | undefined;
    authorizedSenders?: string | null | undefined;
    caseOrigin?: string | null | undefined;
    caseOwner?: string | null | undefined;
    caseOwnerType?: string | null | undefined;
    casePriority?: string | null | undefined;
    createTask?: boolean | null | undefined;
    emailAddress?: string | null | undefined;
    emailServicesAddress?: string | null | undefined;
    isVerified?: boolean | null | undefined;
    routingName?: string | null | undefined;
    saveEmailHeaders?: boolean | null | undefined;
    taskStatus?: string | null | undefined;
};
export declare type WebToCaseSettings = {
    caseOrigin?: string | null | undefined;
    defaultResponseTemplate?: string | null | undefined;
    enableWebToCase?: boolean | null | undefined;
};
export declare type CaseSubjectParticle = Metadata & {
    index: number;
    textField?: string | null | undefined;
    type: string;
};
export declare type ChannelLayout = Metadata & {
    enabledChannels: string[];
    label: string;
    layoutItems: ChannelLayoutItem[];
    recordType?: string | null | undefined;
};
export declare type ChannelLayoutItem = {
    field: string;
};
export declare type ChatterAnswersSettings = Metadata & {
    emailFollowersOnBestAnswer?: boolean | null | undefined;
    emailFollowersOnReply?: boolean | null | undefined;
    emailOwnerOnPrivateReply?: boolean | null | undefined;
    emailOwnerOnReply?: boolean | null | undefined;
    enableAnswerViaEmail?: boolean | null | undefined;
    enableChatterAnswers: boolean;
    enableFacebookSSO?: boolean | null | undefined;
    enableInlinePublisher?: boolean | null | undefined;
    enableReputation?: boolean | null | undefined;
    enableRichTextEditor?: boolean | null | undefined;
    facebookAuthProvider?: string | null | undefined;
    showInPortals?: boolean | null | undefined;
};
export declare type ChatterEmailsMDSettings = Metadata & {
    enableChatterDigestEmailsApiOnly?: boolean | null | undefined;
    enableChatterEmailAttachment?: boolean | null | undefined;
    enableCollaborationEmail?: boolean | null | undefined;
    enableDisplayAppDownloadBadges?: boolean | null | undefined;
    enableEmailReplyToChatter?: boolean | null | undefined;
    enableEmailToChatter?: boolean | null | undefined;
};
export declare type ChatterExtension = Metadata & {
    compositionComponent: string;
    description: string;
    extensionName: string;
    headerText?: string | null | undefined;
    hoverText?: string | null | undefined;
    icon: string;
    isProtected?: boolean | null | undefined;
    masterLabel: string;
    renderComponent: string;
    type: string;
};
export declare type ChatterSettings = Metadata & {
    allowChatterGroupArchiving?: boolean | null | undefined;
    allowRecordsInChatterGroup?: boolean | null | undefined;
    allowSharingInChatterGroup?: boolean | null | undefined;
    enableApprovalRequest?: boolean | null | undefined;
    enableChatter?: boolean | null | undefined;
    enableChatterEmoticons?: boolean | null | undefined;
    enableFeedEdit?: boolean | null | undefined;
    enableFeedPinning?: boolean | null | undefined;
    enableFeedsDraftPosts?: boolean | null | undefined;
    enableFeedsRichText?: boolean | null | undefined;
    enableInviteCsnUsers?: boolean | null | undefined;
    enableOutOfOfficeEnabledPref?: boolean | null | undefined;
    enableRichLinkPreviewsInFeed?: boolean | null | undefined;
    enableTodayRecsInFeed?: boolean | null | undefined;
    unlistedGroupsEnabled?: boolean | null | undefined;
};
export declare type CleanDataService = Metadata & {
    cleanRules: CleanRule[];
    description: string;
    masterLabel: string;
    matchEngine: string;
};
export declare type CleanRule = {
    bulkEnabled: boolean;
    bypassTriggers: boolean;
    bypassWorkflow: boolean;
    description: string;
    developerName: string;
    fieldMappings: FieldMapping[];
    masterLabel: string;
    matchRule: string;
    sourceSobjectType: string;
    status: string;
    targetSobjectType: string;
};
export declare type FieldMapping = {
    SObjectType: string;
    developerName: string;
    fieldMappingRows: FieldMappingRow[];
    masterLabel: string;
};
export declare type FieldMappingRow = {
    SObjectType: string;
    fieldMappingFields: FieldMappingField[];
    fieldName: string;
    mappingOperation: string;
};
export declare type FieldMappingField = {
    dataServiceField: string;
    dataServiceObjectName: string;
    priority: number;
};
export declare type CommandAction = Metadata & {
    actionType: string;
    description?: string | null | undefined;
    intents: CommandActionIntent[];
    label: string;
    parameters: CommandActionParam[];
    responseTemplates: CommandActionResponse[];
    target?: string | null | undefined;
};
export declare type CommandActionIntent = {
    phrase: string;
    responseTemplates: CommandActionResponse[];
};
export declare type CommandActionResponse = {
    template: string;
};
export declare type CommandActionParam = {
    defaultValue?: string | null | undefined;
    description?: string | null | undefined;
    name: string;
    required?: boolean | null | undefined;
    type: string;
};
export declare type CommunitiesSettings = Metadata & {
    canModerateAllFeedPosts?: boolean | null | undefined;
    canModerateInternalFeedPosts?: boolean | null | undefined;
    embeddedVisualforcePages?: boolean | null | undefined;
    enableCommunityWorkspaces?: boolean | null | undefined;
    enableCspContactVisibilityPref?: boolean | null | undefined;
    enableCspNotesOnAccConPref?: boolean | null | undefined;
    enableEnablePRM?: boolean | null | undefined;
    enableExternalAccHierPref?: boolean | null | undefined;
    enableGuestRecordReassignOrgPref?: boolean | null | undefined;
    enableInviteChatterGuestEnabled?: boolean | null | undefined;
    enableNetPortalUserReportOpts?: boolean | null | undefined;
    enableNetworksEnabled?: boolean | null | undefined;
    enableOotbProfExtUserOpsEnable?: boolean | null | undefined;
    enablePRMAccRelPref?: boolean | null | undefined;
    enablePowerCustomerCaseStatus?: boolean | null | undefined;
    enableRelaxPartnerAccountFieldPref?: boolean | null | undefined;
    enableUsernameUniqForOrgPref?: boolean | null | undefined;
};
export declare type Community = Metadata & {
    active?: boolean | null | undefined;
    chatterAnswersFacebookSsoUrl?: string | null | undefined;
    communityFeedPage?: string | null | undefined;
    dataCategoryName?: string | null | undefined;
    description?: string | null | undefined;
    emailFooterDocument?: string | null | undefined;
    emailHeaderDocument?: string | null | undefined;
    emailNotificationUrl?: string | null | undefined;
    enableChatterAnswers?: boolean | null | undefined;
    enablePrivateQuestions?: boolean | null | undefined;
    expertsGroup?: string | null | undefined;
    portal?: string | null | undefined;
    reputationLevels?: ReputationLevels | null | undefined;
    showInPortal?: boolean | null | undefined;
    site?: string | null | undefined;
};
export declare type ReputationLevels = {
    chatterAnswersReputationLevels: ChatterAnswersReputationLevel[];
    ideaReputationLevels: IdeaReputationLevel[];
};
export declare type ChatterAnswersReputationLevel = {
    name: string;
    value: number;
};
export declare type IdeaReputationLevel = {
    name: string;
    value: number;
};
export declare type CommunityTemplateDefinition = Metadata & {
    baseTemplate?: string | null | undefined;
    bundlesInfo: CommunityTemplateBundleInfo[];
    category: string;
    defaultBrandingSet?: string | null | undefined;
    defaultThemeDefinition: string;
    description?: string | null | undefined;
    enableExtendedCleanUpOnDelete?: boolean | null | undefined;
    masterLabel: string;
    navigationLinkSet: NavigationLinkSet[];
    pageSetting: CommunityTemplatePageSetting[];
    publisher?: string | null | undefined;
};
export declare type CommunityTemplateBundleInfo = {
    description?: string | null | undefined;
    image?: string | null | undefined;
    order: number;
    title: string;
    type: string;
};
export declare type CommunityThemeBundleInfo = CommunityTemplateBundleInfo & {};
export declare type NavigationLinkSet = {
    navigationMenuItem: NavigationMenuItem[];
};
export declare type NavigationMenuItem = {
    defaultListViewId?: string | null | undefined;
    label: string;
    menuItemBranding?: NavigationMenuItemBranding | null | undefined;
    position: number;
    publiclyAvailable?: boolean | null | undefined;
    subMenu?: NavigationSubMenu | null | undefined;
    target?: string | null | undefined;
    targetPreference?: string | null | undefined;
    type: string;
};
export declare type NavigationMenuItemBranding = {
    tileImage?: string | null | undefined;
};
export declare type NavigationSubMenu = {
    navigationMenuItem: NavigationMenuItem[];
};
export declare type CommunityTemplatePageSetting = {
    page: string;
    themeLayout: string;
};
export declare type CommunityThemeDefinition = Metadata & {
    bundlesInfo: CommunityThemeBundleInfo[];
    customThemeLayoutType: CommunityCustomThemeLayoutType[];
    defaultBrandingSet?: string | null | undefined;
    description?: string | null | undefined;
    enableExtendedCleanUpOnDelete?: boolean | null | undefined;
    masterLabel: string;
    publisher?: string | null | undefined;
    themeRouteOverride: CommunityThemeRouteOverride[];
    themeSetting: CommunityThemeSetting[];
};
export declare type CommunityCustomThemeLayoutType = {
    description?: string | null | undefined;
    label: string;
};
export declare type CommunityThemeRouteOverride = {
    customThemeLayoutType?: string | null | undefined;
    pageAttributes: string;
    pageType: string;
    themeLayoutType?: string | null | undefined;
};
export declare type CommunityThemeSetting = {
    customThemeLayoutType?: string | null | undefined;
    themeLayout: string;
    themeLayoutType?: string | null | undefined;
};
export declare type CompactLayout = Metadata & {
    fields: string[];
    label: string;
};
export declare type CompanySettings = Metadata & {
    enableCustomFiscalYear: boolean;
    fiscalYear?: FiscalYearSettings | null | undefined;
};
export declare type FiscalYearSettings = {
    fiscalYearNameBasedOn?: string | null | undefined;
    startMonth?: string | null | undefined;
};
export declare type ConnectedApp = Metadata & {
    attributes: ConnectedAppAttribute[];
    canvas?: CanvasMetadata | null | undefined;
    canvasConfig?: ConnectedAppCanvasConfig | null | undefined;
    contactEmail: string;
    contactPhone?: string | null | undefined;
    description?: string | null | undefined;
    iconUrl?: string | null | undefined;
    infoUrl?: string | null | undefined;
    ipRanges: ConnectedAppIpRange[];
    label: string;
    logoUrl?: string | null | undefined;
    mobileAppConfig?: ConnectedAppMobileDetailConfig | null | undefined;
    mobileStartUrl?: string | null | undefined;
    oauthConfig?: ConnectedAppOauthConfig | null | undefined;
    permissionSetName: string[];
    plugin?: string | null | undefined;
    pluginExecutionUser?: string | null | undefined;
    profileName: string[];
    samlConfig?: ConnectedAppSamlConfig | null | undefined;
    startUrl?: string | null | undefined;
};
export declare type ConnectedAppAttribute = {
    formula: string;
    key: string;
};
export declare type ConnectedAppCanvasConfig = {
    accessMethod: string;
    canvasUrl: string;
    lifecycleClass?: string | null | undefined;
    locations: string[];
    options: string[];
    samlInitiationMethod?: string | null | undefined;
};
export declare type ConnectedAppIpRange = {
    description?: string | null | undefined;
    end: string;
    start: string;
};
export declare type ConnectedAppMobileDetailConfig = {
    applicationBinaryFile?: string | null | undefined;
    applicationBinaryFileName?: string | null | undefined;
    applicationBundleIdentifier?: string | null | undefined;
    applicationFileLength?: number | null | undefined;
    applicationIconFile?: string | null | undefined;
    applicationIconFileName?: string | null | undefined;
    applicationInstallUrl?: string | null | undefined;
    devicePlatform: string;
    deviceType?: string | null | undefined;
    minimumOsVersion?: string | null | undefined;
    privateApp?: boolean | null | undefined;
    version: string;
};
export declare type ConnectedAppOauthConfig = {
    callbackUrl: string;
    certificate?: string | null | undefined;
    consumerKey?: string | null | undefined;
    consumerSecret?: string | null | undefined;
    idTokenConfig?: ConnectedAppOauthIdToken | null | undefined;
    isAdminApproved?: boolean | null | undefined;
    scopes: string[];
    singleLogoutUrl?: string | null | undefined;
};
export declare type ConnectedAppOauthIdToken = {
    idTokenAudience?: string | null | undefined;
    idTokenIncludeAttributes?: boolean | null | undefined;
    idTokenIncludeCustomPerms?: boolean | null | undefined;
    idTokenIncludeStandardClaims?: boolean | null | undefined;
    idTokenValidity?: number | null | undefined;
};
export declare type ConnectedAppSamlConfig = {
    acsUrl: string;
    certificate?: string | null | undefined;
    encryptionCertificate?: string | null | undefined;
    encryptionType?: string | null | undefined;
    entityUrl: string;
    issuer?: string | null | undefined;
    samlIdpSLOBindingEnum?: string | null | undefined;
    samlNameIdFormat?: string | null | undefined;
    samlSloUrl?: string | null | undefined;
    samlSubjectCustomAttr?: string | null | undefined;
    samlSubjectType: string;
};
export declare type ConnectedAppSettings = Metadata & {
    enableAdminApprovedAppsOnly?: boolean | null | undefined;
    enableSkipUserProvisioningWizardWelcomePage?: boolean | null | undefined;
};
export declare type ContentSettings = Metadata & {
    enableChatterFileLink?: boolean | null | undefined;
    enableContent?: boolean | null | undefined;
    enableContentAutoAssign?: boolean | null | undefined;
    enableContentDistForPortalUsers?: boolean | null | undefined;
    enableContentDistPwOptionsBit1?: boolean | null | undefined;
    enableContentDistPwOptionsBit2?: boolean | null | undefined;
    enableContentDistribution?: boolean | null | undefined;
    enableContentSupportMultiLanguage?: boolean | null | undefined;
    enableContentWorkspaceAccess?: boolean | null | undefined;
    enableFileShareSetByRecord?: boolean | null | undefined;
    enableFilesUsrShareNetRestricted?: boolean | null | undefined;
    enableJPGPreviews?: boolean | null | undefined;
    enableLibraryManagedFiles?: boolean | null | undefined;
    enableSiteGuestUserToUploadFiles?: boolean | null | undefined;
    enableUploadFilesOnAttachments?: boolean | null | undefined;
    skipContentAssetTriggers?: boolean | null | undefined;
    skipContentAssetTriggersOnDeploy?: boolean | null | undefined;
};
export declare type ContractSettings = Metadata & {
    autoCalculateEndDate?: boolean | null | undefined;
    autoExpirationDelay?: string | null | undefined;
    autoExpirationRecipient?: string | null | undefined;
    autoExpireContracts?: boolean | null | undefined;
    enableContractHistoryTracking?: boolean | null | undefined;
    notifyOwnersOnContractExpiration?: boolean | null | undefined;
};
export declare type CorsWhitelistOrigin = Metadata & {
    urlPattern: string;
};
export declare type CspTrustedSite = Metadata & {
    context?: string | null | undefined;
    description?: string | null | undefined;
    endpointUrl: string;
    isActive: boolean;
};
export declare type CurrencySettings = Metadata & {
    enableCurrencyEffectiveDates?: boolean | null | undefined;
    enableCurrencySymbolWithMultiCurrency?: boolean | null | undefined;
    enableMultiCurrency?: boolean | null | undefined;
    isMultiCurrencyActivationAllowed?: boolean | null | undefined;
    isParenCurrencyConvDisabled?: boolean | null | undefined;
};
export declare type CustomApplication = Metadata & {
    actionOverrides: AppActionOverride[];
    brand?: AppBrand | null | undefined;
    consoleConfig?: ServiceCloudConsoleConfig | null | undefined;
    defaultLandingTab?: string | null | undefined;
    description?: string | null | undefined;
    formFactors: string[];
    isNavAutoTempTabsDisabled?: boolean | null | undefined;
    isNavPersonalizationDisabled?: boolean | null | undefined;
    isServiceCloudConsole?: boolean | null | undefined;
    label?: string | null | undefined;
    logo?: string | null | undefined;
    navType?: string | null | undefined;
    preferences?: AppPreferences | null | undefined;
    profileActionOverrides: AppProfileActionOverride[];
    setupExperience?: string | null | undefined;
    subscriberTabs: string[];
    tabs: string[];
    uiType?: string | null | undefined;
    utilityBar?: string | null | undefined;
    workspaceConfig?: AppWorkspaceConfig | null | undefined;
};
export declare type AppActionOverride = ActionOverride & {
    pageOrSobjectType: string;
};
export declare type ActionOverride = {
    actionName?: string | null | undefined;
    comment?: string | null | undefined;
    content?: string | null | undefined;
    formFactor?: string | null | undefined;
    skipRecordTypeSelect?: boolean | null | undefined;
    type?: string | null | undefined;
};
export declare type AppBrand = {
    footerColor?: string | null | undefined;
    headerColor?: string | null | undefined;
    logo?: string | null | undefined;
    logoVersion?: number | null | undefined;
    shouldOverrideOrgTheme?: boolean | null | undefined;
};
export declare type ServiceCloudConsoleConfig = {
    componentList?: AppComponentList | null | undefined;
    detailPageRefreshMethod: string;
    footerColor?: string | null | undefined;
    headerColor?: string | null | undefined;
    keyboardShortcuts: KeyboardShortcuts;
    listPlacement: ListPlacement;
    listRefreshMethod: string;
    liveAgentConfig?: LiveAgentConfig | null | undefined;
    primaryTabColor?: string | null | undefined;
    pushNotifications: PushNotification[];
    tabLimitConfig?: TabLimitConfig | null | undefined;
    whitelistedDomains: string[];
};
export declare type AppComponentList = {
    alignment: string;
    components: string[];
};
export declare type KeyboardShortcuts = {
    customShortcuts: CustomShortcut[];
    defaultShortcuts: DefaultShortcut[];
};
export declare type CustomShortcut = DefaultShortcut & {
    description?: string | null | undefined;
    eventName: string;
};
export declare type DefaultShortcut = {
    action: string;
    active: boolean;
    keyCommand: string;
};
export declare type ListPlacement = {
    height?: number | null | undefined;
    location: string;
    units?: string | null | undefined;
    width?: number | null | undefined;
};
export declare type LiveAgentConfig = {
    enableLiveChat?: boolean | null | undefined;
    openNewAccountSubtab?: boolean | null | undefined;
    openNewCaseSubtab?: boolean | null | undefined;
    openNewContactSubtab?: boolean | null | undefined;
    openNewLeadSubtab?: boolean | null | undefined;
    openNewVFPageSubtab?: boolean | null | undefined;
    pageNamesToOpen: string[];
    showKnowledgeArticles?: boolean | null | undefined;
};
export declare type PushNotification = {
    fieldNames: string[];
    objectName: string;
};
export declare type TabLimitConfig = {
    maxNumberOfPrimaryTabs?: string | null | undefined;
    maxNumberOfSubTabs?: string | null | undefined;
};
export declare type AppPreferences = {
    enableCustomizeMyTabs: boolean;
    enableKeyboardShortcuts: boolean;
    enableListViewHover: boolean;
    enableListViewReskin: boolean;
    enableMultiMonitorComponents: boolean;
    enablePinTabs: boolean;
    enableTabHover: boolean;
    enableTabLimits: boolean;
    saveUserSessions: boolean;
};
export declare type AppProfileActionOverride = ProfileActionOverride & {
    profile: string;
};
export declare type ProfileActionOverride = {
    actionName: string;
    content?: string | null | undefined;
    formFactor: string;
    pageOrSobjectType: string;
    recordType?: string | null | undefined;
    type: string;
};
export declare type AppWorkspaceConfig = {
    mappings: WorkspaceMapping[];
};
export declare type WorkspaceMapping = {
    fieldName?: string | null | undefined;
    tab: string;
};
export declare type CustomApplicationComponent = Metadata & {
    buttonIconUrl?: string | null | undefined;
    buttonStyle?: string | null | undefined;
    buttonText?: string | null | undefined;
    buttonWidth?: number | null | undefined;
    height?: number | null | undefined;
    isHeightFixed: boolean;
    isHidden: boolean;
    isWidthFixed: boolean;
    visualforcePage: string;
    width?: number | null | undefined;
};
export declare type CustomFeedFilter = Metadata & {
    criteria: FeedFilterCriterion[];
    description?: string | null | undefined;
    isProtected?: boolean | null | undefined;
    label: string;
};
export declare type FeedFilterCriterion = {
    feedItemType: string;
    feedItemVisibility?: string | null | undefined;
    relatedSObjectType?: string | null | undefined;
};
export declare type CustomField = Metadata & {
    businessOwnerGroup?: string | null | undefined;
    businessOwnerUser?: string | null | undefined;
    businessStatus?: string | null | undefined;
    caseSensitive?: boolean | null | undefined;
    complianceGroup?: string | null | undefined;
    customDataType?: string | null | undefined;
    defaultValue?: string | null | undefined;
    deleteConstraint?: string | null | undefined;
    deprecated?: boolean | null | undefined;
    description?: string | null | undefined;
    displayFormat?: string | null | undefined;
    encryptionScheme?: string | null | undefined;
    escapeMarkup?: boolean | null | undefined;
    externalDeveloperName?: string | null | undefined;
    externalId?: boolean | null | undefined;
    fieldManageability?: string | null | undefined;
    formula?: string | null | undefined;
    formulaTreatBlanksAs?: string | null | undefined;
    inlineHelpText?: string | null | undefined;
    isAIPredictionField?: boolean | null | undefined;
    isConvertLeadDisabled?: boolean | null | undefined;
    isFilteringDisabled?: boolean | null | undefined;
    isNameField?: boolean | null | undefined;
    isSortingDisabled?: boolean | null | undefined;
    label?: string | null | undefined;
    length?: number | null | undefined;
    lookupFilter?: LookupFilter | null | undefined;
    maskChar?: string | null | undefined;
    maskType?: string | null | undefined;
    metadataRelationshipControllingField?: string | null | undefined;
    populateExistingRows?: boolean | null | undefined;
    precision?: number | null | undefined;
    referenceTargetField?: string | null | undefined;
    referenceTo?: string | null | undefined;
    relationshipLabel?: string | null | undefined;
    relationshipName?: string | null | undefined;
    relationshipOrder?: number | null | undefined;
    reparentableMasterDetail?: boolean | null | undefined;
    required?: boolean | null | undefined;
    restrictedAdminField?: boolean | null | undefined;
    scale?: number | null | undefined;
    securityClassification?: string | null | undefined;
    startingNumber?: number | null | undefined;
    stripMarkup?: boolean | null | undefined;
    summarizedField?: string | null | undefined;
    summaryFilterItems: FilterItem[];
    summaryForeignKey?: string | null | undefined;
    summaryOperation?: string | null | undefined;
    trackFeedHistory?: boolean | null | undefined;
    trackHistory?: boolean | null | undefined;
    trackTrending?: boolean | null | undefined;
    translateData?: boolean | null | undefined;
    type?: string | null | undefined;
    unique?: boolean | null | undefined;
    valueSet?: ValueSet | null | undefined;
    visibleLines?: number | null | undefined;
    writeRequiresMasterRead?: boolean | null | undefined;
};
export declare type LookupFilter = {
    active: boolean;
    booleanFilter?: string | null | undefined;
    description?: string | null | undefined;
    errorMessage?: string | null | undefined;
    filterItems: FilterItem[];
    infoMessage?: string | null | undefined;
    isOptional: boolean;
};
export declare type ValueSet = {
    controllingField?: string | null | undefined;
    restricted?: boolean | null | undefined;
    valueSetDefinition?: ValueSetValuesDefinition | null | undefined;
    valueSetName?: string | null | undefined;
    valueSettings: ValueSettings[];
};
export declare type ValueSetValuesDefinition = {
    sorted: boolean;
    value: CustomValue[];
};
export declare type CustomValue = Metadata & {
    color?: string | null | undefined;
    default: boolean;
    description?: string | null | undefined;
    isActive?: boolean | null | undefined;
    label?: string | null | undefined;
};
export declare type StandardValue = CustomValue & {
    allowEmail?: boolean | null | undefined;
    closed?: boolean | null | undefined;
    converted?: boolean | null | undefined;
    cssExposed?: boolean | null | undefined;
    forecastCategory?: string | null | undefined;
    groupingString?: string | null | undefined;
    highPriority?: boolean | null | undefined;
    probability?: number | null | undefined;
    reverseRole?: string | null | undefined;
    reviewed?: boolean | null | undefined;
    won?: boolean | null | undefined;
};
export declare type ValueSettings = {
    controllingFieldValue: string[];
    valueName: string;
};
export declare type CustomHelpMenuSection = Metadata & {
    customHelpMenuItems: CustomHelpMenuItem[];
    masterLabel: string;
};
export declare type CustomHelpMenuItem = {
    linkUrl: string;
    masterLabel: string;
    sortOrder: number;
};
export declare type CustomLabel = Metadata & {
    categories?: string | null | undefined;
    language: string;
    protected: boolean;
    shortDescription: string;
    value: string;
};
export declare type CustomLabels = Metadata & {
    labels: CustomLabel[];
};
export declare type CustomMetadata = Metadata & {
    description?: string | null | undefined;
    label?: string | null | undefined;
    protected?: boolean | null | undefined;
    values: CustomMetadataValue[];
};
export declare type CustomMetadataValue = {
    field: string;
    value?: any | null | undefined;
};
export declare type CustomNotificationType = Metadata & {
    customNotifTypeName: string;
    description?: string | null | undefined;
    desktop: boolean;
    masterLabel: string;
    mobile: boolean;
};
export declare type CustomObject = Metadata & {
    actionOverrides: ActionOverride[];
    allowInChatterGroups?: boolean | null | undefined;
    articleTypeChannelDisplay?: ArticleTypeChannelDisplay | null | undefined;
    businessProcesses: BusinessProcess[];
    compactLayoutAssignment?: string | null | undefined;
    compactLayouts: CompactLayout[];
    customHelp?: string | null | undefined;
    customHelpPage?: string | null | undefined;
    customSettingsType?: string | null | undefined;
    deploymentStatus?: string | null | undefined;
    deprecated?: boolean | null | undefined;
    description?: string | null | undefined;
    enableActivities?: boolean | null | undefined;
    enableBulkApi?: boolean | null | undefined;
    enableDataTranslation?: boolean | null | undefined;
    enableDivisions?: boolean | null | undefined;
    enableEnhancedLookup?: boolean | null | undefined;
    enableFeeds?: boolean | null | undefined;
    enableHistory?: boolean | null | undefined;
    enableLicensing?: boolean | null | undefined;
    enableReports?: boolean | null | undefined;
    enableSearch?: boolean | null | undefined;
    enableSharing?: boolean | null | undefined;
    enableStreamingApi?: boolean | null | undefined;
    eventType?: string | null | undefined;
    externalDataSource?: string | null | undefined;
    externalName?: string | null | undefined;
    externalRepository?: string | null | undefined;
    externalSharingModel?: string | null | undefined;
    fieldSets: FieldSet[];
    fields: CustomField[];
    gender?: string | null | undefined;
    historyRetentionPolicy?: HistoryRetentionPolicy | null | undefined;
    household?: boolean | null | undefined;
    indexes: Index[];
    label?: string | null | undefined;
    listViews: ListView[];
    nameField?: CustomField | null | undefined;
    pluralLabel?: string | null | undefined;
    profileSearchLayouts: ProfileSearchLayouts[];
    publishBehavior?: string | null | undefined;
    recordTypeTrackFeedHistory?: boolean | null | undefined;
    recordTypeTrackHistory?: boolean | null | undefined;
    recordTypes: RecordType[];
    searchLayouts?: SearchLayouts | null | undefined;
    sharingModel?: string | null | undefined;
    sharingReasons: SharingReason[];
    sharingRecalculations: SharingRecalculation[];
    startsWith?: string | null | undefined;
    validationRules: ValidationRule[];
    visibility?: string | null | undefined;
    webLinks: WebLink[];
};
export declare type ArticleTypeChannelDisplay = {
    articleTypeTemplates: ArticleTypeTemplate[];
};
export declare type ArticleTypeTemplate = {
    channel: string;
    page?: string | null | undefined;
    template: string;
};
export declare type FieldSet = Metadata & {
    availableFields: FieldSetItem[];
    description: string;
    displayedFields: FieldSetItem[];
    label: string;
};
export declare type FieldSetItem = {
    field?: string | null | undefined;
    isFieldManaged?: boolean | null | undefined;
    isRequired?: boolean | null | undefined;
};
export declare type HistoryRetentionPolicy = {
    archiveAfterMonths: number;
    archiveRetentionYears: number;
    description?: string | null | undefined;
};
export declare type Index = Metadata & {
    fields: IndexField[];
    label: string;
};
export declare type IndexField = {
    name: string;
    sortDirection: string;
};
export declare type ListView = Metadata & {
    booleanFilter?: string | null | undefined;
    columns: string[];
    division?: string | null | undefined;
    filterScope: string;
    filters: ListViewFilter[];
    label: string;
    language?: string | null | undefined;
    queue?: string | null | undefined;
    sharedTo?: SharedTo | null | undefined;
};
export declare type ListViewFilter = {
    field: string;
    operation: string;
    value?: string | null | undefined;
};
export declare type SharedTo = {
    allCustomerPortalUsers?: string | null | undefined;
    allInternalUsers?: string | null | undefined;
    allPartnerUsers?: string | null | undefined;
    channelProgramGroup: string[];
    channelProgramGroups: string[];
    group: string[];
    groups: string[];
    guestUser: string[];
    managerSubordinates: string[];
    managers: string[];
    portalRole: string[];
    portalRoleAndSubordinates: string[];
    queue: string[];
    role: string[];
    roleAndSubordinates: string[];
    roleAndSubordinatesInternal: string[];
    roles: string[];
    rolesAndSubordinates: string[];
    territories: string[];
    territoriesAndSubordinates: string[];
    territory: string[];
    territoryAndSubordinates: string[];
};
export declare type ProfileSearchLayouts = {
    fields: string[];
    profileName?: string | null | undefined;
};
export declare type RecordType = Metadata & {
    active: boolean;
    businessProcess?: string | null | undefined;
    compactLayoutAssignment?: string | null | undefined;
    description?: string | null | undefined;
    label: string;
    picklistValues: RecordTypePicklistValue[];
};
export declare type RecordTypePicklistValue = {
    picklist: string;
    values: PicklistValue[];
};
export declare type SearchLayouts = {
    customTabListAdditionalFields: string[];
    excludedStandardButtons: string[];
    listViewButtons: string[];
    lookupDialogsAdditionalFields: string[];
    lookupFilterFields: string[];
    lookupPhoneDialogsAdditionalFields: string[];
    massQuickActions: string[];
    searchFilterFields: string[];
    searchResultsAdditionalFields: string[];
    searchResultsCustomButtons: string[];
};
export declare type SharingReason = Metadata & {
    label: string;
};
export declare type SharingRecalculation = {
    className: string;
};
export declare type ValidationRule = Metadata & {
    active: boolean;
    description?: string | null | undefined;
    errorConditionFormula: string;
    errorDisplayField?: string | null | undefined;
    errorMessage: string;
};
export declare type WebLink = Metadata & {
    availability: string;
    description?: string | null | undefined;
    displayType: string;
    encodingKey?: string | null | undefined;
    hasMenubar?: boolean | null | undefined;
    hasScrollbars?: boolean | null | undefined;
    hasToolbar?: boolean | null | undefined;
    height?: number | null | undefined;
    isResizable?: boolean | null | undefined;
    linkType: string;
    masterLabel?: string | null | undefined;
    openType: string;
    page?: string | null | undefined;
    position?: string | null | undefined;
    protected: boolean;
    requireRowSelection?: boolean | null | undefined;
    scontrol?: string | null | undefined;
    showsLocation?: boolean | null | undefined;
    showsStatus?: boolean | null | undefined;
    url?: string | null | undefined;
    width?: number | null | undefined;
};
export declare type CustomObjectTranslation = Metadata & {
    caseValues: ObjectNameCaseValue[];
    fieldSets: FieldSetTranslation[];
    fields: CustomFieldTranslation[];
    gender?: string | null | undefined;
    layouts: LayoutTranslation[];
    nameFieldLabel?: string | null | undefined;
    quickActions: QuickActionTranslation[];
    recordTypes: RecordTypeTranslation[];
    sharingReasons: SharingReasonTranslation[];
    standardFields: StandardFieldTranslation[];
    startsWith?: string | null | undefined;
    validationRules: ValidationRuleTranslation[];
    webLinks: WebLinkTranslation[];
    workflowTasks: WorkflowTaskTranslation[];
};
export declare type ObjectNameCaseValue = {
    article?: string | null | undefined;
    caseType?: string | null | undefined;
    plural?: boolean | null | undefined;
    possessive?: string | null | undefined;
    value: string;
};
export declare type FieldSetTranslation = {
    label: string;
    name: string;
};
export declare type CustomFieldTranslation = {
    caseValues: ObjectNameCaseValue[];
    gender?: string | null | undefined;
    help?: string | null | undefined;
    label?: string | null | undefined;
    lookupFilter?: LookupFilterTranslation | null | undefined;
    name: string;
    picklistValues: PicklistValueTranslation[];
    relationshipLabel?: string | null | undefined;
    startsWith?: string | null | undefined;
};
export declare type LookupFilterTranslation = {
    errorMessage: string;
    informationalMessage: string;
};
export declare type PicklistValueTranslation = {
    masterLabel: string;
    translation?: string | null | undefined;
};
export declare type LayoutTranslation = {
    layout: string;
    layoutType?: string | null | undefined;
    sections: LayoutSectionTranslation[];
};
export declare type LayoutSectionTranslation = {
    label: string;
    section: string;
};
export declare type QuickActionTranslation = {
    label: string;
    name: string;
};
export declare type RecordTypeTranslation = {
    description?: string | null | undefined;
    label: string;
    name: string;
};
export declare type SharingReasonTranslation = {
    label: string;
    name: string;
};
export declare type StandardFieldTranslation = {
    label?: string | null | undefined;
    name: string;
};
export declare type ValidationRuleTranslation = {
    errorMessage: string;
    name: string;
};
export declare type WebLinkTranslation = {
    label: string;
    name: string;
};
export declare type WorkflowTaskTranslation = {
    description?: string | null | undefined;
    name: string;
    subject?: string | null | undefined;
};
export declare type CustomPageWebLink = Metadata & {
    availability: string;
    description?: string | null | undefined;
    displayType: string;
    encodingKey?: string | null | undefined;
    hasMenubar?: boolean | null | undefined;
    hasScrollbars?: boolean | null | undefined;
    hasToolbar?: boolean | null | undefined;
    height?: number | null | undefined;
    isResizable?: boolean | null | undefined;
    linkType: string;
    masterLabel?: string | null | undefined;
    openType: string;
    page?: string | null | undefined;
    position?: string | null | undefined;
    protected: boolean;
    requireRowSelection?: boolean | null | undefined;
    scontrol?: string | null | undefined;
    showsLocation?: boolean | null | undefined;
    showsStatus?: boolean | null | undefined;
    url?: string | null | undefined;
    width?: number | null | undefined;
};
export declare type CustomPermission = Metadata & {
    connectedApp?: string | null | undefined;
    description?: string | null | undefined;
    label: string;
    requiredPermission: CustomPermissionDependencyRequired[];
};
export declare type CustomPermissionDependencyRequired = {
    customPermission: string;
    dependency: boolean;
};
export declare type CustomSite = Metadata & {
    active: boolean;
    allowHomePage: boolean;
    allowStandardAnswersPages?: boolean | null | undefined;
    allowStandardIdeasPages: boolean;
    allowStandardLookups: boolean;
    allowStandardPortalPages: boolean;
    allowStandardSearch: boolean;
    analyticsTrackingCode?: string | null | undefined;
    authorizationRequiredPage?: string | null | undefined;
    bandwidthExceededPage?: string | null | undefined;
    browserXssProtection: boolean;
    changePasswordPage?: string | null | undefined;
    chatterAnswersForgotPasswordConfirmPage?: string | null | undefined;
    chatterAnswersForgotPasswordPage?: string | null | undefined;
    chatterAnswersHelpPage?: string | null | undefined;
    chatterAnswersLoginPage?: string | null | undefined;
    chatterAnswersRegistrationPage?: string | null | undefined;
    clickjackProtectionLevel: string;
    contentSniffingProtection: boolean;
    cspUpgradeInsecureRequests: boolean;
    customWebAddresses: SiteWebAddress[];
    description?: string | null | undefined;
    enableAuraRequests?: boolean | null | undefined;
    favoriteIcon?: string | null | undefined;
    fileNotFoundPage?: string | null | undefined;
    forgotPasswordPage?: string | null | undefined;
    genericErrorPage?: string | null | undefined;
    guestProfile?: string | null | undefined;
    inMaintenancePage?: string | null | undefined;
    inactiveIndexPage?: string | null | undefined;
    indexPage: string;
    masterLabel: string;
    myProfilePage?: string | null | undefined;
    portal?: string | null | undefined;
    referrerPolicyOriginWhenCrossOrigin: boolean;
    requireHttps: boolean;
    requireInsecurePortalAccess: boolean;
    robotsTxtPage?: string | null | undefined;
    rootComponent?: string | null | undefined;
    selfRegPage?: string | null | undefined;
    serverIsDown?: string | null | undefined;
    siteAdmin?: string | null | undefined;
    siteRedirectMappings: SiteRedirectMapping[];
    siteTemplate?: string | null | undefined;
    siteType: string;
    subdomain?: string | null | undefined;
    urlPathPrefix?: string | null | undefined;
};
export declare type SiteWebAddress = {
    certificate?: string | null | undefined;
    domainName: string;
    primary: boolean;
};
export declare type SiteRedirectMapping = {
    action: string;
    isActive?: boolean | null | undefined;
    source: string;
    target: string;
};
export declare type CustomTab = Metadata & {
    actionOverrides: ActionOverride[];
    auraComponent?: string | null | undefined;
    customObject?: boolean | null | undefined;
    description?: string | null | undefined;
    flexiPage?: string | null | undefined;
    frameHeight?: number | null | undefined;
    hasSidebar?: boolean | null | undefined;
    icon?: string | null | undefined;
    label?: string | null | undefined;
    lwcComponent?: string | null | undefined;
    motif?: string | null | undefined;
    page?: string | null | undefined;
    scontrol?: string | null | undefined;
    splashPageLink?: string | null | undefined;
    url?: string | null | undefined;
    urlEncodingKey?: string | null | undefined;
};
export declare type Dashboard = Metadata & {
    backgroundEndColor: string;
    backgroundFadeDirection: string;
    backgroundStartColor: string;
    chartTheme?: string | null | undefined;
    colorPalette?: string | null | undefined;
    dashboardChartTheme?: string | null | undefined;
    dashboardColorPalette?: string | null | undefined;
    dashboardFilters: DashboardFilter[];
    dashboardGridLayout?: DashboardGridLayout | null | undefined;
    dashboardResultRefreshedDate?: string | null | undefined;
    dashboardResultRunningUser?: string | null | undefined;
    dashboardType?: string | null | undefined;
    description?: string | null | undefined;
    folderName?: string | null | undefined;
    isGridLayout?: boolean | null | undefined;
    leftSection?: DashboardComponentSection | null | undefined;
    middleSection?: DashboardComponentSection | null | undefined;
    numSubscriptions?: number | null | undefined;
    rightSection?: DashboardComponentSection | null | undefined;
    runningUser?: string | null | undefined;
    textColor: string;
    title: string;
    titleColor: string;
    titleSize: number;
};
export declare type DashboardFilter = {
    dashboardFilterOptions: DashboardFilterOption[];
    name: string;
};
export declare type DashboardFilterOption = {
    operator: string;
    values: string[];
};
export declare type DashboardGridLayout = {
    dashboardGridComponents: DashboardGridComponent[];
    numberOfColumns: number;
    rowHeight: number;
};
export declare type DashboardGridComponent = {
    colSpan: number;
    columnIndex: number;
    dashboardComponent: DashboardComponent;
    rowIndex: number;
    rowSpan: number;
};
export declare type DashboardComponent = {
    autoselectColumnsFromReport?: boolean | null | undefined;
    chartAxisRange?: string | null | undefined;
    chartAxisRangeMax?: number | null | undefined;
    chartAxisRangeMin?: number | null | undefined;
    chartSummary: ChartSummary[];
    componentChartTheme?: string | null | undefined;
    componentType: string;
    dashboardFilterColumns: DashboardFilterColumn[];
    dashboardTableColumn: DashboardTableColumn[];
    decimalPrecision?: number | null | undefined;
    displayUnits?: string | null | undefined;
    drillDownUrl?: string | null | undefined;
    drillEnabled?: boolean | null | undefined;
    drillToDetailEnabled?: boolean | null | undefined;
    enableHover?: boolean | null | undefined;
    expandOthers?: boolean | null | undefined;
    flexComponentProperties?: DashboardFlexTableComponentProperties | null | undefined;
    footer?: string | null | undefined;
    gaugeMax?: number | null | undefined;
    gaugeMin?: number | null | undefined;
    groupingColumn: string[];
    groupingSortProperties?: DashboardComponentGroupingSortProperties | null | undefined;
    header?: string | null | undefined;
    indicatorBreakpoint1?: number | null | undefined;
    indicatorBreakpoint2?: number | null | undefined;
    indicatorHighColor?: string | null | undefined;
    indicatorLowColor?: string | null | undefined;
    indicatorMiddleColor?: string | null | undefined;
    legendPosition?: string | null | undefined;
    maxValuesDisplayed?: number | null | undefined;
    metricLabel?: string | null | undefined;
    page?: string | null | undefined;
    pageHeightInPixels?: number | null | undefined;
    report?: string | null | undefined;
    scontrol?: string | null | undefined;
    scontrolHeightInPixels?: number | null | undefined;
    showPercentage?: boolean | null | undefined;
    showPicturesOnCharts?: boolean | null | undefined;
    showPicturesOnTables?: boolean | null | undefined;
    showRange?: boolean | null | undefined;
    showTotal?: boolean | null | undefined;
    showValues?: boolean | null | undefined;
    sortBy?: string | null | undefined;
    title?: string | null | undefined;
    useReportChart?: boolean | null | undefined;
};
export declare type ChartSummary = {
    aggregate?: string | null | undefined;
    axisBinding?: string | null | undefined;
    column: string;
};
export declare type DashboardFilterColumn = {
    column: string;
};
export declare type DashboardTableColumn = {
    aggregateType?: string | null | undefined;
    calculatePercent?: boolean | null | undefined;
    column: string;
    decimalPlaces?: number | null | undefined;
    showSubTotal?: boolean | null | undefined;
    showTotal?: boolean | null | undefined;
    sortBy?: string | null | undefined;
};
export declare type DashboardFlexTableComponentProperties = {
    decimalPrecision?: number | null | undefined;
    flexTableColumn: DashboardComponentColumn[];
    flexTableSortInfo?: DashboardComponentSortInfo | null | undefined;
    hideChatterPhotos?: boolean | null | undefined;
};
export declare type DashboardComponentColumn = {
    breakPoint1?: number | null | undefined;
    breakPoint2?: number | null | undefined;
    breakPointOrder?: number | null | undefined;
    highRangeColor?: number | null | undefined;
    lowRangeColor?: number | null | undefined;
    midRangeColor?: number | null | undefined;
    reportColumn: string;
    showSubTotal?: boolean | null | undefined;
    showTotal?: boolean | null | undefined;
    type: string;
};
export declare type DashboardComponentSortInfo = {
    sortColumn?: string | null | undefined;
    sortOrder?: string | null | undefined;
};
export declare type DashboardComponentGroupingSortProperties = {
    groupingSorts: DashboardComponentGroupingSort[];
};
export declare type DashboardComponentGroupingSort = {
    groupingLevel: string;
    inheritedReportGroupingSort?: string | null | undefined;
    sortColumn?: string | null | undefined;
    sortOrder?: string | null | undefined;
};
export declare type DashboardComponentSection = {
    columnSize: string;
    components: DashboardComponent[];
};
export declare type DataCategoryGroup = Metadata & {
    active: boolean;
    dataCategory: DataCategory;
    description?: string | null | undefined;
    label: string;
    objectUsage?: ObjectUsage | null | undefined;
};
export declare type DataCategory = {
    dataCategory: DataCategory[];
    label: string;
    name: string;
};
export declare type ObjectUsage = {
    object: string[];
};
export declare type DataDotComSettings = Metadata & {
    enableAccountExportButtonOff?: boolean | null | undefined;
    enableAccountImportButtonOff?: boolean | null | undefined;
    enableAllowDupeContactFromLead?: boolean | null | undefined;
    enableAllowDupeLeadFromContact?: boolean | null | undefined;
    enableCleanUpgradeRequested?: boolean | null | undefined;
    enableContactExportButtonOff?: boolean | null | undefined;
    enableContactImportButtonOff?: boolean | null | undefined;
};
export declare type DelegateGroup = Metadata & {
    customObjects: string[];
    groups: string[];
    label: string;
    loginAccess: boolean;
    permissionSets: string[];
    profiles: string[];
    roles: string[];
};
export declare type DeploymentSettings = Metadata & {
    doesSkipAsyncApexValidation?: boolean | null | undefined;
};
export declare type DevHubSettings = Metadata & {
    enableShapeExportPref?: boolean | null | undefined;
};
export declare type DiscoverySettings = Metadata & {
    enableEinsteinAnswersPref?: boolean | null | undefined;
};
export declare type DocumentType = Metadata & {
    description: string;
    isActive: boolean;
    masterLabel: string;
};
export declare type DuplicateRule = Metadata & {
    actionOnInsert: string;
    actionOnUpdate: string;
    alertText?: string | null | undefined;
    description?: string | null | undefined;
    duplicateRuleFilter?: DuplicateRuleFilter | null | undefined;
    duplicateRuleMatchRules?: DuplicateRuleMatchRule[] | null | undefined;
    isActive: boolean;
    masterLabel: string;
    operationsOnInsert: string[];
    operationsOnUpdate: string[];
    securityOption: string;
    sortOrder: number;
};
export declare type DuplicateRuleFilter = {
    booleanFilter?: string | null | undefined;
    duplicateRuleFilterItems: DuplicateRuleFilterItem[];
};
export declare type DuplicateRuleMatchRule = {
    matchRuleSObjectType: string;
    matchingRule: string;
    objectMapping?: ObjectMapping | null | undefined;
};
export declare type ObjectMapping = {
    inputObject: string;
    mappingFields: ObjectMappingField[];
    outputObject: string;
};
export declare type ObjectMappingField = {
    inputField: string;
    outputField: string;
};
export declare type EACSettings = Metadata & {
    enableEACForEveryonePref?: boolean | null | undefined;
    enableInboxActivitySharing?: boolean | null | undefined;
    enableInsightsInTimeline?: boolean | null | undefined;
    enableInsightsInTimelineEacStd?: boolean | null | undefined;
};
export declare type EmailAdministrationSettings = Metadata & {
    enableComplianceBcc?: boolean | null | undefined;
    enableEmailConsentManagement?: boolean | null | undefined;
    enableEmailSenderIdCompliance?: boolean | null | undefined;
    enableEmailSpfCompliance?: boolean | null | undefined;
    enableEmailToSalesforce?: boolean | null | undefined;
    enableEmailWorkflowApproval?: boolean | null | undefined;
    enableEnhancedEmailEnabled?: boolean | null | undefined;
    enableHandleBouncedEmails?: boolean | null | undefined;
    enableHtmlEmail?: boolean | null | undefined;
    enableListEmailLogActivities?: boolean | null | undefined;
    enableResendBouncedEmails?: boolean | null | undefined;
    enableRestrictTlsToDomains?: boolean | null | undefined;
    enableSendThroughGmailPref?: boolean | null | undefined;
    enableSendViaExchangePref?: boolean | null | undefined;
    enableSendViaGmailPref?: boolean | null | undefined;
    enableSetMatchingEmailsOnBounce?: boolean | null | undefined;
    enableUseOrgFootersForExtTrans?: boolean | null | undefined;
    sendEmailsEvenWhenAutomationUpdatesSameRecord?: boolean | null | undefined;
    sendMassEmailNotification?: boolean | null | undefined;
    sendTextOnlySystemEmails?: boolean | null | undefined;
};
export declare type EmailIntegrationSettings = Metadata & {
    doesEmailLogAsEmailMessageInOutlook?: boolean | null | undefined;
    doesGmailStayConnectedToSalesforce?: boolean | null | undefined;
    enableContactAndEventSync?: boolean | null | undefined;
    enableEmailTrackingInMobile?: boolean | null | undefined;
    enableEngageForOutlook?: boolean | null | undefined;
    enableGmailIntegration?: boolean | null | undefined;
    enableOutlookIntegration?: boolean | null | undefined;
    enableProductivityFeatures?: boolean | null | undefined;
    enableSupplementalContactInfoInMobile?: boolean | null | undefined;
    isLayoutCustomizationAllowed?: boolean | null | undefined;
    shouldUseTrustedDomainsList?: boolean | null | undefined;
};
export declare type EmailServicesFunction = Metadata & {
    apexClass: string;
    attachmentOption: string;
    authenticationFailureAction: string;
    authorizationFailureAction: string;
    authorizedSenders?: string | null | undefined;
    emailServicesAddresses: EmailServicesAddress[];
    errorRoutingAddress?: string | null | undefined;
    functionInactiveAction: string;
    functionName: string;
    isActive?: boolean | null | undefined;
    isAuthenticationRequired?: boolean | null | undefined;
    isErrorRoutingEnabled?: boolean | null | undefined;
    isTextAttachmentsAsBinary?: boolean | null | undefined;
    isTlsRequired?: boolean | null | undefined;
    overLimitAction: string;
};
export declare type EmailServicesAddress = {
    authorizedSenders?: string | null | undefined;
    developerName: string;
    isActive?: boolean | null | undefined;
    localPart: string;
    runAsUser: string;
};
export declare type EmailTemplateSettings = Metadata & {
    enableLwcEmailTemplateBuilder?: boolean | null | undefined;
    enableTemplateEnhancedFolderPref?: boolean | null | undefined;
};
export declare type EmbeddedServiceBranding = Metadata & {
    contrastInvertedColor?: string | null | undefined;
    contrastPrimaryColor?: string | null | undefined;
    embeddedServiceConfig: string;
    font?: string | null | undefined;
    height?: number | null | undefined;
    masterLabel: string;
    navBarColor?: string | null | undefined;
    primaryColor?: string | null | undefined;
    secondaryColor?: string | null | undefined;
    width?: number | null | undefined;
};
export declare type EmbeddedServiceConfig = Metadata & {
    areGuestUsersAllowed?: boolean | null | undefined;
    authMethod?: string | null | undefined;
    embeddedServiceAppointmentSettings?: EmbeddedServiceAppointmentSettings | null | undefined;
    embeddedServiceCustomComponents: EmbeddedServiceCustomComponent[];
    embeddedServiceCustomLabels: EmbeddedServiceCustomLabel[];
    embeddedServiceFlowConfig?: EmbeddedServiceFlowConfig | null | undefined;
    embeddedServiceFlows: EmbeddedServiceFlow[];
    embeddedServiceLayouts: EmbeddedServiceLayout[];
    masterLabel: string;
    shouldHideAuthDialog?: boolean | null | undefined;
    site: string;
};
export declare type EmbeddedServiceAppointmentSettings = {
    appointmentConfirmImg?: string | null | undefined;
    enabled: boolean;
    homeImg?: string | null | undefined;
    logoImg?: string | null | undefined;
    shouldShowExistingAppointment?: boolean | null | undefined;
    shouldShowNewAppointment?: boolean | null | undefined;
};
export declare type EmbeddedServiceCustomComponent = {
    componentBundleType?: string | null | undefined;
    customComponent?: string | null | undefined;
    customComponentType?: string | null | undefined;
};
export declare type EmbeddedServiceCustomLabel = {
    customLabel?: string | null | undefined;
    feature?: string | null | undefined;
    labelKey?: string | null | undefined;
};
export declare type EmbeddedServiceFlowConfig = Metadata & {
    enabled: boolean;
};
export declare type EmbeddedServiceFlow = {
    flow: string;
    flowType: string;
    isAuthenticationRequired: boolean;
};
export declare type EmbeddedServiceLayout = {
    embeddedServiceLayoutRules: EmbeddedServiceLayoutRule[];
    layout: string;
    layoutType?: string | null | undefined;
};
export declare type EmbeddedServiceLayoutRule = {
    appointmentStatus: string;
};
export declare type EmbeddedServiceLiveAgent = Metadata & {
    avatarImg?: string | null | undefined;
    embeddedServiceConfig: string;
    embeddedServiceQuickActions: EmbeddedServiceQuickAction[];
    enabled: boolean;
    fontSize: string;
    headerBackgroundImg?: string | null | undefined;
    isOfflineCaseEnabled?: boolean | null | undefined;
    isQueuePositionEnabled?: boolean | null | undefined;
    liveAgentChatUrl?: string | null | undefined;
    liveAgentContentUrl?: string | null | undefined;
    liveChatButton: string;
    liveChatDeployment: string;
    masterLabel: string;
    offlineCaseBackgroundImg?: string | null | undefined;
    prechatBackgroundImg?: string | null | undefined;
    prechatEnabled: boolean;
    prechatJson?: string | null | undefined;
    scenario: string;
    smallCompanyLogoImg?: string | null | undefined;
    waitingStateBackgroundImg?: string | null | undefined;
};
export declare type EmbeddedServiceQuickAction = {
    embeddedServiceLiveAgent: string;
    order: number;
    quickActionDefinition: string;
    quickActionType?: string | null | undefined;
};
export declare type EmbeddedServiceMenuSettings = Metadata & {
    branding?: string | null | undefined;
    embeddedServiceMenuItems: EmbeddedServiceMenuItem[];
    isEnabled?: boolean | null | undefined;
    masterLabel?: string | null | undefined;
    site?: string | null | undefined;
};
export declare type EmbeddedServiceMenuItem = {
    channel?: string | null | undefined;
    channelType?: string | null | undefined;
    displayOrder?: number | null | undefined;
    phoneNumber?: string | null | undefined;
};
export declare type EncryptionKeySettings = Metadata & {
    canOptOutOfDerivationWithBYOK?: boolean | null | undefined;
    enableCacheOnlyKeys?: boolean | null | undefined;
    enableReplayDetection?: boolean | null | undefined;
};
export declare type EnhancedNotesSettings = Metadata & {
    enableEnhancedNotes?: boolean | null | undefined;
    enableTasksOnEnhancedNotes?: boolean | null | undefined;
};
export declare type EntitlementProcess = Metadata & {
    SObjectType?: string | null | undefined;
    active?: boolean | null | undefined;
    businessHours?: string | null | undefined;
    description?: string | null | undefined;
    entryStartDateField?: string | null | undefined;
    exitCriteriaBooleanFilter?: string | null | undefined;
    exitCriteriaFilterItems: FilterItem[];
    exitCriteriaFormula?: string | null | undefined;
    isRecordTypeApplied?: boolean | null | undefined;
    isVersionDefault?: boolean | null | undefined;
    milestones: EntitlementProcessMilestoneItem[];
    name?: string | null | undefined;
    recordType?: string | null | undefined;
    versionMaster?: string | null | undefined;
    versionNotes?: string | null | undefined;
    versionNumber?: number | null | undefined;
};
export declare type EntitlementProcessMilestoneItem = {
    businessHours?: string | null | undefined;
    criteriaBooleanFilter?: string | null | undefined;
    milestoneCriteriaFilterItems: FilterItem[];
    milestoneCriteriaFormula?: string | null | undefined;
    milestoneName?: string | null | undefined;
    minutesCustomClass?: string | null | undefined;
    minutesToComplete?: number | null | undefined;
    successActions: WorkflowActionReference[];
    timeTriggers: EntitlementProcessMilestoneTimeTrigger[];
    useCriteriaStartTime?: boolean | null | undefined;
};
export declare type EntitlementProcessMilestoneTimeTrigger = {
    actions: WorkflowActionReference[];
    timeLength?: number | null | undefined;
    workflowTimeTriggerUnit: string;
};
export declare type EntitlementSettings = Metadata & {
    assetLookupLimitedToActiveEntitlementsOnAccount?: boolean | null | undefined;
    assetLookupLimitedToActiveEntitlementsOnContact?: boolean | null | undefined;
    assetLookupLimitedToSameAccount?: boolean | null | undefined;
    assetLookupLimitedToSameContact?: boolean | null | undefined;
    enableEntitlementVersioning: boolean;
    enableEntitlements: boolean;
    enableMilestoneFeedItem?: boolean | null | undefined;
    enableMilestoneStoppedTime?: boolean | null | undefined;
    entitlementLookupLimitedToActiveStatus?: boolean | null | undefined;
    entitlementLookupLimitedToSameAccount?: boolean | null | undefined;
    entitlementLookupLimitedToSameAsset?: boolean | null | undefined;
    entitlementLookupLimitedToSameContact?: boolean | null | undefined;
    ignoreMilestoneBusinessHours?: boolean | null | undefined;
};
export declare type EntitlementTemplate = Metadata & {
    businessHours?: string | null | undefined;
    casesPerEntitlement?: number | null | undefined;
    entitlementProcess?: string | null | undefined;
    isPerIncident?: boolean | null | undefined;
    term?: number | null | undefined;
    type?: string | null | undefined;
};
export declare type EntityImplements = Metadata & {
    fieldMap: FieldImplements[];
    interface?: string | null | undefined;
    isDefault?: boolean | null | undefined;
};
export declare type FieldImplements = {
    field?: string | null | undefined;
    interfaceField?: string | null | undefined;
};
export declare type EscalationRule = Metadata & {
    active?: boolean | null | undefined;
    ruleEntry: RuleEntry[];
};
export declare type EscalationRules = Metadata & {
    escalationRule: EscalationRule[];
};
export declare type EssentialsSettings = Metadata & {
    emailConnectorEnabled?: boolean | null | undefined;
    essentialsAppEnabled?: boolean | null | undefined;
};
export declare type EssentialsTrialOrgSettings = Metadata & {
    enableSampleDataDeleted?: boolean | null | undefined;
};
export declare type EventSettings = Metadata & {
    enableApexLimitEvents?: boolean | null | undefined;
    enableDeleteMonitoringData?: boolean | null | undefined;
    enableDynamicStreamingChannel?: boolean | null | undefined;
    enableEventLogWaveIntegration?: boolean | null | undefined;
    enableLoginForensics?: boolean | null | undefined;
    enableStreamingApi?: boolean | null | undefined;
    enableTerminateOldestSession?: boolean | null | undefined;
    enableTransactionSecurityPolicies?: boolean | null | undefined;
};
export declare type ExperienceBundleSettings = Metadata & {
    enableExperienceBundleMetadata?: boolean | null | undefined;
};
export declare type ExternalDataSource = Metadata & {
    authProvider?: string | null | undefined;
    certificate?: string | null | undefined;
    customConfiguration?: string | null | undefined;
    customHttpHeaders: CustomHttpHeader[];
    endpoint?: string | null | undefined;
    isWritable?: boolean | null | undefined;
    label: string;
    oauthRefreshToken?: string | null | undefined;
    oauthScope?: string | null | undefined;
    oauthToken?: string | null | undefined;
    password?: string | null | undefined;
    principalType: string;
    protocol: string;
    repository?: string | null | undefined;
    type: string;
    username?: string | null | undefined;
    version?: string | null | undefined;
};
export declare type CustomHttpHeader = {
    description?: string | null | undefined;
    headerFieldName: string;
    headerFieldValue: string;
    isActive?: boolean | null | undefined;
};
export declare type ExternalServiceRegistration = Metadata & {
    description?: string | null | undefined;
    label: string;
    namedCredential?: string | null | undefined;
    schema?: string | null | undefined;
    schemaType?: string | null | undefined;
    schemaUrl?: string | null | undefined;
    status: string;
};
export declare type ExternalServicesSettings = Metadata & {
    enableEnhancedExternalServices?: boolean | null | undefined;
};
export declare type FieldServiceSettings = Metadata & {
    capacityUsageCalcClassId?: string | null | undefined;
    doesAllowEditSaForCrew?: boolean | null | undefined;
    doesShareSaParentWoWithAr?: boolean | null | undefined;
    doesShareSaWithAr?: boolean | null | undefined;
    enableWorkOrders?: boolean | null | undefined;
    fieldServiceNotificationsOrgPref?: boolean | null | undefined;
    fieldServiceOrgPref?: boolean | null | undefined;
    isGeoCodeSyncEnabled?: boolean | null | undefined;
    isLocationHistoryEnabled?: boolean | null | undefined;
    serviceAppointmentsDueDateOffsetOrgValue?: number | null | undefined;
    workOrderLineItemSearchFields: string[];
    workOrderSearchFields: string[];
};
export declare type FileUploadAndDownloadSecuritySettings = Metadata & {
    dispositions: FileTypeDispositionAssignmentBean[];
    noHtmlUploadAsAttachment: boolean;
};
export declare type FileTypeDispositionAssignmentBean = {
    behavior: string;
    fileType: string;
    securityRiskFileType: boolean;
};
export declare type FilesConnectSettings = Metadata & {
    enableContentHubAllowed?: boolean | null | undefined;
    enableContentHubCvtLinksAllowed?: boolean | null | undefined;
    enableContentHubEOSearchLayout?: boolean | null | undefined;
};
export declare type FlexiPage = Metadata & {
    description?: string | null | undefined;
    flexiPageRegions: FlexiPageRegion[];
    masterLabel: string;
    parentFlexiPage?: string | null | undefined;
    platformActionlist?: PlatformActionList | null | undefined;
    quickActionList?: QuickActionList | null | undefined;
    sobjectType?: string | null | undefined;
    template: FlexiPageTemplateInstance;
    type: string;
};
export declare type FlexiPageRegion = {
    appendable?: string | null | undefined;
    componentInstances: ComponentInstance[];
    mode?: string | null | undefined;
    name: string;
    prependable?: string | null | undefined;
    replaceable?: string | null | undefined;
    type: string;
};
export declare type ComponentInstance = {
    componentInstanceProperties: ComponentInstanceProperty[];
    componentName: string;
    visibilityRule?: UiFormulaRule | null | undefined;
};
export declare type ComponentInstanceProperty = {
    name?: string | null | undefined;
    type?: string | null | undefined;
    value?: string | null | undefined;
};
export declare type UiFormulaRule = {
    booleanFilter?: string | null | undefined;
    criteria: UiFormulaCriterion[];
};
export declare type UiFormulaCriterion = {
    leftValue: string;
    operator: string;
    rightValue?: string | null | undefined;
};
export declare type PlatformActionList = Metadata & {
    actionListContext: string;
    platformActionListItems: PlatformActionListItem[];
    relatedSourceEntity?: string | null | undefined;
};
export declare type PlatformActionListItem = {
    actionName: string;
    actionType: string;
    sortOrder: number;
    subtype?: string | null | undefined;
};
export declare type QuickActionList = {
    quickActionListItems: QuickActionListItem[];
};
export declare type QuickActionListItem = {
    quickActionName: string;
};
export declare type FlexiPageTemplateInstance = {
    name: string;
    properties: ComponentInstanceProperty[];
};
export declare type Flow = Metadata & {
    actionCalls: FlowActionCall[];
    apexPluginCalls: FlowApexPluginCall[];
    assignments: FlowAssignment[];
    choices: FlowChoice[];
    constants: FlowConstant[];
    decisions: FlowDecision[];
    description?: string | null | undefined;
    dynamicChoiceSets: FlowDynamicChoiceSet[];
    formulas: FlowFormula[];
    interviewLabel?: string | null | undefined;
    isAdditionalPermissionRequiredToRun?: boolean | null | undefined;
    isTemplate?: boolean | null | undefined;
    label: string;
    loops: FlowLoop[];
    processMetadataValues: FlowMetadataValue[];
    processType?: string | null | undefined;
    recordCreates: FlowRecordCreate[];
    recordDeletes: FlowRecordDelete[];
    recordLookups: FlowRecordLookup[];
    recordUpdates: FlowRecordUpdate[];
    screens: FlowScreen[];
    stages: FlowStage[];
    start?: FlowStart | null | undefined;
    startElementReference?: string | null | undefined;
    status?: string | null | undefined;
    steps: FlowStep[];
    subflows: FlowSubflow[];
    textTemplates: FlowTextTemplate[];
    variables: FlowVariable[];
    waits: FlowWait[];
};
export declare type FlowActionCall = FlowNode & {
    actionName: string;
    actionType: string;
    connector?: FlowConnector | null | undefined;
    faultConnector?: FlowConnector | null | undefined;
    inputParameters: FlowActionCallInputParameter[];
    outputParameters: FlowActionCallOutputParameter[];
};
export declare type FlowNode = FlowElement & {
    label?: string | null | undefined;
    locationX: number;
    locationY: number;
};
export declare type FlowElement = FlowBaseElement & {
    description?: string | null | undefined;
    name?: string | null | undefined;
};
export declare type FlowBaseElement = {
    processMetadataValues: FlowMetadataValue[];
};
export declare type FlowMetadataValue = {
    name: string;
    value?: FlowElementReferenceOrValue | null | undefined;
};
export declare type FlowElementReferenceOrValue = {
    booleanValue?: boolean | null | undefined;
    dateTimeValue?: string | null | undefined;
    dateValue?: string | null | undefined;
    elementReference?: string | null | undefined;
    numberValue?: number | null | undefined;
    stringValue?: string | null | undefined;
};
export declare type FlowActionCallInputParameter = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue | null | undefined;
};
export declare type FlowActionCallOutputParameter = FlowBaseElement & {
    assignToReference: string;
    name: string;
};
export declare type FlowApexPluginCallInputParameter = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue | null | undefined;
};
export declare type FlowApexPluginCallOutputParameter = FlowBaseElement & {
    assignToReference: string;
    name: string;
};
export declare type FlowAssignmentItem = FlowBaseElement & {
    assignToReference: string;
    operator: string;
    value?: FlowElementReferenceOrValue | null | undefined;
};
export declare type FlowChoiceUserInput = FlowBaseElement & {
    isRequired?: boolean | null | undefined;
    promptText?: string | null | undefined;
    validationRule?: FlowInputValidationRule | null | undefined;
};
export declare type FlowInputValidationRule = {
    errorMessage: string;
    formulaExpression: string;
};
export declare type FlowCondition = FlowBaseElement & {
    leftValueReference: string;
    operator: string;
    rightValue?: FlowElementReferenceOrValue | null | undefined;
};
export declare type FlowConnector = FlowBaseElement & {
    targetReference: string;
};
export declare type FlowInputFieldAssignment = FlowBaseElement & {
    field: string;
    value?: FlowElementReferenceOrValue | null | undefined;
};
export declare type FlowOutputFieldAssignment = FlowBaseElement & {
    assignToReference: string;
    field: string;
};
export declare type FlowRecordFilter = FlowBaseElement & {
    field: string;
    operator: string;
    value?: FlowElementReferenceOrValue | null | undefined;
};
export declare type FlowScreenFieldInputParameter = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue | null | undefined;
};
export declare type FlowScreenFieldOutputParameter = FlowBaseElement & {
    assignToReference: string;
    name: string;
};
export declare type FlowScreenRule = FlowBaseElement & {
    conditionLogic?: string | null | undefined;
    conditions: FlowCondition[];
    label: string;
    ruleActions: FlowScreenRuleAction[];
};
export declare type FlowScreenRuleAction = FlowBaseElement & {
    attribute: string;
    fieldReference: string;
    value?: FlowElementReferenceOrValue | null | undefined;
};
export declare type FlowSubflowInputAssignment = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue | null | undefined;
};
export declare type FlowSubflowOutputAssignment = FlowBaseElement & {
    assignToReference: string;
    name: string;
};
export declare type FlowVisibilityRule = FlowBaseElement & {
    conditionLogic?: string | null | undefined;
    conditions: FlowCondition[];
};
export declare type FlowWaitEventInputParameter = FlowBaseElement & {
    name: string;
    value?: FlowElementReferenceOrValue | null | undefined;
};
export declare type FlowWaitEventOutputParameter = FlowBaseElement & {
    assignToReference: string;
    name: string;
};
export declare type FlowChoice = FlowElement & {
    choiceText: string;
    dataType: string;
    userInput?: FlowChoiceUserInput | null | undefined;
    value?: FlowElementReferenceOrValue | null | undefined;
};
export declare type FlowConstant = FlowElement & {
    dataType: string;
    value?: FlowElementReferenceOrValue | null | undefined;
};
export declare type FlowDynamicChoiceSet = FlowElement & {
    dataType: string;
    displayField: string;
    filters: FlowRecordFilter[];
    limit?: number | null | undefined;
    object: string;
    outputAssignments: FlowOutputFieldAssignment[];
    picklistField?: string | null | undefined;
    picklistObject?: string | null | undefined;
    sortField?: string | null | undefined;
    sortOrder?: string | null | undefined;
    valueField?: string | null | undefined;
};
export declare type FlowFormula = FlowElement & {
    dataType?: string | null | undefined;
    expression: string;
    scale?: number | null | undefined;
};
export declare type FlowRule = FlowElement & {
    conditionLogic: string;
    conditions: FlowCondition[];
    connector?: FlowConnector | null | undefined;
    label: string;
};
export declare type FlowScreenField = FlowElement & {
    choiceReferences: string[];
    dataType?: string | null | undefined;
    defaultSelectedChoiceReference?: string | null | undefined;
    defaultValue?: FlowElementReferenceOrValue | null | undefined;
    extensionName?: string | null | undefined;
    fieldText?: string | null | undefined;
    fieldType: string;
    helpText?: string | null | undefined;
    inputParameters: FlowScreenFieldInputParameter[];
    isRequired?: boolean | null | undefined;
    isVisible?: boolean | null | undefined;
    outputParameters: FlowScreenFieldOutputParameter[];
    scale?: number | null | undefined;
    storeOutputAutomatically?: boolean | null | undefined;
    validationRule?: FlowInputValidationRule | null | undefined;
    visibilityRule?: FlowVisibilityRule | null | undefined;
};
export declare type FlowStage = FlowElement & {
    isActive: boolean;
    label: string;
    stageOrder: number;
};
export declare type FlowTextTemplate = FlowElement & {
    text: string;
};
export declare type FlowVariable = FlowElement & {
    apexClass?: string | null | undefined;
    dataType: string;
    isCollection?: boolean | null | undefined;
    isInput?: boolean | null | undefined;
    isOutput?: boolean | null | undefined;
    objectType?: string | null | undefined;
    scale?: number | null | undefined;
    value?: FlowElementReferenceOrValue | null | undefined;
};
export declare type FlowWaitEvent = FlowElement & {
    conditionLogic?: string | null | undefined;
    conditions: FlowCondition[];
    connector: FlowConnector;
    eventType: string;
    inputParameters: FlowWaitEventInputParameter[];
    label: string;
    outputParameters: FlowWaitEventOutputParameter[];
};
export declare type FlowApexPluginCall = FlowNode & {
    apexClass: string;
    connector?: FlowConnector | null | undefined;
    faultConnector?: FlowConnector | null | undefined;
    inputParameters: FlowApexPluginCallInputParameter[];
    outputParameters: FlowApexPluginCallOutputParameter[];
};
export declare type FlowAssignment = FlowNode & {
    assignmentItems: FlowAssignmentItem[];
    connector?: FlowConnector | null | undefined;
};
export declare type FlowDecision = FlowNode & {
    defaultConnector?: FlowConnector | null | undefined;
    defaultConnectorLabel?: string | null | undefined;
    rules: FlowRule[];
};
export declare type FlowLoop = FlowNode & {
    assignNextValueToReference: string;
    collectionReference: string;
    iterationOrder?: string | null | undefined;
    nextValueConnector?: FlowConnector | null | undefined;
    noMoreValuesConnector?: FlowConnector | null | undefined;
};
export declare type FlowRecordCreate = FlowNode & {
    assignRecordIdToReference?: string | null | undefined;
    connector?: FlowConnector | null | undefined;
    faultConnector?: FlowConnector | null | undefined;
    inputAssignments: FlowInputFieldAssignment[];
    inputReference?: string | null | undefined;
    object?: string | null | undefined;
};
export declare type FlowRecordDelete = FlowNode & {
    connector?: FlowConnector | null | undefined;
    faultConnector?: FlowConnector | null | undefined;
    filters: FlowRecordFilter[];
    inputReference?: string | null | undefined;
    object?: string | null | undefined;
};
export declare type FlowRecordLookup = FlowNode & {
    assignNullValuesIfNoRecordsFound?: boolean | null | undefined;
    connector?: FlowConnector | null | undefined;
    faultConnector?: FlowConnector | null | undefined;
    filters: FlowRecordFilter[];
    getFirstRecordOnly?: boolean | null | undefined;
    object: string;
    outputAssignments: FlowOutputFieldAssignment[];
    outputReference?: string | null | undefined;
    queriedFields: string[];
    sortField?: string | null | undefined;
    sortOrder?: string | null | undefined;
    storeOutputAutomatically?: boolean | null | undefined;
};
export declare type FlowRecordUpdate = FlowNode & {
    connector?: FlowConnector | null | undefined;
    faultConnector?: FlowConnector | null | undefined;
    filters: FlowRecordFilter[];
    inputAssignments: FlowInputFieldAssignment[];
    inputReference?: string | null | undefined;
    object?: string | null | undefined;
};
export declare type FlowScreen = FlowNode & {
    allowBack?: boolean | null | undefined;
    allowFinish?: boolean | null | undefined;
    allowPause?: boolean | null | undefined;
    connector?: FlowConnector | null | undefined;
    fields: FlowScreenField[];
    helpText?: string | null | undefined;
    pausedText?: string | null | undefined;
    rules: FlowScreenRule[];
    showFooter?: boolean | null | undefined;
    showHeader?: boolean | null | undefined;
};
export declare type FlowStart = FlowNode & {
    connector?: FlowConnector | null | undefined;
    filters: FlowRecordFilter[];
    object?: string | null | undefined;
    schedule?: FlowSchedule | null | undefined;
    triggerType?: string | null | undefined;
};
export declare type FlowSchedule = {
    frequency?: string | null | undefined;
    startDate?: string | null | undefined;
    startTime?: string | null | undefined;
};
export declare type FlowStep = FlowNode & {
    connectors: FlowConnector[];
};
export declare type FlowSubflow = FlowNode & {
    connector?: FlowConnector | null | undefined;
    flowName: string;
    inputAssignments: FlowSubflowInputAssignment[];
    outputAssignments: FlowSubflowOutputAssignment[];
};
export declare type FlowWait = FlowNode & {
    defaultConnector?: FlowConnector | null | undefined;
    defaultConnectorLabel: string;
    faultConnector?: FlowConnector | null | undefined;
    waitEvents: FlowWaitEvent[];
};
export declare type FlowCategory = Metadata & {
    description?: string | null | undefined;
    flowCategoryItems: FlowCategoryItems[];
    masterLabel: string;
};
export declare type FlowCategoryItems = {
    flow: string;
};
export declare type FlowDefinition = Metadata & {
    activeVersionNumber?: number | null | undefined;
    description?: string | null | undefined;
    masterLabel?: string | null | undefined;
};
export declare type FlowSettings = Metadata & {
    enableFlowBREncodedFixEnabled?: boolean | null | undefined;
    enableFlowDeployAsActiveEnabled?: boolean | null | undefined;
    enableFlowFieldFilterEnabled?: boolean | null | undefined;
    enableFlowFormulasFixEnabled?: boolean | null | undefined;
    enableFlowInterviewSharingEnabled?: boolean | null | undefined;
    enableFlowNullPreviousValueFix?: boolean | null | undefined;
    enableFlowPauseEnabled?: boolean | null | undefined;
    enableFlowUseApexExceptionEmail?: boolean | null | undefined;
    enableInvocableFlowFixEnabled?: boolean | null | undefined;
    enableLightningRuntimeEnabled?: boolean | null | undefined;
    enableUseFlowBuilder?: boolean | null | undefined;
    isAccessToInvokedApexRequired?: boolean | null | undefined;
    isEnhancedFlowListViewVisible?: boolean | null | undefined;
    isManageFlowRequiredForAutomationCharts?: boolean | null | undefined;
};
export declare type Folder = Metadata & {
    accessType?: string | null | undefined;
    folderShares: FolderShare[];
    name: string;
    publicFolderAccess?: string | null | undefined;
    sharedTo?: SharedTo | null | undefined;
};
export declare type FolderShare = {
    accessLevel: string;
    sharedTo: string;
    sharedToType: string;
};
export declare type DashboardFolder = Folder & {};
export declare type DocumentFolder = Folder & {};
export declare type EmailFolder = Folder & {};
export declare type ReportFolder = Folder & {};
export declare type ForecastingSettings = Metadata & {
    defaultToPersonalCurrency?: boolean | null | undefined;
    enableForecasts?: boolean | null | undefined;
    forecastingCategoryMappings: ForecastingCategoryMapping[];
    forecastingDisplayedFamilySettings: ForecastingDisplayedFamilySettings[];
    forecastingTypeSettings: ForecastingTypeSettings[];
};
export declare type ForecastingCategoryMapping = {
    forecastingItemCategoryApiName: string;
    weightedSourceCategories: WeightedSourceCategory[];
};
export declare type WeightedSourceCategory = {
    sourceCategoryApiName: string;
    weight: number;
};
export declare type ForecastingDisplayedFamilySettings = {
    productFamily?: string | null | undefined;
};
export declare type ForecastingTypeSettings = {
    active: boolean;
    adjustmentsSettings: AdjustmentsSettings;
    displayedCategoryApiNames: string[];
    forecastRangeSettings: ForecastRangeSettings;
    forecastedCategoryApiNames: string[];
    forecastingDateType: string;
    hasProductFamily: boolean;
    isAmount: boolean;
    isAvailable: boolean;
    isQuantity: boolean;
    managerAdjustableCategoryApiNames: string[];
    masterLabel: string;
    name: string;
    opportunityListFieldsLabelMappings: OpportunityListFieldsLabelMapping[];
    opportunityListFieldsSelectedSettings: OpportunityListFieldsSelectedSettings;
    opportunityListFieldsUnselectedSettings: OpportunityListFieldsUnselectedSettings;
    opportunitySplitName?: string | null | undefined;
    ownerAdjustableCategoryApiNames: string[];
    quotasSettings: QuotasSettings;
    territory2ModelName?: string | null | undefined;
};
export declare type AdjustmentsSettings = {
    enableAdjustments: boolean;
    enableOwnerAdjustments: boolean;
};
export declare type ForecastRangeSettings = {
    beginning: number;
    displaying: number;
    periodType: string;
};
export declare type OpportunityListFieldsLabelMapping = {
    field: string;
    label: string;
};
export declare type OpportunityListFieldsSelectedSettings = {
    field: string[];
};
export declare type OpportunityListFieldsUnselectedSettings = {
    field: string[];
};
export declare type QuotasSettings = {
    showQuotas: boolean;
};
export declare type Form = Metadata & {
    description?: string | null | undefined;
    formSections: FormSection[];
    masterLabel: string;
};
export declare type FormSection = Metadata & {
    formColumns: FormColumn[];
    masterLabel: string;
    tabOrderType: string;
};
export declare type FormColumn = {
    formItems: FormItem[];
};
export declare type FormItem = {
    emptySpace?: boolean | null | undefined;
    expression?: string | null | undefined;
    formLayoutableItem?: string | null | undefined;
    helpText?: string | null | undefined;
};
export declare type FormulaSettings = Metadata & {
    enableDSTAwareDatevalue?: boolean | null | undefined;
};
export declare type GlobalValueSet = Metadata & {
    customValue: CustomValue[];
    description?: string | null | undefined;
    masterLabel: string;
    sorted: boolean;
};
export declare type GlobalValueSetTranslation = Metadata & {
    valueTranslation: ValueTranslation[];
};
export declare type ValueTranslation = {
    masterLabel: string;
    translation?: string | null | undefined;
};
export declare type GoogleAppsSettings = Metadata & {
    enableGmailButtons?: boolean | null | undefined;
    enableGmailButtonsAndLinks?: boolean | null | undefined;
    enableGmailLinks?: boolean | null | undefined;
    enableGoogleDocs?: boolean | null | undefined;
    enableGoogleDocsTab?: boolean | null | undefined;
    enableGoogleTalk?: boolean | null | undefined;
    googleAppsDomain?: string | null | undefined;
    googleAppsDomainLinked?: boolean | null | undefined;
    googleAppsDomainValidated?: boolean | null | undefined;
};
export declare type Group = Metadata & {
    doesIncludeBosses?: boolean | null | undefined;
    name: string;
};
export declare type HighVelocitySalesSettings = Metadata & {
    enableDispositionCategory?: boolean | null | undefined;
    enableEngagementWaveAnalyticsPref?: boolean | null | undefined;
    enableHighVelocitySales?: boolean | null | undefined;
    enableHighVelocitySalesSetup?: boolean | null | undefined;
};
export declare type HomePageComponent = Metadata & {
    body?: string | null | undefined;
    height?: number | null | undefined;
    links: string[];
    page?: string | null | undefined;
    pageComponentType: string;
    showLabel?: boolean | null | undefined;
    showScrollbars?: boolean | null | undefined;
    width?: string | null | undefined;
};
export declare type HomePageLayout = Metadata & {
    narrowComponents: string[];
    wideComponents: string[];
};
export declare type IdeasSettings = Metadata & {
    enableChatterProfile?: boolean | null | undefined;
    enableHtmlIdea?: boolean | null | undefined;
    enableIdeaMultipleCategory?: boolean | null | undefined;
    enableIdeaThemes?: boolean | null | undefined;
    enableIdeas?: boolean | null | undefined;
    enableIdeasControllerExtensions?: boolean | null | undefined;
    enableIdeasReputation?: boolean | null | undefined;
    halfLife?: number | null | undefined;
    ideasProfilePage?: string | null | undefined;
};
export declare type IndustriesManufacturingSettings = Metadata & {
    enableIndManufacturing?: boolean | null | undefined;
    enableIndustriesMfgAccountForecast?: boolean | null | undefined;
};
export declare type IndustriesSettings = Metadata & {
    allowMultipleProducersToWorkOnSamePolicy?: boolean | null | undefined;
    enableAccessToMasterListOfCoverageTypes?: boolean | null | undefined;
    enableBlockResourceAvailabilityOrgPref?: boolean | null | undefined;
    enableEventManagementOrgPref?: boolean | null | undefined;
    enableHCReferralScoring?: boolean | null | undefined;
    enableManyToManyRelationships?: boolean | null | undefined;
    enableMortgageRlaTotalsOrgPref?: boolean | null | undefined;
    enableMultiResourceOrgPref?: boolean | null | undefined;
    enableObjectDetection?: boolean | null | undefined;
    enableOverbookingOrgPref?: boolean | null | undefined;
    enableProviderSearchSyncOrgPref?: boolean | null | undefined;
    enableReferralScoring?: boolean | null | undefined;
    enableSentimentAnalysis?: boolean | null | undefined;
};
export declare type InstalledPackage = Metadata & {
    activateRSS: boolean;
    password?: string | null | undefined;
    versionNumber: string;
};
export declare type IntegrationHubSettings = Metadata & {
    canonicalName?: string | null | undefined;
    canonicalNameBindingChar?: string | null | undefined;
    description?: string | null | undefined;
    isEnabled?: boolean | null | undefined;
    isProtected?: boolean | null | undefined;
    masterLabel: string;
    setupData?: string | null | undefined;
    setupDefinition?: string | null | undefined;
    setupNamespace?: string | null | undefined;
    setupSimpleName: string;
    uUID?: string | null | undefined;
    version?: string | null | undefined;
    versionBuild?: number | null | undefined;
    versionMajor?: number | null | undefined;
    versionMinor?: number | null | undefined;
    versionSetUuid?: string | null | undefined;
};
export declare type IntegrationHubSettingsType = Metadata & {
    canonicalName?: string | null | undefined;
    canonicalNameBindingChar?: string | null | undefined;
    description?: string | null | undefined;
    isEnabled?: boolean | null | undefined;
    isProtected?: boolean | null | undefined;
    masterLabel: string;
    setupNamespace?: string | null | undefined;
    setupSimpleName: string;
    uUID?: string | null | undefined;
    version?: string | null | undefined;
    versionBuild?: number | null | undefined;
    versionMajor?: number | null | undefined;
    versionMinor?: number | null | undefined;
    versionSetUuid?: string | null | undefined;
};
export declare type InvocableActionSettings = Metadata & {
    isPartialSaveAllowed?: boolean | null | undefined;
};
export declare type IoTSettings = Metadata & {
    enableIoT?: boolean | null | undefined;
    enableIoTInsightsPilot?: boolean | null | undefined;
    enableIoTUsageEmail?: boolean | null | undefined;
};
export declare type IsvHammerSettings = Metadata & {
    enableIsvHammerSubIsOptedOut?: boolean | null | undefined;
};
export declare type KeywordList = Metadata & {
    description?: string | null | undefined;
    keywords: Keyword[];
    masterLabel: string;
};
export declare type Keyword = {
    keyword: string;
};
export declare type KnowledgeSettings = Metadata & {
    answers?: KnowledgeAnswerSettings | null | undefined;
    cases?: KnowledgeCaseSettings | null | undefined;
    defaultLanguage?: string | null | undefined;
    enableChatterQuestionKBDeflection?: boolean | null | undefined;
    enableCreateEditOnArticlesTab?: boolean | null | undefined;
    enableExternalMediaContent?: boolean | null | undefined;
    enableKnowledge?: boolean | null | undefined;
    enableKnowledgeArticleTextHighlights?: boolean | null | undefined;
    enableKnowledgeKeywordAutoComplete?: boolean | null | undefined;
    enableKnowledgeTitleAutoComplete?: boolean | null | undefined;
    enableLightningKbAutoLoadRichTextField?: boolean | null | undefined;
    enableLightningKnowledge?: boolean | null | undefined;
    languages?: KnowledgeLanguageSettings | null | undefined;
    showArticleSummariesCustomerPortal?: boolean | null | undefined;
    showArticleSummariesInternalApp?: boolean | null | undefined;
    showArticleSummariesPartnerPortal?: boolean | null | undefined;
    showValidationStatusField?: boolean | null | undefined;
    suggestedArticles?: KnowledgeSuggestedArticlesSettings | null | undefined;
};
export declare type KnowledgeAnswerSettings = {
    assignTo?: string | null | undefined;
    defaultArticleType?: string | null | undefined;
    enableArticleCreation?: boolean | null | undefined;
};
export declare type KnowledgeCaseSettings = {
    articlePDFCreationProfile?: string | null | undefined;
    articlePublicSharingCommunities?: KnowledgeCommunitiesSettings | null | undefined;
    articlePublicSharingSites?: KnowledgeSitesSettings | null | undefined;
    articlePublicSharingSitesChatterAnswers?: KnowledgeSitesSettings | null | undefined;
    assignTo?: string | null | undefined;
    customizationClass?: string | null | undefined;
    defaultContributionArticleType?: string | null | undefined;
    editor?: string | null | undefined;
    enableArticleCreation?: boolean | null | undefined;
    enableArticlePublicSharingSites?: boolean | null | undefined;
    enableCaseDataCategoryMapping?: boolean | null | undefined;
    useProfileForPDFCreation?: boolean | null | undefined;
};
export declare type KnowledgeCommunitiesSettings = {
    community: string[];
};
export declare type KnowledgeSitesSettings = {
    site: string[];
};
export declare type KnowledgeLanguageSettings = {
    language: KnowledgeLanguage[];
};
export declare type KnowledgeLanguage = {
    active?: boolean | null | undefined;
    defaultAssignee?: string | null | undefined;
    defaultAssigneeType?: string | null | undefined;
    defaultReviewer?: string | null | undefined;
    defaultReviewerType?: string | null | undefined;
    name: string;
};
export declare type KnowledgeSuggestedArticlesSettings = {
    caseFields?: KnowledgeCaseFieldsSettings | null | undefined;
    useSuggestedArticlesForCase?: boolean | null | undefined;
    workOrderFields?: KnowledgeWorkOrderFieldsSettings | null | undefined;
    workOrderLineItemFields?: KnowledgeWorkOrderLineItemFieldsSettings | null | undefined;
};
export declare type KnowledgeCaseFieldsSettings = {
    field: KnowledgeCaseField[];
};
export declare type KnowledgeCaseField = {
    name?: string | null | undefined;
};
export declare type KnowledgeWorkOrderFieldsSettings = {
    field: KnowledgeWorkOrderField[];
};
export declare type KnowledgeWorkOrderField = {
    name?: string | null | undefined;
};
export declare type KnowledgeWorkOrderLineItemFieldsSettings = {
    field: KnowledgeWorkOrderLineItemField[];
};
export declare type KnowledgeWorkOrderLineItemField = {
    name?: string | null | undefined;
};
export declare type LanguageSettings = Metadata & {
    enableCanadaIcuFormat?: boolean | null | undefined;
    enableEndUserLanguages?: boolean | null | undefined;
    enableICULocaleDateFormat?: boolean | null | undefined;
    enablePlatformLanguages?: boolean | null | undefined;
    enableTranslationWorkbench?: boolean | null | undefined;
    useLanguageFallback?: boolean | null | undefined;
};
export declare type Layout = Metadata & {
    customButtons: string[];
    customConsoleComponents?: CustomConsoleComponents | null | undefined;
    emailDefault?: boolean | null | undefined;
    excludeButtons: string[];
    feedLayout?: FeedLayout | null | undefined;
    headers: string[];
    layoutSections: LayoutSection[];
    miniLayout?: MiniLayout | null | undefined;
    multilineLayoutFields: string[];
    platformActionList?: PlatformActionList | null | undefined;
    quickActionList?: QuickActionList | null | undefined;
    relatedContent?: RelatedContent | null | undefined;
    relatedLists: RelatedListItem[];
    relatedObjects: string[];
    runAssignmentRulesDefault?: boolean | null | undefined;
    showEmailCheckbox?: boolean | null | undefined;
    showHighlightsPanel?: boolean | null | undefined;
    showInteractionLogPanel?: boolean | null | undefined;
    showKnowledgeComponent?: boolean | null | undefined;
    showRunAssignmentRulesCheckbox?: boolean | null | undefined;
    showSolutionSection?: boolean | null | undefined;
    showSubmitAndAttachButton?: boolean | null | undefined;
    summaryLayout?: SummaryLayout | null | undefined;
};
export declare type CustomConsoleComponents = {
    primaryTabComponents?: PrimaryTabComponents | null | undefined;
    subtabComponents?: SubtabComponents | null | undefined;
};
export declare type PrimaryTabComponents = {
    containers: Container[];
};
export declare type Container = {
    height?: number | null | undefined;
    isContainerAutoSizeEnabled: boolean;
    region: string;
    sidebarComponents: SidebarComponent[];
    style: string;
    unit: string;
    width?: number | null | undefined;
};
export declare type SidebarComponent = {
    componentType: string;
    createAction?: string | null | undefined;
    enableLinking?: boolean | null | undefined;
    height?: number | null | undefined;
    label?: string | null | undefined;
    lookup?: string | null | undefined;
    page?: string | null | undefined;
    relatedLists: RelatedList[];
    unit?: string | null | undefined;
    updateAction?: string | null | undefined;
    width?: number | null | undefined;
};
export declare type RelatedList = {
    hideOnDetail: boolean;
    name: string;
};
export declare type SubtabComponents = {
    containers: Container[];
};
export declare type FeedLayout = {
    autocollapsePublisher?: boolean | null | undefined;
    compactFeed?: boolean | null | undefined;
    feedFilterPosition?: string | null | undefined;
    feedFilters: FeedLayoutFilter[];
    fullWidthFeed?: boolean | null | undefined;
    hideSidebar?: boolean | null | undefined;
    highlightExternalFeedItems?: boolean | null | undefined;
    leftComponents: FeedLayoutComponent[];
    rightComponents: FeedLayoutComponent[];
    useInlineFiltersInConsole?: boolean | null | undefined;
};
export declare type FeedLayoutFilter = {
    feedFilterName?: string | null | undefined;
    feedFilterType: string;
    feedItemType?: string | null | undefined;
};
export declare type FeedLayoutComponent = {
    componentType: string;
    height?: number | null | undefined;
    page?: string | null | undefined;
};
export declare type LayoutSection = {
    customLabel?: boolean | null | undefined;
    detailHeading?: boolean | null | undefined;
    editHeading?: boolean | null | undefined;
    label?: string | null | undefined;
    layoutColumns: LayoutColumn[];
    style: string;
};
export declare type LayoutColumn = {
    layoutItems: LayoutItem[];
    reserved?: string | null | undefined;
};
export declare type LayoutItem = {
    analyticsCloudComponent?: AnalyticsCloudComponentLayoutItem | null | undefined;
    behavior?: string | null | undefined;
    canvas?: string | null | undefined;
    component?: string | null | undefined;
    customLink?: string | null | undefined;
    emptySpace?: boolean | null | undefined;
    field?: string | null | undefined;
    height?: number | null | undefined;
    page?: string | null | undefined;
    reportChartComponent?: ReportChartComponentLayoutItem | null | undefined;
    scontrol?: string | null | undefined;
    showLabel?: boolean | null | undefined;
    showScrollbars?: boolean | null | undefined;
    width?: string | null | undefined;
};
export declare type AnalyticsCloudComponentLayoutItem = {
    assetType: string;
    devName: string;
    error?: string | null | undefined;
    filter?: string | null | undefined;
    height?: number | null | undefined;
    hideOnError?: boolean | null | undefined;
    showHeader?: boolean | null | undefined;
    showSharing?: boolean | null | undefined;
    showTitle?: boolean | null | undefined;
    width?: string | null | undefined;
};
export declare type ReportChartComponentLayoutItem = {
    cacheData?: boolean | null | undefined;
    contextFilterableField?: string | null | undefined;
    error?: string | null | undefined;
    hideOnError?: boolean | null | undefined;
    includeContext?: boolean | null | undefined;
    reportName: string;
    showTitle?: boolean | null | undefined;
    size?: string | null | undefined;
};
export declare type MiniLayout = {
    fields: string[];
    relatedLists: RelatedListItem[];
};
export declare type RelatedListItem = {
    customButtons: string[];
    excludeButtons: string[];
    fields: string[];
    relatedList: string;
    sortField?: string | null | undefined;
    sortOrder?: string | null | undefined;
};
export declare type RelatedContent = {
    relatedContentItems: RelatedContentItem[];
};
export declare type RelatedContentItem = {
    layoutItem: LayoutItem;
};
export declare type SummaryLayout = {
    masterLabel: string;
    sizeX: number;
    sizeY?: number | null | undefined;
    sizeZ?: number | null | undefined;
    summaryLayoutItems: SummaryLayoutItem[];
    summaryLayoutStyle: string;
};
export declare type SummaryLayoutItem = {
    customLink?: string | null | undefined;
    field?: string | null | undefined;
    posX: number;
    posY?: number | null | undefined;
    posZ?: number | null | undefined;
};
export declare type LeadConfigSettings = Metadata & {
    doesEnableLeadConvertDefaultSubjectBlankTaskCreation?: boolean | null | undefined;
    doesHideOpportunityInConvertLeadWindow?: boolean | null | undefined;
    doesPreserveLeadStatus?: boolean | null | undefined;
    doesSelectNoOpportunityOnConvertLead?: boolean | null | undefined;
    doesTrackHistory?: boolean | null | undefined;
    enableConversionsOnMobile?: boolean | null | undefined;
    enableOrgWideMergeAndDelete?: boolean | null | undefined;
    shouldLeadConvertRequireValidation?: boolean | null | undefined;
};
export declare type LeadConvertSettings = Metadata & {
    allowOwnerChange?: boolean | null | undefined;
    objectMapping: ObjectMapping[];
    opportunityCreationOptions?: string | null | undefined;
};
export declare type Letterhead = Metadata & {
    available: boolean;
    backgroundColor: string;
    bodyColor: string;
    bottomLine: LetterheadLine;
    description?: string | null | undefined;
    footer: LetterheadHeaderFooter;
    header: LetterheadHeaderFooter;
    middleLine: LetterheadLine;
    name: string;
    topLine: LetterheadLine;
};
export declare type LetterheadLine = {
    color: string;
    height: number;
};
export declare type LetterheadHeaderFooter = {
    backgroundColor: string;
    height: number;
    horizontalAlignment?: string | null | undefined;
    logo?: string | null | undefined;
    verticalAlignment?: string | null | undefined;
};
export declare type LicenseDefinition = Metadata & {
    aggregationGroup: string;
    description?: string | null | undefined;
    isPublished: boolean;
    label: string;
    licensedCustomPermissions: LicensedCustomPermissions[];
    licensingAuthority: string;
    licensingAuthorityProvider: string;
    minPlatformVersion: number;
    origin: string;
    revision: number;
    trialLicenseDuration: number;
    trialLicenseQuantity: number;
};
export declare type LicensedCustomPermissions = {
    customPermission: string;
    licenseDefinition: string;
};
export declare type LightningBolt = Metadata & {
    category: string;
    lightningBoltFeatures: LightningBoltFeatures[];
    lightningBoltImages: LightningBoltImages[];
    lightningBoltItems: LightningBoltItems[];
    masterLabel: string;
    publisher: string;
    summary: string;
};
export declare type LightningBoltFeatures = {
    description?: string | null | undefined;
    order: number;
    title: string;
};
export declare type LightningBoltImages = {
    image: string;
    order: number;
};
export declare type LightningBoltItems = {
    name: string;
    type: string;
};
export declare type LightningComponentBundle = Metadata & {
    apiVersion?: number | null | undefined;
    description?: string | null | undefined;
    isExplicitImport?: boolean | null | undefined;
    isExposed?: boolean | null | undefined;
    lwcResources?: LwcResources | null | undefined;
    masterLabel?: string | null | undefined;
    runtimeNamespace?: string | null | undefined;
    targetConfigs?: string | null | undefined;
    targets?: Targets | null | undefined;
};
export declare type LwcResources = {
    lwcResource: LwcResource[];
};
export declare type LwcResource = {
    filePath: string;
    source: string;
};
export declare type Targets = {
    target: string[];
};
export declare type LightningExperienceSettings = Metadata & {
    enableAccessCheckCrucPref?: boolean | null | undefined;
    enableApiUserLtngOutAccessPref?: boolean | null | undefined;
    enableAuraCDNPref?: boolean | null | undefined;
    enableFeedbackInMobile?: boolean | null | undefined;
    enableIE11DeprecationMsgHidden?: boolean | null | undefined;
    enableIE11LEXCrucPref?: boolean | null | undefined;
    enableInAppTooltips?: boolean | null | undefined;
    enableLEXOnIpadEnabled?: boolean | null | undefined;
    enableLexEndUsersNoSwitching?: boolean | null | undefined;
    enableNavPersonalizationOptOut?: boolean | null | undefined;
    enableRemoveThemeBrandBanner?: boolean | null | undefined;
    enableS1BannerPref?: boolean | null | undefined;
    enableS1BrowserEnabled?: boolean | null | undefined;
    enableS1DesktopEnabled?: boolean | null | undefined;
    enableS1UiLoggingEnabled?: boolean | null | undefined;
    enableTryLightningOptOut?: boolean | null | undefined;
    enableUseS1AlohaDesktop?: boolean | null | undefined;
    enableUsersAreLightningOnly?: boolean | null | undefined;
};
export declare type LightningExperienceTheme = Metadata & {
    defaultBrandingSet: string;
    description?: string | null | undefined;
    masterLabel: string;
    shouldOverrideLoadingImage?: boolean | null | undefined;
};
export declare type LightningMessageChannel = Metadata & {
    description?: string | null | undefined;
    isExposed?: boolean | null | undefined;
    lightningMessageFields: LightningMessageField[];
    masterLabel: string;
};
export declare type LightningMessageField = {
    description?: string | null | undefined;
    fieldName: string;
};
export declare type LightningOnboardingConfig = Metadata & {
    collaborationGroup?: string | null | undefined;
    customQuestion: string;
    feedbackFormDaysFrequency: number;
    isCustom: boolean;
    masterLabel: string;
    sendFeedbackToSalesforce: boolean;
};
export declare type LiveAgentSettings = Metadata & {
    enableLiveAgent?: boolean | null | undefined;
    enableQuickTextEnabled?: boolean | null | undefined;
};
export declare type LiveChatAgentConfig = Metadata & {
    assignments?: AgentConfigAssignments | null | undefined;
    autoGreeting?: string | null | undefined;
    capacity?: number | null | undefined;
    criticalWaitTime?: number | null | undefined;
    customAgentName?: string | null | undefined;
    enableAgentFileTransfer?: boolean | null | undefined;
    enableAgentSneakPeek?: boolean | null | undefined;
    enableAssistanceFlag?: boolean | null | undefined;
    enableAutoAwayOnDecline?: boolean | null | undefined;
    enableAutoAwayOnPushTimeout?: boolean | null | undefined;
    enableChatConferencing?: boolean | null | undefined;
    enableChatMonitoring?: boolean | null | undefined;
    enableChatTransferToAgent?: boolean | null | undefined;
    enableChatTransferToButton?: boolean | null | undefined;
    enableChatTransferToSkill?: boolean | null | undefined;
    enableLogoutSound?: boolean | null | undefined;
    enableNotifications?: boolean | null | undefined;
    enableRequestSound?: boolean | null | undefined;
    enableSneakPeek?: boolean | null | undefined;
    enableVisitorBlocking?: boolean | null | undefined;
    enableWhisperMessage?: boolean | null | undefined;
    label: string;
    supervisorDefaultAgentStatusFilter?: string | null | undefined;
    supervisorDefaultButtonFilter?: string | null | undefined;
    supervisorDefaultSkillFilter?: string | null | undefined;
    supervisorSkills?: SupervisorAgentConfigSkills | null | undefined;
    transferableButtons?: AgentConfigButtons | null | undefined;
    transferableSkills?: AgentConfigSkills | null | undefined;
};
export declare type AgentConfigAssignments = {
    profiles?: AgentConfigProfileAssignments | null | undefined;
    users?: AgentConfigUserAssignments | null | undefined;
};
export declare type AgentConfigProfileAssignments = {
    profile: string[];
};
export declare type AgentConfigUserAssignments = {
    user: string[];
};
export declare type SupervisorAgentConfigSkills = {
    skill: string[];
};
export declare type AgentConfigButtons = {
    button: string[];
};
export declare type AgentConfigSkills = {
    skill: string[];
};
export declare type LiveChatButton = Metadata & {
    animation?: string | null | undefined;
    autoGreeting?: string | null | undefined;
    chasitorIdleTimeout?: number | null | undefined;
    chasitorIdleTimeoutWarning?: number | null | undefined;
    chatPage?: string | null | undefined;
    customAgentName?: string | null | undefined;
    deployments?: LiveChatButtonDeployments | null | undefined;
    enableQueue?: boolean | null | undefined;
    inviteEndPosition?: string | null | undefined;
    inviteImage?: string | null | undefined;
    inviteStartPosition?: string | null | undefined;
    isActive?: boolean | null | undefined;
    label: string;
    numberOfReroutingAttempts?: number | null | undefined;
    offlineImage?: string | null | undefined;
    onlineImage?: string | null | undefined;
    optionsCustomRoutingIsEnabled?: boolean | null | undefined;
    optionsHasChasitorIdleTimeout: boolean;
    optionsHasInviteAfterAccept?: boolean | null | undefined;
    optionsHasInviteAfterReject?: boolean | null | undefined;
    optionsHasRerouteDeclinedRequest?: boolean | null | undefined;
    optionsIsAutoAccept?: boolean | null | undefined;
    optionsIsInviteAutoRemove?: boolean | null | undefined;
    overallQueueLength?: number | null | undefined;
    perAgentQueueLength?: number | null | undefined;
    postChatPage?: string | null | undefined;
    postChatUrl?: string | null | undefined;
    preChatFormPage?: string | null | undefined;
    preChatFormUrl?: string | null | undefined;
    pushTimeOut?: number | null | undefined;
    routingType: string;
    site?: string | null | undefined;
    skills?: LiveChatButtonSkills | null | undefined;
    timeToRemoveInvite?: number | null | undefined;
    type: string;
    windowLanguage?: string | null | undefined;
};
export declare type LiveChatButtonDeployments = {
    deployment: string[];
};
export declare type LiveChatButtonSkills = {
    skill: string[];
};
export declare type LiveChatDeployment = Metadata & {
    brandingImage?: string | null | undefined;
    connectionTimeoutDuration?: number | null | undefined;
    connectionWarningDuration?: number | null | undefined;
    displayQueuePosition?: boolean | null | undefined;
    domainWhiteList?: LiveChatDeploymentDomainWhitelist | null | undefined;
    enablePrechatApi?: boolean | null | undefined;
    enableTranscriptSave?: boolean | null | undefined;
    label: string;
    mobileBrandingImage?: string | null | undefined;
    site?: string | null | undefined;
    windowTitle: string;
};
export declare type LiveChatDeploymentDomainWhitelist = {
    domain: string[];
};
export declare type LiveChatSensitiveDataRule = Metadata & {
    actionType: string;
    description?: string | null | undefined;
    enforceOn: number;
    isEnabled: boolean;
    pattern: string;
    priority: number;
    replacement?: string | null | undefined;
};
export declare type LiveMessageSettings = Metadata & {
    enableLiveMessage?: boolean | null | undefined;
};
export declare type MacroSettings = Metadata & {
    enableAdvancedSearch?: boolean | null | undefined;
    macrosInFolders?: boolean | null | undefined;
};
export declare type ManagedContentType = Metadata & {
    description?: string | null | undefined;
    developerName: string;
    managedContentNodeTypes: ManagedContentNodeType[];
    masterLabel: string;
};
export declare type ManagedContentNodeType = {
    helpText?: string | null | undefined;
    isLocalizable?: boolean | null | undefined;
    isRequired?: boolean | null | undefined;
    nodeLabel: string;
    nodeName: string;
    nodeType: string;
    placeholderText?: string | null | undefined;
};
export declare type ManagedTopic = Metadata & {
    managedTopicType: string;
    name: string;
    parentName: string;
    position: number;
    topicDescription: string;
};
export declare type ManagedTopics = Metadata & {
    managedTopic: ManagedTopic[];
};
export declare type SourceTrackingSettings = Metadata & {
    enableSourceTrackingSandboxes?: boolean | null | undefined;
};
export declare type MapsAndLocationSettings = Metadata & {
    enableAddressAutoComplete?: boolean | null | undefined;
    enableMapsAndLocation?: boolean | null | undefined;
};
export declare type MatchingRule = Metadata & {
    booleanFilter?: string | null | undefined;
    description?: string | null | undefined;
    label: string;
    matchingRuleItems: MatchingRuleItem[];
    ruleStatus: string;
};
export declare type MatchingRuleItem = {
    blankValueBehavior?: string | null | undefined;
    fieldName: string;
    matchingMethod: string;
};
export declare type MatchingRules = Metadata & {
    matchingRules: MatchingRule[];
};
export declare type MetadataWithContent = Metadata & {
    content?: string | null | undefined;
};
export declare type AccessControlPolicy = MetadataWithContent & {
    active: boolean;
    deploymentStatus: string;
    description?: string | null | undefined;
    masterLabel: string;
    targetEntity: string;
    version: number;
};
export declare type ApexClass = MetadataWithContent & {
    apiVersion: number;
    packageVersions: PackageVersion[];
    status: string;
};
export declare type ApexComponent = MetadataWithContent & {
    apiVersion?: number | null | undefined;
    description?: string | null | undefined;
    label: string;
    packageVersions: PackageVersion[];
};
export declare type ApexPage = MetadataWithContent & {
    apiVersion: number;
    availableInTouch?: boolean | null | undefined;
    confirmationTokenRequired?: boolean | null | undefined;
    description?: string | null | undefined;
    label: string;
    packageVersions: PackageVersion[];
};
export declare type ApexTrigger = MetadataWithContent & {
    apiVersion: number;
    packageVersions: PackageVersion[];
    status: string;
};
export declare type Certificate = MetadataWithContent & {
    caSigned: boolean;
    encryptedWithPlatformEncryption?: boolean | null | undefined;
    expirationDate?: string | null | undefined;
    keySize?: number | null | undefined;
    masterLabel: string;
    privateKeyExportable?: boolean | null | undefined;
};
export declare type ContentAsset = MetadataWithContent & {
    format?: string | null | undefined;
    isVisibleByExternalUsers?: boolean | null | undefined;
    language: string;
    masterLabel: string;
    originNetwork?: string | null | undefined;
    relationships?: ContentAssetRelationships | null | undefined;
    versions: ContentAssetVersions;
};
export declare type ContentAssetRelationships = {
    insightsApplication: ContentAssetLink[];
    network: ContentAssetLink[];
    organization?: ContentAssetLink | null | undefined;
    workspace: ContentAssetLink[];
};
export declare type ContentAssetLink = {
    access: string;
    isManagingWorkspace?: boolean | null | undefined;
    name?: string | null | undefined;
};
export declare type ContentAssetVersions = {
    version: ContentAssetVersion[];
};
export declare type ContentAssetVersion = {
    number: string;
    pathOnClient: string;
    zipEntry?: string | null | undefined;
};
export declare type Document = MetadataWithContent & {
    description?: string | null | undefined;
    internalUseOnly: boolean;
    keywords?: string | null | undefined;
    name?: string | null | undefined;
    public: boolean;
};
export declare type EclairGeoData = MetadataWithContent & {
    maps: EclairMap[];
    masterLabel: string;
};
export declare type EclairMap = {
    boundingBoxBottom?: number | null | undefined;
    boundingBoxLeft?: number | null | undefined;
    boundingBoxRight?: number | null | undefined;
    boundingBoxTop?: number | null | undefined;
    mapLabel?: string | null | undefined;
    mapName: string;
    projection: string;
};
export declare type EmailTemplate = MetadataWithContent & {
    apiVersion?: number | null | undefined;
    attachedDocuments: string[];
    attachments: Attachment[];
    available: boolean;
    description?: string | null | undefined;
    encodingKey: string;
    letterhead?: string | null | undefined;
    name: string;
    packageVersions: PackageVersion[];
    relatedEntityType?: string | null | undefined;
    style: string;
    subject?: string | null | undefined;
    textOnly?: string | null | undefined;
    type: string;
    uiType?: string | null | undefined;
};
export declare type Attachment = {
    content: string;
    name: string;
};
export declare type NetworkBranding = MetadataWithContent & {
    loginBackgroundImageUrl?: string | null | undefined;
    loginFooterText?: string | null | undefined;
    loginLogo?: string | null | undefined;
    loginLogoName?: string | null | undefined;
    loginPrimaryColor?: string | null | undefined;
    loginQuaternaryColor?: string | null | undefined;
    loginRightFrameUrl?: string | null | undefined;
    network?: string | null | undefined;
    pageFooter?: string | null | undefined;
    pageHeader?: string | null | undefined;
    primaryColor: string;
    primaryComplementColor: string;
    quaternaryColor: string;
    quaternaryComplementColor: string;
    secondaryColor: string;
    staticLogoImageUrl?: string | null | undefined;
    tertiaryColor: string;
    tertiaryComplementColor: string;
    zeronaryColor: string;
    zeronaryComplementColor: string;
};
export declare type Orchestration = MetadataWithContent & {
    context: string;
    masterLabel: string;
};
export declare type Scontrol = MetadataWithContent & {
    contentSource: string;
    description?: string | null | undefined;
    encodingKey: string;
    fileContent?: string | null | undefined;
    fileName?: string | null | undefined;
    name: string;
    supportsCaching: boolean;
};
export declare type SiteDotCom = MetadataWithContent & {
    label: string;
    siteType: string;
};
export declare type StaticResource = MetadataWithContent & {
    cacheControl: string;
    contentType: string;
    description?: string | null | undefined;
};
export declare type UiPlugin = MetadataWithContent & {
    description?: string | null | undefined;
    extensionPointIdentifier: string;
    isEnabled: boolean;
    language: string;
    masterLabel: string;
};
export declare type WaveDashboard = MetadataWithContent & {
    application: string;
    description?: string | null | undefined;
    masterLabel: string;
    templateAssetSourceName?: string | null | undefined;
};
export declare type WaveDataflow = MetadataWithContent & {
    dataflowType?: string | null | undefined;
    description?: string | null | undefined;
    masterLabel: string;
};
export declare type WaveLens = MetadataWithContent & {
    application: string;
    datasets: string[];
    description?: string | null | undefined;
    masterLabel: string;
    templateAssetSourceName?: string | null | undefined;
    visualizationType: string;
};
export declare type WaveRecipe = MetadataWithContent & {
    dataflow: string;
    masterLabel: string;
    securityPredicate?: string | null | undefined;
    targetDatasetAlias: string;
};
export declare type MilestoneType = Metadata & {
    description?: string | null | undefined;
    recurrenceType?: string | null | undefined;
};
export declare type MlDomain = Metadata & {
    description?: string | null | undefined;
    label: string;
    mlIntents: MlIntent[];
    mlSlotClasses: MlSlotClass[];
};
export declare type MobileApplicationDetail = Metadata & {
    applicationBinaryFile?: string | null | undefined;
    applicationBinaryFileName?: string | null | undefined;
    applicationBundleIdentifier?: string | null | undefined;
    applicationFileLength?: number | null | undefined;
    applicationIconFile?: string | null | undefined;
    applicationIconFileName?: string | null | undefined;
    applicationInstallUrl?: string | null | undefined;
    devicePlatform: string;
    deviceType?: string | null | undefined;
    minimumOsVersion?: string | null | undefined;
    privateApp?: boolean | null | undefined;
    version: string;
};
export declare type MobileSettings = Metadata & {
    dashboardMobile?: DashboardMobileSettings | null | undefined;
    enableImportContactFromDevice?: boolean | null | undefined;
    enableLightningOnMobile?: boolean | null | undefined;
    enableOfflineDraftsEnabled?: boolean | null | undefined;
    enablePopulateNameManuallyInToday?: boolean | null | undefined;
    enableS1EncryptedStoragePref2?: boolean | null | undefined;
    enableS1OfflinePref?: boolean | null | undefined;
};
export declare type DashboardMobileSettings = {
    enableDashboardIPadApp?: boolean | null | undefined;
};
export declare type ModerationRule = Metadata & {
    action: string;
    actionLimit?: number | null | undefined;
    active: boolean;
    description?: string | null | undefined;
    entitiesAndFields: ModeratedEntityField[];
    masterLabel: string;
    notifyLimit?: number | null | undefined;
    timePeriod?: string | null | undefined;
    type?: string | null | undefined;
    userCriteria: string[];
    userMessage?: string | null | undefined;
};
export declare type ModeratedEntityField = {
    entityName: string;
    fieldName?: string | null | undefined;
    keywordList?: string | null | undefined;
};
export declare type MyDomainSettings = Metadata & {
    canOnlyLoginWithMyDomainUrl?: boolean | null | undefined;
    doesApiLoginRequireOrgDomain?: boolean | null | undefined;
    enableNativeBrowserForAuthOnAndroid?: boolean | null | undefined;
    enableNativeBrowserForAuthOnIos?: boolean | null | undefined;
    useStabilizedMyDomainHostnames?: boolean | null | undefined;
    useStabilizedSandboxMyDomainHostnames?: boolean | null | undefined;
};
export declare type NameSettings = Metadata & {
    enableMiddleName?: boolean | null | undefined;
    enableNameSuffix?: boolean | null | undefined;
};
export declare type NamedCredential = Metadata & {
    allowMergeFieldsInBody?: boolean | null | undefined;
    allowMergeFieldsInHeader?: boolean | null | undefined;
    authProvider?: string | null | undefined;
    authTokenEndpointUrl?: string | null | undefined;
    awsAccessKey?: string | null | undefined;
    awsAccessSecret?: string | null | undefined;
    awsRegion?: string | null | undefined;
    awsService?: string | null | undefined;
    certificate?: string | null | undefined;
    endpoint?: string | null | undefined;
    generateAuthorizationHeader?: boolean | null | undefined;
    jwtAudience?: string | null | undefined;
    jwtFormulaSubject?: string | null | undefined;
    jwtIssuer?: string | null | undefined;
    jwtSigningCertificate?: string | null | undefined;
    jwtTextSubject?: string | null | undefined;
    jwtValidityPeriodSeconds?: number | null | undefined;
    label: string;
    oauthRefreshToken?: string | null | undefined;
    oauthScope?: string | null | undefined;
    oauthToken?: string | null | undefined;
    password?: string | null | undefined;
    principalType: string;
    privateConnection?: string | null | undefined;
    protocol: string;
    username?: string | null | undefined;
};
export declare type NavigationMenu = Metadata & {
    container: string;
    containerType: string;
    label: string;
    navigationMenuItem: NavigationMenuItem[];
};
export declare type Network = Metadata & {
    allowInternalUserLogin?: boolean | null | undefined;
    allowMembersToFlag?: boolean | null | undefined;
    allowedExtensions?: string | null | undefined;
    caseCommentEmailTemplate?: string | null | undefined;
    changePasswordTemplate: string;
    communityRoles?: CommunityRoles | null | undefined;
    description?: string | null | undefined;
    disableReputationRecordConversations?: boolean | null | undefined;
    emailFooterLogo?: string | null | undefined;
    emailFooterText?: string | null | undefined;
    emailSenderAddress: string;
    emailSenderName: string;
    enableCustomVFErrorPageOverrides?: boolean | null | undefined;
    enableDirectMessages?: boolean | null | undefined;
    enableGuestChatter?: boolean | null | undefined;
    enableGuestFileAccess?: boolean | null | undefined;
    enableGuestMemberVisibility?: boolean | null | undefined;
    enableInvitation?: boolean | null | undefined;
    enableKnowledgeable?: boolean | null | undefined;
    enableMemberVisibility?: boolean | null | undefined;
    enableNicknameDisplay?: boolean | null | undefined;
    enablePrivateMessages?: boolean | null | undefined;
    enableReputation?: boolean | null | undefined;
    enableShowAllNetworkSettings?: boolean | null | undefined;
    enableSiteAsContainer?: boolean | null | undefined;
    enableTalkingAboutStats?: boolean | null | undefined;
    enableTopicAssignmentRules?: boolean | null | undefined;
    enableTopicSuggestions?: boolean | null | undefined;
    enableUpDownVote?: boolean | null | undefined;
    feedChannel?: string | null | undefined;
    forgotPasswordTemplate: string;
    gatherCustomerSentimentData?: boolean | null | undefined;
    lockoutTemplate?: string | null | undefined;
    logoutUrl?: string | null | undefined;
    maxFileSizeKb?: number | null | undefined;
    navigationLinkSet?: NavigationLinkSet | null | undefined;
    networkMemberGroups?: NetworkMemberGroup | null | undefined;
    networkPageOverrides?: NetworkPageOverride | null | undefined;
    newSenderAddress?: string | null | undefined;
    picassoSite?: string | null | undefined;
    recommendationAudience?: RecommendationAudience | null | undefined;
    recommendationDefinition?: RecommendationDefinition | null | undefined;
    reputationLevels?: ReputationLevelDefinitions | null | undefined;
    reputationPointsRules?: ReputationPointsRules | null | undefined;
    selfRegProfile?: string | null | undefined;
    selfRegistration?: boolean | null | undefined;
    sendWelcomeEmail?: boolean | null | undefined;
    site: string;
    status: string;
    tabs: NetworkTabSet;
    urlPathPrefix?: string | null | undefined;
    verificationTemplate?: string | null | undefined;
    welcomeTemplate: string;
};
export declare type CommunityRoles = {
    customerUserRole?: string | null | undefined;
    employeeUserRole?: string | null | undefined;
    partnerUserRole?: string | null | undefined;
};
export declare type NetworkMemberGroup = {
    permissionSet: string[];
    profile: string[];
};
export declare type NetworkPageOverride = {
    changePasswordPageOverrideSetting?: string | null | undefined;
    forgotPasswordPageOverrideSetting?: string | null | undefined;
    homePageOverrideSetting?: string | null | undefined;
    loginPageOverrideSetting?: string | null | undefined;
    selfRegProfilePageOverrideSetting?: string | null | undefined;
};
export declare type RecommendationAudience = {
    recommendationAudienceDetails: RecommendationAudienceDetail[];
};
export declare type RecommendationAudienceDetail = {
    audienceCriteriaType?: string | null | undefined;
    audienceCriteriaValue?: string | null | undefined;
    setupName?: string | null | undefined;
};
export declare type RecommendationDefinition = {
    recommendationDefinitionDetails: RecommendationDefinitionDetail[];
};
export declare type RecommendationDefinitionDetail = {
    actionUrl?: string | null | undefined;
    description?: string | null | undefined;
    linkText?: string | null | undefined;
    scheduledRecommendations?: ScheduledRecommendation | null | undefined;
    setupName?: string | null | undefined;
    title?: string | null | undefined;
};
export declare type ScheduledRecommendation = {
    scheduledRecommendationDetails: ScheduledRecommendationDetail[];
};
export declare type ScheduledRecommendationDetail = {
    channel?: string | null | undefined;
    enabled?: boolean | null | undefined;
    rank?: number | null | undefined;
    recommendationAudience?: string | null | undefined;
};
export declare type ReputationLevelDefinitions = {
    level: ReputationLevel[];
};
export declare type ReputationLevel = {
    branding?: ReputationBranding | null | undefined;
    label?: string | null | undefined;
    lowerThreshold: number;
};
export declare type ReputationBranding = {
    smallImage?: string | null | undefined;
};
export declare type ReputationPointsRules = {
    pointsRule: ReputationPointsRule[];
};
export declare type ReputationPointsRule = {
    eventType: string;
    points: number;
};
export declare type NetworkTabSet = {
    customTab: string[];
    defaultTab: string;
    standardTab: string[];
};
export declare type NotificationsSettings = Metadata & {
    enableMobileAppPushNotifications?: boolean | null | undefined;
    enableNotifications?: boolean | null | undefined;
};
export declare type OauthCustomScope = Metadata & {
    description: string;
    developerName: string;
    isProtected?: boolean | null | undefined;
    isPublic?: boolean | null | undefined;
    masterLabel: string;
};
export declare type ObjectLinkingSettings = Metadata & {
    enableObjectLinking?: boolean | null | undefined;
};
export declare type OmniChannelSettings = Metadata & {
    enableOmniAutoLoginPrompt?: boolean | null | undefined;
    enableOmniChannel?: boolean | null | undefined;
    enableOmniSecondaryRoutingPriority?: boolean | null | undefined;
    enableOmniSkillsRouting?: boolean | null | undefined;
};
export declare type OpportunitySettings = Metadata & {
    autoActivateNewReminders?: boolean | null | undefined;
    customizableProductSchedulesEnabled?: boolean | null | undefined;
    doesAutoAddSplitOwnerAsOpportunityTeamMember?: boolean | null | undefined;
    doesEnforceStandardOpportunitySaveLogic?: boolean | null | undefined;
    enableFindSimilarOpportunities?: boolean | null | undefined;
    enableOpportunityFieldHistoryTracking?: boolean | null | undefined;
    enableOpportunityInsightsInMobile?: boolean | null | undefined;
    enableOpportunityTeam?: boolean | null | undefined;
    enableUpdateReminders?: boolean | null | undefined;
    findSimilarOppFilter?: FindSimilarOppFilter | null | undefined;
    promptToAddProducts?: boolean | null | undefined;
};
export declare type FindSimilarOppFilter = {
    similarOpportunitiesDisplayColumns: string[];
    similarOpportunitiesMatchFields: string[];
};
export declare type OrchestrationContext = Metadata & {
    datasets: OrchestrationContextDataset[];
    description?: string | null | undefined;
    events: OrchestrationContextEvent[];
    imageFile: string;
    imageScale: number;
    masterLabel: string;
    runtimeType: string;
    salesforceObject?: string | null | undefined;
    salesforceObjectPrimaryKey?: string | null | undefined;
};
export declare type OrchestrationContextDataset = {
    datasetType: string;
    orchestrationDataset: string;
};
export declare type OrchestrationContextEvent = {
    eventType: string;
    orchestrationEvent: string;
    platformEvent: string;
    platformEventPrimaryKey: string;
};
export declare type OrderManagementSettings = Metadata & {
    enableOrderManagement?: boolean | null | undefined;
};
export declare type OrderSettings = Metadata & {
    enableNegativeQuantity?: boolean | null | undefined;
    enableOrders?: boolean | null | undefined;
    enableReductionOrders?: boolean | null | undefined;
    enableZeroQuantity?: boolean | null | undefined;
};
export declare type OrgPreferenceSettings = Metadata & {
    preferences: OrganizationSettingsDetail[];
};
export declare type OrganizationSettingsDetail = {
    settingName: string;
    settingValue: boolean;
};
export declare type OrgSettings = Metadata & {
    enableCustomerSuccessPortal?: boolean | null | undefined;
    enableExtendedMailMerge?: boolean | null | undefined;
    enableIncludeContractStatus?: boolean | null | undefined;
    enableMakeDeploymentsMandatory?: boolean | null | undefined;
    enableManageSelfServiceUsers?: boolean | null | undefined;
    enableOrgFeedSentimentAnalysis?: boolean | null | undefined;
    enableRADeploymentAttributeOnly?: boolean | null | undefined;
    enableResetDivisionOnLogin?: boolean | null | undefined;
    saveMailMergeDocsAsSalesforceDocs?: boolean | null | undefined;
};
export declare type Package = Metadata & {
    apiAccessLevel?: string | null | undefined;
    description?: string | null | undefined;
    namespacePrefix?: string | null | undefined;
    objectPermissions: ProfileObjectPermissions[];
    packageType?: string | null | undefined;
    postInstallClass?: string | null | undefined;
    setupWeblink?: string | null | undefined;
    types: PackageTypeMembers[];
    uninstallClass?: string | null | undefined;
    version: string;
};
export declare type ProfileObjectPermissions = {
    allowCreate?: boolean | null | undefined;
    allowDelete?: boolean | null | undefined;
    allowEdit?: boolean | null | undefined;
    allowRead?: boolean | null | undefined;
    modifyAllRecords?: boolean | null | undefined;
    object: string;
    viewAllRecords?: boolean | null | undefined;
};
export declare type PackageTypeMembers = {
    members: string[];
    name: string;
};
export declare type PardotEinsteinSettings = Metadata & {
    enableCampaignInsight?: boolean | null | undefined;
    enableEngagementScore?: boolean | null | undefined;
};
export declare type PardotSettings = Metadata & {
    enableB2bmaAppEnabled?: boolean | null | undefined;
    enableEngagementHistoryDashboards?: boolean | null | undefined;
    enablePardotAppV1Enabled?: boolean | null | undefined;
    enablePardotEnabled?: boolean | null | undefined;
    enableProspectActivityDataset?: boolean | null | undefined;
};
export declare type PartyDataModelSettings = Metadata & {
    enableAutoSelectIndividualOnMerge?: boolean | null | undefined;
    enableConsentManagement?: boolean | null | undefined;
};
export declare type PathAssistant = Metadata & {
    active: boolean;
    entityName: string;
    fieldName: string;
    masterLabel: string;
    pathAssistantSteps: PathAssistantStep[];
    recordTypeName: string;
};
export declare type PathAssistantStep = {
    fieldNames: string[];
    info?: string | null | undefined;
    picklistValueName: string;
};
export declare type PathAssistantSettings = Metadata & {
    canOverrideAutoPathCollapseWithUserPref?: boolean | null | undefined;
    pathAssistantEnabled?: boolean | null | undefined;
};
export declare type PermissionSet = Metadata & {
    applicationVisibilities: PermissionSetApplicationVisibility[];
    classAccesses: PermissionSetApexClassAccess[];
    customMetadataTypeAccesses: PermissionSetCustomMetadataTypeAccess[];
    customPermissions: PermissionSetCustomPermissions[];
    description?: string | null | undefined;
    externalDataSourceAccesses: PermissionSetExternalDataSourceAccess[];
    fieldPermissions: PermissionSetFieldPermissions[];
    flowAccesses: PermissionSetFlowAccess[];
    hasActivationRequired?: boolean | null | undefined;
    label: string;
    license?: string | null | undefined;
    objectPermissions: PermissionSetObjectPermissions[];
    pageAccesses: PermissionSetApexPageAccess[];
    recordTypeVisibilities: PermissionSetRecordTypeVisibility[];
    tabSettings: PermissionSetTabSetting[];
    userPermissions: PermissionSetUserPermission[];
};
export declare type PermissionSetApplicationVisibility = {
    application: string;
    visible: boolean;
};
export declare type PermissionSetApexClassAccess = {
    apexClass: string;
    enabled: boolean;
};
export declare type PermissionSetCustomMetadataTypeAccess = {
    enabled: boolean;
    name: string;
};
export declare type PermissionSetCustomPermissions = {
    enabled: boolean;
    name: string;
};
export declare type PermissionSetExternalDataSourceAccess = {
    enabled: boolean;
    externalDataSource: string;
};
export declare type PermissionSetFieldPermissions = {
    editable: boolean;
    field: string;
    readable?: boolean | null | undefined;
};
export declare type PermissionSetFlowAccess = {
    enabled: boolean;
    flow: string;
};
export declare type PermissionSetObjectPermissions = {
    allowCreate: boolean;
    allowDelete: boolean;
    allowEdit: boolean;
    allowRead: boolean;
    modifyAllRecords: boolean;
    object: string;
    viewAllRecords: boolean;
};
export declare type PermissionSetApexPageAccess = {
    apexPage: string;
    enabled: boolean;
};
export declare type PermissionSetRecordTypeVisibility = {
    recordType: string;
    visible: boolean;
};
export declare type PermissionSetTabSetting = {
    tab: string;
    visibility: string;
};
export declare type PermissionSetUserPermission = {
    enabled: boolean;
    name: string;
};
export declare type MutingPermissionSet = PermissionSet & {
    label: string;
};
export declare type PermissionSetGroup = Metadata & {
    description?: string | null | undefined;
    label: string;
    mutingPermissionSets: string[];
    permissionSets: string[];
    status?: string | null | undefined;
};
export declare type PersonListSettings = Metadata & {
    enablePersonList: boolean;
};
export declare type PicklistSettings = Metadata & {
    isPicklistApiNameEditDisabled?: boolean | null | undefined;
};
export declare type PlatformCachePartition = Metadata & {
    description?: string | null | undefined;
    isDefaultPartition: boolean;
    masterLabel: string;
    platformCachePartitionTypes: PlatformCachePartitionType[];
};
export declare type PlatformCachePartitionType = {
    allocatedCapacity: number;
    allocatedPurchasedCapacity: number;
    allocatedTrialCapacity: number;
    cacheType: string;
};
export declare type PlatformEncryptionSettings = Metadata & {
    canEncryptManagedPackageFields?: boolean | null | undefined;
    enableDeterministicEncryption?: boolean | null | undefined;
    enableEncryptFieldHistory?: boolean | null | undefined;
    enableEventBusEncryption?: boolean | null | undefined;
    isMEKForEncryptionRequired?: boolean | null | undefined;
    isUseHighAssuranceKeysRequired?: boolean | null | undefined;
};
export declare type PlatformEventChannel = Metadata & {
    channelType: string;
    label: string;
};
export declare type PlatformEventChannelMember = Metadata & {
    eventChannel: string;
    selectedEntity: string;
};
export declare type Portal = Metadata & {
    active: boolean;
    admin?: string | null | undefined;
    defaultLanguage?: string | null | undefined;
    description?: string | null | undefined;
    emailSenderAddress: string;
    emailSenderName: string;
    enableSelfCloseCase?: boolean | null | undefined;
    footerDocument?: string | null | undefined;
    forgotPassTemplate?: string | null | undefined;
    headerDocument?: string | null | undefined;
    isSelfRegistrationActivated?: boolean | null | undefined;
    loginHeaderDocument?: string | null | undefined;
    logoDocument?: string | null | undefined;
    logoutUrl?: string | null | undefined;
    newCommentTemplate?: string | null | undefined;
    newPassTemplate?: string | null | undefined;
    newUserTemplate?: string | null | undefined;
    ownerNotifyTemplate?: string | null | undefined;
    selfRegNewUserUrl?: string | null | undefined;
    selfRegUserDefaultProfile?: string | null | undefined;
    selfRegUserDefaultRole?: string | null | undefined;
    selfRegUserTemplate?: string | null | undefined;
    showActionConfirmation?: boolean | null | undefined;
    stylesheetDocument?: string | null | undefined;
    type: string;
};
export declare type PostTemplate = Metadata & {
    default?: boolean | null | undefined;
    description?: string | null | undefined;
    fields: string[];
    label: string;
};
export declare type PresenceDeclineReason = Metadata & {
    label: string;
};
export declare type PresenceUserConfig = Metadata & {
    assignments?: PresenceConfigAssignments | null | undefined;
    capacity: number;
    declineReasons: string[];
    enableAutoAccept?: boolean | null | undefined;
    enableDecline?: boolean | null | undefined;
    enableDeclineReason?: boolean | null | undefined;
    enableDisconnectSound?: boolean | null | undefined;
    enableRequestSound?: boolean | null | undefined;
    label: string;
    presenceStatusOnDecline?: string | null | undefined;
    presenceStatusOnPushTimeout?: string | null | undefined;
};
export declare type PresenceConfigAssignments = {
    profiles?: PresenceConfigProfileAssignments | null | undefined;
    users?: PresenceConfigUserAssignments | null | undefined;
};
export declare type PresenceConfigProfileAssignments = {
    profile: string[];
};
export declare type PresenceConfigUserAssignments = {
    user: string[];
};
export declare type PrivacySettings = Metadata & {
    enableConsentAuditTrail?: boolean | null | undefined;
    enableConsentEventStream?: boolean | null | undefined;
    enableDefaultMetadataValues?: boolean | null | undefined;
};
export declare type PrivateConnection = Metadata & {
    description?: string | null | undefined;
    direction: string;
    externalConnectionProperties: ExternalConnectionProperty[];
    label: string;
    status: string;
    type: string;
};
export declare type ExternalConnectionProperty = {
    propertyName: string;
    propertyValue: string;
};
export declare type ProductSettings = Metadata & {
    enableCascadeActivateToRelatedPrices?: boolean | null | undefined;
    enableMySettings?: boolean | null | undefined;
    enableQuantitySchedule?: boolean | null | undefined;
    enableRevenueSchedule?: boolean | null | undefined;
};
export declare type Profile = Metadata & {
    applicationVisibilities: ProfileApplicationVisibility[];
    categoryGroupVisibilities: ProfileCategoryGroupVisibility[];
    classAccesses: ProfileApexClassAccess[];
    custom?: boolean | null | undefined;
    customMetadataTypeAccesses: ProfileCustomMetadataTypeAccess[];
    customPermissions: ProfileCustomPermissions[];
    description?: string | null | undefined;
    externalDataSourceAccesses: ProfileExternalDataSourceAccess[];
    fieldPermissions: ProfileFieldLevelSecurity[];
    flowAccesses: ProfileFlowAccess[];
    layoutAssignments: ProfileLayoutAssignment[];
    loginHours?: ProfileLoginHours | null | undefined;
    loginIpRanges: ProfileLoginIpRange[];
    objectPermissions: ProfileObjectPermissions[];
    pageAccesses: ProfileApexPageAccess[];
    profileActionOverrides: ProfileActionOverride[];
    recordTypeVisibilities: ProfileRecordTypeVisibility[];
    tabVisibilities: ProfileTabVisibility[];
    userLicense?: string | null | undefined;
    userPermissions: ProfileUserPermission[];
};
export declare type ProfileApplicationVisibility = {
    application: string;
    default: boolean;
    visible: boolean;
};
export declare type ProfileCategoryGroupVisibility = {
    dataCategories: string[];
    dataCategoryGroup: string;
    visibility: string;
};
export declare type ProfileApexClassAccess = {
    apexClass: string;
    enabled: boolean;
};
export declare type ProfileCustomMetadataTypeAccess = {
    enabled: boolean;
    name: string;
};
export declare type ProfileCustomPermissions = {
    enabled: boolean;
    name: string;
};
export declare type ProfileExternalDataSourceAccess = {
    enabled: boolean;
    externalDataSource: string;
};
export declare type ProfileFieldLevelSecurity = {
    editable: boolean;
    field: string;
    readable?: boolean | null | undefined;
};
export declare type ProfileFlowAccess = {
    enabled: boolean;
    flow: string;
};
export declare type ProfileLayoutAssignment = {
    layout: string;
    recordType?: string | null | undefined;
};
export declare type ProfileLoginHours = {
    fridayEnd?: string | null | undefined;
    fridayStart?: string | null | undefined;
    mondayEnd?: string | null | undefined;
    mondayStart?: string | null | undefined;
    saturdayEnd?: string | null | undefined;
    saturdayStart?: string | null | undefined;
    sundayEnd?: string | null | undefined;
    sundayStart?: string | null | undefined;
    thursdayEnd?: string | null | undefined;
    thursdayStart?: string | null | undefined;
    tuesdayEnd?: string | null | undefined;
    tuesdayStart?: string | null | undefined;
    wednesdayEnd?: string | null | undefined;
    wednesdayStart?: string | null | undefined;
};
export declare type ProfileLoginIpRange = {
    description?: string | null | undefined;
    endAddress: string;
    startAddress: string;
};
export declare type ProfileApexPageAccess = {
    apexPage: string;
    enabled: boolean;
};
export declare type ProfileRecordTypeVisibility = {
    default: boolean;
    personAccountDefault?: boolean | null | undefined;
    recordType: string;
    visible: boolean;
};
export declare type ProfileTabVisibility = {
    tab: string;
    visibility: string;
};
export declare type ProfileUserPermission = {
    enabled: boolean;
    name: string;
};
export declare type ProfilePasswordPolicy = Metadata & {
    forgotPasswordRedirect?: boolean | null | undefined;
    lockoutInterval: number;
    maxLoginAttempts: number;
    minimumPasswordLength: number;
    minimumPasswordLifetime?: boolean | null | undefined;
    obscure?: boolean | null | undefined;
    passwordComplexity: number;
    passwordExpiration: number;
    passwordHistory: number;
    passwordQuestion: number;
    profile: string;
};
export declare type ProfileSessionSetting = Metadata & {
    externalCommunityUserIdentityVerif: boolean;
    forceLogout: boolean;
    profile: string;
    requiredSessionLevel?: string | null | undefined;
    sessionPersistence: boolean;
    sessionTimeout: number;
    sessionTimeoutWarning: boolean;
};
export declare type Prompt = Metadata & {
    masterLabel: string;
    promptVersions: PromptVersion[];
};
export declare type PromptVersion = {
    actionButtonLabel?: string | null | undefined;
    actionButtonLink?: string | null | undefined;
    body: string;
    customApplication?: string | null | undefined;
    delayDays: number;
    description?: string | null | undefined;
    dismissButtonLabel?: string | null | undefined;
    displayPosition?: string | null | undefined;
    displayType: string;
    endDate?: string | null | undefined;
    header?: string | null | undefined;
    indexWithIsPublished?: string | null | undefined;
    indexWithoutIsPublished?: string | null | undefined;
    isPublished?: boolean | null | undefined;
    masterLabel: string;
    publishedByUser?: string | null | undefined;
    publishedDate?: string | null | undefined;
    shouldDisplayActionButton: boolean;
    startDate: string;
    targetAppDeveloperName: string;
    targetAppNamespacePrefix?: string | null | undefined;
    targetPageKey1: string;
    targetPageKey2?: string | null | undefined;
    targetPageType: string;
    timesToDisplay: number;
    title: string;
    uiFormulaRule?: UiFormulaRule | null | undefined;
    userAccess: string;
    versionNumber: number;
};
export declare type Queue = Metadata & {
    doesSendEmailToMembers?: boolean | null | undefined;
    email?: string | null | undefined;
    name: string;
    queueMembers?: QueueMembers | null | undefined;
    queueRoutingConfig?: string | null | undefined;
    queueSobject: QueueSobject[];
};
export declare type QueueMembers = {
    publicGroups?: PublicGroups | null | undefined;
    roleAndSubordinates?: RoleAndSubordinates | null | undefined;
    roleAndSubordinatesInternal?: RoleAndSubordinatesInternal | null | undefined;
    roles?: Roles | null | undefined;
    users?: Users | null | undefined;
};
export declare type PublicGroups = {
    publicGroup: string[];
};
export declare type RoleAndSubordinates = {
    roleAndSubordinate: string[];
};
export declare type RoleAndSubordinatesInternal = {
    roleAndSubordinateInternal: string[];
};
export declare type Roles = {
    role: string[];
};
export declare type Users = {
    user: string[];
};
export declare type QueueSobject = {
    sobjectType: string;
};
export declare type QueueRoutingConfig = Metadata & {
    capacityPercentage?: number | null | undefined;
    capacityWeight?: number | null | undefined;
    dropAdditionalSkillsTimeout?: number | null | undefined;
    isAttributeBased?: boolean | null | undefined;
    label: string;
    pushTimeout?: number | null | undefined;
    queueOverflowAssignee?: string | null | undefined;
    routingModel: string;
    routingPriority: number;
    userOverflowAssignee?: string | null | undefined;
};
export declare type QuickAction = Metadata & {
    canvas?: string | null | undefined;
    description?: string | null | undefined;
    fieldOverrides: FieldOverride[];
    flowDefinition?: string | null | undefined;
    height?: number | null | undefined;
    icon?: string | null | undefined;
    isProtected?: boolean | null | undefined;
    label?: string | null | undefined;
    lightningComponent?: string | null | undefined;
    mobExtDisplayMode?: string | null | undefined;
    optionsCreateFeedItem: boolean;
    page?: string | null | undefined;
    quickActionLayout?: QuickActionLayout | null | undefined;
    quickActionSendEmailOptions?: QuickActionSendEmailOptions | null | undefined;
    standardLabel?: string | null | undefined;
    successMessage?: string | null | undefined;
    targetObject?: string | null | undefined;
    targetParentField?: string | null | undefined;
    targetRecordType?: string | null | undefined;
    type: string;
    width?: number | null | undefined;
};
export declare type FieldOverride = {
    field: string;
    formula?: string | null | undefined;
    literalValue?: string | null | undefined;
};
export declare type QuickActionLayout = {
    layoutSectionStyle: string;
    quickActionLayoutColumns: QuickActionLayoutColumn[];
};
export declare type QuickActionLayoutColumn = {
    quickActionLayoutItems: QuickActionLayoutItem[];
};
export declare type QuickActionLayoutItem = {
    emptySpace?: boolean | null | undefined;
    field?: string | null | undefined;
    uiBehavior?: string | null | undefined;
};
export declare type QuickActionSendEmailOptions = {
    defaultEmailTemplateName?: string | null | undefined;
    ignoreDefaultEmailTemplateSubject: boolean;
};
export declare type QuoteSettings = Metadata & {
    enableQuote: boolean;
    enableQuotesWithoutOppEnabled?: boolean | null | undefined;
};
export declare type RecommendationStrategy = Metadata & {
    actionContext: StrategyAction[];
    contextRecordType?: string | null | undefined;
    description?: string | null | undefined;
    filter: StrategyNodeFilter[];
    if: StrategyNodeIf[];
    invocableAction: StrategyNodeInvocableAction[];
    isTemplate?: boolean | null | undefined;
    label: string;
    map: StrategyNodeMap[];
    mutuallyExclusive: StrategyNodeExclusive[];
    onBehalfOfExpression?: string | null | undefined;
    recommendationLimit: StrategyNodeRecommendationLimit[];
    recommendationLoad: StrategyNodeRecommendationLoad[];
    sort: StrategyNodeSort[];
    union: StrategyNodeUnion[];
};
export declare type StrategyAction = {
    action: string;
    argument: StrategyActionArg[];
    description?: string | null | undefined;
    label?: string | null | undefined;
    name: string;
    type: string;
};
export declare type StrategyActionArg = {
    name: string;
    value: string;
};
export declare type StrategyNodeFilter = StrategyNodeUnionBase & {
    expression: string;
};
export declare type StrategyNodeUnionBase = StrategyNodeBase & {
    limit?: number | null | undefined;
};
export declare type StrategyNodeBase = {
    childNode: string[];
    description?: string | null | undefined;
    label?: string | null | undefined;
    name: string;
};
export declare type StrategyNodeExclusive = StrategyNodeUnionBase & {};
export declare type StrategyNodeIf = StrategyNodeUnionBase & {
    childNodeExpression: IfExpression[];
    onlyFirstMatch?: boolean | null | undefined;
};
export declare type IfExpression = {
    childName: string;
    expression: string;
};
export declare type StrategyNodeInvocableAction = StrategyNodeUnionBase & {
    action: string;
    argument: StrategyNodeInvocableActionArg[];
    isGenerator: boolean;
    type: string;
};
export declare type StrategyNodeInvocableActionArg = {
    name: string;
    value: string;
};
export declare type StrategyNodeMap = StrategyNodeUnionBase & {
    mapExpression: MapExpression[];
};
export declare type MapExpression = {
    expression: string;
    name: string;
    type: string;
};
export declare type StrategyNodeRecommendationLimit = StrategyNodeUnionBase & {
    filterMode: string[];
    lookbackDuration?: number | null | undefined;
    maxRecommendationCount?: number | null | undefined;
};
export declare type StrategyNodeRecommendationLoad = StrategyNodeUnionBase & {
    condition: RecommendationLoadCondition[];
    conditionLogic?: string | null | undefined;
};
export declare type RecommendationLoadCondition = {
    field: string;
    operator: string;
    value: RecommendationConditionValue;
};
export declare type RecommendationConditionValue = {
    type: string;
    value?: string | null | undefined;
};
export declare type StrategyNodeSort = StrategyNodeUnionBase & {
    field: StrategyNodeSortField[];
};
export declare type StrategyNodeSortField = {
    name: string;
    nullsFirst?: boolean | null | undefined;
    order?: string | null | undefined;
};
export declare type StrategyNodeUnion = StrategyNodeUnionBase & {};
export declare type RecordActionDeployment = Metadata & {
    channelConfigurations: RecordActionDeploymentChannel[];
    deploymentContexts: RecordActionDeploymentContext[];
    hasGuidedActions?: boolean | null | undefined;
    hasRecommendations?: boolean | null | undefined;
    masterLabel: string;
    recommendation?: RecordActionRecommendation | null | undefined;
    selectableItems: RecordActionSelectableItem[];
};
export declare type RecordActionDeploymentChannel = {
    channel: string;
    channelItems: RecordActionDefaultItem[];
    isAutopopEnabled?: boolean | null | undefined;
};
export declare type RecordActionDefaultItem = {
    action: string;
    isMandatory?: boolean | null | undefined;
    isUiRemoveHidden?: boolean | null | undefined;
    pinned: string;
    position: number;
    type: string;
};
export declare type RecordActionDeploymentContext = {
    entityName: string;
    recommendationStrategy?: string | null | undefined;
};
export declare type RecordActionRecommendation = {
    defaultStrategy?: string | null | undefined;
    hasDescription: boolean;
    hasImage: boolean;
    hasRejectAction: boolean;
    hasTitle: boolean;
    maxDisplayRecommendations: number;
};
export declare type RecordActionSelectableItem = {
    action: string;
    type: string;
};
export declare type RecordPageSettings = Metadata & {
    enableActivityRelatedList?: boolean | null | undefined;
    enableFullRecordView?: boolean | null | undefined;
};
export declare type RemoteSiteSetting = Metadata & {
    description?: string | null | undefined;
    disableProtocolSecurity: boolean;
    isActive: boolean;
    url: string;
};
export declare type Report = Metadata & {
    aggregates: ReportAggregate[];
    block: Report[];
    blockInfo?: ReportBlockInfo | null | undefined;
    buckets: ReportBucketField[];
    chart?: ReportChart | null | undefined;
    colorRanges: ReportColorRange[];
    columns: ReportColumn[];
    crossFilters: ReportCrossFilter[];
    currency?: string | null | undefined;
    customDetailFormulas: ReportCustomDetailFormula[];
    dataCategoryFilters: ReportDataCategoryFilter[];
    description?: string | null | undefined;
    division?: string | null | undefined;
    filter?: ReportFilter | null | undefined;
    folderName?: string | null | undefined;
    format: string;
    formattingRules: ReportFormattingRule[];
    groupingsAcross: ReportGrouping[];
    groupingsDown: ReportGrouping[];
    historicalSelector?: ReportHistoricalSelector | null | undefined;
    name: string;
    numSubscriptions?: number | null | undefined;
    params: ReportParam[];
    reportType: string;
    roleHierarchyFilter?: string | null | undefined;
    rowLimit?: number | null | undefined;
    scope?: string | null | undefined;
    showCurrentDate?: boolean | null | undefined;
    showDetails?: boolean | null | undefined;
    showGrandTotal?: boolean | null | undefined;
    showSubTotals?: boolean | null | undefined;
    sortColumn?: string | null | undefined;
    sortOrder?: string | null | undefined;
    territoryHierarchyFilter?: string | null | undefined;
    timeFrameFilter?: ReportTimeFrameFilter | null | undefined;
    userFilter?: string | null | undefined;
};
export declare type ReportAggregate = {
    acrossGroupingContext?: string | null | undefined;
    calculatedFormula: string;
    datatype: string;
    description?: string | null | undefined;
    developerName: string;
    downGroupingContext?: string | null | undefined;
    isActive: boolean;
    isCrossBlock?: boolean | null | undefined;
    masterLabel: string;
    reportType?: string | null | undefined;
    scale?: number | null | undefined;
};
export declare type ReportBlockInfo = {
    aggregateReferences: ReportAggregateReference[];
    blockId: string;
    joinTable: string;
};
export declare type ReportAggregateReference = {
    aggregate: string;
};
export declare type ReportBucketField = {
    bucketType: string;
    developerName: string;
    masterLabel: string;
    nullTreatment?: string | null | undefined;
    otherBucketLabel?: string | null | undefined;
    sourceColumnName: string;
    useOther?: boolean | null | undefined;
    values: ReportBucketFieldValue[];
};
export declare type ReportBucketFieldValue = {
    sourceValues: ReportBucketFieldSourceValue[];
    value: string;
};
export declare type ReportBucketFieldSourceValue = {
    from?: string | null | undefined;
    sourceValue?: string | null | undefined;
    to?: string | null | undefined;
};
export declare type ReportChart = {
    backgroundColor1?: string | null | undefined;
    backgroundColor2?: string | null | undefined;
    backgroundFadeDir?: string | null | undefined;
    chartSummaries: ChartSummary[];
    chartType: string;
    enableHoverLabels?: boolean | null | undefined;
    expandOthers?: boolean | null | undefined;
    groupingColumn?: string | null | undefined;
    legendPosition?: string | null | undefined;
    location?: string | null | undefined;
    secondaryGroupingColumn?: string | null | undefined;
    showAxisLabels?: boolean | null | undefined;
    showPercentage?: boolean | null | undefined;
    showTotal?: boolean | null | undefined;
    showValues?: boolean | null | undefined;
    size?: string | null | undefined;
    summaryAxisManualRangeEnd?: number | null | undefined;
    summaryAxisManualRangeStart?: number | null | undefined;
    summaryAxisRange?: string | null | undefined;
    textColor?: string | null | undefined;
    textSize?: number | null | undefined;
    title?: string | null | undefined;
    titleColor?: string | null | undefined;
    titleSize?: number | null | undefined;
};
export declare type ReportColorRange = {
    aggregate?: string | null | undefined;
    columnName: string;
    highBreakpoint?: number | null | undefined;
    highColor: string;
    lowBreakpoint?: number | null | undefined;
    lowColor: string;
    midColor: string;
};
export declare type ReportColumn = {
    aggregateTypes: string[];
    field: string;
    reverseColors?: boolean | null | undefined;
    showChanges?: boolean | null | undefined;
};
export declare type ReportCrossFilter = {
    criteriaItems: ReportFilterItem[];
    operation: string;
    primaryTableColumn: string;
    relatedTable: string;
    relatedTableJoinColumn: string;
};
export declare type ReportFilterItem = {
    column: string;
    columnToColumn?: boolean | null | undefined;
    isUnlocked?: boolean | null | undefined;
    operator: string;
    snapshot?: string | null | undefined;
    value?: string | null | undefined;
};
export declare type ReportCustomDetailFormula = {
    calculatedFormula: string;
    dataType: string;
    description?: string | null | undefined;
    developerName: string;
    label: string;
    scale: number;
};
export declare type ReportDataCategoryFilter = {
    dataCategory: string;
    dataCategoryGroup: string;
    operator: string;
};
export declare type ReportFilter = {
    booleanFilter?: string | null | undefined;
    criteriaItems: ReportFilterItem[];
    language?: string | null | undefined;
};
export declare type ReportFormattingRule = {
    aggregate?: string | null | undefined;
    columnName: string;
    values: ReportFormattingRuleValue[];
};
export declare type ReportFormattingRuleValue = {
    backgroundColor?: string | null | undefined;
    rangeUpperBound?: number | null | undefined;
};
export declare type ReportGrouping = {
    aggregateType?: string | null | undefined;
    dateGranularity?: string | null | undefined;
    field: string;
    sortByName?: string | null | undefined;
    sortOrder: string;
    sortType?: string | null | undefined;
};
export declare type ReportHistoricalSelector = {
    snapshot: string[];
};
export declare type ReportParam = {
    name: string;
    value: string;
};
export declare type ReportTimeFrameFilter = {
    dateColumn: string;
    endDate?: string | null | undefined;
    interval: string;
    startDate?: string | null | undefined;
};
export declare type ReportType = Metadata & {
    autogenerated?: boolean | null | undefined;
    baseObject: string;
    category: string;
    deployed: boolean;
    description?: string | null | undefined;
    join?: ObjectRelationship | null | undefined;
    label: string;
    sections: ReportLayoutSection[];
};
export declare type ObjectRelationship = {
    join?: ObjectRelationship | null | undefined;
    outerJoin: boolean;
    relationship: string;
};
export declare type ReportLayoutSection = {
    columns: ReportTypeColumn[];
    masterLabel: string;
};
export declare type ReportTypeColumn = {
    checkedByDefault: boolean;
    displayNameOverride?: string | null | undefined;
    field: string;
    table: string;
};
export declare type RestrictionRule = Metadata & {
    active: boolean;
    description: string;
    enforcementType: string;
    masterLabel: string;
    recordFilter: string;
    targetEntity: string;
    userCriteria: string;
    version: number;
};
export declare type RetailExecutionSettings = Metadata & {
    enableRetailExecution?: boolean | null | undefined;
};
export declare type RoleOrTerritory = Metadata & {
    caseAccessLevel?: string | null | undefined;
    contactAccessLevel?: string | null | undefined;
    description?: string | null | undefined;
    mayForecastManagerShare?: boolean | null | undefined;
    name: string;
    opportunityAccessLevel?: string | null | undefined;
};
export declare type Role = RoleOrTerritory & {
    parentRole?: string | null | undefined;
};
export declare type Territory = RoleOrTerritory & {
    accountAccessLevel?: string | null | undefined;
    parentTerritory?: string | null | undefined;
};
export declare type SamlSsoConfig = Metadata & {
    attributeName?: string | null | undefined;
    attributeNameIdFormat?: string | null | undefined;
    decryptionCertificate?: string | null | undefined;
    errorUrl?: string | null | undefined;
    executionUserId?: string | null | undefined;
    identityLocation: string;
    identityMapping: string;
    issuer: string;
    loginUrl?: string | null | undefined;
    logoutUrl?: string | null | undefined;
    name: string;
    oauthTokenEndpoint?: string | null | undefined;
    redirectBinding?: boolean | null | undefined;
    requestSignatureMethod?: string | null | undefined;
    requestSigningCertId?: string | null | undefined;
    salesforceLoginUrl?: string | null | undefined;
    samlEntityId: string;
    samlJitHandlerId?: string | null | undefined;
    samlVersion: string;
    singleLogoutBinding?: string | null | undefined;
    singleLogoutUrl?: string | null | undefined;
    userProvisioning?: boolean | null | undefined;
    validationCert: string;
};
export declare type SchemaSettings = Metadata & {
    enableAdvancedCMTSecurity?: boolean | null | undefined;
    enableAdvancedCSSecurity?: boolean | null | undefined;
    enableListCustomSettingCreation?: boolean | null | undefined;
    enableSOSLOnCustomSettings?: boolean | null | undefined;
};
export declare type SearchSettings = Metadata & {
    documentContentSearchEnabled: boolean;
    enableAdvancedSearchInAlohaSidebar?: boolean | null | undefined;
    enableEinsteinSearchPersonalization?: boolean | null | undefined;
    enableQuerySuggestionPigOn?: boolean | null | undefined;
    enableSalesforceGeneratedSynonyms?: boolean | null | undefined;
    enableSetupSearch?: boolean | null | undefined;
    optimizeSearchForCJKEnabled: boolean;
    recentlyViewedUsersForBlankLookupEnabled: boolean;
    searchSettingsByObject: SearchSettingsByObject;
    sidebarAutoCompleteEnabled: boolean;
    sidebarDropDownListEnabled: boolean;
    sidebarLimitToItemsIOwnCheckboxEnabled: boolean;
    singleSearchResultShortcutEnabled: boolean;
    spellCorrectKnowledgeSearchEnabled: boolean;
};
export declare type SearchSettingsByObject = {
    searchSettingsByObject: ObjectSearchSetting[];
};
export declare type ObjectSearchSetting = {
    enhancedLookupEnabled: boolean;
    lookupAutoCompleteEnabled: boolean;
    name: string;
    resultsPerPageCount: number;
};
export declare type SecuritySettings = Metadata & {
    canUsersGrantLoginAccess?: boolean | null | undefined;
    enableAdminLoginAsAnyUser?: boolean | null | undefined;
    enableAuditFieldsInactiveOwner?: boolean | null | undefined;
    enableAuraSecureEvalPref?: boolean | null | undefined;
    enableRequireHttpsConnection?: boolean | null | undefined;
    isTLSv12Required?: boolean | null | undefined;
    isTLSv12RequiredCommunities?: boolean | null | undefined;
    networkAccess?: NetworkAccess | null | undefined;
    passwordPolicies?: PasswordPolicies | null | undefined;
    sessionSettings?: SessionSettings | null | undefined;
    singleSignOnSettings?: SingleSignOnSettings | null | undefined;
};
export declare type NetworkAccess = {
    ipRanges: IpRange[];
};
export declare type IpRange = {
    description?: string | null | undefined;
    end?: string | null | undefined;
    start?: string | null | undefined;
};
export declare type PasswordPolicies = {
    apiOnlyUserHomePageURL?: string | null | undefined;
    complexity?: string | null | undefined;
    enableSetPasswordInApi?: boolean | null | undefined;
    expiration?: string | null | undefined;
    historyRestriction?: string | null | undefined;
    lockoutInterval?: string | null | undefined;
    maxLoginAttempts?: string | null | undefined;
    minimumPasswordLength?: string | null | undefined;
    minimumPasswordLifetime?: boolean | null | undefined;
    obscureSecretAnswer?: boolean | null | undefined;
    passwordAssistanceMessage?: string | null | undefined;
    passwordAssistanceURL?: string | null | undefined;
    questionRestriction?: string | null | undefined;
};
export declare type SessionSettings = {
    allowUserAuthenticationByCertificate?: boolean | null | undefined;
    canConfirmEmailChangeInLightningCommunities?: boolean | null | undefined;
    disableTimeoutWarning?: boolean | null | undefined;
    enableCSPOnEmail?: boolean | null | undefined;
    enableCSRFOnGet?: boolean | null | undefined;
    enableCSRFOnPost?: boolean | null | undefined;
    enableCacheAndAutocomplete?: boolean | null | undefined;
    enableClickjackNonsetupSFDC?: boolean | null | undefined;
    enableClickjackNonsetupUser?: boolean | null | undefined;
    enableClickjackNonsetupUserHeaderless?: boolean | null | undefined;
    enableClickjackSetup?: boolean | null | undefined;
    enableContentSniffingProtection?: boolean | null | undefined;
    enableLightningLogin?: boolean | null | undefined;
    enableLightningLoginOnlyWithUserPerm?: boolean | null | undefined;
    enablePostForSessions?: boolean | null | undefined;
    enableSMSIdentity?: boolean | null | undefined;
    enableU2F?: boolean | null | undefined;
    enableUpgradeInsecureRequests?: boolean | null | undefined;
    enableXssProtection?: boolean | null | undefined;
    enforceIpRangesEveryRequest?: boolean | null | undefined;
    forceLogoutOnSessionTimeout?: boolean | null | undefined;
    forceRelogin?: boolean | null | undefined;
    hasRetainedLoginHints?: boolean | null | undefined;
    hasUserSwitching?: boolean | null | undefined;
    hstsOnForcecomSites?: boolean | null | undefined;
    identityConfirmationOnEmailChange?: boolean | null | undefined;
    identityConfirmationOnTwoFactorRegistrationEnabled?: boolean | null | undefined;
    lockSessionsToDomain?: boolean | null | undefined;
    lockSessionsToIp?: boolean | null | undefined;
    lockerServiceAPIVersion?: string | null | undefined;
    lockerServiceCSP?: boolean | null | undefined;
    lockerServiceFrozenRealm?: boolean | null | undefined;
    logoutURL?: string | null | undefined;
    redirectionWarning?: boolean | null | undefined;
    referrerPolicy?: boolean | null | undefined;
    requireHttpOnly?: boolean | null | undefined;
    requireHttps?: boolean | null | undefined;
    securityCentralKillSession?: boolean | null | undefined;
    sessionTimeout?: string | null | undefined;
};
export declare type SingleSignOnSettings = {
    enableForceDelegatedCallout?: boolean | null | undefined;
    enableMultipleSamlConfigs?: boolean | null | undefined;
    enableSamlJitProvisioning?: boolean | null | undefined;
    enableSamlLogin?: boolean | null | undefined;
};
export declare type ServiceChannel = Metadata & {
    interactionComponent?: string | null | undefined;
    label: string;
    relatedEntityType: string;
    secondaryRoutingPriorityField?: string | null | undefined;
    serviceChannelFieldPriorities: ServiceChannelFieldPriority[];
};
export declare type ServiceChannelFieldPriority = {
    priority: number;
    value: string;
};
export declare type ServicePresenceStatus = Metadata & {
    channels?: ServiceChannelStatus | null | undefined;
    label: string;
};
export declare type ServiceChannelStatus = {
    channel: string[];
};
export declare type SharingBaseRule = Metadata & {
    accessLevel: string;
    accountSettings?: AccountSharingRuleSettings | null | undefined;
    description?: string | null | undefined;
    label: string;
    sharedTo: SharedTo;
};
export declare type AccountSharingRuleSettings = {
    caseAccessLevel: string;
    contactAccessLevel: string;
    opportunityAccessLevel: string;
};
export declare type SharingCriteriaRule = SharingBaseRule & {
    booleanFilter?: string | null | undefined;
    criteriaItems: FilterItem[];
};
export declare type SharingGuestRule = SharingBaseRule & {
    booleanFilter?: string | null | undefined;
    criteriaItems: FilterItem[];
};
export declare type SharingOwnerRule = SharingBaseRule & {
    sharedFrom: SharedTo;
};
export declare type SharingTerritoryRule = SharingOwnerRule & {};
export declare type SharingRules = Metadata & {
    sharingCriteriaRules: SharingCriteriaRule[];
    sharingGuestRules: SharingGuestRule[];
    sharingOwnerRules: SharingOwnerRule[];
    sharingTerritoryRules: SharingTerritoryRule[];
};
export declare type SharingSet = Metadata & {
    accessMappings: AccessMapping[];
    description?: string | null | undefined;
    name: string;
    profiles: string[];
};
export declare type AccessMapping = {
    accessLevel: string;
    object: string;
    objectField: string;
    userField: string;
};
export declare type SharingSettings = Metadata & {
    enableAccountRoleOptimization?: boolean | null | undefined;
    enableAssetSharing?: boolean | null | undefined;
    enableCommunityUserVisibility?: boolean | null | undefined;
    enableExternalSharingModel?: boolean | null | undefined;
    enableManagerGroups?: boolean | null | undefined;
    enableManualUserRecordSharing?: boolean | null | undefined;
    enablePartnerSuperUserAccess?: boolean | null | undefined;
    enablePortalUserCaseSharing?: boolean | null | undefined;
    enablePortalUserVisibility?: boolean | null | undefined;
    enableRemoveTMGroupMembership?: boolean | null | undefined;
    enableSecureGuestAccess?: boolean | null | undefined;
    enableStandardReportVisibility?: boolean | null | undefined;
    enableTerritoryForecastManager?: boolean | null | undefined;
};
export declare type SiteSettings = Metadata & {
    enableProxyLoginICHeader?: boolean | null | undefined;
    enableTopicsInSites?: boolean | null | undefined;
    enableVisualforceApiAccessAllowed?: boolean | null | undefined;
};
export declare type Skill = Metadata & {
    assignments?: SkillAssignments | null | undefined;
    description?: string | null | undefined;
    label: string;
};
export declare type SkillAssignments = {
    profiles?: SkillProfileAssignments | null | undefined;
    users?: SkillUserAssignments | null | undefined;
};
export declare type SkillProfileAssignments = {
    profile: string[];
};
export declare type SkillUserAssignments = {
    user: string[];
};
export declare type SocialCustomerServiceSettings = Metadata & {
    caseSubjectOption: string;
    enableSocialApprovals?: boolean | null | undefined;
    enableSocialCaseAssignmentRules?: boolean | null | undefined;
    enableSocialCustomerService?: boolean | null | undefined;
    enableSocialPersonaHistoryTracking?: boolean | null | undefined;
    enableSocialPostHistoryTracking?: boolean | null | undefined;
    enableSocialReceiveParentPost?: boolean | null | undefined;
};
export declare type SocialProfileSettings = Metadata & {
    enableSocialProfiles?: boolean | null | undefined;
    isFacebookSocialProfilesDisabled?: boolean | null | undefined;
    isLinkedInSocialProfilesDisabled?: boolean | null | undefined;
    isTwitterSocialProfilesDisabled?: boolean | null | undefined;
    isYouTubeSocialProfilesDisabled?: boolean | null | undefined;
};
export declare type StandardValueSet = Metadata & {
    groupingStringEnum?: string | null | undefined;
    sorted: boolean;
    standardValue: StandardValue[];
};
export declare type StandardValueSetTranslation = Metadata & {
    valueTranslation: ValueTranslation[];
};
export declare type SurveySettings = Metadata & {
    enableSurvey?: boolean | null | undefined;
    enableSurveyOwnerCanManageResponse?: boolean | null | undefined;
};
export declare type SynonymDictionary = Metadata & {
    groups: SynonymGroup[];
    isProtected?: boolean | null | undefined;
    label: string;
};
export declare type SystemNotificationSettings = Metadata & {
    disableDowntimeNotifications?: boolean | null | undefined;
    disableMaintenanceNotifications?: boolean | null | undefined;
};
export declare type Territory2 = Metadata & {
    accountAccessLevel?: string | null | undefined;
    caseAccessLevel?: string | null | undefined;
    contactAccessLevel?: string | null | undefined;
    customFields: FieldValue[];
    description?: string | null | undefined;
    name: string;
    opportunityAccessLevel?: string | null | undefined;
    parentTerritory?: string | null | undefined;
    ruleAssociations: Territory2RuleAssociation[];
    territory2Type: string;
};
export declare type FieldValue = {
    name: string;
    value?: any | null | undefined;
};
export declare type Territory2RuleAssociation = {
    inherited: boolean;
    ruleName: string;
};
export declare type Territory2Model = Metadata & {
    customFields: FieldValue[];
    description?: string | null | undefined;
    name: string;
};
export declare type Territory2Rule = Metadata & {
    active: boolean;
    booleanFilter?: string | null | undefined;
    name: string;
    objectType: string;
    ruleItems: Territory2RuleItem[];
};
export declare type Territory2RuleItem = {
    field: string;
    operation: string;
    value?: string | null | undefined;
};
export declare type Territory2Settings = Metadata & {
    defaultAccountAccessLevel?: string | null | undefined;
    defaultCaseAccessLevel?: string | null | undefined;
    defaultContactAccessLevel?: string | null | undefined;
    defaultOpportunityAccessLevel?: string | null | undefined;
    enableTerritoryManagement2?: boolean | null | undefined;
    opportunityFilterSettings?: Territory2SettingsOpportunityFilter | null | undefined;
};
export declare type Territory2SettingsOpportunityFilter = {
    apexClassName?: string | null | undefined;
    enableFilter: boolean;
    runOnCreate: boolean;
};
export declare type Territory2Type = Metadata & {
    description?: string | null | undefined;
    name: string;
    priority: number;
};
export declare type TimeSheetTemplate = Metadata & {
    active: boolean;
    description?: string | null | undefined;
    frequency: string;
    masterLabel: string;
    startDate: string;
    timeSheetTemplateAssignments: TimeSheetTemplateAssignment[];
    workWeekEndDay: string;
    workWeekStartDay: string;
};
export declare type TimeSheetTemplateAssignment = {
    assignedTo?: string | null | undefined;
};
export declare type TopicsForObjects = Metadata & {
    enableTopics: boolean;
    entityApiName: string;
};
export declare type TrailheadSettings = Metadata & {
    enableMyTrailheadPref?: boolean | null | undefined;
};
export declare type TransactionSecurityPolicy = Metadata & {
    action: TransactionSecurityAction;
    active: boolean;
    apexClass?: string | null | undefined;
    description?: string | null | undefined;
    developerName?: string | null | undefined;
    eventName?: string | null | undefined;
    eventType?: string | null | undefined;
    executionUser?: string | null | undefined;
    flow?: string | null | undefined;
    masterLabel?: string | null | undefined;
    resourceName?: string | null | undefined;
    type?: string | null | undefined;
};
export declare type TransactionSecurityAction = {
    block: boolean;
    endSession: boolean;
    freezeUser: boolean;
    notifications: TransactionSecurityNotification[];
    twoFactorAuthentication: boolean;
};
export declare type TransactionSecurityNotification = {
    inApp: boolean;
    sendEmail: boolean;
    user: string;
};
export declare type Translations = Metadata & {
    customApplications: CustomApplicationTranslation[];
    customDataTypeTranslations: CustomDataTypeTranslation[];
    customLabels: CustomLabelTranslation[];
    customPageWebLinks: CustomPageWebLinkTranslation[];
    customTabs: CustomTabTranslation[];
    flowDefinitions: FlowDefinitionTranslation[];
    quickActions: GlobalQuickActionTranslation[];
    reportTypes: ReportTypeTranslation[];
    scontrols: ScontrolTranslation[];
};
export declare type CustomApplicationTranslation = {
    label: string;
    name: string;
};
export declare type CustomDataTypeTranslation = {
    components: CustomDataTypeComponentTranslation[];
    customDataTypeName: string;
    description?: string | null | undefined;
    label?: string | null | undefined;
};
export declare type CustomDataTypeComponentTranslation = {
    developerSuffix: string;
    label?: string | null | undefined;
};
export declare type CustomLabelTranslation = {
    label: string;
    name: string;
};
export declare type CustomPageWebLinkTranslation = {
    label: string;
    name: string;
};
export declare type CustomTabTranslation = {
    label: string;
    name: string;
};
export declare type FlowDefinitionTranslation = {
    flows: FlowTranslation[];
    fullName: string;
    label?: string | null | undefined;
};
export declare type FlowTranslation = {
    choices: FlowChoiceTranslation[];
    fullName: string;
    label?: string | null | undefined;
    screens: FlowScreenTranslation[];
    stages: FlowStageTranslation[];
    textTemplates: FlowTextTemplateTranslation[];
};
export declare type FlowChoiceTranslation = {
    choiceText?: string | null | undefined;
    name: string;
    userInput?: FlowChoiceUserInputTranslation | null | undefined;
};
export declare type FlowChoiceUserInputTranslation = {
    promptText?: string | null | undefined;
    validationRule?: FlowInputValidationRuleTranslation | null | undefined;
};
export declare type FlowInputValidationRuleTranslation = {
    errorMessage?: string | null | undefined;
};
export declare type FlowScreenTranslation = {
    fields: FlowScreenFieldTranslation[];
    helpText?: string | null | undefined;
    name: string;
    pausedText?: string | null | undefined;
};
export declare type FlowScreenFieldTranslation = {
    fieldText?: string | null | undefined;
    helpText?: string | null | undefined;
    name: string;
    validationRule?: FlowInputValidationRuleTranslation | null | undefined;
};
export declare type FlowStageTranslation = {
    label?: string | null | undefined;
    name: string;
};
export declare type FlowTextTemplateTranslation = {
    name: string;
    text?: string | null | undefined;
};
export declare type GlobalQuickActionTranslation = {
    label: string;
    name: string;
};
export declare type ReportTypeTranslation = {
    description?: string | null | undefined;
    label?: string | null | undefined;
    name: string;
    sections: ReportTypeSectionTranslation[];
};
export declare type ReportTypeSectionTranslation = {
    columns: ReportTypeColumnTranslation[];
    label?: string | null | undefined;
    name: string;
};
export declare type ReportTypeColumnTranslation = {
    label: string;
    name: string;
};
export declare type ScontrolTranslation = {
    label: string;
    name: string;
};
export declare type UIObjectRelationConfig = Metadata & {
    UIObjectRelationFieldConfigs: UIObjectRelationFieldConfig[];
    contextObject: string;
    contextObjectRecordType?: string | null | undefined;
    directRelationshipField?: string | null | undefined;
    indirectObjectContextField?: string | null | undefined;
    indirectObjectRelatedField?: string | null | undefined;
    indirectRelationshipObject?: string | null | undefined;
    isActive: boolean;
    masterLabel: string;
    relatedObject: string;
    relatedObjectRecordType?: string | null | undefined;
    relationshipType: string;
};
export declare type UIObjectRelationFieldConfig = {
    displayLabel: string;
    queryText: string;
    rowOrder: number;
};
export declare type UserCriteria = Metadata & {
    creationAgeInSeconds?: number | null | undefined;
    description?: string | null | undefined;
    lastChatterActivityAgeInSeconds?: number | null | undefined;
    masterLabel: string;
    profiles: string[];
    userTypes: string[];
};
export declare type UserEngagementSettings = Metadata & {
    canGovCloudUseAdoptionApps?: boolean | null | undefined;
    doesScheduledSwitcherRunDaily?: boolean | null | undefined;
    enableCustomHelpGlobalSection?: boolean | null | undefined;
    enableHelpMenuShowFeedback?: boolean | null | undefined;
    enableHelpMenuShowHelp?: boolean | null | undefined;
    enableHelpMenuShowNewUser?: boolean | null | undefined;
    enableHelpMenuShowSearch?: boolean | null | undefined;
    enableHelpMenuShowSfdcContent?: boolean | null | undefined;
    enableHelpMenuShowShortcut?: boolean | null | undefined;
    enableHelpMenuShowSupport?: boolean | null | undefined;
    enableHelpMenuShowTrailhead?: boolean | null | undefined;
    enableIBILOptOutDashboards?: boolean | null | undefined;
    enableIBILOptOutEvents?: boolean | null | undefined;
    enableIBILOptOutReports?: boolean | null | undefined;
    enableIBILOptOutTasks?: boolean | null | undefined;
    enableLexToClassicFeedbackEnable?: boolean | null | undefined;
    enableOrchestrationInSandbox?: boolean | null | undefined;
    enableOrgUserAssistEnabled?: boolean | null | undefined;
    enableScheduledSwitcher?: boolean | null | undefined;
    enableSfdcProductFeedbackSurvey?: boolean | null | undefined;
    enableShowSalesforceUserAssist?: boolean | null | undefined;
    isAutoTransitionDelayed?: boolean | null | undefined;
    isCrucNotificationDisabled?: boolean | null | undefined;
    isCustomProfileAutoTransitionDelayed?: boolean | null | undefined;
    isLEXWelcomeMatDisabled?: boolean | null | undefined;
    isMeetTheAssistantDisabledInClassic?: boolean | null | undefined;
    isMeetTheAssistantDisabledInLightning?: boolean | null | undefined;
    optimizerAppEnabled?: boolean | null | undefined;
};
export declare type UserInterfaceSettings = Metadata & {
    alternateAlohaListView?: boolean | null | undefined;
    enableAsyncRelatedLists?: boolean | null | undefined;
    enableClickjackUserPageHeaderless?: boolean | null | undefined;
    enableCollapsibleSections?: boolean | null | undefined;
    enableCollapsibleSideBar?: boolean | null | undefined;
    enableCustomObjectTruncate?: boolean | null | undefined;
    enableCustomeSideBarOnAllPages?: boolean | null | undefined;
    enableDeleteFieldHistory?: boolean | null | undefined;
    enableHoverDetails?: boolean | null | undefined;
    enableInlineEdit?: boolean | null | undefined;
    enableNewPageLayoutEditor?: boolean | null | undefined;
    enablePersonalCanvas?: boolean | null | undefined;
    enablePrintableListViews?: boolean | null | undefined;
    enableProfileCustomTabsets?: boolean | null | undefined;
    enableQuickCreate?: boolean | null | undefined;
    enableTabOrganizer?: boolean | null | undefined;
};
export declare type UserManagementSettings = Metadata & {
    enableCanAnswerContainUsername?: boolean | null | undefined;
    enableCanSaveUserPerm?: boolean | null | undefined;
    enableConcealPersonalInfo?: boolean | null | undefined;
    enableContactlessExternalIdentityUsers?: boolean | null | undefined;
    enableEnhancedPermsetMgmt?: boolean | null | undefined;
    enableEnhancedProfileMgmt?: boolean | null | undefined;
    enableNewProfileUI?: boolean | null | undefined;
    enableScrambleUserData?: boolean | null | undefined;
    enableUserSelfDeactivate?: boolean | null | undefined;
};
export declare type VoiceSettings = Metadata & {
    enableCallDisposition?: boolean | null | undefined;
    enableVoiceCallList?: boolean | null | undefined;
    enableVoiceCallRecording?: boolean | null | undefined;
    enableVoiceCoaching?: boolean | null | undefined;
    enableVoiceConferencing?: boolean | null | undefined;
    enableVoiceLocalPresence?: boolean | null | undefined;
    enableVoiceMail?: boolean | null | undefined;
    enableVoiceMailDrop?: boolean | null | undefined;
};
export declare type WaveApplication = Metadata & {
    assetIcon?: string | null | undefined;
    description?: string | null | undefined;
    folder: string;
    masterLabel: string;
    shares: FolderShare[];
    templateOrigin?: string | null | undefined;
    templateVersion?: string | null | undefined;
};
export declare type WaveDataset = Metadata & {
    application: string;
    description?: string | null | undefined;
    masterLabel: string;
    templateAssetSourceName?: string | null | undefined;
};
export declare type WaveTemplateBundle = Metadata & {
    assetIcon?: string | null | undefined;
    assetVersion?: number | null | undefined;
    description?: string | null | undefined;
    label: string;
    templateType: string;
};
export declare type WaveXmd = Metadata & {
    application?: string | null | undefined;
    dataset: string;
    datasetConnector?: string | null | undefined;
    datasetFullyQualifiedName?: string | null | undefined;
    dates: WaveXmdDate[];
    dimensions: WaveXmdDimension[];
    measures: WaveXmdMeasure[];
    organizations: WaveXmdOrganization[];
    origin?: string | null | undefined;
    type?: string | null | undefined;
    waveVisualization?: string | null | undefined;
};
export declare type WaveXmdDate = {
    alias: string;
    compact?: boolean | null | undefined;
    dateFieldDay?: string | null | undefined;
    dateFieldEpochDay?: string | null | undefined;
    dateFieldEpochSecond?: string | null | undefined;
    dateFieldFiscalMonth?: string | null | undefined;
    dateFieldFiscalQuarter?: string | null | undefined;
    dateFieldFiscalWeek?: string | null | undefined;
    dateFieldFiscalYear?: string | null | undefined;
    dateFieldFullYear?: string | null | undefined;
    dateFieldHour?: string | null | undefined;
    dateFieldMinute?: string | null | undefined;
    dateFieldMonth?: string | null | undefined;
    dateFieldQuarter?: string | null | undefined;
    dateFieldSecond?: string | null | undefined;
    dateFieldWeek?: string | null | undefined;
    dateFieldYear?: string | null | undefined;
    description?: string | null | undefined;
    firstDayOfWeek: number;
    fiscalMonthOffset: number;
    isYearEndFiscalYear?: boolean | null | undefined;
    label?: string | null | undefined;
    showInExplorer?: boolean | null | undefined;
    sortIndex: number;
    type: string;
};
export declare type WaveXmdDimension = {
    conditionalFormatting: WaveXmdFormattingProperty[];
    customActions: WaveXmdDimensionCustomAction[];
    customActionsEnabled?: boolean | null | undefined;
    dateFormat?: string | null | undefined;
    description?: string | null | undefined;
    field: string;
    fullyQualifiedName?: string | null | undefined;
    imageTemplate?: string | null | undefined;
    isDerived: boolean;
    isMultiValue?: boolean | null | undefined;
    label?: string | null | undefined;
    linkTemplate?: string | null | undefined;
    linkTemplateEnabled?: boolean | null | undefined;
    linkTooltip?: string | null | undefined;
    members: WaveXmdDimensionMember[];
    origin?: string | null | undefined;
    recordDisplayFields: WaveXmdRecordDisplayLookup[];
    recordIdField?: string | null | undefined;
    recordOrganizationIdField?: string | null | undefined;
    salesforceActions: WaveXmdDimensionSalesforceAction[];
    salesforceActionsEnabled?: boolean | null | undefined;
    showDetailsDefaultFieldIndex?: number | null | undefined;
    showInExplorer?: boolean | null | undefined;
    sortIndex: number;
};
export declare type WaveXmdFormattingProperty = {
    formattingBins: WaveXmdFormattingBin[];
    formattingPredicates: WaveXmdFormattingPredicate[];
    property: string;
    referenceField: string;
    sortIndex: number;
    type: string;
};
export declare type WaveXmdFormattingBin = {
    bin: string;
    formatValue: string;
    label: string;
    sortIndex: number;
};
export declare type WaveXmdFormattingPredicate = {
    formatValue: string;
    operator: string;
    sortIndex: number;
    value: string;
};
export declare type WaveXmdDimensionCustomAction = {
    customActionName: string;
    enabled: boolean;
    icon?: string | null | undefined;
    method?: string | null | undefined;
    sortIndex: number;
    target?: string | null | undefined;
    tooltip?: string | null | undefined;
    url?: string | null | undefined;
};
export declare type WaveXmdDimensionMember = {
    color?: string | null | undefined;
    label?: string | null | undefined;
    member: string;
    sortIndex: number;
};
export declare type WaveXmdRecordDisplayLookup = {
    recordDisplayField: string;
};
export declare type WaveXmdDimensionSalesforceAction = {
    enabled: boolean;
    salesforceActionName: string;
    sortIndex: number;
};
export declare type WaveXmdMeasure = {
    conditionalFormatting: WaveXmdFormattingProperty[];
    dateFormat?: string | null | undefined;
    description?: string | null | undefined;
    field: string;
    formatCustomFormat?: string | null | undefined;
    formatDecimalDigits?: number | null | undefined;
    formatIsNegativeParens?: boolean | null | undefined;
    formatPrefix?: string | null | undefined;
    formatSuffix?: string | null | undefined;
    formatUnit?: string | null | undefined;
    formatUnitMultiplier?: number | null | undefined;
    fullyQualifiedName?: string | null | undefined;
    isDerived: boolean;
    label?: string | null | undefined;
    origin?: string | null | undefined;
    showDetailsDefaultFieldIndex?: number | null | undefined;
    showInExplorer?: boolean | null | undefined;
    sortIndex: number;
};
export declare type WaveXmdOrganization = {
    instanceUrl: string;
    label: string;
    organizationIdentifier: string;
    sortIndex: number;
};
export declare type WorkDotComSettings = Metadata & {
    enableCoachingManagerGroupAccess?: boolean | null | undefined;
    enableGoalManagerGroupAccess?: boolean | null | undefined;
    enableProfileSkills?: boolean | null | undefined;
    enableProfileSkillsAddFeedPost?: boolean | null | undefined;
    enableProfileSkillsAutoSuggest?: boolean | null | undefined;
    enableProfileSkillsUsePlatform?: boolean | null | undefined;
    enableWorkBadgeDefRestrictPref?: boolean | null | undefined;
    enableWorkCalibration?: boolean | null | undefined;
    enableWorkCanvasPref?: boolean | null | undefined;
    enableWorkCertification?: boolean | null | undefined;
    enableWorkCertificationNotification?: boolean | null | undefined;
    enableWorkRewardsPref?: boolean | null | undefined;
    enableWorkThanksPref?: boolean | null | undefined;
    enableWorkUseObjectivesForGoals?: boolean | null | undefined;
};
export declare type Workflow = Metadata & {
    alerts: WorkflowAlert[];
    fieldUpdates: WorkflowFieldUpdate[];
    flowActions: WorkflowFlowAction[];
    knowledgePublishes: WorkflowKnowledgePublish[];
    outboundMessages: WorkflowOutboundMessage[];
    rules: WorkflowRule[];
    send: WorkflowSend[];
    tasks: WorkflowTask[];
};
export declare type WorkflowAlert = WorkflowAction & {
    ccEmails: string[];
    description: string;
    protected: boolean;
    recipients: WorkflowEmailRecipient[];
    senderAddress?: string | null | undefined;
    senderType?: string | null | undefined;
    template: string;
};
export declare type WorkflowAction = Metadata & {};
export declare type WorkflowFieldUpdate = WorkflowAction & {
    description?: string | null | undefined;
    field: string;
    formula?: string | null | undefined;
    literalValue?: string | null | undefined;
    lookupValue?: string | null | undefined;
    lookupValueType?: string | null | undefined;
    name: string;
    notifyAssignee: boolean;
    operation: string;
    protected: boolean;
    reevaluateOnChange?: boolean | null | undefined;
    targetObject?: string | null | undefined;
};
export declare type WorkflowFlowAction = WorkflowAction & {
    description?: string | null | undefined;
    flow: string;
    flowInputs: WorkflowFlowActionParameter[];
    label: string;
    language?: string | null | undefined;
    protected: boolean;
};
export declare type WorkflowFlowActionParameter = {
    name: string;
    value?: string | null | undefined;
};
export declare type WorkflowKnowledgePublish = WorkflowAction & {
    action: string;
    description?: string | null | undefined;
    label: string;
    language?: string | null | undefined;
    protected: boolean;
};
export declare type WorkflowOutboundMessage = WorkflowAction & {
    apiVersion: number;
    description?: string | null | undefined;
    endpointUrl: string;
    fields: string[];
    includeSessionId: boolean;
    integrationUser: string;
    name: string;
    protected: boolean;
    useDeadLetterQueue?: boolean | null | undefined;
};
export declare type WorkflowSend = WorkflowAction & {
    action: string;
    description?: string | null | undefined;
    label: string;
    language?: string | null | undefined;
    protected: boolean;
};
export declare type WorkflowTask = WorkflowAction & {
    assignedTo?: string | null | undefined;
    assignedToType: string;
    description?: string | null | undefined;
    dueDateOffset: number;
    notifyAssignee: boolean;
    offsetFromField?: string | null | undefined;
    priority: string;
    protected: boolean;
    status: string;
    subject: string;
};
export declare type WorkflowEmailRecipient = {
    field?: string | null | undefined;
    recipient?: string | null | undefined;
    type: string;
};
export declare type WorkflowRule = Metadata & {
    actions: WorkflowActionReference[];
    active: boolean;
    booleanFilter?: string | null | undefined;
    criteriaItems: FilterItem[];
    description?: string | null | undefined;
    formula?: string | null | undefined;
    triggerType: string;
    workflowTimeTriggers: WorkflowTimeTrigger[];
};
export declare type WorkflowTimeTrigger = {
    actions: WorkflowActionReference[];
    offsetFromField?: string | null | undefined;
    timeLength?: string | null | undefined;
    workflowTimeTriggerUnit: string;
};
export declare type SaveResult = {
    errors: Error[];
    fullName: string;
    success: boolean;
};
export declare type Error = {
    extendedErrorDetails: ExtendedErrorDetails[];
    fields: string[];
    message: string;
    statusCode: string;
};
export declare type ExtendedErrorDetails = {
    extendedErrorCode: string;
};
export declare type DeleteResult = {
    errors: Error[];
    fullName: string;
    success: boolean;
};
export declare type DeployOptions = {
    allowMissingFiles: boolean;
    autoUpdatePackage: boolean;
    checkOnly: boolean;
    ignoreWarnings: boolean;
    performRetrieve: boolean;
    purgeOnDelete: boolean;
    rollbackOnError: boolean;
    runTests: string[];
    singlePackage: boolean;
    testLevel: string;
};
export declare type AsyncResult = {
    done: boolean;
    id: string;
    message?: string | null | undefined;
    state: string;
    statusCode?: string | null | undefined;
};
export declare type DescribeMetadataResult = {
    metadataObjects: DescribeMetadataObject[];
    organizationNamespace: string;
    partialSaveAllowed: boolean;
    testRequired: boolean;
};
export declare type DescribeMetadataObject = {
    childXmlNames: string[];
    directoryName: string;
    inFolder: boolean;
    metaFile: boolean;
    suffix?: string | null | undefined;
    xmlName: string;
};
export declare type DescribeValueTypeResult = {
    apiCreatable: boolean;
    apiDeletable: boolean;
    apiReadable: boolean;
    apiUpdatable: boolean;
    parentField?: ValueTypeField | null | undefined;
    valueTypeFields: ValueTypeField[];
};
export declare type ValueTypeField = {
    fields: ValueTypeField[];
    foreignKeyDomain: string[];
    isForeignKey: boolean;
    isNameField: boolean;
    minOccurs: number;
    name: string;
    picklistValues: PicklistEntry[];
    soapType: string;
    valueRequired: boolean;
};
export declare type PicklistEntry = {
    active: boolean;
    defaultValue: boolean;
    label: string;
    validFor?: string | null | undefined;
    value: string;
};
export declare type ListMetadataQuery = {
    folder?: string | null | undefined;
    type: string;
};
export declare type ReadResult = {
    records: Metadata[];
};
export declare type RetrieveRequest = {
    apiVersion: number;
    packageNames: string[];
    singlePackage: boolean;
    specificFiles: string[];
    unpackaged?: Package | null | undefined;
};
export declare type UpsertResult = {
    created: boolean;
    errors: Error[];
    fullName: string;
    success: boolean;
};
export declare type LogInfo = {
    category: string;
    level: string;
};
export declare type ApiSchemaTypes = {
    CancelDeployResult: CancelDeployResult;
    DeployResult: DeployResult;
    DeployDetails: DeployDetails;
    DeployMessage: DeployMessage;
    RetrieveResult: RetrieveResult;
    FileProperties: FileProperties;
    RetrieveMessage: RetrieveMessage;
    RunTestsResult: RunTestsResult;
    CodeCoverageResult: CodeCoverageResult;
    CodeLocation: CodeLocation;
    CodeCoverageWarning: CodeCoverageWarning;
    RunTestFailure: RunTestFailure;
    FlowCoverageResult: FlowCoverageResult;
    FlowCoverageWarning: FlowCoverageWarning;
    RunTestSuccess: RunTestSuccess;
    Metadata: Metadata;
    AccountRelationshipShareRule: AccountRelationshipShareRule;
    AccountSettings: AccountSettings;
    ActionLinkGroupTemplate: ActionLinkGroupTemplate;
    ActionLinkTemplate: ActionLinkTemplate;
    ActionPlanTemplate: ActionPlanTemplate;
    ActionPlanTemplateItem: ActionPlanTemplateItem;
    ActionPlanTemplateItemValue: ActionPlanTemplateItemValue;
    ActionsSettings: ActionsSettings;
    ActivitiesSettings: ActivitiesSettings;
    AddressSettings: AddressSettings;
    CountriesAndStates: CountriesAndStates;
    Country: Country;
    State: State;
    AnalyticSnapshot: AnalyticSnapshot;
    AnalyticSnapshotMapping: AnalyticSnapshotMapping;
    AnalyticsSettings: AnalyticsSettings;
    AnimationRule: AnimationRule;
    ApexSettings: ApexSettings;
    ApexTestSuite: ApexTestSuite;
    AppExperienceSettings: AppExperienceSettings;
    AppMenu: AppMenu;
    AppMenuItem: AppMenuItem;
    AppointmentSchedulingPolicy: AppointmentSchedulingPolicy;
    ApprovalProcess: ApprovalProcess;
    ApprovalSubmitter: ApprovalSubmitter;
    ApprovalPageField: ApprovalPageField;
    ApprovalStep: ApprovalStep;
    ApprovalAction: ApprovalAction;
    WorkflowActionReference: WorkflowActionReference;
    ApprovalStepApprover: ApprovalStepApprover;
    Approver: Approver;
    ApprovalEntryCriteria: ApprovalEntryCriteria;
    FilterItem: FilterItem;
    DuplicateRuleFilterItem: DuplicateRuleFilterItem;
    ApprovalStepRejectBehavior: ApprovalStepRejectBehavior;
    NextAutomatedApprover: NextAutomatedApprover;
    ArchiveSettings: ArchiveSettings;
    AssignmentRule: AssignmentRule;
    RuleEntry: RuleEntry;
    EscalationAction: EscalationAction;
    AssignmentRules: AssignmentRules;
    Audience: Audience;
    AudienceCriteria: AudienceCriteria;
    AudienceCriterion: AudienceCriterion;
    AudienceCriteriaValue: AudienceCriteriaValue;
    PersonalizationTargetInfos: PersonalizationTargetInfos;
    PersonalizationTargetInfo: PersonalizationTargetInfo;
    AuraDefinitionBundle: AuraDefinitionBundle;
    PackageVersion: PackageVersion;
    AuthProvider: AuthProvider;
    AutoResponseRule: AutoResponseRule;
    AutoResponseRules: AutoResponseRules;
    BlockchainSettings: BlockchainSettings;
    Bot: Bot;
    LocalMlDomain: LocalMlDomain;
    MlIntent: MlIntent;
    MlIntentUtterance: MlIntentUtterance;
    MlRelatedIntent: MlRelatedIntent;
    MlSlotClass: MlSlotClass;
    MlSlotClassValue: MlSlotClassValue;
    SynonymGroup: SynonymGroup;
    BotVersion: BotVersion;
    BotDialogGroup: BotDialogGroup;
    BotDialog: BotDialog;
    BotStep: BotStep;
    BotInvocation: BotInvocation;
    BotInvocationMapping: BotInvocationMapping;
    BotMessage: BotMessage;
    BotNavigation: BotNavigation;
    BotNavigationLink: BotNavigationLink;
    BotStepCondition: BotStepCondition;
    BotVariableOperation: BotVariableOperation;
    BotQuickReplyOption: BotQuickReplyOption;
    BotVariableOperand: BotVariableOperand;
    ConversationRecordLookup: ConversationRecordLookup;
    ConversationRecordLookupField: ConversationRecordLookupField;
    ConversationSystemMessage: ConversationSystemMessage;
    ConversationSystemMessageMapping: ConversationSystemMessageMapping;
    ConversationVariable: ConversationVariable;
    ConversationContextVariable: ConversationContextVariable;
    ConversationContextVariableMapping: ConversationContextVariableMapping;
    BotSettings: BotSettings;
    BrandingSet: BrandingSet;
    BrandingSetProperty: BrandingSetProperty;
    BusinessHoursEntry: BusinessHoursEntry;
    BusinessHoursSettings: BusinessHoursSettings;
    Holiday: Holiday;
    BusinessProcess: BusinessProcess;
    PicklistValue: PicklistValue;
    CMSConnectSource: CMSConnectSource;
    CMSConnectAsset: CMSConnectAsset;
    CMSConnectLanguage: CMSConnectLanguage;
    CMSConnectPersonalization: CMSConnectPersonalization;
    CMSConnectResourceType: CMSConnectResourceType;
    CMSConnectResourceDefinition: CMSConnectResourceDefinition;
    CallCenter: CallCenter;
    CallCenterSection: CallCenterSection;
    CallCenterItem: CallCenterItem;
    CampaignInfluenceModel: CampaignInfluenceModel;
    CampaignSettings: CampaignSettings;
    CanvasMetadata: CanvasMetadata;
    CaseClassificationSettings: CaseClassificationSettings;
    CaseSettings: CaseSettings;
    FeedItemSettings: FeedItemSettings;
    EmailToCaseSettings: EmailToCaseSettings;
    EmailToCaseRoutingAddress: EmailToCaseRoutingAddress;
    WebToCaseSettings: WebToCaseSettings;
    CaseSubjectParticle: CaseSubjectParticle;
    ChannelLayout: ChannelLayout;
    ChannelLayoutItem: ChannelLayoutItem;
    ChatterAnswersSettings: ChatterAnswersSettings;
    ChatterEmailsMDSettings: ChatterEmailsMDSettings;
    ChatterExtension: ChatterExtension;
    ChatterSettings: ChatterSettings;
    CleanDataService: CleanDataService;
    CleanRule: CleanRule;
    FieldMapping: FieldMapping;
    FieldMappingRow: FieldMappingRow;
    FieldMappingField: FieldMappingField;
    CommandAction: CommandAction;
    CommandActionIntent: CommandActionIntent;
    CommandActionResponse: CommandActionResponse;
    CommandActionParam: CommandActionParam;
    CommunitiesSettings: CommunitiesSettings;
    Community: Community;
    ReputationLevels: ReputationLevels;
    ChatterAnswersReputationLevel: ChatterAnswersReputationLevel;
    IdeaReputationLevel: IdeaReputationLevel;
    CommunityTemplateDefinition: CommunityTemplateDefinition;
    CommunityTemplateBundleInfo: CommunityTemplateBundleInfo;
    CommunityThemeBundleInfo: CommunityThemeBundleInfo;
    NavigationLinkSet: NavigationLinkSet;
    NavigationMenuItem: NavigationMenuItem;
    NavigationMenuItemBranding: NavigationMenuItemBranding;
    NavigationSubMenu: NavigationSubMenu;
    CommunityTemplatePageSetting: CommunityTemplatePageSetting;
    CommunityThemeDefinition: CommunityThemeDefinition;
    CommunityCustomThemeLayoutType: CommunityCustomThemeLayoutType;
    CommunityThemeRouteOverride: CommunityThemeRouteOverride;
    CommunityThemeSetting: CommunityThemeSetting;
    CompactLayout: CompactLayout;
    CompanySettings: CompanySettings;
    FiscalYearSettings: FiscalYearSettings;
    ConnectedApp: ConnectedApp;
    ConnectedAppAttribute: ConnectedAppAttribute;
    ConnectedAppCanvasConfig: ConnectedAppCanvasConfig;
    ConnectedAppIpRange: ConnectedAppIpRange;
    ConnectedAppMobileDetailConfig: ConnectedAppMobileDetailConfig;
    ConnectedAppOauthConfig: ConnectedAppOauthConfig;
    ConnectedAppOauthIdToken: ConnectedAppOauthIdToken;
    ConnectedAppSamlConfig: ConnectedAppSamlConfig;
    ConnectedAppSettings: ConnectedAppSettings;
    ContentSettings: ContentSettings;
    ContractSettings: ContractSettings;
    CorsWhitelistOrigin: CorsWhitelistOrigin;
    CspTrustedSite: CspTrustedSite;
    CurrencySettings: CurrencySettings;
    CustomApplication: CustomApplication;
    AppActionOverride: AppActionOverride;
    ActionOverride: ActionOverride;
    AppBrand: AppBrand;
    ServiceCloudConsoleConfig: ServiceCloudConsoleConfig;
    AppComponentList: AppComponentList;
    KeyboardShortcuts: KeyboardShortcuts;
    CustomShortcut: CustomShortcut;
    DefaultShortcut: DefaultShortcut;
    ListPlacement: ListPlacement;
    LiveAgentConfig: LiveAgentConfig;
    PushNotification: PushNotification;
    TabLimitConfig: TabLimitConfig;
    AppPreferences: AppPreferences;
    AppProfileActionOverride: AppProfileActionOverride;
    ProfileActionOverride: ProfileActionOverride;
    AppWorkspaceConfig: AppWorkspaceConfig;
    WorkspaceMapping: WorkspaceMapping;
    CustomApplicationComponent: CustomApplicationComponent;
    CustomFeedFilter: CustomFeedFilter;
    FeedFilterCriterion: FeedFilterCriterion;
    CustomField: CustomField;
    LookupFilter: LookupFilter;
    ValueSet: ValueSet;
    ValueSetValuesDefinition: ValueSetValuesDefinition;
    CustomValue: CustomValue;
    StandardValue: StandardValue;
    ValueSettings: ValueSettings;
    CustomHelpMenuSection: CustomHelpMenuSection;
    CustomHelpMenuItem: CustomHelpMenuItem;
    CustomLabel: CustomLabel;
    CustomLabels: CustomLabels;
    CustomMetadata: CustomMetadata;
    CustomMetadataValue: CustomMetadataValue;
    CustomNotificationType: CustomNotificationType;
    CustomObject: CustomObject;
    ArticleTypeChannelDisplay: ArticleTypeChannelDisplay;
    ArticleTypeTemplate: ArticleTypeTemplate;
    FieldSet: FieldSet;
    FieldSetItem: FieldSetItem;
    HistoryRetentionPolicy: HistoryRetentionPolicy;
    Index: Index;
    IndexField: IndexField;
    ListView: ListView;
    ListViewFilter: ListViewFilter;
    SharedTo: SharedTo;
    ProfileSearchLayouts: ProfileSearchLayouts;
    RecordType: RecordType;
    RecordTypePicklistValue: RecordTypePicklistValue;
    SearchLayouts: SearchLayouts;
    SharingReason: SharingReason;
    SharingRecalculation: SharingRecalculation;
    ValidationRule: ValidationRule;
    WebLink: WebLink;
    CustomObjectTranslation: CustomObjectTranslation;
    ObjectNameCaseValue: ObjectNameCaseValue;
    FieldSetTranslation: FieldSetTranslation;
    CustomFieldTranslation: CustomFieldTranslation;
    LookupFilterTranslation: LookupFilterTranslation;
    PicklistValueTranslation: PicklistValueTranslation;
    LayoutTranslation: LayoutTranslation;
    LayoutSectionTranslation: LayoutSectionTranslation;
    QuickActionTranslation: QuickActionTranslation;
    RecordTypeTranslation: RecordTypeTranslation;
    SharingReasonTranslation: SharingReasonTranslation;
    StandardFieldTranslation: StandardFieldTranslation;
    ValidationRuleTranslation: ValidationRuleTranslation;
    WebLinkTranslation: WebLinkTranslation;
    WorkflowTaskTranslation: WorkflowTaskTranslation;
    CustomPageWebLink: CustomPageWebLink;
    CustomPermission: CustomPermission;
    CustomPermissionDependencyRequired: CustomPermissionDependencyRequired;
    CustomSite: CustomSite;
    SiteWebAddress: SiteWebAddress;
    SiteRedirectMapping: SiteRedirectMapping;
    CustomTab: CustomTab;
    Dashboard: Dashboard;
    DashboardFilter: DashboardFilter;
    DashboardFilterOption: DashboardFilterOption;
    DashboardGridLayout: DashboardGridLayout;
    DashboardGridComponent: DashboardGridComponent;
    DashboardComponent: DashboardComponent;
    ChartSummary: ChartSummary;
    DashboardFilterColumn: DashboardFilterColumn;
    DashboardTableColumn: DashboardTableColumn;
    DashboardFlexTableComponentProperties: DashboardFlexTableComponentProperties;
    DashboardComponentColumn: DashboardComponentColumn;
    DashboardComponentSortInfo: DashboardComponentSortInfo;
    DashboardComponentGroupingSortProperties: DashboardComponentGroupingSortProperties;
    DashboardComponentGroupingSort: DashboardComponentGroupingSort;
    DashboardComponentSection: DashboardComponentSection;
    DataCategoryGroup: DataCategoryGroup;
    DataCategory: DataCategory;
    ObjectUsage: ObjectUsage;
    DataDotComSettings: DataDotComSettings;
    DelegateGroup: DelegateGroup;
    DeploymentSettings: DeploymentSettings;
    DevHubSettings: DevHubSettings;
    DiscoverySettings: DiscoverySettings;
    DocumentType: DocumentType;
    DuplicateRule: DuplicateRule;
    DuplicateRuleFilter: DuplicateRuleFilter;
    DuplicateRuleMatchRule: DuplicateRuleMatchRule;
    ObjectMapping: ObjectMapping;
    ObjectMappingField: ObjectMappingField;
    EACSettings: EACSettings;
    EmailAdministrationSettings: EmailAdministrationSettings;
    EmailIntegrationSettings: EmailIntegrationSettings;
    EmailServicesFunction: EmailServicesFunction;
    EmailServicesAddress: EmailServicesAddress;
    EmailTemplateSettings: EmailTemplateSettings;
    EmbeddedServiceBranding: EmbeddedServiceBranding;
    EmbeddedServiceConfig: EmbeddedServiceConfig;
    EmbeddedServiceAppointmentSettings: EmbeddedServiceAppointmentSettings;
    EmbeddedServiceCustomComponent: EmbeddedServiceCustomComponent;
    EmbeddedServiceCustomLabel: EmbeddedServiceCustomLabel;
    EmbeddedServiceFlowConfig: EmbeddedServiceFlowConfig;
    EmbeddedServiceFlow: EmbeddedServiceFlow;
    EmbeddedServiceLayout: EmbeddedServiceLayout;
    EmbeddedServiceLayoutRule: EmbeddedServiceLayoutRule;
    EmbeddedServiceLiveAgent: EmbeddedServiceLiveAgent;
    EmbeddedServiceQuickAction: EmbeddedServiceQuickAction;
    EmbeddedServiceMenuSettings: EmbeddedServiceMenuSettings;
    EmbeddedServiceMenuItem: EmbeddedServiceMenuItem;
    EncryptionKeySettings: EncryptionKeySettings;
    EnhancedNotesSettings: EnhancedNotesSettings;
    EntitlementProcess: EntitlementProcess;
    EntitlementProcessMilestoneItem: EntitlementProcessMilestoneItem;
    EntitlementProcessMilestoneTimeTrigger: EntitlementProcessMilestoneTimeTrigger;
    EntitlementSettings: EntitlementSettings;
    EntitlementTemplate: EntitlementTemplate;
    EntityImplements: EntityImplements;
    FieldImplements: FieldImplements;
    EscalationRule: EscalationRule;
    EscalationRules: EscalationRules;
    EssentialsSettings: EssentialsSettings;
    EssentialsTrialOrgSettings: EssentialsTrialOrgSettings;
    EventSettings: EventSettings;
    ExperienceBundleSettings: ExperienceBundleSettings;
    ExternalDataSource: ExternalDataSource;
    CustomHttpHeader: CustomHttpHeader;
    ExternalServiceRegistration: ExternalServiceRegistration;
    ExternalServicesSettings: ExternalServicesSettings;
    FieldServiceSettings: FieldServiceSettings;
    FileUploadAndDownloadSecuritySettings: FileUploadAndDownloadSecuritySettings;
    FileTypeDispositionAssignmentBean: FileTypeDispositionAssignmentBean;
    FilesConnectSettings: FilesConnectSettings;
    FlexiPage: FlexiPage;
    FlexiPageRegion: FlexiPageRegion;
    ComponentInstance: ComponentInstance;
    ComponentInstanceProperty: ComponentInstanceProperty;
    UiFormulaRule: UiFormulaRule;
    UiFormulaCriterion: UiFormulaCriterion;
    PlatformActionList: PlatformActionList;
    PlatformActionListItem: PlatformActionListItem;
    QuickActionList: QuickActionList;
    QuickActionListItem: QuickActionListItem;
    FlexiPageTemplateInstance: FlexiPageTemplateInstance;
    Flow: Flow;
    FlowActionCall: FlowActionCall;
    FlowNode: FlowNode;
    FlowElement: FlowElement;
    FlowBaseElement: FlowBaseElement;
    FlowMetadataValue: FlowMetadataValue;
    FlowElementReferenceOrValue: FlowElementReferenceOrValue;
    FlowActionCallInputParameter: FlowActionCallInputParameter;
    FlowActionCallOutputParameter: FlowActionCallOutputParameter;
    FlowApexPluginCallInputParameter: FlowApexPluginCallInputParameter;
    FlowApexPluginCallOutputParameter: FlowApexPluginCallOutputParameter;
    FlowAssignmentItem: FlowAssignmentItem;
    FlowChoiceUserInput: FlowChoiceUserInput;
    FlowInputValidationRule: FlowInputValidationRule;
    FlowCondition: FlowCondition;
    FlowConnector: FlowConnector;
    FlowInputFieldAssignment: FlowInputFieldAssignment;
    FlowOutputFieldAssignment: FlowOutputFieldAssignment;
    FlowRecordFilter: FlowRecordFilter;
    FlowScreenFieldInputParameter: FlowScreenFieldInputParameter;
    FlowScreenFieldOutputParameter: FlowScreenFieldOutputParameter;
    FlowScreenRule: FlowScreenRule;
    FlowScreenRuleAction: FlowScreenRuleAction;
    FlowSubflowInputAssignment: FlowSubflowInputAssignment;
    FlowSubflowOutputAssignment: FlowSubflowOutputAssignment;
    FlowVisibilityRule: FlowVisibilityRule;
    FlowWaitEventInputParameter: FlowWaitEventInputParameter;
    FlowWaitEventOutputParameter: FlowWaitEventOutputParameter;
    FlowChoice: FlowChoice;
    FlowConstant: FlowConstant;
    FlowDynamicChoiceSet: FlowDynamicChoiceSet;
    FlowFormula: FlowFormula;
    FlowRule: FlowRule;
    FlowScreenField: FlowScreenField;
    FlowStage: FlowStage;
    FlowTextTemplate: FlowTextTemplate;
    FlowVariable: FlowVariable;
    FlowWaitEvent: FlowWaitEvent;
    FlowApexPluginCall: FlowApexPluginCall;
    FlowAssignment: FlowAssignment;
    FlowDecision: FlowDecision;
    FlowLoop: FlowLoop;
    FlowRecordCreate: FlowRecordCreate;
    FlowRecordDelete: FlowRecordDelete;
    FlowRecordLookup: FlowRecordLookup;
    FlowRecordUpdate: FlowRecordUpdate;
    FlowScreen: FlowScreen;
    FlowStart: FlowStart;
    FlowSchedule: FlowSchedule;
    FlowStep: FlowStep;
    FlowSubflow: FlowSubflow;
    FlowWait: FlowWait;
    FlowCategory: FlowCategory;
    FlowCategoryItems: FlowCategoryItems;
    FlowDefinition: FlowDefinition;
    FlowSettings: FlowSettings;
    Folder: Folder;
    FolderShare: FolderShare;
    DashboardFolder: DashboardFolder;
    DocumentFolder: DocumentFolder;
    EmailFolder: EmailFolder;
    ReportFolder: ReportFolder;
    ForecastingSettings: ForecastingSettings;
    ForecastingCategoryMapping: ForecastingCategoryMapping;
    WeightedSourceCategory: WeightedSourceCategory;
    ForecastingDisplayedFamilySettings: ForecastingDisplayedFamilySettings;
    ForecastingTypeSettings: ForecastingTypeSettings;
    AdjustmentsSettings: AdjustmentsSettings;
    ForecastRangeSettings: ForecastRangeSettings;
    OpportunityListFieldsLabelMapping: OpportunityListFieldsLabelMapping;
    OpportunityListFieldsSelectedSettings: OpportunityListFieldsSelectedSettings;
    OpportunityListFieldsUnselectedSettings: OpportunityListFieldsUnselectedSettings;
    QuotasSettings: QuotasSettings;
    Form: Form;
    FormSection: FormSection;
    FormColumn: FormColumn;
    FormItem: FormItem;
    FormulaSettings: FormulaSettings;
    GlobalValueSet: GlobalValueSet;
    GlobalValueSetTranslation: GlobalValueSetTranslation;
    ValueTranslation: ValueTranslation;
    GoogleAppsSettings: GoogleAppsSettings;
    Group: Group;
    HighVelocitySalesSettings: HighVelocitySalesSettings;
    HomePageComponent: HomePageComponent;
    HomePageLayout: HomePageLayout;
    IdeasSettings: IdeasSettings;
    IndustriesManufacturingSettings: IndustriesManufacturingSettings;
    IndustriesSettings: IndustriesSettings;
    InstalledPackage: InstalledPackage;
    IntegrationHubSettings: IntegrationHubSettings;
    IntegrationHubSettingsType: IntegrationHubSettingsType;
    InvocableActionSettings: InvocableActionSettings;
    IoTSettings: IoTSettings;
    IsvHammerSettings: IsvHammerSettings;
    KeywordList: KeywordList;
    Keyword: Keyword;
    KnowledgeSettings: KnowledgeSettings;
    KnowledgeAnswerSettings: KnowledgeAnswerSettings;
    KnowledgeCaseSettings: KnowledgeCaseSettings;
    KnowledgeCommunitiesSettings: KnowledgeCommunitiesSettings;
    KnowledgeSitesSettings: KnowledgeSitesSettings;
    KnowledgeLanguageSettings: KnowledgeLanguageSettings;
    KnowledgeLanguage: KnowledgeLanguage;
    KnowledgeSuggestedArticlesSettings: KnowledgeSuggestedArticlesSettings;
    KnowledgeCaseFieldsSettings: KnowledgeCaseFieldsSettings;
    KnowledgeCaseField: KnowledgeCaseField;
    KnowledgeWorkOrderFieldsSettings: KnowledgeWorkOrderFieldsSettings;
    KnowledgeWorkOrderField: KnowledgeWorkOrderField;
    KnowledgeWorkOrderLineItemFieldsSettings: KnowledgeWorkOrderLineItemFieldsSettings;
    KnowledgeWorkOrderLineItemField: KnowledgeWorkOrderLineItemField;
    LanguageSettings: LanguageSettings;
    Layout: Layout;
    CustomConsoleComponents: CustomConsoleComponents;
    PrimaryTabComponents: PrimaryTabComponents;
    Container: Container;
    SidebarComponent: SidebarComponent;
    RelatedList: RelatedList;
    SubtabComponents: SubtabComponents;
    FeedLayout: FeedLayout;
    FeedLayoutFilter: FeedLayoutFilter;
    FeedLayoutComponent: FeedLayoutComponent;
    LayoutSection: LayoutSection;
    LayoutColumn: LayoutColumn;
    LayoutItem: LayoutItem;
    AnalyticsCloudComponentLayoutItem: AnalyticsCloudComponentLayoutItem;
    ReportChartComponentLayoutItem: ReportChartComponentLayoutItem;
    MiniLayout: MiniLayout;
    RelatedListItem: RelatedListItem;
    RelatedContent: RelatedContent;
    RelatedContentItem: RelatedContentItem;
    SummaryLayout: SummaryLayout;
    SummaryLayoutItem: SummaryLayoutItem;
    LeadConfigSettings: LeadConfigSettings;
    LeadConvertSettings: LeadConvertSettings;
    Letterhead: Letterhead;
    LetterheadLine: LetterheadLine;
    LetterheadHeaderFooter: LetterheadHeaderFooter;
    LicenseDefinition: LicenseDefinition;
    LicensedCustomPermissions: LicensedCustomPermissions;
    LightningBolt: LightningBolt;
    LightningBoltFeatures: LightningBoltFeatures;
    LightningBoltImages: LightningBoltImages;
    LightningBoltItems: LightningBoltItems;
    LightningComponentBundle: LightningComponentBundle;
    LwcResources: LwcResources;
    LwcResource: LwcResource;
    Targets: Targets;
    LightningExperienceSettings: LightningExperienceSettings;
    LightningExperienceTheme: LightningExperienceTheme;
    LightningMessageChannel: LightningMessageChannel;
    LightningMessageField: LightningMessageField;
    LightningOnboardingConfig: LightningOnboardingConfig;
    LiveAgentSettings: LiveAgentSettings;
    LiveChatAgentConfig: LiveChatAgentConfig;
    AgentConfigAssignments: AgentConfigAssignments;
    AgentConfigProfileAssignments: AgentConfigProfileAssignments;
    AgentConfigUserAssignments: AgentConfigUserAssignments;
    SupervisorAgentConfigSkills: SupervisorAgentConfigSkills;
    AgentConfigButtons: AgentConfigButtons;
    AgentConfigSkills: AgentConfigSkills;
    LiveChatButton: LiveChatButton;
    LiveChatButtonDeployments: LiveChatButtonDeployments;
    LiveChatButtonSkills: LiveChatButtonSkills;
    LiveChatDeployment: LiveChatDeployment;
    LiveChatDeploymentDomainWhitelist: LiveChatDeploymentDomainWhitelist;
    LiveChatSensitiveDataRule: LiveChatSensitiveDataRule;
    LiveMessageSettings: LiveMessageSettings;
    MacroSettings: MacroSettings;
    ManagedContentType: ManagedContentType;
    ManagedContentNodeType: ManagedContentNodeType;
    ManagedTopic: ManagedTopic;
    ManagedTopics: ManagedTopics;
    MapsAndLocationSettings: MapsAndLocationSettings;
    SourceTrackingSettings: SourceTrackingSettings;
    MatchingRule: MatchingRule;
    MatchingRuleItem: MatchingRuleItem;
    MatchingRules: MatchingRules;
    MetadataWithContent: MetadataWithContent;
    AccessControlPolicy: AccessControlPolicy;
    ApexClass: ApexClass;
    ApexComponent: ApexComponent;
    ApexPage: ApexPage;
    ApexTrigger: ApexTrigger;
    Certificate: Certificate;
    ContentAsset: ContentAsset;
    ContentAssetRelationships: ContentAssetRelationships;
    ContentAssetLink: ContentAssetLink;
    ContentAssetVersions: ContentAssetVersions;
    ContentAssetVersion: ContentAssetVersion;
    Document: Document;
    EclairGeoData: EclairGeoData;
    EclairMap: EclairMap;
    EmailTemplate: EmailTemplate;
    Attachment: Attachment;
    NetworkBranding: NetworkBranding;
    Orchestration: Orchestration;
    Scontrol: Scontrol;
    SiteDotCom: SiteDotCom;
    StaticResource: StaticResource;
    UiPlugin: UiPlugin;
    WaveDashboard: WaveDashboard;
    WaveDataflow: WaveDataflow;
    WaveLens: WaveLens;
    WaveRecipe: WaveRecipe;
    MilestoneType: MilestoneType;
    MlDomain: MlDomain;
    MobileApplicationDetail: MobileApplicationDetail;
    MobileSettings: MobileSettings;
    DashboardMobileSettings: DashboardMobileSettings;
    ModerationRule: ModerationRule;
    ModeratedEntityField: ModeratedEntityField;
    MyDomainSettings: MyDomainSettings;
    NameSettings: NameSettings;
    NamedCredential: NamedCredential;
    NavigationMenu: NavigationMenu;
    Network: Network;
    CommunityRoles: CommunityRoles;
    NetworkMemberGroup: NetworkMemberGroup;
    NetworkPageOverride: NetworkPageOverride;
    RecommendationAudience: RecommendationAudience;
    RecommendationAudienceDetail: RecommendationAudienceDetail;
    RecommendationDefinition: RecommendationDefinition;
    RecommendationDefinitionDetail: RecommendationDefinitionDetail;
    ScheduledRecommendation: ScheduledRecommendation;
    ScheduledRecommendationDetail: ScheduledRecommendationDetail;
    ReputationLevelDefinitions: ReputationLevelDefinitions;
    ReputationLevel: ReputationLevel;
    ReputationBranding: ReputationBranding;
    ReputationPointsRules: ReputationPointsRules;
    ReputationPointsRule: ReputationPointsRule;
    NetworkTabSet: NetworkTabSet;
    NotificationsSettings: NotificationsSettings;
    OauthCustomScope: OauthCustomScope;
    ObjectLinkingSettings: ObjectLinkingSettings;
    OmniChannelSettings: OmniChannelSettings;
    OpportunitySettings: OpportunitySettings;
    FindSimilarOppFilter: FindSimilarOppFilter;
    OrchestrationContext: OrchestrationContext;
    OrchestrationContextDataset: OrchestrationContextDataset;
    OrchestrationContextEvent: OrchestrationContextEvent;
    OrderManagementSettings: OrderManagementSettings;
    OrderSettings: OrderSettings;
    OrgPreferenceSettings: OrgPreferenceSettings;
    OrganizationSettingsDetail: OrganizationSettingsDetail;
    OrgSettings: OrgSettings;
    Package: Package;
    ProfileObjectPermissions: ProfileObjectPermissions;
    PackageTypeMembers: PackageTypeMembers;
    PardotEinsteinSettings: PardotEinsteinSettings;
    PardotSettings: PardotSettings;
    PartyDataModelSettings: PartyDataModelSettings;
    PathAssistant: PathAssistant;
    PathAssistantStep: PathAssistantStep;
    PathAssistantSettings: PathAssistantSettings;
    PermissionSet: PermissionSet;
    PermissionSetApplicationVisibility: PermissionSetApplicationVisibility;
    PermissionSetApexClassAccess: PermissionSetApexClassAccess;
    PermissionSetCustomMetadataTypeAccess: PermissionSetCustomMetadataTypeAccess;
    PermissionSetCustomPermissions: PermissionSetCustomPermissions;
    PermissionSetExternalDataSourceAccess: PermissionSetExternalDataSourceAccess;
    PermissionSetFieldPermissions: PermissionSetFieldPermissions;
    PermissionSetFlowAccess: PermissionSetFlowAccess;
    PermissionSetObjectPermissions: PermissionSetObjectPermissions;
    PermissionSetApexPageAccess: PermissionSetApexPageAccess;
    PermissionSetRecordTypeVisibility: PermissionSetRecordTypeVisibility;
    PermissionSetTabSetting: PermissionSetTabSetting;
    PermissionSetUserPermission: PermissionSetUserPermission;
    MutingPermissionSet: MutingPermissionSet;
    PermissionSetGroup: PermissionSetGroup;
    PersonListSettings: PersonListSettings;
    PicklistSettings: PicklistSettings;
    PlatformCachePartition: PlatformCachePartition;
    PlatformCachePartitionType: PlatformCachePartitionType;
    PlatformEncryptionSettings: PlatformEncryptionSettings;
    PlatformEventChannel: PlatformEventChannel;
    PlatformEventChannelMember: PlatformEventChannelMember;
    Portal: Portal;
    PostTemplate: PostTemplate;
    PresenceDeclineReason: PresenceDeclineReason;
    PresenceUserConfig: PresenceUserConfig;
    PresenceConfigAssignments: PresenceConfigAssignments;
    PresenceConfigProfileAssignments: PresenceConfigProfileAssignments;
    PresenceConfigUserAssignments: PresenceConfigUserAssignments;
    PrivacySettings: PrivacySettings;
    PrivateConnection: PrivateConnection;
    ExternalConnectionProperty: ExternalConnectionProperty;
    ProductSettings: ProductSettings;
    Profile: Profile;
    ProfileApplicationVisibility: ProfileApplicationVisibility;
    ProfileCategoryGroupVisibility: ProfileCategoryGroupVisibility;
    ProfileApexClassAccess: ProfileApexClassAccess;
    ProfileCustomMetadataTypeAccess: ProfileCustomMetadataTypeAccess;
    ProfileCustomPermissions: ProfileCustomPermissions;
    ProfileExternalDataSourceAccess: ProfileExternalDataSourceAccess;
    ProfileFieldLevelSecurity: ProfileFieldLevelSecurity;
    ProfileFlowAccess: ProfileFlowAccess;
    ProfileLayoutAssignment: ProfileLayoutAssignment;
    ProfileLoginHours: ProfileLoginHours;
    ProfileLoginIpRange: ProfileLoginIpRange;
    ProfileApexPageAccess: ProfileApexPageAccess;
    ProfileRecordTypeVisibility: ProfileRecordTypeVisibility;
    ProfileTabVisibility: ProfileTabVisibility;
    ProfileUserPermission: ProfileUserPermission;
    ProfilePasswordPolicy: ProfilePasswordPolicy;
    ProfileSessionSetting: ProfileSessionSetting;
    Prompt: Prompt;
    PromptVersion: PromptVersion;
    Queue: Queue;
    QueueMembers: QueueMembers;
    PublicGroups: PublicGroups;
    RoleAndSubordinates: RoleAndSubordinates;
    RoleAndSubordinatesInternal: RoleAndSubordinatesInternal;
    Roles: Roles;
    Users: Users;
    QueueSobject: QueueSobject;
    QueueRoutingConfig: QueueRoutingConfig;
    QuickAction: QuickAction;
    FieldOverride: FieldOverride;
    QuickActionLayout: QuickActionLayout;
    QuickActionLayoutColumn: QuickActionLayoutColumn;
    QuickActionLayoutItem: QuickActionLayoutItem;
    QuickActionSendEmailOptions: QuickActionSendEmailOptions;
    QuoteSettings: QuoteSettings;
    RecommendationStrategy: RecommendationStrategy;
    StrategyAction: StrategyAction;
    StrategyActionArg: StrategyActionArg;
    StrategyNodeFilter: StrategyNodeFilter;
    StrategyNodeUnionBase: StrategyNodeUnionBase;
    StrategyNodeBase: StrategyNodeBase;
    StrategyNodeExclusive: StrategyNodeExclusive;
    StrategyNodeIf: StrategyNodeIf;
    IfExpression: IfExpression;
    StrategyNodeInvocableAction: StrategyNodeInvocableAction;
    StrategyNodeInvocableActionArg: StrategyNodeInvocableActionArg;
    StrategyNodeMap: StrategyNodeMap;
    MapExpression: MapExpression;
    StrategyNodeRecommendationLimit: StrategyNodeRecommendationLimit;
    StrategyNodeRecommendationLoad: StrategyNodeRecommendationLoad;
    RecommendationLoadCondition: RecommendationLoadCondition;
    RecommendationConditionValue: RecommendationConditionValue;
    StrategyNodeSort: StrategyNodeSort;
    StrategyNodeSortField: StrategyNodeSortField;
    StrategyNodeUnion: StrategyNodeUnion;
    RecordActionDeployment: RecordActionDeployment;
    RecordActionDeploymentChannel: RecordActionDeploymentChannel;
    RecordActionDefaultItem: RecordActionDefaultItem;
    RecordActionDeploymentContext: RecordActionDeploymentContext;
    RecordActionRecommendation: RecordActionRecommendation;
    RecordActionSelectableItem: RecordActionSelectableItem;
    RecordPageSettings: RecordPageSettings;
    RemoteSiteSetting: RemoteSiteSetting;
    Report: Report;
    ReportAggregate: ReportAggregate;
    ReportBlockInfo: ReportBlockInfo;
    ReportAggregateReference: ReportAggregateReference;
    ReportBucketField: ReportBucketField;
    ReportBucketFieldValue: ReportBucketFieldValue;
    ReportBucketFieldSourceValue: ReportBucketFieldSourceValue;
    ReportChart: ReportChart;
    ReportColorRange: ReportColorRange;
    ReportColumn: ReportColumn;
    ReportCrossFilter: ReportCrossFilter;
    ReportFilterItem: ReportFilterItem;
    ReportCustomDetailFormula: ReportCustomDetailFormula;
    ReportDataCategoryFilter: ReportDataCategoryFilter;
    ReportFilter: ReportFilter;
    ReportFormattingRule: ReportFormattingRule;
    ReportFormattingRuleValue: ReportFormattingRuleValue;
    ReportGrouping: ReportGrouping;
    ReportHistoricalSelector: ReportHistoricalSelector;
    ReportParam: ReportParam;
    ReportTimeFrameFilter: ReportTimeFrameFilter;
    ReportType: ReportType;
    ObjectRelationship: ObjectRelationship;
    ReportLayoutSection: ReportLayoutSection;
    ReportTypeColumn: ReportTypeColumn;
    RestrictionRule: RestrictionRule;
    RetailExecutionSettings: RetailExecutionSettings;
    RoleOrTerritory: RoleOrTerritory;
    Role: Role;
    Territory: Territory;
    SamlSsoConfig: SamlSsoConfig;
    SchemaSettings: SchemaSettings;
    SearchSettings: SearchSettings;
    SearchSettingsByObject: SearchSettingsByObject;
    ObjectSearchSetting: ObjectSearchSetting;
    SecuritySettings: SecuritySettings;
    NetworkAccess: NetworkAccess;
    IpRange: IpRange;
    PasswordPolicies: PasswordPolicies;
    SessionSettings: SessionSettings;
    SingleSignOnSettings: SingleSignOnSettings;
    ServiceChannel: ServiceChannel;
    ServiceChannelFieldPriority: ServiceChannelFieldPriority;
    ServicePresenceStatus: ServicePresenceStatus;
    ServiceChannelStatus: ServiceChannelStatus;
    SharingBaseRule: SharingBaseRule;
    AccountSharingRuleSettings: AccountSharingRuleSettings;
    SharingCriteriaRule: SharingCriteriaRule;
    SharingGuestRule: SharingGuestRule;
    SharingOwnerRule: SharingOwnerRule;
    SharingTerritoryRule: SharingTerritoryRule;
    SharingRules: SharingRules;
    SharingSet: SharingSet;
    AccessMapping: AccessMapping;
    SharingSettings: SharingSettings;
    SiteSettings: SiteSettings;
    Skill: Skill;
    SkillAssignments: SkillAssignments;
    SkillProfileAssignments: SkillProfileAssignments;
    SkillUserAssignments: SkillUserAssignments;
    SocialCustomerServiceSettings: SocialCustomerServiceSettings;
    SocialProfileSettings: SocialProfileSettings;
    StandardValueSet: StandardValueSet;
    StandardValueSetTranslation: StandardValueSetTranslation;
    SurveySettings: SurveySettings;
    SynonymDictionary: SynonymDictionary;
    SystemNotificationSettings: SystemNotificationSettings;
    Territory2: Territory2;
    FieldValue: FieldValue;
    Territory2RuleAssociation: Territory2RuleAssociation;
    Territory2Model: Territory2Model;
    Territory2Rule: Territory2Rule;
    Territory2RuleItem: Territory2RuleItem;
    Territory2Settings: Territory2Settings;
    Territory2SettingsOpportunityFilter: Territory2SettingsOpportunityFilter;
    Territory2Type: Territory2Type;
    TimeSheetTemplate: TimeSheetTemplate;
    TimeSheetTemplateAssignment: TimeSheetTemplateAssignment;
    TopicsForObjects: TopicsForObjects;
    TrailheadSettings: TrailheadSettings;
    TransactionSecurityPolicy: TransactionSecurityPolicy;
    TransactionSecurityAction: TransactionSecurityAction;
    TransactionSecurityNotification: TransactionSecurityNotification;
    Translations: Translations;
    CustomApplicationTranslation: CustomApplicationTranslation;
    CustomDataTypeTranslation: CustomDataTypeTranslation;
    CustomDataTypeComponentTranslation: CustomDataTypeComponentTranslation;
    CustomLabelTranslation: CustomLabelTranslation;
    CustomPageWebLinkTranslation: CustomPageWebLinkTranslation;
    CustomTabTranslation: CustomTabTranslation;
    FlowDefinitionTranslation: FlowDefinitionTranslation;
    FlowTranslation: FlowTranslation;
    FlowChoiceTranslation: FlowChoiceTranslation;
    FlowChoiceUserInputTranslation: FlowChoiceUserInputTranslation;
    FlowInputValidationRuleTranslation: FlowInputValidationRuleTranslation;
    FlowScreenTranslation: FlowScreenTranslation;
    FlowScreenFieldTranslation: FlowScreenFieldTranslation;
    FlowStageTranslation: FlowStageTranslation;
    FlowTextTemplateTranslation: FlowTextTemplateTranslation;
    GlobalQuickActionTranslation: GlobalQuickActionTranslation;
    ReportTypeTranslation: ReportTypeTranslation;
    ReportTypeSectionTranslation: ReportTypeSectionTranslation;
    ReportTypeColumnTranslation: ReportTypeColumnTranslation;
    ScontrolTranslation: ScontrolTranslation;
    UIObjectRelationConfig: UIObjectRelationConfig;
    UIObjectRelationFieldConfig: UIObjectRelationFieldConfig;
    UserCriteria: UserCriteria;
    UserEngagementSettings: UserEngagementSettings;
    UserInterfaceSettings: UserInterfaceSettings;
    UserManagementSettings: UserManagementSettings;
    VoiceSettings: VoiceSettings;
    WaveApplication: WaveApplication;
    WaveDataset: WaveDataset;
    WaveTemplateBundle: WaveTemplateBundle;
    WaveXmd: WaveXmd;
    WaveXmdDate: WaveXmdDate;
    WaveXmdDimension: WaveXmdDimension;
    WaveXmdFormattingProperty: WaveXmdFormattingProperty;
    WaveXmdFormattingBin: WaveXmdFormattingBin;
    WaveXmdFormattingPredicate: WaveXmdFormattingPredicate;
    WaveXmdDimensionCustomAction: WaveXmdDimensionCustomAction;
    WaveXmdDimensionMember: WaveXmdDimensionMember;
    WaveXmdRecordDisplayLookup: WaveXmdRecordDisplayLookup;
    WaveXmdDimensionSalesforceAction: WaveXmdDimensionSalesforceAction;
    WaveXmdMeasure: WaveXmdMeasure;
    WaveXmdOrganization: WaveXmdOrganization;
    WorkDotComSettings: WorkDotComSettings;
    Workflow: Workflow;
    WorkflowAlert: WorkflowAlert;
    WorkflowAction: WorkflowAction;
    WorkflowFieldUpdate: WorkflowFieldUpdate;
    WorkflowFlowAction: WorkflowFlowAction;
    WorkflowFlowActionParameter: WorkflowFlowActionParameter;
    WorkflowKnowledgePublish: WorkflowKnowledgePublish;
    WorkflowOutboundMessage: WorkflowOutboundMessage;
    WorkflowSend: WorkflowSend;
    WorkflowTask: WorkflowTask;
    WorkflowEmailRecipient: WorkflowEmailRecipient;
    WorkflowRule: WorkflowRule;
    WorkflowTimeTrigger: WorkflowTimeTrigger;
    SaveResult: SaveResult;
    Error: Error;
    ExtendedErrorDetails: ExtendedErrorDetails;
    DeleteResult: DeleteResult;
    DeployOptions: DeployOptions;
    AsyncResult: AsyncResult;
    DescribeMetadataResult: DescribeMetadataResult;
    DescribeMetadataObject: DescribeMetadataObject;
    DescribeValueTypeResult: DescribeValueTypeResult;
    ValueTypeField: ValueTypeField;
    PicklistEntry: PicklistEntry;
    ListMetadataQuery: ListMetadataQuery;
    ReadResult: ReadResult;
    RetrieveRequest: RetrieveRequest;
    UpsertResult: UpsertResult;
    LogInfo: LogInfo;
};
