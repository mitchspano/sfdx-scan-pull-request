import { Schema, SObjectDefinition, DateString, BlobString, Address } from './schema';
declare type Fields$AcceptedEventRelation = {
    Id: string;
    RelationId: string | null;
    EventId: string | null;
    RespondedDate: DateString | null;
    Response: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
    Type: string | null;
};
declare type ParentReferences$AcceptedEventRelation = {
    Relation: SObjectDefinition$Name | null;
    Event: SObjectDefinition$Event | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$AcceptedEventRelation = {};
interface SObjectDefinition$AcceptedEventRelation extends SObjectDefinition<'AcceptedEventRelation'> {
    Name: 'AcceptedEventRelation';
    Fields: Fields$AcceptedEventRelation;
    ParentReferences: ParentReferences$AcceptedEventRelation;
    ChildRelationships: ChildRelationships$AcceptedEventRelation;
}
declare type Fields$Account = {
    Id: string;
    IsDeleted: boolean;
    MasterRecordId: string | null;
    Name: string;
    Type: string | null;
    ParentId: string | null;
    BillingStreet: string | null;
    BillingCity: string | null;
    BillingState: string | null;
    BillingPostalCode: string | null;
    BillingCountry: string | null;
    BillingLatitude: number | null;
    BillingLongitude: number | null;
    BillingGeocodeAccuracy: string | null;
    BillingAddress: Address | null;
    ShippingStreet: string | null;
    ShippingCity: string | null;
    ShippingState: string | null;
    ShippingPostalCode: string | null;
    ShippingCountry: string | null;
    ShippingLatitude: number | null;
    ShippingLongitude: number | null;
    ShippingGeocodeAccuracy: string | null;
    ShippingAddress: Address | null;
    Phone: string | null;
    Fax: string | null;
    Website: string | null;
    PhotoUrl: string | null;
    Industry: string | null;
    AnnualRevenue: number | null;
    NumberOfEmployees: number | null;
    Description: string | null;
    OwnerId: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastActivityDate: DateString | null;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    IsCustomerPortal: boolean;
    Jigsaw: string | null;
    JigsawCompanyId: string | null;
    AccountSource: string | null;
    SicDesc: string | null;
};
declare type ParentReferences$Account = {
    MasterRecord: SObjectDefinition$Account | null;
    Parent: SObjectDefinition$Account | null;
    Owner: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Account = {
    ChildAccounts: SObjectDefinition$Account;
    AccountBrands: SObjectDefinition$AccountBrand;
    AccountContactRoles: SObjectDefinition$AccountContactRole;
    Feeds: SObjectDefinition$AccountFeed;
    Histories: SObjectDefinition$AccountHistory;
    AccountPartnersFrom: SObjectDefinition$AccountPartner;
    AccountPartnersTo: SObjectDefinition$AccountPartner;
    Shares: SObjectDefinition$AccountShare;
    ActivityHistories: SObjectDefinition$ActivityHistory;
    Assets: SObjectDefinition$Asset;
    ProvidedAssets: SObjectDefinition$Asset;
    ServicedAssets: SObjectDefinition$Asset;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    Cases: SObjectDefinition$Case;
    RecordAssociatedGroups: SObjectDefinition$CollaborationGroupRecord;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    Contacts: SObjectDefinition$Contact;
    ContactRequests: SObjectDefinition$ContactRequest;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    Contracts: SObjectDefinition$Contract;
    DuplicateRecordItems: SObjectDefinition$DuplicateRecordItem;
    Emails: SObjectDefinition$EmailMessage;
    Entitlements: SObjectDefinition$Entitlement;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    OpenActivities: SObjectDefinition$OpenActivity;
    Opportunities: SObjectDefinition$Opportunity;
    OpportunityPartnersTo: SObjectDefinition$OpportunityPartner;
    Orders: SObjectDefinition$Order;
    PartnersFrom: SObjectDefinition$Partner;
    PartnersTo: SObjectDefinition$Partner;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    ServiceContracts: SObjectDefinition$ServiceContract;
    Personas: SObjectDefinition$SocialPersona;
    Posts: SObjectDefinition$SocialPost;
    Tasks: SObjectDefinition$Task;
    TopicAssignments: SObjectDefinition$TopicAssignment;
    Users: SObjectDefinition$User;
    WorkOrders: SObjectDefinition$WorkOrder;
};
interface SObjectDefinition$Account extends SObjectDefinition<'Account'> {
    Name: 'Account';
    Fields: Fields$Account;
    ParentReferences: ParentReferences$Account;
    ChildRelationships: ChildRelationships$Account;
}
declare type Fields$AccountBrand = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    AccountId: string;
    CompanyName: string | null;
    Street: string | null;
    City: string | null;
    State: string | null;
    PostalCode: string | null;
    Country: string | null;
    Latitude: number | null;
    Longitude: number | null;
    GeocodeAccuracy: string | null;
    Address: Address | null;
    Website: string | null;
    Email: string | null;
    Phone: string | null;
    LogoId: string | null;
};
declare type ParentReferences$AccountBrand = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Account: SObjectDefinition$Account;
    Logo: SObjectDefinition$ContentAsset | null;
};
declare type ChildRelationships$AccountBrand = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
};
interface SObjectDefinition$AccountBrand extends SObjectDefinition<'AccountBrand'> {
    Name: 'AccountBrand';
    Fields: Fields$AccountBrand;
    ParentReferences: ParentReferences$AccountBrand;
    ChildRelationships: ChildRelationships$AccountBrand;
}
declare type Fields$AccountBrandShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$AccountBrandShare = {
    Parent: SObjectDefinition$AccountBrand;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$AccountBrandShare = {};
interface SObjectDefinition$AccountBrandShare extends SObjectDefinition<'AccountBrandShare'> {
    Name: 'AccountBrandShare';
    Fields: Fields$AccountBrandShare;
    ParentReferences: ParentReferences$AccountBrandShare;
    ChildRelationships: ChildRelationships$AccountBrandShare;
}
declare type Fields$AccountChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    Name: string | null;
    LastName: string | null;
    FirstName: string | null;
    Salutation: string | null;
    Type: string | null;
    ParentId: string | null;
    BillingStreet: string | null;
    BillingCity: string | null;
    BillingState: string | null;
    BillingPostalCode: string | null;
    BillingCountry: string | null;
    BillingLatitude: number | null;
    BillingLongitude: number | null;
    BillingGeocodeAccuracy: string | null;
    BillingAddress: Address | null;
    ShippingStreet: string | null;
    ShippingCity: string | null;
    ShippingState: string | null;
    ShippingPostalCode: string | null;
    ShippingCountry: string | null;
    ShippingLatitude: number | null;
    ShippingLongitude: number | null;
    ShippingGeocodeAccuracy: string | null;
    ShippingAddress: Address | null;
    Phone: string | null;
    Fax: string | null;
    Website: string | null;
    Industry: string | null;
    AnnualRevenue: number | null;
    NumberOfEmployees: number | null;
    Description: string | null;
    OwnerId: string | null;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    Jigsaw: string | null;
    JigsawCompanyId: string | null;
    AccountSource: string | null;
    SicDesc: string | null;
};
declare type ParentReferences$AccountChangeEvent = {};
declare type ChildRelationships$AccountChangeEvent = {};
interface SObjectDefinition$AccountChangeEvent extends SObjectDefinition<'AccountChangeEvent'> {
    Name: 'AccountChangeEvent';
    Fields: Fields$AccountChangeEvent;
    ParentReferences: ParentReferences$AccountChangeEvent;
    ChildRelationships: ChildRelationships$AccountChangeEvent;
}
declare type Fields$AccountContactRole = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    AccountId: string;
    ContactId: string;
    Role: string | null;
    IsPrimary: boolean;
};
declare type ParentReferences$AccountContactRole = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Account: SObjectDefinition$Account;
    Contact: SObjectDefinition$Contact;
};
declare type ChildRelationships$AccountContactRole = {};
interface SObjectDefinition$AccountContactRole extends SObjectDefinition<'AccountContactRole'> {
    Name: 'AccountContactRole';
    Fields: Fields$AccountContactRole;
    ParentReferences: ParentReferences$AccountContactRole;
    ChildRelationships: ChildRelationships$AccountContactRole;
}
declare type Fields$AccountContactRoleChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    AccountId: string | null;
    ContactId: string | null;
    Role: string | null;
    IsPrimary: boolean;
};
declare type ParentReferences$AccountContactRoleChangeEvent = {};
declare type ChildRelationships$AccountContactRoleChangeEvent = {};
interface SObjectDefinition$AccountContactRoleChangeEvent extends SObjectDefinition<'AccountContactRoleChangeEvent'> {
    Name: 'AccountContactRoleChangeEvent';
    Fields: Fields$AccountContactRoleChangeEvent;
    ParentReferences: ParentReferences$AccountContactRoleChangeEvent;
    ChildRelationships: ChildRelationships$AccountContactRoleChangeEvent;
}
declare type Fields$AccountFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$AccountFeed = {
    Parent: SObjectDefinition$Account;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$AccountFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$AccountFeed extends SObjectDefinition<'AccountFeed'> {
    Name: 'AccountFeed';
    Fields: Fields$AccountFeed;
    ParentReferences: ParentReferences$AccountFeed;
    ChildRelationships: ChildRelationships$AccountFeed;
}
declare type Fields$AccountHistory = {
    Id: string;
    IsDeleted: boolean;
    AccountId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$AccountHistory = {
    Account: SObjectDefinition$Account;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$AccountHistory = {};
interface SObjectDefinition$AccountHistory extends SObjectDefinition<'AccountHistory'> {
    Name: 'AccountHistory';
    Fields: Fields$AccountHistory;
    ParentReferences: ParentReferences$AccountHistory;
    ChildRelationships: ChildRelationships$AccountHistory;
}
declare type Fields$AccountPartner = {
    Id: string;
    AccountFromId: string;
    AccountToId: string;
    OpportunityId: string | null;
    Role: string | null;
    IsPrimary: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
    ReversePartnerId: string | null;
};
declare type ParentReferences$AccountPartner = {
    AccountFrom: SObjectDefinition$Account;
    AccountTo: SObjectDefinition$Account;
    Opportunity: SObjectDefinition$Opportunity | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$AccountPartner = {};
interface SObjectDefinition$AccountPartner extends SObjectDefinition<'AccountPartner'> {
    Name: 'AccountPartner';
    Fields: Fields$AccountPartner;
    ParentReferences: ParentReferences$AccountPartner;
    ChildRelationships: ChildRelationships$AccountPartner;
}
declare type Fields$AccountShare = {
    Id: string;
    AccountId: string;
    UserOrGroupId: string;
    AccountAccessLevel: string;
    OpportunityAccessLevel: string;
    CaseAccessLevel: string;
    ContactAccessLevel: string | null;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$AccountShare = {
    Account: SObjectDefinition$Account;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$AccountShare = {};
interface SObjectDefinition$AccountShare extends SObjectDefinition<'AccountShare'> {
    Name: 'AccountShare';
    Fields: Fields$AccountShare;
    ParentReferences: ParentReferences$AccountShare;
    ChildRelationships: ChildRelationships$AccountShare;
}
declare type Fields$ActionLinkGroupTemplate = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string | null;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ExecutionsAllowed: string;
    HoursUntilExpiration: number | null;
    Category: string;
    IsPublished: boolean;
};
declare type ParentReferences$ActionLinkGroupTemplate = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ActionLinkGroupTemplate = {
    ActionLinkTemplates: SObjectDefinition$ActionLinkTemplate;
};
interface SObjectDefinition$ActionLinkGroupTemplate extends SObjectDefinition<'ActionLinkGroupTemplate'> {
    Name: 'ActionLinkGroupTemplate';
    Fields: Fields$ActionLinkGroupTemplate;
    ParentReferences: ParentReferences$ActionLinkGroupTemplate;
    ChildRelationships: ChildRelationships$ActionLinkGroupTemplate;
}
declare type Fields$ActionLinkTemplate = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ActionLinkGroupTemplateId: string;
    LabelKey: string;
    Method: string;
    LinkType: string;
    Position: number;
    IsConfirmationRequired: boolean;
    IsGroupDefault: boolean;
    UserVisibility: string;
    UserAlias: string | null;
    Label: string | null;
    ActionUrl: string;
    RequestBody: string | null;
    Headers: string | null;
};
declare type ParentReferences$ActionLinkTemplate = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ActionLinkGroupTemplate: SObjectDefinition$ActionLinkGroupTemplate;
};
declare type ChildRelationships$ActionLinkTemplate = {};
interface SObjectDefinition$ActionLinkTemplate extends SObjectDefinition<'ActionLinkTemplate'> {
    Name: 'ActionLinkTemplate';
    Fields: Fields$ActionLinkTemplate;
    ParentReferences: ParentReferences$ActionLinkTemplate;
    ChildRelationships: ChildRelationships$ActionLinkTemplate;
}
declare type Fields$ActivityHistory = {
    Id: string;
    AccountId: string | null;
    WhoId: string | null;
    WhatId: string | null;
    Subject: string | null;
    IsTask: boolean;
    ActivityDate: DateString | null;
    OwnerId: string | null;
    Status: string | null;
    Priority: string | null;
    IsHighPriority: boolean;
    ActivityType: string | null;
    IsClosed: boolean;
    IsAllDayEvent: boolean;
    DurationInMinutes: number | null;
    Location: string | null;
    Description: string | null;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    CallDurationInSeconds: number | null;
    CallType: string | null;
    CallDisposition: string | null;
    CallObject: string | null;
    ReminderDateTime: DateString | null;
    IsReminderSet: boolean;
    EndDateTime: DateString | null;
    StartDateTime: DateString | null;
    ActivitySubtype: string | null;
    AlternateDetailId: string | null;
};
declare type ParentReferences$ActivityHistory = {
    Account: SObjectDefinition$Account | null;
    Who: SObjectDefinition$Name | null;
    What: SObjectDefinition$Name | null;
    Owner: SObjectDefinition$User | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    AlternateDetail: SObjectDefinition$EmailMessage | null;
};
declare type ChildRelationships$ActivityHistory = {};
interface SObjectDefinition$ActivityHistory extends SObjectDefinition<'ActivityHistory'> {
    Name: 'ActivityHistory';
    Fields: Fields$ActivityHistory;
    ParentReferences: ParentReferences$ActivityHistory;
    ChildRelationships: ChildRelationships$ActivityHistory;
}
declare type Fields$AdditionalNumber = {
    Id: string;
    IsDeleted: boolean;
    CallCenterId: string | null;
    Name: string;
    Description: string | null;
    Phone: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$AdditionalNumber = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$AdditionalNumber = {};
interface SObjectDefinition$AdditionalNumber extends SObjectDefinition<'AdditionalNumber'> {
    Name: 'AdditionalNumber';
    Fields: Fields$AdditionalNumber;
    ParentReferences: ParentReferences$AdditionalNumber;
    ChildRelationships: ChildRelationships$AdditionalNumber;
}
declare type Fields$AggregateResult = {
    Id: string;
};
declare type ParentReferences$AggregateResult = {};
declare type ChildRelationships$AggregateResult = {};
interface SObjectDefinition$AggregateResult extends SObjectDefinition<'AggregateResult'> {
    Name: 'AggregateResult';
    Fields: Fields$AggregateResult;
    ParentReferences: ParentReferences$AggregateResult;
    ChildRelationships: ChildRelationships$AggregateResult;
}
declare type Fields$Announcement = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    FeedItemId: string;
    ExpirationDate: DateString;
    SendEmails: boolean;
    IsArchived: boolean;
    ParentId: string | null;
};
declare type ParentReferences$Announcement = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    FeedItem: SObjectDefinition$FeedItem;
    Parent: SObjectDefinition$CollaborationGroup | null;
};
declare type ChildRelationships$Announcement = {};
interface SObjectDefinition$Announcement extends SObjectDefinition<'Announcement'> {
    Name: 'Announcement';
    Fields: Fields$Announcement;
    ParentReferences: ParentReferences$Announcement;
    ChildRelationships: ChildRelationships$Announcement;
}
declare type Fields$ApexClass = {
    Id: string;
    NamespacePrefix: string | null;
    Name: string;
    ApiVersion: number;
    Status: string;
    IsValid: boolean;
    BodyCrc: number | null;
    Body: string | null;
    LengthWithoutComments: number;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$ApexClass = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ApexClass = {
    SetupEntityAccessItems: SObjectDefinition$SetupEntityAccess;
};
interface SObjectDefinition$ApexClass extends SObjectDefinition<'ApexClass'> {
    Name: 'ApexClass';
    Fields: Fields$ApexClass;
    ParentReferences: ParentReferences$ApexClass;
    ChildRelationships: ChildRelationships$ApexClass;
}
declare type Fields$ApexComponent = {
    Id: string;
    NamespacePrefix: string | null;
    Name: string;
    ApiVersion: number;
    MasterLabel: string;
    Description: string | null;
    ControllerType: string;
    ControllerKey: string | null;
    Markup: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$ApexComponent = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ApexComponent = {};
interface SObjectDefinition$ApexComponent extends SObjectDefinition<'ApexComponent'> {
    Name: 'ApexComponent';
    Fields: Fields$ApexComponent;
    ParentReferences: ParentReferences$ApexComponent;
    ChildRelationships: ChildRelationships$ApexComponent;
}
declare type Fields$ApexEmailNotification = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    UserId: string | null;
    Email: string | null;
};
declare type ParentReferences$ApexEmailNotification = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    User: SObjectDefinition$User | null;
};
declare type ChildRelationships$ApexEmailNotification = {};
interface SObjectDefinition$ApexEmailNotification extends SObjectDefinition<'ApexEmailNotification'> {
    Name: 'ApexEmailNotification';
    Fields: Fields$ApexEmailNotification;
    ParentReferences: ParentReferences$ApexEmailNotification;
    ChildRelationships: ChildRelationships$ApexEmailNotification;
}
declare type Fields$ApexLog = {
    Id: string;
    LogUserId: string | null;
    LogLength: number;
    LastModifiedDate: DateString;
    Request: string;
    Operation: string;
    Application: string;
    Status: string;
    DurationMilliseconds: number;
    SystemModstamp: DateString;
    StartTime: DateString;
    Location: string | null;
};
declare type ParentReferences$ApexLog = {
    LogUser: SObjectDefinition$User | null;
};
declare type ChildRelationships$ApexLog = {};
interface SObjectDefinition$ApexLog extends SObjectDefinition<'ApexLog'> {
    Name: 'ApexLog';
    Fields: Fields$ApexLog;
    ParentReferences: ParentReferences$ApexLog;
    ChildRelationships: ChildRelationships$ApexLog;
}
declare type Fields$ApexPage = {
    Id: string;
    NamespacePrefix: string | null;
    Name: string;
    ApiVersion: number;
    MasterLabel: string;
    Description: string | null;
    ControllerType: string;
    ControllerKey: string | null;
    IsAvailableInTouch: boolean;
    IsConfirmationTokenRequired: boolean;
    Markup: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$ApexPage = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ApexPage = {
    SetupEntityAccessItems: SObjectDefinition$SetupEntityAccess;
};
interface SObjectDefinition$ApexPage extends SObjectDefinition<'ApexPage'> {
    Name: 'ApexPage';
    Fields: Fields$ApexPage;
    ParentReferences: ParentReferences$ApexPage;
    ChildRelationships: ChildRelationships$ApexPage;
}
declare type Fields$ApexPageInfo = {
    Id: string;
    DurableId: string | null;
    ApexPageId: string;
    Name: string;
    NameSpacePrefix: string | null;
    ApiVersion: number;
    Description: string | null;
    IsAvailableInTouch: boolean;
    MasterLabel: string | null;
    IsShowHeader: string | null;
};
declare type ParentReferences$ApexPageInfo = {};
declare type ChildRelationships$ApexPageInfo = {};
interface SObjectDefinition$ApexPageInfo extends SObjectDefinition<'ApexPageInfo'> {
    Name: 'ApexPageInfo';
    Fields: Fields$ApexPageInfo;
    ParentReferences: ParentReferences$ApexPageInfo;
    ChildRelationships: ChildRelationships$ApexPageInfo;
}
declare type Fields$ApexTestQueueItem = {
    Id: string;
    CreatedDate: DateString;
    CreatedById: string;
    SystemModstamp: DateString;
    ApexClassId: string;
    Status: string;
    ExtendedStatus: string | null;
    ParentJobId: string | null;
    TestRunResultId: string | null;
    ShouldSkipCodeCoverage: boolean;
};
declare type ParentReferences$ApexTestQueueItem = {
    CreatedBy: SObjectDefinition$User;
    ApexClass: SObjectDefinition$ApexClass;
};
declare type ChildRelationships$ApexTestQueueItem = {};
interface SObjectDefinition$ApexTestQueueItem extends SObjectDefinition<'ApexTestQueueItem'> {
    Name: 'ApexTestQueueItem';
    Fields: Fields$ApexTestQueueItem;
    ParentReferences: ParentReferences$ApexTestQueueItem;
    ChildRelationships: ChildRelationships$ApexTestQueueItem;
}
declare type Fields$ApexTestResult = {
    Id: string;
    SystemModstamp: DateString;
    TestTimestamp: DateString;
    Outcome: string;
    ApexClassId: string;
    MethodName: string | null;
    Message: string | null;
    StackTrace: string | null;
    AsyncApexJobId: string | null;
    QueueItemId: string | null;
    ApexLogId: string | null;
    ApexTestRunResultId: string | null;
    RunTime: number | null;
};
declare type ParentReferences$ApexTestResult = {
    ApexClass: SObjectDefinition$ApexClass;
    AsyncApexJob: SObjectDefinition$AsyncApexJob | null;
    QueueItem: SObjectDefinition$ApexTestQueueItem | null;
    ApexLog: SObjectDefinition$ApexLog | null;
    ApexTestRunResult: SObjectDefinition$ApexTestRunResult | null;
};
declare type ChildRelationships$ApexTestResult = {
    ApexTestResults: SObjectDefinition$ApexTestResultLimits;
};
interface SObjectDefinition$ApexTestResult extends SObjectDefinition<'ApexTestResult'> {
    Name: 'ApexTestResult';
    Fields: Fields$ApexTestResult;
    ParentReferences: ParentReferences$ApexTestResult;
    ChildRelationships: ChildRelationships$ApexTestResult;
}
declare type Fields$ApexTestResultLimits = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ApexTestResultId: string;
    Soql: number;
    QueryRows: number;
    Sosl: number;
    Dml: number;
    DmlRows: number;
    Cpu: number;
    Callouts: number;
    Email: number;
    AsyncCalls: number;
    MobilePush: number;
    LimitContext: string | null;
    LimitExceptions: string | null;
};
declare type ParentReferences$ApexTestResultLimits = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ApexTestResult: SObjectDefinition$ApexTestResult;
};
declare type ChildRelationships$ApexTestResultLimits = {};
interface SObjectDefinition$ApexTestResultLimits extends SObjectDefinition<'ApexTestResultLimits'> {
    Name: 'ApexTestResultLimits';
    Fields: Fields$ApexTestResultLimits;
    ParentReferences: ParentReferences$ApexTestResultLimits;
    ChildRelationships: ChildRelationships$ApexTestResultLimits;
}
declare type Fields$ApexTestRunResult = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    AsyncApexJobId: string | null;
    UserId: string | null;
    JobName: string | null;
    IsAllTests: boolean;
    Source: string | null;
    StartTime: DateString;
    EndTime: DateString | null;
    TestTime: number | null;
    Status: string;
    ClassesEnqueued: number;
    ClassesCompleted: number | null;
    MethodsEnqueued: number | null;
    MethodsCompleted: number | null;
    MethodsFailed: number | null;
};
declare type ParentReferences$ApexTestRunResult = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    AsyncApexJob: SObjectDefinition$AsyncApexJob | null;
    User: SObjectDefinition$User | null;
};
declare type ChildRelationships$ApexTestRunResult = {};
interface SObjectDefinition$ApexTestRunResult extends SObjectDefinition<'ApexTestRunResult'> {
    Name: 'ApexTestRunResult';
    Fields: Fields$ApexTestRunResult;
    ParentReferences: ParentReferences$ApexTestRunResult;
    ChildRelationships: ChildRelationships$ApexTestRunResult;
}
declare type Fields$ApexTestSuite = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    TestSuiteName: string;
};
declare type ParentReferences$ApexTestSuite = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ApexTestSuite = {
    ApexClassJunctions: SObjectDefinition$TestSuiteMembership;
};
interface SObjectDefinition$ApexTestSuite extends SObjectDefinition<'ApexTestSuite'> {
    Name: 'ApexTestSuite';
    Fields: Fields$ApexTestSuite;
    ParentReferences: ParentReferences$ApexTestSuite;
    ChildRelationships: ChildRelationships$ApexTestSuite;
}
declare type Fields$ApexTrigger = {
    Id: string;
    NamespacePrefix: string | null;
    Name: string;
    TableEnumOrId: string | null;
    UsageBeforeInsert: boolean;
    UsageAfterInsert: boolean;
    UsageBeforeUpdate: boolean;
    UsageAfterUpdate: boolean;
    UsageBeforeDelete: boolean;
    UsageAfterDelete: boolean;
    UsageIsBulk: boolean;
    UsageAfterUndelete: boolean;
    ApiVersion: number;
    Status: string;
    IsValid: boolean;
    BodyCrc: number | null;
    Body: string | null;
    LengthWithoutComments: number;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$ApexTrigger = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ApexTrigger = {};
interface SObjectDefinition$ApexTrigger extends SObjectDefinition<'ApexTrigger'> {
    Name: 'ApexTrigger';
    Fields: Fields$ApexTrigger;
    ParentReferences: ParentReferences$ApexTrigger;
    ChildRelationships: ChildRelationships$ApexTrigger;
}
declare type Fields$AppDefinition = {
    Id: string;
    DurableId: string | null;
    Label: string | null;
    MasterLabel: string | null;
    NamespacePrefix: string | null;
    DeveloperName: string | null;
    LogoUrl: string | null;
    Description: string | null;
    UiType: string | null;
    NavType: string | null;
    UtilityBar: string | null;
    HeaderColor: string | null;
    IsOverrideOrgTheme: boolean;
    IsSmallFormFactorSupported: boolean;
    IsMediumFormFactorSupported: boolean;
    IsLargeFormFactorSupported: boolean;
    IsNavPersonalizationDisabled: boolean;
    IsNavAutoTempTabsDisabled: boolean;
};
declare type ParentReferences$AppDefinition = {};
declare type ChildRelationships$AppDefinition = {
    AppTabs: SObjectDefinition$AppTabMember;
};
interface SObjectDefinition$AppDefinition extends SObjectDefinition<'AppDefinition'> {
    Name: 'AppDefinition';
    Fields: Fields$AppDefinition;
    ParentReferences: ParentReferences$AppDefinition;
    ChildRelationships: ChildRelationships$AppDefinition;
}
declare type Fields$AppMenuItem = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    SortOrder: number;
    Name: string | null;
    NamespacePrefix: string | null;
    Label: string | null;
    Description: string | null;
    StartUrl: string | null;
    MobileStartUrl: string | null;
    LogoUrl: string | null;
    IconUrl: string | null;
    InfoUrl: string | null;
    IsUsingAdminAuthorization: boolean;
    MobilePlatform: string | null;
    MobileMinOsVer: string | null;
    MobileDeviceType: string | null;
    IsRegisteredDeviceOnly: boolean;
    MobileAppVer: string | null;
    MobileAppInstalledDate: DateString | null;
    MobileAppInstalledVersion: string | null;
    MobileAppBinaryId: string | null;
    MobileAppInstallUrl: string | null;
    CanvasEnabled: boolean;
    CanvasReferenceId: string | null;
    CanvasUrl: string | null;
    CanvasAccessMethod: string | null;
    CanvasSelectedLocations: string | null;
    CanvasOptions: string | null;
    Type: string | null;
    ApplicationId: string | null;
    UserSortOrder: number | null;
    IsVisible: boolean;
    IsAccessible: boolean;
};
declare type ParentReferences$AppMenuItem = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$AppMenuItem = {};
interface SObjectDefinition$AppMenuItem extends SObjectDefinition<'AppMenuItem'> {
    Name: 'AppMenuItem';
    Fields: Fields$AppMenuItem;
    ParentReferences: ParentReferences$AppMenuItem;
    ChildRelationships: ChildRelationships$AppMenuItem;
}
declare type Fields$AppTabMember = {
    Id: string;
    DurableId: string | null;
    AppDefinitionId: string | null;
    TabDefinitionId: string | null;
    SortOrder: number | null;
    WorkspaceDriverField: string | null;
};
declare type ParentReferences$AppTabMember = {};
declare type ChildRelationships$AppTabMember = {};
interface SObjectDefinition$AppTabMember extends SObjectDefinition<'AppTabMember'> {
    Name: 'AppTabMember';
    Fields: Fields$AppTabMember;
    ParentReferences: ParentReferences$AppTabMember;
    ChildRelationships: ChildRelationships$AppTabMember;
}
declare type Fields$Approval = {
    Id: string;
    IsDeleted: boolean;
    ParentId: string;
    OwnerId: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    Status: string;
    RequestComment: string | null;
    ApproveComment: string | null;
    SystemModstamp: DateString;
};
declare type ParentReferences$Approval = {
    Parent: SObjectDefinition$Contract;
    Owner: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Approval = {};
interface SObjectDefinition$Approval extends SObjectDefinition<'Approval'> {
    Name: 'Approval';
    Fields: Fields$Approval;
    ParentReferences: ParentReferences$Approval;
    ChildRelationships: ChildRelationships$Approval;
}
declare type Fields$Asset = {
    Id: string;
    ContactId: string | null;
    AccountId: string | null;
    ParentId: string | null;
    RootAssetId: string | null;
    Product2Id: string | null;
    ProductCode: string | null;
    IsCompetitorProduct: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
    Name: string;
    SerialNumber: string | null;
    InstallDate: DateString | null;
    PurchaseDate: DateString | null;
    UsageEndDate: DateString | null;
    Status: string | null;
    Price: number | null;
    Quantity: number | null;
    Description: string | null;
    OwnerId: string;
    AssetProvidedById: string | null;
    AssetServicedById: string | null;
    IsInternal: boolean;
    AssetLevel: number | null;
    StockKeepingUnit: string | null;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
};
declare type ParentReferences$Asset = {
    Contact: SObjectDefinition$Contact | null;
    Account: SObjectDefinition$Account | null;
    Parent: SObjectDefinition$Asset | null;
    RootAsset: SObjectDefinition$Asset | null;
    Product2: SObjectDefinition$Product2 | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Owner: SObjectDefinition$User;
    AssetProvidedBy: SObjectDefinition$Account | null;
    AssetServicedBy: SObjectDefinition$Account | null;
};
declare type ChildRelationships$Asset = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    ChildAssets: SObjectDefinition$Asset;
    Feeds: SObjectDefinition$AssetFeed;
    Histories: SObjectDefinition$AssetHistory;
    PrimaryAssets: SObjectDefinition$AssetRelationship;
    RelatedAssets: SObjectDefinition$AssetRelationship;
    Shares: SObjectDefinition$AssetShare;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    Cases: SObjectDefinition$Case;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    ContractLineItems: SObjectDefinition$ContractLineItem;
    Emails: SObjectDefinition$EmailMessage;
    Entitlements: SObjectDefinition$Entitlement;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    OpenActivities: SObjectDefinition$OpenActivity;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    Tasks: SObjectDefinition$Task;
    TopicAssignments: SObjectDefinition$TopicAssignment;
    WorkOrders: SObjectDefinition$WorkOrder;
    WorkOrderLineItems: SObjectDefinition$WorkOrderLineItem;
};
interface SObjectDefinition$Asset extends SObjectDefinition<'Asset'> {
    Name: 'Asset';
    Fields: Fields$Asset;
    ParentReferences: ParentReferences$Asset;
    ChildRelationships: ChildRelationships$Asset;
}
declare type Fields$AssetChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    ContactId: string | null;
    AccountId: string | null;
    ParentId: string | null;
    RootAssetId: string | null;
    Product2Id: string | null;
    IsCompetitorProduct: boolean;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    Name: string | null;
    SerialNumber: string | null;
    InstallDate: DateString | null;
    PurchaseDate: DateString | null;
    UsageEndDate: DateString | null;
    Status: string | null;
    Price: number | null;
    Quantity: number | null;
    Description: string | null;
    OwnerId: string | null;
    AssetProvidedById: string | null;
    AssetServicedById: string | null;
    IsInternal: boolean;
};
declare type ParentReferences$AssetChangeEvent = {};
declare type ChildRelationships$AssetChangeEvent = {};
interface SObjectDefinition$AssetChangeEvent extends SObjectDefinition<'AssetChangeEvent'> {
    Name: 'AssetChangeEvent';
    Fields: Fields$AssetChangeEvent;
    ParentReferences: ParentReferences$AssetChangeEvent;
    ChildRelationships: ChildRelationships$AssetChangeEvent;
}
declare type Fields$AssetFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$AssetFeed = {
    Parent: SObjectDefinition$Asset;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$AssetFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$AssetFeed extends SObjectDefinition<'AssetFeed'> {
    Name: 'AssetFeed';
    Fields: Fields$AssetFeed;
    ParentReferences: ParentReferences$AssetFeed;
    ChildRelationships: ChildRelationships$AssetFeed;
}
declare type Fields$AssetHistory = {
    Id: string;
    IsDeleted: boolean;
    AssetId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$AssetHistory = {
    Asset: SObjectDefinition$Asset;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$AssetHistory = {};
interface SObjectDefinition$AssetHistory extends SObjectDefinition<'AssetHistory'> {
    Name: 'AssetHistory';
    Fields: Fields$AssetHistory;
    ParentReferences: ParentReferences$AssetHistory;
    ChildRelationships: ChildRelationships$AssetHistory;
}
declare type Fields$AssetRelationship = {
    Id: string;
    IsDeleted: boolean;
    AssetRelationshipNumber: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    AssetId: string;
    RelatedAssetId: string;
    FromDate: DateString | null;
    ToDate: DateString | null;
    RelationshipType: string | null;
};
declare type ParentReferences$AssetRelationship = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Asset: SObjectDefinition$Asset;
    RelatedAsset: SObjectDefinition$Asset;
};
declare type ChildRelationships$AssetRelationship = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    Feeds: SObjectDefinition$AssetRelationshipFeed;
    Histories: SObjectDefinition$AssetRelationshipHistory;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    Emails: SObjectDefinition$EmailMessage;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    OpenActivities: SObjectDefinition$OpenActivity;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    Tasks: SObjectDefinition$Task;
};
interface SObjectDefinition$AssetRelationship extends SObjectDefinition<'AssetRelationship'> {
    Name: 'AssetRelationship';
    Fields: Fields$AssetRelationship;
    ParentReferences: ParentReferences$AssetRelationship;
    ChildRelationships: ChildRelationships$AssetRelationship;
}
declare type Fields$AssetRelationshipFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$AssetRelationshipFeed = {
    Parent: SObjectDefinition$AssetRelationship;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$AssetRelationshipFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$AssetRelationshipFeed extends SObjectDefinition<'AssetRelationshipFeed'> {
    Name: 'AssetRelationshipFeed';
    Fields: Fields$AssetRelationshipFeed;
    ParentReferences: ParentReferences$AssetRelationshipFeed;
    ChildRelationships: ChildRelationships$AssetRelationshipFeed;
}
declare type Fields$AssetRelationshipHistory = {
    Id: string;
    IsDeleted: boolean;
    AssetRelationshipId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$AssetRelationshipHistory = {
    AssetRelationship: SObjectDefinition$AssetRelationship;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$AssetRelationshipHistory = {};
interface SObjectDefinition$AssetRelationshipHistory extends SObjectDefinition<'AssetRelationshipHistory'> {
    Name: 'AssetRelationshipHistory';
    Fields: Fields$AssetRelationshipHistory;
    ParentReferences: ParentReferences$AssetRelationshipHistory;
    ChildRelationships: ChildRelationships$AssetRelationshipHistory;
}
declare type Fields$AssetShare = {
    Id: string;
    AssetId: string;
    UserOrGroupId: string;
    AssetAccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$AssetShare = {
    Asset: SObjectDefinition$Asset;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$AssetShare = {};
interface SObjectDefinition$AssetShare extends SObjectDefinition<'AssetShare'> {
    Name: 'AssetShare';
    Fields: Fields$AssetShare;
    ParentReferences: ParentReferences$AssetShare;
    ChildRelationships: ChildRelationships$AssetShare;
}
declare type Fields$AssetTokenEvent = {
    ReplayId: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    ConnectedAppId: string | null;
    UserId: string | null;
    AssetId: string | null;
    Name: string | null;
    DeviceId: string | null;
    DeviceKey: string | null;
    Expiration: DateString | null;
    AssetSerialNumber: string | null;
    AssetName: string | null;
    ActorTokenPayload: string | null;
};
declare type ParentReferences$AssetTokenEvent = {
    CreatedBy: SObjectDefinition$User;
    ConnectedApp: SObjectDefinition$ConnectedApplication | null;
    User: SObjectDefinition$User | null;
    Asset: SObjectDefinition$Asset | null;
};
declare type ChildRelationships$AssetTokenEvent = {};
interface SObjectDefinition$AssetTokenEvent extends SObjectDefinition<'AssetTokenEvent'> {
    Name: 'AssetTokenEvent';
    Fields: Fields$AssetTokenEvent;
    ParentReferences: ParentReferences$AssetTokenEvent;
    ChildRelationships: ChildRelationships$AssetTokenEvent;
}
declare type Fields$AssignmentRule = {
    Id: string;
    Name: string | null;
    SobjectType: string | null;
    Active: boolean;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$AssignmentRule = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$AssignmentRule = {};
interface SObjectDefinition$AssignmentRule extends SObjectDefinition<'AssignmentRule'> {
    Name: 'AssignmentRule';
    Fields: Fields$AssignmentRule;
    ParentReferences: ParentReferences$AssignmentRule;
    ChildRelationships: ChildRelationships$AssignmentRule;
}
declare type Fields$AsyncApexJob = {
    Id: string;
    CreatedDate: DateString;
    CreatedById: string;
    JobType: string;
    ApexClassId: string | null;
    Status: string;
    JobItemsProcessed: number;
    TotalJobItems: number | null;
    NumberOfErrors: number | null;
    CompletedDate: DateString | null;
    MethodName: string | null;
    ExtendedStatus: string | null;
    ParentJobId: string | null;
    LastProcessed: string | null;
    LastProcessedOffset: number | null;
};
declare type ParentReferences$AsyncApexJob = {
    CreatedBy: SObjectDefinition$User;
    ApexClass: SObjectDefinition$ApexClass | null;
};
declare type ChildRelationships$AsyncApexJob = {
    AsyncApex: SObjectDefinition$ApexTestRunResult;
};
interface SObjectDefinition$AsyncApexJob extends SObjectDefinition<'AsyncApexJob'> {
    Name: 'AsyncApexJob';
    Fields: Fields$AsyncApexJob;
    ParentReferences: ParentReferences$AsyncApexJob;
    ChildRelationships: ChildRelationships$AsyncApexJob;
}
declare type Fields$AttachedContentDocument = {
    Id: string;
    IsDeleted: boolean;
    LinkedEntityId: string;
    ContentDocumentId: string | null;
    Title: string;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    FileType: string | null;
    ContentSize: number | null;
    FileExtension: string | null;
    ContentUrl: string | null;
    ExternalDataSourceName: string | null;
    ExternalDataSourceType: string | null;
    SharingOption: string | null;
};
declare type ParentReferences$AttachedContentDocument = {
    LinkedEntity: SObjectDefinition$Name;
    ContentDocument: SObjectDefinition$ContentDocument | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$AttachedContentDocument = {};
interface SObjectDefinition$AttachedContentDocument extends SObjectDefinition<'AttachedContentDocument'> {
    Name: 'AttachedContentDocument';
    Fields: Fields$AttachedContentDocument;
    ParentReferences: ParentReferences$AttachedContentDocument;
    ChildRelationships: ChildRelationships$AttachedContentDocument;
}
declare type Fields$Attachment = {
    Id: string;
    IsDeleted: boolean;
    ParentId: string;
    Name: string;
    IsPrivate: boolean;
    ContentType: string | null;
    BodyLength: number | null;
    Body: BlobString;
    OwnerId: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Description: string | null;
};
declare type ParentReferences$Attachment = {
    Parent: SObjectDefinition$Name;
    Owner: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Attachment = {};
interface SObjectDefinition$Attachment extends SObjectDefinition<'Attachment'> {
    Name: 'Attachment';
    Fields: Fields$Attachment;
    ParentReferences: ParentReferences$Attachment;
    ChildRelationships: ChildRelationships$Attachment;
}
declare type Fields$AuraDefinition = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    AuraDefinitionBundleId: string;
    DefType: string;
    Format: string;
    Source: string;
};
declare type ParentReferences$AuraDefinition = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    AuraDefinitionBundle: SObjectDefinition$AuraDefinitionBundle;
};
declare type ChildRelationships$AuraDefinition = {};
interface SObjectDefinition$AuraDefinition extends SObjectDefinition<'AuraDefinition'> {
    Name: 'AuraDefinition';
    Fields: Fields$AuraDefinition;
    ParentReferences: ParentReferences$AuraDefinition;
    ChildRelationships: ChildRelationships$AuraDefinition;
}
declare type Fields$AuraDefinitionBundle = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string | null;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ApiVersion: number;
    Description: string;
};
declare type ParentReferences$AuraDefinitionBundle = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$AuraDefinitionBundle = {};
interface SObjectDefinition$AuraDefinitionBundle extends SObjectDefinition<'AuraDefinitionBundle'> {
    Name: 'AuraDefinitionBundle';
    Fields: Fields$AuraDefinitionBundle;
    ParentReferences: ParentReferences$AuraDefinitionBundle;
    ChildRelationships: ChildRelationships$AuraDefinitionBundle;
}
declare type Fields$AuraDefinitionBundleInfo = {
    Id: string;
    DurableId: string | null;
    AuraDefinitionBundleId: string;
    ApiVersion: number;
    DeveloperName: string | null;
    NamespacePrefix: string | null;
};
declare type ParentReferences$AuraDefinitionBundleInfo = {};
declare type ChildRelationships$AuraDefinitionBundleInfo = {
    Bundle: SObjectDefinition$AuraDefinitionInfo;
};
interface SObjectDefinition$AuraDefinitionBundleInfo extends SObjectDefinition<'AuraDefinitionBundleInfo'> {
    Name: 'AuraDefinitionBundleInfo';
    Fields: Fields$AuraDefinitionBundleInfo;
    ParentReferences: ParentReferences$AuraDefinitionBundleInfo;
    ChildRelationships: ChildRelationships$AuraDefinitionBundleInfo;
}
declare type Fields$AuraDefinitionInfo = {
    Id: string;
    DurableId: string | null;
    AuraDefinitionBundleInfoId: string | null;
    AuraDefinitionId: string;
    DefType: string;
    Format: string;
    Source: string;
    LastModifiedDate: DateString;
    DeveloperName: string | null;
    NamespacePrefix: string | null;
};
declare type ParentReferences$AuraDefinitionInfo = {};
declare type ChildRelationships$AuraDefinitionInfo = {};
interface SObjectDefinition$AuraDefinitionInfo extends SObjectDefinition<'AuraDefinitionInfo'> {
    Name: 'AuraDefinitionInfo';
    Fields: Fields$AuraDefinitionInfo;
    ParentReferences: ParentReferences$AuraDefinitionInfo;
    ChildRelationships: ChildRelationships$AuraDefinitionInfo;
}
declare type Fields$AuthConfig = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Url: string;
    AuthOptionsUsernamePassword: boolean;
    AuthOptionsSaml: boolean;
    AuthOptionsAuthProvider: boolean;
    IsActive: boolean;
    Type: string;
};
declare type ParentReferences$AuthConfig = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$AuthConfig = {
    AuthProvidersForConfig: SObjectDefinition$AuthConfigProviders;
};
interface SObjectDefinition$AuthConfig extends SObjectDefinition<'AuthConfig'> {
    Name: 'AuthConfig';
    Fields: Fields$AuthConfig;
    ParentReferences: ParentReferences$AuthConfig;
    ChildRelationships: ChildRelationships$AuthConfig;
}
declare type Fields$AuthConfigProviders = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    AuthConfigId: string;
    AuthProviderId: string;
};
declare type ParentReferences$AuthConfigProviders = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    AuthConfig: SObjectDefinition$AuthConfig;
    AuthProvider: SObjectDefinition$Name;
};
declare type ChildRelationships$AuthConfigProviders = {};
interface SObjectDefinition$AuthConfigProviders extends SObjectDefinition<'AuthConfigProviders'> {
    Name: 'AuthConfigProviders';
    Fields: Fields$AuthConfigProviders;
    ParentReferences: ParentReferences$AuthConfigProviders;
    ChildRelationships: ChildRelationships$AuthConfigProviders;
}
declare type Fields$AuthProvider = {
    Id: string;
    CreatedDate: DateString;
    ProviderType: string;
    FriendlyName: string;
    DeveloperName: string;
    RegistrationHandlerId: string | null;
    ExecutionUserId: string | null;
    ConsumerKey: string | null;
    ConsumerSecret: string | null;
    ErrorUrl: string | null;
    AuthorizeUrl: string | null;
    TokenUrl: string | null;
    UserInfoUrl: string | null;
    DefaultScopes: string | null;
    IdTokenIssuer: string | null;
    OptionsSendAccessTokenInHeader: boolean;
    OptionsSendClientCredentialsInHeader: boolean;
    OptionsIncludeOrgIdInId: boolean;
    IconUrl: string | null;
    LogoutUrl: string | null;
    PluginId: string | null;
    CustomMetadataTypeRecord: string | null;
    SsoKickoffUrl: string | null;
    LinkKickoffUrl: string | null;
    OauthKickoffUrl: string | null;
};
declare type ParentReferences$AuthProvider = {};
declare type ChildRelationships$AuthProvider = {};
interface SObjectDefinition$AuthProvider extends SObjectDefinition<'AuthProvider'> {
    Name: 'AuthProvider';
    Fields: Fields$AuthProvider;
    ParentReferences: ParentReferences$AuthProvider;
    ChildRelationships: ChildRelationships$AuthProvider;
}
declare type Fields$AuthSession = {
    Id: string;
    UsersId: string | null;
    CreatedDate: DateString;
    LastModifiedDate: DateString;
    NumSecondsValid: number;
    UserType: string;
    SourceIp: string;
    LoginType: string | null;
    SessionType: string | null;
    SessionSecurityLevel: string | null;
    LogoutUrl: string | null;
    ParentId: string | null;
    LoginHistoryId: string | null;
    LoginGeoId: string | null;
    IsCurrent: boolean;
};
declare type ParentReferences$AuthSession = {
    Users: SObjectDefinition$User | null;
    LoginHistory: SObjectDefinition$LoginHistory | null;
    LoginGeo: SObjectDefinition$LoginGeo | null;
};
declare type ChildRelationships$AuthSession = {
    SessionPermSetActivations: SObjectDefinition$SessionPermSetActivation;
};
interface SObjectDefinition$AuthSession extends SObjectDefinition<'AuthSession'> {
    Name: 'AuthSession';
    Fields: Fields$AuthSession;
    ParentReferences: ParentReferences$AuthSession;
    ChildRelationships: ChildRelationships$AuthSession;
}
declare type Fields$BackgroundOperation = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    SubmittedAt: DateString | null;
    Status: string | null;
    ExecutionGroup: string | null;
    SequenceGroup: string | null;
    SequenceNumber: number | null;
    GroupLeaderId: string | null;
    StartedAt: DateString | null;
    FinishedAt: DateString | null;
    WorkerUri: string | null;
    Timeout: number | null;
    ExpiresAt: DateString | null;
    NumFollowers: number | null;
    ProcessAfter: DateString | null;
    ParentKey: string | null;
    RetryLimit: number | null;
    RetryCount: number | null;
    RetryBackoff: number | null;
    Error: string | null;
};
declare type ParentReferences$BackgroundOperation = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    GroupLeader: SObjectDefinition$BackgroundOperation | null;
};
declare type ChildRelationships$BackgroundOperation = {
    MergedOperations: SObjectDefinition$BackgroundOperation;
};
interface SObjectDefinition$BackgroundOperation extends SObjectDefinition<'BackgroundOperation'> {
    Name: 'BackgroundOperation';
    Fields: Fields$BackgroundOperation;
    ParentReferences: ParentReferences$BackgroundOperation;
    ChildRelationships: ChildRelationships$BackgroundOperation;
}
declare type Fields$BrandTemplate = {
    Id: string;
    Name: string;
    DeveloperName: string;
    IsActive: boolean;
    Description: string | null;
    Value: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$BrandTemplate = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$BrandTemplate = {};
interface SObjectDefinition$BrandTemplate extends SObjectDefinition<'BrandTemplate'> {
    Name: 'BrandTemplate';
    Fields: Fields$BrandTemplate;
    ParentReferences: ParentReferences$BrandTemplate;
    ChildRelationships: ChildRelationships$BrandTemplate;
}
declare type Fields$BrandingSet = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string | null;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Description: string | null;
};
declare type ParentReferences$BrandingSet = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$BrandingSet = {};
interface SObjectDefinition$BrandingSet extends SObjectDefinition<'BrandingSet'> {
    Name: 'BrandingSet';
    Fields: Fields$BrandingSet;
    ParentReferences: ParentReferences$BrandingSet;
    ChildRelationships: ChildRelationships$BrandingSet;
}
declare type Fields$BrandingSetProperty = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    BrandingSetId: string;
    PropertyName: string;
    PropertyValue: string | null;
};
declare type ParentReferences$BrandingSetProperty = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    BrandingSet: SObjectDefinition$BrandingSet;
};
declare type ChildRelationships$BrandingSetProperty = {};
interface SObjectDefinition$BrandingSetProperty extends SObjectDefinition<'BrandingSetProperty'> {
    Name: 'BrandingSetProperty';
    Fields: Fields$BrandingSetProperty;
    ParentReferences: ParentReferences$BrandingSetProperty;
    ChildRelationships: ChildRelationships$BrandingSetProperty;
}
declare type Fields$BusinessHours = {
    Id: string;
    Name: string;
    IsActive: boolean;
    IsDefault: boolean;
    SundayStartTime: string | null;
    SundayEndTime: string | null;
    MondayStartTime: string | null;
    MondayEndTime: string | null;
    TuesdayStartTime: string | null;
    TuesdayEndTime: string | null;
    WednesdayStartTime: string | null;
    WednesdayEndTime: string | null;
    ThursdayStartTime: string | null;
    ThursdayEndTime: string | null;
    FridayStartTime: string | null;
    FridayEndTime: string | null;
    SaturdayStartTime: string | null;
    SaturdayEndTime: string | null;
    TimeZoneSidKey: string;
    SystemModstamp: DateString;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    LastViewedDate: DateString | null;
};
declare type ParentReferences$BusinessHours = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$BusinessHours = {
    Cases: SObjectDefinition$Case;
    Entitlements: SObjectDefinition$Entitlement;
    WorkOrders: SObjectDefinition$WorkOrder;
};
interface SObjectDefinition$BusinessHours extends SObjectDefinition<'BusinessHours'> {
    Name: 'BusinessHours';
    Fields: Fields$BusinessHours;
    ParentReferences: ParentReferences$BusinessHours;
    ChildRelationships: ChildRelationships$BusinessHours;
}
declare type Fields$BusinessProcess = {
    Id: string;
    Name: string;
    NamespacePrefix: string | null;
    Description: string | null;
    TableEnumOrId: string;
    IsActive: boolean;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$BusinessProcess = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$BusinessProcess = {};
interface SObjectDefinition$BusinessProcess extends SObjectDefinition<'BusinessProcess'> {
    Name: 'BusinessProcess';
    Fields: Fields$BusinessProcess;
    ParentReferences: ParentReferences$BusinessProcess;
    ChildRelationships: ChildRelationships$BusinessProcess;
}
declare type Fields$CallCenter = {
    Id: string;
    Name: string;
    InternalName: string;
    Version: number | null;
    AdapterUrl: string | null;
    CustomSettings: string | null;
    SystemModstamp: DateString;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
};
declare type ParentReferences$CallCenter = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CallCenter = {};
interface SObjectDefinition$CallCenter extends SObjectDefinition<'CallCenter'> {
    Name: 'CallCenter';
    Fields: Fields$CallCenter;
    ParentReferences: ParentReferences$CallCenter;
    ChildRelationships: ChildRelationships$CallCenter;
}
declare type Fields$Campaign = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    ParentId: string | null;
    Type: string | null;
    Status: string | null;
    StartDate: DateString | null;
    EndDate: DateString | null;
    ExpectedRevenue: number | null;
    BudgetedCost: number | null;
    ActualCost: number | null;
    ExpectedResponse: number | null;
    NumberSent: number | null;
    IsActive: boolean;
    Description: string | null;
    NumberOfLeads: number;
    NumberOfConvertedLeads: number;
    NumberOfContacts: number;
    NumberOfResponses: number;
    NumberOfOpportunities: number;
    NumberOfWonOpportunities: number;
    AmountAllOpportunities: number;
    AmountWonOpportunities: number;
    OwnerId: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastActivityDate: DateString | null;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    CampaignMemberRecordTypeId: string | null;
};
declare type ParentReferences$Campaign = {
    Parent: SObjectDefinition$Campaign | null;
    Owner: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    CampaignMemberRecordType: SObjectDefinition$RecordType | null;
};
declare type ChildRelationships$Campaign = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    ChildCampaigns: SObjectDefinition$Campaign;
    Feeds: SObjectDefinition$CampaignFeed;
    Histories: SObjectDefinition$CampaignHistory;
    CampaignMembers: SObjectDefinition$CampaignMember;
    CampaignMemberStatuses: SObjectDefinition$CampaignMemberStatus;
    Shares: SObjectDefinition$CampaignShare;
    RecordAssociatedGroups: SObjectDefinition$CollaborationGroupRecord;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    Emails: SObjectDefinition$EmailMessage;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    ListEmails: SObjectDefinition$ListEmail;
    ListEmailRecipientSources: SObjectDefinition$ListEmailRecipientSource;
    OpenActivities: SObjectDefinition$OpenActivity;
    Opportunities: SObjectDefinition$Opportunity;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    Tasks: SObjectDefinition$Task;
    TopicAssignments: SObjectDefinition$TopicAssignment;
};
interface SObjectDefinition$Campaign extends SObjectDefinition<'Campaign'> {
    Name: 'Campaign';
    Fields: Fields$Campaign;
    ParentReferences: ParentReferences$Campaign;
    ChildRelationships: ChildRelationships$Campaign;
}
declare type Fields$CampaignChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    Name: string | null;
    ParentId: string | null;
    Type: string | null;
    Status: string | null;
    StartDate: DateString | null;
    EndDate: DateString | null;
    ExpectedRevenue: number | null;
    BudgetedCost: number | null;
    ActualCost: number | null;
    ExpectedResponse: number | null;
    NumberSent: number | null;
    IsActive: boolean;
    Description: string | null;
    NumberOfLeads: number | null;
    NumberOfConvertedLeads: number | null;
    NumberOfContacts: number | null;
    NumberOfResponses: number | null;
    NumberOfOpportunities: number | null;
    NumberOfWonOpportunities: number | null;
    AmountAllOpportunities: number | null;
    AmountWonOpportunities: number | null;
    OwnerId: string | null;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    CampaignMemberRecordTypeId: string | null;
};
declare type ParentReferences$CampaignChangeEvent = {};
declare type ChildRelationships$CampaignChangeEvent = {};
interface SObjectDefinition$CampaignChangeEvent extends SObjectDefinition<'CampaignChangeEvent'> {
    Name: 'CampaignChangeEvent';
    Fields: Fields$CampaignChangeEvent;
    ParentReferences: ParentReferences$CampaignChangeEvent;
    ChildRelationships: ChildRelationships$CampaignChangeEvent;
}
declare type Fields$CampaignFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$CampaignFeed = {
    Parent: SObjectDefinition$Campaign;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$CampaignFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$CampaignFeed extends SObjectDefinition<'CampaignFeed'> {
    Name: 'CampaignFeed';
    Fields: Fields$CampaignFeed;
    ParentReferences: ParentReferences$CampaignFeed;
    ChildRelationships: ChildRelationships$CampaignFeed;
}
declare type Fields$CampaignHistory = {
    Id: string;
    IsDeleted: boolean;
    CampaignId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$CampaignHistory = {
    Campaign: SObjectDefinition$Campaign;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CampaignHistory = {};
interface SObjectDefinition$CampaignHistory extends SObjectDefinition<'CampaignHistory'> {
    Name: 'CampaignHistory';
    Fields: Fields$CampaignHistory;
    ParentReferences: ParentReferences$CampaignHistory;
    ChildRelationships: ChildRelationships$CampaignHistory;
}
declare type Fields$CampaignInfluenceModel = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ModelType: string | null;
    ModelDescription: string | null;
    IsDefaultModel: boolean;
    IsModelLocked: boolean;
    IsActive: boolean;
    RecordPreference: string;
};
declare type ParentReferences$CampaignInfluenceModel = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CampaignInfluenceModel = {};
interface SObjectDefinition$CampaignInfluenceModel extends SObjectDefinition<'CampaignInfluenceModel'> {
    Name: 'CampaignInfluenceModel';
    Fields: Fields$CampaignInfluenceModel;
    ParentReferences: ParentReferences$CampaignInfluenceModel;
    ChildRelationships: ChildRelationships$CampaignInfluenceModel;
}
declare type Fields$CampaignMember = {
    Id: string;
    IsDeleted: boolean;
    CampaignId: string;
    LeadId: string | null;
    ContactId: string | null;
    Status: string | null;
    HasResponded: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    FirstRespondedDate: DateString | null;
    Salutation: string | null;
    Name: string | null;
    FirstName: string | null;
    LastName: string | null;
    Title: string | null;
    Street: string | null;
    City: string | null;
    State: string | null;
    PostalCode: string | null;
    Country: string | null;
    Email: string | null;
    Phone: string | null;
    Fax: string | null;
    MobilePhone: string | null;
    Description: string | null;
    DoNotCall: boolean;
    HasOptedOutOfEmail: boolean;
    HasOptedOutOfFax: boolean;
    LeadSource: string | null;
    CompanyOrAccount: string | null;
    Type: string | null;
    LeadOrContactId: string | null;
    LeadOrContactOwnerId: string | null;
};
declare type ParentReferences$CampaignMember = {
    Campaign: SObjectDefinition$Campaign;
    Lead: SObjectDefinition$Lead | null;
    Contact: SObjectDefinition$Contact | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    LeadOrContactOwner: SObjectDefinition$Name | null;
};
declare type ChildRelationships$CampaignMember = {
    RecordActions: SObjectDefinition$RecordAction;
};
interface SObjectDefinition$CampaignMember extends SObjectDefinition<'CampaignMember'> {
    Name: 'CampaignMember';
    Fields: Fields$CampaignMember;
    ParentReferences: ParentReferences$CampaignMember;
    ChildRelationships: ChildRelationships$CampaignMember;
}
declare type Fields$CampaignMemberStatus = {
    Id: string;
    IsDeleted: boolean;
    CampaignId: string;
    Label: string;
    SortOrder: number | null;
    IsDefault: boolean;
    HasResponded: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$CampaignMemberStatus = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CampaignMemberStatus = {};
interface SObjectDefinition$CampaignMemberStatus extends SObjectDefinition<'CampaignMemberStatus'> {
    Name: 'CampaignMemberStatus';
    Fields: Fields$CampaignMemberStatus;
    ParentReferences: ParentReferences$CampaignMemberStatus;
    ChildRelationships: ChildRelationships$CampaignMemberStatus;
}
declare type Fields$CampaignShare = {
    Id: string;
    CampaignId: string;
    UserOrGroupId: string;
    CampaignAccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$CampaignShare = {
    Campaign: SObjectDefinition$Campaign;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CampaignShare = {};
interface SObjectDefinition$CampaignShare extends SObjectDefinition<'CampaignShare'> {
    Name: 'CampaignShare';
    Fields: Fields$CampaignShare;
    ParentReferences: ParentReferences$CampaignShare;
    ChildRelationships: ChildRelationships$CampaignShare;
}
declare type Fields$Case = {
    Id: string;
    IsDeleted: boolean;
    CaseNumber: string;
    ContactId: string | null;
    AccountId: string | null;
    AssetId: string | null;
    ProductId: string | null;
    EntitlementId: string | null;
    SourceId: string | null;
    BusinessHoursId: string;
    ParentId: string | null;
    SuppliedName: string | null;
    SuppliedEmail: string | null;
    SuppliedPhone: string | null;
    SuppliedCompany: string | null;
    Type: string | null;
    Status: string | null;
    Reason: string | null;
    Origin: string | null;
    IsVisibleInSelfService: boolean;
    Subject: string | null;
    Priority: string | null;
    Description: string | null;
    IsClosed: boolean;
    ClosedDate: DateString | null;
    IsEscalated: boolean;
    HasCommentsUnreadByOwner: boolean;
    HasSelfServiceComments: boolean;
    OwnerId: string;
    IsClosedOnCreate: boolean;
    IsSelfServiceClosed: boolean;
    SlaStartDate: DateString | null;
    SlaExitDate: DateString | null;
    IsStopped: boolean;
    StopStartDate: DateString | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ContactPhone: string | null;
    ContactMobile: string | null;
    ContactEmail: string | null;
    ContactFax: string | null;
    Comments: string | null;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    MilestoneStatus: string | null;
};
declare type ParentReferences$Case = {
    Contact: SObjectDefinition$Contact | null;
    Account: SObjectDefinition$Account | null;
    Asset: SObjectDefinition$Asset | null;
    Product: SObjectDefinition$Product2 | null;
    Entitlement: SObjectDefinition$Entitlement | null;
    Source: SObjectDefinition$Name | null;
    BusinessHours: SObjectDefinition$BusinessHours;
    Parent: SObjectDefinition$Case | null;
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Case = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    Cases: SObjectDefinition$Case;
    CaseArticles: SObjectDefinition$CaseArticle;
    CaseComments: SObjectDefinition$CaseComment;
    CaseContactRoles: SObjectDefinition$CaseContactRole;
    CaseExternalDocuments: SObjectDefinition$CaseExternalDocument;
    Feeds: SObjectDefinition$CaseFeed;
    Histories: SObjectDefinition$CaseHistory;
    CaseMilestones: SObjectDefinition$CaseMilestone;
    Shares: SObjectDefinition$CaseShare;
    CaseSolutions: SObjectDefinition$CaseSolution;
    TeamMembers: SObjectDefinition$CaseTeamMember;
    TeamTemplateRecords: SObjectDefinition$CaseTeamTemplateRecord;
    RecordAssociatedGroups: SObjectDefinition$CollaborationGroupRecord;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContactRequests: SObjectDefinition$ContactRequest;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    EmailMessages: SObjectDefinition$EmailMessage;
    Emails: SObjectDefinition$EmailMessage;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    OpenActivities: SObjectDefinition$OpenActivity;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    Posts: SObjectDefinition$SocialPost;
    Tasks: SObjectDefinition$Task;
    TopicAssignments: SObjectDefinition$TopicAssignment;
    WorkOrders: SObjectDefinition$WorkOrder;
};
interface SObjectDefinition$Case extends SObjectDefinition<'Case'> {
    Name: 'Case';
    Fields: Fields$Case;
    ParentReferences: ParentReferences$Case;
    ChildRelationships: ChildRelationships$Case;
}
declare type Fields$CaseArticle = {
    Id: string;
    CaseId: string;
    KnowledgeArticleId: string;
    KnowledgeArticleVersionId: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    SystemModstamp: DateString;
    IsDeleted: boolean;
    ArticleLanguage: string | null;
    ArticleVersionNumber: number | null;
    IsSharedByEmail: boolean;
};
declare type ParentReferences$CaseArticle = {
    Case: SObjectDefinition$Case;
    KnowledgeArticle: SObjectDefinition$Knowledge__ka;
    KnowledgeArticleVersion: SObjectDefinition$Knowledge__kav | null;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CaseArticle = {};
interface SObjectDefinition$CaseArticle extends SObjectDefinition<'CaseArticle'> {
    Name: 'CaseArticle';
    Fields: Fields$CaseArticle;
    ParentReferences: ParentReferences$CaseArticle;
    ChildRelationships: ChildRelationships$CaseArticle;
}
declare type Fields$CaseChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    CaseNumber: string;
    ContactId: string | null;
    AccountId: string | null;
    AssetId: string | null;
    ProductId: string | null;
    EntitlementId: string | null;
    SourceId: string | null;
    BusinessHoursId: string | null;
    ParentId: string | null;
    SuppliedName: string | null;
    SuppliedEmail: string | null;
    SuppliedPhone: string | null;
    SuppliedCompany: string | null;
    Type: string | null;
    Status: string | null;
    Reason: string | null;
    Origin: string | null;
    IsVisibleInSelfService: boolean;
    Subject: string | null;
    Priority: string | null;
    Description: string | null;
    IsClosed: boolean;
    ClosedDate: DateString | null;
    IsEscalated: boolean;
    HasCommentsUnreadByOwner: boolean;
    HasSelfServiceComments: boolean;
    OwnerId: string | null;
    IsClosedOnCreate: boolean;
    IsSelfServiceClosed: boolean;
    SlaStartDate: DateString | null;
    SlaExitDate: DateString | null;
    IsStopped: boolean;
    StopStartDate: DateString | null;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
};
declare type ParentReferences$CaseChangeEvent = {};
declare type ChildRelationships$CaseChangeEvent = {};
interface SObjectDefinition$CaseChangeEvent extends SObjectDefinition<'CaseChangeEvent'> {
    Name: 'CaseChangeEvent';
    Fields: Fields$CaseChangeEvent;
    ParentReferences: ParentReferences$CaseChangeEvent;
    ChildRelationships: ChildRelationships$CaseChangeEvent;
}
declare type Fields$CaseComment = {
    Id: string;
    ParentId: string;
    IsPublished: boolean;
    CommentBody: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    SystemModstamp: DateString;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$CaseComment = {
    Parent: SObjectDefinition$Case;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CaseComment = {};
interface SObjectDefinition$CaseComment extends SObjectDefinition<'CaseComment'> {
    Name: 'CaseComment';
    Fields: Fields$CaseComment;
    ParentReferences: ParentReferences$CaseComment;
    ChildRelationships: ChildRelationships$CaseComment;
}
declare type Fields$CaseContactRole = {
    Id: string;
    CasesId: string;
    ContactId: string;
    Role: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
};
declare type ParentReferences$CaseContactRole = {
    Cases: SObjectDefinition$Case;
    Contact: SObjectDefinition$Contact;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CaseContactRole = {};
interface SObjectDefinition$CaseContactRole extends SObjectDefinition<'CaseContactRole'> {
    Name: 'CaseContactRole';
    Fields: Fields$CaseContactRole;
    ParentReferences: ParentReferences$CaseContactRole;
    ChildRelationships: ChildRelationships$CaseContactRole;
}
declare type Fields$CaseExternalDocument = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    CaseId: string;
    ExternalId: string | null;
    Title: string | null;
    DisplayUrl: string | null;
    ExternalDocumentUid: string | null;
};
declare type ParentReferences$CaseExternalDocument = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Case: SObjectDefinition$Case;
};
declare type ChildRelationships$CaseExternalDocument = {};
interface SObjectDefinition$CaseExternalDocument extends SObjectDefinition<'CaseExternalDocument'> {
    Name: 'CaseExternalDocument';
    Fields: Fields$CaseExternalDocument;
    ParentReferences: ParentReferences$CaseExternalDocument;
    ChildRelationships: ChildRelationships$CaseExternalDocument;
}
declare type Fields$CaseFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$CaseFeed = {
    Parent: SObjectDefinition$Case;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$CaseFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$CaseFeed extends SObjectDefinition<'CaseFeed'> {
    Name: 'CaseFeed';
    Fields: Fields$CaseFeed;
    ParentReferences: ParentReferences$CaseFeed;
    ChildRelationships: ChildRelationships$CaseFeed;
}
declare type Fields$CaseHistory = {
    Id: string;
    IsDeleted: boolean;
    CaseId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$CaseHistory = {
    Case: SObjectDefinition$Case;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CaseHistory = {};
interface SObjectDefinition$CaseHistory extends SObjectDefinition<'CaseHistory'> {
    Name: 'CaseHistory';
    Fields: Fields$CaseHistory;
    ParentReferences: ParentReferences$CaseHistory;
    ChildRelationships: ChildRelationships$CaseHistory;
}
declare type Fields$CaseMilestone = {
    Id: string;
    CaseId: string;
    StartDate: DateString | null;
    TargetDate: DateString;
    CompletionDate: DateString | null;
    MilestoneTypeId: string | null;
    IsCompleted: boolean;
    IsViolated: boolean;
    SystemModstamp: DateString;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
    TargetResponseInMins: number | null;
    TargetResponseInHrs: number | null;
    TargetResponseInDays: number | null;
    TimeRemainingInMins: string | null;
    ElapsedTimeInMins: number | null;
    ElapsedTimeInHrs: number | null;
    ElapsedTimeInDays: number | null;
    TimeSinceTargetInMins: string | null;
    BusinessHoursId: string | null;
    StoppedTimeInMins: number | null;
    StoppedTimeInHrs: number | null;
    StoppedTimeInDays: number | null;
    ActualElapsedTimeInMins: number | null;
    ActualElapsedTimeInHrs: number | null;
    ActualElapsedTimeInDays: number | null;
};
declare type ParentReferences$CaseMilestone = {
    Case: SObjectDefinition$Case;
    MilestoneType: SObjectDefinition$MilestoneType | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    BusinessHours: SObjectDefinition$BusinessHours | null;
};
declare type ChildRelationships$CaseMilestone = {};
interface SObjectDefinition$CaseMilestone extends SObjectDefinition<'CaseMilestone'> {
    Name: 'CaseMilestone';
    Fields: Fields$CaseMilestone;
    ParentReferences: ParentReferences$CaseMilestone;
    ChildRelationships: ChildRelationships$CaseMilestone;
}
declare type Fields$CaseShare = {
    Id: string;
    CaseId: string;
    UserOrGroupId: string;
    CaseAccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$CaseShare = {
    Case: SObjectDefinition$Case;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CaseShare = {};
interface SObjectDefinition$CaseShare extends SObjectDefinition<'CaseShare'> {
    Name: 'CaseShare';
    Fields: Fields$CaseShare;
    ParentReferences: ParentReferences$CaseShare;
    ChildRelationships: ChildRelationships$CaseShare;
}
declare type Fields$CaseSolution = {
    Id: string;
    CaseId: string;
    SolutionId: string;
    CreatedById: string;
    CreatedDate: DateString;
    SystemModstamp: DateString;
    IsDeleted: boolean;
};
declare type ParentReferences$CaseSolution = {
    Case: SObjectDefinition$Case;
    Solution: SObjectDefinition$Solution;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CaseSolution = {};
interface SObjectDefinition$CaseSolution extends SObjectDefinition<'CaseSolution'> {
    Name: 'CaseSolution';
    Fields: Fields$CaseSolution;
    ParentReferences: ParentReferences$CaseSolution;
    ChildRelationships: ChildRelationships$CaseSolution;
}
declare type Fields$CaseStatus = {
    Id: string;
    MasterLabel: string | null;
    ApiName: string;
    SortOrder: number | null;
    IsDefault: boolean;
    IsClosed: boolean;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$CaseStatus = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CaseStatus = {};
interface SObjectDefinition$CaseStatus extends SObjectDefinition<'CaseStatus'> {
    Name: 'CaseStatus';
    Fields: Fields$CaseStatus;
    ParentReferences: ParentReferences$CaseStatus;
    ChildRelationships: ChildRelationships$CaseStatus;
}
declare type Fields$CaseSubjectParticle = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string | null;
    MasterLabel: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Index: number;
    Type: string;
    TextField: string | null;
};
declare type ParentReferences$CaseSubjectParticle = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CaseSubjectParticle = {};
interface SObjectDefinition$CaseSubjectParticle extends SObjectDefinition<'CaseSubjectParticle'> {
    Name: 'CaseSubjectParticle';
    Fields: Fields$CaseSubjectParticle;
    ParentReferences: ParentReferences$CaseSubjectParticle;
    ChildRelationships: ChildRelationships$CaseSubjectParticle;
}
declare type Fields$CaseTeamMember = {
    Id: string;
    ParentId: string;
    MemberId: string;
    TeamTemplateMemberId: string | null;
    TeamRoleId: string;
    TeamTemplateId: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$CaseTeamMember = {
    Parent: SObjectDefinition$Case;
    Member: SObjectDefinition$Name;
    TeamTemplateMember: SObjectDefinition$CaseTeamTemplateMember | null;
    TeamRole: SObjectDefinition$CaseTeamRole;
    TeamTemplate: SObjectDefinition$CaseTeamTemplate | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CaseTeamMember = {};
interface SObjectDefinition$CaseTeamMember extends SObjectDefinition<'CaseTeamMember'> {
    Name: 'CaseTeamMember';
    Fields: Fields$CaseTeamMember;
    ParentReferences: ParentReferences$CaseTeamMember;
    ChildRelationships: ChildRelationships$CaseTeamMember;
}
declare type Fields$CaseTeamRole = {
    Id: string;
    Name: string;
    AccessLevel: string;
    PreferencesVisibleInCSP: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$CaseTeamRole = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CaseTeamRole = {};
interface SObjectDefinition$CaseTeamRole extends SObjectDefinition<'CaseTeamRole'> {
    Name: 'CaseTeamRole';
    Fields: Fields$CaseTeamRole;
    ParentReferences: ParentReferences$CaseTeamRole;
    ChildRelationships: ChildRelationships$CaseTeamRole;
}
declare type Fields$CaseTeamTemplate = {
    Id: string;
    Name: string;
    Description: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$CaseTeamTemplate = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CaseTeamTemplate = {};
interface SObjectDefinition$CaseTeamTemplate extends SObjectDefinition<'CaseTeamTemplate'> {
    Name: 'CaseTeamTemplate';
    Fields: Fields$CaseTeamTemplate;
    ParentReferences: ParentReferences$CaseTeamTemplate;
    ChildRelationships: ChildRelationships$CaseTeamTemplate;
}
declare type Fields$CaseTeamTemplateMember = {
    Id: string;
    TeamTemplateId: string;
    MemberId: string;
    TeamRoleId: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$CaseTeamTemplateMember = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CaseTeamTemplateMember = {};
interface SObjectDefinition$CaseTeamTemplateMember extends SObjectDefinition<'CaseTeamTemplateMember'> {
    Name: 'CaseTeamTemplateMember';
    Fields: Fields$CaseTeamTemplateMember;
    ParentReferences: ParentReferences$CaseTeamTemplateMember;
    ChildRelationships: ChildRelationships$CaseTeamTemplateMember;
}
declare type Fields$CaseTeamTemplateRecord = {
    Id: string;
    ParentId: string;
    TeamTemplateId: string;
    CreatedDate: DateString;
    CreatedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$CaseTeamTemplateRecord = {
    Parent: SObjectDefinition$Case;
    TeamTemplate: SObjectDefinition$CaseTeamTemplate;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CaseTeamTemplateRecord = {};
interface SObjectDefinition$CaseTeamTemplateRecord extends SObjectDefinition<'CaseTeamTemplateRecord'> {
    Name: 'CaseTeamTemplateRecord';
    Fields: Fields$CaseTeamTemplateRecord;
    ParentReferences: ParentReferences$CaseTeamTemplateRecord;
    ChildRelationships: ChildRelationships$CaseTeamTemplateRecord;
}
declare type Fields$CategoryData = {
    Id: string;
    CategoryNodeId: string;
    RelatedSobjectId: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$CategoryData = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CategoryData = {};
interface SObjectDefinition$CategoryData extends SObjectDefinition<'CategoryData'> {
    Name: 'CategoryData';
    Fields: Fields$CategoryData;
    ParentReferences: ParentReferences$CategoryData;
    ChildRelationships: ChildRelationships$CategoryData;
}
declare type Fields$CategoryNode = {
    Id: string;
    ParentId: string | null;
    MasterLabel: string;
    SortOrder: number | null;
    SortStyle: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$CategoryNode = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CategoryNode = {};
interface SObjectDefinition$CategoryNode extends SObjectDefinition<'CategoryNode'> {
    Name: 'CategoryNode';
    Fields: Fields$CategoryNode;
    ParentReferences: ParentReferences$CategoryNode;
    ChildRelationships: ChildRelationships$CategoryNode;
}
declare type Fields$ChatterActivity = {
    Id: string;
    ParentId: string | null;
    PostCount: number;
    CommentCount: number;
    CommentReceivedCount: number;
    LikeReceivedCount: number;
    InfluenceRawRank: number;
    SystemModstamp: DateString;
};
declare type ParentReferences$ChatterActivity = {};
declare type ChildRelationships$ChatterActivity = {};
interface SObjectDefinition$ChatterActivity extends SObjectDefinition<'ChatterActivity'> {
    Name: 'ChatterActivity';
    Fields: Fields$ChatterActivity;
    ParentReferences: ParentReferences$ChatterActivity;
    ChildRelationships: ChildRelationships$ChatterActivity;
}
declare type Fields$ChatterExtension = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string | null;
    MasterLabel: string;
    NamespacePrefix: string | null;
    IsProtected: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ExtensionName: string;
    Type: string;
    IconId: string | null;
    Description: string;
    CompositionComponentEnumOrId: string | null;
    RenderComponentEnumOrId: string | null;
    HoverText: string | null;
    HeaderText: string | null;
};
declare type ParentReferences$ChatterExtension = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Icon: SObjectDefinition$ContentAsset | null;
};
declare type ChildRelationships$ChatterExtension = {};
interface SObjectDefinition$ChatterExtension extends SObjectDefinition<'ChatterExtension'> {
    Name: 'ChatterExtension';
    Fields: Fields$ChatterExtension;
    ParentReferences: ParentReferences$ChatterExtension;
    ChildRelationships: ChildRelationships$ChatterExtension;
}
declare type Fields$ChatterExtensionConfig = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ChatterExtensionId: string | null;
    CanCreate: boolean;
    CanRead: boolean;
    Position: number | null;
};
declare type ParentReferences$ChatterExtensionConfig = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ChatterExtension: SObjectDefinition$ChatterExtension | null;
};
declare type ChildRelationships$ChatterExtensionConfig = {};
interface SObjectDefinition$ChatterExtensionConfig extends SObjectDefinition<'ChatterExtensionConfig'> {
    Name: 'ChatterExtensionConfig';
    Fields: Fields$ChatterExtensionConfig;
    ParentReferences: ParentReferences$ChatterExtensionConfig;
    ChildRelationships: ChildRelationships$ChatterExtensionConfig;
}
declare type Fields$ClientBrowser = {
    Id: string;
    UsersId: string;
    FullUserAgent: string | null;
    ProxyInfo: string | null;
    LastUpdate: DateString | null;
    CreatedDate: DateString;
};
declare type ParentReferences$ClientBrowser = {
    Users: SObjectDefinition$User;
};
declare type ChildRelationships$ClientBrowser = {};
interface SObjectDefinition$ClientBrowser extends SObjectDefinition<'ClientBrowser'> {
    Name: 'ClientBrowser';
    Fields: Fields$ClientBrowser;
    ParentReferences: ParentReferences$ClientBrowser;
    ChildRelationships: ChildRelationships$ClientBrowser;
}
declare type Fields$CollaborationGroup = {
    Id: string;
    Name: string;
    MemberCount: number | null;
    OwnerId: string;
    CollaborationType: string;
    Description: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    FullPhotoUrl: string | null;
    MediumPhotoUrl: string | null;
    SmallPhotoUrl: string | null;
    LastFeedModifiedDate: DateString;
    InformationTitle: string | null;
    InformationBody: string | null;
    HasPrivateFieldsAccess: boolean;
    CanHaveGuests: boolean;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    IsArchived: boolean;
    IsAutoArchiveDisabled: boolean;
    AnnouncementId: string | null;
    GroupEmail: string | null;
    BannerPhotoUrl: string | null;
    IsBroadcast: boolean;
};
declare type ParentReferences$CollaborationGroup = {
    Owner: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Announcement: SObjectDefinition$Announcement | null;
};
declare type ChildRelationships$CollaborationGroup = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Feeds: SObjectDefinition$CollaborationGroupFeed;
    GroupMembers: SObjectDefinition$CollaborationGroupMember;
    GroupMemberRequests: SObjectDefinition$CollaborationGroupMemberRequest;
    CollaborationGroupRecords: SObjectDefinition$CollaborationGroupRecord;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
};
interface SObjectDefinition$CollaborationGroup extends SObjectDefinition<'CollaborationGroup'> {
    Name: 'CollaborationGroup';
    Fields: Fields$CollaborationGroup;
    ParentReferences: ParentReferences$CollaborationGroup;
    ChildRelationships: ChildRelationships$CollaborationGroup;
}
declare type Fields$CollaborationGroupFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$CollaborationGroupFeed = {
    Parent: SObjectDefinition$CollaborationGroup;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$CollaborationGroupFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$CollaborationGroupFeed extends SObjectDefinition<'CollaborationGroupFeed'> {
    Name: 'CollaborationGroupFeed';
    Fields: Fields$CollaborationGroupFeed;
    ParentReferences: ParentReferences$CollaborationGroupFeed;
    ChildRelationships: ChildRelationships$CollaborationGroupFeed;
}
declare type Fields$CollaborationGroupMember = {
    Id: string;
    CollaborationGroupId: string;
    MemberId: string;
    CollaborationRole: string | null;
    NotificationFrequency: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastFeedAccessDate: DateString | null;
};
declare type ParentReferences$CollaborationGroupMember = {
    CollaborationGroup: SObjectDefinition$CollaborationGroup;
    Member: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CollaborationGroupMember = {};
interface SObjectDefinition$CollaborationGroupMember extends SObjectDefinition<'CollaborationGroupMember'> {
    Name: 'CollaborationGroupMember';
    Fields: Fields$CollaborationGroupMember;
    ParentReferences: ParentReferences$CollaborationGroupMember;
    ChildRelationships: ChildRelationships$CollaborationGroupMember;
}
declare type Fields$CollaborationGroupMemberRequest = {
    Id: string;
    CollaborationGroupId: string;
    RequesterId: string;
    ResponseMessage: string | null;
    Status: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$CollaborationGroupMemberRequest = {
    CollaborationGroup: SObjectDefinition$CollaborationGroup;
    Requester: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CollaborationGroupMemberRequest = {};
interface SObjectDefinition$CollaborationGroupMemberRequest extends SObjectDefinition<'CollaborationGroupMemberRequest'> {
    Name: 'CollaborationGroupMemberRequest';
    Fields: Fields$CollaborationGroupMemberRequest;
    ParentReferences: ParentReferences$CollaborationGroupMemberRequest;
    ChildRelationships: ChildRelationships$CollaborationGroupMemberRequest;
}
declare type Fields$CollaborationGroupRecord = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    CollaborationGroupId: string;
    RecordId: string;
};
declare type ParentReferences$CollaborationGroupRecord = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    CollaborationGroup: SObjectDefinition$CollaborationGroup;
    Record: SObjectDefinition$Name;
};
declare type ChildRelationships$CollaborationGroupRecord = {};
interface SObjectDefinition$CollaborationGroupRecord extends SObjectDefinition<'CollaborationGroupRecord'> {
    Name: 'CollaborationGroupRecord';
    Fields: Fields$CollaborationGroupRecord;
    ParentReferences: ParentReferences$CollaborationGroupRecord;
    ChildRelationships: ChildRelationships$CollaborationGroupRecord;
}
declare type Fields$CollaborationInvitation = {
    Id: string;
    ParentId: string | null;
    SharedEntityId: string;
    InviterId: string;
    InvitedUserEmail: string;
    InvitedUserEmailNormalized: string;
    Status: string;
    OptionalMessage: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$CollaborationInvitation = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CollaborationInvitation = {};
interface SObjectDefinition$CollaborationInvitation extends SObjectDefinition<'CollaborationInvitation'> {
    Name: 'CollaborationInvitation';
    Fields: Fields$CollaborationInvitation;
    ParentReferences: ParentReferences$CollaborationInvitation;
    ChildRelationships: ChildRelationships$CollaborationInvitation;
}
declare type Fields$ColorDefinition = {
    Id: string;
    DurableId: string | null;
    TabDefinitionId: string | null;
    Color: string | null;
    Theme: string | null;
    Context: string | null;
};
declare type ParentReferences$ColorDefinition = {};
declare type ChildRelationships$ColorDefinition = {};
interface SObjectDefinition$ColorDefinition extends SObjectDefinition<'ColorDefinition'> {
    Name: 'ColorDefinition';
    Fields: Fields$ColorDefinition;
    ParentReferences: ParentReferences$ColorDefinition;
    ChildRelationships: ChildRelationships$ColorDefinition;
}
declare type Fields$CombinedAttachment = {
    Id: string;
    IsDeleted: boolean;
    ParentId: string;
    RecordType: string | null;
    Title: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    FileType: string | null;
    ContentSize: number | null;
    FileExtension: string | null;
    ContentUrl: string | null;
    ExternalDataSourceName: string | null;
    ExternalDataSourceType: string | null;
    SharingOption: string | null;
};
declare type ParentReferences$CombinedAttachment = {
    Parent: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CombinedAttachment = {};
interface SObjectDefinition$CombinedAttachment extends SObjectDefinition<'CombinedAttachment'> {
    Name: 'CombinedAttachment';
    Fields: Fields$CombinedAttachment;
    ParentReferences: ParentReferences$CombinedAttachment;
    ChildRelationships: ChildRelationships$CombinedAttachment;
}
declare type Fields$Community = {
    Id: string;
    SystemModstamp: DateString;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    Name: string;
    Description: string | null;
    IsActive: boolean;
    IsPublished: boolean;
};
declare type ParentReferences$Community = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Community = {};
interface SObjectDefinition$Community extends SObjectDefinition<'Community'> {
    Name: 'Community';
    Fields: Fields$Community;
    ParentReferences: ParentReferences$Community;
    ChildRelationships: ChildRelationships$Community;
}
declare type Fields$ConnectedApplication = {
    Id: string;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    OptionsAllowAdminApprovedUsersOnly: boolean;
    OptionsRefreshTokenValidityMetric: boolean;
    OptionsHasSessionLevelPolicy: boolean;
    OptionsIsInternal: boolean;
    OptionsFullContentPushNotifications: boolean;
    MobileSessionTimeout: string | null;
    PinLength: string | null;
    StartUrl: string | null;
    MobileStartUrl: string | null;
    RefreshTokenValidityPeriod: number | null;
};
declare type ParentReferences$ConnectedApplication = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ConnectedApplication = {
    InstalledMobileApps: SObjectDefinition$InstalledMobileApp;
    SetupEntityAccessItems: SObjectDefinition$SetupEntityAccess;
};
interface SObjectDefinition$ConnectedApplication extends SObjectDefinition<'ConnectedApplication'> {
    Name: 'ConnectedApplication';
    Fields: Fields$ConnectedApplication;
    ParentReferences: ParentReferences$ConnectedApplication;
    ChildRelationships: ChildRelationships$ConnectedApplication;
}
declare type Fields$Contact = {
    Id: string;
    IsDeleted: boolean;
    MasterRecordId: string | null;
    AccountId: string | null;
    LastName: string;
    FirstName: string | null;
    Salutation: string | null;
    Name: string;
    OtherStreet: string | null;
    OtherCity: string | null;
    OtherState: string | null;
    OtherPostalCode: string | null;
    OtherCountry: string | null;
    OtherLatitude: number | null;
    OtherLongitude: number | null;
    OtherGeocodeAccuracy: string | null;
    OtherAddress: Address | null;
    MailingStreet: string | null;
    MailingCity: string | null;
    MailingState: string | null;
    MailingPostalCode: string | null;
    MailingCountry: string | null;
    MailingLatitude: number | null;
    MailingLongitude: number | null;
    MailingGeocodeAccuracy: string | null;
    MailingAddress: Address | null;
    Phone: string | null;
    Fax: string | null;
    MobilePhone: string | null;
    HomePhone: string | null;
    OtherPhone: string | null;
    AssistantPhone: string | null;
    ReportsToId: string | null;
    Email: string | null;
    Title: string | null;
    Department: string | null;
    AssistantName: string | null;
    LeadSource: string | null;
    Birthdate: DateString | null;
    Description: string | null;
    OwnerId: string;
    HasOptedOutOfEmail: boolean;
    HasOptedOutOfFax: boolean;
    DoNotCall: boolean;
    CanAllowPortalSelfReg: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastActivityDate: DateString | null;
    LastCURequestDate: DateString | null;
    LastCUUpdateDate: DateString | null;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    EmailBouncedReason: string | null;
    EmailBouncedDate: DateString | null;
    IsEmailBounced: boolean;
    PhotoUrl: string | null;
    Jigsaw: string | null;
    JigsawContactId: string | null;
    IndividualId: string | null;
};
declare type ParentReferences$Contact = {
    MasterRecord: SObjectDefinition$Contact | null;
    Account: SObjectDefinition$Account | null;
    ReportsTo: SObjectDefinition$Contact | null;
    Owner: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Individual: SObjectDefinition$Individual | null;
};
declare type ChildRelationships$Contact = {
    AcceptedEventRelations: SObjectDefinition$AcceptedEventRelation;
    AccountContactRoles: SObjectDefinition$AccountContactRole;
    ActivityHistories: SObjectDefinition$ActivityHistory;
    Assets: SObjectDefinition$Asset;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    CampaignMembers: SObjectDefinition$CampaignMember;
    Cases: SObjectDefinition$Case;
    CaseContactRoles: SObjectDefinition$CaseContactRole;
    RecordAssociatedGroups: SObjectDefinition$CollaborationGroupRecord;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    Feeds: SObjectDefinition$ContactFeed;
    Histories: SObjectDefinition$ContactHistory;
    ContactRequests: SObjectDefinition$ContactRequest;
    Shares: SObjectDefinition$ContactShare;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    ContractsSigned: SObjectDefinition$Contract;
    ContractContactRoles: SObjectDefinition$ContractContactRole;
    DeclinedEventRelations: SObjectDefinition$DeclinedEventRelation;
    DuplicateRecordItems: SObjectDefinition$DuplicateRecordItem;
    EmailMessageRelations: SObjectDefinition$EmailMessageRelation;
    EmailStatuses: SObjectDefinition$EmailStatus;
    EntitlementContacts: SObjectDefinition$EntitlementContact;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    EventRelations: SObjectDefinition$EventRelation;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    OpenActivities: SObjectDefinition$OpenActivity;
    OpportunityContactRoles: SObjectDefinition$OpportunityContactRole;
    OutgoingEmailRelations: SObjectDefinition$OutgoingEmailRelation;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    ServiceContracts: SObjectDefinition$ServiceContract;
    Personas: SObjectDefinition$SocialPersona;
    Posts: SObjectDefinition$SocialPost;
    Tasks: SObjectDefinition$Task;
    TopicAssignments: SObjectDefinition$TopicAssignment;
    UndecidedEventRelations: SObjectDefinition$UndecidedEventRelation;
    Users: SObjectDefinition$User;
    WorkOrders: SObjectDefinition$WorkOrder;
};
interface SObjectDefinition$Contact extends SObjectDefinition<'Contact'> {
    Name: 'Contact';
    Fields: Fields$Contact;
    ParentReferences: ParentReferences$Contact;
    ChildRelationships: ChildRelationships$Contact;
}
declare type Fields$ContactChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    AccountId: string | null;
    LastName: string | null;
    FirstName: string | null;
    Salutation: string | null;
    Name: string | null;
    OtherStreet: string | null;
    OtherCity: string | null;
    OtherState: string | null;
    OtherPostalCode: string | null;
    OtherCountry: string | null;
    OtherLatitude: number | null;
    OtherLongitude: number | null;
    OtherGeocodeAccuracy: string | null;
    OtherAddress: Address | null;
    MailingStreet: string | null;
    MailingCity: string | null;
    MailingState: string | null;
    MailingPostalCode: string | null;
    MailingCountry: string | null;
    MailingLatitude: number | null;
    MailingLongitude: number | null;
    MailingGeocodeAccuracy: string | null;
    MailingAddress: Address | null;
    Phone: string | null;
    Fax: string | null;
    MobilePhone: string | null;
    HomePhone: string | null;
    OtherPhone: string | null;
    AssistantPhone: string | null;
    ReportsToId: string | null;
    Email: string | null;
    Title: string | null;
    Department: string | null;
    AssistantName: string | null;
    LeadSource: string | null;
    Birthdate: DateString | null;
    Description: string | null;
    OwnerId: string | null;
    HasOptedOutOfEmail: boolean;
    HasOptedOutOfFax: boolean;
    DoNotCall: boolean;
    CanAllowPortalSelfReg: boolean;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    LastCURequestDate: DateString | null;
    LastCUUpdateDate: DateString | null;
    EmailBouncedReason: string | null;
    EmailBouncedDate: DateString | null;
    Jigsaw: string | null;
    JigsawContactId: string | null;
    IndividualId: string | null;
};
declare type ParentReferences$ContactChangeEvent = {};
declare type ChildRelationships$ContactChangeEvent = {};
interface SObjectDefinition$ContactChangeEvent extends SObjectDefinition<'ContactChangeEvent'> {
    Name: 'ContactChangeEvent';
    Fields: Fields$ContactChangeEvent;
    ParentReferences: ParentReferences$ContactChangeEvent;
    ChildRelationships: ChildRelationships$ContactChangeEvent;
}
declare type Fields$ContactFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$ContactFeed = {
    Parent: SObjectDefinition$Contact;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$ContactFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$ContactFeed extends SObjectDefinition<'ContactFeed'> {
    Name: 'ContactFeed';
    Fields: Fields$ContactFeed;
    ParentReferences: ParentReferences$ContactFeed;
    ChildRelationships: ChildRelationships$ContactFeed;
}
declare type Fields$ContactHistory = {
    Id: string;
    IsDeleted: boolean;
    ContactId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$ContactHistory = {
    Contact: SObjectDefinition$Contact;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContactHistory = {};
interface SObjectDefinition$ContactHistory extends SObjectDefinition<'ContactHistory'> {
    Name: 'ContactHistory';
    Fields: Fields$ContactHistory;
    ParentReferences: ParentReferences$ContactHistory;
    ChildRelationships: ChildRelationships$ContactHistory;
}
declare type Fields$ContactRequest = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    WhatId: string | null;
    WhoId: string | null;
    PreferredPhone: string | null;
    PreferredChannel: string;
    Status: string;
};
declare type ParentReferences$ContactRequest = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    What: SObjectDefinition$Name | null;
    Who: SObjectDefinition$Name | null;
};
declare type ChildRelationships$ContactRequest = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    Emails: SObjectDefinition$EmailMessage;
    Events: SObjectDefinition$Event;
    OpenActivities: SObjectDefinition$OpenActivity;
    RecordActions: SObjectDefinition$RecordAction;
    Tasks: SObjectDefinition$Task;
};
interface SObjectDefinition$ContactRequest extends SObjectDefinition<'ContactRequest'> {
    Name: 'ContactRequest';
    Fields: Fields$ContactRequest;
    ParentReferences: ParentReferences$ContactRequest;
    ChildRelationships: ChildRelationships$ContactRequest;
}
declare type Fields$ContactRequestShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$ContactRequestShare = {
    Parent: SObjectDefinition$ContactRequest;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContactRequestShare = {};
interface SObjectDefinition$ContactRequestShare extends SObjectDefinition<'ContactRequestShare'> {
    Name: 'ContactRequestShare';
    Fields: Fields$ContactRequestShare;
    ParentReferences: ParentReferences$ContactRequestShare;
    ChildRelationships: ChildRelationships$ContactRequestShare;
}
declare type Fields$ContactShare = {
    Id: string;
    ContactId: string;
    UserOrGroupId: string;
    ContactAccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$ContactShare = {
    Contact: SObjectDefinition$Contact;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContactShare = {};
interface SObjectDefinition$ContactShare extends SObjectDefinition<'ContactShare'> {
    Name: 'ContactShare';
    Fields: Fields$ContactShare;
    ParentReferences: ParentReferences$ContactShare;
    ChildRelationships: ChildRelationships$ContactShare;
}
declare type Fields$ContentAsset = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string | null;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ContentDocumentId: string | null;
    IsVisibleByExternalUsers: boolean;
};
declare type ParentReferences$ContentAsset = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ContentDocument: SObjectDefinition$ContentDocument | null;
};
declare type ChildRelationships$ContentAsset = {};
interface SObjectDefinition$ContentAsset extends SObjectDefinition<'ContentAsset'> {
    Name: 'ContentAsset';
    Fields: Fields$ContentAsset;
    ParentReferences: ParentReferences$ContentAsset;
    ChildRelationships: ChildRelationships$ContentAsset;
}
declare type Fields$ContentBody = {
    Id: string;
};
declare type ParentReferences$ContentBody = {};
declare type ChildRelationships$ContentBody = {};
interface SObjectDefinition$ContentBody extends SObjectDefinition<'ContentBody'> {
    Name: 'ContentBody';
    Fields: Fields$ContentBody;
    ParentReferences: ParentReferences$ContentBody;
    ChildRelationships: ChildRelationships$ContentBody;
}
declare type Fields$ContentDistribution = {
    Id: string;
    CreatedDate: DateString;
    CreatedById: string;
    OwnerId: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Name: string;
    IsDeleted: boolean;
    ContentVersionId: string;
    ContentDocumentId: string | null;
    RelatedRecordId: string | null;
    PreferencesAllowPDFDownload: boolean;
    PreferencesAllowOriginalDownload: boolean;
    PreferencesPasswordRequired: boolean;
    PreferencesNotifyOnVisit: boolean;
    PreferencesLinkLatestVersion: boolean;
    PreferencesAllowViewInBrowser: boolean;
    PreferencesExpires: boolean;
    PreferencesNotifyRndtnComplete: boolean;
    ExpiryDate: DateString | null;
    Password: string | null;
    ViewCount: number | null;
    FirstViewDate: DateString | null;
    LastViewDate: DateString | null;
    DistributionPublicUrl: string | null;
    ContentDownloadUrl: string | null;
    PdfDownloadUrl: string | null;
};
declare type ParentReferences$ContentDistribution = {
    CreatedBy: SObjectDefinition$User;
    Owner: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ContentVersion: SObjectDefinition$ContentVersion;
    RelatedRecord: SObjectDefinition$Name | null;
};
declare type ChildRelationships$ContentDistribution = {
    ContentDistributionViews: SObjectDefinition$ContentDistributionView;
};
interface SObjectDefinition$ContentDistribution extends SObjectDefinition<'ContentDistribution'> {
    Name: 'ContentDistribution';
    Fields: Fields$ContentDistribution;
    ParentReferences: ParentReferences$ContentDistribution;
    ChildRelationships: ChildRelationships$ContentDistribution;
}
declare type Fields$ContentDistributionView = {
    Id: string;
    DistributionId: string;
    ParentViewId: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
    IsInternal: boolean;
    IsDownload: boolean;
};
declare type ParentReferences$ContentDistributionView = {
    Distribution: SObjectDefinition$ContentDistribution;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContentDistributionView = {};
interface SObjectDefinition$ContentDistributionView extends SObjectDefinition<'ContentDistributionView'> {
    Name: 'ContentDistributionView';
    Fields: Fields$ContentDistributionView;
    ParentReferences: ParentReferences$ContentDistributionView;
    ChildRelationships: ChildRelationships$ContentDistributionView;
}
declare type Fields$ContentDocument = {
    Id: string;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    IsArchived: boolean;
    ArchivedById: string | null;
    ArchivedDate: DateString | null;
    IsDeleted: boolean;
    OwnerId: string;
    SystemModstamp: DateString;
    Title: string;
    PublishStatus: string;
    LatestPublishedVersionId: string | null;
    ParentId: string | null;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    Description: string | null;
    ContentSize: number | null;
    FileType: string | null;
    FileExtension: string | null;
    SharingOption: string | null;
    SharingPrivacy: string | null;
    ContentModifiedDate: DateString | null;
    ContentAssetId: string | null;
};
declare type ParentReferences$ContentDocument = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Owner: SObjectDefinition$User;
    LatestPublishedVersion: SObjectDefinition$ContentVersion | null;
    ContentAsset: SObjectDefinition$ContentAsset | null;
};
declare type ChildRelationships$ContentDocument = {
    ContentDistributions: SObjectDefinition$ContentDistribution;
    Feeds: SObjectDefinition$ContentDocumentFeed;
    Histories: SObjectDefinition$ContentDocumentHistory;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    ContentVersions: SObjectDefinition$ContentVersion;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    TopicAssignments: SObjectDefinition$TopicAssignment;
};
interface SObjectDefinition$ContentDocument extends SObjectDefinition<'ContentDocument'> {
    Name: 'ContentDocument';
    Fields: Fields$ContentDocument;
    ParentReferences: ParentReferences$ContentDocument;
    ChildRelationships: ChildRelationships$ContentDocument;
}
declare type Fields$ContentDocumentFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$ContentDocumentFeed = {
    Parent: SObjectDefinition$ContentDocument;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$ContentDocumentFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$ContentDocumentFeed extends SObjectDefinition<'ContentDocumentFeed'> {
    Name: 'ContentDocumentFeed';
    Fields: Fields$ContentDocumentFeed;
    ParentReferences: ParentReferences$ContentDocumentFeed;
    ChildRelationships: ChildRelationships$ContentDocumentFeed;
}
declare type Fields$ContentDocumentHistory = {
    Id: string;
    IsDeleted: boolean;
    ContentDocumentId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$ContentDocumentHistory = {
    ContentDocument: SObjectDefinition$ContentDocument;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContentDocumentHistory = {};
interface SObjectDefinition$ContentDocumentHistory extends SObjectDefinition<'ContentDocumentHistory'> {
    Name: 'ContentDocumentHistory';
    Fields: Fields$ContentDocumentHistory;
    ParentReferences: ParentReferences$ContentDocumentHistory;
    ChildRelationships: ChildRelationships$ContentDocumentHistory;
}
declare type Fields$ContentDocumentLink = {
    Id: string;
    LinkedEntityId: string;
    ContentDocumentId: string;
    IsDeleted: boolean;
    SystemModstamp: DateString;
    ShareType: string | null;
    Visibility: string | null;
};
declare type ParentReferences$ContentDocumentLink = {
    LinkedEntity: SObjectDefinition$Name;
    ContentDocument: SObjectDefinition$ContentDocument;
};
declare type ChildRelationships$ContentDocumentLink = {};
interface SObjectDefinition$ContentDocumentLink extends SObjectDefinition<'ContentDocumentLink'> {
    Name: 'ContentDocumentLink';
    Fields: Fields$ContentDocumentLink;
    ParentReferences: ParentReferences$ContentDocumentLink;
    ChildRelationships: ChildRelationships$ContentDocumentLink;
}
declare type Fields$ContentDocumentSubscription = {
    Id: string;
    UserId: string;
    ContentDocumentId: string;
    IsCommentSub: boolean;
    IsDocumentSub: boolean;
};
declare type ParentReferences$ContentDocumentSubscription = {
    User: SObjectDefinition$User;
    ContentDocument: SObjectDefinition$ContentDocument;
};
declare type ChildRelationships$ContentDocumentSubscription = {};
interface SObjectDefinition$ContentDocumentSubscription extends SObjectDefinition<'ContentDocumentSubscription'> {
    Name: 'ContentDocumentSubscription';
    Fields: Fields$ContentDocumentSubscription;
    ParentReferences: ParentReferences$ContentDocumentSubscription;
    ChildRelationships: ChildRelationships$ContentDocumentSubscription;
}
declare type Fields$ContentFolder = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ParentContentFolderId: string | null;
};
declare type ParentReferences$ContentFolder = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ParentContentFolder: SObjectDefinition$ContentFolder | null;
};
declare type ChildRelationships$ContentFolder = {
    ContentFolderLinks: SObjectDefinition$ContentFolderLink;
};
interface SObjectDefinition$ContentFolder extends SObjectDefinition<'ContentFolder'> {
    Name: 'ContentFolder';
    Fields: Fields$ContentFolder;
    ParentReferences: ParentReferences$ContentFolder;
    ChildRelationships: ChildRelationships$ContentFolder;
}
declare type Fields$ContentFolderItem = {
    Id: string;
    IsDeleted: boolean;
    IsFolder: boolean;
    ParentContentFolderId: string | null;
    Title: string;
    FileType: string | null;
    ContentSize: number | null;
    FileExtension: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$ContentFolderItem = {
    ParentContentFolder: SObjectDefinition$ContentFolder | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContentFolderItem = {};
interface SObjectDefinition$ContentFolderItem extends SObjectDefinition<'ContentFolderItem'> {
    Name: 'ContentFolderItem';
    Fields: Fields$ContentFolderItem;
    ParentReferences: ParentReferences$ContentFolderItem;
    ChildRelationships: ChildRelationships$ContentFolderItem;
}
declare type Fields$ContentFolderLink = {
    Id: string;
    ParentEntityId: string;
    ContentFolderId: string;
    IsDeleted: boolean;
    EnableFolderStatus: string | null;
};
declare type ParentReferences$ContentFolderLink = {
    ContentFolder: SObjectDefinition$ContentFolder;
};
declare type ChildRelationships$ContentFolderLink = {};
interface SObjectDefinition$ContentFolderLink extends SObjectDefinition<'ContentFolderLink'> {
    Name: 'ContentFolderLink';
    Fields: Fields$ContentFolderLink;
    ParentReferences: ParentReferences$ContentFolderLink;
    ChildRelationships: ChildRelationships$ContentFolderLink;
}
declare type Fields$ContentFolderMember = {
    Id: string;
    ParentContentFolderId: string;
    ChildRecordId: string;
    IsDeleted: boolean;
    SystemModstamp: DateString;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
};
declare type ParentReferences$ContentFolderMember = {
    ParentContentFolder: SObjectDefinition$ContentFolder;
    ChildRecord: SObjectDefinition$ContentDocument;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContentFolderMember = {};
interface SObjectDefinition$ContentFolderMember extends SObjectDefinition<'ContentFolderMember'> {
    Name: 'ContentFolderMember';
    Fields: Fields$ContentFolderMember;
    ParentReferences: ParentReferences$ContentFolderMember;
    ChildRelationships: ChildRelationships$ContentFolderMember;
}
declare type Fields$ContentHubItem = {
    Id: string;
    ExternalId: string | null;
    ContentHubRepositoryId: string | null;
    ParentId: string | null;
    Owner: string | null;
    Description: string | null;
    ContentSize: number | null;
    CreatedDate: DateString | null;
    ExternalDocumentUrl: string | null;
    ExternalContentUrl: string | null;
    IsFolder: boolean;
    FileType: string | null;
    MimeType: string | null;
    Title: string | null;
    LastModifiedDate: DateString | null;
    ContentModifiedDate: DateString | null;
    UpdatedBy: string | null;
    Name: string | null;
    FileExtension: string | null;
};
declare type ParentReferences$ContentHubItem = {
    ContentHubRepository: SObjectDefinition$ContentHubRepository | null;
};
declare type ChildRelationships$ContentHubItem = {};
interface SObjectDefinition$ContentHubItem extends SObjectDefinition<'ContentHubItem'> {
    Name: 'ContentHubItem';
    Fields: Fields$ContentHubItem;
    ParentReferences: ParentReferences$ContentHubItem;
    ChildRelationships: ChildRelationships$ContentHubItem;
}
declare type Fields$ContentHubRepository = {
    Id: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
    DeveloperName: string;
    MasterLabel: string | null;
    Type: string | null;
};
declare type ParentReferences$ContentHubRepository = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContentHubRepository = {};
interface SObjectDefinition$ContentHubRepository extends SObjectDefinition<'ContentHubRepository'> {
    Name: 'ContentHubRepository';
    Fields: Fields$ContentHubRepository;
    ParentReferences: ParentReferences$ContentHubRepository;
    ChildRelationships: ChildRelationships$ContentHubRepository;
}
declare type Fields$ContentNotification = {
    Id: string;
    Nature: string | null;
    UsersId: string;
    CreatedDate: DateString;
    EntityType: string | null;
    EntityIdentifierId: string | null;
    Subject: string | null;
    Text: string | null;
};
declare type ParentReferences$ContentNotification = {
    Users: SObjectDefinition$User;
};
declare type ChildRelationships$ContentNotification = {};
interface SObjectDefinition$ContentNotification extends SObjectDefinition<'ContentNotification'> {
    Name: 'ContentNotification';
    Fields: Fields$ContentNotification;
    ParentReferences: ParentReferences$ContentNotification;
    ChildRelationships: ChildRelationships$ContentNotification;
}
declare type Fields$ContentTagSubscription = {
    Id: string;
    UserId: string | null;
};
declare type ParentReferences$ContentTagSubscription = {
    User: SObjectDefinition$User | null;
};
declare type ChildRelationships$ContentTagSubscription = {};
interface SObjectDefinition$ContentTagSubscription extends SObjectDefinition<'ContentTagSubscription'> {
    Name: 'ContentTagSubscription';
    Fields: Fields$ContentTagSubscription;
    ParentReferences: ParentReferences$ContentTagSubscription;
    ChildRelationships: ChildRelationships$ContentTagSubscription;
}
declare type Fields$ContentUserSubscription = {
    Id: string;
    SubscriberUserId: string;
    SubscribedToUserId: string;
};
declare type ParentReferences$ContentUserSubscription = {
    SubscriberUser: SObjectDefinition$User;
    SubscribedToUser: SObjectDefinition$User;
};
declare type ChildRelationships$ContentUserSubscription = {};
interface SObjectDefinition$ContentUserSubscription extends SObjectDefinition<'ContentUserSubscription'> {
    Name: 'ContentUserSubscription';
    Fields: Fields$ContentUserSubscription;
    ParentReferences: ParentReferences$ContentUserSubscription;
    ChildRelationships: ChildRelationships$ContentUserSubscription;
}
declare type Fields$ContentVersion = {
    Id: string;
    ContentDocumentId: string;
    IsLatest: boolean;
    ContentUrl: string | null;
    ContentBodyId: string | null;
    VersionNumber: string | null;
    Title: string;
    Description: string | null;
    ReasonForChange: string | null;
    SharingOption: string;
    SharingPrivacy: string;
    PathOnClient: string | null;
    RatingCount: number | null;
    IsDeleted: boolean;
    ContentModifiedDate: DateString | null;
    ContentModifiedById: string | null;
    PositiveRatingCount: number | null;
    NegativeRatingCount: number | null;
    FeaturedContentBoost: number | null;
    FeaturedContentDate: DateString | null;
    OwnerId: string;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    TagCsv: string | null;
    FileType: string;
    PublishStatus: string;
    VersionData: BlobString | null;
    ContentSize: number | null;
    FileExtension: string | null;
    FirstPublishLocationId: string | null;
    Origin: string;
    ContentLocation: string;
    TextPreview: string | null;
    ExternalDocumentInfo1: string | null;
    ExternalDocumentInfo2: string | null;
    ExternalDataSourceId: string | null;
    Checksum: string | null;
    IsMajorVersion: boolean;
    IsAssetEnabled: boolean;
};
declare type ParentReferences$ContentVersion = {
    ContentDocument: SObjectDefinition$ContentDocument;
    ContentBody: SObjectDefinition$ContentBody | null;
    ContentModifiedBy: SObjectDefinition$User | null;
    Owner: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    FirstPublishLocation: SObjectDefinition$Name | null;
    ExternalDataSource: SObjectDefinition$ExternalDataSource | null;
};
declare type ChildRelationships$ContentVersion = {
    Histories: SObjectDefinition$ContentVersionHistory;
};
interface SObjectDefinition$ContentVersion extends SObjectDefinition<'ContentVersion'> {
    Name: 'ContentVersion';
    Fields: Fields$ContentVersion;
    ParentReferences: ParentReferences$ContentVersion;
    ChildRelationships: ChildRelationships$ContentVersion;
}
declare type Fields$ContentVersionComment = {
    Id: string;
    ContentDocumentId: string;
    ContentVersionId: string;
    UserComment: string | null;
    CreatedDate: DateString;
};
declare type ParentReferences$ContentVersionComment = {
    ContentDocument: SObjectDefinition$ContentDocument;
    ContentVersion: SObjectDefinition$ContentVersion;
};
declare type ChildRelationships$ContentVersionComment = {};
interface SObjectDefinition$ContentVersionComment extends SObjectDefinition<'ContentVersionComment'> {
    Name: 'ContentVersionComment';
    Fields: Fields$ContentVersionComment;
    ParentReferences: ParentReferences$ContentVersionComment;
    ChildRelationships: ChildRelationships$ContentVersionComment;
}
declare type Fields$ContentVersionHistory = {
    Id: string;
    IsDeleted: boolean;
    ContentVersionId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$ContentVersionHistory = {
    ContentVersion: SObjectDefinition$ContentVersion;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContentVersionHistory = {};
interface SObjectDefinition$ContentVersionHistory extends SObjectDefinition<'ContentVersionHistory'> {
    Name: 'ContentVersionHistory';
    Fields: Fields$ContentVersionHistory;
    ParentReferences: ParentReferences$ContentVersionHistory;
    ChildRelationships: ChildRelationships$ContentVersionHistory;
}
declare type Fields$ContentVersionRating = {
    Id: string;
    UserId: string;
    ContentVersionId: string;
    Rating: number | null;
    UserComment: string | null;
    LastModifiedDate: DateString;
};
declare type ParentReferences$ContentVersionRating = {
    User: SObjectDefinition$User;
    ContentVersion: SObjectDefinition$ContentVersion;
};
declare type ChildRelationships$ContentVersionRating = {};
interface SObjectDefinition$ContentVersionRating extends SObjectDefinition<'ContentVersionRating'> {
    Name: 'ContentVersionRating';
    Fields: Fields$ContentVersionRating;
    ParentReferences: ParentReferences$ContentVersionRating;
    ChildRelationships: ChildRelationships$ContentVersionRating;
}
declare type Fields$ContentWorkspace = {
    Id: string;
    Name: string;
    Description: string | null;
    TagModel: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastModifiedDate: DateString;
    DefaultRecordTypeId: string | null;
    IsRestrictContentTypes: boolean;
    IsRestrictLinkedContentTypes: boolean;
    WorkspaceType: string | null;
    ShouldAddCreatorMembership: boolean;
    LastWorkspaceActivityDate: DateString | null;
    RootContentFolderId: string | null;
    NamespacePrefix: string | null;
    DeveloperName: string | null;
    WorkspaceImageId: string | null;
};
declare type ParentReferences$ContentWorkspace = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    WorkspaceImage: SObjectDefinition$ContentAsset | null;
};
declare type ChildRelationships$ContentWorkspace = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    ContentFolderLinks: SObjectDefinition$ContentFolderLink;
    ContentWorkspaceMembers: SObjectDefinition$ContentWorkspaceMember;
};
interface SObjectDefinition$ContentWorkspace extends SObjectDefinition<'ContentWorkspace'> {
    Name: 'ContentWorkspace';
    Fields: Fields$ContentWorkspace;
    ParentReferences: ParentReferences$ContentWorkspace;
    ChildRelationships: ChildRelationships$ContentWorkspace;
}
declare type Fields$ContentWorkspaceDoc = {
    Id: string;
    ContentWorkspaceId: string;
    ContentDocumentId: string;
    CreatedDate: DateString;
    SystemModstamp: DateString;
    IsOwner: boolean;
    IsDeleted: boolean;
};
declare type ParentReferences$ContentWorkspaceDoc = {
    ContentWorkspace: SObjectDefinition$ContentWorkspace;
    ContentDocument: SObjectDefinition$ContentDocument;
};
declare type ChildRelationships$ContentWorkspaceDoc = {};
interface SObjectDefinition$ContentWorkspaceDoc extends SObjectDefinition<'ContentWorkspaceDoc'> {
    Name: 'ContentWorkspaceDoc';
    Fields: Fields$ContentWorkspaceDoc;
    ParentReferences: ParentReferences$ContentWorkspaceDoc;
    ChildRelationships: ChildRelationships$ContentWorkspaceDoc;
}
declare type Fields$ContentWorkspaceMember = {
    Id: string;
    ContentWorkspaceId: string;
    ContentWorkspacePermissionId: string | null;
    MemberId: string;
    MemberType: string | null;
    CreatedById: string;
    CreatedDate: DateString;
};
declare type ParentReferences$ContentWorkspaceMember = {
    ContentWorkspace: SObjectDefinition$ContentWorkspace;
    ContentWorkspacePermission: SObjectDefinition$ContentWorkspacePermission | null;
    Member: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContentWorkspaceMember = {};
interface SObjectDefinition$ContentWorkspaceMember extends SObjectDefinition<'ContentWorkspaceMember'> {
    Name: 'ContentWorkspaceMember';
    Fields: Fields$ContentWorkspaceMember;
    ParentReferences: ParentReferences$ContentWorkspaceMember;
    ChildRelationships: ChildRelationships$ContentWorkspaceMember;
}
declare type Fields$ContentWorkspacePermission = {
    Id: string;
    Name: string;
    Type: string | null;
    PermissionsManageWorkspace: boolean;
    PermissionsAddContent: boolean;
    PermissionsAddContentOBO: boolean;
    PermissionsArchiveContent: boolean;
    PermissionsDeleteContent: boolean;
    PermissionsFeatureContent: boolean;
    PermissionsViewComments: boolean;
    PermissionsAddComment: boolean;
    PermissionsModifyComments: boolean;
    PermissionsTagContent: boolean;
    PermissionsDeliverContent: boolean;
    PermissionsChatterSharing: boolean;
    PermissionsOrganizeFileAndFolder: boolean;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    LastModifiedById: string;
    Description: string | null;
};
declare type ParentReferences$ContentWorkspacePermission = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContentWorkspacePermission = {};
interface SObjectDefinition$ContentWorkspacePermission extends SObjectDefinition<'ContentWorkspacePermission'> {
    Name: 'ContentWorkspacePermission';
    Fields: Fields$ContentWorkspacePermission;
    ParentReferences: ParentReferences$ContentWorkspacePermission;
    ChildRelationships: ChildRelationships$ContentWorkspacePermission;
}
declare type Fields$ContentWorkspaceSubscription = {
    Id: string;
    UserId: string;
    ContentWorkspaceId: string;
};
declare type ParentReferences$ContentWorkspaceSubscription = {
    User: SObjectDefinition$User;
    ContentWorkspace: SObjectDefinition$ContentWorkspace;
};
declare type ChildRelationships$ContentWorkspaceSubscription = {};
interface SObjectDefinition$ContentWorkspaceSubscription extends SObjectDefinition<'ContentWorkspaceSubscription'> {
    Name: 'ContentWorkspaceSubscription';
    Fields: Fields$ContentWorkspaceSubscription;
    ParentReferences: ParentReferences$ContentWorkspaceSubscription;
    ChildRelationships: ChildRelationships$ContentWorkspaceSubscription;
}
declare type Fields$Contract = {
    Id: string;
    AccountId: string;
    OwnerExpirationNotice: string | null;
    StartDate: DateString | null;
    EndDate: DateString | null;
    BillingStreet: string | null;
    BillingCity: string | null;
    BillingState: string | null;
    BillingPostalCode: string | null;
    BillingCountry: string | null;
    BillingLatitude: number | null;
    BillingLongitude: number | null;
    BillingGeocodeAccuracy: string | null;
    BillingAddress: Address | null;
    ShippingStreet: string | null;
    ShippingCity: string | null;
    ShippingState: string | null;
    ShippingPostalCode: string | null;
    ShippingCountry: string | null;
    ShippingLatitude: number | null;
    ShippingLongitude: number | null;
    ShippingGeocodeAccuracy: string | null;
    ShippingAddress: Address | null;
    ContractTerm: number | null;
    OwnerId: string;
    Status: string;
    CompanySignedId: string | null;
    CompanySignedDate: DateString | null;
    CustomerSignedId: string | null;
    CustomerSignedTitle: string | null;
    CustomerSignedDate: DateString | null;
    SpecialTerms: string | null;
    ActivatedById: string | null;
    ActivatedDate: DateString | null;
    StatusCode: string;
    Description: string | null;
    IsDeleted: boolean;
    ContractNumber: string;
    LastApprovedDate: DateString | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastActivityDate: DateString | null;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
};
declare type ParentReferences$Contract = {
    Account: SObjectDefinition$Account;
    Owner: SObjectDefinition$User;
    CompanySigned: SObjectDefinition$User | null;
    CustomerSigned: SObjectDefinition$Contact | null;
    ActivatedBy: SObjectDefinition$User | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Contract = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    Approvals: SObjectDefinition$Approval;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    RecordAssociatedGroups: SObjectDefinition$CollaborationGroupRecord;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    ContractContactRoles: SObjectDefinition$ContractContactRole;
    Feeds: SObjectDefinition$ContractFeed;
    Histories: SObjectDefinition$ContractHistory;
    Emails: SObjectDefinition$EmailMessage;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    OpenActivities: SObjectDefinition$OpenActivity;
    Orders: SObjectDefinition$Order;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    Tasks: SObjectDefinition$Task;
    TopicAssignments: SObjectDefinition$TopicAssignment;
};
interface SObjectDefinition$Contract extends SObjectDefinition<'Contract'> {
    Name: 'Contract';
    Fields: Fields$Contract;
    ParentReferences: ParentReferences$Contract;
    ChildRelationships: ChildRelationships$Contract;
}
declare type Fields$ContractContactRole = {
    Id: string;
    ContractId: string;
    ContactId: string;
    Role: string | null;
    IsPrimary: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
};
declare type ParentReferences$ContractContactRole = {
    Contract: SObjectDefinition$Contract;
    Contact: SObjectDefinition$Contact;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContractContactRole = {};
interface SObjectDefinition$ContractContactRole extends SObjectDefinition<'ContractContactRole'> {
    Name: 'ContractContactRole';
    Fields: Fields$ContractContactRole;
    ParentReferences: ParentReferences$ContractContactRole;
    ChildRelationships: ChildRelationships$ContractContactRole;
}
declare type Fields$ContractFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$ContractFeed = {
    Parent: SObjectDefinition$Contract;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$ContractFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$ContractFeed extends SObjectDefinition<'ContractFeed'> {
    Name: 'ContractFeed';
    Fields: Fields$ContractFeed;
    ParentReferences: ParentReferences$ContractFeed;
    ChildRelationships: ChildRelationships$ContractFeed;
}
declare type Fields$ContractHistory = {
    Id: string;
    IsDeleted: boolean;
    ContractId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$ContractHistory = {
    Contract: SObjectDefinition$Contract;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContractHistory = {};
interface SObjectDefinition$ContractHistory extends SObjectDefinition<'ContractHistory'> {
    Name: 'ContractHistory';
    Fields: Fields$ContractHistory;
    ParentReferences: ParentReferences$ContractHistory;
    ChildRelationships: ChildRelationships$ContractHistory;
}
declare type Fields$ContractLineItem = {
    Id: string;
    IsDeleted: boolean;
    LineItemNumber: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    ServiceContractId: string;
    Product2Id: string | null;
    AssetId: string | null;
    StartDate: DateString | null;
    EndDate: DateString | null;
    Description: string | null;
    PricebookEntryId: string;
    Quantity: number;
    UnitPrice: number;
    Discount: number | null;
    ListPrice: number | null;
    Subtotal: number | null;
    TotalPrice: number | null;
    Status: string | null;
    ParentContractLineItemId: string | null;
    RootContractLineItemId: string | null;
};
declare type ParentReferences$ContractLineItem = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ServiceContract: SObjectDefinition$ServiceContract;
    Product2: SObjectDefinition$Product2 | null;
    Asset: SObjectDefinition$Asset | null;
    PricebookEntry: SObjectDefinition$PricebookEntry;
    ParentContractLineItem: SObjectDefinition$ContractLineItem | null;
    RootContractLineItem: SObjectDefinition$ContractLineItem | null;
};
declare type ChildRelationships$ContractLineItem = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    ChildContractLineItems: SObjectDefinition$ContractLineItem;
    DescendantContractLineItems: SObjectDefinition$ContractLineItem;
    Histories: SObjectDefinition$ContractLineItemHistory;
    Emails: SObjectDefinition$EmailMessage;
    Entitlements: SObjectDefinition$Entitlement;
    Events: SObjectDefinition$Event;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    OpenActivities: SObjectDefinition$OpenActivity;
    RecordActions: SObjectDefinition$RecordAction;
    Tasks: SObjectDefinition$Task;
};
interface SObjectDefinition$ContractLineItem extends SObjectDefinition<'ContractLineItem'> {
    Name: 'ContractLineItem';
    Fields: Fields$ContractLineItem;
    ParentReferences: ParentReferences$ContractLineItem;
    ChildRelationships: ChildRelationships$ContractLineItem;
}
declare type Fields$ContractLineItemChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    LineItemNumber: string;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    ServiceContractId: string | null;
    AssetId: string | null;
    StartDate: DateString | null;
    EndDate: DateString | null;
    Description: string | null;
    PricebookEntryId: string | null;
    Quantity: number | null;
    UnitPrice: number | null;
    Discount: number | null;
    ParentContractLineItemId: string | null;
    RootContractLineItemId: string | null;
};
declare type ParentReferences$ContractLineItemChangeEvent = {};
declare type ChildRelationships$ContractLineItemChangeEvent = {};
interface SObjectDefinition$ContractLineItemChangeEvent extends SObjectDefinition<'ContractLineItemChangeEvent'> {
    Name: 'ContractLineItemChangeEvent';
    Fields: Fields$ContractLineItemChangeEvent;
    ParentReferences: ParentReferences$ContractLineItemChangeEvent;
    ChildRelationships: ChildRelationships$ContractLineItemChangeEvent;
}
declare type Fields$ContractLineItemHistory = {
    Id: string;
    IsDeleted: boolean;
    ContractLineItemId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$ContractLineItemHistory = {
    ContractLineItem: SObjectDefinition$ContractLineItem;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContractLineItemHistory = {};
interface SObjectDefinition$ContractLineItemHistory extends SObjectDefinition<'ContractLineItemHistory'> {
    Name: 'ContractLineItemHistory';
    Fields: Fields$ContractLineItemHistory;
    ParentReferences: ParentReferences$ContractLineItemHistory;
    ChildRelationships: ChildRelationships$ContractLineItemHistory;
}
declare type Fields$ContractStatus = {
    Id: string;
    MasterLabel: string | null;
    ApiName: string;
    SortOrder: number | null;
    IsDefault: boolean;
    StatusCode: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$ContractStatus = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ContractStatus = {};
interface SObjectDefinition$ContractStatus extends SObjectDefinition<'ContractStatus'> {
    Name: 'ContractStatus';
    Fields: Fields$ContractStatus;
    ParentReferences: ParentReferences$ContractStatus;
    ChildRelationships: ChildRelationships$ContractStatus;
}
declare type Fields$CorsWhitelistEntry = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string | null;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    UrlPattern: string;
};
declare type ParentReferences$CorsWhitelistEntry = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CorsWhitelistEntry = {};
interface SObjectDefinition$CorsWhitelistEntry extends SObjectDefinition<'CorsWhitelistEntry'> {
    Name: 'CorsWhitelistEntry';
    Fields: Fields$CorsWhitelistEntry;
    ParentReferences: ParentReferences$CorsWhitelistEntry;
    ChildRelationships: ChildRelationships$CorsWhitelistEntry;
}
declare type Fields$CronJobDetail = {
    Id: string;
    Name: string;
    JobType: string | null;
};
declare type ParentReferences$CronJobDetail = {};
declare type ChildRelationships$CronJobDetail = {};
interface SObjectDefinition$CronJobDetail extends SObjectDefinition<'CronJobDetail'> {
    Name: 'CronJobDetail';
    Fields: Fields$CronJobDetail;
    ParentReferences: ParentReferences$CronJobDetail;
    ChildRelationships: ChildRelationships$CronJobDetail;
}
declare type Fields$CronTrigger = {
    Id: string;
    CronJobDetailId: string | null;
    NextFireTime: DateString | null;
    PreviousFireTime: DateString | null;
    State: string | null;
    StartTime: DateString | null;
    EndTime: DateString | null;
    CronExpression: string | null;
    TimeZoneSidKey: string | null;
    OwnerId: string | null;
    LastModifiedById: string;
    CreatedById: string;
    CreatedDate: DateString;
    TimesTriggered: number | null;
};
declare type ParentReferences$CronTrigger = {
    CronJobDetail: SObjectDefinition$CronJobDetail | null;
    LastModifiedBy: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CronTrigger = {};
interface SObjectDefinition$CronTrigger extends SObjectDefinition<'CronTrigger'> {
    Name: 'CronTrigger';
    Fields: Fields$CronTrigger;
    ParentReferences: ParentReferences$CronTrigger;
    ChildRelationships: ChildRelationships$CronTrigger;
}
declare type Fields$CspTrustedSite = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string | null;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    EndpointUrl: string;
    Description: string | null;
    IsActive: boolean;
};
declare type ParentReferences$CspTrustedSite = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CspTrustedSite = {};
interface SObjectDefinition$CspTrustedSite extends SObjectDefinition<'CspTrustedSite'> {
    Name: 'CspTrustedSite';
    Fields: Fields$CspTrustedSite;
    ParentReferences: ParentReferences$CspTrustedSite;
    ChildRelationships: ChildRelationships$CspTrustedSite;
}
declare type Fields$CustomBrand = {
    Id: string;
    ParentId: string;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedDate: DateString;
    LastModifiedById: string;
};
declare type ParentReferences$CustomBrand = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CustomBrand = {
    CustomBrandAssets: SObjectDefinition$CustomBrandAsset;
};
interface SObjectDefinition$CustomBrand extends SObjectDefinition<'CustomBrand'> {
    Name: 'CustomBrand';
    Fields: Fields$CustomBrand;
    ParentReferences: ParentReferences$CustomBrand;
    ChildRelationships: ChildRelationships$CustomBrand;
}
declare type Fields$CustomBrandAsset = {
    Id: string;
    CustomBrandId: string;
    AssetCategory: string;
    TextAsset: string | null;
    AssetSourceId: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedDate: DateString;
    LastModifiedById: string;
};
declare type ParentReferences$CustomBrandAsset = {
    CustomBrand: SObjectDefinition$CustomBrand;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CustomBrandAsset = {};
interface SObjectDefinition$CustomBrandAsset extends SObjectDefinition<'CustomBrandAsset'> {
    Name: 'CustomBrandAsset';
    Fields: Fields$CustomBrandAsset;
    ParentReferences: ParentReferences$CustomBrandAsset;
    ChildRelationships: ChildRelationships$CustomBrandAsset;
}
declare type Fields$CustomHttpHeader = {
    Id: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ParentId: string;
    HeaderFieldName: string;
    HeaderFieldValue: string;
    IsActive: boolean;
    Description: string | null;
};
declare type ParentReferences$CustomHttpHeader = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Parent: SObjectDefinition$Name;
};
declare type ChildRelationships$CustomHttpHeader = {};
interface SObjectDefinition$CustomHttpHeader extends SObjectDefinition<'CustomHttpHeader'> {
    Name: 'CustomHttpHeader';
    Fields: Fields$CustomHttpHeader;
    ParentReferences: ParentReferences$CustomHttpHeader;
    ChildRelationships: ChildRelationships$CustomHttpHeader;
}
declare type Fields$CustomObjectUserLicenseMetrics = {
    Id: string;
    MetricsDate: DateString;
    UserLicenseId: string;
    CustomObjectId: string | null;
    SystemModstamp: DateString;
    CustomObjectType: string | null;
    CustomObjectName: string | null;
    ObjectCount: number | null;
};
declare type ParentReferences$CustomObjectUserLicenseMetrics = {
    UserLicense: SObjectDefinition$UserLicense;
};
declare type ChildRelationships$CustomObjectUserLicenseMetrics = {};
interface SObjectDefinition$CustomObjectUserLicenseMetrics extends SObjectDefinition<'CustomObjectUserLicenseMetrics'> {
    Name: 'CustomObjectUserLicenseMetrics';
    Fields: Fields$CustomObjectUserLicenseMetrics;
    ParentReferences: ParentReferences$CustomObjectUserLicenseMetrics;
    ChildRelationships: ChildRelationships$CustomObjectUserLicenseMetrics;
}
declare type Fields$CustomPermission = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string;
    MasterLabel: string;
    NamespacePrefix: string | null;
    IsProtected: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Description: string | null;
};
declare type ParentReferences$CustomPermission = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$CustomPermission = {
    CustomPermissionItem: SObjectDefinition$CustomPermissionDependency;
    CustomPermissionDependencyItem: SObjectDefinition$CustomPermissionDependency;
    GrantedByLicenses: SObjectDefinition$GrantedByLicense;
    SetupEntityAccessItems: SObjectDefinition$SetupEntityAccess;
};
interface SObjectDefinition$CustomPermission extends SObjectDefinition<'CustomPermission'> {
    Name: 'CustomPermission';
    Fields: Fields$CustomPermission;
    ParentReferences: ParentReferences$CustomPermission;
    ChildRelationships: ChildRelationships$CustomPermission;
}
declare type Fields$CustomPermissionDependency = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    CustomPermissionId: string;
    RequiredCustomPermissionId: string;
};
declare type ParentReferences$CustomPermissionDependency = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    CustomPermission: SObjectDefinition$CustomPermission;
    RequiredCustomPermission: SObjectDefinition$CustomPermission;
};
declare type ChildRelationships$CustomPermissionDependency = {};
interface SObjectDefinition$CustomPermissionDependency extends SObjectDefinition<'CustomPermissionDependency'> {
    Name: 'CustomPermissionDependency';
    Fields: Fields$CustomPermissionDependency;
    ParentReferences: ParentReferences$CustomPermissionDependency;
    ChildRelationships: ChildRelationships$CustomPermissionDependency;
}
declare type Fields$Dashboard = {
    Id: string;
    IsDeleted: boolean;
    FolderId: string;
    FolderName: string | null;
    Title: string;
    DeveloperName: string;
    NamespacePrefix: string | null;
    Description: string | null;
    LeftSize: string;
    MiddleSize: string | null;
    RightSize: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    RunningUserId: string;
    TitleColor: number;
    TitleSize: number;
    TextColor: number;
    BackgroundStart: number;
    BackgroundEnd: number;
    BackgroundDirection: string;
    Type: string;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    DashboardResultRefreshedDate: string | null;
    DashboardResultRunningUser: string | null;
    ColorPalette: string | null;
    ChartTheme: string | null;
};
declare type ParentReferences$Dashboard = {
    Folder: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    RunningUser: SObjectDefinition$User;
};
declare type ChildRelationships$Dashboard = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    DashboardComponents: SObjectDefinition$DashboardComponent;
    Feeds: SObjectDefinition$DashboardFeed;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
};
interface SObjectDefinition$Dashboard extends SObjectDefinition<'Dashboard'> {
    Name: 'Dashboard';
    Fields: Fields$Dashboard;
    ParentReferences: ParentReferences$Dashboard;
    ChildRelationships: ChildRelationships$Dashboard;
}
declare type Fields$DashboardComponent = {
    Id: string;
    Name: string | null;
    DashboardId: string;
    CustomReportId: string | null;
};
declare type ParentReferences$DashboardComponent = {
    Dashboard: SObjectDefinition$Dashboard;
};
declare type ChildRelationships$DashboardComponent = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    Feeds: SObjectDefinition$DashboardComponentFeed;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
};
interface SObjectDefinition$DashboardComponent extends SObjectDefinition<'DashboardComponent'> {
    Name: 'DashboardComponent';
    Fields: Fields$DashboardComponent;
    ParentReferences: ParentReferences$DashboardComponent;
    ChildRelationships: ChildRelationships$DashboardComponent;
}
declare type Fields$DashboardComponentFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$DashboardComponentFeed = {
    Parent: SObjectDefinition$DashboardComponent;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$DashboardComponentFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$DashboardComponentFeed extends SObjectDefinition<'DashboardComponentFeed'> {
    Name: 'DashboardComponentFeed';
    Fields: Fields$DashboardComponentFeed;
    ParentReferences: ParentReferences$DashboardComponentFeed;
    ChildRelationships: ChildRelationships$DashboardComponentFeed;
}
declare type Fields$DashboardFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$DashboardFeed = {
    Parent: SObjectDefinition$Dashboard;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$DashboardFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$DashboardFeed extends SObjectDefinition<'DashboardFeed'> {
    Name: 'DashboardFeed';
    Fields: Fields$DashboardFeed;
    ParentReferences: ParentReferences$DashboardFeed;
    ChildRelationships: ChildRelationships$DashboardFeed;
}
declare type Fields$DataAssessmentFieldMetric = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    DataAssessmentMetricId: string;
    FieldName: string | null;
    NumMatchedInSync: number | null;
    NumMatchedDifferent: number | null;
    NumMatchedBlanks: number | null;
    NumUnmatchedBlanks: number | null;
};
declare type ParentReferences$DataAssessmentFieldMetric = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    DataAssessmentMetric: SObjectDefinition$DataAssessmentMetric;
};
declare type ChildRelationships$DataAssessmentFieldMetric = {
    DataAssessmentValueMetrics: SObjectDefinition$DataAssessmentValueMetric;
};
interface SObjectDefinition$DataAssessmentFieldMetric extends SObjectDefinition<'DataAssessmentFieldMetric'> {
    Name: 'DataAssessmentFieldMetric';
    Fields: Fields$DataAssessmentFieldMetric;
    ParentReferences: ParentReferences$DataAssessmentFieldMetric;
    ChildRelationships: ChildRelationships$DataAssessmentFieldMetric;
}
declare type Fields$DataAssessmentMetric = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    NumTotal: number | null;
    NumProcessed: number | null;
    NumMatched: number | null;
    NumMatchedDifferent: number | null;
    NumUnmatched: number | null;
    NumDuplicates: number | null;
};
declare type ParentReferences$DataAssessmentMetric = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$DataAssessmentMetric = {
    DataAssessmentMetrics: SObjectDefinition$DataAssessmentFieldMetric;
};
interface SObjectDefinition$DataAssessmentMetric extends SObjectDefinition<'DataAssessmentMetric'> {
    Name: 'DataAssessmentMetric';
    Fields: Fields$DataAssessmentMetric;
    ParentReferences: ParentReferences$DataAssessmentMetric;
    ChildRelationships: ChildRelationships$DataAssessmentMetric;
}
declare type Fields$DataAssessmentValueMetric = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    DataAssessmentFieldMetricId: string;
    FieldValue: string | null;
    ValueCount: number | null;
};
declare type ParentReferences$DataAssessmentValueMetric = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    DataAssessmentFieldMetric: SObjectDefinition$DataAssessmentFieldMetric;
};
declare type ChildRelationships$DataAssessmentValueMetric = {};
interface SObjectDefinition$DataAssessmentValueMetric extends SObjectDefinition<'DataAssessmentValueMetric'> {
    Name: 'DataAssessmentValueMetric';
    Fields: Fields$DataAssessmentValueMetric;
    ParentReferences: ParentReferences$DataAssessmentValueMetric;
    ChildRelationships: ChildRelationships$DataAssessmentValueMetric;
}
declare type Fields$DataIntegrationRecordPurchasePermission = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    UserId: string;
    ExternalObject: string | null;
    UserRecordPurchaseLimit: number | null;
};
declare type ParentReferences$DataIntegrationRecordPurchasePermission = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    User: SObjectDefinition$User;
};
declare type ChildRelationships$DataIntegrationRecordPurchasePermission = {};
interface SObjectDefinition$DataIntegrationRecordPurchasePermission extends SObjectDefinition<'DataIntegrationRecordPurchasePermission'> {
    Name: 'DataIntegrationRecordPurchasePermission';
    Fields: Fields$DataIntegrationRecordPurchasePermission;
    ParentReferences: ParentReferences$DataIntegrationRecordPurchasePermission;
    ChildRelationships: ChildRelationships$DataIntegrationRecordPurchasePermission;
}
declare type Fields$DataStatistics = {
    Id: string;
    ExternalId: string | null;
    StatType: string | null;
    UserId: string | null;
    Type: string | null;
    StatValue: number | null;
};
declare type ParentReferences$DataStatistics = {
    User: SObjectDefinition$User | null;
};
declare type ChildRelationships$DataStatistics = {};
interface SObjectDefinition$DataStatistics extends SObjectDefinition<'DataStatistics'> {
    Name: 'DataStatistics';
    Fields: Fields$DataStatistics;
    ParentReferences: ParentReferences$DataStatistics;
    ChildRelationships: ChildRelationships$DataStatistics;
}
declare type Fields$DataType = {
    Id: string;
    DurableId: string | null;
    DeveloperName: string | null;
    IsComplex: boolean;
    ContextServiceDataTypeId: string | null;
    ContextWsdlDataTypeId: string | null;
};
declare type ParentReferences$DataType = {};
declare type ChildRelationships$DataType = {};
interface SObjectDefinition$DataType extends SObjectDefinition<'DataType'> {
    Name: 'DataType';
    Fields: Fields$DataType;
    ParentReferences: ParentReferences$DataType;
    ChildRelationships: ChildRelationships$DataType;
}
declare type Fields$DatacloudAddress = {
    Id: string;
    ExternalId: string | null;
    AddressLine1: string | null;
    AddressLine2: string | null;
    City: string | null;
    State: string | null;
    Country: string | null;
    PostalCode: string | null;
    Latitude: string | null;
    Longitude: string | null;
    GeoAccuracyCode: string | null;
    GeoAccuracyNum: string | null;
};
declare type ParentReferences$DatacloudAddress = {};
declare type ChildRelationships$DatacloudAddress = {};
interface SObjectDefinition$DatacloudAddress extends SObjectDefinition<'DatacloudAddress'> {
    Name: 'DatacloudAddress';
    Fields: Fields$DatacloudAddress;
    ParentReferences: ParentReferences$DatacloudAddress;
    ChildRelationships: ChildRelationships$DatacloudAddress;
}
declare type Fields$DatasetExport = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    PublisherType: string;
    MetadataLength: number | null;
    CompressedMetadataLength: number | null;
    Status: string;
    Owner: string | null;
    PublisherInfo: string;
    Metadata: BlobString | null;
};
declare type ParentReferences$DatasetExport = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$DatasetExport = {
    DatasetExportParts: SObjectDefinition$DatasetExportPart;
};
interface SObjectDefinition$DatasetExport extends SObjectDefinition<'DatasetExport'> {
    Name: 'DatasetExport';
    Fields: Fields$DatasetExport;
    ParentReferences: ParentReferences$DatasetExport;
    ChildRelationships: ChildRelationships$DatasetExport;
}
declare type Fields$DatasetExportEvent = {
    ReplayId: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    DataflowInstanceId: string | null;
    DatasetExportId: string | null;
    Owner: string | null;
    Status: string | null;
    Message: string | null;
    PublisherType: string | null;
    PublisherInfo: string | null;
};
declare type ParentReferences$DatasetExportEvent = {
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$DatasetExportEvent = {};
interface SObjectDefinition$DatasetExportEvent extends SObjectDefinition<'DatasetExportEvent'> {
    Name: 'DatasetExportEvent';
    Fields: Fields$DatasetExportEvent;
    ParentReferences: ParentReferences$DatasetExportEvent;
    ChildRelationships: ChildRelationships$DatasetExportEvent;
}
declare type Fields$DatasetExportPart = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    DatasetExportId: string;
    DataFileLength: number;
    CompressedDataFileLength: number;
    PartNumber: number;
    Owner: string;
    DataFile: BlobString;
};
declare type ParentReferences$DatasetExportPart = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    DatasetExport: SObjectDefinition$DatasetExport;
};
declare type ChildRelationships$DatasetExportPart = {};
interface SObjectDefinition$DatasetExportPart extends SObjectDefinition<'DatasetExportPart'> {
    Name: 'DatasetExportPart';
    Fields: Fields$DatasetExportPart;
    ParentReferences: ParentReferences$DatasetExportPart;
    ChildRelationships: ChildRelationships$DatasetExportPart;
}
declare type Fields$DeclinedEventRelation = {
    Id: string;
    RelationId: string | null;
    EventId: string | null;
    RespondedDate: DateString | null;
    Response: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
    Type: string | null;
};
declare type ParentReferences$DeclinedEventRelation = {
    Relation: SObjectDefinition$Name | null;
    Event: SObjectDefinition$Event | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$DeclinedEventRelation = {};
interface SObjectDefinition$DeclinedEventRelation extends SObjectDefinition<'DeclinedEventRelation'> {
    Name: 'DeclinedEventRelation';
    Fields: Fields$DeclinedEventRelation;
    ParentReferences: ParentReferences$DeclinedEventRelation;
    ChildRelationships: ChildRelationships$DeclinedEventRelation;
}
declare type Fields$Document = {
    Id: string;
    FolderId: string;
    IsDeleted: boolean;
    Name: string;
    DeveloperName: string;
    NamespacePrefix: string | null;
    ContentType: string | null;
    Type: string | null;
    IsPublic: boolean;
    BodyLength: number;
    Body: BlobString | null;
    Url: string | null;
    Description: string | null;
    Keywords: string | null;
    IsInternalUseOnly: boolean;
    AuthorId: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsBodySearchable: boolean;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
};
declare type ParentReferences$Document = {
    Folder: SObjectDefinition$Name;
    Author: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Document = {};
interface SObjectDefinition$Document extends SObjectDefinition<'Document'> {
    Name: 'Document';
    Fields: Fields$Document;
    ParentReferences: ParentReferences$Document;
    ChildRelationships: ChildRelationships$Document;
}
declare type Fields$DocumentAttachmentMap = {
    Id: string;
    ParentId: string;
    DocumentId: string;
    DocumentSequence: number;
    CreatedDate: DateString;
    CreatedById: string;
};
declare type ParentReferences$DocumentAttachmentMap = {
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$DocumentAttachmentMap = {};
interface SObjectDefinition$DocumentAttachmentMap extends SObjectDefinition<'DocumentAttachmentMap'> {
    Name: 'DocumentAttachmentMap';
    Fields: Fields$DocumentAttachmentMap;
    ParentReferences: ParentReferences$DocumentAttachmentMap;
    ChildRelationships: ChildRelationships$DocumentAttachmentMap;
}
declare type Fields$Domain = {
    Id: string;
    DomainType: string;
    Domain: string;
    OptionsExternalHttps: boolean;
    CnameTarget: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$Domain = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Domain = {
    DomainSites: SObjectDefinition$DomainSite;
};
interface SObjectDefinition$Domain extends SObjectDefinition<'Domain'> {
    Name: 'Domain';
    Fields: Fields$Domain;
    ParentReferences: ParentReferences$Domain;
    ChildRelationships: ChildRelationships$Domain;
}
declare type Fields$DomainSite = {
    Id: string;
    DomainId: string;
    SiteId: string;
    PathPrefix: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$DomainSite = {
    Domain: SObjectDefinition$Domain;
    Site: SObjectDefinition$Site;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$DomainSite = {};
interface SObjectDefinition$DomainSite extends SObjectDefinition<'DomainSite'> {
    Name: 'DomainSite';
    Fields: Fields$DomainSite;
    ParentReferences: ParentReferences$DomainSite;
    ChildRelationships: ChildRelationships$DomainSite;
}
declare type Fields$DuplicateRecordItem = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    DuplicateRecordSetId: string;
    RecordId: string;
};
declare type ParentReferences$DuplicateRecordItem = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    DuplicateRecordSet: SObjectDefinition$DuplicateRecordSet;
    Record: SObjectDefinition$Name;
};
declare type ChildRelationships$DuplicateRecordItem = {
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
};
interface SObjectDefinition$DuplicateRecordItem extends SObjectDefinition<'DuplicateRecordItem'> {
    Name: 'DuplicateRecordItem';
    Fields: Fields$DuplicateRecordItem;
    ParentReferences: ParentReferences$DuplicateRecordItem;
    ChildRelationships: ChildRelationships$DuplicateRecordItem;
}
declare type Fields$DuplicateRecordSet = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    DuplicateRuleId: string | null;
    RecordCount: number | null;
};
declare type ParentReferences$DuplicateRecordSet = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    DuplicateRule: SObjectDefinition$DuplicateRule | null;
};
declare type ChildRelationships$DuplicateRecordSet = {
    DuplicateRecordItems: SObjectDefinition$DuplicateRecordItem;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
};
interface SObjectDefinition$DuplicateRecordSet extends SObjectDefinition<'DuplicateRecordSet'> {
    Name: 'DuplicateRecordSet';
    Fields: Fields$DuplicateRecordSet;
    ParentReferences: ParentReferences$DuplicateRecordSet;
    ChildRelationships: ChildRelationships$DuplicateRecordSet;
}
declare type Fields$DuplicateRule = {
    Id: string;
    IsDeleted: boolean;
    SobjectType: string;
    DeveloperName: string;
    Language: string;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsActive: boolean;
    SobjectSubtype: string | null;
    LastViewedDate: DateString | null;
};
declare type ParentReferences$DuplicateRule = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$DuplicateRule = {
    DuplicateRecordSets: SObjectDefinition$DuplicateRecordSet;
};
interface SObjectDefinition$DuplicateRule extends SObjectDefinition<'DuplicateRule'> {
    Name: 'DuplicateRule';
    Fields: Fields$DuplicateRule;
    ParentReferences: ParentReferences$DuplicateRule;
    ChildRelationships: ChildRelationships$DuplicateRule;
}
declare type Fields$EmailCapture = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsActive: boolean;
    ToPattern: string;
    FromPattern: string | null;
    Sender: string | null;
    Recipient: string | null;
    CaptureDate: DateString | null;
    RawMessageLength: number | null;
    RawMessage: BlobString | null;
};
declare type ParentReferences$EmailCapture = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$EmailCapture = {};
interface SObjectDefinition$EmailCapture extends SObjectDefinition<'EmailCapture'> {
    Name: 'EmailCapture';
    Fields: Fields$EmailCapture;
    ParentReferences: ParentReferences$EmailCapture;
    ChildRelationships: ChildRelationships$EmailCapture;
}
declare type Fields$EmailDomainFilter = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    PriorityNumber: number | null;
    EmailRelayId: string;
    ToDomain: string | null;
    FromDomain: string | null;
    IsActive: boolean;
};
declare type ParentReferences$EmailDomainFilter = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    EmailRelay: SObjectDefinition$EmailRelay;
};
declare type ChildRelationships$EmailDomainFilter = {};
interface SObjectDefinition$EmailDomainFilter extends SObjectDefinition<'EmailDomainFilter'> {
    Name: 'EmailDomainFilter';
    Fields: Fields$EmailDomainFilter;
    ParentReferences: ParentReferences$EmailDomainFilter;
    ChildRelationships: ChildRelationships$EmailDomainFilter;
}
declare type Fields$EmailDomainKey = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Selector: string;
    Domain: string;
    DomainMatch: string;
    IsActive: boolean;
    PublicKey: string | null;
};
declare type ParentReferences$EmailDomainKey = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$EmailDomainKey = {};
interface SObjectDefinition$EmailDomainKey extends SObjectDefinition<'EmailDomainKey'> {
    Name: 'EmailDomainKey';
    Fields: Fields$EmailDomainKey;
    ParentReferences: ParentReferences$EmailDomainKey;
    ChildRelationships: ChildRelationships$EmailDomainKey;
}
declare type Fields$EmailMessage = {
    Id: string;
    ParentId: string | null;
    ActivityId: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    TextBody: string | null;
    HtmlBody: string | null;
    Headers: string | null;
    Subject: string | null;
    FromName: string | null;
    FromAddress: string | null;
    ValidatedFromAddress: string | null;
    ToAddress: string | null;
    CcAddress: string | null;
    BccAddress: string | null;
    Incoming: boolean;
    HasAttachment: boolean;
    Status: string;
    MessageDate: DateString | null;
    IsDeleted: boolean;
    ReplyToEmailMessageId: string | null;
    IsPrivateDraft: boolean;
    IsExternallyVisible: boolean;
    MessageIdentifier: string | null;
    ThreadIdentifier: string | null;
    IsClientManaged: boolean;
    RelatedToId: string | null;
};
declare type ParentReferences$EmailMessage = {
    Parent: SObjectDefinition$Case | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ReplyToEmailMessage: SObjectDefinition$EmailMessage | null;
    RelatedTo: SObjectDefinition$Name | null;
};
declare type ChildRelationships$EmailMessage = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    EmailMessageRelations: SObjectDefinition$EmailMessageRelation;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
};
interface SObjectDefinition$EmailMessage extends SObjectDefinition<'EmailMessage'> {
    Name: 'EmailMessage';
    Fields: Fields$EmailMessage;
    ParentReferences: ParentReferences$EmailMessage;
    ChildRelationships: ChildRelationships$EmailMessage;
}
declare type Fields$EmailMessageRelation = {
    Id: string;
    EmailMessageId: string;
    RelationId: string | null;
    RelationType: string;
    RelationAddress: string | null;
    RelationObjectType: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
};
declare type ParentReferences$EmailMessageRelation = {
    EmailMessage: SObjectDefinition$EmailMessage;
    Relation: SObjectDefinition$Name | null;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$EmailMessageRelation = {};
interface SObjectDefinition$EmailMessageRelation extends SObjectDefinition<'EmailMessageRelation'> {
    Name: 'EmailMessageRelation';
    Fields: Fields$EmailMessageRelation;
    ParentReferences: ParentReferences$EmailMessageRelation;
    ChildRelationships: ChildRelationships$EmailMessageRelation;
}
declare type Fields$EmailRelay = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Host: string;
    Port: string;
    TlsSetting: string;
    IsRequireAuth: boolean;
    Username: string | null;
    Password: string | null;
};
declare type ParentReferences$EmailRelay = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$EmailRelay = {
    Filters: SObjectDefinition$EmailDomainFilter;
};
interface SObjectDefinition$EmailRelay extends SObjectDefinition<'EmailRelay'> {
    Name: 'EmailRelay';
    Fields: Fields$EmailRelay;
    ParentReferences: ParentReferences$EmailRelay;
    ChildRelationships: ChildRelationships$EmailRelay;
}
declare type Fields$EmailServicesAddress = {
    Id: string;
    IsActive: boolean;
    LocalPart: string;
    EmailDomainName: string | null;
    AuthorizedSenders: string | null;
    RunAsUserId: string;
    FunctionId: string;
    DeveloperName: string;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$EmailServicesAddress = {
    Function: SObjectDefinition$EmailServicesFunction;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$EmailServicesAddress = {};
interface SObjectDefinition$EmailServicesAddress extends SObjectDefinition<'EmailServicesAddress'> {
    Name: 'EmailServicesAddress';
    Fields: Fields$EmailServicesAddress;
    ParentReferences: ParentReferences$EmailServicesAddress;
    ChildRelationships: ChildRelationships$EmailServicesAddress;
}
declare type Fields$EmailServicesFunction = {
    Id: string;
    IsActive: boolean;
    FunctionName: string;
    AuthorizedSenders: string | null;
    IsAuthenticationRequired: boolean;
    IsTlsRequired: boolean;
    AttachmentOption: string;
    ApexClassId: string | null;
    OverLimitAction: string | null;
    FunctionInactiveAction: string | null;
    AddressInactiveAction: string | null;
    AuthenticationFailureAction: string | null;
    AuthorizationFailureAction: string | null;
    IsErrorRoutingEnabled: boolean;
    ErrorRoutingAddress: string | null;
    IsTextAttachmentsAsBinary: boolean;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$EmailServicesFunction = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$EmailServicesFunction = {
    Addresses: SObjectDefinition$EmailServicesAddress;
};
interface SObjectDefinition$EmailServicesFunction extends SObjectDefinition<'EmailServicesFunction'> {
    Name: 'EmailServicesFunction';
    Fields: Fields$EmailServicesFunction;
    ParentReferences: ParentReferences$EmailServicesFunction;
    ChildRelationships: ChildRelationships$EmailServicesFunction;
}
declare type Fields$EmailStatus = {
    Id: string;
    TaskId: string;
    WhoId: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    TimesOpened: number;
    FirstOpenDate: DateString | null;
    LastOpenDate: DateString | null;
    EmailTemplateName: string | null;
};
declare type ParentReferences$EmailStatus = {
    Task: SObjectDefinition$Task;
    Who: SObjectDefinition$Name | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$EmailStatus = {};
interface SObjectDefinition$EmailStatus extends SObjectDefinition<'EmailStatus'> {
    Name: 'EmailStatus';
    Fields: Fields$EmailStatus;
    ParentReferences: ParentReferences$EmailStatus;
    ChildRelationships: ChildRelationships$EmailStatus;
}
declare type Fields$EmailTemplate = {
    Id: string;
    Name: string;
    DeveloperName: string;
    NamespacePrefix: string | null;
    OwnerId: string;
    FolderId: string;
    BrandTemplateId: string | null;
    TemplateStyle: string;
    IsActive: boolean;
    TemplateType: string;
    Encoding: string | null;
    Description: string | null;
    Subject: string | null;
    HtmlValue: string | null;
    Body: string | null;
    TimesUsed: number | null;
    LastUsedDate: DateString | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ApiVersion: number | null;
    Markup: string | null;
    UiType: string | null;
    RelatedEntityType: string | null;
};
declare type ParentReferences$EmailTemplate = {
    Owner: SObjectDefinition$User;
    Folder: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$EmailTemplate = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
};
interface SObjectDefinition$EmailTemplate extends SObjectDefinition<'EmailTemplate'> {
    Name: 'EmailTemplate';
    Fields: Fields$EmailTemplate;
    ParentReferences: ParentReferences$EmailTemplate;
    ChildRelationships: ChildRelationships$EmailTemplate;
}
declare type Fields$EmbeddedServiceDetail = {
    Id: string;
    DurableId: string | null;
    Site: string | null;
    PrimaryColor: string | null;
    SecondaryColor: string | null;
    ContrastPrimaryColor: string | null;
    ContrastInvertedColor: string | null;
    NavBarColor: string | null;
    Font: string | null;
    IsLiveAgentEnabled: boolean;
    IsFieldServiceEnabled: boolean;
    Width: number | null;
    Height: number | null;
    IsPrechatEnabled: boolean;
    CustomPrechatComponent: string | null;
    AvatarImg: string | null;
    SmallCompanyLogoImg: string | null;
    PrechatBackgroundImg: string | null;
    WaitingStateBackgroundImg: string | null;
    HeaderBackgroundImg: string | null;
    FontSize: string | null;
    OfflineCaseBackgroundImg: string | null;
    IsOfflineCaseEnabled: boolean;
    IsQueuePositionEnabled: boolean;
    ShouldShowNewAppointment: boolean;
    ShouldShowExistingAppointment: boolean;
    FlowDeveloperName: string | null;
    ModifyApptBookingFlowName: string | null;
    CancelApptBookingFlowName: string | null;
    FieldServiceHomeImg: string | null;
    FieldServiceLogoImg: string | null;
    FieldServiceConfirmCardImg: string | null;
    ShouldHideAuthDialog: boolean;
    CustomMinimizedComponent: string | null;
};
declare type ParentReferences$EmbeddedServiceDetail = {};
declare type ChildRelationships$EmbeddedServiceDetail = {};
interface SObjectDefinition$EmbeddedServiceDetail extends SObjectDefinition<'EmbeddedServiceDetail'> {
    Name: 'EmbeddedServiceDetail';
    Fields: Fields$EmbeddedServiceDetail;
    ParentReferences: ParentReferences$EmbeddedServiceDetail;
    ChildRelationships: ChildRelationships$EmbeddedServiceDetail;
}
declare type Fields$Entitlement = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    AccountId: string;
    Type: string | null;
    ServiceContractId: string | null;
    ContractLineItemId: string | null;
    AssetId: string | null;
    StartDate: DateString | null;
    EndDate: DateString | null;
    SlaProcessId: string | null;
    BusinessHoursId: string | null;
    IsPerIncident: boolean;
    CasesPerEntitlement: number | null;
    RemainingCases: number | null;
    Status: string | null;
};
declare type ParentReferences$Entitlement = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Account: SObjectDefinition$Account;
    ServiceContract: SObjectDefinition$ServiceContract | null;
    ContractLineItem: SObjectDefinition$ContractLineItem | null;
    Asset: SObjectDefinition$Asset | null;
    SlaProcess: SObjectDefinition$SlaProcess | null;
    BusinessHours: SObjectDefinition$BusinessHours | null;
};
declare type ChildRelationships$Entitlement = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    Cases: SObjectDefinition$Case;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    Emails: SObjectDefinition$EmailMessage;
    EntitlementContacts: SObjectDefinition$EntitlementContact;
    Feeds: SObjectDefinition$EntitlementFeed;
    Histories: SObjectDefinition$EntitlementHistory;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    OpenActivities: SObjectDefinition$OpenActivity;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    Tasks: SObjectDefinition$Task;
    WorkOrders: SObjectDefinition$WorkOrder;
};
interface SObjectDefinition$Entitlement extends SObjectDefinition<'Entitlement'> {
    Name: 'Entitlement';
    Fields: Fields$Entitlement;
    ParentReferences: ParentReferences$Entitlement;
    ChildRelationships: ChildRelationships$Entitlement;
}
declare type Fields$EntitlementChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    Name: string | null;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    AccountId: string | null;
    Type: string | null;
    ServiceContractId: string | null;
    ContractLineItemId: string | null;
    AssetId: string | null;
    StartDate: DateString | null;
    EndDate: DateString | null;
    SlaProcessId: string | null;
    BusinessHoursId: string | null;
    IsPerIncident: boolean;
    CasesPerEntitlement: number | null;
    RemainingCases: number | null;
};
declare type ParentReferences$EntitlementChangeEvent = {};
declare type ChildRelationships$EntitlementChangeEvent = {};
interface SObjectDefinition$EntitlementChangeEvent extends SObjectDefinition<'EntitlementChangeEvent'> {
    Name: 'EntitlementChangeEvent';
    Fields: Fields$EntitlementChangeEvent;
    ParentReferences: ParentReferences$EntitlementChangeEvent;
    ChildRelationships: ChildRelationships$EntitlementChangeEvent;
}
declare type Fields$EntitlementContact = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    EntitlementId: string;
    ContactId: string;
};
declare type ParentReferences$EntitlementContact = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Entitlement: SObjectDefinition$Entitlement;
    Contact: SObjectDefinition$Contact;
};
declare type ChildRelationships$EntitlementContact = {};
interface SObjectDefinition$EntitlementContact extends SObjectDefinition<'EntitlementContact'> {
    Name: 'EntitlementContact';
    Fields: Fields$EntitlementContact;
    ParentReferences: ParentReferences$EntitlementContact;
    ChildRelationships: ChildRelationships$EntitlementContact;
}
declare type Fields$EntitlementFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$EntitlementFeed = {
    Parent: SObjectDefinition$Entitlement;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$EntitlementFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$EntitlementFeed extends SObjectDefinition<'EntitlementFeed'> {
    Name: 'EntitlementFeed';
    Fields: Fields$EntitlementFeed;
    ParentReferences: ParentReferences$EntitlementFeed;
    ChildRelationships: ChildRelationships$EntitlementFeed;
}
declare type Fields$EntitlementHistory = {
    Id: string;
    IsDeleted: boolean;
    EntitlementId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$EntitlementHistory = {
    Entitlement: SObjectDefinition$Entitlement;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$EntitlementHistory = {};
interface SObjectDefinition$EntitlementHistory extends SObjectDefinition<'EntitlementHistory'> {
    Name: 'EntitlementHistory';
    Fields: Fields$EntitlementHistory;
    ParentReferences: ParentReferences$EntitlementHistory;
    ChildRelationships: ChildRelationships$EntitlementHistory;
}
declare type Fields$EntitlementTemplate = {
    Id: string;
    Name: string;
    BusinessHoursId: string | null;
    Type: string | null;
    SlaProcessId: string | null;
    IsPerIncident: boolean;
    CasesPerEntitlement: number | null;
    Term: number | null;
    SystemModstamp: DateString;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    NamespacePrefix: string | null;
};
declare type ParentReferences$EntitlementTemplate = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$EntitlementTemplate = {};
interface SObjectDefinition$EntitlementTemplate extends SObjectDefinition<'EntitlementTemplate'> {
    Name: 'EntitlementTemplate';
    Fields: Fields$EntitlementTemplate;
    ParentReferences: ParentReferences$EntitlementTemplate;
    ChildRelationships: ChildRelationships$EntitlementTemplate;
}
declare type Fields$EntityDefinition = {
    Id: string;
    DurableId: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    QualifiedApiName: string;
    NamespacePrefix: string | null;
    DeveloperName: string | null;
    MasterLabel: string;
    Label: string | null;
    PluralLabel: string | null;
    DefaultCompactLayoutId: string | null;
    IsCustomizable: boolean;
    IsApexTriggerable: boolean;
    IsWorkflowEnabled: boolean;
    IsProcessEnabled: boolean;
    IsCompactLayoutable: boolean;
    KeyPrefix: string | null;
    IsCustomSetting: boolean;
    IsDeprecatedAndHidden: boolean;
    IsReplicateable: boolean;
    IsRetrieveable: boolean;
    IsSearchLayoutable: boolean;
    IsSearchable: boolean;
    IsTriggerable: boolean;
    IsIdEnabled: boolean;
    IsEverCreatable: boolean;
    IsEverUpdatable: boolean;
    IsEverDeletable: boolean;
    IsFeedEnabled: boolean;
    IsQueryable: boolean;
    IsMruEnabled: boolean;
    DetailUrl: string | null;
    EditUrl: string | null;
    NewUrl: string | null;
    EditDefinitionUrl: string | null;
    HelpSettingPageName: string | null;
    HelpSettingPageUrl: string | null;
    RunningUserEntityAccessId: string | null;
    PublisherId: string | null;
    IsLayoutable: boolean;
    RecordTypesSupported: any | null;
    InternalSharingModel: string;
    ExternalSharingModel: string;
    HasSubtypes: boolean;
    IsSubtype: boolean;
    IsAutoActivityCaptureEnabled: boolean;
    DataStewardId: string | null;
};
declare type ParentReferences$EntityDefinition = {
    LastModifiedBy: SObjectDefinition$User;
    DataSteward: SObjectDefinition$Name | null;
};
declare type ChildRelationships$EntityDefinition = {
    Particles: SObjectDefinition$EntityParticle;
    Fields: SObjectDefinition$FieldDefinition;
    OwnerChangeOptions: SObjectDefinition$OwnerChangeOptionInfo;
    RelationshipDomains: SObjectDefinition$RelationshipDomain;
    ChildRelationships: SObjectDefinition$RelationshipInfo;
    SearchLayouts: SObjectDefinition$SearchLayout;
};
interface SObjectDefinition$EntityDefinition extends SObjectDefinition<'EntityDefinition'> {
    Name: 'EntityDefinition';
    Fields: Fields$EntityDefinition;
    ParentReferences: ParentReferences$EntityDefinition;
    ChildRelationships: ChildRelationships$EntityDefinition;
}
declare type Fields$EntityMilestone = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ParentEntityId: string;
    StartDate: DateString | null;
    TargetDate: DateString | null;
    CompletionDate: DateString | null;
    SlaProcessId: string | null;
    MilestoneTypeId: string | null;
    IsCompleted: boolean;
    IsViolated: boolean;
    TargetResponseInMins: number | null;
    TargetResponseInHrs: number | null;
    TargetResponseInDays: number | null;
    TimeRemainingInMins: string | null;
    TimeRemainingInHrs: string | null;
    TimeRemainingInDays: number | null;
    ElapsedTimeInMins: number | null;
    ElapsedTimeInHrs: number | null;
    ElapsedTimeInDays: number | null;
    TimeSinceTargetInMins: string | null;
    TimeSinceTargetInHrs: string | null;
    TimeSinceTargetInDays: number | null;
    BusinessHoursId: string | null;
    StoppedTimeInMins: number | null;
    StoppedTimeInHrs: number | null;
    StoppedTimeInDays: number | null;
    ActualElapsedTimeInMins: number | null;
    ActualElapsedTimeInHrs: number | null;
    ActualElapsedTimeInDays: number | null;
};
declare type ParentReferences$EntityMilestone = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ParentEntity: SObjectDefinition$WorkOrder;
    SlaProcess: SObjectDefinition$SlaProcess | null;
    MilestoneType: SObjectDefinition$MilestoneType | null;
    BusinessHours: SObjectDefinition$BusinessHours | null;
};
declare type ChildRelationships$EntityMilestone = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    Feeds: SObjectDefinition$EntityMilestoneFeed;
    Histories: SObjectDefinition$EntityMilestoneHistory;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
};
interface SObjectDefinition$EntityMilestone extends SObjectDefinition<'EntityMilestone'> {
    Name: 'EntityMilestone';
    Fields: Fields$EntityMilestone;
    ParentReferences: ParentReferences$EntityMilestone;
    ChildRelationships: ChildRelationships$EntityMilestone;
}
declare type Fields$EntityMilestoneFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$EntityMilestoneFeed = {
    Parent: SObjectDefinition$EntityMilestone;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$EntityMilestoneFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$EntityMilestoneFeed extends SObjectDefinition<'EntityMilestoneFeed'> {
    Name: 'EntityMilestoneFeed';
    Fields: Fields$EntityMilestoneFeed;
    ParentReferences: ParentReferences$EntityMilestoneFeed;
    ChildRelationships: ChildRelationships$EntityMilestoneFeed;
}
declare type Fields$EntityMilestoneHistory = {
    Id: string;
    IsDeleted: boolean;
    EntityMilestoneId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$EntityMilestoneHistory = {
    EntityMilestone: SObjectDefinition$EntityMilestone;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$EntityMilestoneHistory = {};
interface SObjectDefinition$EntityMilestoneHistory extends SObjectDefinition<'EntityMilestoneHistory'> {
    Name: 'EntityMilestoneHistory';
    Fields: Fields$EntityMilestoneHistory;
    ParentReferences: ParentReferences$EntityMilestoneHistory;
    ChildRelationships: ChildRelationships$EntityMilestoneHistory;
}
declare type Fields$EntityParticle = {
    Id: string;
    DurableId: string | null;
    QualifiedApiName: string;
    EntityDefinitionId: string | null;
    FieldDefinitionId: string | null;
    NamespacePrefix: string | null;
    DeveloperName: string | null;
    MasterLabel: string;
    Label: string | null;
    Length: number | null;
    DataType: string | null;
    ServiceDataTypeId: string | null;
    ValueTypeId: string | null;
    ExtraTypeInfo: string | null;
    IsAutonumber: boolean;
    ByteLength: number | null;
    IsCaseSensitive: boolean;
    IsUnique: boolean;
    IsCreatable: boolean;
    IsUpdatable: boolean;
    IsDefaultedOnCreate: boolean;
    IsWriteRequiresMasterRead: boolean;
    IsCalculated: boolean;
    IsHighScaleNumber: boolean;
    IsHtmlFormatted: boolean;
    IsNameField: boolean;
    IsNillable: boolean;
    IsPermissionable: boolean;
    IsEncrypted: boolean;
    Digits: number | null;
    InlineHelpText: string | null;
    RelationshipName: string | null;
    ReferenceTargetField: string | null;
    Name: string | null;
    Mask: string | null;
    MaskType: string | null;
    IsWorkflowFilterable: boolean;
    IsCompactLayoutable: boolean;
    Precision: number | null;
    Scale: number | null;
    IsFieldHistoryTracked: boolean;
    IsApiFilterable: boolean;
    IsApiSortable: boolean;
    IsApiGroupable: boolean;
    IsListVisible: boolean;
    IsLayoutable: boolean;
    IsDependentPicklist: boolean;
    IsDeprecatedAndHidden: boolean;
    IsDisplayLocationInDecimal: boolean;
    DefaultValueFormula: string | null;
    IsIdLookup: boolean;
    IsNamePointing: boolean;
    RelationshipOrder: number | null;
    ReferenceTo: any | null;
    IsComponent: boolean;
    IsCompound: boolean;
};
declare type ParentReferences$EntityParticle = {};
declare type ChildRelationships$EntityParticle = {
    PicklistValues: SObjectDefinition$PicklistValueInfo;
};
interface SObjectDefinition$EntityParticle extends SObjectDefinition<'EntityParticle'> {
    Name: 'EntityParticle';
    Fields: Fields$EntityParticle;
    ParentReferences: ParentReferences$EntityParticle;
    ChildRelationships: ChildRelationships$EntityParticle;
}
declare type Fields$EntitySubscription = {
    Id: string;
    ParentId: string;
    SubscriberId: string;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
};
declare type ParentReferences$EntitySubscription = {
    Parent: SObjectDefinition$Name;
    Subscriber: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$EntitySubscription = {};
interface SObjectDefinition$EntitySubscription extends SObjectDefinition<'EntitySubscription'> {
    Name: 'EntitySubscription';
    Fields: Fields$EntitySubscription;
    ParentReferences: ParentReferences$EntitySubscription;
    ChildRelationships: ChildRelationships$EntitySubscription;
}
declare type Fields$Event = {
    Id: string;
    WhoId: string | null;
    WhatId: string | null;
    Subject: string | null;
    Location: string | null;
    IsAllDayEvent: boolean;
    ActivityDateTime: DateString | null;
    ActivityDate: DateString | null;
    DurationInMinutes: number | null;
    StartDateTime: DateString | null;
    EndDateTime: DateString | null;
    Description: string | null;
    AccountId: string | null;
    OwnerId: string;
    IsPrivate: boolean;
    ShowAs: string | null;
    IsDeleted: boolean;
    IsChild: boolean;
    IsGroupEvent: boolean;
    GroupEventType: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsArchived: boolean;
    RecurrenceActivityId: string | null;
    IsRecurrence: boolean;
    RecurrenceStartDateTime: DateString | null;
    RecurrenceEndDateOnly: DateString | null;
    RecurrenceTimeZoneSidKey: string | null;
    RecurrenceType: string | null;
    RecurrenceInterval: number | null;
    RecurrenceDayOfWeekMask: number | null;
    RecurrenceDayOfMonth: number | null;
    RecurrenceInstance: string | null;
    RecurrenceMonthOfYear: string | null;
    ReminderDateTime: DateString | null;
    IsReminderSet: boolean;
    EventSubtype: string | null;
};
declare type ParentReferences$Event = {
    Who: SObjectDefinition$Name | null;
    What: SObjectDefinition$Name | null;
    Account: SObjectDefinition$Account | null;
    Owner: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Event = {
    AcceptedEventRelations: SObjectDefinition$AcceptedEventRelation;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    DeclinedEventRelations: SObjectDefinition$DeclinedEventRelation;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    RecurringEvents: SObjectDefinition$Event;
    Feeds: SObjectDefinition$EventFeed;
    EventRelations: SObjectDefinition$EventRelation;
    TopicAssignments: SObjectDefinition$TopicAssignment;
    UndecidedEventRelations: SObjectDefinition$UndecidedEventRelation;
};
interface SObjectDefinition$Event extends SObjectDefinition<'Event'> {
    Name: 'Event';
    Fields: Fields$Event;
    ParentReferences: ParentReferences$Event;
    ChildRelationships: ChildRelationships$Event;
}
declare type Fields$EventBusSubscriber = {
    Id: string;
    ExternalId: string | null;
    Name: string | null;
    Type: string | null;
    Topic: string | null;
    Position: number | null;
    Tip: number | null;
    Retries: number | null;
    LastError: string | null;
    Status: string | null;
};
declare type ParentReferences$EventBusSubscriber = {};
declare type ChildRelationships$EventBusSubscriber = {};
interface SObjectDefinition$EventBusSubscriber extends SObjectDefinition<'EventBusSubscriber'> {
    Name: 'EventBusSubscriber';
    Fields: Fields$EventBusSubscriber;
    ParentReferences: ParentReferences$EventBusSubscriber;
    ChildRelationships: ChildRelationships$EventBusSubscriber;
}
declare type Fields$EventChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    WhoId: string | null;
    WhatId: string | null;
    Subject: string | null;
    Location: string | null;
    IsAllDayEvent: boolean;
    ActivityDateTime: DateString | null;
    ActivityDate: DateString | null;
    DurationInMinutes: number | null;
    Description: string | null;
    AccountId: string | null;
    OwnerId: string | null;
    IsPrivate: boolean;
    ShowAs: string | null;
    IsChild: boolean;
    IsGroupEvent: boolean;
    GroupEventType: string | null;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    RecurrenceActivityId: string | null;
    IsRecurrence: boolean;
    RecurrenceStartDateTime: DateString | null;
    RecurrenceEndDateOnly: DateString | null;
    RecurrenceTimeZoneSidKey: string | null;
    RecurrenceType: string | null;
    RecurrenceInterval: number | null;
    RecurrenceDayOfWeekMask: number | null;
    RecurrenceDayOfMonth: number | null;
    RecurrenceInstance: string | null;
    RecurrenceMonthOfYear: string | null;
    ReminderDateTime: DateString | null;
    IsReminderSet: boolean;
};
declare type ParentReferences$EventChangeEvent = {};
declare type ChildRelationships$EventChangeEvent = {};
interface SObjectDefinition$EventChangeEvent extends SObjectDefinition<'EventChangeEvent'> {
    Name: 'EventChangeEvent';
    Fields: Fields$EventChangeEvent;
    ParentReferences: ParentReferences$EventChangeEvent;
    ChildRelationships: ChildRelationships$EventChangeEvent;
}
declare type Fields$EventFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$EventFeed = {
    Parent: SObjectDefinition$Event;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$EventFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$EventFeed extends SObjectDefinition<'EventFeed'> {
    Name: 'EventFeed';
    Fields: Fields$EventFeed;
    ParentReferences: ParentReferences$EventFeed;
    ChildRelationships: ChildRelationships$EventFeed;
}
declare type Fields$EventLogFile = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    EventType: string;
    LogDate: DateString;
    LogFileLength: number;
    LogFileContentType: string;
    ApiVersion: number;
    LogFileFieldNames: string | null;
    LogFileFieldTypes: string | null;
    LogFile: BlobString;
};
declare type ParentReferences$EventLogFile = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$EventLogFile = {};
interface SObjectDefinition$EventLogFile extends SObjectDefinition<'EventLogFile'> {
    Name: 'EventLogFile';
    Fields: Fields$EventLogFile;
    ParentReferences: ParentReferences$EventLogFile;
    ChildRelationships: ChildRelationships$EventLogFile;
}
declare type Fields$EventRelation = {
    Id: string;
    RelationId: string;
    EventId: string;
    Status: string | null;
    RespondedDate: DateString | null;
    Response: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
};
declare type ParentReferences$EventRelation = {
    Relation: SObjectDefinition$Name;
    Event: SObjectDefinition$Event;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$EventRelation = {};
interface SObjectDefinition$EventRelation extends SObjectDefinition<'EventRelation'> {
    Name: 'EventRelation';
    Fields: Fields$EventRelation;
    ParentReferences: ParentReferences$EventRelation;
    ChildRelationships: ChildRelationships$EventRelation;
}
declare type Fields$EventRelationChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    RelationId: string | null;
    EventId: string | null;
    Status: string | null;
    RespondedDate: DateString | null;
    Response: string | null;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
};
declare type ParentReferences$EventRelationChangeEvent = {};
declare type ChildRelationships$EventRelationChangeEvent = {};
interface SObjectDefinition$EventRelationChangeEvent extends SObjectDefinition<'EventRelationChangeEvent'> {
    Name: 'EventRelationChangeEvent';
    Fields: Fields$EventRelationChangeEvent;
    ParentReferences: ParentReferences$EventRelationChangeEvent;
    ChildRelationships: ChildRelationships$EventRelationChangeEvent;
}
declare type Fields$ExternalDataSource = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Type: string;
    Endpoint: string | null;
    Repository: string | null;
    IsWritable: boolean;
    PrincipalType: string;
    Protocol: string;
    AuthProviderId: string | null;
    LargeIconId: string | null;
    SmallIconId: string | null;
    CustomConfiguration: string | null;
};
declare type ParentReferences$ExternalDataSource = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    AuthProvider: SObjectDefinition$AuthProvider | null;
    LargeIcon: SObjectDefinition$StaticResource | null;
    SmallIcon: SObjectDefinition$StaticResource | null;
};
declare type ChildRelationships$ExternalDataSource = {
    CustomHttpHeaders: SObjectDefinition$CustomHttpHeader;
    UserAuths: SObjectDefinition$ExternalDataUserAuth;
    SetupEntityAccessItems: SObjectDefinition$SetupEntityAccess;
};
interface SObjectDefinition$ExternalDataSource extends SObjectDefinition<'ExternalDataSource'> {
    Name: 'ExternalDataSource';
    Fields: Fields$ExternalDataSource;
    ParentReferences: ParentReferences$ExternalDataSource;
    ChildRelationships: ChildRelationships$ExternalDataSource;
}
declare type Fields$ExternalDataUserAuth = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ExternalDataSourceId: string;
    UserId: string | null;
    Protocol: string | null;
    Username: string | null;
    Password: string | null;
    AuthProviderId: string | null;
};
declare type ParentReferences$ExternalDataUserAuth = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ExternalDataSource: SObjectDefinition$Name;
    User: SObjectDefinition$User | null;
    AuthProvider: SObjectDefinition$AuthProvider | null;
};
declare type ChildRelationships$ExternalDataUserAuth = {};
interface SObjectDefinition$ExternalDataUserAuth extends SObjectDefinition<'ExternalDataUserAuth'> {
    Name: 'ExternalDataUserAuth';
    Fields: Fields$ExternalDataUserAuth;
    ParentReferences: ParentReferences$ExternalDataUserAuth;
    ChildRelationships: ChildRelationships$ExternalDataUserAuth;
}
declare type Fields$ExternalSocialAccount = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string;
    MasterLabel: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ExternalAccountId: string;
    Username: string | null;
    Provider: string;
    ProviderUserId: string;
    ExternalPictureURL: string | null;
    IsActive: boolean;
    SocialPropertyId: string | null;
    IsAuthenticated: boolean;
    TopicId: string | null;
    DataSourceId: string | null;
    RuleId: string | null;
    IsDataSourceActive: boolean;
    UniqueName: string | null;
    DefaultResponseAccountId: string | null;
    ProfileUrl: string | null;
    AuthorizedBy: string | null;
    IsCaseCreationEnabled: boolean;
};
declare type ParentReferences$ExternalSocialAccount = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    DefaultResponseAccount: SObjectDefinition$ExternalSocialAccount | null;
};
declare type ChildRelationships$ExternalSocialAccount = {
    SetupEntityAccessItems: SObjectDefinition$SetupEntityAccess;
};
interface SObjectDefinition$ExternalSocialAccount extends SObjectDefinition<'ExternalSocialAccount'> {
    Name: 'ExternalSocialAccount';
    Fields: Fields$ExternalSocialAccount;
    ParentReferences: ParentReferences$ExternalSocialAccount;
    ChildRelationships: ChildRelationships$ExternalSocialAccount;
}
declare type Fields$FeedAttachment = {
    Id: string;
    FeedEntityId: string;
    Type: string;
    RecordId: string | null;
    Title: string | null;
    Value: string | null;
    IsDeleted: boolean;
};
declare type ParentReferences$FeedAttachment = {};
declare type ChildRelationships$FeedAttachment = {};
interface SObjectDefinition$FeedAttachment extends SObjectDefinition<'FeedAttachment'> {
    Name: 'FeedAttachment';
    Fields: Fields$FeedAttachment;
    ParentReferences: ParentReferences$FeedAttachment;
    ChildRelationships: ChildRelationships$FeedAttachment;
}
declare type Fields$FeedComment = {
    Id: string;
    FeedItemId: string;
    ParentId: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    SystemModstamp: DateString;
    Revision: number | null;
    LastEditById: string | null;
    LastEditDate: DateString | null;
    CommentBody: string;
    IsDeleted: boolean;
    InsertedById: string;
    CommentType: string | null;
    RelatedRecordId: string | null;
    IsRichText: boolean;
    IsVerified: boolean;
    HasEntityLinks: boolean;
    Status: string | null;
    ThreadParentId: string | null;
    ThreadLevel: number | null;
    ThreadChildrenCount: number | null;
    ThreadLastUpdatedDate: DateString | null;
};
declare type ParentReferences$FeedComment = {
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User;
    ThreadParent: SObjectDefinition$FeedComment | null;
};
declare type ChildRelationships$FeedComment = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedThreadedComments: SObjectDefinition$FeedComment;
    FeedRevisions: SObjectDefinition$FeedRevision;
};
interface SObjectDefinition$FeedComment extends SObjectDefinition<'FeedComment'> {
    Name: 'FeedComment';
    Fields: Fields$FeedComment;
    ParentReferences: ParentReferences$FeedComment;
    ChildRelationships: ChildRelationships$FeedComment;
}
declare type Fields$FeedItem = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    Revision: number | null;
    LastEditById: string | null;
    LastEditDate: DateString | null;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string;
    BestCommentId: string | null;
    HasContent: boolean;
    HasLink: boolean;
    HasFeedEntity: boolean;
    HasVerifiedComment: boolean;
    IsClosed: boolean;
    Status: string | null;
};
declare type ParentReferences$FeedItem = {
    Parent: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User;
    BestComment: SObjectDefinition$FeedComment | null;
};
declare type ChildRelationships$FeedItem = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedRevisions: SObjectDefinition$FeedRevision;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
    TopicAssignments: SObjectDefinition$TopicAssignment;
    FeedItemThanks: SObjectDefinition$WorkThanks;
};
interface SObjectDefinition$FeedItem extends SObjectDefinition<'FeedItem'> {
    Name: 'FeedItem';
    Fields: Fields$FeedItem;
    ParentReferences: ParentReferences$FeedItem;
    ChildRelationships: ChildRelationships$FeedItem;
}
declare type Fields$FeedLike = {
    Id: string;
    FeedItemId: string | null;
    FeedEntityId: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    InsertedById: string;
};
declare type ParentReferences$FeedLike = {
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User;
};
declare type ChildRelationships$FeedLike = {};
interface SObjectDefinition$FeedLike extends SObjectDefinition<'FeedLike'> {
    Name: 'FeedLike';
    Fields: Fields$FeedLike;
    ParentReferences: ParentReferences$FeedLike;
    ChildRelationships: ChildRelationships$FeedLike;
}
declare type Fields$FeedPollChoice = {
    Id: string;
    FeedItemId: string;
    Position: number;
    ChoiceBody: string;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
};
declare type ParentReferences$FeedPollChoice = {
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$FeedPollChoice = {
    FeedPollVotes: SObjectDefinition$FeedPollVote;
};
interface SObjectDefinition$FeedPollChoice extends SObjectDefinition<'FeedPollChoice'> {
    Name: 'FeedPollChoice';
    Fields: Fields$FeedPollChoice;
    ParentReferences: ParentReferences$FeedPollChoice;
    ChildRelationships: ChildRelationships$FeedPollChoice;
}
declare type Fields$FeedPollVote = {
    Id: string;
    FeedItemId: string;
    ChoiceId: string;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedDate: DateString;
    IsDeleted: boolean;
};
declare type ParentReferences$FeedPollVote = {
    Choice: SObjectDefinition$FeedPollChoice;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$FeedPollVote = {};
interface SObjectDefinition$FeedPollVote extends SObjectDefinition<'FeedPollVote'> {
    Name: 'FeedPollVote';
    Fields: Fields$FeedPollVote;
    ParentReferences: ParentReferences$FeedPollVote;
    ChildRelationships: ChildRelationships$FeedPollVote;
}
declare type Fields$FeedRevision = {
    Id: string;
    CreatedDate: DateString;
    CreatedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
    FeedEntityId: string;
    Revision: number | null;
    Action: string | null;
    EditedAttribute: string | null;
    Value: string | null;
    IsValueRichText: boolean;
};
declare type ParentReferences$FeedRevision = {
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$FeedRevision = {};
interface SObjectDefinition$FeedRevision extends SObjectDefinition<'FeedRevision'> {
    Name: 'FeedRevision';
    Fields: Fields$FeedRevision;
    ParentReferences: ParentReferences$FeedRevision;
    ChildRelationships: ChildRelationships$FeedRevision;
}
declare type Fields$FeedSignal = {
    Id: string;
    FeedItemId: string | null;
    FeedEntityId: string | null;
    SignalValue: number | null;
    SignalType: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    InsertedById: string;
};
declare type ParentReferences$FeedSignal = {
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User;
};
declare type ChildRelationships$FeedSignal = {};
interface SObjectDefinition$FeedSignal extends SObjectDefinition<'FeedSignal'> {
    Name: 'FeedSignal';
    Fields: Fields$FeedSignal;
    ParentReferences: ParentReferences$FeedSignal;
    ChildRelationships: ChildRelationships$FeedSignal;
}
declare type Fields$FeedTrackedChange = {
    Id: string;
    FeedItemId: string;
    FieldName: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$FeedTrackedChange = {};
declare type ChildRelationships$FeedTrackedChange = {};
interface SObjectDefinition$FeedTrackedChange extends SObjectDefinition<'FeedTrackedChange'> {
    Name: 'FeedTrackedChange';
    Fields: Fields$FeedTrackedChange;
    ParentReferences: ParentReferences$FeedTrackedChange;
    ChildRelationships: ChildRelationships$FeedTrackedChange;
}
declare type Fields$FieldDefinition = {
    Id: string;
    DurableId: string | null;
    QualifiedApiName: string;
    EntityDefinitionId: string | null;
    NamespacePrefix: string | null;
    DeveloperName: string | null;
    MasterLabel: string;
    Label: string | null;
    Length: number | null;
    DataType: string | null;
    ServiceDataTypeId: string | null;
    ValueTypeId: string | null;
    ExtraTypeInfo: string | null;
    IsCalculated: boolean;
    IsHighScaleNumber: boolean;
    IsHtmlFormatted: boolean;
    IsNameField: boolean;
    IsNillable: boolean;
    IsWorkflowFilterable: boolean;
    IsCompactLayoutable: boolean;
    Precision: number | null;
    Scale: number | null;
    IsFieldHistoryTracked: boolean;
    IsIndexed: boolean;
    IsApiFilterable: boolean;
    IsApiSortable: boolean;
    IsListFilterable: boolean;
    IsListSortable: boolean;
    IsApiGroupable: boolean;
    IsListVisible: boolean;
    ControllingFieldDefinitionId: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    PublisherId: string | null;
    RunningUserFieldAccessId: string | null;
    RelationshipName: string | null;
    ReferenceTo: any | null;
    ReferenceTargetField: string | null;
    IsCompound: boolean;
    IsSearchPrefilterable: boolean;
    IsPolymorphicForeignKey: boolean;
    BusinessOwnerId: string | null;
    BusinessStatus: string | null;
    SecurityClassification: string | null;
    Description: string | null;
};
declare type ParentReferences$FieldDefinition = {
    LastModifiedBy: SObjectDefinition$User;
    BusinessOwner: SObjectDefinition$Name | null;
};
declare type ChildRelationships$FieldDefinition = {};
interface SObjectDefinition$FieldDefinition extends SObjectDefinition<'FieldDefinition'> {
    Name: 'FieldDefinition';
    Fields: Fields$FieldDefinition;
    ParentReferences: ParentReferences$FieldDefinition;
    ChildRelationships: ChildRelationships$FieldDefinition;
}
declare type Fields$FieldPermissions = {
    Id: string;
    ParentId: string;
    SobjectType: string;
    Field: string;
    PermissionsEdit: boolean;
    PermissionsRead: boolean;
    SystemModstamp: DateString;
};
declare type ParentReferences$FieldPermissions = {
    Parent: SObjectDefinition$PermissionSet;
};
declare type ChildRelationships$FieldPermissions = {};
interface SObjectDefinition$FieldPermissions extends SObjectDefinition<'FieldPermissions'> {
    Name: 'FieldPermissions';
    Fields: Fields$FieldPermissions;
    ParentReferences: ParentReferences$FieldPermissions;
    ChildRelationships: ChildRelationships$FieldPermissions;
}
declare type Fields$FileSearchActivity = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    SearchTerm: string;
    QueryDate: DateString;
    CountQueries: number;
    CountUsers: number;
    AvgNumResults: number;
    Period: string;
    QueryLanguage: string;
    ClickRank: number | null;
};
declare type ParentReferences$FileSearchActivity = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$FileSearchActivity = {};
interface SObjectDefinition$FileSearchActivity extends SObjectDefinition<'FileSearchActivity'> {
    Name: 'FileSearchActivity';
    Fields: Fields$FileSearchActivity;
    ParentReferences: ParentReferences$FileSearchActivity;
    ChildRelationships: ChildRelationships$FileSearchActivity;
}
declare type Fields$FiscalYearSettings = {
    Id: string;
    PeriodId: string | null;
    StartDate: DateString | null;
    EndDate: DateString | null;
    Name: string;
    IsStandardYear: boolean;
    YearType: string | null;
    QuarterLabelScheme: string | null;
    PeriodLabelScheme: string | null;
    WeekLabelScheme: string | null;
    QuarterPrefix: string | null;
    PeriodPrefix: string | null;
    WeekStartDay: number | null;
    Description: string | null;
    SystemModstamp: DateString;
};
declare type ParentReferences$FiscalYearSettings = {};
declare type ChildRelationships$FiscalYearSettings = {
    Periods: SObjectDefinition$Period;
};
interface SObjectDefinition$FiscalYearSettings extends SObjectDefinition<'FiscalYearSettings'> {
    Name: 'FiscalYearSettings';
    Fields: Fields$FiscalYearSettings;
    ParentReferences: ParentReferences$FiscalYearSettings;
    ChildRelationships: ChildRelationships$FiscalYearSettings;
}
declare type Fields$FlexQueueItem = {
    Id: string;
    FlexQueueItemId: string | null;
    JobType: string;
    AsyncApexJobId: string;
    JobPosition: number;
};
declare type ParentReferences$FlexQueueItem = {
    AsyncApexJob: SObjectDefinition$AsyncApexJob;
};
declare type ChildRelationships$FlexQueueItem = {};
interface SObjectDefinition$FlexQueueItem extends SObjectDefinition<'FlexQueueItem'> {
    Name: 'FlexQueueItem';
    Fields: Fields$FlexQueueItem;
    ParentReferences: ParentReferences$FlexQueueItem;
    ChildRelationships: ChildRelationships$FlexQueueItem;
}
declare type Fields$FlowInterview = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    CurrentElement: string | null;
    InterviewLabel: string | null;
    PauseLabel: string | null;
    Guid: string | null;
};
declare type ParentReferences$FlowInterview = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$FlowInterview = {
    RecordRelations: SObjectDefinition$FlowRecordRelation;
    StageRelations: SObjectDefinition$FlowStageRelation;
    RecordActions: SObjectDefinition$RecordAction;
};
interface SObjectDefinition$FlowInterview extends SObjectDefinition<'FlowInterview'> {
    Name: 'FlowInterview';
    Fields: Fields$FlowInterview;
    ParentReferences: ParentReferences$FlowInterview;
    ChildRelationships: ChildRelationships$FlowInterview;
}
declare type Fields$FlowInterviewShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$FlowInterviewShare = {
    Parent: SObjectDefinition$FlowInterview;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$FlowInterviewShare = {};
interface SObjectDefinition$FlowInterviewShare extends SObjectDefinition<'FlowInterviewShare'> {
    Name: 'FlowInterviewShare';
    Fields: Fields$FlowInterviewShare;
    ParentReferences: ParentReferences$FlowInterviewShare;
    ChildRelationships: ChildRelationships$FlowInterviewShare;
}
declare type Fields$FlowRecordRelation = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ParentId: string;
    RelatedRecordId: string;
};
declare type ParentReferences$FlowRecordRelation = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Parent: SObjectDefinition$FlowInterview;
    RelatedRecord: SObjectDefinition$Name;
};
declare type ChildRelationships$FlowRecordRelation = {};
interface SObjectDefinition$FlowRecordRelation extends SObjectDefinition<'FlowRecordRelation'> {
    Name: 'FlowRecordRelation';
    Fields: Fields$FlowRecordRelation;
    ParentReferences: ParentReferences$FlowRecordRelation;
    ChildRelationships: ChildRelationships$FlowRecordRelation;
}
declare type Fields$FlowStageRelation = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ParentId: string;
    StageOrder: number;
    StageType: string | null;
    StageLabel: string | null;
    FlexIndex: string | null;
};
declare type ParentReferences$FlowStageRelation = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Parent: SObjectDefinition$FlowInterview;
};
declare type ChildRelationships$FlowStageRelation = {};
interface SObjectDefinition$FlowStageRelation extends SObjectDefinition<'FlowStageRelation'> {
    Name: 'FlowStageRelation';
    Fields: Fields$FlowStageRelation;
    ParentReferences: ParentReferences$FlowStageRelation;
    ChildRelationships: ChildRelationships$FlowStageRelation;
}
declare type Fields$Folder = {
    Id: string;
    ParentId: string | null;
    Name: string;
    DeveloperName: string | null;
    AccessType: string;
    IsReadonly: boolean;
    Type: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$Folder = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Folder = {
    SubFolders: SObjectDefinition$Folder;
};
interface SObjectDefinition$Folder extends SObjectDefinition<'Folder'> {
    Name: 'Folder';
    Fields: Fields$Folder;
    ParentReferences: ParentReferences$Folder;
    ChildRelationships: ChildRelationships$Folder;
}
declare type Fields$FolderedContentDocument = {
    Id: string;
    IsFolder: boolean;
    ContentDocumentId: string;
    ParentContentFolderId: string | null;
    IsDeleted: boolean;
    Title: string;
    FileType: string | null;
    ContentSize: number | null;
    FileExtension: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$FolderedContentDocument = {
    ContentDocument: SObjectDefinition$ContentDocument;
    ParentContentFolder: SObjectDefinition$ContentFolder | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$FolderedContentDocument = {};
interface SObjectDefinition$FolderedContentDocument extends SObjectDefinition<'FolderedContentDocument'> {
    Name: 'FolderedContentDocument';
    Fields: Fields$FolderedContentDocument;
    ParentReferences: ParentReferences$FolderedContentDocument;
    ChildRelationships: ChildRelationships$FolderedContentDocument;
}
declare type Fields$ForecastShare = {
    Id: string;
    UserRoleId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    CanSubmit: boolean;
    RowCause: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
};
declare type ParentReferences$ForecastShare = {
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ForecastShare = {};
interface SObjectDefinition$ForecastShare extends SObjectDefinition<'ForecastShare'> {
    Name: 'ForecastShare';
    Fields: Fields$ForecastShare;
    ParentReferences: ParentReferences$ForecastShare;
    ChildRelationships: ChildRelationships$ForecastShare;
}
declare type Fields$ForecastingShare = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    UserOrGroupId: string;
    SharedForecastManagerRoleId: string;
};
declare type ParentReferences$ForecastingShare = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    UserOrGroup: SObjectDefinition$User;
    SharedForecastManagerRole: SObjectDefinition$UserRole;
};
declare type ChildRelationships$ForecastingShare = {};
interface SObjectDefinition$ForecastingShare extends SObjectDefinition<'ForecastingShare'> {
    Name: 'ForecastingShare';
    Fields: Fields$ForecastingShare;
    ParentReferences: ParentReferences$ForecastingShare;
    ChildRelationships: ChildRelationships$ForecastingShare;
}
declare type Fields$GrantedByLicense = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    PermissionSetLicenseId: string;
    CustomPermissionId: string;
};
declare type ParentReferences$GrantedByLicense = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    PermissionSetLicense: SObjectDefinition$PermissionSetLicense;
    CustomPermission: SObjectDefinition$CustomPermission;
};
declare type ChildRelationships$GrantedByLicense = {};
interface SObjectDefinition$GrantedByLicense extends SObjectDefinition<'GrantedByLicense'> {
    Name: 'GrantedByLicense';
    Fields: Fields$GrantedByLicense;
    ParentReferences: ParentReferences$GrantedByLicense;
    ChildRelationships: ChildRelationships$GrantedByLicense;
}
declare type Fields$Group = {
    Id: string;
    Name: string;
    DeveloperName: string | null;
    RelatedId: string | null;
    Type: string;
    Email: string | null;
    OwnerId: string;
    DoesSendEmailToMembers: boolean;
    DoesIncludeBosses: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$Group = {
    Related: SObjectDefinition$Name | null;
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Group = {
    GroupMembers: SObjectDefinition$GroupMember;
    QueueSobjects: SObjectDefinition$QueueSobject;
    DelegatedUsers: SObjectDefinition$User;
};
interface SObjectDefinition$Group extends SObjectDefinition<'Group'> {
    Name: 'Group';
    Fields: Fields$Group;
    ParentReferences: ParentReferences$Group;
    ChildRelationships: ChildRelationships$Group;
}
declare type Fields$GroupMember = {
    Id: string;
    GroupId: string;
    UserOrGroupId: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$GroupMember = {
    Group: SObjectDefinition$Group;
};
declare type ChildRelationships$GroupMember = {};
interface SObjectDefinition$GroupMember extends SObjectDefinition<'GroupMember'> {
    Name: 'GroupMember';
    Fields: Fields$GroupMember;
    ParentReferences: ParentReferences$GroupMember;
    ChildRelationships: ChildRelationships$GroupMember;
}
declare type Fields$Holiday = {
    Id: string;
    Name: string;
    Description: string | null;
    IsAllDay: boolean;
    ActivityDate: DateString | null;
    StartTimeInMinutes: number | null;
    EndTimeInMinutes: number | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsRecurrence: boolean;
    RecurrenceStartDate: DateString | null;
    RecurrenceEndDateOnly: DateString | null;
    RecurrenceType: string | null;
    RecurrenceInterval: number | null;
    RecurrenceDayOfWeekMask: number | null;
    RecurrenceDayOfMonth: number | null;
    RecurrenceInstance: string | null;
    RecurrenceMonthOfYear: string | null;
};
declare type ParentReferences$Holiday = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Holiday = {};
interface SObjectDefinition$Holiday extends SObjectDefinition<'Holiday'> {
    Name: 'Holiday';
    Fields: Fields$Holiday;
    ParentReferences: ParentReferences$Holiday;
    ChildRelationships: ChildRelationships$Holiday;
}
declare type Fields$IconDefinition = {
    Id: string;
    DurableId: string | null;
    TabDefinitionId: string | null;
    Url: string | null;
    ContentType: string | null;
    Theme: string | null;
    Height: number | null;
    Width: number | null;
};
declare type ParentReferences$IconDefinition = {};
declare type ChildRelationships$IconDefinition = {};
interface SObjectDefinition$IconDefinition extends SObjectDefinition<'IconDefinition'> {
    Name: 'IconDefinition';
    Fields: Fields$IconDefinition;
    ParentReferences: ParentReferences$IconDefinition;
    ChildRelationships: ChildRelationships$IconDefinition;
}
declare type Fields$Idea = {
    Id: string;
    IsDeleted: boolean;
    Title: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    CommunityId: string;
    Body: string | null;
    NumComments: number | null;
    VoteScore: number | null;
    VoteTotal: number | null;
    Categories: string | null;
    Status: string | null;
    LastCommentDate: DateString | null;
    LastCommentId: string | null;
    ParentIdeaId: string | null;
    IsHtml: boolean;
    IsMerged: boolean;
    CreatorFullPhotoUrl: string | null;
    CreatorSmallPhotoUrl: string | null;
    CreatorName: string | null;
};
declare type ParentReferences$Idea = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Community: SObjectDefinition$Community;
    LastComment: SObjectDefinition$IdeaComment | null;
    ParentIdea: SObjectDefinition$Idea | null;
};
declare type ChildRelationships$Idea = {
    Comments: SObjectDefinition$IdeaComment;
    Votes: SObjectDefinition$Vote;
};
interface SObjectDefinition$Idea extends SObjectDefinition<'Idea'> {
    Name: 'Idea';
    Fields: Fields$Idea;
    ParentReferences: ParentReferences$Idea;
    ChildRelationships: ChildRelationships$Idea;
}
declare type Fields$IdeaComment = {
    Id: string;
    IdeaId: string;
    CommunityId: string | null;
    CommentBody: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    SystemModstamp: DateString;
    IsDeleted: boolean;
    IsHtml: boolean;
    CreatorFullPhotoUrl: string | null;
    CreatorSmallPhotoUrl: string | null;
    CreatorName: string | null;
    UpVotes: number | null;
};
declare type ParentReferences$IdeaComment = {
    Idea: SObjectDefinition$Idea;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$IdeaComment = {
    Votes: SObjectDefinition$Vote;
};
interface SObjectDefinition$IdeaComment extends SObjectDefinition<'IdeaComment'> {
    Name: 'IdeaComment';
    Fields: Fields$IdeaComment;
    ParentReferences: ParentReferences$IdeaComment;
    ChildRelationships: ChildRelationships$IdeaComment;
}
declare type Fields$IdpEventLog = {
    Id: string;
    InitiatedBy: string;
    Timestamp: DateString | null;
    ErrorCode: string;
    SamlEntityUrl: string;
    UserId: string | null;
    AuthSessionId: string | null;
    SsoType: string | null;
    AppId: string | null;
    IdentityUsed: string | null;
    OptionsHasLogoutUrl: boolean;
};
declare type ParentReferences$IdpEventLog = {};
declare type ChildRelationships$IdpEventLog = {};
interface SObjectDefinition$IdpEventLog extends SObjectDefinition<'IdpEventLog'> {
    Name: 'IdpEventLog';
    Fields: Fields$IdpEventLog;
    ParentReferences: ParentReferences$IdpEventLog;
    ChildRelationships: ChildRelationships$IdpEventLog;
}
declare type Fields$Individual = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    LastName: string;
    FirstName: string | null;
    Salutation: string | null;
    Name: string;
    HasOptedOutTracking: boolean;
    HasOptedOutProfiling: boolean;
    HasOptedOutProcessing: boolean;
    HasOptedOutSolicit: boolean;
    ShouldForget: boolean;
    SendIndividualData: boolean;
    CanStorePiiElsewhere: boolean;
    HasOptedOutGeoTracking: boolean;
    BirthDate: DateString | null;
    IndividualsAge: string | null;
    LastViewedDate: DateString | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$Individual = {
    Owner: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Individual = {
    Contacts: SObjectDefinition$Contact;
    DuplicateRecordItems: SObjectDefinition$DuplicateRecordItem;
    Histories: SObjectDefinition$IndividualHistory;
    Shares: SObjectDefinition$IndividualShare;
    Leads: SObjectDefinition$Lead;
};
interface SObjectDefinition$Individual extends SObjectDefinition<'Individual'> {
    Name: 'Individual';
    Fields: Fields$Individual;
    ParentReferences: ParentReferences$Individual;
    ChildRelationships: ChildRelationships$Individual;
}
declare type Fields$IndividualHistory = {
    Id: string;
    IsDeleted: boolean;
    IndividualId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$IndividualHistory = {
    Individual: SObjectDefinition$Individual;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$IndividualHistory = {};
interface SObjectDefinition$IndividualHistory extends SObjectDefinition<'IndividualHistory'> {
    Name: 'IndividualHistory';
    Fields: Fields$IndividualHistory;
    ParentReferences: ParentReferences$IndividualHistory;
    ChildRelationships: ChildRelationships$IndividualHistory;
}
declare type Fields$IndividualShare = {
    Id: string;
    IndividualId: string;
    UserOrGroupId: string;
    IndividualAccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$IndividualShare = {
    Individual: SObjectDefinition$Individual;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$IndividualShare = {};
interface SObjectDefinition$IndividualShare extends SObjectDefinition<'IndividualShare'> {
    Name: 'IndividualShare';
    Fields: Fields$IndividualShare;
    ParentReferences: ParentReferences$IndividualShare;
    ChildRelationships: ChildRelationships$IndividualShare;
}
declare type Fields$InstalledMobileApp = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Status: string;
    UserId: string;
    ConnectedApplicationId: string;
    Version: string | null;
};
declare type ParentReferences$InstalledMobileApp = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    User: SObjectDefinition$User;
    ConnectedApplication: SObjectDefinition$ConnectedApplication;
};
declare type ChildRelationships$InstalledMobileApp = {};
interface SObjectDefinition$InstalledMobileApp extends SObjectDefinition<'InstalledMobileApp'> {
    Name: 'InstalledMobileApp';
    Fields: Fields$InstalledMobileApp;
    ParentReferences: ParentReferences$InstalledMobileApp;
    ChildRelationships: ChildRelationships$InstalledMobileApp;
}
declare type Fields$KnowledgeArticle = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ArticleNumber: string;
    ArchivedDate: DateString | null;
    ArchivedById: string | null;
    FirstPublishedDate: DateString | null;
    LastPublishedDate: DateString | null;
    CaseAssociationCount: number;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    MigratedToFromArticle: string | null;
    TotalViewCount: number | null;
};
declare type ParentReferences$KnowledgeArticle = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$KnowledgeArticle = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CaseArticles: SObjectDefinition$CaseArticle;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    VersionHistories: SObjectDefinition$KnowledgeArticleVersionHistory;
    ViewStats: SObjectDefinition$KnowledgeArticleViewStat;
    VoteStats: SObjectDefinition$KnowledgeArticleVoteStat;
    LinkedArticles: SObjectDefinition$LinkedArticle;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    Votes: SObjectDefinition$Vote;
};
interface SObjectDefinition$KnowledgeArticle extends SObjectDefinition<'KnowledgeArticle'> {
    Name: 'KnowledgeArticle';
    Fields: Fields$KnowledgeArticle;
    ParentReferences: ParentReferences$KnowledgeArticle;
    ChildRelationships: ChildRelationships$KnowledgeArticle;
}
declare type Fields$KnowledgeArticleVersion = {
    Id: string;
    KnowledgeArticleId: string;
    OwnerId: string;
    IsDeleted: boolean;
    ValidationStatus: string;
    PublishStatus: string;
    VersionNumber: number;
    IsLatestVersion: boolean;
    IsVisibleInApp: boolean;
    IsVisibleInPkb: boolean;
    IsVisibleInCsp: boolean;
    IsVisibleInPrm: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Language: string;
    Title: string;
    UrlName: string;
    ArchivedDate: DateString | null;
    ArchivedById: string | null;
    Summary: string | null;
    ArticleNumber: string;
    FirstPublishedDate: DateString | null;
    LastPublishedDate: DateString | null;
    ArticleArchivedById: string | null;
    ArticleArchivedDate: DateString | null;
    ArticleCaseAttachCount: number | null;
    ArticleCreatedById: string | null;
    ArticleCreatedDate: DateString | null;
    ArticleMasterLanguage: string | null;
    ArticleTotalViewCount: number | null;
    SourceId: string | null;
    ArticleType: string;
    AssignedToId: string | null;
    AssignedById: string | null;
    AssignmentDate: DateString | null;
    AssignmentDueDate: DateString | null;
    AssignmentNote: string | null;
    MigratedToFromArticleVersion: string | null;
};
declare type ParentReferences$KnowledgeArticleVersion = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ArchivedBy: SObjectDefinition$User | null;
    ArticleArchivedBy: SObjectDefinition$User | null;
    ArticleCreatedBy: SObjectDefinition$User | null;
    AssignedTo: SObjectDefinition$Name | null;
    AssignedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$KnowledgeArticleVersion = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CaseArticles: SObjectDefinition$CaseArticle;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    LinkedArticles: SObjectDefinition$LinkedArticle;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    SearchPromotionRules: SObjectDefinition$SearchPromotionRule;
    TopicAssignments: SObjectDefinition$TopicAssignment;
};
interface SObjectDefinition$KnowledgeArticleVersion extends SObjectDefinition<'KnowledgeArticleVersion'> {
    Name: 'KnowledgeArticleVersion';
    Fields: Fields$KnowledgeArticleVersion;
    ParentReferences: ParentReferences$KnowledgeArticleVersion;
    ChildRelationships: ChildRelationships$KnowledgeArticleVersion;
}
declare type Fields$KnowledgeArticleVersionHistory = {
    Id: string;
    IsDeleted: boolean;
    ParentId: string;
    Language: string;
    VersionNumber: number;
    ParentSobjectType: string;
    CreatedById: string;
    CreatedDate: DateString;
    EventType: string;
    FieldName: string | null;
    OldValue: string | null;
    NewValue: string | null;
    VersionId: string | null;
};
declare type ParentReferences$KnowledgeArticleVersionHistory = {
    Parent: SObjectDefinition$KnowledgeArticle;
    CreatedBy: SObjectDefinition$User;
    Version: SObjectDefinition$Knowledge__kav | null;
};
declare type ChildRelationships$KnowledgeArticleVersionHistory = {};
interface SObjectDefinition$KnowledgeArticleVersionHistory extends SObjectDefinition<'KnowledgeArticleVersionHistory'> {
    Name: 'KnowledgeArticleVersionHistory';
    Fields: Fields$KnowledgeArticleVersionHistory;
    ParentReferences: ParentReferences$KnowledgeArticleVersionHistory;
    ChildRelationships: ChildRelationships$KnowledgeArticleVersionHistory;
}
declare type Fields$KnowledgeArticleViewStat = {
    Id: string;
    IsDeleted: boolean;
    ParentId: string;
    NormalizedScore: number | null;
    Channel: string;
    ViewCount: number;
};
declare type ParentReferences$KnowledgeArticleViewStat = {
    Parent: SObjectDefinition$KnowledgeArticle;
};
declare type ChildRelationships$KnowledgeArticleViewStat = {};
interface SObjectDefinition$KnowledgeArticleViewStat extends SObjectDefinition<'KnowledgeArticleViewStat'> {
    Name: 'KnowledgeArticleViewStat';
    Fields: Fields$KnowledgeArticleViewStat;
    ParentReferences: ParentReferences$KnowledgeArticleViewStat;
    ChildRelationships: ChildRelationships$KnowledgeArticleViewStat;
}
declare type Fields$KnowledgeArticleVoteStat = {
    Id: string;
    IsDeleted: boolean;
    ParentId: string;
    NormalizedScore: number | null;
    Channel: string;
};
declare type ParentReferences$KnowledgeArticleVoteStat = {
    Parent: SObjectDefinition$KnowledgeArticle;
};
declare type ChildRelationships$KnowledgeArticleVoteStat = {};
interface SObjectDefinition$KnowledgeArticleVoteStat extends SObjectDefinition<'KnowledgeArticleVoteStat'> {
    Name: 'KnowledgeArticleVoteStat';
    Fields: Fields$KnowledgeArticleVoteStat;
    ParentReferences: ParentReferences$KnowledgeArticleVoteStat;
    ChildRelationships: ChildRelationships$KnowledgeArticleVoteStat;
}
declare type Fields$Knowledge__DataCategorySelection = {
    Id: string;
    ParentId: string;
    DataCategoryGroupName: string;
    DataCategoryName: string;
    CreatedDate: DateString;
    CreatedById: string;
    IsDeleted: boolean;
    SystemModstamp: DateString;
};
declare type ParentReferences$Knowledge__DataCategorySelection = {
    Parent: SObjectDefinition$Knowledge__kav;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Knowledge__DataCategorySelection = {};
interface SObjectDefinition$Knowledge__DataCategorySelection extends SObjectDefinition<'Knowledge__DataCategorySelection'> {
    Name: 'Knowledge__DataCategorySelection';
    Fields: Fields$Knowledge__DataCategorySelection;
    ParentReferences: ParentReferences$Knowledge__DataCategorySelection;
    ChildRelationships: ChildRelationships$Knowledge__DataCategorySelection;
}
declare type Fields$Knowledge__ViewStat = {
    Id: string;
    IsDeleted: boolean;
    ParentId: string;
    NormalizedScore: number | null;
    Channel: string;
    ViewCount: number;
};
declare type ParentReferences$Knowledge__ViewStat = {
    Parent: SObjectDefinition$Knowledge__ka;
};
declare type ChildRelationships$Knowledge__ViewStat = {};
interface SObjectDefinition$Knowledge__ViewStat extends SObjectDefinition<'Knowledge__ViewStat'> {
    Name: 'Knowledge__ViewStat';
    Fields: Fields$Knowledge__ViewStat;
    ParentReferences: ParentReferences$Knowledge__ViewStat;
    ChildRelationships: ChildRelationships$Knowledge__ViewStat;
}
declare type Fields$Knowledge__VoteStat = {
    Id: string;
    IsDeleted: boolean;
    ParentId: string;
    NormalizedScore: number | null;
    Channel: string;
};
declare type ParentReferences$Knowledge__VoteStat = {
    Parent: SObjectDefinition$Knowledge__ka;
};
declare type ChildRelationships$Knowledge__VoteStat = {};
interface SObjectDefinition$Knowledge__VoteStat extends SObjectDefinition<'Knowledge__VoteStat'> {
    Name: 'Knowledge__VoteStat';
    Fields: Fields$Knowledge__VoteStat;
    ParentReferences: ParentReferences$Knowledge__VoteStat;
    ChildRelationships: ChildRelationships$Knowledge__VoteStat;
}
declare type Fields$Knowledge__ka = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ArticleNumber: string;
    ArchivedDate: DateString | null;
    ArchivedById: string | null;
    FirstPublishedDate: DateString | null;
    LastPublishedDate: DateString | null;
    CaseAssociationCount: number;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    MigratedToFromArticle: string | null;
    TotalViewCount: number | null;
};
declare type ParentReferences$Knowledge__ka = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Knowledge__ka = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CaseArticles: SObjectDefinition$CaseArticle;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    ViewStats: SObjectDefinition$Knowledge__ViewStat;
    VoteStats: SObjectDefinition$Knowledge__VoteStat;
    LinkedArticles: SObjectDefinition$LinkedArticle;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    Votes: SObjectDefinition$Vote;
};
interface SObjectDefinition$Knowledge__ka extends SObjectDefinition<'Knowledge__ka'> {
    Name: 'Knowledge__ka';
    Fields: Fields$Knowledge__ka;
    ParentReferences: ParentReferences$Knowledge__ka;
    ChildRelationships: ChildRelationships$Knowledge__ka;
}
declare type Fields$Knowledge__kav = {
    Id: string;
    KnowledgeArticleId: string;
    OwnerId: string;
    IsDeleted: boolean;
    ValidationStatus: string;
    PublishStatus: string;
    VersionNumber: number;
    IsLatestVersion: boolean;
    IsVisibleInApp: boolean;
    IsVisibleInPkb: boolean;
    IsVisibleInCsp: boolean;
    IsVisibleInPrm: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Language: string;
    Title: string;
    UrlName: string;
    ArchivedDate: DateString | null;
    ArchivedById: string | null;
    Summary: string | null;
    ArticleNumber: string;
    FirstPublishedDate: DateString | null;
    LastPublishedDate: DateString | null;
    ArticleArchivedById: string | null;
    ArticleArchivedDate: DateString | null;
    ArticleCaseAttachCount: number | null;
    ArticleCreatedById: string | null;
    ArticleCreatedDate: DateString | null;
    ArticleMasterLanguage: string | null;
    ArticleTotalViewCount: number | null;
    SourceId: string | null;
    ArticleType: string;
    AssignedToId: string | null;
    AssignedById: string | null;
    AssignmentDate: DateString | null;
    AssignmentDueDate: DateString | null;
    AssignmentNote: string | null;
    MigratedToFromArticleVersion: string | null;
};
declare type ParentReferences$Knowledge__kav = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ArchivedBy: SObjectDefinition$User | null;
    ArticleArchivedBy: SObjectDefinition$User | null;
    ArticleCreatedBy: SObjectDefinition$User | null;
    AssignedTo: SObjectDefinition$Name | null;
    AssignedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$Knowledge__kav = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CaseArticles: SObjectDefinition$CaseArticle;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    DataCategorySelections: SObjectDefinition$Knowledge__DataCategorySelection;
    LinkedArticles: SObjectDefinition$LinkedArticle;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    SearchPromotionRules: SObjectDefinition$SearchPromotionRule;
    TopicAssignments: SObjectDefinition$TopicAssignment;
};
interface SObjectDefinition$Knowledge__kav extends SObjectDefinition<'Knowledge__kav'> {
    Name: 'Knowledge__kav';
    Fields: Fields$Knowledge__kav;
    ParentReferences: ParentReferences$Knowledge__kav;
    ChildRelationships: ChildRelationships$Knowledge__kav;
}
declare type Fields$KnowledgeableUser = {
    Id: string;
    UserId: string;
    TopicId: string;
    RawRank: number | null;
    SystemModstamp: DateString;
};
declare type ParentReferences$KnowledgeableUser = {};
declare type ChildRelationships$KnowledgeableUser = {};
interface SObjectDefinition$KnowledgeableUser extends SObjectDefinition<'KnowledgeableUser'> {
    Name: 'KnowledgeableUser';
    Fields: Fields$KnowledgeableUser;
    ParentReferences: ParentReferences$KnowledgeableUser;
    ChildRelationships: ChildRelationships$KnowledgeableUser;
}
declare type Fields$Lead = {
    Id: string;
    IsDeleted: boolean;
    MasterRecordId: string | null;
    LastName: string;
    FirstName: string | null;
    Salutation: string | null;
    Name: string;
    Title: string | null;
    Company: string;
    Street: string | null;
    City: string | null;
    State: string | null;
    PostalCode: string | null;
    Country: string | null;
    Latitude: number | null;
    Longitude: number | null;
    GeocodeAccuracy: string | null;
    Address: Address | null;
    Phone: string | null;
    Email: string | null;
    Website: string | null;
    PhotoUrl: string | null;
    Description: string | null;
    LeadSource: string | null;
    Status: string;
    Industry: string | null;
    Rating: string | null;
    AnnualRevenue: number | null;
    NumberOfEmployees: number | null;
    OwnerId: string;
    IsConverted: boolean;
    ConvertedDate: DateString | null;
    ConvertedAccountId: string | null;
    ConvertedContactId: string | null;
    ConvertedOpportunityId: string | null;
    IsUnreadByOwner: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastActivityDate: DateString | null;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    Jigsaw: string | null;
    JigsawContactId: string | null;
    EmailBouncedReason: string | null;
    EmailBouncedDate: DateString | null;
    IndividualId: string | null;
};
declare type ParentReferences$Lead = {
    MasterRecord: SObjectDefinition$Lead | null;
    Owner: SObjectDefinition$Name;
    ConvertedAccount: SObjectDefinition$Account | null;
    ConvertedContact: SObjectDefinition$Contact | null;
    ConvertedOpportunity: SObjectDefinition$Opportunity | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Individual: SObjectDefinition$Individual | null;
};
declare type ChildRelationships$Lead = {
    AcceptedEventRelations: SObjectDefinition$AcceptedEventRelation;
    ActivityHistories: SObjectDefinition$ActivityHistory;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    CampaignMembers: SObjectDefinition$CampaignMember;
    RecordAssociatedGroups: SObjectDefinition$CollaborationGroupRecord;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContactRequests: SObjectDefinition$ContactRequest;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    DeclinedEventRelations: SObjectDefinition$DeclinedEventRelation;
    DuplicateRecordItems: SObjectDefinition$DuplicateRecordItem;
    EmailMessageRelations: SObjectDefinition$EmailMessageRelation;
    EmailStatuses: SObjectDefinition$EmailStatus;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    EventRelations: SObjectDefinition$EventRelation;
    Feeds: SObjectDefinition$LeadFeed;
    Histories: SObjectDefinition$LeadHistory;
    Shares: SObjectDefinition$LeadShare;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    OpenActivities: SObjectDefinition$OpenActivity;
    OutgoingEmailRelations: SObjectDefinition$OutgoingEmailRelation;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    Personas: SObjectDefinition$SocialPersona;
    Posts: SObjectDefinition$SocialPost;
    Tasks: SObjectDefinition$Task;
    TopicAssignments: SObjectDefinition$TopicAssignment;
    UndecidedEventRelations: SObjectDefinition$UndecidedEventRelation;
};
interface SObjectDefinition$Lead extends SObjectDefinition<'Lead'> {
    Name: 'Lead';
    Fields: Fields$Lead;
    ParentReferences: ParentReferences$Lead;
    ChildRelationships: ChildRelationships$Lead;
}
declare type Fields$LeadChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    LastName: string | null;
    FirstName: string | null;
    Salutation: string | null;
    Name: string | null;
    Title: string | null;
    Company: string | null;
    Street: string | null;
    City: string | null;
    State: string | null;
    PostalCode: string | null;
    Country: string | null;
    Latitude: number | null;
    Longitude: number | null;
    GeocodeAccuracy: string | null;
    Address: Address | null;
    Phone: string | null;
    Email: string | null;
    Website: string | null;
    Description: string | null;
    LeadSource: string | null;
    Status: string | null;
    Industry: string | null;
    Rating: string | null;
    AnnualRevenue: number | null;
    NumberOfEmployees: number | null;
    OwnerId: string | null;
    IsConverted: boolean;
    ConvertedDate: DateString | null;
    ConvertedAccountId: string | null;
    ConvertedContactId: string | null;
    ConvertedOpportunityId: string | null;
    IsUnreadByOwner: boolean;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    Jigsaw: string | null;
    JigsawContactId: string | null;
    EmailBouncedReason: string | null;
    EmailBouncedDate: DateString | null;
    IndividualId: string | null;
};
declare type ParentReferences$LeadChangeEvent = {};
declare type ChildRelationships$LeadChangeEvent = {};
interface SObjectDefinition$LeadChangeEvent extends SObjectDefinition<'LeadChangeEvent'> {
    Name: 'LeadChangeEvent';
    Fields: Fields$LeadChangeEvent;
    ParentReferences: ParentReferences$LeadChangeEvent;
    ChildRelationships: ChildRelationships$LeadChangeEvent;
}
declare type Fields$LeadFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$LeadFeed = {
    Parent: SObjectDefinition$Lead;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$LeadFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$LeadFeed extends SObjectDefinition<'LeadFeed'> {
    Name: 'LeadFeed';
    Fields: Fields$LeadFeed;
    ParentReferences: ParentReferences$LeadFeed;
    ChildRelationships: ChildRelationships$LeadFeed;
}
declare type Fields$LeadHistory = {
    Id: string;
    IsDeleted: boolean;
    LeadId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$LeadHistory = {
    Lead: SObjectDefinition$Lead;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$LeadHistory = {};
interface SObjectDefinition$LeadHistory extends SObjectDefinition<'LeadHistory'> {
    Name: 'LeadHistory';
    Fields: Fields$LeadHistory;
    ParentReferences: ParentReferences$LeadHistory;
    ChildRelationships: ChildRelationships$LeadHistory;
}
declare type Fields$LeadShare = {
    Id: string;
    LeadId: string;
    UserOrGroupId: string;
    LeadAccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$LeadShare = {
    Lead: SObjectDefinition$Lead;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$LeadShare = {};
interface SObjectDefinition$LeadShare extends SObjectDefinition<'LeadShare'> {
    Name: 'LeadShare';
    Fields: Fields$LeadShare;
    ParentReferences: ParentReferences$LeadShare;
    ChildRelationships: ChildRelationships$LeadShare;
}
declare type Fields$LeadStatus = {
    Id: string;
    MasterLabel: string | null;
    ApiName: string;
    SortOrder: number | null;
    IsDefault: boolean;
    IsConverted: boolean;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$LeadStatus = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$LeadStatus = {};
interface SObjectDefinition$LeadStatus extends SObjectDefinition<'LeadStatus'> {
    Name: 'LeadStatus';
    Fields: Fields$LeadStatus;
    ParentReferences: ParentReferences$LeadStatus;
    ChildRelationships: ChildRelationships$LeadStatus;
}
declare type Fields$LightningExperienceTheme = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string | null;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    DefaultBrandingSetId: string | null;
    ShouldOverrideLoadingImage: boolean;
    Description: string | null;
};
declare type ParentReferences$LightningExperienceTheme = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    DefaultBrandingSet: SObjectDefinition$BrandingSet | null;
};
declare type ChildRelationships$LightningExperienceTheme = {};
interface SObjectDefinition$LightningExperienceTheme extends SObjectDefinition<'LightningExperienceTheme'> {
    Name: 'LightningExperienceTheme';
    Fields: Fields$LightningExperienceTheme;
    ParentReferences: ParentReferences$LightningExperienceTheme;
    ChildRelationships: ChildRelationships$LightningExperienceTheme;
}
declare type Fields$LinkedArticle = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    KnowledgeArticleVersionId: string | null;
    LinkedEntityId: string | null;
    KnowledgeArticleId: string | null;
    Type: string | null;
};
declare type ParentReferences$LinkedArticle = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    KnowledgeArticleVersion: SObjectDefinition$Knowledge__kav | null;
    LinkedEntity: SObjectDefinition$Name | null;
    KnowledgeArticle: SObjectDefinition$Knowledge__ka | null;
};
declare type ChildRelationships$LinkedArticle = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Feeds: SObjectDefinition$LinkedArticleFeed;
    Histories: SObjectDefinition$LinkedArticleHistory;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    TopicAssignments: SObjectDefinition$TopicAssignment;
};
interface SObjectDefinition$LinkedArticle extends SObjectDefinition<'LinkedArticle'> {
    Name: 'LinkedArticle';
    Fields: Fields$LinkedArticle;
    ParentReferences: ParentReferences$LinkedArticle;
    ChildRelationships: ChildRelationships$LinkedArticle;
}
declare type Fields$LinkedArticleFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$LinkedArticleFeed = {
    Parent: SObjectDefinition$LinkedArticle;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$LinkedArticleFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$LinkedArticleFeed extends SObjectDefinition<'LinkedArticleFeed'> {
    Name: 'LinkedArticleFeed';
    Fields: Fields$LinkedArticleFeed;
    ParentReferences: ParentReferences$LinkedArticleFeed;
    ChildRelationships: ChildRelationships$LinkedArticleFeed;
}
declare type Fields$LinkedArticleHistory = {
    Id: string;
    IsDeleted: boolean;
    LinkedArticleId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$LinkedArticleHistory = {
    LinkedArticle: SObjectDefinition$LinkedArticle;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$LinkedArticleHistory = {};
interface SObjectDefinition$LinkedArticleHistory extends SObjectDefinition<'LinkedArticleHistory'> {
    Name: 'LinkedArticleHistory';
    Fields: Fields$LinkedArticleHistory;
    ParentReferences: ParentReferences$LinkedArticleHistory;
    ChildRelationships: ChildRelationships$LinkedArticleHistory;
}
declare type Fields$ListEmail = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    Subject: string | null;
    HtmlBody: string | null;
    TextBody: string | null;
    FromName: string | null;
    FromAddress: string;
    Status: string;
    HasAttachment: boolean;
    ScheduledDate: DateString | null;
    TotalSent: number | null;
    CampaignId: string | null;
};
declare type ParentReferences$ListEmail = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Campaign: SObjectDefinition$Campaign | null;
};
declare type ChildRelationships$ListEmail = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    Emails: SObjectDefinition$EmailMessage;
    Events: SObjectDefinition$Event;
    OpenActivities: SObjectDefinition$OpenActivity;
    Tasks: SObjectDefinition$Task;
};
interface SObjectDefinition$ListEmail extends SObjectDefinition<'ListEmail'> {
    Name: 'ListEmail';
    Fields: Fields$ListEmail;
    ParentReferences: ParentReferences$ListEmail;
    ChildRelationships: ChildRelationships$ListEmail;
}
declare type Fields$ListEmailChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    OwnerId: string | null;
    Name: string | null;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    Subject: string | null;
    HtmlBody: string | null;
    TextBody: string | null;
    FromName: string | null;
    FromAddress: string | null;
    Status: string | null;
    HasAttachment: boolean;
    ScheduledDate: DateString | null;
    TotalSent: number | null;
    CampaignId: string | null;
};
declare type ParentReferences$ListEmailChangeEvent = {};
declare type ChildRelationships$ListEmailChangeEvent = {};
interface SObjectDefinition$ListEmailChangeEvent extends SObjectDefinition<'ListEmailChangeEvent'> {
    Name: 'ListEmailChangeEvent';
    Fields: Fields$ListEmailChangeEvent;
    ParentReferences: ParentReferences$ListEmailChangeEvent;
    ChildRelationships: ChildRelationships$ListEmailChangeEvent;
}
declare type Fields$ListEmailRecipientSource = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ListEmailId: string;
    SourceListId: string;
    SourceType: string;
};
declare type ParentReferences$ListEmailRecipientSource = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ListEmail: SObjectDefinition$ListEmail;
    SourceList: SObjectDefinition$Name;
};
declare type ChildRelationships$ListEmailRecipientSource = {};
interface SObjectDefinition$ListEmailRecipientSource extends SObjectDefinition<'ListEmailRecipientSource'> {
    Name: 'ListEmailRecipientSource';
    Fields: Fields$ListEmailRecipientSource;
    ParentReferences: ParentReferences$ListEmailRecipientSource;
    ChildRelationships: ChildRelationships$ListEmailRecipientSource;
}
declare type Fields$ListEmailShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$ListEmailShare = {
    Parent: SObjectDefinition$ListEmail;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ListEmailShare = {};
interface SObjectDefinition$ListEmailShare extends SObjectDefinition<'ListEmailShare'> {
    Name: 'ListEmailShare';
    Fields: Fields$ListEmailShare;
    ParentReferences: ParentReferences$ListEmailShare;
    ChildRelationships: ChildRelationships$ListEmailShare;
}
declare type Fields$ListView = {
    Id: string;
    Name: string;
    DeveloperName: string;
    NamespacePrefix: string | null;
    SobjectType: string | null;
    IsSoqlCompatible: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
};
declare type ParentReferences$ListView = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ListView = {
    ListEmailRecipientSources: SObjectDefinition$ListEmailRecipientSource;
};
interface SObjectDefinition$ListView extends SObjectDefinition<'ListView'> {
    Name: 'ListView';
    Fields: Fields$ListView;
    ParentReferences: ParentReferences$ListView;
    ChildRelationships: ChildRelationships$ListView;
}
declare type Fields$ListViewChart = {
    Id: string;
    IsDeleted: boolean;
    SobjectType: string;
    DeveloperName: string;
    Language: string | null;
    MasterLabel: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    OwnerId: string;
    ChartType: string;
    GroupingField: string | null;
    AggregateField: string | null;
    AggregateType: string;
};
declare type ParentReferences$ListViewChart = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Owner: SObjectDefinition$User;
};
declare type ChildRelationships$ListViewChart = {};
interface SObjectDefinition$ListViewChart extends SObjectDefinition<'ListViewChart'> {
    Name: 'ListViewChart';
    Fields: Fields$ListViewChart;
    ParentReferences: ParentReferences$ListViewChart;
    ChildRelationships: ChildRelationships$ListViewChart;
}
declare type Fields$ListViewChartInstance = {
    Id: string;
    ExternalId: string | null;
    ListViewChartId: string;
    Label: string;
    DeveloperName: string;
    SourceEntity: string;
    ListViewContextId: string;
    ChartType: string;
    IsLastViewed: boolean;
    DataQuery: string | null;
    DataQueryWithoutUserFilters: string | null;
    IsEditable: boolean;
    IsDeletable: boolean;
    GroupingField: string;
    AggregateField: string;
    AggregateType: string;
};
declare type ParentReferences$ListViewChartInstance = {
    ListViewChart: SObjectDefinition$ListViewChart;
    ListViewContext: SObjectDefinition$ListView;
};
declare type ChildRelationships$ListViewChartInstance = {};
interface SObjectDefinition$ListViewChartInstance extends SObjectDefinition<'ListViewChartInstance'> {
    Name: 'ListViewChartInstance';
    Fields: Fields$ListViewChartInstance;
    ParentReferences: ParentReferences$ListViewChartInstance;
    ChildRelationships: ChildRelationships$ListViewChartInstance;
}
declare type Fields$LoginGeo = {
    Id: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    IsDeleted: boolean;
    SystemModstamp: DateString;
    LoginTime: DateString;
    CountryIso: string | null;
    Country: string | null;
    Latitude: number | null;
    Longitude: number | null;
    City: string | null;
    PostalCode: string | null;
    Subdivision: string | null;
};
declare type ParentReferences$LoginGeo = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$LoginGeo = {};
interface SObjectDefinition$LoginGeo extends SObjectDefinition<'LoginGeo'> {
    Name: 'LoginGeo';
    Fields: Fields$LoginGeo;
    ParentReferences: ParentReferences$LoginGeo;
    ChildRelationships: ChildRelationships$LoginGeo;
}
declare type Fields$LoginHistory = {
    Id: string;
    UserId: string | null;
    LoginTime: DateString;
    LoginType: string;
    SourceIp: string | null;
    LoginUrl: string | null;
    AuthenticationServiceId: string | null;
    LoginGeoId: string | null;
    TlsProtocol: string | null;
    CipherSuite: string | null;
    Browser: string | null;
    Platform: string | null;
    Status: string | null;
    Application: string | null;
    ClientVersion: string | null;
    ApiType: string | null;
    ApiVersion: string | null;
    CountryIso: string | null;
};
declare type ParentReferences$LoginHistory = {
    LoginGeo: SObjectDefinition$LoginGeo | null;
};
declare type ChildRelationships$LoginHistory = {};
interface SObjectDefinition$LoginHistory extends SObjectDefinition<'LoginHistory'> {
    Name: 'LoginHistory';
    Fields: Fields$LoginHistory;
    ParentReferences: ParentReferences$LoginHistory;
    ChildRelationships: ChildRelationships$LoginHistory;
}
declare type Fields$LoginIp = {
    Id: string;
    UsersId: string;
    SourceIp: string | null;
    CreatedDate: DateString;
    IsAuthenticated: boolean;
    ChallengeSentDate: DateString | null;
    ChallengeMethod: string | null;
};
declare type ParentReferences$LoginIp = {
    Users: SObjectDefinition$User;
};
declare type ChildRelationships$LoginIp = {};
interface SObjectDefinition$LoginIp extends SObjectDefinition<'LoginIp'> {
    Name: 'LoginIp';
    Fields: Fields$LoginIp;
    ParentReferences: ParentReferences$LoginIp;
    ChildRelationships: ChildRelationships$LoginIp;
}
declare type Fields$LogoutEventStream = {
    ReplayId: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    EventIdentifier: string | null;
    UserId: string | null;
    Username: string | null;
    EventDate: DateString | null;
    RelatedEventIdentifier: string | null;
    SessionKey: string | null;
    LoginKey: string | null;
    SessionLevel: string | null;
    SourceIp: string | null;
};
declare type ParentReferences$LogoutEventStream = {
    CreatedBy: SObjectDefinition$User;
    User: SObjectDefinition$User | null;
};
declare type ChildRelationships$LogoutEventStream = {};
interface SObjectDefinition$LogoutEventStream extends SObjectDefinition<'LogoutEventStream'> {
    Name: 'LogoutEventStream';
    Fields: Fields$LogoutEventStream;
    ParentReferences: ParentReferences$LogoutEventStream;
    ChildRelationships: ChildRelationships$LogoutEventStream;
}
declare type Fields$LookedUpFromActivity = {
    Id: string;
    AccountId: string | null;
    WhoId: string | null;
    WhatId: string | null;
    Subject: string | null;
    IsTask: boolean;
    ActivityDate: DateString | null;
    OwnerId: string | null;
    Status: string | null;
    Priority: string | null;
    IsHighPriority: boolean;
    ActivityType: string | null;
    IsClosed: boolean;
    IsAllDayEvent: boolean;
    IsVisibleInSelfService: boolean;
    DurationInMinutes: number | null;
    Location: string | null;
    Description: string | null;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    CallDurationInSeconds: number | null;
    CallType: string | null;
    CallDisposition: string | null;
    CallObject: string | null;
    ReminderDateTime: DateString | null;
    IsReminderSet: boolean;
    EndDateTime: DateString | null;
    StartDateTime: DateString | null;
    ActivitySubtype: string | null;
};
declare type ParentReferences$LookedUpFromActivity = {
    Account: SObjectDefinition$Account | null;
    Who: SObjectDefinition$Name | null;
    What: SObjectDefinition$Name | null;
    Owner: SObjectDefinition$User | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$LookedUpFromActivity = {};
interface SObjectDefinition$LookedUpFromActivity extends SObjectDefinition<'LookedUpFromActivity'> {
    Name: 'LookedUpFromActivity';
    Fields: Fields$LookedUpFromActivity;
    ParentReferences: ParentReferences$LookedUpFromActivity;
    ChildRelationships: ChildRelationships$LookedUpFromActivity;
}
declare type Fields$Macro = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    Description: string | null;
    IsAlohaSupported: boolean;
    IsLightningSupported: boolean;
    StartingContext: string | null;
};
declare type ParentReferences$Macro = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Macro = {
    Histories: SObjectDefinition$MacroHistory;
};
interface SObjectDefinition$Macro extends SObjectDefinition<'Macro'> {
    Name: 'Macro';
    Fields: Fields$Macro;
    ParentReferences: ParentReferences$Macro;
    ChildRelationships: ChildRelationships$Macro;
}
declare type Fields$MacroHistory = {
    Id: string;
    IsDeleted: boolean;
    MacroId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$MacroHistory = {
    Macro: SObjectDefinition$Macro;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$MacroHistory = {};
interface SObjectDefinition$MacroHistory extends SObjectDefinition<'MacroHistory'> {
    Name: 'MacroHistory';
    Fields: Fields$MacroHistory;
    ParentReferences: ParentReferences$MacroHistory;
    ChildRelationships: ChildRelationships$MacroHistory;
}
declare type Fields$MacroInstruction = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    MacroId: string;
    Operation: string;
    Target: string | null;
    Value: string | null;
    ValueRecord: string | null;
    SortOrder: number;
};
declare type ParentReferences$MacroInstruction = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Macro: SObjectDefinition$Macro;
};
declare type ChildRelationships$MacroInstruction = {};
interface SObjectDefinition$MacroInstruction extends SObjectDefinition<'MacroInstruction'> {
    Name: 'MacroInstruction';
    Fields: Fields$MacroInstruction;
    ParentReferences: ParentReferences$MacroInstruction;
    ChildRelationships: ChildRelationships$MacroInstruction;
}
declare type Fields$MacroShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$MacroShare = {
    Parent: SObjectDefinition$Macro;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$MacroShare = {};
interface SObjectDefinition$MacroShare extends SObjectDefinition<'MacroShare'> {
    Name: 'MacroShare';
    Fields: Fields$MacroShare;
    ParentReferences: ParentReferences$MacroShare;
    ChildRelationships: ChildRelationships$MacroShare;
}
declare type Fields$MailmergeTemplate = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    Description: string | null;
    Filename: string;
    BodyLength: number | null;
    Category: string | null;
    Body: BlobString;
    LastUsedDate: DateString | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    SecurityOptionsAttachmentScannedForXSS: boolean;
    SecurityOptionsAttachmentHasXSSThreat: boolean;
    SecurityOptionsAttachmentScannedforFlash: boolean;
    SecurityOptionsAttachmentHasFlash: boolean;
};
declare type ParentReferences$MailmergeTemplate = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$MailmergeTemplate = {};
interface SObjectDefinition$MailmergeTemplate extends SObjectDefinition<'MailmergeTemplate'> {
    Name: 'MailmergeTemplate';
    Fields: Fields$MailmergeTemplate;
    ParentReferences: ParentReferences$MailmergeTemplate;
    ChildRelationships: ChildRelationships$MailmergeTemplate;
}
declare type Fields$MatchingRule = {
    Id: string;
    IsDeleted: boolean;
    SobjectType: string;
    DeveloperName: string;
    Language: string;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    MatchEngine: string | null;
    BooleanFilter: string | null;
    Description: string | null;
    RuleStatus: string;
    SobjectSubtype: string | null;
};
declare type ParentReferences$MatchingRule = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$MatchingRule = {
    MatchingRuleItems: SObjectDefinition$MatchingRuleItem;
};
interface SObjectDefinition$MatchingRule extends SObjectDefinition<'MatchingRule'> {
    Name: 'MatchingRule';
    Fields: Fields$MatchingRule;
    ParentReferences: ParentReferences$MatchingRule;
    ChildRelationships: ChildRelationships$MatchingRule;
}
declare type Fields$MatchingRuleItem = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    MatchingRuleId: string;
    SortOrder: number;
    Field: string | null;
    MatchingMethod: string | null;
    BlankValueBehavior: string;
};
declare type ParentReferences$MatchingRuleItem = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    MatchingRule: SObjectDefinition$MatchingRule;
};
declare type ChildRelationships$MatchingRuleItem = {};
interface SObjectDefinition$MatchingRuleItem extends SObjectDefinition<'MatchingRuleItem'> {
    Name: 'MatchingRuleItem';
    Fields: Fields$MatchingRuleItem;
    ParentReferences: ParentReferences$MatchingRuleItem;
    ChildRelationships: ChildRelationships$MatchingRuleItem;
}
declare type Fields$MilestoneType = {
    Id: string;
    Name: string;
    Description: string | null;
    RecurrenceType: string | null;
    SystemModstamp: DateString;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
};
declare type ParentReferences$MilestoneType = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$MilestoneType = {};
interface SObjectDefinition$MilestoneType extends SObjectDefinition<'MilestoneType'> {
    Name: 'MilestoneType';
    Fields: Fields$MilestoneType;
    ParentReferences: ParentReferences$MilestoneType;
    ChildRelationships: ChildRelationships$MilestoneType;
}
declare type Fields$Name = {
    Id: string;
    Name: string | null;
    LastName: string | null;
    FirstName: string | null;
    Type: string | null;
    Alias: string | null;
    UserRoleId: string | null;
    RecordTypeId: string | null;
    IsActive: boolean;
    ProfileId: string | null;
    Title: string | null;
    Email: string | null;
    Phone: string | null;
    NameOrAlias: string | null;
    Username: string | null;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
};
declare type ParentReferences$Name = {
    UserRole: SObjectDefinition$UserRole | null;
    RecordType: SObjectDefinition$RecordType | null;
    Profile: SObjectDefinition$Profile | null;
};
declare type ChildRelationships$Name = {};
interface SObjectDefinition$Name extends SObjectDefinition<'Name'> {
    Name: 'Name';
    Fields: Fields$Name;
    ParentReferences: ParentReferences$Name;
    ChildRelationships: ChildRelationships$Name;
}
declare type Fields$NamedCredential = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Endpoint: string | null;
    PrincipalType: string;
    CalloutOptionsGenerateAuthorizationHeader: boolean;
    CalloutOptionsAllowMergeFieldsInHeader: boolean;
    CalloutOptionsAllowMergeFieldsInBody: boolean;
    AuthProviderId: string | null;
};
declare type ParentReferences$NamedCredential = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    AuthProvider: SObjectDefinition$AuthProvider | null;
};
declare type ChildRelationships$NamedCredential = {
    CustomHttpHeaders: SObjectDefinition$CustomHttpHeader;
    UserAuths: SObjectDefinition$ExternalDataUserAuth;
    SetupEntityAccessItems: SObjectDefinition$SetupEntityAccess;
};
interface SObjectDefinition$NamedCredential extends SObjectDefinition<'NamedCredential'> {
    Name: 'NamedCredential';
    Fields: Fields$NamedCredential;
    ParentReferences: ParentReferences$NamedCredential;
    ChildRelationships: ChildRelationships$NamedCredential;
}
declare type Fields$Note = {
    Id: string;
    IsDeleted: boolean;
    ParentId: string;
    Title: string;
    IsPrivate: boolean;
    Body: string | null;
    OwnerId: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$Note = {
    Parent: SObjectDefinition$Name;
    Owner: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Note = {};
interface SObjectDefinition$Note extends SObjectDefinition<'Note'> {
    Name: 'Note';
    Fields: Fields$Note;
    ParentReferences: ParentReferences$Note;
    ChildRelationships: ChildRelationships$Note;
}
declare type Fields$NoteAndAttachment = {
    Id: string;
    IsDeleted: boolean;
    IsNote: boolean;
    ParentId: string;
    Title: string | null;
    IsPrivate: boolean;
    OwnerId: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$NoteAndAttachment = {
    Parent: SObjectDefinition$Name;
    Owner: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$NoteAndAttachment = {};
interface SObjectDefinition$NoteAndAttachment extends SObjectDefinition<'NoteAndAttachment'> {
    Name: 'NoteAndAttachment';
    Fields: Fields$NoteAndAttachment;
    ParentReferences: ParentReferences$NoteAndAttachment;
    ChildRelationships: ChildRelationships$NoteAndAttachment;
}
declare type Fields$OauthToken = {
    Id: string;
    AccessToken: string | null;
    UserId: string | null;
    RequestToken: string | null;
    CreatedDate: DateString | null;
    AppName: string | null;
    LastUsedDate: DateString | null;
    UseCount: number | null;
    DeleteToken: string | null;
    AppMenuItemId: string | null;
};
declare type ParentReferences$OauthToken = {
    User: SObjectDefinition$User | null;
    AppMenuItem: SObjectDefinition$AppMenuItem | null;
};
declare type ChildRelationships$OauthToken = {};
interface SObjectDefinition$OauthToken extends SObjectDefinition<'OauthToken'> {
    Name: 'OauthToken';
    Fields: Fields$OauthToken;
    ParentReferences: ParentReferences$OauthToken;
    ChildRelationships: ChildRelationships$OauthToken;
}
declare type Fields$ObjectPermissions = {
    Id: string;
    ParentId: string;
    SobjectType: string;
    PermissionsCreate: boolean;
    PermissionsRead: boolean;
    PermissionsEdit: boolean;
    PermissionsDelete: boolean;
    PermissionsViewAllRecords: boolean;
    PermissionsModifyAllRecords: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$ObjectPermissions = {
    Parent: SObjectDefinition$PermissionSet;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ObjectPermissions = {};
interface SObjectDefinition$ObjectPermissions extends SObjectDefinition<'ObjectPermissions'> {
    Name: 'ObjectPermissions';
    Fields: Fields$ObjectPermissions;
    ParentReferences: ParentReferences$ObjectPermissions;
    ChildRelationships: ChildRelationships$ObjectPermissions;
}
declare type Fields$OpenActivity = {
    Id: string;
    AccountId: string | null;
    WhoId: string | null;
    WhatId: string | null;
    Subject: string | null;
    IsTask: boolean;
    ActivityDate: DateString | null;
    OwnerId: string | null;
    Status: string | null;
    Priority: string | null;
    IsHighPriority: boolean;
    ActivityType: string | null;
    IsClosed: boolean;
    IsAllDayEvent: boolean;
    DurationInMinutes: number | null;
    Location: string | null;
    Description: string | null;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    CallDurationInSeconds: number | null;
    CallType: string | null;
    CallDisposition: string | null;
    CallObject: string | null;
    ReminderDateTime: DateString | null;
    IsReminderSet: boolean;
    EndDateTime: DateString | null;
    StartDateTime: DateString | null;
    ActivitySubtype: string | null;
    AlternateDetailId: string | null;
};
declare type ParentReferences$OpenActivity = {
    Account: SObjectDefinition$Account | null;
    Who: SObjectDefinition$Name | null;
    What: SObjectDefinition$Name | null;
    Owner: SObjectDefinition$User | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    AlternateDetail: SObjectDefinition$EmailMessage | null;
};
declare type ChildRelationships$OpenActivity = {};
interface SObjectDefinition$OpenActivity extends SObjectDefinition<'OpenActivity'> {
    Name: 'OpenActivity';
    Fields: Fields$OpenActivity;
    ParentReferences: ParentReferences$OpenActivity;
    ChildRelationships: ChildRelationships$OpenActivity;
}
declare type Fields$Opportunity = {
    Id: string;
    IsDeleted: boolean;
    AccountId: string | null;
    Name: string;
    Description: string | null;
    StageName: string;
    Amount: number | null;
    Probability: number | null;
    CloseDate: DateString;
    Type: string | null;
    NextStep: string | null;
    LeadSource: string | null;
    IsClosed: boolean;
    IsWon: boolean;
    ForecastCategory: string;
    ForecastCategoryName: string | null;
    CampaignId: string | null;
    HasOpportunityLineItem: boolean;
    Pricebook2Id: string | null;
    OwnerId: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastActivityDate: DateString | null;
    FiscalQuarter: number | null;
    FiscalYear: number | null;
    Fiscal: string | null;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    HasOpenActivity: boolean;
    HasOverdueTask: boolean;
};
declare type ParentReferences$Opportunity = {
    Account: SObjectDefinition$Account | null;
    Campaign: SObjectDefinition$Campaign | null;
    Pricebook2: SObjectDefinition$Pricebook2 | null;
    Owner: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Opportunity = {
    AccountPartners: SObjectDefinition$AccountPartner;
    ActivityHistories: SObjectDefinition$ActivityHistory;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    RecordAssociatedGroups: SObjectDefinition$CollaborationGroupRecord;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContactRequests: SObjectDefinition$ContactRequest;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    Emails: SObjectDefinition$EmailMessage;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    OpenActivities: SObjectDefinition$OpenActivity;
    OpportunityCompetitors: SObjectDefinition$OpportunityCompetitor;
    OpportunityContactRoles: SObjectDefinition$OpportunityContactRole;
    Feeds: SObjectDefinition$OpportunityFeed;
    Histories: SObjectDefinition$OpportunityFieldHistory;
    OpportunityHistories: SObjectDefinition$OpportunityHistory;
    OpportunityLineItems: SObjectDefinition$OpportunityLineItem;
    OpportunityPartnersFrom: SObjectDefinition$OpportunityPartner;
    Shares: SObjectDefinition$OpportunityShare;
    Partners: SObjectDefinition$Partner;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    Tasks: SObjectDefinition$Task;
    TopicAssignments: SObjectDefinition$TopicAssignment;
};
interface SObjectDefinition$Opportunity extends SObjectDefinition<'Opportunity'> {
    Name: 'Opportunity';
    Fields: Fields$Opportunity;
    ParentReferences: ParentReferences$Opportunity;
    ChildRelationships: ChildRelationships$Opportunity;
}
declare type Fields$OpportunityChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    AccountId: string | null;
    Name: string | null;
    Description: string | null;
    StageName: string | null;
    Amount: number | null;
    Probability: number | null;
    CloseDate: DateString | null;
    Type: string | null;
    NextStep: string | null;
    LeadSource: string | null;
    IsClosed: boolean;
    IsWon: boolean;
    ForecastCategory: string | null;
    ForecastCategoryName: string | null;
    CampaignId: string | null;
    HasOpportunityLineItem: boolean;
    Pricebook2Id: string | null;
    OwnerId: string | null;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
};
declare type ParentReferences$OpportunityChangeEvent = {};
declare type ChildRelationships$OpportunityChangeEvent = {};
interface SObjectDefinition$OpportunityChangeEvent extends SObjectDefinition<'OpportunityChangeEvent'> {
    Name: 'OpportunityChangeEvent';
    Fields: Fields$OpportunityChangeEvent;
    ParentReferences: ParentReferences$OpportunityChangeEvent;
    ChildRelationships: ChildRelationships$OpportunityChangeEvent;
}
declare type Fields$OpportunityCompetitor = {
    Id: string;
    OpportunityId: string;
    CompetitorName: string | null;
    Strengths: string | null;
    Weaknesses: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    IsDeleted: boolean;
};
declare type ParentReferences$OpportunityCompetitor = {
    Opportunity: SObjectDefinition$Opportunity;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OpportunityCompetitor = {};
interface SObjectDefinition$OpportunityCompetitor extends SObjectDefinition<'OpportunityCompetitor'> {
    Name: 'OpportunityCompetitor';
    Fields: Fields$OpportunityCompetitor;
    ParentReferences: ParentReferences$OpportunityCompetitor;
    ChildRelationships: ChildRelationships$OpportunityCompetitor;
}
declare type Fields$OpportunityContactRole = {
    Id: string;
    OpportunityId: string;
    ContactId: string;
    Role: string | null;
    IsPrimary: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
};
declare type ParentReferences$OpportunityContactRole = {
    Opportunity: SObjectDefinition$Opportunity;
    Contact: SObjectDefinition$Contact;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OpportunityContactRole = {};
interface SObjectDefinition$OpportunityContactRole extends SObjectDefinition<'OpportunityContactRole'> {
    Name: 'OpportunityContactRole';
    Fields: Fields$OpportunityContactRole;
    ParentReferences: ParentReferences$OpportunityContactRole;
    ChildRelationships: ChildRelationships$OpportunityContactRole;
}
declare type Fields$OpportunityContactRoleChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    OpportunityId: string | null;
    ContactId: string | null;
    Role: string | null;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
};
declare type ParentReferences$OpportunityContactRoleChangeEvent = {};
declare type ChildRelationships$OpportunityContactRoleChangeEvent = {};
interface SObjectDefinition$OpportunityContactRoleChangeEvent extends SObjectDefinition<'OpportunityContactRoleChangeEvent'> {
    Name: 'OpportunityContactRoleChangeEvent';
    Fields: Fields$OpportunityContactRoleChangeEvent;
    ParentReferences: ParentReferences$OpportunityContactRoleChangeEvent;
    ChildRelationships: ChildRelationships$OpportunityContactRoleChangeEvent;
}
declare type Fields$OpportunityFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$OpportunityFeed = {
    Parent: SObjectDefinition$Opportunity;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$OpportunityFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$OpportunityFeed extends SObjectDefinition<'OpportunityFeed'> {
    Name: 'OpportunityFeed';
    Fields: Fields$OpportunityFeed;
    ParentReferences: ParentReferences$OpportunityFeed;
    ChildRelationships: ChildRelationships$OpportunityFeed;
}
declare type Fields$OpportunityFieldHistory = {
    Id: string;
    IsDeleted: boolean;
    OpportunityId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$OpportunityFieldHistory = {
    Opportunity: SObjectDefinition$Opportunity;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OpportunityFieldHistory = {};
interface SObjectDefinition$OpportunityFieldHistory extends SObjectDefinition<'OpportunityFieldHistory'> {
    Name: 'OpportunityFieldHistory';
    Fields: Fields$OpportunityFieldHistory;
    ParentReferences: ParentReferences$OpportunityFieldHistory;
    ChildRelationships: ChildRelationships$OpportunityFieldHistory;
}
declare type Fields$OpportunityHistory = {
    Id: string;
    OpportunityId: string;
    CreatedById: string;
    CreatedDate: DateString;
    StageName: string;
    Amount: number | null;
    ExpectedRevenue: number | null;
    CloseDate: DateString | null;
    Probability: number | null;
    ForecastCategory: string | null;
    SystemModstamp: DateString;
    IsDeleted: boolean;
};
declare type ParentReferences$OpportunityHistory = {
    Opportunity: SObjectDefinition$Opportunity;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OpportunityHistory = {};
interface SObjectDefinition$OpportunityHistory extends SObjectDefinition<'OpportunityHistory'> {
    Name: 'OpportunityHistory';
    Fields: Fields$OpportunityHistory;
    ParentReferences: ParentReferences$OpportunityHistory;
    ChildRelationships: ChildRelationships$OpportunityHistory;
}
declare type Fields$OpportunityLineItem = {
    Id: string;
    OpportunityId: string;
    SortOrder: number | null;
    PricebookEntryId: string | null;
    Product2Id: string | null;
    ProductCode: string | null;
    Name: string | null;
    Quantity: number;
    TotalPrice: number | null;
    UnitPrice: number | null;
    ListPrice: number | null;
    ServiceDate: DateString | null;
    Description: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
};
declare type ParentReferences$OpportunityLineItem = {
    Opportunity: SObjectDefinition$Opportunity;
    PricebookEntry: SObjectDefinition$PricebookEntry | null;
    Product2: SObjectDefinition$Product2 | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OpportunityLineItem = {};
interface SObjectDefinition$OpportunityLineItem extends SObjectDefinition<'OpportunityLineItem'> {
    Name: 'OpportunityLineItem';
    Fields: Fields$OpportunityLineItem;
    ParentReferences: ParentReferences$OpportunityLineItem;
    ChildRelationships: ChildRelationships$OpportunityLineItem;
}
declare type Fields$OpportunityPartner = {
    Id: string;
    OpportunityId: string;
    AccountToId: string;
    Role: string | null;
    IsPrimary: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
    ReversePartnerId: string | null;
};
declare type ParentReferences$OpportunityPartner = {
    Opportunity: SObjectDefinition$Opportunity;
    AccountTo: SObjectDefinition$Account;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OpportunityPartner = {};
interface SObjectDefinition$OpportunityPartner extends SObjectDefinition<'OpportunityPartner'> {
    Name: 'OpportunityPartner';
    Fields: Fields$OpportunityPartner;
    ParentReferences: ParentReferences$OpportunityPartner;
    ChildRelationships: ChildRelationships$OpportunityPartner;
}
declare type Fields$OpportunityShare = {
    Id: string;
    OpportunityId: string;
    UserOrGroupId: string;
    OpportunityAccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$OpportunityShare = {
    Opportunity: SObjectDefinition$Opportunity;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OpportunityShare = {};
interface SObjectDefinition$OpportunityShare extends SObjectDefinition<'OpportunityShare'> {
    Name: 'OpportunityShare';
    Fields: Fields$OpportunityShare;
    ParentReferences: ParentReferences$OpportunityShare;
    ChildRelationships: ChildRelationships$OpportunityShare;
}
declare type Fields$OpportunityStage = {
    Id: string;
    MasterLabel: string | null;
    ApiName: string;
    IsActive: boolean;
    SortOrder: number | null;
    IsClosed: boolean;
    IsWon: boolean;
    ForecastCategory: string;
    ForecastCategoryName: string;
    DefaultProbability: number | null;
    Description: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$OpportunityStage = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OpportunityStage = {};
interface SObjectDefinition$OpportunityStage extends SObjectDefinition<'OpportunityStage'> {
    Name: 'OpportunityStage';
    Fields: Fields$OpportunityStage;
    ParentReferences: ParentReferences$OpportunityStage;
    ChildRelationships: ChildRelationships$OpportunityStage;
}
declare type Fields$Order = {
    Id: string;
    OwnerId: string;
    ContractId: string | null;
    AccountId: string | null;
    Pricebook2Id: string | null;
    OriginalOrderId: string | null;
    EffectiveDate: DateString;
    EndDate: DateString | null;
    IsReductionOrder: boolean;
    Status: string;
    Description: string | null;
    CustomerAuthorizedById: string | null;
    CompanyAuthorizedById: string | null;
    Type: string | null;
    BillingStreet: string | null;
    BillingCity: string | null;
    BillingState: string | null;
    BillingPostalCode: string | null;
    BillingCountry: string | null;
    BillingLatitude: number | null;
    BillingLongitude: number | null;
    BillingGeocodeAccuracy: string | null;
    BillingAddress: Address | null;
    ShippingStreet: string | null;
    ShippingCity: string | null;
    ShippingState: string | null;
    ShippingPostalCode: string | null;
    ShippingCountry: string | null;
    ShippingLatitude: number | null;
    ShippingLongitude: number | null;
    ShippingGeocodeAccuracy: string | null;
    ShippingAddress: Address | null;
    ActivatedDate: DateString | null;
    ActivatedById: string | null;
    StatusCode: string;
    OrderNumber: string;
    TotalAmount: number;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
};
declare type ParentReferences$Order = {
    Owner: SObjectDefinition$Name;
    Contract: SObjectDefinition$Contract | null;
    Account: SObjectDefinition$Account | null;
    Pricebook2: SObjectDefinition$Pricebook2 | null;
    OriginalOrder: SObjectDefinition$Order | null;
    CustomerAuthorizedBy: SObjectDefinition$Contact | null;
    CompanyAuthorizedBy: SObjectDefinition$User | null;
    ActivatedBy: SObjectDefinition$User | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Order = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    Emails: SObjectDefinition$EmailMessage;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    OpenActivities: SObjectDefinition$OpenActivity;
    Orders: SObjectDefinition$Order;
    Feeds: SObjectDefinition$OrderFeed;
    Histories: SObjectDefinition$OrderHistory;
    OrderItems: SObjectDefinition$OrderItem;
    Shares: SObjectDefinition$OrderShare;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    Tasks: SObjectDefinition$Task;
    TopicAssignments: SObjectDefinition$TopicAssignment;
    WorkOrderLineItems: SObjectDefinition$WorkOrderLineItem;
};
interface SObjectDefinition$Order extends SObjectDefinition<'Order'> {
    Name: 'Order';
    Fields: Fields$Order;
    ParentReferences: ParentReferences$Order;
    ChildRelationships: ChildRelationships$Order;
}
declare type Fields$OrderChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    OwnerId: string | null;
    ContractId: string | null;
    AccountId: string | null;
    Pricebook2Id: string | null;
    OriginalOrderId: string | null;
    EffectiveDate: DateString | null;
    EndDate: DateString | null;
    IsReductionOrder: boolean;
    Status: string | null;
    Description: string | null;
    CustomerAuthorizedById: string | null;
    CompanyAuthorizedById: string | null;
    Type: string | null;
    BillingStreet: string | null;
    BillingCity: string | null;
    BillingState: string | null;
    BillingPostalCode: string | null;
    BillingCountry: string | null;
    BillingLatitude: number | null;
    BillingLongitude: number | null;
    BillingGeocodeAccuracy: string | null;
    BillingAddress: Address | null;
    ShippingStreet: string | null;
    ShippingCity: string | null;
    ShippingState: string | null;
    ShippingPostalCode: string | null;
    ShippingCountry: string | null;
    ShippingLatitude: number | null;
    ShippingLongitude: number | null;
    ShippingGeocodeAccuracy: string | null;
    ShippingAddress: Address | null;
    ActivatedDate: DateString | null;
    ActivatedById: string | null;
    StatusCode: string | null;
    OrderNumber: string;
    TotalAmount: number | null;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
};
declare type ParentReferences$OrderChangeEvent = {};
declare type ChildRelationships$OrderChangeEvent = {};
interface SObjectDefinition$OrderChangeEvent extends SObjectDefinition<'OrderChangeEvent'> {
    Name: 'OrderChangeEvent';
    Fields: Fields$OrderChangeEvent;
    ParentReferences: ParentReferences$OrderChangeEvent;
    ChildRelationships: ChildRelationships$OrderChangeEvent;
}
declare type Fields$OrderFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$OrderFeed = {
    Parent: SObjectDefinition$Order;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$OrderFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$OrderFeed extends SObjectDefinition<'OrderFeed'> {
    Name: 'OrderFeed';
    Fields: Fields$OrderFeed;
    ParentReferences: ParentReferences$OrderFeed;
    ChildRelationships: ChildRelationships$OrderFeed;
}
declare type Fields$OrderHistory = {
    Id: string;
    IsDeleted: boolean;
    OrderId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$OrderHistory = {
    Order: SObjectDefinition$Order;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OrderHistory = {};
interface SObjectDefinition$OrderHistory extends SObjectDefinition<'OrderHistory'> {
    Name: 'OrderHistory';
    Fields: Fields$OrderHistory;
    ParentReferences: ParentReferences$OrderHistory;
    ChildRelationships: ChildRelationships$OrderHistory;
}
declare type Fields$OrderItem = {
    Id: string;
    Product2Id: string | null;
    IsDeleted: boolean;
    OrderId: string;
    PricebookEntryId: string;
    OriginalOrderItemId: string | null;
    AvailableQuantity: number | null;
    Quantity: number;
    UnitPrice: number | null;
    ListPrice: number | null;
    TotalPrice: number | null;
    ServiceDate: DateString | null;
    EndDate: DateString | null;
    Description: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    OrderItemNumber: string;
};
declare type ParentReferences$OrderItem = {
    Product2: SObjectDefinition$Product2 | null;
    Order: SObjectDefinition$Order;
    PricebookEntry: SObjectDefinition$PricebookEntry;
    OriginalOrderItem: SObjectDefinition$OrderItem | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OrderItem = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    ChildOrderItems: SObjectDefinition$OrderItem;
    Feeds: SObjectDefinition$OrderItemFeed;
    Histories: SObjectDefinition$OrderItemHistory;
};
interface SObjectDefinition$OrderItem extends SObjectDefinition<'OrderItem'> {
    Name: 'OrderItem';
    Fields: Fields$OrderItem;
    ParentReferences: ParentReferences$OrderItem;
    ChildRelationships: ChildRelationships$OrderItem;
}
declare type Fields$OrderItemChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    OrderId: string | null;
    PricebookEntryId: string | null;
    OriginalOrderItemId: string | null;
    AvailableQuantity: number | null;
    Quantity: number | null;
    UnitPrice: number | null;
    ListPrice: number | null;
    ServiceDate: DateString | null;
    EndDate: DateString | null;
    Description: string | null;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    OrderItemNumber: string;
};
declare type ParentReferences$OrderItemChangeEvent = {};
declare type ChildRelationships$OrderItemChangeEvent = {};
interface SObjectDefinition$OrderItemChangeEvent extends SObjectDefinition<'OrderItemChangeEvent'> {
    Name: 'OrderItemChangeEvent';
    Fields: Fields$OrderItemChangeEvent;
    ParentReferences: ParentReferences$OrderItemChangeEvent;
    ChildRelationships: ChildRelationships$OrderItemChangeEvent;
}
declare type Fields$OrderItemFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$OrderItemFeed = {
    Parent: SObjectDefinition$OrderItem;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$OrderItemFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$OrderItemFeed extends SObjectDefinition<'OrderItemFeed'> {
    Name: 'OrderItemFeed';
    Fields: Fields$OrderItemFeed;
    ParentReferences: ParentReferences$OrderItemFeed;
    ChildRelationships: ChildRelationships$OrderItemFeed;
}
declare type Fields$OrderItemHistory = {
    Id: string;
    IsDeleted: boolean;
    OrderItemId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$OrderItemHistory = {
    OrderItem: SObjectDefinition$OrderItem;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OrderItemHistory = {};
interface SObjectDefinition$OrderItemHistory extends SObjectDefinition<'OrderItemHistory'> {
    Name: 'OrderItemHistory';
    Fields: Fields$OrderItemHistory;
    ParentReferences: ParentReferences$OrderItemHistory;
    ChildRelationships: ChildRelationships$OrderItemHistory;
}
declare type Fields$OrderShare = {
    Id: string;
    OrderId: string;
    UserOrGroupId: string;
    OrderAccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$OrderShare = {
    Order: SObjectDefinition$Order;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OrderShare = {};
interface SObjectDefinition$OrderShare extends SObjectDefinition<'OrderShare'> {
    Name: 'OrderShare';
    Fields: Fields$OrderShare;
    ParentReferences: ParentReferences$OrderShare;
    ChildRelationships: ChildRelationships$OrderShare;
}
declare type Fields$OrgLifecycleNotification = {
    ReplayId: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LifecycleRequestType: string | null;
    LifecycleRequestId: string | null;
    OrgId: string | null;
    Status: string | null;
    StatusCode: string | null;
};
declare type ParentReferences$OrgLifecycleNotification = {
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OrgLifecycleNotification = {};
interface SObjectDefinition$OrgLifecycleNotification extends SObjectDefinition<'OrgLifecycleNotification'> {
    Name: 'OrgLifecycleNotification';
    Fields: Fields$OrgLifecycleNotification;
    ParentReferences: ParentReferences$OrgLifecycleNotification;
    ChildRelationships: ChildRelationships$OrgLifecycleNotification;
}
declare type Fields$OrgWideEmailAddress = {
    Id: string;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Address: string;
    DisplayName: string;
    IsAllowAllProfiles: boolean;
};
declare type ParentReferences$OrgWideEmailAddress = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OrgWideEmailAddress = {};
interface SObjectDefinition$OrgWideEmailAddress extends SObjectDefinition<'OrgWideEmailAddress'> {
    Name: 'OrgWideEmailAddress';
    Fields: Fields$OrgWideEmailAddress;
    ParentReferences: ParentReferences$OrgWideEmailAddress;
    ChildRelationships: ChildRelationships$OrgWideEmailAddress;
}
declare type Fields$Organization = {
    Id: string;
    Name: string;
    Division: string | null;
    Street: string | null;
    City: string | null;
    State: string | null;
    PostalCode: string | null;
    Country: string | null;
    Latitude: number | null;
    Longitude: number | null;
    GeocodeAccuracy: string | null;
    Address: Address | null;
    Phone: string | null;
    Fax: string | null;
    PrimaryContact: string | null;
    DefaultLocaleSidKey: string;
    TimeZoneSidKey: string;
    LanguageLocaleKey: string;
    ReceivesInfoEmails: boolean;
    ReceivesAdminInfoEmails: boolean;
    PreferencesRequireOpportunityProducts: boolean;
    PreferencesConsentManagementEnabled: boolean;
    PreferencesIndividualAutoCreateEnabled: boolean;
    PreferencesAutoSelectIndividualOnMerge: boolean;
    PreferencesLightningLoginEnabled: boolean;
    PreferencesOnlyLLPermUserAllowed: boolean;
    FiscalYearStartMonth: number | null;
    UsesStartDateAsFiscalYearName: boolean;
    DefaultAccountAccess: string | null;
    DefaultContactAccess: string | null;
    DefaultOpportunityAccess: string | null;
    DefaultLeadAccess: string | null;
    DefaultCaseAccess: string | null;
    DefaultCalendarAccess: string | null;
    DefaultPricebookAccess: string | null;
    DefaultCampaignAccess: string | null;
    SystemModstamp: DateString;
    ComplianceBccEmail: string | null;
    UiSkin: string | null;
    SignupCountryIsoCode: string | null;
    TrialExpirationDate: DateString | null;
    NumKnowledgeService: number | null;
    OrganizationType: string | null;
    NamespacePrefix: string | null;
    InstanceName: string | null;
    IsSandbox: boolean;
    WebToCaseDefaultOrigin: string | null;
    MonthlyPageViewsUsed: number | null;
    MonthlyPageViewsEntitlement: number | null;
    IsReadOnly: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
};
declare type ParentReferences$Organization = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Organization = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    CustomBrands: SObjectDefinition$CustomBrand;
};
interface SObjectDefinition$Organization extends SObjectDefinition<'Organization'> {
    Name: 'Organization';
    Fields: Fields$Organization;
    ParentReferences: ParentReferences$Organization;
    ChildRelationships: ChildRelationships$Organization;
}
declare type Fields$OutgoingEmail = {
    Id: string;
    ExternalId: string | null;
    ValidatedFromAddress: string | null;
    ToAddress: string | null;
    CcAddress: string | null;
    BccAddress: string | null;
    Subject: string | null;
    TextBody: string | null;
    HtmlBody: string | null;
    RelatedToId: string | null;
    WhoId: string | null;
    EmailTemplateId: string | null;
};
declare type ParentReferences$OutgoingEmail = {
    RelatedTo: SObjectDefinition$Name | null;
    Who: SObjectDefinition$Name | null;
    EmailTemplate: SObjectDefinition$EmailTemplate | null;
};
declare type ChildRelationships$OutgoingEmail = {
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    OutgoingEmailRelations: SObjectDefinition$OutgoingEmailRelation;
};
interface SObjectDefinition$OutgoingEmail extends SObjectDefinition<'OutgoingEmail'> {
    Name: 'OutgoingEmail';
    Fields: Fields$OutgoingEmail;
    ParentReferences: ParentReferences$OutgoingEmail;
    ChildRelationships: ChildRelationships$OutgoingEmail;
}
declare type Fields$OutgoingEmailRelation = {
    Id: string;
    ExternalId: string | null;
    OutgoingEmailId: string | null;
    RelationId: string | null;
    RelationAddress: string | null;
};
declare type ParentReferences$OutgoingEmailRelation = {
    Relation: SObjectDefinition$Name | null;
};
declare type ChildRelationships$OutgoingEmailRelation = {};
interface SObjectDefinition$OutgoingEmailRelation extends SObjectDefinition<'OutgoingEmailRelation'> {
    Name: 'OutgoingEmailRelation';
    Fields: Fields$OutgoingEmailRelation;
    ParentReferences: ParentReferences$OutgoingEmailRelation;
    ChildRelationships: ChildRelationships$OutgoingEmailRelation;
}
declare type Fields$OwnedContentDocument = {
    Id: string;
    IsDeleted: boolean;
    OwnerId: string;
    ContentDocumentId: string | null;
    Title: string;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    FileType: string | null;
    ContentSize: number | null;
    FileExtension: string | null;
    ContentUrl: string | null;
    ExternalDataSourceName: string | null;
    ExternalDataSourceType: string | null;
};
declare type ParentReferences$OwnedContentDocument = {
    Owner: SObjectDefinition$User;
    ContentDocument: SObjectDefinition$ContentDocument | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$OwnedContentDocument = {};
interface SObjectDefinition$OwnedContentDocument extends SObjectDefinition<'OwnedContentDocument'> {
    Name: 'OwnedContentDocument';
    Fields: Fields$OwnedContentDocument;
    ParentReferences: ParentReferences$OwnedContentDocument;
    ChildRelationships: ChildRelationships$OwnedContentDocument;
}
declare type Fields$OwnerChangeOptionInfo = {
    Id: string;
    DurableId: string | null;
    EntityDefinitionId: string | null;
    Name: string | null;
    Label: string | null;
    IsEditable: boolean;
    DefaultValue: boolean;
};
declare type ParentReferences$OwnerChangeOptionInfo = {};
declare type ChildRelationships$OwnerChangeOptionInfo = {};
interface SObjectDefinition$OwnerChangeOptionInfo extends SObjectDefinition<'OwnerChangeOptionInfo'> {
    Name: 'OwnerChangeOptionInfo';
    Fields: Fields$OwnerChangeOptionInfo;
    ParentReferences: ParentReferences$OwnerChangeOptionInfo;
    ChildRelationships: ChildRelationships$OwnerChangeOptionInfo;
}
declare type Fields$PackageLicense = {
    Id: string;
    Status: string;
    IsProvisioned: boolean;
    AllowedLicenses: number;
    UsedLicenses: number;
    ExpirationDate: DateString | null;
    CreatedDate: DateString;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    NamespacePrefix: string;
};
declare type ParentReferences$PackageLicense = {};
declare type ChildRelationships$PackageLicense = {};
interface SObjectDefinition$PackageLicense extends SObjectDefinition<'PackageLicense'> {
    Name: 'PackageLicense';
    Fields: Fields$PackageLicense;
    ParentReferences: ParentReferences$PackageLicense;
    ChildRelationships: ChildRelationships$PackageLicense;
}
declare type Fields$Partner = {
    Id: string;
    OpportunityId: string | null;
    AccountFromId: string | null;
    AccountToId: string;
    Role: string | null;
    IsPrimary: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
    ReversePartnerId: string | null;
};
declare type ParentReferences$Partner = {
    Opportunity: SObjectDefinition$Opportunity | null;
    AccountFrom: SObjectDefinition$Account | null;
    AccountTo: SObjectDefinition$Account;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Partner = {};
interface SObjectDefinition$Partner extends SObjectDefinition<'Partner'> {
    Name: 'Partner';
    Fields: Fields$Partner;
    ParentReferences: ParentReferences$Partner;
    ChildRelationships: ChildRelationships$Partner;
}
declare type Fields$PartnerRole = {
    Id: string;
    MasterLabel: string | null;
    ApiName: string;
    SortOrder: number | null;
    ReverseRole: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$PartnerRole = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$PartnerRole = {};
interface SObjectDefinition$PartnerRole extends SObjectDefinition<'PartnerRole'> {
    Name: 'PartnerRole';
    Fields: Fields$PartnerRole;
    ParentReferences: ParentReferences$PartnerRole;
    ChildRelationships: ChildRelationships$PartnerRole;
}
declare type Fields$Period = {
    Id: string;
    FiscalYearSettingsId: string | null;
    Type: string | null;
    StartDate: DateString;
    EndDate: DateString;
    SystemModstamp: DateString;
    IsForecastPeriod: boolean;
    QuarterLabel: string | null;
    PeriodLabel: string | null;
    Number: number | null;
    FullyQualifiedLabel: string | null;
};
declare type ParentReferences$Period = {
    FiscalYearSettings: SObjectDefinition$FiscalYearSettings | null;
};
declare type ChildRelationships$Period = {};
interface SObjectDefinition$Period extends SObjectDefinition<'Period'> {
    Name: 'Period';
    Fields: Fields$Period;
    ParentReferences: ParentReferences$Period;
    ChildRelationships: ChildRelationships$Period;
}
declare type Fields$PermissionSet = {
    Id: string;
    Name: string;
    Label: string;
    LicenseId: string | null;
    ProfileId: string | null;
    IsOwnedByProfile: boolean;
    IsCustom: boolean;
    PermissionsEmailSingle: boolean;
    PermissionsEmailMass: boolean;
    PermissionsEditTask: boolean;
    PermissionsEditEvent: boolean;
    PermissionsExportReport: boolean;
    PermissionsImportPersonal: boolean;
    PermissionsDataExport: boolean;
    PermissionsManageUsers: boolean;
    PermissionsEditPublicFilters: boolean;
    PermissionsEditPublicTemplates: boolean;
    PermissionsModifyAllData: boolean;
    PermissionsManageCases: boolean;
    PermissionsMassInlineEdit: boolean;
    PermissionsEditKnowledge: boolean;
    PermissionsManageKnowledge: boolean;
    PermissionsManageSolutions: boolean;
    PermissionsCustomizeApplication: boolean;
    PermissionsEditReadonlyFields: boolean;
    PermissionsRunReports: boolean;
    PermissionsViewSetup: boolean;
    PermissionsTransferAnyEntity: boolean;
    PermissionsNewReportBuilder: boolean;
    PermissionsManageCssUsers: boolean;
    PermissionsActivateContract: boolean;
    PermissionsActivateOrder: boolean;
    PermissionsImportLeads: boolean;
    PermissionsManageLeads: boolean;
    PermissionsTransferAnyLead: boolean;
    PermissionsViewAllData: boolean;
    PermissionsEditPublicDocuments: boolean;
    PermissionsViewEncryptedData: boolean;
    PermissionsEditBrandTemplates: boolean;
    PermissionsEditHtmlTemplates: boolean;
    PermissionsChatterInternalUser: boolean;
    PermissionsDeleteActivatedContract: boolean;
    PermissionsChatterInviteExternalUsers: boolean;
    PermissionsSendSitRequests: boolean;
    PermissionsApiUserOnly: boolean;
    PermissionsManageRemoteAccess: boolean;
    PermissionsCanUseNewDashboardBuilder: boolean;
    PermissionsManageCategories: boolean;
    PermissionsConvertLeads: boolean;
    PermissionsPasswordNeverExpires: boolean;
    PermissionsUseTeamReassignWizards: boolean;
    PermissionsEditActivatedOrders: boolean;
    PermissionsInstallPackaging: boolean;
    PermissionsChatterOwnGroups: boolean;
    PermissionsEditOppLineItemUnitPrice: boolean;
    PermissionsBulkApiHardDelete: boolean;
    PermissionsInboundMigrationToolsUser: boolean;
    PermissionsSolutionImport: boolean;
    PermissionsManageCallCenters: boolean;
    PermissionsPortalSuperUser: boolean;
    PermissionsManageSynonyms: boolean;
    PermissionsOutboundMigrationToolsUser: boolean;
    PermissionsDelegatedPortalUserAdmin: boolean;
    PermissionsViewContent: boolean;
    PermissionsManageEmailClientConfig: boolean;
    PermissionsEnableNotifications: boolean;
    PermissionsManageDataIntegrations: boolean;
    PermissionsDistributeFromPersWksp: boolean;
    PermissionsViewDataCategories: boolean;
    PermissionsManageDataCategories: boolean;
    PermissionsAuthorApex: boolean;
    PermissionsManageMobile: boolean;
    PermissionsApiEnabled: boolean;
    PermissionsManageCustomReportTypes: boolean;
    PermissionsEditCaseComments: boolean;
    PermissionsTransferAnyCase: boolean;
    PermissionsContentAdministrator: boolean;
    PermissionsCreateWorkspaces: boolean;
    PermissionsManageContentPermissions: boolean;
    PermissionsManageContentProperties: boolean;
    PermissionsManageContentTypes: boolean;
    PermissionsScheduleJob: boolean;
    PermissionsManageExchangeConfig: boolean;
    PermissionsManageAnalyticSnapshots: boolean;
    PermissionsScheduleReports: boolean;
    PermissionsManageBusinessHourHolidays: boolean;
    PermissionsManageEntitlements: boolean;
    PermissionsManageInteraction: boolean;
    PermissionsViewMyTeamsDashboards: boolean;
    PermissionsModerateChatter: boolean;
    PermissionsResetPasswords: boolean;
    PermissionsFlowUFLRequired: boolean;
    PermissionsCanInsertFeedSystemFields: boolean;
    PermissionsManageKnowledgeImportExport: boolean;
    PermissionsEmailTemplateManagement: boolean;
    PermissionsEmailAdministration: boolean;
    PermissionsManageChatterMessages: boolean;
    PermissionsAllowEmailIC: boolean;
    PermissionsChatterFileLink: boolean;
    PermissionsForceTwoFactor: boolean;
    PermissionsViewEventLogFiles: boolean;
    PermissionsManageNetworks: boolean;
    PermissionsViewCaseInteraction: boolean;
    PermissionsManageAuthProviders: boolean;
    PermissionsRunFlow: boolean;
    PermissionsCreateCustomizeDashboards: boolean;
    PermissionsCreateDashboardFolders: boolean;
    PermissionsViewPublicDashboards: boolean;
    PermissionsManageDashbdsInPubFolders: boolean;
    PermissionsCreateCustomizeReports: boolean;
    PermissionsCreateReportFolders: boolean;
    PermissionsViewPublicReports: boolean;
    PermissionsManageReportsInPubFolders: boolean;
    PermissionsEditMyDashboards: boolean;
    PermissionsEditMyReports: boolean;
    PermissionsViewAllUsers: boolean;
    PermissionsBypassEmailApproval: boolean;
    PermissionsAllowUniversalSearch: boolean;
    PermissionsConnectOrgToEnvironmentHub: boolean;
    PermissionsCreateCustomizeFilters: boolean;
    PermissionsContentHubUser: boolean;
    PermissionsGovernNetworks: boolean;
    PermissionsSalesConsole: boolean;
    PermissionsTwoFactorApi: boolean;
    PermissionsDeleteTopics: boolean;
    PermissionsEditTopics: boolean;
    PermissionsCreateTopics: boolean;
    PermissionsAssignTopics: boolean;
    PermissionsIdentityEnabled: boolean;
    PermissionsIdentityConnect: boolean;
    PermissionsAllowViewKnowledge: boolean;
    PermissionsContentWorkspaces: boolean;
    PermissionsCreateWorkBadgeDefinition: boolean;
    PermissionsManageSearchPromotionRules: boolean;
    PermissionsCustomMobileAppsAccess: boolean;
    PermissionsViewHelpLink: boolean;
    PermissionsManageProfilesPermissionsets: boolean;
    PermissionsAssignPermissionSets: boolean;
    PermissionsManageRoles: boolean;
    PermissionsManageIpAddresses: boolean;
    PermissionsManageSharing: boolean;
    PermissionsManageInternalUsers: boolean;
    PermissionsManagePasswordPolicies: boolean;
    PermissionsManageLoginAccessPolicies: boolean;
    PermissionsManageCustomPermissions: boolean;
    PermissionsCanVerifyComment: boolean;
    PermissionsManageUnlistedGroups: boolean;
    PermissionsInsightsAppDashboardEditor: boolean;
    PermissionsManageTwoFactor: boolean;
    PermissionsInsightsAppUser: boolean;
    PermissionsInsightsAppAdmin: boolean;
    PermissionsInsightsAppEltEditor: boolean;
    PermissionsInsightsAppUploadUser: boolean;
    PermissionsInsightsCreateApplication: boolean;
    PermissionsLightningExperienceUser: boolean;
    PermissionsConfigCustomRecs: boolean;
    PermissionsSubmitMacrosAllowed: boolean;
    PermissionsBulkMacrosAllowed: boolean;
    PermissionsShareInternalArticles: boolean;
    PermissionsManageSessionPermissionSets: boolean;
    PermissionsManageTemplatedApp: boolean;
    PermissionsUseTemplatedApp: boolean;
    PermissionsSendAnnouncementEmails: boolean;
    PermissionsChatterEditOwnPost: boolean;
    PermissionsChatterEditOwnRecordPost: boolean;
    PermissionsWaveTrendReports: boolean;
    PermissionsWaveTabularDownload: boolean;
    PermissionsImportCustomObjects: boolean;
    PermissionsDelegatedTwoFactor: boolean;
    PermissionsChatterComposeUiCodesnippet: boolean;
    PermissionsSelectFilesFromSalesforce: boolean;
    PermissionsModerateNetworkUsers: boolean;
    PermissionsMergeTopics: boolean;
    PermissionsSubscribeToLightningReports: boolean;
    PermissionsManagePvtRptsAndDashbds: boolean;
    PermissionsAllowLightningLogin: boolean;
    PermissionsCampaignInfluence2: boolean;
    PermissionsViewDataAssessment: boolean;
    PermissionsRemoveDirectMessageMembers: boolean;
    PermissionsCanApproveFeedPost: boolean;
    PermissionsAddDirectMessageMembers: boolean;
    PermissionsAllowViewEditConvertedLeads: boolean;
    PermissionsShowCompanyNameAsUserBadge: boolean;
    PermissionsAccessCMC: boolean;
    PermissionsViewHealthCheck: boolean;
    PermissionsManageHealthCheck: boolean;
    PermissionsPackaging2: boolean;
    PermissionsManageCertificates: boolean;
    PermissionsCreateReportInLightning: boolean;
    PermissionsPreventClassicExperience: boolean;
    PermissionsHideReadByList: boolean;
    PermissionsListEmailSend: boolean;
    PermissionsFeedPinning: boolean;
    PermissionsChangeDashboardColors: boolean;
    PermissionsIotUser: boolean;
    PermissionsManageRecommendationStrategies: boolean;
    PermissionsManagePropositions: boolean;
    PermissionsCloseConversations: boolean;
    PermissionsUseWebLink: boolean;
    PermissionsViewOnlyEmbeddedAppUser: boolean;
    PermissionsViewAllActivities: boolean;
    PermissionsSubscribeReportToOtherUsers: boolean;
    PermissionsLightningConsoleAllowedForUser: boolean;
    PermissionsSubscribeReportsRunAsUser: boolean;
    PermissionsSubscribeToLightningDashboards: boolean;
    PermissionsSubscribeDashboardToOtherUsers: boolean;
    PermissionsApexRestServices: boolean;
    PermissionsEnableCommunityAppLauncher: boolean;
    PermissionsLtngPromoReserved01UserPerm: boolean;
    PermissionsCanEditDataPrepRecipe: boolean;
    PermissionsAddAnalyticsRemoteConnections: boolean;
    PermissionsManageSurveys: boolean;
    PermissionsRecordVisibilityAPI: boolean;
    PermissionsViewRoles: boolean;
    PermissionsModifyMetadata: boolean;
    Description: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    NamespacePrefix: string | null;
    HasActivationRequired: boolean;
};
declare type ParentReferences$PermissionSet = {
    License: SObjectDefinition$Name | null;
    Profile: SObjectDefinition$Profile | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$PermissionSet = {
    FieldPerms: SObjectDefinition$FieldPermissions;
    ObjectPerms: SObjectDefinition$ObjectPermissions;
    Assignments: SObjectDefinition$PermissionSetAssignment;
    SessionActivations: SObjectDefinition$SessionPermSetActivation;
    SetupEntityAccessItems: SObjectDefinition$SetupEntityAccess;
};
interface SObjectDefinition$PermissionSet extends SObjectDefinition<'PermissionSet'> {
    Name: 'PermissionSet';
    Fields: Fields$PermissionSet;
    ParentReferences: ParentReferences$PermissionSet;
    ChildRelationships: ChildRelationships$PermissionSet;
}
declare type Fields$PermissionSetAssignment = {
    Id: string;
    PermissionSetId: string | null;
    AssigneeId: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$PermissionSetAssignment = {
    PermissionSet: SObjectDefinition$PermissionSet | null;
    Assignee: SObjectDefinition$User;
};
declare type ChildRelationships$PermissionSetAssignment = {};
interface SObjectDefinition$PermissionSetAssignment extends SObjectDefinition<'PermissionSetAssignment'> {
    Name: 'PermissionSetAssignment';
    Fields: Fields$PermissionSetAssignment;
    ParentReferences: ParentReferences$PermissionSetAssignment;
    ChildRelationships: ChildRelationships$PermissionSetAssignment;
}
declare type Fields$PermissionSetLicense = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string;
    MasterLabel: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    PermissionSetLicenseKey: string;
    TotalLicenses: number;
    Status: string;
    ExpirationDate: DateString | null;
    MaximumPermissionsEmailSingle: boolean;
    MaximumPermissionsEmailMass: boolean;
    MaximumPermissionsEditTask: boolean;
    MaximumPermissionsEditEvent: boolean;
    MaximumPermissionsExportReport: boolean;
    MaximumPermissionsImportPersonal: boolean;
    MaximumPermissionsDataExport: boolean;
    MaximumPermissionsManageUsers: boolean;
    MaximumPermissionsEditPublicFilters: boolean;
    MaximumPermissionsEditPublicTemplates: boolean;
    MaximumPermissionsModifyAllData: boolean;
    MaximumPermissionsManageCases: boolean;
    MaximumPermissionsMassInlineEdit: boolean;
    MaximumPermissionsEditKnowledge: boolean;
    MaximumPermissionsManageKnowledge: boolean;
    MaximumPermissionsManageSolutions: boolean;
    MaximumPermissionsCustomizeApplication: boolean;
    MaximumPermissionsEditReadonlyFields: boolean;
    MaximumPermissionsRunReports: boolean;
    MaximumPermissionsViewSetup: boolean;
    MaximumPermissionsTransferAnyEntity: boolean;
    MaximumPermissionsNewReportBuilder: boolean;
    MaximumPermissionsManageCssUsers: boolean;
    MaximumPermissionsActivateContract: boolean;
    MaximumPermissionsActivateOrder: boolean;
    MaximumPermissionsImportLeads: boolean;
    MaximumPermissionsManageLeads: boolean;
    MaximumPermissionsTransferAnyLead: boolean;
    MaximumPermissionsViewAllData: boolean;
    MaximumPermissionsEditPublicDocuments: boolean;
    MaximumPermissionsViewEncryptedData: boolean;
    MaximumPermissionsEditBrandTemplates: boolean;
    MaximumPermissionsEditHtmlTemplates: boolean;
    MaximumPermissionsChatterInternalUser: boolean;
    MaximumPermissionsDeleteActivatedContract: boolean;
    MaximumPermissionsChatterInviteExternalUsers: boolean;
    MaximumPermissionsSendSitRequests: boolean;
    MaximumPermissionsApiUserOnly: boolean;
    MaximumPermissionsManageRemoteAccess: boolean;
    MaximumPermissionsCanUseNewDashboardBuilder: boolean;
    MaximumPermissionsManageCategories: boolean;
    MaximumPermissionsConvertLeads: boolean;
    MaximumPermissionsPasswordNeverExpires: boolean;
    MaximumPermissionsUseTeamReassignWizards: boolean;
    MaximumPermissionsEditActivatedOrders: boolean;
    MaximumPermissionsInstallPackaging: boolean;
    MaximumPermissionsChatterOwnGroups: boolean;
    MaximumPermissionsEditOppLineItemUnitPrice: boolean;
    MaximumPermissionsBulkApiHardDelete: boolean;
    MaximumPermissionsInboundMigrationToolsUser: boolean;
    MaximumPermissionsSolutionImport: boolean;
    MaximumPermissionsManageCallCenters: boolean;
    MaximumPermissionsPortalSuperUser: boolean;
    MaximumPermissionsManageSynonyms: boolean;
    MaximumPermissionsOutboundMigrationToolsUser: boolean;
    MaximumPermissionsDelegatedPortalUserAdmin: boolean;
    MaximumPermissionsViewContent: boolean;
    MaximumPermissionsManageEmailClientConfig: boolean;
    MaximumPermissionsEnableNotifications: boolean;
    MaximumPermissionsManageDataIntegrations: boolean;
    MaximumPermissionsDistributeFromPersWksp: boolean;
    MaximumPermissionsViewDataCategories: boolean;
    MaximumPermissionsManageDataCategories: boolean;
    MaximumPermissionsAuthorApex: boolean;
    MaximumPermissionsManageMobile: boolean;
    MaximumPermissionsApiEnabled: boolean;
    MaximumPermissionsManageCustomReportTypes: boolean;
    MaximumPermissionsEditCaseComments: boolean;
    MaximumPermissionsTransferAnyCase: boolean;
    MaximumPermissionsContentAdministrator: boolean;
    MaximumPermissionsCreateWorkspaces: boolean;
    MaximumPermissionsManageContentPermissions: boolean;
    MaximumPermissionsManageContentProperties: boolean;
    MaximumPermissionsManageContentTypes: boolean;
    MaximumPermissionsScheduleJob: boolean;
    MaximumPermissionsManageExchangeConfig: boolean;
    MaximumPermissionsManageAnalyticSnapshots: boolean;
    MaximumPermissionsScheduleReports: boolean;
    MaximumPermissionsManageBusinessHourHolidays: boolean;
    MaximumPermissionsManageEntitlements: boolean;
    MaximumPermissionsManageInteraction: boolean;
    MaximumPermissionsViewMyTeamsDashboards: boolean;
    MaximumPermissionsModerateChatter: boolean;
    MaximumPermissionsResetPasswords: boolean;
    MaximumPermissionsFlowUFLRequired: boolean;
    MaximumPermissionsCanInsertFeedSystemFields: boolean;
    MaximumPermissionsManageKnowledgeImportExport: boolean;
    MaximumPermissionsEmailTemplateManagement: boolean;
    MaximumPermissionsEmailAdministration: boolean;
    MaximumPermissionsManageChatterMessages: boolean;
    MaximumPermissionsAllowEmailIC: boolean;
    MaximumPermissionsChatterFileLink: boolean;
    MaximumPermissionsForceTwoFactor: boolean;
    MaximumPermissionsViewEventLogFiles: boolean;
    MaximumPermissionsManageNetworks: boolean;
    MaximumPermissionsViewCaseInteraction: boolean;
    MaximumPermissionsManageAuthProviders: boolean;
    MaximumPermissionsRunFlow: boolean;
    MaximumPermissionsCreateCustomizeDashboards: boolean;
    MaximumPermissionsCreateDashboardFolders: boolean;
    MaximumPermissionsViewPublicDashboards: boolean;
    MaximumPermissionsManageDashbdsInPubFolders: boolean;
    MaximumPermissionsCreateCustomizeReports: boolean;
    MaximumPermissionsCreateReportFolders: boolean;
    MaximumPermissionsViewPublicReports: boolean;
    MaximumPermissionsManageReportsInPubFolders: boolean;
    MaximumPermissionsEditMyDashboards: boolean;
    MaximumPermissionsEditMyReports: boolean;
    MaximumPermissionsViewAllUsers: boolean;
    MaximumPermissionsBypassEmailApproval: boolean;
    MaximumPermissionsAllowUniversalSearch: boolean;
    MaximumPermissionsConnectOrgToEnvironmentHub: boolean;
    MaximumPermissionsCreateCustomizeFilters: boolean;
    MaximumPermissionsContentHubUser: boolean;
    MaximumPermissionsGovernNetworks: boolean;
    MaximumPermissionsSalesConsole: boolean;
    MaximumPermissionsTwoFactorApi: boolean;
    MaximumPermissionsDeleteTopics: boolean;
    MaximumPermissionsEditTopics: boolean;
    MaximumPermissionsCreateTopics: boolean;
    MaximumPermissionsAssignTopics: boolean;
    MaximumPermissionsIdentityEnabled: boolean;
    MaximumPermissionsIdentityConnect: boolean;
    MaximumPermissionsAllowViewKnowledge: boolean;
    MaximumPermissionsContentWorkspaces: boolean;
    MaximumPermissionsCreateWorkBadgeDefinition: boolean;
    MaximumPermissionsManageSearchPromotionRules: boolean;
    MaximumPermissionsCustomMobileAppsAccess: boolean;
    MaximumPermissionsViewHelpLink: boolean;
    MaximumPermissionsManageProfilesPermissionsets: boolean;
    MaximumPermissionsAssignPermissionSets: boolean;
    MaximumPermissionsManageRoles: boolean;
    MaximumPermissionsManageIpAddresses: boolean;
    MaximumPermissionsManageSharing: boolean;
    MaximumPermissionsManageInternalUsers: boolean;
    MaximumPermissionsManagePasswordPolicies: boolean;
    MaximumPermissionsManageLoginAccessPolicies: boolean;
    MaximumPermissionsManageCustomPermissions: boolean;
    MaximumPermissionsCanVerifyComment: boolean;
    MaximumPermissionsManageUnlistedGroups: boolean;
    MaximumPermissionsInsightsAppDashboardEditor: boolean;
    MaximumPermissionsManageTwoFactor: boolean;
    MaximumPermissionsInsightsAppUser: boolean;
    MaximumPermissionsInsightsAppAdmin: boolean;
    MaximumPermissionsInsightsAppEltEditor: boolean;
    MaximumPermissionsInsightsAppUploadUser: boolean;
    MaximumPermissionsInsightsCreateApplication: boolean;
    MaximumPermissionsLightningExperienceUser: boolean;
    MaximumPermissionsConfigCustomRecs: boolean;
    MaximumPermissionsSubmitMacrosAllowed: boolean;
    MaximumPermissionsBulkMacrosAllowed: boolean;
    MaximumPermissionsShareInternalArticles: boolean;
    MaximumPermissionsManageSessionPermissionSets: boolean;
    MaximumPermissionsManageTemplatedApp: boolean;
    MaximumPermissionsUseTemplatedApp: boolean;
    MaximumPermissionsSendAnnouncementEmails: boolean;
    MaximumPermissionsChatterEditOwnPost: boolean;
    MaximumPermissionsChatterEditOwnRecordPost: boolean;
    MaximumPermissionsWaveTrendReports: boolean;
    MaximumPermissionsWaveTabularDownload: boolean;
    MaximumPermissionsImportCustomObjects: boolean;
    MaximumPermissionsDelegatedTwoFactor: boolean;
    MaximumPermissionsChatterComposeUiCodesnippet: boolean;
    MaximumPermissionsSelectFilesFromSalesforce: boolean;
    MaximumPermissionsModerateNetworkUsers: boolean;
    MaximumPermissionsMergeTopics: boolean;
    MaximumPermissionsSubscribeToLightningReports: boolean;
    MaximumPermissionsManagePvtRptsAndDashbds: boolean;
    MaximumPermissionsAllowLightningLogin: boolean;
    MaximumPermissionsCampaignInfluence2: boolean;
    MaximumPermissionsViewDataAssessment: boolean;
    MaximumPermissionsRemoveDirectMessageMembers: boolean;
    MaximumPermissionsCanApproveFeedPost: boolean;
    MaximumPermissionsAddDirectMessageMembers: boolean;
    MaximumPermissionsAllowViewEditConvertedLeads: boolean;
    MaximumPermissionsShowCompanyNameAsUserBadge: boolean;
    MaximumPermissionsAccessCMC: boolean;
    MaximumPermissionsViewHealthCheck: boolean;
    MaximumPermissionsManageHealthCheck: boolean;
    MaximumPermissionsPackaging2: boolean;
    MaximumPermissionsManageCertificates: boolean;
    MaximumPermissionsCreateReportInLightning: boolean;
    MaximumPermissionsPreventClassicExperience: boolean;
    MaximumPermissionsHideReadByList: boolean;
    MaximumPermissionsListEmailSend: boolean;
    MaximumPermissionsFeedPinning: boolean;
    MaximumPermissionsChangeDashboardColors: boolean;
    MaximumPermissionsIotUser: boolean;
    MaximumPermissionsManageRecommendationStrategies: boolean;
    MaximumPermissionsManagePropositions: boolean;
    MaximumPermissionsCloseConversations: boolean;
    MaximumPermissionsUseWebLink: boolean;
    MaximumPermissionsViewOnlyEmbeddedAppUser: boolean;
    MaximumPermissionsViewAllActivities: boolean;
    MaximumPermissionsSubscribeReportToOtherUsers: boolean;
    MaximumPermissionsLightningConsoleAllowedForUser: boolean;
    MaximumPermissionsSubscribeReportsRunAsUser: boolean;
    MaximumPermissionsSubscribeToLightningDashboards: boolean;
    MaximumPermissionsSubscribeDashboardToOtherUsers: boolean;
    MaximumPermissionsApexRestServices: boolean;
    MaximumPermissionsEnableCommunityAppLauncher: boolean;
    MaximumPermissionsLtngPromoReserved01UserPerm: boolean;
    MaximumPermissionsCanEditDataPrepRecipe: boolean;
    MaximumPermissionsAddAnalyticsRemoteConnections: boolean;
    MaximumPermissionsManageSurveys: boolean;
    MaximumPermissionsRecordVisibilityAPI: boolean;
    MaximumPermissionsViewRoles: boolean;
    MaximumPermissionsModifyMetadata: boolean;
    UsedLicenses: number;
};
declare type ParentReferences$PermissionSetLicense = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$PermissionSetLicense = {
    GrantedByLicenses: SObjectDefinition$GrantedByLicense;
    PermissionSetLicenseAssignments: SObjectDefinition$PermissionSetLicenseAssign;
};
interface SObjectDefinition$PermissionSetLicense extends SObjectDefinition<'PermissionSetLicense'> {
    Name: 'PermissionSetLicense';
    Fields: Fields$PermissionSetLicense;
    ParentReferences: ParentReferences$PermissionSetLicense;
    ChildRelationships: ChildRelationships$PermissionSetLicense;
}
declare type Fields$PermissionSetLicenseAssign = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    PermissionSetLicenseId: string;
    AssigneeId: string;
};
declare type ParentReferences$PermissionSetLicenseAssign = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    PermissionSetLicense: SObjectDefinition$PermissionSetLicense;
    Assignee: SObjectDefinition$User;
};
declare type ChildRelationships$PermissionSetLicenseAssign = {};
interface SObjectDefinition$PermissionSetLicenseAssign extends SObjectDefinition<'PermissionSetLicenseAssign'> {
    Name: 'PermissionSetLicenseAssign';
    Fields: Fields$PermissionSetLicenseAssign;
    ParentReferences: ParentReferences$PermissionSetLicenseAssign;
    ChildRelationships: ChildRelationships$PermissionSetLicenseAssign;
}
declare type Fields$PicklistValueInfo = {
    Id: string;
    DurableId: string | null;
    Value: string | null;
    Label: string | null;
    IsDefaultValue: boolean;
    IsActive: boolean;
    ValidFor: string | null;
    EntityParticleId: string | null;
};
declare type ParentReferences$PicklistValueInfo = {};
declare type ChildRelationships$PicklistValueInfo = {};
interface SObjectDefinition$PicklistValueInfo extends SObjectDefinition<'PicklistValueInfo'> {
    Name: 'PicklistValueInfo';
    Fields: Fields$PicklistValueInfo;
    ParentReferences: ParentReferences$PicklistValueInfo;
    ChildRelationships: ChildRelationships$PicklistValueInfo;
}
declare type Fields$PlatformAction = {
    Id: string;
    ExternalId: string | null;
    LastModifiedDate: DateString | null;
    Label: string;
    Type: string;
    Subtype: string | null;
    ApiName: string | null;
    ActionTarget: string | null;
    ActionTargetType: string | null;
    ConfirmationMessage: string | null;
    GroupId: string | null;
    IsGroupDefault: boolean;
    Category: string | null;
    InvocationStatus: string | null;
    InvokedByUserId: string | null;
    SourceEntity: string;
    ActionListContext: string | null;
    DeviceFormat: string | null;
    IconContentType: string | null;
    IconHeight: number | null;
    IconWidth: number | null;
    IconUrl: string | null;
    IsMassAction: boolean;
    PrimaryColor: string | null;
    RelatedSourceEntity: string | null;
    Section: string | null;
    RelatedListRecordId: string | null;
    TargetUrl: string | null;
    TargetObject: string | null;
};
declare type ParentReferences$PlatformAction = {
    InvokedByUser: SObjectDefinition$User | null;
};
declare type ChildRelationships$PlatformAction = {};
interface SObjectDefinition$PlatformAction extends SObjectDefinition<'PlatformAction'> {
    Name: 'PlatformAction';
    Fields: Fields$PlatformAction;
    ParentReferences: ParentReferences$PlatformAction;
    ChildRelationships: ChildRelationships$PlatformAction;
}
declare type Fields$PlatformCachePartition = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string | null;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Description: string | null;
    IsDefaultPartition: boolean;
};
declare type ParentReferences$PlatformCachePartition = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$PlatformCachePartition = {
    PlatforCachePartitionTypes: SObjectDefinition$PlatformCachePartitionType;
};
interface SObjectDefinition$PlatformCachePartition extends SObjectDefinition<'PlatformCachePartition'> {
    Name: 'PlatformCachePartition';
    Fields: Fields$PlatformCachePartition;
    ParentReferences: ParentReferences$PlatformCachePartition;
    ChildRelationships: ChildRelationships$PlatformCachePartition;
}
declare type Fields$PlatformCachePartitionType = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    PlatformCachePartitionId: string;
    CacheType: string;
    AllocatedCapacity: number | null;
    AllocatedPurchasedCapacity: number | null;
    AllocatedTrialCapacity: number | null;
};
declare type ParentReferences$PlatformCachePartitionType = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    PlatformCachePartition: SObjectDefinition$PlatformCachePartition;
};
declare type ChildRelationships$PlatformCachePartitionType = {};
interface SObjectDefinition$PlatformCachePartitionType extends SObjectDefinition<'PlatformCachePartitionType'> {
    Name: 'PlatformCachePartitionType';
    Fields: Fields$PlatformCachePartitionType;
    ParentReferences: ParentReferences$PlatformCachePartitionType;
    ChildRelationships: ChildRelationships$PlatformCachePartitionType;
}
declare type Fields$Pricebook2 = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    IsActive: boolean;
    IsArchived: boolean;
    Description: string | null;
    IsStandard: boolean;
};
declare type ParentReferences$Pricebook2 = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Pricebook2 = {
    Opportunities: SObjectDefinition$Opportunity;
    Orders: SObjectDefinition$Order;
    Histories: SObjectDefinition$Pricebook2History;
    PricebookEntries: SObjectDefinition$PricebookEntry;
    RecordActions: SObjectDefinition$RecordAction;
    ServiceContracts: SObjectDefinition$ServiceContract;
    WorkOrders: SObjectDefinition$WorkOrder;
};
interface SObjectDefinition$Pricebook2 extends SObjectDefinition<'Pricebook2'> {
    Name: 'Pricebook2';
    Fields: Fields$Pricebook2;
    ParentReferences: ParentReferences$Pricebook2;
    ChildRelationships: ChildRelationships$Pricebook2;
}
declare type Fields$Pricebook2History = {
    Id: string;
    IsDeleted: boolean;
    Pricebook2Id: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$Pricebook2History = {
    Pricebook2: SObjectDefinition$Pricebook2;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Pricebook2History = {};
interface SObjectDefinition$Pricebook2History extends SObjectDefinition<'Pricebook2History'> {
    Name: 'Pricebook2History';
    Fields: Fields$Pricebook2History;
    ParentReferences: ParentReferences$Pricebook2History;
    ChildRelationships: ChildRelationships$Pricebook2History;
}
declare type Fields$PricebookEntry = {
    Id: string;
    Name: string | null;
    Pricebook2Id: string;
    Product2Id: string;
    UnitPrice: number;
    IsActive: boolean;
    UseStandardPrice: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ProductCode: string | null;
    IsDeleted: boolean;
};
declare type ParentReferences$PricebookEntry = {
    Pricebook2: SObjectDefinition$Pricebook2;
    Product2: SObjectDefinition$Product2;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$PricebookEntry = {
    ContractLineItems: SObjectDefinition$ContractLineItem;
    OpportunityLineItems: SObjectDefinition$OpportunityLineItem;
    OrderItems: SObjectDefinition$OrderItem;
    RecordActions: SObjectDefinition$RecordAction;
    WorkOrderLineItems: SObjectDefinition$WorkOrderLineItem;
};
interface SObjectDefinition$PricebookEntry extends SObjectDefinition<'PricebookEntry'> {
    Name: 'PricebookEntry';
    Fields: Fields$PricebookEntry;
    ParentReferences: ParentReferences$PricebookEntry;
    ChildRelationships: ChildRelationships$PricebookEntry;
}
declare type Fields$ProcessDefinition = {
    Id: string;
    Name: string;
    DeveloperName: string;
    Type: string;
    Description: string | null;
    TableEnumOrId: string;
    LockType: string;
    State: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$ProcessDefinition = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ProcessDefinition = {};
interface SObjectDefinition$ProcessDefinition extends SObjectDefinition<'ProcessDefinition'> {
    Name: 'ProcessDefinition';
    Fields: Fields$ProcessDefinition;
    ParentReferences: ParentReferences$ProcessDefinition;
    ChildRelationships: ChildRelationships$ProcessDefinition;
}
declare type Fields$ProcessInstance = {
    Id: string;
    ProcessDefinitionId: string;
    TargetObjectId: string;
    Status: string;
    CompletedDate: DateString | null;
    LastActorId: string | null;
    ElapsedTimeInDays: number | null;
    ElapsedTimeInHours: number | null;
    ElapsedTimeInMinutes: number | null;
    SubmittedById: string | null;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$ProcessInstance = {
    ProcessDefinition: SObjectDefinition$ProcessDefinition;
    TargetObject: SObjectDefinition$Name;
    LastActor: SObjectDefinition$User | null;
    SubmittedBy: SObjectDefinition$User | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ProcessInstance = {
    StepsAndWorkitems: SObjectDefinition$ProcessInstanceHistory;
    Nodes: SObjectDefinition$ProcessInstanceNode;
    Steps: SObjectDefinition$ProcessInstanceStep;
    Workitems: SObjectDefinition$ProcessInstanceWorkitem;
};
interface SObjectDefinition$ProcessInstance extends SObjectDefinition<'ProcessInstance'> {
    Name: 'ProcessInstance';
    Fields: Fields$ProcessInstance;
    ParentReferences: ParentReferences$ProcessInstance;
    ChildRelationships: ChildRelationships$ProcessInstance;
}
declare type Fields$ProcessInstanceHistory = {
    Id: string;
    IsPending: boolean;
    ProcessInstanceId: string;
    TargetObjectId: string | null;
    StepStatus: string | null;
    ProcessNodeId: string | null;
    OriginalActorId: string;
    ActorId: string;
    RemindersSent: number | null;
    ElapsedTimeInDays: number | null;
    ElapsedTimeInHours: number | null;
    ElapsedTimeInMinutes: number | null;
    Comments: string | null;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$ProcessInstanceHistory = {
    ProcessInstance: SObjectDefinition$ProcessInstance;
    TargetObject: SObjectDefinition$Name | null;
    ProcessNode: SObjectDefinition$ProcessNode | null;
    OriginalActor: SObjectDefinition$Name;
    Actor: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ProcessInstanceHistory = {};
interface SObjectDefinition$ProcessInstanceHistory extends SObjectDefinition<'ProcessInstanceHistory'> {
    Name: 'ProcessInstanceHistory';
    Fields: Fields$ProcessInstanceHistory;
    ParentReferences: ParentReferences$ProcessInstanceHistory;
    ChildRelationships: ChildRelationships$ProcessInstanceHistory;
}
declare type Fields$ProcessInstanceNode = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ProcessInstanceId: string;
    ProcessNodeId: string;
    NodeStatus: string | null;
    CompletedDate: DateString | null;
    LastActorId: string | null;
    ProcessNodeName: string | null;
    ElapsedTimeInDays: number | null;
    ElapsedTimeInHours: number | null;
    ElapsedTimeInMinutes: number | null;
};
declare type ParentReferences$ProcessInstanceNode = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ProcessInstance: SObjectDefinition$ProcessInstance;
    ProcessNode: SObjectDefinition$ProcessNode;
    LastActor: SObjectDefinition$User | null;
};
declare type ChildRelationships$ProcessInstanceNode = {};
interface SObjectDefinition$ProcessInstanceNode extends SObjectDefinition<'ProcessInstanceNode'> {
    Name: 'ProcessInstanceNode';
    Fields: Fields$ProcessInstanceNode;
    ParentReferences: ParentReferences$ProcessInstanceNode;
    ChildRelationships: ChildRelationships$ProcessInstanceNode;
}
declare type Fields$ProcessInstanceStep = {
    Id: string;
    ProcessInstanceId: string;
    StepStatus: string | null;
    OriginalActorId: string;
    ActorId: string;
    Comments: string | null;
    StepNodeId: string | null;
    ElapsedTimeInDays: number | null;
    ElapsedTimeInHours: number | null;
    ElapsedTimeInMinutes: number | null;
    CreatedDate: DateString;
    CreatedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$ProcessInstanceStep = {
    ProcessInstance: SObjectDefinition$ProcessInstance;
    OriginalActor: SObjectDefinition$Name;
    Actor: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ProcessInstanceStep = {};
interface SObjectDefinition$ProcessInstanceStep extends SObjectDefinition<'ProcessInstanceStep'> {
    Name: 'ProcessInstanceStep';
    Fields: Fields$ProcessInstanceStep;
    ParentReferences: ParentReferences$ProcessInstanceStep;
    ChildRelationships: ChildRelationships$ProcessInstanceStep;
}
declare type Fields$ProcessInstanceWorkitem = {
    Id: string;
    ProcessInstanceId: string;
    OriginalActorId: string;
    ActorId: string;
    ElapsedTimeInDays: number | null;
    ElapsedTimeInHours: number | null;
    ElapsedTimeInMinutes: number | null;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$ProcessInstanceWorkitem = {
    ProcessInstance: SObjectDefinition$ProcessInstance;
    OriginalActor: SObjectDefinition$Name;
    Actor: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ProcessInstanceWorkitem = {};
interface SObjectDefinition$ProcessInstanceWorkitem extends SObjectDefinition<'ProcessInstanceWorkitem'> {
    Name: 'ProcessInstanceWorkitem';
    Fields: Fields$ProcessInstanceWorkitem;
    ParentReferences: ParentReferences$ProcessInstanceWorkitem;
    ChildRelationships: ChildRelationships$ProcessInstanceWorkitem;
}
declare type Fields$ProcessNode = {
    Id: string;
    Name: string;
    DeveloperName: string;
    ProcessDefinitionId: string;
    Description: string | null;
    SystemModstamp: DateString;
};
declare type ParentReferences$ProcessNode = {
    ProcessDefinition: SObjectDefinition$ProcessDefinition;
};
declare type ChildRelationships$ProcessNode = {};
interface SObjectDefinition$ProcessNode extends SObjectDefinition<'ProcessNode'> {
    Name: 'ProcessNode';
    Fields: Fields$ProcessNode;
    ParentReferences: ParentReferences$ProcessNode;
    ChildRelationships: ChildRelationships$ProcessNode;
}
declare type Fields$Product2 = {
    Id: string;
    Name: string;
    ProductCode: string | null;
    Description: string | null;
    IsActive: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Family: string | null;
    ExternalDataSourceId: string | null;
    ExternalId: string | null;
    DisplayUrl: string | null;
    QuantityUnitOfMeasure: string | null;
    IsDeleted: boolean;
    IsArchived: boolean;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    StockKeepingUnit: string | null;
};
declare type ParentReferences$Product2 = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Product2 = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    Assets: SObjectDefinition$Asset;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    Cases: SObjectDefinition$Case;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    ContractLineItems: SObjectDefinition$ContractLineItem;
    Emails: SObjectDefinition$EmailMessage;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    OpenActivities: SObjectDefinition$OpenActivity;
    PricebookEntries: SObjectDefinition$PricebookEntry;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    Feeds: SObjectDefinition$Product2Feed;
    Histories: SObjectDefinition$Product2History;
    RecordActions: SObjectDefinition$RecordAction;
    Tasks: SObjectDefinition$Task;
    WorkOrderLineItems: SObjectDefinition$WorkOrderLineItem;
};
interface SObjectDefinition$Product2 extends SObjectDefinition<'Product2'> {
    Name: 'Product2';
    Fields: Fields$Product2;
    ParentReferences: ParentReferences$Product2;
    ChildRelationships: ChildRelationships$Product2;
}
declare type Fields$Product2ChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    Name: string | null;
    ProductCode: string | null;
    Description: string | null;
    IsActive: boolean;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    Family: string | null;
    ExternalDataSourceId: string | null;
    ExternalId: string | null;
    DisplayUrl: string | null;
    QuantityUnitOfMeasure: string | null;
    IsArchived: boolean;
    StockKeepingUnit: string | null;
};
declare type ParentReferences$Product2ChangeEvent = {};
declare type ChildRelationships$Product2ChangeEvent = {};
interface SObjectDefinition$Product2ChangeEvent extends SObjectDefinition<'Product2ChangeEvent'> {
    Name: 'Product2ChangeEvent';
    Fields: Fields$Product2ChangeEvent;
    ParentReferences: ParentReferences$Product2ChangeEvent;
    ChildRelationships: ChildRelationships$Product2ChangeEvent;
}
declare type Fields$Product2Feed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$Product2Feed = {
    Parent: SObjectDefinition$Product2;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$Product2Feed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$Product2Feed extends SObjectDefinition<'Product2Feed'> {
    Name: 'Product2Feed';
    Fields: Fields$Product2Feed;
    ParentReferences: ParentReferences$Product2Feed;
    ChildRelationships: ChildRelationships$Product2Feed;
}
declare type Fields$Product2History = {
    Id: string;
    IsDeleted: boolean;
    Product2Id: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$Product2History = {
    Product2: SObjectDefinition$Product2;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Product2History = {};
interface SObjectDefinition$Product2History extends SObjectDefinition<'Product2History'> {
    Name: 'Product2History';
    Fields: Fields$Product2History;
    ParentReferences: ParentReferences$Product2History;
    ChildRelationships: ChildRelationships$Product2History;
}
declare type Fields$ProductEntitlementTemplate = {
    Id: string;
    Product2Id: string;
    EntitlementTemplateId: string;
    SystemModstamp: DateString;
    CreatedDate: DateString;
    CreatedById: string;
};
declare type ParentReferences$ProductEntitlementTemplate = {
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ProductEntitlementTemplate = {};
interface SObjectDefinition$ProductEntitlementTemplate extends SObjectDefinition<'ProductEntitlementTemplate'> {
    Name: 'ProductEntitlementTemplate';
    Fields: Fields$ProductEntitlementTemplate;
    ParentReferences: ParentReferences$ProductEntitlementTemplate;
    ChildRelationships: ChildRelationships$ProductEntitlementTemplate;
}
declare type Fields$Profile = {
    Id: string;
    Name: string;
    PermissionsEmailSingle: boolean;
    PermissionsEmailMass: boolean;
    PermissionsEditTask: boolean;
    PermissionsEditEvent: boolean;
    PermissionsExportReport: boolean;
    PermissionsImportPersonal: boolean;
    PermissionsDataExport: boolean;
    PermissionsManageUsers: boolean;
    PermissionsEditPublicFilters: boolean;
    PermissionsEditPublicTemplates: boolean;
    PermissionsModifyAllData: boolean;
    PermissionsManageCases: boolean;
    PermissionsMassInlineEdit: boolean;
    PermissionsEditKnowledge: boolean;
    PermissionsManageKnowledge: boolean;
    PermissionsManageSolutions: boolean;
    PermissionsCustomizeApplication: boolean;
    PermissionsEditReadonlyFields: boolean;
    PermissionsRunReports: boolean;
    PermissionsViewSetup: boolean;
    PermissionsTransferAnyEntity: boolean;
    PermissionsNewReportBuilder: boolean;
    PermissionsManageCssUsers: boolean;
    PermissionsActivateContract: boolean;
    PermissionsActivateOrder: boolean;
    PermissionsImportLeads: boolean;
    PermissionsManageLeads: boolean;
    PermissionsTransferAnyLead: boolean;
    PermissionsViewAllData: boolean;
    PermissionsEditPublicDocuments: boolean;
    PermissionsViewEncryptedData: boolean;
    PermissionsEditBrandTemplates: boolean;
    PermissionsEditHtmlTemplates: boolean;
    PermissionsChatterInternalUser: boolean;
    PermissionsDeleteActivatedContract: boolean;
    PermissionsChatterInviteExternalUsers: boolean;
    PermissionsSendSitRequests: boolean;
    PermissionsApiUserOnly: boolean;
    PermissionsManageRemoteAccess: boolean;
    PermissionsCanUseNewDashboardBuilder: boolean;
    PermissionsManageCategories: boolean;
    PermissionsConvertLeads: boolean;
    PermissionsPasswordNeverExpires: boolean;
    PermissionsUseTeamReassignWizards: boolean;
    PermissionsEditActivatedOrders: boolean;
    PermissionsInstallMultiforce: boolean;
    PermissionsChatterOwnGroups: boolean;
    PermissionsEditOppLineItemUnitPrice: boolean;
    PermissionsBulkApiHardDelete: boolean;
    PermissionsInboundMigrationToolsUser: boolean;
    PermissionsSolutionImport: boolean;
    PermissionsManageCallCenters: boolean;
    PermissionsPortalSuperUser: boolean;
    PermissionsManageSynonyms: boolean;
    PermissionsOutboundMigrationToolsUser: boolean;
    PermissionsDelegatedPortalUserAdmin: boolean;
    PermissionsViewContent: boolean;
    PermissionsManageEmailClientConfig: boolean;
    PermissionsEnableNotifications: boolean;
    PermissionsManageDataIntegrations: boolean;
    PermissionsDistributeFromPersWksp: boolean;
    PermissionsViewDataCategories: boolean;
    PermissionsManageDataCategories: boolean;
    PermissionsAuthorApex: boolean;
    PermissionsManageMobile: boolean;
    PermissionsApiEnabled: boolean;
    PermissionsManageCustomReportTypes: boolean;
    PermissionsEditCaseComments: boolean;
    PermissionsTransferAnyCase: boolean;
    PermissionsContentAdministrator: boolean;
    PermissionsCreateWorkspaces: boolean;
    PermissionsManageContentPermissions: boolean;
    PermissionsManageContentProperties: boolean;
    PermissionsManageContentTypes: boolean;
    PermissionsScheduleJob: boolean;
    PermissionsManageExchangeConfig: boolean;
    PermissionsManageAnalyticSnapshots: boolean;
    PermissionsScheduleReports: boolean;
    PermissionsManageBusinessHourHolidays: boolean;
    PermissionsManageEntitlements: boolean;
    PermissionsManageInteraction: boolean;
    PermissionsViewMyTeamsDashboards: boolean;
    PermissionsModerateChatter: boolean;
    PermissionsResetPasswords: boolean;
    PermissionsFlowUFLRequired: boolean;
    PermissionsCanInsertFeedSystemFields: boolean;
    PermissionsManageKnowledgeImportExport: boolean;
    PermissionsEmailTemplateManagement: boolean;
    PermissionsEmailAdministration: boolean;
    PermissionsManageChatterMessages: boolean;
    PermissionsAllowEmailIC: boolean;
    PermissionsChatterFileLink: boolean;
    PermissionsForceTwoFactor: boolean;
    PermissionsViewEventLogFiles: boolean;
    PermissionsManageNetworks: boolean;
    PermissionsViewCaseInteraction: boolean;
    PermissionsManageAuthProviders: boolean;
    PermissionsRunFlow: boolean;
    PermissionsCreateCustomizeDashboards: boolean;
    PermissionsCreateDashboardFolders: boolean;
    PermissionsViewPublicDashboards: boolean;
    PermissionsManageDashbdsInPubFolders: boolean;
    PermissionsCreateCustomizeReports: boolean;
    PermissionsCreateReportFolders: boolean;
    PermissionsViewPublicReports: boolean;
    PermissionsManageReportsInPubFolders: boolean;
    PermissionsEditMyDashboards: boolean;
    PermissionsEditMyReports: boolean;
    PermissionsViewAllUsers: boolean;
    PermissionsBypassEmailApproval: boolean;
    PermissionsAllowUniversalSearch: boolean;
    PermissionsConnectOrgToEnvironmentHub: boolean;
    PermissionsCreateCustomizeFilters: boolean;
    PermissionsContentHubUser: boolean;
    PermissionsGovernNetworks: boolean;
    PermissionsSalesConsole: boolean;
    PermissionsTwoFactorApi: boolean;
    PermissionsDeleteTopics: boolean;
    PermissionsEditTopics: boolean;
    PermissionsCreateTopics: boolean;
    PermissionsAssignTopics: boolean;
    PermissionsIdentityEnabled: boolean;
    PermissionsIdentityConnect: boolean;
    PermissionsAllowViewKnowledge: boolean;
    PermissionsContentWorkspaces: boolean;
    PermissionsCreateWorkBadgeDefinition: boolean;
    PermissionsManageSearchPromotionRules: boolean;
    PermissionsCustomMobileAppsAccess: boolean;
    PermissionsViewHelpLink: boolean;
    PermissionsManageProfilesPermissionsets: boolean;
    PermissionsAssignPermissionSets: boolean;
    PermissionsManageRoles: boolean;
    PermissionsManageIpAddresses: boolean;
    PermissionsManageSharing: boolean;
    PermissionsManageInternalUsers: boolean;
    PermissionsManagePasswordPolicies: boolean;
    PermissionsManageLoginAccessPolicies: boolean;
    PermissionsManageCustomPermissions: boolean;
    PermissionsCanVerifyComment: boolean;
    PermissionsManageUnlistedGroups: boolean;
    PermissionsInsightsAppDashboardEditor: boolean;
    PermissionsManageTwoFactor: boolean;
    PermissionsInsightsAppUser: boolean;
    PermissionsInsightsAppAdmin: boolean;
    PermissionsInsightsAppEltEditor: boolean;
    PermissionsInsightsAppUploadUser: boolean;
    PermissionsInsightsCreateApplication: boolean;
    PermissionsLightningExperienceUser: boolean;
    PermissionsConfigCustomRecs: boolean;
    PermissionsSubmitMacrosAllowed: boolean;
    PermissionsBulkMacrosAllowed: boolean;
    PermissionsShareInternalArticles: boolean;
    PermissionsManageSessionPermissionSets: boolean;
    PermissionsManageTemplatedApp: boolean;
    PermissionsUseTemplatedApp: boolean;
    PermissionsSendAnnouncementEmails: boolean;
    PermissionsChatterEditOwnPost: boolean;
    PermissionsChatterEditOwnRecordPost: boolean;
    PermissionsWaveTrendReports: boolean;
    PermissionsWaveTabularDownload: boolean;
    PermissionsImportCustomObjects: boolean;
    PermissionsDelegatedTwoFactor: boolean;
    PermissionsChatterComposeUiCodesnippet: boolean;
    PermissionsSelectFilesFromSalesforce: boolean;
    PermissionsModerateNetworkUsers: boolean;
    PermissionsMergeTopics: boolean;
    PermissionsSubscribeToLightningReports: boolean;
    PermissionsManagePvtRptsAndDashbds: boolean;
    PermissionsAllowLightningLogin: boolean;
    PermissionsCampaignInfluence2: boolean;
    PermissionsViewDataAssessment: boolean;
    PermissionsRemoveDirectMessageMembers: boolean;
    PermissionsCanApproveFeedPost: boolean;
    PermissionsAddDirectMessageMembers: boolean;
    PermissionsAllowViewEditConvertedLeads: boolean;
    PermissionsShowCompanyNameAsUserBadge: boolean;
    PermissionsAccessCMC: boolean;
    PermissionsViewHealthCheck: boolean;
    PermissionsManageHealthCheck: boolean;
    PermissionsPackaging2: boolean;
    PermissionsManageCertificates: boolean;
    PermissionsCreateReportInLightning: boolean;
    PermissionsPreventClassicExperience: boolean;
    PermissionsHideReadByList: boolean;
    PermissionsListEmailSend: boolean;
    PermissionsFeedPinning: boolean;
    PermissionsChangeDashboardColors: boolean;
    PermissionsIotUser: boolean;
    PermissionsManageRecommendationStrategies: boolean;
    PermissionsManagePropositions: boolean;
    PermissionsCloseConversations: boolean;
    PermissionsUseWebLink: boolean;
    PermissionsViewOnlyEmbeddedAppUser: boolean;
    PermissionsViewAllActivities: boolean;
    PermissionsSubscribeReportToOtherUsers: boolean;
    PermissionsLightningConsoleAllowedForUser: boolean;
    PermissionsSubscribeReportsRunAsUser: boolean;
    PermissionsSubscribeToLightningDashboards: boolean;
    PermissionsSubscribeDashboardToOtherUsers: boolean;
    PermissionsApexRestServices: boolean;
    PermissionsEnableCommunityAppLauncher: boolean;
    PermissionsLtngPromoReserved01UserPerm: boolean;
    PermissionsCanEditDataPrepRecipe: boolean;
    PermissionsAddAnalyticsRemoteConnections: boolean;
    PermissionsManageSurveys: boolean;
    PermissionsRecordVisibilityAPI: boolean;
    PermissionsViewRoles: boolean;
    PermissionsModifyMetadata: boolean;
    UserLicenseId: string;
    UserType: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Description: string | null;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
};
declare type ParentReferences$Profile = {
    UserLicense: SObjectDefinition$UserLicense;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Profile = {
    Users: SObjectDefinition$User;
};
interface SObjectDefinition$Profile extends SObjectDefinition<'Profile'> {
    Name: 'Profile';
    Fields: Fields$Profile;
    ParentReferences: ParentReferences$Profile;
    ChildRelationships: ChildRelationships$Profile;
}
declare type Fields$ProfileSkill = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    UserCount: number | null;
    Description: string | null;
};
declare type ParentReferences$ProfileSkill = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ProfileSkill = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    Feeds: SObjectDefinition$ProfileSkillFeed;
    Histories: SObjectDefinition$ProfileSkillHistory;
    ProfileSkillUserChildren: SObjectDefinition$ProfileSkillUser;
};
interface SObjectDefinition$ProfileSkill extends SObjectDefinition<'ProfileSkill'> {
    Name: 'ProfileSkill';
    Fields: Fields$ProfileSkill;
    ParentReferences: ParentReferences$ProfileSkill;
    ChildRelationships: ChildRelationships$ProfileSkill;
}
declare type Fields$ProfileSkillEndorsement = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ProfileSkillUserId: string;
    UserId: string | null;
};
declare type ParentReferences$ProfileSkillEndorsement = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ProfileSkillUser: SObjectDefinition$ProfileSkillUser;
    User: SObjectDefinition$User | null;
};
declare type ChildRelationships$ProfileSkillEndorsement = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    Feeds: SObjectDefinition$ProfileSkillEndorsementFeed;
    Histories: SObjectDefinition$ProfileSkillEndorsementHistory;
};
interface SObjectDefinition$ProfileSkillEndorsement extends SObjectDefinition<'ProfileSkillEndorsement'> {
    Name: 'ProfileSkillEndorsement';
    Fields: Fields$ProfileSkillEndorsement;
    ParentReferences: ParentReferences$ProfileSkillEndorsement;
    ChildRelationships: ChildRelationships$ProfileSkillEndorsement;
}
declare type Fields$ProfileSkillEndorsementFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$ProfileSkillEndorsementFeed = {
    Parent: SObjectDefinition$ProfileSkillEndorsement;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$ProfileSkillEndorsementFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$ProfileSkillEndorsementFeed extends SObjectDefinition<'ProfileSkillEndorsementFeed'> {
    Name: 'ProfileSkillEndorsementFeed';
    Fields: Fields$ProfileSkillEndorsementFeed;
    ParentReferences: ParentReferences$ProfileSkillEndorsementFeed;
    ChildRelationships: ChildRelationships$ProfileSkillEndorsementFeed;
}
declare type Fields$ProfileSkillEndorsementHistory = {
    Id: string;
    IsDeleted: boolean;
    ProfileSkillEndorsementId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$ProfileSkillEndorsementHistory = {
    ProfileSkillEndorsement: SObjectDefinition$ProfileSkillEndorsement;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ProfileSkillEndorsementHistory = {};
interface SObjectDefinition$ProfileSkillEndorsementHistory extends SObjectDefinition<'ProfileSkillEndorsementHistory'> {
    Name: 'ProfileSkillEndorsementHistory';
    Fields: Fields$ProfileSkillEndorsementHistory;
    ParentReferences: ParentReferences$ProfileSkillEndorsementHistory;
    ChildRelationships: ChildRelationships$ProfileSkillEndorsementHistory;
}
declare type Fields$ProfileSkillFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$ProfileSkillFeed = {
    Parent: SObjectDefinition$ProfileSkill;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$ProfileSkillFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$ProfileSkillFeed extends SObjectDefinition<'ProfileSkillFeed'> {
    Name: 'ProfileSkillFeed';
    Fields: Fields$ProfileSkillFeed;
    ParentReferences: ParentReferences$ProfileSkillFeed;
    ChildRelationships: ChildRelationships$ProfileSkillFeed;
}
declare type Fields$ProfileSkillHistory = {
    Id: string;
    IsDeleted: boolean;
    ProfileSkillId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$ProfileSkillHistory = {
    ProfileSkill: SObjectDefinition$ProfileSkill;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ProfileSkillHistory = {};
interface SObjectDefinition$ProfileSkillHistory extends SObjectDefinition<'ProfileSkillHistory'> {
    Name: 'ProfileSkillHistory';
    Fields: Fields$ProfileSkillHistory;
    ParentReferences: ParentReferences$ProfileSkillHistory;
    ChildRelationships: ChildRelationships$ProfileSkillHistory;
}
declare type Fields$ProfileSkillShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$ProfileSkillShare = {
    Parent: SObjectDefinition$ProfileSkill;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ProfileSkillShare = {};
interface SObjectDefinition$ProfileSkillShare extends SObjectDefinition<'ProfileSkillShare'> {
    Name: 'ProfileSkillShare';
    Fields: Fields$ProfileSkillShare;
    ParentReferences: ParentReferences$ProfileSkillShare;
    ChildRelationships: ChildRelationships$ProfileSkillShare;
}
declare type Fields$ProfileSkillUser = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ProfileSkillId: string;
    UserId: string | null;
    EndorsementCount: number | null;
};
declare type ParentReferences$ProfileSkillUser = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ProfileSkill: SObjectDefinition$ProfileSkill;
    User: SObjectDefinition$User | null;
};
declare type ChildRelationships$ProfileSkillUser = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    ProfileSkillUserEndorsements: SObjectDefinition$ProfileSkillEndorsement;
    Feeds: SObjectDefinition$ProfileSkillUserFeed;
    Histories: SObjectDefinition$ProfileSkillUserHistory;
};
interface SObjectDefinition$ProfileSkillUser extends SObjectDefinition<'ProfileSkillUser'> {
    Name: 'ProfileSkillUser';
    Fields: Fields$ProfileSkillUser;
    ParentReferences: ParentReferences$ProfileSkillUser;
    ChildRelationships: ChildRelationships$ProfileSkillUser;
}
declare type Fields$ProfileSkillUserFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$ProfileSkillUserFeed = {
    Parent: SObjectDefinition$ProfileSkillUser;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$ProfileSkillUserFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$ProfileSkillUserFeed extends SObjectDefinition<'ProfileSkillUserFeed'> {
    Name: 'ProfileSkillUserFeed';
    Fields: Fields$ProfileSkillUserFeed;
    ParentReferences: ParentReferences$ProfileSkillUserFeed;
    ChildRelationships: ChildRelationships$ProfileSkillUserFeed;
}
declare type Fields$ProfileSkillUserHistory = {
    Id: string;
    IsDeleted: boolean;
    ProfileSkillUserId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$ProfileSkillUserHistory = {
    ProfileSkillUser: SObjectDefinition$ProfileSkillUser;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ProfileSkillUserHistory = {};
interface SObjectDefinition$ProfileSkillUserHistory extends SObjectDefinition<'ProfileSkillUserHistory'> {
    Name: 'ProfileSkillUserHistory';
    Fields: Fields$ProfileSkillUserHistory;
    ParentReferences: ParentReferences$ProfileSkillUserHistory;
    ChildRelationships: ChildRelationships$ProfileSkillUserHistory;
}
declare type Fields$Publisher = {
    Id: string;
    DurableId: string | null;
    Name: string | null;
    NamespacePrefix: string | null;
    IsSalesforce: boolean;
    MajorVersion: number | null;
    MinorVersion: number | null;
};
declare type ParentReferences$Publisher = {};
declare type ChildRelationships$Publisher = {
    InstalledEntityDefinitions: SObjectDefinition$EntityDefinition;
    InstalledFieldDefinitions: SObjectDefinition$FieldDefinition;
};
interface SObjectDefinition$Publisher extends SObjectDefinition<'Publisher'> {
    Name: 'Publisher';
    Fields: Fields$Publisher;
    ParentReferences: ParentReferences$Publisher;
    ChildRelationships: ChildRelationships$Publisher;
}
declare type Fields$PushTopic = {
    Id: string;
    Name: string;
    Query: string;
    ApiVersion: number;
    IsActive: boolean;
    NotifyForFields: string;
    NotifyForOperations: string;
    Description: string | null;
    NotifyForOperationCreate: boolean;
    NotifyForOperationUpdate: boolean;
    NotifyForOperationDelete: boolean;
    NotifyForOperationUndelete: boolean;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$PushTopic = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$PushTopic = {};
interface SObjectDefinition$PushTopic extends SObjectDefinition<'PushTopic'> {
    Name: 'PushTopic';
    Fields: Fields$PushTopic;
    ParentReferences: ParentReferences$PushTopic;
    ChildRelationships: ChildRelationships$PushTopic;
}
declare type Fields$QueueSobject = {
    Id: string;
    QueueId: string;
    SobjectType: string;
    CreatedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$QueueSobject = {
    Queue: SObjectDefinition$Group;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$QueueSobject = {};
interface SObjectDefinition$QueueSobject extends SObjectDefinition<'QueueSobject'> {
    Name: 'QueueSobject';
    Fields: Fields$QueueSobject;
    ParentReferences: ParentReferences$QueueSobject;
    ChildRelationships: ChildRelationships$QueueSobject;
}
declare type Fields$QuickText = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    Message: string;
    Category: string | null;
    Channel: string | null;
};
declare type ParentReferences$QuickText = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$QuickText = {
    Histories: SObjectDefinition$QuickTextHistory;
};
interface SObjectDefinition$QuickText extends SObjectDefinition<'QuickText'> {
    Name: 'QuickText';
    Fields: Fields$QuickText;
    ParentReferences: ParentReferences$QuickText;
    ChildRelationships: ChildRelationships$QuickText;
}
declare type Fields$QuickTextHistory = {
    Id: string;
    IsDeleted: boolean;
    QuickTextId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$QuickTextHistory = {
    QuickText: SObjectDefinition$QuickText;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$QuickTextHistory = {};
interface SObjectDefinition$QuickTextHistory extends SObjectDefinition<'QuickTextHistory'> {
    Name: 'QuickTextHistory';
    Fields: Fields$QuickTextHistory;
    ParentReferences: ParentReferences$QuickTextHistory;
    ChildRelationships: ChildRelationships$QuickTextHistory;
}
declare type Fields$QuickTextShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$QuickTextShare = {
    Parent: SObjectDefinition$QuickText;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$QuickTextShare = {};
interface SObjectDefinition$QuickTextShare extends SObjectDefinition<'QuickTextShare'> {
    Name: 'QuickTextShare';
    Fields: Fields$QuickTextShare;
    ParentReferences: ParentReferences$QuickTextShare;
    ChildRelationships: ChildRelationships$QuickTextShare;
}
declare type Fields$RecentlyViewed = {
    Id: string;
    Name: string | null;
    LastName: string | null;
    FirstName: string | null;
    Type: string | null;
    Alias: string | null;
    UserRoleId: string | null;
    RecordTypeId: string | null;
    IsActive: boolean;
    ProfileId: string | null;
    Title: string | null;
    Email: string | null;
    Phone: string | null;
    NameOrAlias: string | null;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    Language: string | null;
};
declare type ParentReferences$RecentlyViewed = {
    UserRole: SObjectDefinition$UserRole | null;
    RecordType: SObjectDefinition$RecordType | null;
    Profile: SObjectDefinition$Profile | null;
};
declare type ChildRelationships$RecentlyViewed = {};
interface SObjectDefinition$RecentlyViewed extends SObjectDefinition<'RecentlyViewed'> {
    Name: 'RecentlyViewed';
    Fields: Fields$RecentlyViewed;
    ParentReferences: ParentReferences$RecentlyViewed;
    ChildRelationships: ChildRelationships$RecentlyViewed;
}
declare type Fields$RecordAction = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    RecordId: string;
    FlowDefinition: string | null;
    FlowInterviewId: string | null;
    Order: number;
    Status: string | null;
    Pinned: string | null;
    ActionType: string | null;
    ActionDefinition: string | null;
};
declare type ParentReferences$RecordAction = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Record: SObjectDefinition$Name;
    FlowInterview: SObjectDefinition$FlowInterview | null;
};
declare type ChildRelationships$RecordAction = {};
interface SObjectDefinition$RecordAction extends SObjectDefinition<'RecordAction'> {
    Name: 'RecordAction';
    Fields: Fields$RecordAction;
    ParentReferences: ParentReferences$RecordAction;
    ChildRelationships: ChildRelationships$RecordAction;
}
declare type Fields$RecordType = {
    Id: string;
    Name: string;
    DeveloperName: string;
    NamespacePrefix: string | null;
    Description: string | null;
    BusinessProcessId: string | null;
    SobjectType: string;
    IsActive: boolean;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$RecordType = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$RecordType = {};
interface SObjectDefinition$RecordType extends SObjectDefinition<'RecordType'> {
    Name: 'RecordType';
    Fields: Fields$RecordType;
    ParentReferences: ParentReferences$RecordType;
    ChildRelationships: ChildRelationships$RecordType;
}
declare type Fields$RelationshipDomain = {
    Id: string;
    DurableId: string | null;
    ParentSobjectId: string | null;
    ChildSobjectId: string | null;
    FieldId: string | null;
    RelationshipInfoId: string | null;
    RelationshipName: string | null;
    IsCascadeDelete: boolean;
    IsDeprecatedAndHidden: boolean;
    IsRestrictedDelete: boolean;
    JunctionIdListNames: any | null;
};
declare type ParentReferences$RelationshipDomain = {};
declare type ChildRelationships$RelationshipDomain = {};
interface SObjectDefinition$RelationshipDomain extends SObjectDefinition<'RelationshipDomain'> {
    Name: 'RelationshipDomain';
    Fields: Fields$RelationshipDomain;
    ParentReferences: ParentReferences$RelationshipDomain;
    ChildRelationships: ChildRelationships$RelationshipDomain;
}
declare type Fields$RelationshipInfo = {
    Id: string;
    DurableId: string | null;
    ChildSobjectId: string | null;
    FieldId: string | null;
    IsCascadeDelete: boolean;
    IsDeprecatedAndHidden: boolean;
    IsRestrictedDelete: boolean;
    JunctionIdListNames: any | null;
};
declare type ParentReferences$RelationshipInfo = {};
declare type ChildRelationships$RelationshipInfo = {
    RelationshipDomains: SObjectDefinition$RelationshipDomain;
};
interface SObjectDefinition$RelationshipInfo extends SObjectDefinition<'RelationshipInfo'> {
    Name: 'RelationshipInfo';
    Fields: Fields$RelationshipInfo;
    ParentReferences: ParentReferences$RelationshipInfo;
    ChildRelationships: ChildRelationships$RelationshipInfo;
}
declare type Fields$Report = {
    Id: string;
    OwnerId: string;
    FolderName: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
    Name: string;
    Description: string | null;
    DeveloperName: string;
    NamespacePrefix: string | null;
    LastRunDate: DateString | null;
    SystemModstamp: DateString;
    Format: string;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
};
declare type ParentReferences$Report = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Report = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Feeds: SObjectDefinition$ReportFeed;
};
interface SObjectDefinition$Report extends SObjectDefinition<'Report'> {
    Name: 'Report';
    Fields: Fields$Report;
    ParentReferences: ParentReferences$Report;
    ChildRelationships: ChildRelationships$Report;
}
declare type Fields$ReportFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$ReportFeed = {
    Parent: SObjectDefinition$Report;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$ReportFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$ReportFeed extends SObjectDefinition<'ReportFeed'> {
    Name: 'ReportFeed';
    Fields: Fields$ReportFeed;
    ParentReferences: ParentReferences$ReportFeed;
    ChildRelationships: ChildRelationships$ReportFeed;
}
declare type Fields$SamlSsoConfig = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Version: string;
    Issuer: string;
    OptionsSpInitBinding: boolean;
    OptionsUserProvisioning: boolean;
    AttributeFormat: string | null;
    AttributeName: string | null;
    Audience: string;
    IdentityMapping: string;
    IdentityLocation: string;
    SamlJitHandlerId: string | null;
    ExecutionUserId: string | null;
    LoginUrl: string | null;
    LogoutUrl: string | null;
    ErrorUrl: string | null;
    ValidationCert: string;
    RequestSignatureMethod: string | null;
    SingleLogoutUrl: string | null;
    SingleLogoutBinding: string | null;
};
declare type ParentReferences$SamlSsoConfig = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    SamlJitHandler: SObjectDefinition$ApexClass | null;
    ExecutionUser: SObjectDefinition$User | null;
};
declare type ChildRelationships$SamlSsoConfig = {};
interface SObjectDefinition$SamlSsoConfig extends SObjectDefinition<'SamlSsoConfig'> {
    Name: 'SamlSsoConfig';
    Fields: Fields$SamlSsoConfig;
    ParentReferences: ParentReferences$SamlSsoConfig;
    ChildRelationships: ChildRelationships$SamlSsoConfig;
}
declare type Fields$Scontrol = {
    Id: string;
    Name: string;
    DeveloperName: string;
    Description: string | null;
    EncodingKey: string;
    HtmlWrapper: string;
    Filename: string | null;
    BodyLength: number;
    Binary: BlobString | null;
    ContentSource: string | null;
    SupportsCaching: boolean;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
};
declare type ParentReferences$Scontrol = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Scontrol = {};
interface SObjectDefinition$Scontrol extends SObjectDefinition<'Scontrol'> {
    Name: 'Scontrol';
    Fields: Fields$Scontrol;
    ParentReferences: ParentReferences$Scontrol;
    ChildRelationships: ChildRelationships$Scontrol;
}
declare type Fields$SearchActivity = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    SearchTerm: string;
    QueryDate: DateString;
    CountQueries: number;
    CountUsers: number;
    AvgNumResults: number;
    KbChannel: string;
    Period: string;
    ClickRank: number | null;
    ClickedRecordId: string | null;
    QueryLanguage: string;
    ClickedRecordName: string | null;
};
declare type ParentReferences$SearchActivity = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ClickedRecord: SObjectDefinition$Knowledge__kav | null;
};
declare type ChildRelationships$SearchActivity = {};
interface SObjectDefinition$SearchActivity extends SObjectDefinition<'SearchActivity'> {
    Name: 'SearchActivity';
    Fields: Fields$SearchActivity;
    ParentReferences: ParentReferences$SearchActivity;
    ChildRelationships: ChildRelationships$SearchActivity;
}
declare type Fields$SearchLayout = {
    Id: string;
    DurableId: string | null;
    Label: string | null;
    LayoutType: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    EntityDefinitionId: string | null;
    FieldsDisplayed: any | null;
    ButtonsDisplayed: any | null;
};
declare type ParentReferences$SearchLayout = {
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$SearchLayout = {};
interface SObjectDefinition$SearchLayout extends SObjectDefinition<'SearchLayout'> {
    Name: 'SearchLayout';
    Fields: Fields$SearchLayout;
    ParentReferences: ParentReferences$SearchLayout;
    ChildRelationships: ChildRelationships$SearchLayout;
}
declare type Fields$SearchPromotionRule = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Query: string;
    PromotedEntityId: string | null;
};
declare type ParentReferences$SearchPromotionRule = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    PromotedEntity: SObjectDefinition$Knowledge__kav | null;
};
declare type ChildRelationships$SearchPromotionRule = {};
interface SObjectDefinition$SearchPromotionRule extends SObjectDefinition<'SearchPromotionRule'> {
    Name: 'SearchPromotionRule';
    Fields: Fields$SearchPromotionRule;
    ParentReferences: ParentReferences$SearchPromotionRule;
    ChildRelationships: ChildRelationships$SearchPromotionRule;
}
declare type Fields$SecureAgentsCluster = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string;
    MasterLabel: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Description: string | null;
};
declare type ParentReferences$SecureAgentsCluster = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$SecureAgentsCluster = {};
interface SObjectDefinition$SecureAgentsCluster extends SObjectDefinition<'SecureAgentsCluster'> {
    Name: 'SecureAgentsCluster';
    Fields: Fields$SecureAgentsCluster;
    ParentReferences: ParentReferences$SecureAgentsCluster;
    ChildRelationships: ChildRelationships$SecureAgentsCluster;
}
declare type Fields$SecurityCustomBaseline = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string | null;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Baseline: string | null;
    IsDefault: boolean;
};
declare type ParentReferences$SecurityCustomBaseline = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$SecurityCustomBaseline = {};
interface SObjectDefinition$SecurityCustomBaseline extends SObjectDefinition<'SecurityCustomBaseline'> {
    Name: 'SecurityCustomBaseline';
    Fields: Fields$SecurityCustomBaseline;
    ParentReferences: ParentReferences$SecurityCustomBaseline;
    ChildRelationships: ChildRelationships$SecurityCustomBaseline;
}
declare type Fields$ServiceContract = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    AccountId: string | null;
    ContactId: string | null;
    Term: number | null;
    StartDate: DateString | null;
    EndDate: DateString | null;
    ActivationDate: DateString | null;
    ApprovalStatus: string | null;
    Description: string | null;
    BillingStreet: string | null;
    BillingCity: string | null;
    BillingState: string | null;
    BillingPostalCode: string | null;
    BillingCountry: string | null;
    BillingLatitude: number | null;
    BillingLongitude: number | null;
    BillingGeocodeAccuracy: string | null;
    BillingAddress: Address | null;
    ShippingStreet: string | null;
    ShippingCity: string | null;
    ShippingState: string | null;
    ShippingPostalCode: string | null;
    ShippingCountry: string | null;
    ShippingLatitude: number | null;
    ShippingLongitude: number | null;
    ShippingGeocodeAccuracy: string | null;
    ShippingAddress: Address | null;
    Pricebook2Id: string | null;
    ShippingHandling: number | null;
    Tax: number | null;
    Subtotal: number | null;
    TotalPrice: number | null;
    LineItemCount: number | null;
    ContractNumber: string;
    SpecialTerms: string | null;
    Discount: number | null;
    GrandTotal: number | null;
    Status: string | null;
    ParentServiceContractId: string | null;
    RootServiceContractId: string | null;
};
declare type ParentReferences$ServiceContract = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Account: SObjectDefinition$Account | null;
    Contact: SObjectDefinition$Contact | null;
    Pricebook2: SObjectDefinition$Pricebook2 | null;
    ParentServiceContract: SObjectDefinition$ServiceContract | null;
    RootServiceContract: SObjectDefinition$ServiceContract | null;
};
declare type ChildRelationships$ServiceContract = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    ContractLineItems: SObjectDefinition$ContractLineItem;
    Emails: SObjectDefinition$EmailMessage;
    Entitlements: SObjectDefinition$Entitlement;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    OpenActivities: SObjectDefinition$OpenActivity;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    ChildServiceContracts: SObjectDefinition$ServiceContract;
    DescendantServiceContracts: SObjectDefinition$ServiceContract;
    Feeds: SObjectDefinition$ServiceContractFeed;
    Histories: SObjectDefinition$ServiceContractHistory;
    Tasks: SObjectDefinition$Task;
    WorkOrders: SObjectDefinition$WorkOrder;
};
interface SObjectDefinition$ServiceContract extends SObjectDefinition<'ServiceContract'> {
    Name: 'ServiceContract';
    Fields: Fields$ServiceContract;
    ParentReferences: ParentReferences$ServiceContract;
    ChildRelationships: ChildRelationships$ServiceContract;
}
declare type Fields$ServiceContractChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    OwnerId: string | null;
    Name: string | null;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    AccountId: string | null;
    ContactId: string | null;
    Term: number | null;
    StartDate: DateString | null;
    EndDate: DateString | null;
    ActivationDate: DateString | null;
    ApprovalStatus: string | null;
    Description: string | null;
    BillingStreet: string | null;
    BillingCity: string | null;
    BillingState: string | null;
    BillingPostalCode: string | null;
    BillingCountry: string | null;
    BillingLatitude: number | null;
    BillingLongitude: number | null;
    BillingGeocodeAccuracy: string | null;
    BillingAddress: Address | null;
    ShippingStreet: string | null;
    ShippingCity: string | null;
    ShippingState: string | null;
    ShippingPostalCode: string | null;
    ShippingCountry: string | null;
    ShippingLatitude: number | null;
    ShippingLongitude: number | null;
    ShippingGeocodeAccuracy: string | null;
    ShippingAddress: Address | null;
    Pricebook2Id: string | null;
    ShippingHandling: number | null;
    Tax: number | null;
    Subtotal: number | null;
    TotalPrice: number | null;
    LineItemCount: number | null;
    ContractNumber: string;
    SpecialTerms: string | null;
    ParentServiceContractId: string | null;
    RootServiceContractId: string | null;
};
declare type ParentReferences$ServiceContractChangeEvent = {};
declare type ChildRelationships$ServiceContractChangeEvent = {};
interface SObjectDefinition$ServiceContractChangeEvent extends SObjectDefinition<'ServiceContractChangeEvent'> {
    Name: 'ServiceContractChangeEvent';
    Fields: Fields$ServiceContractChangeEvent;
    ParentReferences: ParentReferences$ServiceContractChangeEvent;
    ChildRelationships: ChildRelationships$ServiceContractChangeEvent;
}
declare type Fields$ServiceContractFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$ServiceContractFeed = {
    Parent: SObjectDefinition$ServiceContract;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$ServiceContractFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$ServiceContractFeed extends SObjectDefinition<'ServiceContractFeed'> {
    Name: 'ServiceContractFeed';
    Fields: Fields$ServiceContractFeed;
    ParentReferences: ParentReferences$ServiceContractFeed;
    ChildRelationships: ChildRelationships$ServiceContractFeed;
}
declare type Fields$ServiceContractHistory = {
    Id: string;
    IsDeleted: boolean;
    ServiceContractId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$ServiceContractHistory = {
    ServiceContract: SObjectDefinition$ServiceContract;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ServiceContractHistory = {};
interface SObjectDefinition$ServiceContractHistory extends SObjectDefinition<'ServiceContractHistory'> {
    Name: 'ServiceContractHistory';
    Fields: Fields$ServiceContractHistory;
    ParentReferences: ParentReferences$ServiceContractHistory;
    ChildRelationships: ChildRelationships$ServiceContractHistory;
}
declare type Fields$ServiceContractShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$ServiceContractShare = {
    Parent: SObjectDefinition$ServiceContract;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$ServiceContractShare = {};
interface SObjectDefinition$ServiceContractShare extends SObjectDefinition<'ServiceContractShare'> {
    Name: 'ServiceContractShare';
    Fields: Fields$ServiceContractShare;
    ParentReferences: ParentReferences$ServiceContractShare;
    ChildRelationships: ChildRelationships$ServiceContractShare;
}
declare type Fields$SessionPermSetActivation = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    AuthSessionId: string;
    PermissionSetId: string;
    UserId: string;
    Description: string | null;
};
declare type ParentReferences$SessionPermSetActivation = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    AuthSession: SObjectDefinition$AuthSession;
    PermissionSet: SObjectDefinition$PermissionSet;
    User: SObjectDefinition$User;
};
declare type ChildRelationships$SessionPermSetActivation = {};
interface SObjectDefinition$SessionPermSetActivation extends SObjectDefinition<'SessionPermSetActivation'> {
    Name: 'SessionPermSetActivation';
    Fields: Fields$SessionPermSetActivation;
    ParentReferences: ParentReferences$SessionPermSetActivation;
    ChildRelationships: ChildRelationships$SessionPermSetActivation;
}
declare type Fields$SetupAuditTrail = {
    Id: string;
    Action: string;
    Section: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    Display: string | null;
    DelegateUser: string | null;
    ResponsibleNamespacePrefix: string | null;
};
declare type ParentReferences$SetupAuditTrail = {
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$SetupAuditTrail = {};
interface SObjectDefinition$SetupAuditTrail extends SObjectDefinition<'SetupAuditTrail'> {
    Name: 'SetupAuditTrail';
    Fields: Fields$SetupAuditTrail;
    ParentReferences: ParentReferences$SetupAuditTrail;
    ChildRelationships: ChildRelationships$SetupAuditTrail;
}
declare type Fields$SetupEntityAccess = {
    Id: string;
    ParentId: string;
    SetupEntityId: string;
    SetupEntityType: string | null;
    SystemModstamp: DateString;
};
declare type ParentReferences$SetupEntityAccess = {
    Parent: SObjectDefinition$PermissionSet;
};
declare type ChildRelationships$SetupEntityAccess = {};
interface SObjectDefinition$SetupEntityAccess extends SObjectDefinition<'SetupEntityAccess'> {
    Name: 'SetupEntityAccess';
    Fields: Fields$SetupEntityAccess;
    ParentReferences: ParentReferences$SetupEntityAccess;
    ChildRelationships: ChildRelationships$SetupEntityAccess;
}
declare type Fields$Site = {
    Id: string;
    Name: string;
    Subdomain: string | null;
    UrlPathPrefix: string | null;
    GuestUserId: string | null;
    Status: string;
    AdminId: string;
    OptionsEnableFeeds: boolean;
    OptionsRequireHttps: boolean;
    OptionsAllowHomePage: boolean;
    OptionsAllowStandardIdeasPages: boolean;
    OptionsAllowStandardSearch: boolean;
    OptionsAllowStandardLookups: boolean;
    OptionsAllowStandardAnswersPages: boolean;
    OptionsAllowGuestSupportApi: boolean;
    OptionsAllowStandardPortalPages: boolean;
    OptionsCspUpgradeInsecureRequests: boolean;
    OptionsContentSniffingProtection: boolean;
    OptionsBrowserXssProtection: boolean;
    OptionsReferrerPolicyOriginWhenCrossOrigin: boolean;
    Description: string | null;
    MasterLabel: string;
    AnalyticsTrackingCode: string | null;
    SiteType: string;
    ClickjackProtectionLevel: string;
    DailyBandwidthLimit: number | null;
    DailyBandwidthUsed: number | null;
    DailyRequestTimeLimit: number | null;
    DailyRequestTimeUsed: number | null;
    MonthlyPageViewsEntitlement: number | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$Site = {
    GuestUser: SObjectDefinition$User | null;
    Admin: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Site = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    SiteDomainPaths: SObjectDefinition$DomainSite;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Feeds: SObjectDefinition$SiteFeed;
    Histories: SObjectDefinition$SiteHistory;
};
interface SObjectDefinition$Site extends SObjectDefinition<'Site'> {
    Name: 'Site';
    Fields: Fields$Site;
    ParentReferences: ParentReferences$Site;
    ChildRelationships: ChildRelationships$Site;
}
declare type Fields$SiteDetail = {
    Id: string;
    DurableId: string | null;
    IsRegistrationEnabled: boolean;
    SecureUrl: string | null;
};
declare type ParentReferences$SiteDetail = {};
declare type ChildRelationships$SiteDetail = {};
interface SObjectDefinition$SiteDetail extends SObjectDefinition<'SiteDetail'> {
    Name: 'SiteDetail';
    Fields: Fields$SiteDetail;
    ParentReferences: ParentReferences$SiteDetail;
    ChildRelationships: ChildRelationships$SiteDetail;
}
declare type Fields$SiteFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$SiteFeed = {
    Parent: SObjectDefinition$Site;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$SiteFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$SiteFeed extends SObjectDefinition<'SiteFeed'> {
    Name: 'SiteFeed';
    Fields: Fields$SiteFeed;
    ParentReferences: ParentReferences$SiteFeed;
    ChildRelationships: ChildRelationships$SiteFeed;
}
declare type Fields$SiteHistory = {
    Id: string;
    IsDeleted: boolean;
    SiteId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$SiteHistory = {
    Site: SObjectDefinition$Site;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$SiteHistory = {};
interface SObjectDefinition$SiteHistory extends SObjectDefinition<'SiteHistory'> {
    Name: 'SiteHistory';
    Fields: Fields$SiteHistory;
    ParentReferences: ParentReferences$SiteHistory;
    ChildRelationships: ChildRelationships$SiteHistory;
}
declare type Fields$SlaProcess = {
    Id: string;
    Name: string;
    NameNorm: string;
    Description: string | null;
    IsActive: boolean;
    StartDateField: string;
    SobjectType: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
    BusinessHoursId: string | null;
    LastViewedDate: DateString | null;
};
declare type ParentReferences$SlaProcess = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    BusinessHours: SObjectDefinition$BusinessHours | null;
};
declare type ChildRelationships$SlaProcess = {
    EntityMilestones: SObjectDefinition$EntityMilestone;
};
interface SObjectDefinition$SlaProcess extends SObjectDefinition<'SlaProcess'> {
    Name: 'SlaProcess';
    Fields: Fields$SlaProcess;
    ParentReferences: ParentReferences$SlaProcess;
    ChildRelationships: ChildRelationships$SlaProcess;
}
declare type Fields$SocialPersona = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    ParentId: string;
    Provider: string;
    ExternalId: string | null;
    IsDefault: boolean;
    ExternalPictureURL: string | null;
    ProfileUrl: string | null;
    TopicType: string | null;
    IsBlacklisted: boolean;
    Klout: number | null;
    RealName: string | null;
    IsFollowingUs: boolean;
    AreWeFollowing: boolean;
    MediaType: string | null;
    Bio: string | null;
    Followers: number | null;
    Following: number | null;
    NumberOfFriends: number | null;
    ListedCount: number | null;
    MediaProvider: string | null;
    ProfileType: string | null;
    R6SourceId: string | null;
    NumberOfTweets: number | null;
    SourceApp: string | null;
    AuthorLabels: string | null;
    IsVerified: boolean;
    InfluencerScore: number | null;
};
declare type ParentReferences$SocialPersona = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Parent: SObjectDefinition$Name;
};
declare type ChildRelationships$SocialPersona = {
    RecordActions: SObjectDefinition$RecordAction;
    Histories: SObjectDefinition$SocialPersonaHistory;
    Posts: SObjectDefinition$SocialPost;
};
interface SObjectDefinition$SocialPersona extends SObjectDefinition<'SocialPersona'> {
    Name: 'SocialPersona';
    Fields: Fields$SocialPersona;
    ParentReferences: ParentReferences$SocialPersona;
    ChildRelationships: ChildRelationships$SocialPersona;
}
declare type Fields$SocialPersonaHistory = {
    Id: string;
    IsDeleted: boolean;
    SocialPersonaId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$SocialPersonaHistory = {
    SocialPersona: SObjectDefinition$SocialPersona;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$SocialPersonaHistory = {};
interface SObjectDefinition$SocialPersonaHistory extends SObjectDefinition<'SocialPersonaHistory'> {
    Name: 'SocialPersonaHistory';
    Fields: Fields$SocialPersonaHistory;
    ParentReferences: ParentReferences$SocialPersonaHistory;
    ChildRelationships: ChildRelationships$SocialPersonaHistory;
}
declare type Fields$SocialPost = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    ParentId: string | null;
    PersonaId: string | null;
    WhoId: string | null;
    ReplyToId: string | null;
    Headline: string | null;
    Content: string | null;
    Posted: DateString;
    PostUrl: string | null;
    Provider: string | null;
    Handle: string | null;
    SpamRating: string | null;
    MediaType: string | null;
    MediaProvider: string | null;
    Sentiment: string | null;
    PostPriority: string | null;
    Status: string | null;
    StatusMessage: string | null;
    Recipient: string | null;
    RecipientType: string | null;
    MessageType: string | null;
    R6PostId: string | null;
    R6TopicId: string | null;
    R6SourceId: string | null;
    TopicType: string | null;
    ExternalPostId: string | null;
    HarvestDate: DateString | null;
    IsOutbound: boolean;
    PostTags: string | null;
    SourceTags: string | null;
    Classification: string | null;
    ThreadSize: number | null;
    CommentCount: number | null;
    Shares: number | null;
    ViewCount: number | null;
    InboundLinkCount: number | null;
    UniqueCommentors: number | null;
    LikesAndVotes: number | null;
    TopicProfileName: string | null;
    KeywordGroupName: string | null;
    EngagementLevel: string | null;
    AssignedTo: string | null;
    OutboundSocialAccountId: string | null;
    ReviewedStatus: string | null;
    AttachmentUrl: string | null;
    AttachmentType: string | null;
    DeletedById: string | null;
    ResponseContextExternalId: string | null;
    LikedBy: string | null;
    AnalyzerScore: number | null;
    Language: string | null;
    ReviewScore: number | null;
    ReviewScale: number | null;
    HiddenById: string | null;
    Notes: string | null;
    TruncatedContent: string | null;
};
declare type ParentReferences$SocialPost = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Parent: SObjectDefinition$Case | null;
    Persona: SObjectDefinition$SocialPersona | null;
    Who: SObjectDefinition$Name | null;
    ReplyTo: SObjectDefinition$SocialPost | null;
    OutboundSocialAccount: SObjectDefinition$ExternalSocialAccount | null;
    DeletedBy: SObjectDefinition$User | null;
    HiddenBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$SocialPost = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    Personas: SObjectDefinition$SocialPersona;
    Replies: SObjectDefinition$SocialPost;
    Feeds: SObjectDefinition$SocialPostFeed;
    Histories: SObjectDefinition$SocialPostHistory;
};
interface SObjectDefinition$SocialPost extends SObjectDefinition<'SocialPost'> {
    Name: 'SocialPost';
    Fields: Fields$SocialPost;
    ParentReferences: ParentReferences$SocialPost;
    ChildRelationships: ChildRelationships$SocialPost;
}
declare type Fields$SocialPostFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$SocialPostFeed = {
    Parent: SObjectDefinition$SocialPost;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$SocialPostFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$SocialPostFeed extends SObjectDefinition<'SocialPostFeed'> {
    Name: 'SocialPostFeed';
    Fields: Fields$SocialPostFeed;
    ParentReferences: ParentReferences$SocialPostFeed;
    ChildRelationships: ChildRelationships$SocialPostFeed;
}
declare type Fields$SocialPostHistory = {
    Id: string;
    IsDeleted: boolean;
    SocialPostId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$SocialPostHistory = {
    SocialPost: SObjectDefinition$SocialPost;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$SocialPostHistory = {};
interface SObjectDefinition$SocialPostHistory extends SObjectDefinition<'SocialPostHistory'> {
    Name: 'SocialPostHistory';
    Fields: Fields$SocialPostHistory;
    ParentReferences: ParentReferences$SocialPostHistory;
    ChildRelationships: ChildRelationships$SocialPostHistory;
}
declare type Fields$SocialPostShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$SocialPostShare = {
    Parent: SObjectDefinition$SocialPost;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$SocialPostShare = {};
interface SObjectDefinition$SocialPostShare extends SObjectDefinition<'SocialPostShare'> {
    Name: 'SocialPostShare';
    Fields: Fields$SocialPostShare;
    ParentReferences: ParentReferences$SocialPostShare;
    ChildRelationships: ChildRelationships$SocialPostShare;
}
declare type Fields$Solution = {
    Id: string;
    IsDeleted: boolean;
    SolutionNumber: string;
    SolutionName: string;
    IsPublished: boolean;
    IsPublishedInPublicKb: boolean;
    Status: string;
    IsReviewed: boolean;
    SolutionNote: string | null;
    OwnerId: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    TimesUsed: number;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    IsHtml: boolean;
};
declare type ParentReferences$Solution = {
    Owner: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Solution = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    CaseSolutions: SObjectDefinition$CaseSolution;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    Emails: SObjectDefinition$EmailMessage;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    OpenActivities: SObjectDefinition$OpenActivity;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    Feeds: SObjectDefinition$SolutionFeed;
    Histories: SObjectDefinition$SolutionHistory;
    Tasks: SObjectDefinition$Task;
    TopicAssignments: SObjectDefinition$TopicAssignment;
    Votes: SObjectDefinition$Vote;
};
interface SObjectDefinition$Solution extends SObjectDefinition<'Solution'> {
    Name: 'Solution';
    Fields: Fields$Solution;
    ParentReferences: ParentReferences$Solution;
    ChildRelationships: ChildRelationships$Solution;
}
declare type Fields$SolutionFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$SolutionFeed = {
    Parent: SObjectDefinition$Solution;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$SolutionFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$SolutionFeed extends SObjectDefinition<'SolutionFeed'> {
    Name: 'SolutionFeed';
    Fields: Fields$SolutionFeed;
    ParentReferences: ParentReferences$SolutionFeed;
    ChildRelationships: ChildRelationships$SolutionFeed;
}
declare type Fields$SolutionHistory = {
    Id: string;
    IsDeleted: boolean;
    SolutionId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$SolutionHistory = {
    Solution: SObjectDefinition$Solution;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$SolutionHistory = {};
interface SObjectDefinition$SolutionHistory extends SObjectDefinition<'SolutionHistory'> {
    Name: 'SolutionHistory';
    Fields: Fields$SolutionHistory;
    ParentReferences: ParentReferences$SolutionHistory;
    ChildRelationships: ChildRelationships$SolutionHistory;
}
declare type Fields$SolutionStatus = {
    Id: string;
    MasterLabel: string | null;
    ApiName: string;
    SortOrder: number | null;
    IsDefault: boolean;
    IsReviewed: boolean;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$SolutionStatus = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$SolutionStatus = {};
interface SObjectDefinition$SolutionStatus extends SObjectDefinition<'SolutionStatus'> {
    Name: 'SolutionStatus';
    Fields: Fields$SolutionStatus;
    ParentReferences: ParentReferences$SolutionStatus;
    ChildRelationships: ChildRelationships$SolutionStatus;
}
declare type Fields$SourceChangeNotification = {
    ReplayId: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    MemberType: string | null;
    MemberName: string | null;
    IsNameObsolete: boolean;
    RevisionNum: number | null;
};
declare type ParentReferences$SourceChangeNotification = {
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$SourceChangeNotification = {};
interface SObjectDefinition$SourceChangeNotification extends SObjectDefinition<'SourceChangeNotification'> {
    Name: 'SourceChangeNotification';
    Fields: Fields$SourceChangeNotification;
    ParentReferences: ParentReferences$SourceChangeNotification;
    ChildRelationships: ChildRelationships$SourceChangeNotification;
}
declare type Fields$Stamp = {
    Id: string;
    IsDeleted: boolean;
    ParentId: string;
    MasterLabel: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Description: string | null;
};
declare type ParentReferences$Stamp = {
    Parent: SObjectDefinition$Organization;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Stamp = {
    CustomBrands: SObjectDefinition$CustomBrand;
};
interface SObjectDefinition$Stamp extends SObjectDefinition<'Stamp'> {
    Name: 'Stamp';
    Fields: Fields$Stamp;
    ParentReferences: ParentReferences$Stamp;
    ChildRelationships: ChildRelationships$Stamp;
}
declare type Fields$StampAssignment = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    StampId: string;
    SubjectId: string;
};
declare type ParentReferences$StampAssignment = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Stamp: SObjectDefinition$Stamp;
    Subject: SObjectDefinition$User;
};
declare type ChildRelationships$StampAssignment = {};
interface SObjectDefinition$StampAssignment extends SObjectDefinition<'StampAssignment'> {
    Name: 'StampAssignment';
    Fields: Fields$StampAssignment;
    ParentReferences: ParentReferences$StampAssignment;
    ChildRelationships: ChildRelationships$StampAssignment;
}
declare type Fields$StaticResource = {
    Id: string;
    NamespacePrefix: string | null;
    Name: string;
    ContentType: string;
    BodyLength: number;
    Body: BlobString | null;
    Description: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    CacheControl: string;
};
declare type ParentReferences$StaticResource = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$StaticResource = {};
interface SObjectDefinition$StaticResource extends SObjectDefinition<'StaticResource'> {
    Name: 'StaticResource';
    Fields: Fields$StaticResource;
    ParentReferences: ParentReferences$StaticResource;
    ChildRelationships: ChildRelationships$StaticResource;
}
declare type Fields$StreamingChannel = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    IsDynamic: boolean;
    Description: string | null;
};
declare type ParentReferences$StreamingChannel = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$StreamingChannel = {
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
};
interface SObjectDefinition$StreamingChannel extends SObjectDefinition<'StreamingChannel'> {
    Name: 'StreamingChannel';
    Fields: Fields$StreamingChannel;
    ParentReferences: ParentReferences$StreamingChannel;
    ChildRelationships: ChildRelationships$StreamingChannel;
}
declare type Fields$StreamingChannelShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$StreamingChannelShare = {
    Parent: SObjectDefinition$StreamingChannel;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$StreamingChannelShare = {};
interface SObjectDefinition$StreamingChannelShare extends SObjectDefinition<'StreamingChannelShare'> {
    Name: 'StreamingChannelShare';
    Fields: Fields$StreamingChannelShare;
    ParentReferences: ParentReferences$StreamingChannelShare;
    ChildRelationships: ChildRelationships$StreamingChannelShare;
}
declare type Fields$TabDefinition = {
    Id: string;
    DurableId: string | null;
    Name: string | null;
    Label: string | null;
    IsCustom: boolean;
    SobjectName: string | null;
    Url: string | null;
    IsAvailableInAloha: boolean;
    IsAvailableInLightning: boolean;
};
declare type ParentReferences$TabDefinition = {};
declare type ChildRelationships$TabDefinition = {
    AppTabs: SObjectDefinition$AppTabMember;
    Colors: SObjectDefinition$ColorDefinition;
    Icons: SObjectDefinition$IconDefinition;
};
interface SObjectDefinition$TabDefinition extends SObjectDefinition<'TabDefinition'> {
    Name: 'TabDefinition';
    Fields: Fields$TabDefinition;
    ParentReferences: ParentReferences$TabDefinition;
    ChildRelationships: ChildRelationships$TabDefinition;
}
declare type Fields$Task = {
    Id: string;
    WhoId: string | null;
    WhatId: string | null;
    Subject: string | null;
    ActivityDate: DateString | null;
    Status: string;
    Priority: string;
    IsHighPriority: boolean;
    OwnerId: string;
    Description: string | null;
    IsDeleted: boolean;
    AccountId: string | null;
    IsClosed: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsArchived: boolean;
    CallDurationInSeconds: number | null;
    CallType: string | null;
    CallDisposition: string | null;
    CallObject: string | null;
    ReminderDateTime: DateString | null;
    IsReminderSet: boolean;
    RecurrenceActivityId: string | null;
    IsRecurrence: boolean;
    RecurrenceStartDateOnly: DateString | null;
    RecurrenceEndDateOnly: DateString | null;
    RecurrenceTimeZoneSidKey: string | null;
    RecurrenceType: string | null;
    RecurrenceInterval: number | null;
    RecurrenceDayOfWeekMask: number | null;
    RecurrenceDayOfMonth: number | null;
    RecurrenceInstance: string | null;
    RecurrenceMonthOfYear: string | null;
    RecurrenceRegeneratedType: string | null;
    TaskSubtype: string | null;
};
declare type ParentReferences$Task = {
    Who: SObjectDefinition$Name | null;
    What: SObjectDefinition$Name | null;
    Owner: SObjectDefinition$User;
    Account: SObjectDefinition$Account | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Task = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    RecurringTasks: SObjectDefinition$Task;
    Feeds: SObjectDefinition$TaskFeed;
    TopicAssignments: SObjectDefinition$TopicAssignment;
};
interface SObjectDefinition$Task extends SObjectDefinition<'Task'> {
    Name: 'Task';
    Fields: Fields$Task;
    ParentReferences: ParentReferences$Task;
    ChildRelationships: ChildRelationships$Task;
}
declare type Fields$TaskChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    WhoId: string | null;
    WhatId: string | null;
    Subject: string | null;
    ActivityDate: DateString | null;
    Status: string | null;
    Priority: string | null;
    OwnerId: string | null;
    Description: string | null;
    AccountId: string | null;
    IsClosed: boolean;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    CallDurationInSeconds: number | null;
    CallType: string | null;
    CallDisposition: string | null;
    CallObject: string | null;
    ReminderDateTime: DateString | null;
    IsReminderSet: boolean;
    RecurrenceActivityId: string | null;
    IsRecurrence: boolean;
    RecurrenceStartDateOnly: DateString | null;
    RecurrenceEndDateOnly: DateString | null;
    RecurrenceTimeZoneSidKey: string | null;
    RecurrenceType: string | null;
    RecurrenceInterval: number | null;
    RecurrenceDayOfWeekMask: number | null;
    RecurrenceDayOfMonth: number | null;
    RecurrenceInstance: string | null;
    RecurrenceMonthOfYear: string | null;
    RecurrenceRegeneratedType: string | null;
};
declare type ParentReferences$TaskChangeEvent = {};
declare type ChildRelationships$TaskChangeEvent = {};
interface SObjectDefinition$TaskChangeEvent extends SObjectDefinition<'TaskChangeEvent'> {
    Name: 'TaskChangeEvent';
    Fields: Fields$TaskChangeEvent;
    ParentReferences: ParentReferences$TaskChangeEvent;
    ChildRelationships: ChildRelationships$TaskChangeEvent;
}
declare type Fields$TaskFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$TaskFeed = {
    Parent: SObjectDefinition$Task;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$TaskFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$TaskFeed extends SObjectDefinition<'TaskFeed'> {
    Name: 'TaskFeed';
    Fields: Fields$TaskFeed;
    ParentReferences: ParentReferences$TaskFeed;
    ChildRelationships: ChildRelationships$TaskFeed;
}
declare type Fields$TaskPriority = {
    Id: string;
    MasterLabel: string | null;
    ApiName: string;
    SortOrder: number | null;
    IsDefault: boolean;
    IsHighPriority: boolean;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$TaskPriority = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$TaskPriority = {};
interface SObjectDefinition$TaskPriority extends SObjectDefinition<'TaskPriority'> {
    Name: 'TaskPriority';
    Fields: Fields$TaskPriority;
    ParentReferences: ParentReferences$TaskPriority;
    ChildRelationships: ChildRelationships$TaskPriority;
}
declare type Fields$TaskStatus = {
    Id: string;
    MasterLabel: string | null;
    ApiName: string;
    SortOrder: number | null;
    IsDefault: boolean;
    IsClosed: boolean;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$TaskStatus = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$TaskStatus = {};
interface SObjectDefinition$TaskStatus extends SObjectDefinition<'TaskStatus'> {
    Name: 'TaskStatus';
    Fields: Fields$TaskStatus;
    ParentReferences: ParentReferences$TaskStatus;
    ChildRelationships: ChildRelationships$TaskStatus;
}
declare type Fields$TenantUsageEntitlement = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ResourceGroupKey: string;
    Setting: string;
    StartDate: DateString;
    EndDate: DateString | null;
    CurrentAmountAllowed: number;
    Frequency: string | null;
    IsPersistentResource: boolean;
    HasRollover: boolean;
    OverageGrace: number | null;
    AmountUsed: number | null;
    UsageDate: DateString | null;
    MasterLabel: string | null;
};
declare type ParentReferences$TenantUsageEntitlement = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$TenantUsageEntitlement = {};
interface SObjectDefinition$TenantUsageEntitlement extends SObjectDefinition<'TenantUsageEntitlement'> {
    Name: 'TenantUsageEntitlement';
    Fields: Fields$TenantUsageEntitlement;
    ParentReferences: ParentReferences$TenantUsageEntitlement;
    ChildRelationships: ChildRelationships$TenantUsageEntitlement;
}
declare type Fields$TestSuiteMembership = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ApexTestSuiteId: string;
    ApexClassId: string;
};
declare type ParentReferences$TestSuiteMembership = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ApexTestSuite: SObjectDefinition$ApexTestSuite;
    ApexClass: SObjectDefinition$ApexClass;
};
declare type ChildRelationships$TestSuiteMembership = {};
interface SObjectDefinition$TestSuiteMembership extends SObjectDefinition<'TestSuiteMembership'> {
    Name: 'TestSuiteMembership';
    Fields: Fields$TestSuiteMembership;
    ParentReferences: ParentReferences$TestSuiteMembership;
    ChildRelationships: ChildRelationships$TestSuiteMembership;
}
declare type Fields$ThirdPartyAccountLink = {
    Id: string;
    ThirdPartyAccountLinkKey: string | null;
    UserId: string | null;
    SsoProviderId: string | null;
    Handle: string | null;
    RemoteIdentifier: string | null;
    Provider: string | null;
    SsoProviderName: string | null;
    IsNotSsoUsable: boolean;
};
declare type ParentReferences$ThirdPartyAccountLink = {
    User: SObjectDefinition$User | null;
    SsoProvider: SObjectDefinition$AuthProvider | null;
};
declare type ChildRelationships$ThirdPartyAccountLink = {};
interface SObjectDefinition$ThirdPartyAccountLink extends SObjectDefinition<'ThirdPartyAccountLink'> {
    Name: 'ThirdPartyAccountLink';
    Fields: Fields$ThirdPartyAccountLink;
    ParentReferences: ParentReferences$ThirdPartyAccountLink;
    ChildRelationships: ChildRelationships$ThirdPartyAccountLink;
}
declare type Fields$TodayGoal = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    Value: number | null;
    UserId: string;
};
declare type ParentReferences$TodayGoal = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    User: SObjectDefinition$User;
};
declare type ChildRelationships$TodayGoal = {};
interface SObjectDefinition$TodayGoal extends SObjectDefinition<'TodayGoal'> {
    Name: 'TodayGoal';
    Fields: Fields$TodayGoal;
    ParentReferences: ParentReferences$TodayGoal;
    ChildRelationships: ChildRelationships$TodayGoal;
}
declare type Fields$TodayGoalShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$TodayGoalShare = {
    Parent: SObjectDefinition$TodayGoal;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$TodayGoalShare = {};
interface SObjectDefinition$TodayGoalShare extends SObjectDefinition<'TodayGoalShare'> {
    Name: 'TodayGoalShare';
    Fields: Fields$TodayGoalShare;
    ParentReferences: ParentReferences$TodayGoalShare;
    ChildRelationships: ChildRelationships$TodayGoalShare;
}
declare type Fields$Topic = {
    Id: string;
    Name: string;
    Description: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    TalkingAbout: number;
    SystemModstamp: DateString;
};
declare type ParentReferences$Topic = {
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Topic = {
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    CustomBrands: SObjectDefinition$CustomBrand;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    TopicAssignments: SObjectDefinition$TopicAssignment;
    Feeds: SObjectDefinition$TopicFeed;
};
interface SObjectDefinition$Topic extends SObjectDefinition<'Topic'> {
    Name: 'Topic';
    Fields: Fields$Topic;
    ParentReferences: ParentReferences$Topic;
    ChildRelationships: ChildRelationships$Topic;
}
declare type Fields$TopicAssignment = {
    Id: string;
    TopicId: string;
    EntityId: string;
    EntityKeyPrefix: string;
    EntityType: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    IsDeleted: boolean;
    SystemModstamp: DateString;
};
declare type ParentReferences$TopicAssignment = {
    Topic: SObjectDefinition$Topic;
    Entity: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$TopicAssignment = {};
interface SObjectDefinition$TopicAssignment extends SObjectDefinition<'TopicAssignment'> {
    Name: 'TopicAssignment';
    Fields: Fields$TopicAssignment;
    ParentReferences: ParentReferences$TopicAssignment;
    ChildRelationships: ChildRelationships$TopicAssignment;
}
declare type Fields$TopicFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$TopicFeed = {
    Parent: SObjectDefinition$Topic;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$TopicFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$TopicFeed extends SObjectDefinition<'TopicFeed'> {
    Name: 'TopicFeed';
    Fields: Fields$TopicFeed;
    ParentReferences: ParentReferences$TopicFeed;
    ChildRelationships: ChildRelationships$TopicFeed;
}
declare type Fields$TopicUserEvent = {
    Id: string;
    UserId: string;
    TopicId: string;
    ActionEnum: string;
    CreatedDate: DateString;
};
declare type ParentReferences$TopicUserEvent = {};
declare type ChildRelationships$TopicUserEvent = {};
interface SObjectDefinition$TopicUserEvent extends SObjectDefinition<'TopicUserEvent'> {
    Name: 'TopicUserEvent';
    Fields: Fields$TopicUserEvent;
    ParentReferences: ParentReferences$TopicUserEvent;
    ChildRelationships: ChildRelationships$TopicUserEvent;
}
declare type Fields$UndecidedEventRelation = {
    Id: string;
    RelationId: string | null;
    EventId: string | null;
    RespondedDate: DateString | null;
    Response: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    IsDeleted: boolean;
    Type: string | null;
};
declare type ParentReferences$UndecidedEventRelation = {
    Relation: SObjectDefinition$Name | null;
    Event: SObjectDefinition$Event | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$UndecidedEventRelation = {};
interface SObjectDefinition$UndecidedEventRelation extends SObjectDefinition<'UndecidedEventRelation'> {
    Name: 'UndecidedEventRelation';
    Fields: Fields$UndecidedEventRelation;
    ParentReferences: ParentReferences$UndecidedEventRelation;
    ChildRelationships: ChildRelationships$UndecidedEventRelation;
}
declare type Fields$User = {
    Id: string;
    Username: string;
    LastName: string;
    FirstName: string | null;
    Name: string;
    CompanyName: string | null;
    Division: string | null;
    Department: string | null;
    Title: string | null;
    Street: string | null;
    City: string | null;
    State: string | null;
    PostalCode: string | null;
    Country: string | null;
    Latitude: number | null;
    Longitude: number | null;
    GeocodeAccuracy: string | null;
    Address: Address | null;
    Email: string;
    EmailPreferencesAutoBcc: boolean;
    EmailPreferencesAutoBccStayInTouch: boolean;
    EmailPreferencesStayInTouchReminder: boolean;
    SenderEmail: string | null;
    SenderName: string | null;
    Signature: string | null;
    StayInTouchSubject: string | null;
    StayInTouchSignature: string | null;
    StayInTouchNote: string | null;
    Phone: string | null;
    Fax: string | null;
    MobilePhone: string | null;
    Alias: string;
    CommunityNickname: string;
    BadgeText: string | null;
    IsActive: boolean;
    TimeZoneSidKey: string;
    UserRoleId: string | null;
    LocaleSidKey: string;
    ReceivesInfoEmails: boolean;
    ReceivesAdminInfoEmails: boolean;
    EmailEncodingKey: string;
    ProfileId: string;
    UserType: string | null;
    LanguageLocaleKey: string;
    EmployeeNumber: string | null;
    DelegatedApproverId: string | null;
    ManagerId: string | null;
    LastLoginDate: DateString | null;
    LastPasswordChangeDate: DateString | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    OfflineTrialExpirationDate: DateString | null;
    OfflinePdaTrialExpirationDate: DateString | null;
    UserPermissionsMarketingUser: boolean;
    UserPermissionsOfflineUser: boolean;
    UserPermissionsAvantgoUser: boolean;
    UserPermissionsCallCenterAutoLogin: boolean;
    UserPermissionsMobileUser: boolean;
    UserPermissionsSFContentUser: boolean;
    UserPermissionsKnowledgeUser: boolean;
    UserPermissionsInteractionUser: boolean;
    UserPermissionsSupportUser: boolean;
    ForecastEnabled: boolean;
    UserPreferencesActivityRemindersPopup: boolean;
    UserPreferencesEventRemindersCheckboxDefault: boolean;
    UserPreferencesTaskRemindersCheckboxDefault: boolean;
    UserPreferencesReminderSoundOff: boolean;
    UserPreferencesDisableAllFeedsEmail: boolean;
    UserPreferencesDisableFollowersEmail: boolean;
    UserPreferencesDisableProfilePostEmail: boolean;
    UserPreferencesDisableChangeCommentEmail: boolean;
    UserPreferencesDisableLaterCommentEmail: boolean;
    UserPreferencesDisProfPostCommentEmail: boolean;
    UserPreferencesContentNoEmail: boolean;
    UserPreferencesContentEmailAsAndWhen: boolean;
    UserPreferencesApexPagesDeveloperMode: boolean;
    UserPreferencesHideCSNGetChatterMobileTask: boolean;
    UserPreferencesDisableMentionsPostEmail: boolean;
    UserPreferencesDisMentionsCommentEmail: boolean;
    UserPreferencesHideCSNDesktopTask: boolean;
    UserPreferencesHideChatterOnboardingSplash: boolean;
    UserPreferencesHideSecondChatterOnboardingSplash: boolean;
    UserPreferencesDisCommentAfterLikeEmail: boolean;
    UserPreferencesDisableLikeEmail: boolean;
    UserPreferencesSortFeedByComment: boolean;
    UserPreferencesDisableMessageEmail: boolean;
    UserPreferencesDisableBookmarkEmail: boolean;
    UserPreferencesDisableSharePostEmail: boolean;
    UserPreferencesEnableAutoSubForFeeds: boolean;
    UserPreferencesDisableFileShareNotificationsForApi: boolean;
    UserPreferencesShowTitleToExternalUsers: boolean;
    UserPreferencesShowManagerToExternalUsers: boolean;
    UserPreferencesShowEmailToExternalUsers: boolean;
    UserPreferencesShowWorkPhoneToExternalUsers: boolean;
    UserPreferencesShowMobilePhoneToExternalUsers: boolean;
    UserPreferencesShowFaxToExternalUsers: boolean;
    UserPreferencesShowStreetAddressToExternalUsers: boolean;
    UserPreferencesShowCityToExternalUsers: boolean;
    UserPreferencesShowStateToExternalUsers: boolean;
    UserPreferencesShowPostalCodeToExternalUsers: boolean;
    UserPreferencesShowCountryToExternalUsers: boolean;
    UserPreferencesShowProfilePicToGuestUsers: boolean;
    UserPreferencesShowTitleToGuestUsers: boolean;
    UserPreferencesShowCityToGuestUsers: boolean;
    UserPreferencesShowStateToGuestUsers: boolean;
    UserPreferencesShowPostalCodeToGuestUsers: boolean;
    UserPreferencesShowCountryToGuestUsers: boolean;
    UserPreferencesHideS1BrowserUI: boolean;
    UserPreferencesDisableEndorsementEmail: boolean;
    UserPreferencesPathAssistantCollapsed: boolean;
    UserPreferencesCacheDiagnostics: boolean;
    UserPreferencesShowEmailToGuestUsers: boolean;
    UserPreferencesShowManagerToGuestUsers: boolean;
    UserPreferencesShowWorkPhoneToGuestUsers: boolean;
    UserPreferencesShowMobilePhoneToGuestUsers: boolean;
    UserPreferencesShowFaxToGuestUsers: boolean;
    UserPreferencesShowStreetAddressToGuestUsers: boolean;
    UserPreferencesLightningExperiencePreferred: boolean;
    UserPreferencesPreviewLightning: boolean;
    UserPreferencesHideEndUserOnboardingAssistantModal: boolean;
    UserPreferencesHideLightningMigrationModal: boolean;
    UserPreferencesHideSfxWelcomeMat: boolean;
    UserPreferencesHideBiggerPhotoCallout: boolean;
    UserPreferencesGlobalNavBarWTShown: boolean;
    UserPreferencesGlobalNavGridMenuWTShown: boolean;
    UserPreferencesCreateLEXAppsWTShown: boolean;
    UserPreferencesFavoritesWTShown: boolean;
    UserPreferencesRecordHomeSectionCollapseWTShown: boolean;
    UserPreferencesRecordHomeReservedWTShown: boolean;
    UserPreferencesFavoritesShowTopFavorites: boolean;
    UserPreferencesExcludeMailAppAttachments: boolean;
    UserPreferencesSuppressTaskSFXReminders: boolean;
    UserPreferencesSuppressEventSFXReminders: boolean;
    UserPreferencesPreviewCustomTheme: boolean;
    UserPreferencesHasCelebrationBadge: boolean;
    UserPreferencesUserDebugModePref: boolean;
    UserPreferencesNewLightningReportRunPageEnabled: boolean;
    ContactId: string | null;
    AccountId: string | null;
    CallCenterId: string | null;
    Extension: string | null;
    PortalRole: string | null;
    IsPortalEnabled: boolean;
    IsPortalSelfRegistered: boolean;
    FederationIdentifier: string | null;
    AboutMe: string | null;
    FullPhotoUrl: string | null;
    SmallPhotoUrl: string | null;
    IsExtIndicatorVisible: boolean;
    OutOfOfficeMessage: string | null;
    MediumPhotoUrl: string | null;
    DigestFrequency: string;
    DefaultGroupNotificationFrequency: string;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    BannerPhotoUrl: string | null;
    SmallBannerPhotoUrl: string | null;
    MediumBannerPhotoUrl: string | null;
    IsProfilePhotoActive: boolean;
    IndividualId: string | null;
};
declare type ParentReferences$User = {
    UserRole: SObjectDefinition$UserRole | null;
    Profile: SObjectDefinition$Profile;
    Manager: SObjectDefinition$User | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Contact: SObjectDefinition$Contact | null;
    Account: SObjectDefinition$Account | null;
    Individual: SObjectDefinition$Individual | null;
};
declare type ChildRelationships$User = {
    AcceptedEventRelations: SObjectDefinition$AcceptedEventRelation;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    GroupMemberships: SObjectDefinition$CollaborationGroupMember;
    GroupMembershipRequests: SObjectDefinition$CollaborationGroupMemberRequest;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContactRequests: SObjectDefinition$ContactRequest;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    ContractsSigned: SObjectDefinition$Contract;
    DeclinedEventRelations: SObjectDefinition$DeclinedEventRelation;
    EmailMessageRelations: SObjectDefinition$EmailMessageRelation;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    FeedSubscriptions: SObjectDefinition$EntitySubscription;
    EventRelations: SObjectDefinition$EventRelation;
    ExternalDataUserAuths: SObjectDefinition$ExternalDataUserAuth;
    InstalledMobileApps: SObjectDefinition$InstalledMobileApp;
    OutgoingEmailRelations: SObjectDefinition$OutgoingEmailRelation;
    OwnedContentDocuments: SObjectDefinition$OwnedContentDocument;
    PermissionSetAssignments: SObjectDefinition$PermissionSetAssignment;
    PermissionSetLicenseAssignments: SObjectDefinition$PermissionSetLicenseAssign;
    UserProfileSkillUserEndorsements: SObjectDefinition$ProfileSkillEndorsement;
    UserProfileSkillChildren: SObjectDefinition$ProfileSkillUser;
    RecordActions: SObjectDefinition$RecordAction;
    SessionPermSetActivations: SObjectDefinition$SessionPermSetActivation;
    UserSites: SObjectDefinition$Site;
    UndecidedEventRelations: SObjectDefinition$UndecidedEventRelation;
    DelegatedUsers: SObjectDefinition$User;
    ManagedUsers: SObjectDefinition$User;
    UserEntityAccessRights: SObjectDefinition$UserEntityAccess;
    Feeds: SObjectDefinition$UserFeed;
    UserFieldAccessRights: SObjectDefinition$UserFieldAccess;
    UserPreferences: SObjectDefinition$UserPreference;
    Shares: SObjectDefinition$UserShare;
    Badges: SObjectDefinition$WorkBadge;
    GivenThanks: SObjectDefinition$WorkThanks;
};
interface SObjectDefinition$User extends SObjectDefinition<'User'> {
    Name: 'User';
    Fields: Fields$User;
    ParentReferences: ParentReferences$User;
    ChildRelationships: ChildRelationships$User;
}
declare type Fields$UserAppInfo = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    UserId: string;
    FormFactor: string;
    AppDefinitionId: string | null;
};
declare type ParentReferences$UserAppInfo = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    User: SObjectDefinition$User;
    AppDefinition: SObjectDefinition$AppDefinition | null;
};
declare type ChildRelationships$UserAppInfo = {};
interface SObjectDefinition$UserAppInfo extends SObjectDefinition<'UserAppInfo'> {
    Name: 'UserAppInfo';
    Fields: Fields$UserAppInfo;
    ParentReferences: ParentReferences$UserAppInfo;
    ChildRelationships: ChildRelationships$UserAppInfo;
}
declare type Fields$UserAppMenuCustomization = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ApplicationId: string | null;
    SortOrder: number | null;
};
declare type ParentReferences$UserAppMenuCustomization = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Application: SObjectDefinition$ConnectedApplication | null;
};
declare type ChildRelationships$UserAppMenuCustomization = {};
interface SObjectDefinition$UserAppMenuCustomization extends SObjectDefinition<'UserAppMenuCustomization'> {
    Name: 'UserAppMenuCustomization';
    Fields: Fields$UserAppMenuCustomization;
    ParentReferences: ParentReferences$UserAppMenuCustomization;
    ChildRelationships: ChildRelationships$UserAppMenuCustomization;
}
declare type Fields$UserAppMenuCustomizationShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$UserAppMenuCustomizationShare = {
    Parent: SObjectDefinition$UserAppMenuCustomization;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$UserAppMenuCustomizationShare = {};
interface SObjectDefinition$UserAppMenuCustomizationShare extends SObjectDefinition<'UserAppMenuCustomizationShare'> {
    Name: 'UserAppMenuCustomizationShare';
    Fields: Fields$UserAppMenuCustomizationShare;
    ParentReferences: ParentReferences$UserAppMenuCustomizationShare;
    ChildRelationships: ChildRelationships$UserAppMenuCustomizationShare;
}
declare type Fields$UserAppMenuItem = {
    Id: string;
    AppMenuItemId: string | null;
    ApplicationId: string | null;
    Label: string | null;
    Description: string | null;
    Name: string | null;
    UserSortOrder: number | null;
    SortOrder: number | null;
    Type: string | null;
    LogoUrl: string | null;
    IconUrl: string | null;
    InfoUrl: string | null;
    StartUrl: string | null;
    MobileStartUrl: string | null;
    IsVisible: boolean;
    IsUsingAdminAuthorization: boolean;
};
declare type ParentReferences$UserAppMenuItem = {};
declare type ChildRelationships$UserAppMenuItem = {};
interface SObjectDefinition$UserAppMenuItem extends SObjectDefinition<'UserAppMenuItem'> {
    Name: 'UserAppMenuItem';
    Fields: Fields$UserAppMenuItem;
    ParentReferences: ParentReferences$UserAppMenuItem;
    ChildRelationships: ChildRelationships$UserAppMenuItem;
}
declare type Fields$UserChangeEvent = {
    Id: string | null;
    ReplayId: string | null;
    ChangeEventHeader: any;
    Username: string | null;
    LastName: string | null;
    FirstName: string | null;
    Name: string | null;
    CompanyName: string | null;
    Division: string | null;
    Department: string | null;
    Title: string | null;
    Street: string | null;
    City: string | null;
    State: string | null;
    PostalCode: string | null;
    Country: string | null;
    Latitude: number | null;
    Longitude: number | null;
    GeocodeAccuracy: string | null;
    Address: Address | null;
    Email: string | null;
    EmailPreferencesAutoBcc: boolean;
    EmailPreferencesAutoBccStayInTouch: boolean;
    EmailPreferencesStayInTouchReminder: boolean;
    SenderEmail: string | null;
    SenderName: string | null;
    Signature: string | null;
    StayInTouchSubject: string | null;
    StayInTouchSignature: string | null;
    StayInTouchNote: string | null;
    Phone: string | null;
    Fax: string | null;
    MobilePhone: string | null;
    Alias: string | null;
    CommunityNickname: string | null;
    IsActive: boolean;
    TimeZoneSidKey: string | null;
    UserRoleId: string | null;
    LocaleSidKey: string | null;
    ReceivesInfoEmails: boolean;
    ReceivesAdminInfoEmails: boolean;
    EmailEncodingKey: string | null;
    ProfileId: string | null;
    UserType: string | null;
    LanguageLocaleKey: string | null;
    EmployeeNumber: string | null;
    DelegatedApproverId: string | null;
    ManagerId: string | null;
    LastLoginDate: DateString | null;
    LastPasswordChangeDate: DateString | null;
    CreatedDate: DateString | null;
    CreatedById: string | null;
    LastModifiedDate: DateString | null;
    LastModifiedById: string | null;
    OfflineTrialExpirationDate: DateString | null;
    OfflinePdaTrialExpirationDate: DateString | null;
    UserPermissionsMarketingUser: boolean;
    UserPermissionsOfflineUser: boolean;
    UserPermissionsAvantgoUser: boolean;
    UserPermissionsCallCenterAutoLogin: boolean;
    UserPermissionsMobileUser: boolean;
    UserPermissionsSFContentUser: boolean;
    UserPermissionsKnowledgeUser: boolean;
    UserPermissionsInteractionUser: boolean;
    UserPermissionsSupportUser: boolean;
    ForecastEnabled: boolean;
    UserPreferencesActivityRemindersPopup: boolean;
    UserPreferencesEventRemindersCheckboxDefault: boolean;
    UserPreferencesTaskRemindersCheckboxDefault: boolean;
    UserPreferencesReminderSoundOff: boolean;
    UserPreferencesDisableAllFeedsEmail: boolean;
    UserPreferencesDisableFollowersEmail: boolean;
    UserPreferencesDisableProfilePostEmail: boolean;
    UserPreferencesDisableChangeCommentEmail: boolean;
    UserPreferencesDisableLaterCommentEmail: boolean;
    UserPreferencesDisProfPostCommentEmail: boolean;
    UserPreferencesContentNoEmail: boolean;
    UserPreferencesContentEmailAsAndWhen: boolean;
    UserPreferencesApexPagesDeveloperMode: boolean;
    UserPreferencesHideCSNGetChatterMobileTask: boolean;
    UserPreferencesDisableMentionsPostEmail: boolean;
    UserPreferencesDisMentionsCommentEmail: boolean;
    UserPreferencesHideCSNDesktopTask: boolean;
    UserPreferencesHideChatterOnboardingSplash: boolean;
    UserPreferencesHideSecondChatterOnboardingSplash: boolean;
    UserPreferencesDisCommentAfterLikeEmail: boolean;
    UserPreferencesDisableLikeEmail: boolean;
    UserPreferencesSortFeedByComment: boolean;
    UserPreferencesDisableMessageEmail: boolean;
    UserPreferencesDisableBookmarkEmail: boolean;
    UserPreferencesDisableSharePostEmail: boolean;
    UserPreferencesEnableAutoSubForFeeds: boolean;
    UserPreferencesDisableFileShareNotificationsForApi: boolean;
    UserPreferencesShowTitleToExternalUsers: boolean;
    UserPreferencesShowManagerToExternalUsers: boolean;
    UserPreferencesShowEmailToExternalUsers: boolean;
    UserPreferencesShowWorkPhoneToExternalUsers: boolean;
    UserPreferencesShowMobilePhoneToExternalUsers: boolean;
    UserPreferencesShowFaxToExternalUsers: boolean;
    UserPreferencesShowStreetAddressToExternalUsers: boolean;
    UserPreferencesShowCityToExternalUsers: boolean;
    UserPreferencesShowStateToExternalUsers: boolean;
    UserPreferencesShowPostalCodeToExternalUsers: boolean;
    UserPreferencesShowCountryToExternalUsers: boolean;
    UserPreferencesShowProfilePicToGuestUsers: boolean;
    UserPreferencesShowTitleToGuestUsers: boolean;
    UserPreferencesShowCityToGuestUsers: boolean;
    UserPreferencesShowStateToGuestUsers: boolean;
    UserPreferencesShowPostalCodeToGuestUsers: boolean;
    UserPreferencesShowCountryToGuestUsers: boolean;
    UserPreferencesHideS1BrowserUI: boolean;
    UserPreferencesDisableEndorsementEmail: boolean;
    UserPreferencesPathAssistantCollapsed: boolean;
    UserPreferencesCacheDiagnostics: boolean;
    UserPreferencesShowEmailToGuestUsers: boolean;
    UserPreferencesShowManagerToGuestUsers: boolean;
    UserPreferencesShowWorkPhoneToGuestUsers: boolean;
    UserPreferencesShowMobilePhoneToGuestUsers: boolean;
    UserPreferencesShowFaxToGuestUsers: boolean;
    UserPreferencesShowStreetAddressToGuestUsers: boolean;
    UserPreferencesLightningExperiencePreferred: boolean;
    UserPreferencesPreviewLightning: boolean;
    UserPreferencesHideEndUserOnboardingAssistantModal: boolean;
    UserPreferencesHideLightningMigrationModal: boolean;
    UserPreferencesHideSfxWelcomeMat: boolean;
    UserPreferencesHideBiggerPhotoCallout: boolean;
    UserPreferencesGlobalNavBarWTShown: boolean;
    UserPreferencesGlobalNavGridMenuWTShown: boolean;
    UserPreferencesCreateLEXAppsWTShown: boolean;
    UserPreferencesFavoritesWTShown: boolean;
    UserPreferencesRecordHomeSectionCollapseWTShown: boolean;
    UserPreferencesRecordHomeReservedWTShown: boolean;
    UserPreferencesFavoritesShowTopFavorites: boolean;
    UserPreferencesExcludeMailAppAttachments: boolean;
    UserPreferencesSuppressTaskSFXReminders: boolean;
    UserPreferencesSuppressEventSFXReminders: boolean;
    UserPreferencesPreviewCustomTheme: boolean;
    UserPreferencesHasCelebrationBadge: boolean;
    UserPreferencesUserDebugModePref: boolean;
    UserPreferencesNewLightningReportRunPageEnabled: boolean;
    ContactId: string | null;
    AccountId: string | null;
    CallCenterId: string | null;
    Extension: string | null;
    IsPortalSelfRegistered: boolean;
    FederationIdentifier: string | null;
    AboutMe: string | null;
    DigestFrequency: string | null;
    DefaultGroupNotificationFrequency: string | null;
    IsProfilePhotoActive: boolean;
    IndividualId: string | null;
};
declare type ParentReferences$UserChangeEvent = {};
declare type ChildRelationships$UserChangeEvent = {};
interface SObjectDefinition$UserChangeEvent extends SObjectDefinition<'UserChangeEvent'> {
    Name: 'UserChangeEvent';
    Fields: Fields$UserChangeEvent;
    ParentReferences: ParentReferences$UserChangeEvent;
    ChildRelationships: ChildRelationships$UserChangeEvent;
}
declare type Fields$UserEntityAccess = {
    Id: string;
    DurableId: string | null;
    UserId: string | null;
    IsMergeable: boolean;
    IsUpdatable: boolean;
    IsActivateable: boolean;
    IsReadable: boolean;
    IsCreatable: boolean;
    IsEditable: boolean;
    IsDeletable: boolean;
    IsUndeletable: boolean;
    IsFlsUpdatable: boolean;
    EntityDefinitionId: string | null;
};
declare type ParentReferences$UserEntityAccess = {
    User: SObjectDefinition$User | null;
};
declare type ChildRelationships$UserEntityAccess = {};
interface SObjectDefinition$UserEntityAccess extends SObjectDefinition<'UserEntityAccess'> {
    Name: 'UserEntityAccess';
    Fields: Fields$UserEntityAccess;
    ParentReferences: ParentReferences$UserEntityAccess;
    ChildRelationships: ChildRelationships$UserEntityAccess;
}
declare type Fields$UserFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$UserFeed = {
    Parent: SObjectDefinition$User;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$UserFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$UserFeed extends SObjectDefinition<'UserFeed'> {
    Name: 'UserFeed';
    Fields: Fields$UserFeed;
    ParentReferences: ParentReferences$UserFeed;
    ChildRelationships: ChildRelationships$UserFeed;
}
declare type Fields$UserFieldAccess = {
    Id: string;
    DurableId: string | null;
    UserId: string | null;
    IsUpdatable: boolean;
    IsCreatable: boolean;
    IsAccessible: boolean;
    EntityDefinitionId: string | null;
    FieldDefinitionId: string | null;
};
declare type ParentReferences$UserFieldAccess = {
    User: SObjectDefinition$User | null;
};
declare type ChildRelationships$UserFieldAccess = {};
interface SObjectDefinition$UserFieldAccess extends SObjectDefinition<'UserFieldAccess'> {
    Name: 'UserFieldAccess';
    Fields: Fields$UserFieldAccess;
    ParentReferences: ParentReferences$UserFieldAccess;
    ChildRelationships: ChildRelationships$UserFieldAccess;
}
declare type Fields$UserLicense = {
    Id: string;
    LicenseDefinitionKey: string;
    TotalLicenses: number;
    Status: string;
    UsedLicenses: number;
    UsedLicensesLastUpdated: DateString;
    Name: string;
    MasterLabel: string;
    MonthlyLoginsUsed: number | null;
    MonthlyLoginsEntitlement: number | null;
    CreatedDate: DateString;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$UserLicense = {};
declare type ChildRelationships$UserLicense = {};
interface SObjectDefinition$UserLicense extends SObjectDefinition<'UserLicense'> {
    Name: 'UserLicense';
    Fields: Fields$UserLicense;
    ParentReferences: ParentReferences$UserLicense;
    ChildRelationships: ChildRelationships$UserLicense;
}
declare type Fields$UserListView = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    UserId: string;
    ListViewId: string;
    SobjectType: string | null;
    LastViewedChart: string | null;
};
declare type ParentReferences$UserListView = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    User: SObjectDefinition$User;
    ListView: SObjectDefinition$ListView;
};
declare type ChildRelationships$UserListView = {};
interface SObjectDefinition$UserListView extends SObjectDefinition<'UserListView'> {
    Name: 'UserListView';
    Fields: Fields$UserListView;
    ParentReferences: ParentReferences$UserListView;
    ChildRelationships: ChildRelationships$UserListView;
}
declare type Fields$UserListViewCriterion = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    UserListViewId: string;
    SortOrder: number;
    ColumnName: string;
    Operation: string;
    Value: string | null;
};
declare type ParentReferences$UserListViewCriterion = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    UserListView: SObjectDefinition$UserListView;
};
declare type ChildRelationships$UserListViewCriterion = {};
interface SObjectDefinition$UserListViewCriterion extends SObjectDefinition<'UserListViewCriterion'> {
    Name: 'UserListViewCriterion';
    Fields: Fields$UserListViewCriterion;
    ParentReferences: ParentReferences$UserListViewCriterion;
    ChildRelationships: ChildRelationships$UserListViewCriterion;
}
declare type Fields$UserLogin = {
    Id: string;
    UserId: string | null;
    IsFrozen: boolean;
    IsPasswordLocked: boolean;
    LastModifiedDate: DateString;
    LastModifiedById: string;
};
declare type ParentReferences$UserLogin = {
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$UserLogin = {};
interface SObjectDefinition$UserLogin extends SObjectDefinition<'UserLogin'> {
    Name: 'UserLogin';
    Fields: Fields$UserLogin;
    ParentReferences: ParentReferences$UserLogin;
    ChildRelationships: ChildRelationships$UserLogin;
}
declare type Fields$UserPackageLicense = {
    Id: string;
    PackageLicenseId: string;
    UserId: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$UserPackageLicense = {
    PackageLicense: SObjectDefinition$PackageLicense;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$UserPackageLicense = {};
interface SObjectDefinition$UserPackageLicense extends SObjectDefinition<'UserPackageLicense'> {
    Name: 'UserPackageLicense';
    Fields: Fields$UserPackageLicense;
    ParentReferences: ParentReferences$UserPackageLicense;
    ChildRelationships: ChildRelationships$UserPackageLicense;
}
declare type Fields$UserPermissionAccess = {
    Id: string;
    LastCacheUpdate: DateString | null;
    PermissionsEmailSingle: boolean;
    PermissionsEmailMass: boolean;
    PermissionsEditTask: boolean;
    PermissionsEditEvent: boolean;
    PermissionsExportReport: boolean;
    PermissionsImportPersonal: boolean;
    PermissionsDataExport: boolean;
    PermissionsManageUsers: boolean;
    PermissionsEditPublicFilters: boolean;
    PermissionsEditPublicTemplates: boolean;
    PermissionsModifyAllData: boolean;
    PermissionsManageCases: boolean;
    PermissionsMassInlineEdit: boolean;
    PermissionsEditKnowledge: boolean;
    PermissionsManageKnowledge: boolean;
    PermissionsManageSolutions: boolean;
    PermissionsCustomizeApplication: boolean;
    PermissionsEditReadonlyFields: boolean;
    PermissionsRunReports: boolean;
    PermissionsViewSetup: boolean;
    PermissionsTransferAnyEntity: boolean;
    PermissionsNewReportBuilder: boolean;
    PermissionsManageCssUsers: boolean;
    PermissionsActivateContract: boolean;
    PermissionsActivateOrder: boolean;
    PermissionsImportLeads: boolean;
    PermissionsManageLeads: boolean;
    PermissionsTransferAnyLead: boolean;
    PermissionsViewAllData: boolean;
    PermissionsEditPublicDocuments: boolean;
    PermissionsViewEncryptedData: boolean;
    PermissionsEditBrandTemplates: boolean;
    PermissionsEditHtmlTemplates: boolean;
    PermissionsChatterInternalUser: boolean;
    PermissionsDeleteActivatedContract: boolean;
    PermissionsChatterInviteExternalUsers: boolean;
    PermissionsSendSitRequests: boolean;
    PermissionsApiUserOnly: boolean;
    PermissionsManageRemoteAccess: boolean;
    PermissionsCanUseNewDashboardBuilder: boolean;
    PermissionsManageCategories: boolean;
    PermissionsConvertLeads: boolean;
    PermissionsPasswordNeverExpires: boolean;
    PermissionsUseTeamReassignWizards: boolean;
    PermissionsEditActivatedOrders: boolean;
    PermissionsInstallPackaging: boolean;
    PermissionsChatterOwnGroups: boolean;
    PermissionsEditOppLineItemUnitPrice: boolean;
    PermissionsBulkApiHardDelete: boolean;
    PermissionsInboundMigrationToolsUser: boolean;
    PermissionsSolutionImport: boolean;
    PermissionsManageCallCenters: boolean;
    PermissionsPortalSuperUser: boolean;
    PermissionsManageSynonyms: boolean;
    PermissionsOutboundMigrationToolsUser: boolean;
    PermissionsDelegatedPortalUserAdmin: boolean;
    PermissionsViewContent: boolean;
    PermissionsManageEmailClientConfig: boolean;
    PermissionsEnableNotifications: boolean;
    PermissionsManageDataIntegrations: boolean;
    PermissionsDistributeFromPersWksp: boolean;
    PermissionsViewDataCategories: boolean;
    PermissionsManageDataCategories: boolean;
    PermissionsAuthorApex: boolean;
    PermissionsManageMobile: boolean;
    PermissionsApiEnabled: boolean;
    PermissionsManageCustomReportTypes: boolean;
    PermissionsEditCaseComments: boolean;
    PermissionsTransferAnyCase: boolean;
    PermissionsContentAdministrator: boolean;
    PermissionsCreateWorkspaces: boolean;
    PermissionsManageContentPermissions: boolean;
    PermissionsManageContentProperties: boolean;
    PermissionsManageContentTypes: boolean;
    PermissionsScheduleJob: boolean;
    PermissionsManageExchangeConfig: boolean;
    PermissionsManageAnalyticSnapshots: boolean;
    PermissionsScheduleReports: boolean;
    PermissionsManageBusinessHourHolidays: boolean;
    PermissionsManageEntitlements: boolean;
    PermissionsManageInteraction: boolean;
    PermissionsViewMyTeamsDashboards: boolean;
    PermissionsModerateChatter: boolean;
    PermissionsResetPasswords: boolean;
    PermissionsFlowUFLRequired: boolean;
    PermissionsCanInsertFeedSystemFields: boolean;
    PermissionsManageKnowledgeImportExport: boolean;
    PermissionsEmailTemplateManagement: boolean;
    PermissionsEmailAdministration: boolean;
    PermissionsManageChatterMessages: boolean;
    PermissionsAllowEmailIC: boolean;
    PermissionsChatterFileLink: boolean;
    PermissionsForceTwoFactor: boolean;
    PermissionsViewEventLogFiles: boolean;
    PermissionsManageNetworks: boolean;
    PermissionsViewCaseInteraction: boolean;
    PermissionsManageAuthProviders: boolean;
    PermissionsRunFlow: boolean;
    PermissionsCreateCustomizeDashboards: boolean;
    PermissionsCreateDashboardFolders: boolean;
    PermissionsViewPublicDashboards: boolean;
    PermissionsManageDashbdsInPubFolders: boolean;
    PermissionsCreateCustomizeReports: boolean;
    PermissionsCreateReportFolders: boolean;
    PermissionsViewPublicReports: boolean;
    PermissionsManageReportsInPubFolders: boolean;
    PermissionsEditMyDashboards: boolean;
    PermissionsEditMyReports: boolean;
    PermissionsViewAllUsers: boolean;
    PermissionsBypassEmailApproval: boolean;
    PermissionsAllowUniversalSearch: boolean;
    PermissionsConnectOrgToEnvironmentHub: boolean;
    PermissionsCreateCustomizeFilters: boolean;
    PermissionsContentHubUser: boolean;
    PermissionsGovernNetworks: boolean;
    PermissionsSalesConsole: boolean;
    PermissionsTwoFactorApi: boolean;
    PermissionsDeleteTopics: boolean;
    PermissionsEditTopics: boolean;
    PermissionsCreateTopics: boolean;
    PermissionsAssignTopics: boolean;
    PermissionsIdentityEnabled: boolean;
    PermissionsIdentityConnect: boolean;
    PermissionsAllowViewKnowledge: boolean;
    PermissionsContentWorkspaces: boolean;
    PermissionsCreateWorkBadgeDefinition: boolean;
    PermissionsManageSearchPromotionRules: boolean;
    PermissionsCustomMobileAppsAccess: boolean;
    PermissionsViewHelpLink: boolean;
    PermissionsManageProfilesPermissionsets: boolean;
    PermissionsAssignPermissionSets: boolean;
    PermissionsManageRoles: boolean;
    PermissionsManageIpAddresses: boolean;
    PermissionsManageSharing: boolean;
    PermissionsManageInternalUsers: boolean;
    PermissionsManagePasswordPolicies: boolean;
    PermissionsManageLoginAccessPolicies: boolean;
    PermissionsManageCustomPermissions: boolean;
    PermissionsCanVerifyComment: boolean;
    PermissionsManageUnlistedGroups: boolean;
    PermissionsInsightsAppDashboardEditor: boolean;
    PermissionsManageTwoFactor: boolean;
    PermissionsInsightsAppUser: boolean;
    PermissionsInsightsAppAdmin: boolean;
    PermissionsInsightsAppEltEditor: boolean;
    PermissionsInsightsAppUploadUser: boolean;
    PermissionsInsightsCreateApplication: boolean;
    PermissionsLightningExperienceUser: boolean;
    PermissionsConfigCustomRecs: boolean;
    PermissionsSubmitMacrosAllowed: boolean;
    PermissionsBulkMacrosAllowed: boolean;
    PermissionsShareInternalArticles: boolean;
    PermissionsManageSessionPermissionSets: boolean;
    PermissionsManageTemplatedApp: boolean;
    PermissionsUseTemplatedApp: boolean;
    PermissionsSendAnnouncementEmails: boolean;
    PermissionsChatterEditOwnPost: boolean;
    PermissionsChatterEditOwnRecordPost: boolean;
    PermissionsWaveTrendReports: boolean;
    PermissionsWaveTabularDownload: boolean;
    PermissionsImportCustomObjects: boolean;
    PermissionsDelegatedTwoFactor: boolean;
    PermissionsChatterComposeUiCodesnippet: boolean;
    PermissionsSelectFilesFromSalesforce: boolean;
    PermissionsModerateNetworkUsers: boolean;
    PermissionsMergeTopics: boolean;
    PermissionsSubscribeToLightningReports: boolean;
    PermissionsManagePvtRptsAndDashbds: boolean;
    PermissionsAllowLightningLogin: boolean;
    PermissionsCampaignInfluence2: boolean;
    PermissionsViewDataAssessment: boolean;
    PermissionsRemoveDirectMessageMembers: boolean;
    PermissionsCanApproveFeedPost: boolean;
    PermissionsAddDirectMessageMembers: boolean;
    PermissionsAllowViewEditConvertedLeads: boolean;
    PermissionsShowCompanyNameAsUserBadge: boolean;
    PermissionsAccessCMC: boolean;
    PermissionsViewHealthCheck: boolean;
    PermissionsManageHealthCheck: boolean;
    PermissionsPackaging2: boolean;
    PermissionsManageCertificates: boolean;
    PermissionsCreateReportInLightning: boolean;
    PermissionsPreventClassicExperience: boolean;
    PermissionsHideReadByList: boolean;
    PermissionsListEmailSend: boolean;
    PermissionsFeedPinning: boolean;
    PermissionsChangeDashboardColors: boolean;
    PermissionsIotUser: boolean;
    PermissionsManageRecommendationStrategies: boolean;
    PermissionsManagePropositions: boolean;
    PermissionsCloseConversations: boolean;
    PermissionsUseWebLink: boolean;
    PermissionsViewOnlyEmbeddedAppUser: boolean;
    PermissionsViewAllActivities: boolean;
    PermissionsSubscribeReportToOtherUsers: boolean;
    PermissionsLightningConsoleAllowedForUser: boolean;
    PermissionsSubscribeReportsRunAsUser: boolean;
    PermissionsSubscribeToLightningDashboards: boolean;
    PermissionsSubscribeDashboardToOtherUsers: boolean;
    PermissionsApexRestServices: boolean;
    PermissionsEnableCommunityAppLauncher: boolean;
    PermissionsLtngPromoReserved01UserPerm: boolean;
    PermissionsCanEditDataPrepRecipe: boolean;
    PermissionsAddAnalyticsRemoteConnections: boolean;
    PermissionsManageSurveys: boolean;
    PermissionsRecordVisibilityAPI: boolean;
    PermissionsViewRoles: boolean;
    PermissionsModifyMetadata: boolean;
};
declare type ParentReferences$UserPermissionAccess = {};
declare type ChildRelationships$UserPermissionAccess = {};
interface SObjectDefinition$UserPermissionAccess extends SObjectDefinition<'UserPermissionAccess'> {
    Name: 'UserPermissionAccess';
    Fields: Fields$UserPermissionAccess;
    ParentReferences: ParentReferences$UserPermissionAccess;
    ChildRelationships: ChildRelationships$UserPermissionAccess;
}
declare type Fields$UserPreference = {
    Id: string;
    UserId: string;
    Preference: string;
    Value: string | null;
    SystemModstamp: DateString;
};
declare type ParentReferences$UserPreference = {};
declare type ChildRelationships$UserPreference = {};
interface SObjectDefinition$UserPreference extends SObjectDefinition<'UserPreference'> {
    Name: 'UserPreference';
    Fields: Fields$UserPreference;
    ParentReferences: ParentReferences$UserPreference;
    ChildRelationships: ChildRelationships$UserPreference;
}
declare type Fields$UserProvAccount = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    SalesforceUserId: string | null;
    ConnectedAppId: string | null;
    ExternalUserId: string | null;
    ExternalUsername: string | null;
    ExternalEmail: string | null;
    ExternalFirstName: string | null;
    ExternalLastName: string | null;
    LinkState: string;
    Status: string;
    DeletedDate: DateString | null;
    IsKnownLink: boolean;
};
declare type ParentReferences$UserProvAccount = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    SalesforceUser: SObjectDefinition$User | null;
    ConnectedApp: SObjectDefinition$ConnectedApplication | null;
};
declare type ChildRelationships$UserProvAccount = {};
interface SObjectDefinition$UserProvAccount extends SObjectDefinition<'UserProvAccount'> {
    Name: 'UserProvAccount';
    Fields: Fields$UserProvAccount;
    ParentReferences: ParentReferences$UserProvAccount;
    ChildRelationships: ChildRelationships$UserProvAccount;
}
declare type Fields$UserProvAccountStaging = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ConnectedAppId: string | null;
    SalesforceUserId: string | null;
    ExternalUserId: string | null;
    ExternalUsername: string | null;
    ExternalEmail: string | null;
    ExternalFirstName: string | null;
    ExternalLastName: string | null;
    LinkState: string;
    Status: string;
};
declare type ParentReferences$UserProvAccountStaging = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ConnectedApp: SObjectDefinition$ConnectedApplication | null;
    SalesforceUser: SObjectDefinition$User | null;
};
declare type ChildRelationships$UserProvAccountStaging = {};
interface SObjectDefinition$UserProvAccountStaging extends SObjectDefinition<'UserProvAccountStaging'> {
    Name: 'UserProvAccountStaging';
    Fields: Fields$UserProvAccountStaging;
    ParentReferences: ParentReferences$UserProvAccountStaging;
    ChildRelationships: ChildRelationships$UserProvAccountStaging;
}
declare type Fields$UserProvMockTarget = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ExternalUserId: string | null;
    ExternalUsername: string | null;
    ExternalEmail: string | null;
    ExternalFirstName: string | null;
    ExternalLastName: string | null;
};
declare type ParentReferences$UserProvMockTarget = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$UserProvMockTarget = {};
interface SObjectDefinition$UserProvMockTarget extends SObjectDefinition<'UserProvMockTarget'> {
    Name: 'UserProvMockTarget';
    Fields: Fields$UserProvMockTarget;
    ParentReferences: ParentReferences$UserProvMockTarget;
    ChildRelationships: ChildRelationships$UserProvMockTarget;
}
declare type Fields$UserProvisioningConfig = {
    Id: string;
    IsDeleted: boolean;
    DeveloperName: string;
    Language: string | null;
    MasterLabel: string;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ConnectedAppId: string | null;
    Notes: string | null;
    Enabled: boolean;
    ApprovalRequired: string | null;
    UserAccountMapping: string | null;
    EnabledOperations: string | null;
    OnUpdateAttributes: string | null;
    LastReconDateTime: DateString | null;
    NamedCredentialId: string | null;
    ReconFilter: string | null;
};
declare type ParentReferences$UserProvisioningConfig = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    ConnectedApp: SObjectDefinition$ConnectedApplication | null;
    NamedCredential: SObjectDefinition$NamedCredential | null;
};
declare type ChildRelationships$UserProvisioningConfig = {};
interface SObjectDefinition$UserProvisioningConfig extends SObjectDefinition<'UserProvisioningConfig'> {
    Name: 'UserProvisioningConfig';
    Fields: Fields$UserProvisioningConfig;
    ParentReferences: ParentReferences$UserProvisioningConfig;
    ChildRelationships: ChildRelationships$UserProvisioningConfig;
}
declare type Fields$UserProvisioningLog = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    UserProvisioningRequestId: string | null;
    ExternalUserId: string | null;
    ExternalUsername: string | null;
    UserId: string | null;
    Status: string | null;
    Details: string | null;
};
declare type ParentReferences$UserProvisioningLog = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    UserProvisioningRequest: SObjectDefinition$UserProvisioningRequest | null;
    User: SObjectDefinition$User | null;
};
declare type ChildRelationships$UserProvisioningLog = {};
interface SObjectDefinition$UserProvisioningLog extends SObjectDefinition<'UserProvisioningLog'> {
    Name: 'UserProvisioningLog';
    Fields: Fields$UserProvisioningLog;
    ParentReferences: ParentReferences$UserProvisioningLog;
    ChildRelationships: ChildRelationships$UserProvisioningLog;
}
declare type Fields$UserProvisioningRequest = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    SalesforceUserId: string | null;
    ExternalUserId: string | null;
    AppName: string | null;
    State: string;
    Operation: string;
    ScheduleDate: DateString | null;
    ConnectedAppId: string | null;
    UserProvConfigId: string | null;
    UserProvAccountId: string | null;
    ApprovalStatus: string;
    ManagerId: string | null;
    RetryCount: number | null;
    ParentId: string | null;
};
declare type ParentReferences$UserProvisioningRequest = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    SalesforceUser: SObjectDefinition$User | null;
    ConnectedApp: SObjectDefinition$ConnectedApplication | null;
    UserProvConfig: SObjectDefinition$UserProvisioningConfig | null;
    UserProvAccount: SObjectDefinition$UserProvAccount | null;
    Manager: SObjectDefinition$User | null;
    Parent: SObjectDefinition$UserProvisioningRequest | null;
};
declare type ChildRelationships$UserProvisioningRequest = {
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
};
interface SObjectDefinition$UserProvisioningRequest extends SObjectDefinition<'UserProvisioningRequest'> {
    Name: 'UserProvisioningRequest';
    Fields: Fields$UserProvisioningRequest;
    ParentReferences: ParentReferences$UserProvisioningRequest;
    ChildRelationships: ChildRelationships$UserProvisioningRequest;
}
declare type Fields$UserProvisioningRequestShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$UserProvisioningRequestShare = {
    Parent: SObjectDefinition$UserProvisioningRequest;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$UserProvisioningRequestShare = {};
interface SObjectDefinition$UserProvisioningRequestShare extends SObjectDefinition<'UserProvisioningRequestShare'> {
    Name: 'UserProvisioningRequestShare';
    Fields: Fields$UserProvisioningRequestShare;
    ParentReferences: ParentReferences$UserProvisioningRequestShare;
    ChildRelationships: ChildRelationships$UserProvisioningRequestShare;
}
declare type Fields$UserRecordAccess = {
    Id: string;
    UserId: string;
    RecordId: string;
    HasReadAccess: boolean;
    HasEditAccess: boolean;
    HasDeleteAccess: boolean;
    HasTransferAccess: boolean;
    HasAllAccess: boolean;
    MaxAccessLevel: string | null;
};
declare type ParentReferences$UserRecordAccess = {};
declare type ChildRelationships$UserRecordAccess = {};
interface SObjectDefinition$UserRecordAccess extends SObjectDefinition<'UserRecordAccess'> {
    Name: 'UserRecordAccess';
    Fields: Fields$UserRecordAccess;
    ParentReferences: ParentReferences$UserRecordAccess;
    ChildRelationships: ChildRelationships$UserRecordAccess;
}
declare type Fields$UserRole = {
    Id: string;
    Name: string;
    ParentRoleId: string | null;
    RollupDescription: string | null;
    OpportunityAccessForAccountOwner: string;
    CaseAccessForAccountOwner: string | null;
    ContactAccessForAccountOwner: string | null;
    ForecastUserId: string | null;
    MayForecastManagerShare: boolean;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    DeveloperName: string | null;
    PortalAccountId: string | null;
    PortalType: string | null;
    PortalRole: string | null;
    PortalAccountOwnerId: string | null;
};
declare type ParentReferences$UserRole = {
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$UserRole = {
    Users: SObjectDefinition$User;
};
interface SObjectDefinition$UserRole extends SObjectDefinition<'UserRole'> {
    Name: 'UserRole';
    Fields: Fields$UserRole;
    ParentReferences: ParentReferences$UserRole;
    ChildRelationships: ChildRelationships$UserRole;
}
declare type Fields$UserShare = {
    Id: string;
    UserId: string;
    UserOrGroupId: string;
    UserAccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsActive: boolean;
};
declare type ParentReferences$UserShare = {
    User: SObjectDefinition$User;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$UserShare = {};
interface SObjectDefinition$UserShare extends SObjectDefinition<'UserShare'> {
    Name: 'UserShare';
    Fields: Fields$UserShare;
    ParentReferences: ParentReferences$UserShare;
    ChildRelationships: ChildRelationships$UserShare;
}
declare type Fields$VerificationHistory = {
    Id: string;
    EventGroup: number;
    VerificationTime: DateString;
    VerificationMethod: string | null;
    UserId: string;
    Activity: string;
    Status: string;
    LoginHistoryId: string;
    SourceIp: string;
    LoginGeoId: string | null;
    Remarks: string | null;
    ResourceId: string | null;
    Policy: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    IsDeleted: boolean;
    SystemModstamp: DateString;
};
declare type ParentReferences$VerificationHistory = {
    User: SObjectDefinition$User;
    LoginHistory: SObjectDefinition$LoginHistory;
    LoginGeo: SObjectDefinition$LoginGeo | null;
    Resource: SObjectDefinition$ConnectedApplication | null;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$VerificationHistory = {};
interface SObjectDefinition$VerificationHistory extends SObjectDefinition<'VerificationHistory'> {
    Name: 'VerificationHistory';
    Fields: Fields$VerificationHistory;
    ParentReferences: ParentReferences$VerificationHistory;
    ChildRelationships: ChildRelationships$VerificationHistory;
}
declare type Fields$VisibilityChangeNotification = {
    ReplayId: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    RecordId: string | null;
    KeyPrefix: string | null;
    ChangeType: string | null;
    ChangeTimestamp: DateString | null;
    ChangeTypeDetail: string | null;
};
declare type ParentReferences$VisibilityChangeNotification = {
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$VisibilityChangeNotification = {};
interface SObjectDefinition$VisibilityChangeNotification extends SObjectDefinition<'VisibilityChangeNotification'> {
    Name: 'VisibilityChangeNotification';
    Fields: Fields$VisibilityChangeNotification;
    ParentReferences: ParentReferences$VisibilityChangeNotification;
    ChildRelationships: ChildRelationships$VisibilityChangeNotification;
}
declare type Fields$VisualforceAccessMetrics = {
    Id: string;
    MetricsDate: DateString;
    ApexPageId: string;
    SystemModstamp: DateString;
    DailyPageViewCount: number | null;
};
declare type ParentReferences$VisualforceAccessMetrics = {
    ApexPage: SObjectDefinition$ApexPage;
};
declare type ChildRelationships$VisualforceAccessMetrics = {};
interface SObjectDefinition$VisualforceAccessMetrics extends SObjectDefinition<'VisualforceAccessMetrics'> {
    Name: 'VisualforceAccessMetrics';
    Fields: Fields$VisualforceAccessMetrics;
    ParentReferences: ParentReferences$VisualforceAccessMetrics;
    ChildRelationships: ChildRelationships$VisualforceAccessMetrics;
}
declare type Fields$Vote = {
    Id: string;
    IsDeleted: boolean;
    ParentId: string;
    Type: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$Vote = {
    Parent: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$Vote = {};
interface SObjectDefinition$Vote extends SObjectDefinition<'Vote'> {
    Name: 'Vote';
    Fields: Fields$Vote;
    ParentReferences: ParentReferences$Vote;
    ChildRelationships: ChildRelationships$Vote;
}
declare type Fields$WaveAutoInstallRequest = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    TemplateApiName: string | null;
    TemplateVersion: string | null;
    FolderId: string | null;
    RequestType: string;
    RequestStatus: string;
    FailedReason: string | null;
    Configuration: string | null;
    RequestLog: string | null;
};
declare type ParentReferences$WaveAutoInstallRequest = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Folder: SObjectDefinition$Folder | null;
};
declare type ChildRelationships$WaveAutoInstallRequest = {
    WaveCompatibilityCheckItems: SObjectDefinition$WaveCompatibilityCheckItem;
};
interface SObjectDefinition$WaveAutoInstallRequest extends SObjectDefinition<'WaveAutoInstallRequest'> {
    Name: 'WaveAutoInstallRequest';
    Fields: Fields$WaveAutoInstallRequest;
    ParentReferences: ParentReferences$WaveAutoInstallRequest;
    ChildRelationships: ChildRelationships$WaveAutoInstallRequest;
}
declare type Fields$WaveCompatibilityCheckItem = {
    Id: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    TaskName: string;
    TaskResult: string;
    TemplateApiName: string;
    TemplateVersion: string | null;
    Payload: string | null;
    WaveAutoInstallRequestId: string | null;
};
declare type ParentReferences$WaveCompatibilityCheckItem = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    WaveAutoInstallRequest: SObjectDefinition$WaveAutoInstallRequest | null;
};
declare type ChildRelationships$WaveCompatibilityCheckItem = {};
interface SObjectDefinition$WaveCompatibilityCheckItem extends SObjectDefinition<'WaveCompatibilityCheckItem'> {
    Name: 'WaveCompatibilityCheckItem';
    Fields: Fields$WaveCompatibilityCheckItem;
    ParentReferences: ParentReferences$WaveCompatibilityCheckItem;
    ChildRelationships: ChildRelationships$WaveCompatibilityCheckItem;
}
declare type Fields$WebLink = {
    Id: string;
    PageOrSobjectType: string;
    Name: string;
    IsProtected: boolean;
    Url: string | null;
    EncodingKey: string;
    LinkType: string;
    OpenType: string;
    Height: number | null;
    Width: number | null;
    ShowsLocation: boolean;
    HasScrollbars: boolean;
    HasToolbar: boolean;
    HasMenubar: boolean;
    ShowsStatus: boolean;
    IsResizable: boolean;
    Position: string | null;
    ScontrolId: string | null;
    MasterLabel: string | null;
    Description: string | null;
    DisplayType: string;
    RequireRowSelection: boolean;
    NamespacePrefix: string | null;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
};
declare type ParentReferences$WebLink = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$WebLink = {};
interface SObjectDefinition$WebLink extends SObjectDefinition<'WebLink'> {
    Name: 'WebLink';
    Fields: Fields$WebLink;
    ParentReferences: ParentReferences$WebLink;
    ChildRelationships: ChildRelationships$WebLink;
}
declare type Fields$WorkAccess = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    ParentId: string;
    AccessType: string;
};
declare type ParentReferences$WorkAccess = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Parent: SObjectDefinition$WorkBadgeDefinition;
};
declare type ChildRelationships$WorkAccess = {};
interface SObjectDefinition$WorkAccess extends SObjectDefinition<'WorkAccess'> {
    Name: 'WorkAccess';
    Fields: Fields$WorkAccess;
    ParentReferences: ParentReferences$WorkAccess;
    ChildRelationships: ChildRelationships$WorkAccess;
}
declare type Fields$WorkAccessShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$WorkAccessShare = {
    Parent: SObjectDefinition$WorkAccess;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$WorkAccessShare = {};
interface SObjectDefinition$WorkAccessShare extends SObjectDefinition<'WorkAccessShare'> {
    Name: 'WorkAccessShare';
    Fields: Fields$WorkAccessShare;
    ParentReferences: ParentReferences$WorkAccessShare;
    ChildRelationships: ChildRelationships$WorkAccessShare;
}
declare type Fields$WorkBadge = {
    Id: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    SourceId: string;
    DefinitionId: string;
    RecipientId: string;
    GiverId: string | null;
    ImageUrl: string | null;
    Description: string | null;
    Message: string | null;
};
declare type ParentReferences$WorkBadge = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Source: SObjectDefinition$WorkThanks;
    Definition: SObjectDefinition$WorkBadgeDefinition;
    Recipient: SObjectDefinition$User;
    Giver: SObjectDefinition$User | null;
};
declare type ChildRelationships$WorkBadge = {};
interface SObjectDefinition$WorkBadge extends SObjectDefinition<'WorkBadge'> {
    Name: 'WorkBadge';
    Fields: Fields$WorkBadge;
    ParentReferences: ParentReferences$WorkBadge;
    ChildRelationships: ChildRelationships$WorkBadge;
}
declare type Fields$WorkBadgeDefinition = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    Name: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    IsCompanyWide: boolean;
    Description: string;
    ImageUrl: string;
    IsActive: boolean;
    LimitNumber: number | null;
    IsLimitPerUser: boolean;
    LimitStartDate: DateString | null;
    GivenBadgeCount: number | null;
    IsRewardBadge: boolean;
};
declare type ParentReferences$WorkBadgeDefinition = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$WorkBadgeDefinition = {
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    WorkAccesses: SObjectDefinition$WorkAccess;
    Badges: SObjectDefinition$WorkBadge;
    Feeds: SObjectDefinition$WorkBadgeDefinitionFeed;
    Histories: SObjectDefinition$WorkBadgeDefinitionHistory;
};
interface SObjectDefinition$WorkBadgeDefinition extends SObjectDefinition<'WorkBadgeDefinition'> {
    Name: 'WorkBadgeDefinition';
    Fields: Fields$WorkBadgeDefinition;
    ParentReferences: ParentReferences$WorkBadgeDefinition;
    ChildRelationships: ChildRelationships$WorkBadgeDefinition;
}
declare type Fields$WorkBadgeDefinitionFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$WorkBadgeDefinitionFeed = {
    Parent: SObjectDefinition$WorkBadgeDefinition;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$WorkBadgeDefinitionFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$WorkBadgeDefinitionFeed extends SObjectDefinition<'WorkBadgeDefinitionFeed'> {
    Name: 'WorkBadgeDefinitionFeed';
    Fields: Fields$WorkBadgeDefinitionFeed;
    ParentReferences: ParentReferences$WorkBadgeDefinitionFeed;
    ChildRelationships: ChildRelationships$WorkBadgeDefinitionFeed;
}
declare type Fields$WorkBadgeDefinitionHistory = {
    Id: string;
    IsDeleted: boolean;
    WorkBadgeDefinitionId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$WorkBadgeDefinitionHistory = {
    WorkBadgeDefinition: SObjectDefinition$WorkBadgeDefinition;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$WorkBadgeDefinitionHistory = {};
interface SObjectDefinition$WorkBadgeDefinitionHistory extends SObjectDefinition<'WorkBadgeDefinitionHistory'> {
    Name: 'WorkBadgeDefinitionHistory';
    Fields: Fields$WorkBadgeDefinitionHistory;
    ParentReferences: ParentReferences$WorkBadgeDefinitionHistory;
    ChildRelationships: ChildRelationships$WorkBadgeDefinitionHistory;
}
declare type Fields$WorkBadgeDefinitionShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$WorkBadgeDefinitionShare = {
    Parent: SObjectDefinition$WorkBadgeDefinition;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$WorkBadgeDefinitionShare = {};
interface SObjectDefinition$WorkBadgeDefinitionShare extends SObjectDefinition<'WorkBadgeDefinitionShare'> {
    Name: 'WorkBadgeDefinitionShare';
    Fields: Fields$WorkBadgeDefinitionShare;
    ParentReferences: ParentReferences$WorkBadgeDefinitionShare;
    ChildRelationships: ChildRelationships$WorkBadgeDefinitionShare;
}
declare type Fields$WorkOrder = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    WorkOrderNumber: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    AccountId: string | null;
    ContactId: string | null;
    CaseId: string | null;
    EntitlementId: string | null;
    ServiceContractId: string | null;
    AssetId: string | null;
    Street: string | null;
    City: string | null;
    State: string | null;
    PostalCode: string | null;
    Country: string | null;
    Latitude: number | null;
    Longitude: number | null;
    GeocodeAccuracy: string | null;
    Address: Address | null;
    Description: string | null;
    StartDate: DateString | null;
    EndDate: DateString | null;
    Subject: string | null;
    RootWorkOrderId: string | null;
    Status: string | null;
    Priority: string | null;
    Tax: number | null;
    Subtotal: number | null;
    TotalPrice: number | null;
    LineItemCount: number | null;
    Pricebook2Id: string | null;
    Discount: number | null;
    GrandTotal: number | null;
    ParentWorkOrderId: string | null;
    IsClosed: boolean;
    IsStopped: boolean;
    StopStartDate: DateString | null;
    SlaStartDate: DateString | null;
    SlaExitDate: DateString | null;
    BusinessHoursId: string | null;
    MilestoneStatus: string | null;
    Duration: number | null;
    DurationType: string | null;
    DurationInMinutes: number | null;
    ServiceAppointmentCount: number | null;
    StatusCategory: string | null;
};
declare type ParentReferences$WorkOrder = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Account: SObjectDefinition$Account | null;
    Contact: SObjectDefinition$Contact | null;
    Case: SObjectDefinition$Case | null;
    Entitlement: SObjectDefinition$Entitlement | null;
    ServiceContract: SObjectDefinition$ServiceContract | null;
    Asset: SObjectDefinition$Asset | null;
    RootWorkOrder: SObjectDefinition$WorkOrder | null;
    Pricebook2: SObjectDefinition$Pricebook2 | null;
    ParentWorkOrder: SObjectDefinition$WorkOrder | null;
    BusinessHours: SObjectDefinition$BusinessHours | null;
};
declare type ChildRelationships$WorkOrder = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContactRequests: SObjectDefinition$ContactRequest;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    Emails: SObjectDefinition$EmailMessage;
    EntityMilestones: SObjectDefinition$EntityMilestone;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    LinkedArticles: SObjectDefinition$LinkedArticle;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    OpenActivities: SObjectDefinition$OpenActivity;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    Tasks: SObjectDefinition$Task;
    TopicAssignments: SObjectDefinition$TopicAssignment;
    ChildWorkOrders: SObjectDefinition$WorkOrder;
    DescendantWorkOrders: SObjectDefinition$WorkOrder;
    Feeds: SObjectDefinition$WorkOrderFeed;
    Histories: SObjectDefinition$WorkOrderHistory;
    WorkOrderLineItems: SObjectDefinition$WorkOrderLineItem;
};
interface SObjectDefinition$WorkOrder extends SObjectDefinition<'WorkOrder'> {
    Name: 'WorkOrder';
    Fields: Fields$WorkOrder;
    ParentReferences: ParentReferences$WorkOrder;
    ChildRelationships: ChildRelationships$WorkOrder;
}
declare type Fields$WorkOrderFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$WorkOrderFeed = {
    Parent: SObjectDefinition$WorkOrder;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$WorkOrderFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$WorkOrderFeed extends SObjectDefinition<'WorkOrderFeed'> {
    Name: 'WorkOrderFeed';
    Fields: Fields$WorkOrderFeed;
    ParentReferences: ParentReferences$WorkOrderFeed;
    ChildRelationships: ChildRelationships$WorkOrderFeed;
}
declare type Fields$WorkOrderHistory = {
    Id: string;
    IsDeleted: boolean;
    WorkOrderId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$WorkOrderHistory = {
    WorkOrder: SObjectDefinition$WorkOrder;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$WorkOrderHistory = {};
interface SObjectDefinition$WorkOrderHistory extends SObjectDefinition<'WorkOrderHistory'> {
    Name: 'WorkOrderHistory';
    Fields: Fields$WorkOrderHistory;
    ParentReferences: ParentReferences$WorkOrderHistory;
    ChildRelationships: ChildRelationships$WorkOrderHistory;
}
declare type Fields$WorkOrderLineItem = {
    Id: string;
    IsDeleted: boolean;
    LineItemNumber: string;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    LastViewedDate: DateString | null;
    LastReferencedDate: DateString | null;
    WorkOrderId: string;
    ParentWorkOrderLineItemId: string | null;
    Product2Id: string | null;
    AssetId: string | null;
    OrderId: string | null;
    RootWorkOrderLineItemId: string | null;
    Description: string | null;
    StartDate: DateString | null;
    EndDate: DateString | null;
    Status: string | null;
    PricebookEntryId: string | null;
    Quantity: number | null;
    UnitPrice: number | null;
    Discount: number | null;
    ListPrice: number | null;
    Subtotal: number | null;
    TotalPrice: number | null;
    Duration: number | null;
    DurationType: string | null;
    DurationInMinutes: number | null;
    Street: string | null;
    City: string | null;
    State: string | null;
    PostalCode: string | null;
    Country: string | null;
    Latitude: number | null;
    Longitude: number | null;
    GeocodeAccuracy: string | null;
    Address: Address | null;
    Subject: string | null;
    StatusCategory: string | null;
    IsClosed: boolean;
    Priority: string | null;
    ServiceAppointmentCount: number | null;
};
declare type ParentReferences$WorkOrderLineItem = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    WorkOrder: SObjectDefinition$WorkOrder;
    ParentWorkOrderLineItem: SObjectDefinition$WorkOrderLineItem | null;
    Product2: SObjectDefinition$Product2 | null;
    Asset: SObjectDefinition$Asset | null;
    Order: SObjectDefinition$Order | null;
    RootWorkOrderLineItem: SObjectDefinition$WorkOrderLineItem | null;
    PricebookEntry: SObjectDefinition$PricebookEntry | null;
};
declare type ChildRelationships$WorkOrderLineItem = {
    ActivityHistories: SObjectDefinition$ActivityHistory;
    AttachedContentDocuments: SObjectDefinition$AttachedContentDocument;
    Attachments: SObjectDefinition$Attachment;
    CombinedAttachments: SObjectDefinition$CombinedAttachment;
    ContentDocumentLinks: SObjectDefinition$ContentDocumentLink;
    Emails: SObjectDefinition$EmailMessage;
    FeedSubscriptionsForEntity: SObjectDefinition$EntitySubscription;
    Events: SObjectDefinition$Event;
    LinkedArticles: SObjectDefinition$LinkedArticle;
    Notes: SObjectDefinition$Note;
    NotesAndAttachments: SObjectDefinition$NoteAndAttachment;
    OpenActivities: SObjectDefinition$OpenActivity;
    ProcessInstances: SObjectDefinition$ProcessInstance;
    ProcessSteps: SObjectDefinition$ProcessInstanceHistory;
    RecordActions: SObjectDefinition$RecordAction;
    Tasks: SObjectDefinition$Task;
    TopicAssignments: SObjectDefinition$TopicAssignment;
    ChildWorkOrderLineItems: SObjectDefinition$WorkOrderLineItem;
    DescendantWorkOrderLineItems: SObjectDefinition$WorkOrderLineItem;
    Feeds: SObjectDefinition$WorkOrderLineItemFeed;
    Histories: SObjectDefinition$WorkOrderLineItemHistory;
};
interface SObjectDefinition$WorkOrderLineItem extends SObjectDefinition<'WorkOrderLineItem'> {
    Name: 'WorkOrderLineItem';
    Fields: Fields$WorkOrderLineItem;
    ParentReferences: ParentReferences$WorkOrderLineItem;
    ChildRelationships: ChildRelationships$WorkOrderLineItem;
}
declare type Fields$WorkOrderLineItemFeed = {
    Id: string;
    ParentId: string;
    Type: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    IsDeleted: boolean;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
    CommentCount: number;
    LikeCount: number;
    Title: string | null;
    Body: string | null;
    LinkUrl: string | null;
    IsRichText: boolean;
    RelatedRecordId: string | null;
    InsertedById: string | null;
};
declare type ParentReferences$WorkOrderLineItemFeed = {
    Parent: SObjectDefinition$WorkOrderLineItem;
    CreatedBy: SObjectDefinition$User;
    InsertedBy: SObjectDefinition$User | null;
};
declare type ChildRelationships$WorkOrderLineItemFeed = {
    FeedAttachments: SObjectDefinition$FeedAttachment;
    FeedComments: SObjectDefinition$FeedComment;
    FeedLikes: SObjectDefinition$FeedLike;
    FeedSignals: SObjectDefinition$FeedSignal;
    FeedTrackedChanges: SObjectDefinition$FeedTrackedChange;
};
interface SObjectDefinition$WorkOrderLineItemFeed extends SObjectDefinition<'WorkOrderLineItemFeed'> {
    Name: 'WorkOrderLineItemFeed';
    Fields: Fields$WorkOrderLineItemFeed;
    ParentReferences: ParentReferences$WorkOrderLineItemFeed;
    ChildRelationships: ChildRelationships$WorkOrderLineItemFeed;
}
declare type Fields$WorkOrderLineItemHistory = {
    Id: string;
    IsDeleted: boolean;
    WorkOrderLineItemId: string;
    CreatedById: string;
    CreatedDate: DateString;
    Field: string;
    OldValue: string | null;
    NewValue: string | null;
};
declare type ParentReferences$WorkOrderLineItemHistory = {
    WorkOrderLineItem: SObjectDefinition$WorkOrderLineItem;
    CreatedBy: SObjectDefinition$User;
};
declare type ChildRelationships$WorkOrderLineItemHistory = {};
interface SObjectDefinition$WorkOrderLineItemHistory extends SObjectDefinition<'WorkOrderLineItemHistory'> {
    Name: 'WorkOrderLineItemHistory';
    Fields: Fields$WorkOrderLineItemHistory;
    ParentReferences: ParentReferences$WorkOrderLineItemHistory;
    ChildRelationships: ChildRelationships$WorkOrderLineItemHistory;
}
declare type Fields$WorkOrderLineItemStatus = {
    Id: string;
    MasterLabel: string | null;
    ApiName: string;
    SortOrder: number | null;
    IsDefault: boolean;
    StatusCode: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$WorkOrderLineItemStatus = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$WorkOrderLineItemStatus = {};
interface SObjectDefinition$WorkOrderLineItemStatus extends SObjectDefinition<'WorkOrderLineItemStatus'> {
    Name: 'WorkOrderLineItemStatus';
    Fields: Fields$WorkOrderLineItemStatus;
    ParentReferences: ParentReferences$WorkOrderLineItemStatus;
    ChildRelationships: ChildRelationships$WorkOrderLineItemStatus;
}
declare type Fields$WorkOrderShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$WorkOrderShare = {
    Parent: SObjectDefinition$WorkOrder;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$WorkOrderShare = {};
interface SObjectDefinition$WorkOrderShare extends SObjectDefinition<'WorkOrderShare'> {
    Name: 'WorkOrderShare';
    Fields: Fields$WorkOrderShare;
    ParentReferences: ParentReferences$WorkOrderShare;
    ChildRelationships: ChildRelationships$WorkOrderShare;
}
declare type Fields$WorkOrderStatus = {
    Id: string;
    MasterLabel: string | null;
    ApiName: string;
    SortOrder: number | null;
    IsDefault: boolean;
    StatusCode: string | null;
    CreatedById: string;
    CreatedDate: DateString;
    LastModifiedById: string;
    LastModifiedDate: DateString;
    SystemModstamp: DateString;
};
declare type ParentReferences$WorkOrderStatus = {
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$WorkOrderStatus = {};
interface SObjectDefinition$WorkOrderStatus extends SObjectDefinition<'WorkOrderStatus'> {
    Name: 'WorkOrderStatus';
    Fields: Fields$WorkOrderStatus;
    ParentReferences: ParentReferences$WorkOrderStatus;
    ChildRelationships: ChildRelationships$WorkOrderStatus;
}
declare type Fields$WorkThanks = {
    Id: string;
    OwnerId: string;
    IsDeleted: boolean;
    CreatedDate: DateString;
    CreatedById: string;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    SystemModstamp: DateString;
    GiverId: string;
    Message: string;
    FeedItemId: string | null;
};
declare type ParentReferences$WorkThanks = {
    Owner: SObjectDefinition$Name;
    CreatedBy: SObjectDefinition$User;
    LastModifiedBy: SObjectDefinition$User;
    Giver: SObjectDefinition$User;
    FeedItem: SObjectDefinition$FeedItem | null;
};
declare type ChildRelationships$WorkThanks = {
    Badges: SObjectDefinition$WorkBadge;
};
interface SObjectDefinition$WorkThanks extends SObjectDefinition<'WorkThanks'> {
    Name: 'WorkThanks';
    Fields: Fields$WorkThanks;
    ParentReferences: ParentReferences$WorkThanks;
    ChildRelationships: ChildRelationships$WorkThanks;
}
declare type Fields$WorkThanksShare = {
    Id: string;
    ParentId: string;
    UserOrGroupId: string;
    AccessLevel: string;
    RowCause: string | null;
    LastModifiedDate: DateString;
    LastModifiedById: string;
    IsDeleted: boolean;
};
declare type ParentReferences$WorkThanksShare = {
    Parent: SObjectDefinition$WorkThanks;
    UserOrGroup: SObjectDefinition$Name;
    LastModifiedBy: SObjectDefinition$User;
};
declare type ChildRelationships$WorkThanksShare = {};
interface SObjectDefinition$WorkThanksShare extends SObjectDefinition<'WorkThanksShare'> {
    Name: 'WorkThanksShare';
    Fields: Fields$WorkThanksShare;
    ParentReferences: ParentReferences$WorkThanksShare;
    ChildRelationships: ChildRelationships$WorkThanksShare;
}
export interface StandardSchema extends Schema {
    SObjects: {
        AcceptedEventRelation: SObjectDefinition$AcceptedEventRelation;
        Account: SObjectDefinition$Account;
        AccountBrand: SObjectDefinition$AccountBrand;
        AccountBrandShare: SObjectDefinition$AccountBrandShare;
        AccountChangeEvent: SObjectDefinition$AccountChangeEvent;
        AccountContactRole: SObjectDefinition$AccountContactRole;
        AccountContactRoleChangeEvent: SObjectDefinition$AccountContactRoleChangeEvent;
        AccountFeed: SObjectDefinition$AccountFeed;
        AccountHistory: SObjectDefinition$AccountHistory;
        AccountPartner: SObjectDefinition$AccountPartner;
        AccountShare: SObjectDefinition$AccountShare;
        ActionLinkGroupTemplate: SObjectDefinition$ActionLinkGroupTemplate;
        ActionLinkTemplate: SObjectDefinition$ActionLinkTemplate;
        ActivityHistory: SObjectDefinition$ActivityHistory;
        AdditionalNumber: SObjectDefinition$AdditionalNumber;
        AggregateResult: SObjectDefinition$AggregateResult;
        Announcement: SObjectDefinition$Announcement;
        ApexClass: SObjectDefinition$ApexClass;
        ApexComponent: SObjectDefinition$ApexComponent;
        ApexEmailNotification: SObjectDefinition$ApexEmailNotification;
        ApexLog: SObjectDefinition$ApexLog;
        ApexPage: SObjectDefinition$ApexPage;
        ApexPageInfo: SObjectDefinition$ApexPageInfo;
        ApexTestQueueItem: SObjectDefinition$ApexTestQueueItem;
        ApexTestResult: SObjectDefinition$ApexTestResult;
        ApexTestResultLimits: SObjectDefinition$ApexTestResultLimits;
        ApexTestRunResult: SObjectDefinition$ApexTestRunResult;
        ApexTestSuite: SObjectDefinition$ApexTestSuite;
        ApexTrigger: SObjectDefinition$ApexTrigger;
        AppDefinition: SObjectDefinition$AppDefinition;
        AppMenuItem: SObjectDefinition$AppMenuItem;
        AppTabMember: SObjectDefinition$AppTabMember;
        Approval: SObjectDefinition$Approval;
        Asset: SObjectDefinition$Asset;
        AssetChangeEvent: SObjectDefinition$AssetChangeEvent;
        AssetFeed: SObjectDefinition$AssetFeed;
        AssetHistory: SObjectDefinition$AssetHistory;
        AssetRelationship: SObjectDefinition$AssetRelationship;
        AssetRelationshipFeed: SObjectDefinition$AssetRelationshipFeed;
        AssetRelationshipHistory: SObjectDefinition$AssetRelationshipHistory;
        AssetShare: SObjectDefinition$AssetShare;
        AssetTokenEvent: SObjectDefinition$AssetTokenEvent;
        AssignmentRule: SObjectDefinition$AssignmentRule;
        AsyncApexJob: SObjectDefinition$AsyncApexJob;
        AttachedContentDocument: SObjectDefinition$AttachedContentDocument;
        Attachment: SObjectDefinition$Attachment;
        AuraDefinition: SObjectDefinition$AuraDefinition;
        AuraDefinitionBundle: SObjectDefinition$AuraDefinitionBundle;
        AuraDefinitionBundleInfo: SObjectDefinition$AuraDefinitionBundleInfo;
        AuraDefinitionInfo: SObjectDefinition$AuraDefinitionInfo;
        AuthConfig: SObjectDefinition$AuthConfig;
        AuthConfigProviders: SObjectDefinition$AuthConfigProviders;
        AuthProvider: SObjectDefinition$AuthProvider;
        AuthSession: SObjectDefinition$AuthSession;
        BackgroundOperation: SObjectDefinition$BackgroundOperation;
        BrandTemplate: SObjectDefinition$BrandTemplate;
        BrandingSet: SObjectDefinition$BrandingSet;
        BrandingSetProperty: SObjectDefinition$BrandingSetProperty;
        BusinessHours: SObjectDefinition$BusinessHours;
        BusinessProcess: SObjectDefinition$BusinessProcess;
        CallCenter: SObjectDefinition$CallCenter;
        Campaign: SObjectDefinition$Campaign;
        CampaignChangeEvent: SObjectDefinition$CampaignChangeEvent;
        CampaignFeed: SObjectDefinition$CampaignFeed;
        CampaignHistory: SObjectDefinition$CampaignHistory;
        CampaignInfluenceModel: SObjectDefinition$CampaignInfluenceModel;
        CampaignMember: SObjectDefinition$CampaignMember;
        CampaignMemberStatus: SObjectDefinition$CampaignMemberStatus;
        CampaignShare: SObjectDefinition$CampaignShare;
        Case: SObjectDefinition$Case;
        CaseArticle: SObjectDefinition$CaseArticle;
        CaseChangeEvent: SObjectDefinition$CaseChangeEvent;
        CaseComment: SObjectDefinition$CaseComment;
        CaseContactRole: SObjectDefinition$CaseContactRole;
        CaseExternalDocument: SObjectDefinition$CaseExternalDocument;
        CaseFeed: SObjectDefinition$CaseFeed;
        CaseHistory: SObjectDefinition$CaseHistory;
        CaseMilestone: SObjectDefinition$CaseMilestone;
        CaseShare: SObjectDefinition$CaseShare;
        CaseSolution: SObjectDefinition$CaseSolution;
        CaseStatus: SObjectDefinition$CaseStatus;
        CaseSubjectParticle: SObjectDefinition$CaseSubjectParticle;
        CaseTeamMember: SObjectDefinition$CaseTeamMember;
        CaseTeamRole: SObjectDefinition$CaseTeamRole;
        CaseTeamTemplate: SObjectDefinition$CaseTeamTemplate;
        CaseTeamTemplateMember: SObjectDefinition$CaseTeamTemplateMember;
        CaseTeamTemplateRecord: SObjectDefinition$CaseTeamTemplateRecord;
        CategoryData: SObjectDefinition$CategoryData;
        CategoryNode: SObjectDefinition$CategoryNode;
        ChatterActivity: SObjectDefinition$ChatterActivity;
        ChatterExtension: SObjectDefinition$ChatterExtension;
        ChatterExtensionConfig: SObjectDefinition$ChatterExtensionConfig;
        ClientBrowser: SObjectDefinition$ClientBrowser;
        CollaborationGroup: SObjectDefinition$CollaborationGroup;
        CollaborationGroupFeed: SObjectDefinition$CollaborationGroupFeed;
        CollaborationGroupMember: SObjectDefinition$CollaborationGroupMember;
        CollaborationGroupMemberRequest: SObjectDefinition$CollaborationGroupMemberRequest;
        CollaborationGroupRecord: SObjectDefinition$CollaborationGroupRecord;
        CollaborationInvitation: SObjectDefinition$CollaborationInvitation;
        ColorDefinition: SObjectDefinition$ColorDefinition;
        CombinedAttachment: SObjectDefinition$CombinedAttachment;
        Community: SObjectDefinition$Community;
        ConnectedApplication: SObjectDefinition$ConnectedApplication;
        Contact: SObjectDefinition$Contact;
        ContactChangeEvent: SObjectDefinition$ContactChangeEvent;
        ContactFeed: SObjectDefinition$ContactFeed;
        ContactHistory: SObjectDefinition$ContactHistory;
        ContactRequest: SObjectDefinition$ContactRequest;
        ContactRequestShare: SObjectDefinition$ContactRequestShare;
        ContactShare: SObjectDefinition$ContactShare;
        ContentAsset: SObjectDefinition$ContentAsset;
        ContentBody: SObjectDefinition$ContentBody;
        ContentDistribution: SObjectDefinition$ContentDistribution;
        ContentDistributionView: SObjectDefinition$ContentDistributionView;
        ContentDocument: SObjectDefinition$ContentDocument;
        ContentDocumentFeed: SObjectDefinition$ContentDocumentFeed;
        ContentDocumentHistory: SObjectDefinition$ContentDocumentHistory;
        ContentDocumentLink: SObjectDefinition$ContentDocumentLink;
        ContentDocumentSubscription: SObjectDefinition$ContentDocumentSubscription;
        ContentFolder: SObjectDefinition$ContentFolder;
        ContentFolderItem: SObjectDefinition$ContentFolderItem;
        ContentFolderLink: SObjectDefinition$ContentFolderLink;
        ContentFolderMember: SObjectDefinition$ContentFolderMember;
        ContentHubItem: SObjectDefinition$ContentHubItem;
        ContentHubRepository: SObjectDefinition$ContentHubRepository;
        ContentNotification: SObjectDefinition$ContentNotification;
        ContentTagSubscription: SObjectDefinition$ContentTagSubscription;
        ContentUserSubscription: SObjectDefinition$ContentUserSubscription;
        ContentVersion: SObjectDefinition$ContentVersion;
        ContentVersionComment: SObjectDefinition$ContentVersionComment;
        ContentVersionHistory: SObjectDefinition$ContentVersionHistory;
        ContentVersionRating: SObjectDefinition$ContentVersionRating;
        ContentWorkspace: SObjectDefinition$ContentWorkspace;
        ContentWorkspaceDoc: SObjectDefinition$ContentWorkspaceDoc;
        ContentWorkspaceMember: SObjectDefinition$ContentWorkspaceMember;
        ContentWorkspacePermission: SObjectDefinition$ContentWorkspacePermission;
        ContentWorkspaceSubscription: SObjectDefinition$ContentWorkspaceSubscription;
        Contract: SObjectDefinition$Contract;
        ContractContactRole: SObjectDefinition$ContractContactRole;
        ContractFeed: SObjectDefinition$ContractFeed;
        ContractHistory: SObjectDefinition$ContractHistory;
        ContractLineItem: SObjectDefinition$ContractLineItem;
        ContractLineItemChangeEvent: SObjectDefinition$ContractLineItemChangeEvent;
        ContractLineItemHistory: SObjectDefinition$ContractLineItemHistory;
        ContractStatus: SObjectDefinition$ContractStatus;
        CorsWhitelistEntry: SObjectDefinition$CorsWhitelistEntry;
        CronJobDetail: SObjectDefinition$CronJobDetail;
        CronTrigger: SObjectDefinition$CronTrigger;
        CspTrustedSite: SObjectDefinition$CspTrustedSite;
        CustomBrand: SObjectDefinition$CustomBrand;
        CustomBrandAsset: SObjectDefinition$CustomBrandAsset;
        CustomHttpHeader: SObjectDefinition$CustomHttpHeader;
        CustomObjectUserLicenseMetrics: SObjectDefinition$CustomObjectUserLicenseMetrics;
        CustomPermission: SObjectDefinition$CustomPermission;
        CustomPermissionDependency: SObjectDefinition$CustomPermissionDependency;
        Dashboard: SObjectDefinition$Dashboard;
        DashboardComponent: SObjectDefinition$DashboardComponent;
        DashboardComponentFeed: SObjectDefinition$DashboardComponentFeed;
        DashboardFeed: SObjectDefinition$DashboardFeed;
        DataAssessmentFieldMetric: SObjectDefinition$DataAssessmentFieldMetric;
        DataAssessmentMetric: SObjectDefinition$DataAssessmentMetric;
        DataAssessmentValueMetric: SObjectDefinition$DataAssessmentValueMetric;
        DataIntegrationRecordPurchasePermission: SObjectDefinition$DataIntegrationRecordPurchasePermission;
        DataStatistics: SObjectDefinition$DataStatistics;
        DataType: SObjectDefinition$DataType;
        DatacloudAddress: SObjectDefinition$DatacloudAddress;
        DatasetExport: SObjectDefinition$DatasetExport;
        DatasetExportEvent: SObjectDefinition$DatasetExportEvent;
        DatasetExportPart: SObjectDefinition$DatasetExportPart;
        DeclinedEventRelation: SObjectDefinition$DeclinedEventRelation;
        Document: SObjectDefinition$Document;
        DocumentAttachmentMap: SObjectDefinition$DocumentAttachmentMap;
        Domain: SObjectDefinition$Domain;
        DomainSite: SObjectDefinition$DomainSite;
        DuplicateRecordItem: SObjectDefinition$DuplicateRecordItem;
        DuplicateRecordSet: SObjectDefinition$DuplicateRecordSet;
        DuplicateRule: SObjectDefinition$DuplicateRule;
        EmailCapture: SObjectDefinition$EmailCapture;
        EmailDomainFilter: SObjectDefinition$EmailDomainFilter;
        EmailDomainKey: SObjectDefinition$EmailDomainKey;
        EmailMessage: SObjectDefinition$EmailMessage;
        EmailMessageRelation: SObjectDefinition$EmailMessageRelation;
        EmailRelay: SObjectDefinition$EmailRelay;
        EmailServicesAddress: SObjectDefinition$EmailServicesAddress;
        EmailServicesFunction: SObjectDefinition$EmailServicesFunction;
        EmailStatus: SObjectDefinition$EmailStatus;
        EmailTemplate: SObjectDefinition$EmailTemplate;
        EmbeddedServiceDetail: SObjectDefinition$EmbeddedServiceDetail;
        Entitlement: SObjectDefinition$Entitlement;
        EntitlementChangeEvent: SObjectDefinition$EntitlementChangeEvent;
        EntitlementContact: SObjectDefinition$EntitlementContact;
        EntitlementFeed: SObjectDefinition$EntitlementFeed;
        EntitlementHistory: SObjectDefinition$EntitlementHistory;
        EntitlementTemplate: SObjectDefinition$EntitlementTemplate;
        EntityDefinition: SObjectDefinition$EntityDefinition;
        EntityMilestone: SObjectDefinition$EntityMilestone;
        EntityMilestoneFeed: SObjectDefinition$EntityMilestoneFeed;
        EntityMilestoneHistory: SObjectDefinition$EntityMilestoneHistory;
        EntityParticle: SObjectDefinition$EntityParticle;
        EntitySubscription: SObjectDefinition$EntitySubscription;
        Event: SObjectDefinition$Event;
        EventBusSubscriber: SObjectDefinition$EventBusSubscriber;
        EventChangeEvent: SObjectDefinition$EventChangeEvent;
        EventFeed: SObjectDefinition$EventFeed;
        EventLogFile: SObjectDefinition$EventLogFile;
        EventRelation: SObjectDefinition$EventRelation;
        EventRelationChangeEvent: SObjectDefinition$EventRelationChangeEvent;
        ExternalDataSource: SObjectDefinition$ExternalDataSource;
        ExternalDataUserAuth: SObjectDefinition$ExternalDataUserAuth;
        ExternalSocialAccount: SObjectDefinition$ExternalSocialAccount;
        FeedAttachment: SObjectDefinition$FeedAttachment;
        FeedComment: SObjectDefinition$FeedComment;
        FeedItem: SObjectDefinition$FeedItem;
        FeedLike: SObjectDefinition$FeedLike;
        FeedPollChoice: SObjectDefinition$FeedPollChoice;
        FeedPollVote: SObjectDefinition$FeedPollVote;
        FeedRevision: SObjectDefinition$FeedRevision;
        FeedSignal: SObjectDefinition$FeedSignal;
        FeedTrackedChange: SObjectDefinition$FeedTrackedChange;
        FieldDefinition: SObjectDefinition$FieldDefinition;
        FieldPermissions: SObjectDefinition$FieldPermissions;
        FileSearchActivity: SObjectDefinition$FileSearchActivity;
        FiscalYearSettings: SObjectDefinition$FiscalYearSettings;
        FlexQueueItem: SObjectDefinition$FlexQueueItem;
        FlowInterview: SObjectDefinition$FlowInterview;
        FlowInterviewShare: SObjectDefinition$FlowInterviewShare;
        FlowRecordRelation: SObjectDefinition$FlowRecordRelation;
        FlowStageRelation: SObjectDefinition$FlowStageRelation;
        Folder: SObjectDefinition$Folder;
        FolderedContentDocument: SObjectDefinition$FolderedContentDocument;
        ForecastShare: SObjectDefinition$ForecastShare;
        ForecastingShare: SObjectDefinition$ForecastingShare;
        GrantedByLicense: SObjectDefinition$GrantedByLicense;
        Group: SObjectDefinition$Group;
        GroupMember: SObjectDefinition$GroupMember;
        Holiday: SObjectDefinition$Holiday;
        IconDefinition: SObjectDefinition$IconDefinition;
        Idea: SObjectDefinition$Idea;
        IdeaComment: SObjectDefinition$IdeaComment;
        IdpEventLog: SObjectDefinition$IdpEventLog;
        Individual: SObjectDefinition$Individual;
        IndividualHistory: SObjectDefinition$IndividualHistory;
        IndividualShare: SObjectDefinition$IndividualShare;
        InstalledMobileApp: SObjectDefinition$InstalledMobileApp;
        KnowledgeArticle: SObjectDefinition$KnowledgeArticle;
        KnowledgeArticleVersion: SObjectDefinition$KnowledgeArticleVersion;
        KnowledgeArticleVersionHistory: SObjectDefinition$KnowledgeArticleVersionHistory;
        KnowledgeArticleViewStat: SObjectDefinition$KnowledgeArticleViewStat;
        KnowledgeArticleVoteStat: SObjectDefinition$KnowledgeArticleVoteStat;
        Knowledge__DataCategorySelection: SObjectDefinition$Knowledge__DataCategorySelection;
        Knowledge__ViewStat: SObjectDefinition$Knowledge__ViewStat;
        Knowledge__VoteStat: SObjectDefinition$Knowledge__VoteStat;
        Knowledge__ka: SObjectDefinition$Knowledge__ka;
        Knowledge__kav: SObjectDefinition$Knowledge__kav;
        KnowledgeableUser: SObjectDefinition$KnowledgeableUser;
        Lead: SObjectDefinition$Lead;
        LeadChangeEvent: SObjectDefinition$LeadChangeEvent;
        LeadFeed: SObjectDefinition$LeadFeed;
        LeadHistory: SObjectDefinition$LeadHistory;
        LeadShare: SObjectDefinition$LeadShare;
        LeadStatus: SObjectDefinition$LeadStatus;
        LightningExperienceTheme: SObjectDefinition$LightningExperienceTheme;
        LinkedArticle: SObjectDefinition$LinkedArticle;
        LinkedArticleFeed: SObjectDefinition$LinkedArticleFeed;
        LinkedArticleHistory: SObjectDefinition$LinkedArticleHistory;
        ListEmail: SObjectDefinition$ListEmail;
        ListEmailChangeEvent: SObjectDefinition$ListEmailChangeEvent;
        ListEmailRecipientSource: SObjectDefinition$ListEmailRecipientSource;
        ListEmailShare: SObjectDefinition$ListEmailShare;
        ListView: SObjectDefinition$ListView;
        ListViewChart: SObjectDefinition$ListViewChart;
        ListViewChartInstance: SObjectDefinition$ListViewChartInstance;
        LoginGeo: SObjectDefinition$LoginGeo;
        LoginHistory: SObjectDefinition$LoginHistory;
        LoginIp: SObjectDefinition$LoginIp;
        LogoutEventStream: SObjectDefinition$LogoutEventStream;
        LookedUpFromActivity: SObjectDefinition$LookedUpFromActivity;
        Macro: SObjectDefinition$Macro;
        MacroHistory: SObjectDefinition$MacroHistory;
        MacroInstruction: SObjectDefinition$MacroInstruction;
        MacroShare: SObjectDefinition$MacroShare;
        MailmergeTemplate: SObjectDefinition$MailmergeTemplate;
        MatchingRule: SObjectDefinition$MatchingRule;
        MatchingRuleItem: SObjectDefinition$MatchingRuleItem;
        MilestoneType: SObjectDefinition$MilestoneType;
        Name: SObjectDefinition$Name;
        NamedCredential: SObjectDefinition$NamedCredential;
        Note: SObjectDefinition$Note;
        NoteAndAttachment: SObjectDefinition$NoteAndAttachment;
        OauthToken: SObjectDefinition$OauthToken;
        ObjectPermissions: SObjectDefinition$ObjectPermissions;
        OpenActivity: SObjectDefinition$OpenActivity;
        Opportunity: SObjectDefinition$Opportunity;
        OpportunityChangeEvent: SObjectDefinition$OpportunityChangeEvent;
        OpportunityCompetitor: SObjectDefinition$OpportunityCompetitor;
        OpportunityContactRole: SObjectDefinition$OpportunityContactRole;
        OpportunityContactRoleChangeEvent: SObjectDefinition$OpportunityContactRoleChangeEvent;
        OpportunityFeed: SObjectDefinition$OpportunityFeed;
        OpportunityFieldHistory: SObjectDefinition$OpportunityFieldHistory;
        OpportunityHistory: SObjectDefinition$OpportunityHistory;
        OpportunityLineItem: SObjectDefinition$OpportunityLineItem;
        OpportunityPartner: SObjectDefinition$OpportunityPartner;
        OpportunityShare: SObjectDefinition$OpportunityShare;
        OpportunityStage: SObjectDefinition$OpportunityStage;
        Order: SObjectDefinition$Order;
        OrderChangeEvent: SObjectDefinition$OrderChangeEvent;
        OrderFeed: SObjectDefinition$OrderFeed;
        OrderHistory: SObjectDefinition$OrderHistory;
        OrderItem: SObjectDefinition$OrderItem;
        OrderItemChangeEvent: SObjectDefinition$OrderItemChangeEvent;
        OrderItemFeed: SObjectDefinition$OrderItemFeed;
        OrderItemHistory: SObjectDefinition$OrderItemHistory;
        OrderShare: SObjectDefinition$OrderShare;
        OrgLifecycleNotification: SObjectDefinition$OrgLifecycleNotification;
        OrgWideEmailAddress: SObjectDefinition$OrgWideEmailAddress;
        Organization: SObjectDefinition$Organization;
        OutgoingEmail: SObjectDefinition$OutgoingEmail;
        OutgoingEmailRelation: SObjectDefinition$OutgoingEmailRelation;
        OwnedContentDocument: SObjectDefinition$OwnedContentDocument;
        OwnerChangeOptionInfo: SObjectDefinition$OwnerChangeOptionInfo;
        PackageLicense: SObjectDefinition$PackageLicense;
        Partner: SObjectDefinition$Partner;
        PartnerRole: SObjectDefinition$PartnerRole;
        Period: SObjectDefinition$Period;
        PermissionSet: SObjectDefinition$PermissionSet;
        PermissionSetAssignment: SObjectDefinition$PermissionSetAssignment;
        PermissionSetLicense: SObjectDefinition$PermissionSetLicense;
        PermissionSetLicenseAssign: SObjectDefinition$PermissionSetLicenseAssign;
        PicklistValueInfo: SObjectDefinition$PicklistValueInfo;
        PlatformAction: SObjectDefinition$PlatformAction;
        PlatformCachePartition: SObjectDefinition$PlatformCachePartition;
        PlatformCachePartitionType: SObjectDefinition$PlatformCachePartitionType;
        Pricebook2: SObjectDefinition$Pricebook2;
        Pricebook2History: SObjectDefinition$Pricebook2History;
        PricebookEntry: SObjectDefinition$PricebookEntry;
        ProcessDefinition: SObjectDefinition$ProcessDefinition;
        ProcessInstance: SObjectDefinition$ProcessInstance;
        ProcessInstanceHistory: SObjectDefinition$ProcessInstanceHistory;
        ProcessInstanceNode: SObjectDefinition$ProcessInstanceNode;
        ProcessInstanceStep: SObjectDefinition$ProcessInstanceStep;
        ProcessInstanceWorkitem: SObjectDefinition$ProcessInstanceWorkitem;
        ProcessNode: SObjectDefinition$ProcessNode;
        Product2: SObjectDefinition$Product2;
        Product2ChangeEvent: SObjectDefinition$Product2ChangeEvent;
        Product2Feed: SObjectDefinition$Product2Feed;
        Product2History: SObjectDefinition$Product2History;
        ProductEntitlementTemplate: SObjectDefinition$ProductEntitlementTemplate;
        Profile: SObjectDefinition$Profile;
        ProfileSkill: SObjectDefinition$ProfileSkill;
        ProfileSkillEndorsement: SObjectDefinition$ProfileSkillEndorsement;
        ProfileSkillEndorsementFeed: SObjectDefinition$ProfileSkillEndorsementFeed;
        ProfileSkillEndorsementHistory: SObjectDefinition$ProfileSkillEndorsementHistory;
        ProfileSkillFeed: SObjectDefinition$ProfileSkillFeed;
        ProfileSkillHistory: SObjectDefinition$ProfileSkillHistory;
        ProfileSkillShare: SObjectDefinition$ProfileSkillShare;
        ProfileSkillUser: SObjectDefinition$ProfileSkillUser;
        ProfileSkillUserFeed: SObjectDefinition$ProfileSkillUserFeed;
        ProfileSkillUserHistory: SObjectDefinition$ProfileSkillUserHistory;
        Publisher: SObjectDefinition$Publisher;
        PushTopic: SObjectDefinition$PushTopic;
        QueueSobject: SObjectDefinition$QueueSobject;
        QuickText: SObjectDefinition$QuickText;
        QuickTextHistory: SObjectDefinition$QuickTextHistory;
        QuickTextShare: SObjectDefinition$QuickTextShare;
        RecentlyViewed: SObjectDefinition$RecentlyViewed;
        RecordAction: SObjectDefinition$RecordAction;
        RecordType: SObjectDefinition$RecordType;
        RelationshipDomain: SObjectDefinition$RelationshipDomain;
        RelationshipInfo: SObjectDefinition$RelationshipInfo;
        Report: SObjectDefinition$Report;
        ReportFeed: SObjectDefinition$ReportFeed;
        SamlSsoConfig: SObjectDefinition$SamlSsoConfig;
        Scontrol: SObjectDefinition$Scontrol;
        SearchActivity: SObjectDefinition$SearchActivity;
        SearchLayout: SObjectDefinition$SearchLayout;
        SearchPromotionRule: SObjectDefinition$SearchPromotionRule;
        SecureAgentsCluster: SObjectDefinition$SecureAgentsCluster;
        SecurityCustomBaseline: SObjectDefinition$SecurityCustomBaseline;
        ServiceContract: SObjectDefinition$ServiceContract;
        ServiceContractChangeEvent: SObjectDefinition$ServiceContractChangeEvent;
        ServiceContractFeed: SObjectDefinition$ServiceContractFeed;
        ServiceContractHistory: SObjectDefinition$ServiceContractHistory;
        ServiceContractShare: SObjectDefinition$ServiceContractShare;
        SessionPermSetActivation: SObjectDefinition$SessionPermSetActivation;
        SetupAuditTrail: SObjectDefinition$SetupAuditTrail;
        SetupEntityAccess: SObjectDefinition$SetupEntityAccess;
        Site: SObjectDefinition$Site;
        SiteDetail: SObjectDefinition$SiteDetail;
        SiteFeed: SObjectDefinition$SiteFeed;
        SiteHistory: SObjectDefinition$SiteHistory;
        SlaProcess: SObjectDefinition$SlaProcess;
        SocialPersona: SObjectDefinition$SocialPersona;
        SocialPersonaHistory: SObjectDefinition$SocialPersonaHistory;
        SocialPost: SObjectDefinition$SocialPost;
        SocialPostFeed: SObjectDefinition$SocialPostFeed;
        SocialPostHistory: SObjectDefinition$SocialPostHistory;
        SocialPostShare: SObjectDefinition$SocialPostShare;
        Solution: SObjectDefinition$Solution;
        SolutionFeed: SObjectDefinition$SolutionFeed;
        SolutionHistory: SObjectDefinition$SolutionHistory;
        SolutionStatus: SObjectDefinition$SolutionStatus;
        SourceChangeNotification: SObjectDefinition$SourceChangeNotification;
        Stamp: SObjectDefinition$Stamp;
        StampAssignment: SObjectDefinition$StampAssignment;
        StaticResource: SObjectDefinition$StaticResource;
        StreamingChannel: SObjectDefinition$StreamingChannel;
        StreamingChannelShare: SObjectDefinition$StreamingChannelShare;
        TabDefinition: SObjectDefinition$TabDefinition;
        Task: SObjectDefinition$Task;
        TaskChangeEvent: SObjectDefinition$TaskChangeEvent;
        TaskFeed: SObjectDefinition$TaskFeed;
        TaskPriority: SObjectDefinition$TaskPriority;
        TaskStatus: SObjectDefinition$TaskStatus;
        TenantUsageEntitlement: SObjectDefinition$TenantUsageEntitlement;
        TestSuiteMembership: SObjectDefinition$TestSuiteMembership;
        ThirdPartyAccountLink: SObjectDefinition$ThirdPartyAccountLink;
        TodayGoal: SObjectDefinition$TodayGoal;
        TodayGoalShare: SObjectDefinition$TodayGoalShare;
        Topic: SObjectDefinition$Topic;
        TopicAssignment: SObjectDefinition$TopicAssignment;
        TopicFeed: SObjectDefinition$TopicFeed;
        TopicUserEvent: SObjectDefinition$TopicUserEvent;
        UndecidedEventRelation: SObjectDefinition$UndecidedEventRelation;
        User: SObjectDefinition$User;
        UserAppInfo: SObjectDefinition$UserAppInfo;
        UserAppMenuCustomization: SObjectDefinition$UserAppMenuCustomization;
        UserAppMenuCustomizationShare: SObjectDefinition$UserAppMenuCustomizationShare;
        UserAppMenuItem: SObjectDefinition$UserAppMenuItem;
        UserChangeEvent: SObjectDefinition$UserChangeEvent;
        UserEntityAccess: SObjectDefinition$UserEntityAccess;
        UserFeed: SObjectDefinition$UserFeed;
        UserFieldAccess: SObjectDefinition$UserFieldAccess;
        UserLicense: SObjectDefinition$UserLicense;
        UserListView: SObjectDefinition$UserListView;
        UserListViewCriterion: SObjectDefinition$UserListViewCriterion;
        UserLogin: SObjectDefinition$UserLogin;
        UserPackageLicense: SObjectDefinition$UserPackageLicense;
        UserPermissionAccess: SObjectDefinition$UserPermissionAccess;
        UserPreference: SObjectDefinition$UserPreference;
        UserProvAccount: SObjectDefinition$UserProvAccount;
        UserProvAccountStaging: SObjectDefinition$UserProvAccountStaging;
        UserProvMockTarget: SObjectDefinition$UserProvMockTarget;
        UserProvisioningConfig: SObjectDefinition$UserProvisioningConfig;
        UserProvisioningLog: SObjectDefinition$UserProvisioningLog;
        UserProvisioningRequest: SObjectDefinition$UserProvisioningRequest;
        UserProvisioningRequestShare: SObjectDefinition$UserProvisioningRequestShare;
        UserRecordAccess: SObjectDefinition$UserRecordAccess;
        UserRole: SObjectDefinition$UserRole;
        UserShare: SObjectDefinition$UserShare;
        VerificationHistory: SObjectDefinition$VerificationHistory;
        VisibilityChangeNotification: SObjectDefinition$VisibilityChangeNotification;
        VisualforceAccessMetrics: SObjectDefinition$VisualforceAccessMetrics;
        Vote: SObjectDefinition$Vote;
        WaveAutoInstallRequest: SObjectDefinition$WaveAutoInstallRequest;
        WaveCompatibilityCheckItem: SObjectDefinition$WaveCompatibilityCheckItem;
        WebLink: SObjectDefinition$WebLink;
        WorkAccess: SObjectDefinition$WorkAccess;
        WorkAccessShare: SObjectDefinition$WorkAccessShare;
        WorkBadge: SObjectDefinition$WorkBadge;
        WorkBadgeDefinition: SObjectDefinition$WorkBadgeDefinition;
        WorkBadgeDefinitionFeed: SObjectDefinition$WorkBadgeDefinitionFeed;
        WorkBadgeDefinitionHistory: SObjectDefinition$WorkBadgeDefinitionHistory;
        WorkBadgeDefinitionShare: SObjectDefinition$WorkBadgeDefinitionShare;
        WorkOrder: SObjectDefinition$WorkOrder;
        WorkOrderFeed: SObjectDefinition$WorkOrderFeed;
        WorkOrderHistory: SObjectDefinition$WorkOrderHistory;
        WorkOrderLineItem: SObjectDefinition$WorkOrderLineItem;
        WorkOrderLineItemFeed: SObjectDefinition$WorkOrderLineItemFeed;
        WorkOrderLineItemHistory: SObjectDefinition$WorkOrderLineItemHistory;
        WorkOrderLineItemStatus: SObjectDefinition$WorkOrderLineItemStatus;
        WorkOrderShare: SObjectDefinition$WorkOrderShare;
        WorkOrderStatus: SObjectDefinition$WorkOrderStatus;
        WorkThanks: SObjectDefinition$WorkThanks;
        WorkThanksShare: SObjectDefinition$WorkThanksShare;
    };
}
export {};
