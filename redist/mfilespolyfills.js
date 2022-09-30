"use strict";

/** M-Files Web doesn't contain many enums in MFiles object.
 * Fill them here with constant numbers.
 * Some are exposed on different levels in web and could be copied from there:
 * MFiles.CommandState = CommandState
 * MFiles.MFStatusType = { MFStatusTypeExtID = MFStatusTypeExtID, ... }
 * However for example MFMetadataStructureItem is not found at all...
 */

if (!MFiles.CommandState) {
  MFiles.CommandState = {
    Undefined: 0,
    Active: 1,
    Inactive: 2,
    Hidden: 3
  };
}

if (!MFiles.CommandLocation) {
  MFiles.CommandLocation = {
    Undefined: 0,
    MainMenu: 1,
    ContextMenu: 2,
    TaskPane: 4,
    All: 268435455 // 0xfffffff
  };
}

if (!MFiles.TaskPaneGroup) {
  MFiles.TaskPaneGroup = {
    New: 1,
    ViewAndModify: 2,
    GoTo: 3,
    Main: 4
  };
}

if (!MFiles.MenuLocation) {
  MFiles.MenuLocation = {
    ContextMenu_DefaultCommand: 20,
    ContextMenu_Top: 21,
    ContextMenu_BeforeWindowsCommands: 22,
    ContextMenu_AfterWindowsCommands: 23,
    ContextMenu_ObjectCreation: 24,
    ContextMenu_FileCreation: 25,
    ContextMenu_ObjectOperations: 26,
    ContextMenu_FolderSpecific: 27,
    ContextMenu_SingleFolderSpecific: 28,
    ContextMenu_ViewVisibility: 29,
    ContextMenu_Misc1_Top: 30,
    ContextMenu_Misc1_Middle: 31,
    ContextMenu_Misc1_Bottom: 32,
    ContextMenu_HistorySpecific: 33,
    ContextMenu_RelationshipsSpecific: 34,
    ContextMenu_CollectionMembersSpecific: 35,
    ContextMenu_Deletion: 36,
    ContextMenu_Edit: 37,
    ContextMenu_Misc2_Top: 38,
    ContextMenu_Misc2_Middle: 39,
    ContextMenu_Misc2_Bottom: 40,
    ContextMenu_DocumentConversions: 41,
    ContextMenu_BeforeProperties: 42,
    ContextMenu_Bottom: 43,
    ContextMenu_PropertyFolder: 44
  };
}

if (!MFiles.DefaultIcon) {
  MFiles.DefaultIcon = {
    CheckOut: 0,
    CheckIn: 1,
    UndoCheckOut: 2,
    History: 4,
    Properties: 5,
    MakeCopy: 6,
    View: 8,
    Root: 9,
    Workflow: 11,
    LogOut: 12,
    GoOnline: 13,
    GoOffline: 14,
    Assignment: 15,
    MarkComplete: 16,
    TraditionalFolder: 17,
    PropertyFolder: 18,
    File: 19,
    MFD: 20,
    PrivateView: 21,
    Collection: 22,
    ChangeState: 24,
    RelationShips: 25,
    SelectedState: 26
  };
}


if (!MFiles.BuiltinCommand) {
  MFiles.BuiltinCommand = {
    Undefined: 0,
    FIRST: 1,
    NewView: 2,
    NewOfflineFilter: 3,
    NewTraditionalFolder: 4,
    NewPropertyFolder: 5,
    ConvertToDocument: 6,
    ConvertToDocumentFiles: 7,
    ImportFilesAndFolders: 8,
    MakeCopy: 9,
    CheckOut: 10,
    CheckIn: 11,
    CheckInWithComments: 12,
    UndoCheckOut: 13,
    Properties: 14,
    MarkFolderForOfflineAvailability: 15,
    MarkForOfflineAvailability: 16,
    RemoveOfflineAvailability: 17,
    ShowHistory: 18,
    ShowRelationships: 19,
    ShowCollectionMembers: 20,
    ViewEditSubobjects: 21,
    ShowComments: 22,
    NewAssignment: 23,
    ShowAssignments: 24,
    CompleteAssignment: 25,
    ChangeState: 26,
    Workflow: 27,
    MarkForArchiving: 28,
    ClearArchiveMarker: 29,
    Undelete: 30,
    ConvertToSingleFileDocument: 31,
    ConvertToOneMultiFileDocument: 32,
    ReplaceWithFile: 33,
    GoOnline: 34,
    GoOffline: 35,
    LogOut: 36,
    ClientSettings: 37,
    ServerAdmin: 38,
    NotificationSettings: 39,
    ClearLocalCache: 40,
    ChangePassword: 41,
    ChangeLanguage: 42,
    AddDocumentFromScanner: 43,
    AddFileFromScanner: 44,
    ReplaceWithFileFromScanner: 45,
    ConvertToSearchablePDF: 46,
    SendLinkByEmail: 47,
    SendCopyByEmail: 48,
    SendPDFByEmail: 49,
    SaveAsPDF: 50,
    SubstituteUsers: 51,
    ShowBottomPane: 52,
    ShowPropertiesPane: 52,
    ShowRightPane: 53,
    ShowPreviewPane: 53,
    GroupObjectsByObjectType: 54,
    GroupViewsAndFolders: 55,
    HideView: 56,
    UnhideView: 57,
    CleanView: 58,
    UnhideViews: 59,
    ResetUISettingsToDefaults: 60,
    SaveAsCommonUISettings: 61,
    AddToFavorites: 62,
    RemoveFromFavorites: 63,
    CreateOrGetShortcut: 64,
    CreateShortcut: 65,
    AddShortcutToTaskPane: 66,
    AddDashboardToViewLocMain: 67,
    AddReportToViewLocMain: 67,
    AddDashboardToViewLocRight: 68,
    AddReportToViewLocRight: 68,
    AddDashboardToViewLocBottom: 69,
    AddReportToViewLocBottom: 69,
    RemoveDashboardFromViewLocMain: 70,
    RemoveReportFromViewLocMain: 70,
    RemoveDashboardFromViewLocRight: 71,
    RemoveReportFromViewLocRight: 71,
    RemoveDashboardFromViewLocBottom: 72,
    RemoveReportFromViewLocBottom: 72,
    Copy: 73,
    Cut: 74,
    Paste: 75,
    Delete: 76,
    Rename: 77,
    NewWindow: 78,
    ExportObjects: 79,
    ExportSearchBarConditions: 80,
    ConvertToSingleFilePDF: 81,
    ConvertToMultiFilePDF: 82,
    ChooseColumns: 83,
    PasteAsMultiFileDocument: 84,
    SelectAll: 85,
    InvertSelection: 86,
    NewObject: 87,
    Refresh: 88,
    RollBack: 89,
    DeleteAll: 90,
    Destroy: 91,
    ModifyVersionDetails: 92,
    LabelThisVersion: 93,
    NewSubobject: 94,
    AddCollectionMember: 95,
    EditCollectionMembership: 96,
    RemoveCollectionMembership: 97,
    AddRelationship: 98,
    EditRelationship: 99,
    RemoveRelationship: 100,
    SubMenu_NewObject: 101,
    SubMenu_NewFile: 102,
    SubMenu_WindowsCommands: 103,
    SubMenu_Send: 104,
    SubMenu_DisplayMode: 105,
    ChangeViewMode: 106,
    SubMenu_OfflineAvailability: 107,
    SubMenu_BrowseRelatedObjects: 108,
    SubMenu_Archiving: 109,
    SubMenu_Workflow: 110,
    SubMenu_ScanningAndOCR: 111,
    SubMenu_RefreshExtObjects: 112,
    SubMenu_Dashboards: 113,
    SubMenu_Reports: 113,
    GroupObjectsByFirstLetters: 114,
    GroupFoldersByFirstLetters: 115,
    AddGroupingLevel: 116,
    CurrentGroupingLevel: 117,
    RemoveCurrentGroupingLevel: 118,
    HideOrShowEmptyFolders: 119,
    BrowseInThisWindow: 120,
    GroupBy: 121,
    GroupFoldersBy: 122,
    MarkComplete: 123,
    GoToCustomView: 124,
    Submenu_VaultX: 125,
    Submenu_ViewX: 126,
    Submenu_DocumentX: 127,
    HitHighlighting: 128,
    CheckOutForCoauthoring: 129,
    BeginCoauthoring: 130,
    EndCoauthoring: 131,
    ShowOriginalObject: 132,
    SendCoauthoringLink: 133,
    ResolveConflictKeepThis: 134,
    ResolveConflictDiscardThis: 135,
    Applications: 136,
    ShareViaSkyDrive: 137,
    ShareViaSkyDriveAsPDF: 138,
    ShowMetadataInRightPane: 139,
    ShowMetadataInBottomPane: 140,
    MFilesHelp: 141,
    MFilesGuidedTour: 142,
    ShowNavigationPane: 143,
    CustomizePropertyFolder: 144,
    UncustomizePropertyFolder: 145,
    UseNormalLayout: 146,
    UseCompactLayout: 147,
    RightPane_Normal: 148,
    RightPane_Minimized: 149,
    RightPane_Off: 150,
    BottomPane_Normal: 151,
    BottomPane_Minimized: 152,
    BottomPane_Off: 153,
    NavigationPane_On: 154,
    NavigationPane_Off: 155,
    ShowVisualAnnotations: 156,
    ShowAllVisualAnnotations: 157,
    HideAllVisualAnnotations: 158,
    EditOneAnnotation: 159,
    SaveAnnotation: 160,
    NewAnnotation: 161,
    AboutMFiles: 162,
    MarkApproved: 163,
    MarkRejected: 164,
    ApproveAssignment: 165,
    RejectAssignment: 166,
    ChangeStateAdmin: 167,
    SharePublicLink: 168,
    SharedByMe: 169,
    UploadFiles: 170,
    DiscardFileModifications: 171,
    ShowSearchResultsFromMultipleVaults: 172,
    ShowSearchRefinementOptions: 173
    // LAST,
    // ALL = 0xfffffff
  };
}


if (!MFiles.ListingEmptinessState) {
  MFiles.ListingEmptinessState = {
    NotYetKnown: 1,
    NotEmpty: 2,
    Empty: 3
  };
}


if (!MFiles.SearchFeature) {
  MFiles.SearchFeature = {
    Undefined: 0,
    FacetSearch: 1,
    MultiVaultSearch: 2
  };
}

if (!MFiles.MFExtApplicationPlatform) {
  MFiles.MFExtApplicationPlatform = {
    None: 0,
    Desktop: 1,
    Web: 2
  };
}

if (!MFiles.MFScheduledJobType) {
  MFiles.MFScheduledJobType = {
    Uninitialized: 0,
    Backup: 1,
    Restore: 2,
    CopyVault: 3,
    VerifyVault: 4,
    ExportContent: 5,
    ArchiveOldVersions: 6,
    ImportContent: 7,
    OptimizeVault: 8,
    Recalculate: 9,
    MigrateVault: 10
  };
}

if (!MFiles.MFServerConnection) {
  MFiles.MFServerConnection = {
    Authenticated: 1,
    Anonymous: 2
  };
}

if (!MFiles.MFValueListItemPropertyDef) {
  MFiles.MFValueListItemPropertyDef = {
    ID: 1,
    Name: 2,
    Owner: 3,
    Parent: 4,
    Deleted: 5,
    ObjectType: 6,
    ExtID: 7
  };
}

if (!MFiles.MFVaultConnectionTestResult) {
  MFiles.MFVaultConnectionTestResult = {
    OK: 0,
    UserCancelledLoginAttempt: 1
  };
}

if (!MFiles.MFViewCategory) {
  MFiles.MFViewCategory = {
    Normal: 0,
    OfflineFilter: 1,
    TemporarySearch: 2
  };
}

if (!MFiles.MFBuiltInView) {
  MFiles.MFBuiltInView = {
    CheckedOutToCurrentUser: 5,
    Offline: 6,
    RecentlyModifiedByMe: 7,
    Templates: 8,
    AssignedToMe: 9,
    LatestSearches: 11,
    ByID: 12,
    BuiltIn: 13,
    RecentlyAccessedByMe: 14,
    Favorites: 15,
    OfflineMarkedForOfflineAvailability: -9001,
    OfflineCheckedOut: -9000,
    AnyView: -1
  };
}

if (!MFiles.MFOnlineTransitionResultFlags) {
  MFiles.MFOnlineTransitionResultFlags = {
    None: 0,
    statusChanged: 1
  };
}

if (!MFiles.MFOfflineTransitionResultFlags) {
  MFiles.MFOfflineTransitionResultFlags = {
    None: 0,
    statusChanged: 1,
    LoggedOut: 2
  };
}

if (!MFiles.MFObjectTypeAccess) {
  MFiles.MFObjectTypeAccess = {
    None: 0,
    SeeName: 1,
    AddNewItems: 2
  };
}

if (!MFiles.MFObjectAccess) {
  MFiles.MFObjectAccess = {
    None: 0,
    Read: 1,
    Edit: 2,
    ChangePermissions: 4,
    Delete: 8,
    AttachObjects: 16
  };
}

if (!MFiles.MFPropertyDefAccess) {
  MFiles.MFPropertyDefAccess = {
    None: 0,
    See: 1,
    Edit: 2
  };
}

if (!MFiles.MFValueListSortingType) {
  MFiles.MFValueListSortingType = {
    ByName: 0,
    ByExtID: 1
  };
}

if (!MFiles.MFAutomaticValueType) {
  MFiles.MFAutomaticValueType = {
    None: 0,
    CalculatedWithPlaceholders: 1,
    CalculatedWithVBScript: 2,
    AutoNumberSimple: 3,
    WithVBScript: 4
  };
}

if (!MFiles.MFValidationType) {
  MFiles.MFValidationType = {
    None: 0,
    RegularExpression: 1,
    VBScript: 2
  };
}

if (!MFiles.MFFormattingType) {
  MFiles.MFFormattingType = {
    None: 0
  };
}

if (!MFiles.MFExternalDBRefreshType) {
  MFiles.MFExternalDBRefreshType = {
    None: 0,
    Quick: 1,
    Full: 2
  };
}

if (!MFiles.MFLatestSpecificBehavior) {
  MFiles.MFLatestSpecificBehavior = {
    Normal: 0,
    Specific: 1,
    Latest: 2,
    Automatic: 3
  };
}

if (!MFiles.MFBuiltInDocumentClass) {
  MFiles.MFBuiltInDocumentClass = {
    UnclassifiedDocument: 0,
    OtherDocument: 1
  };
}

if (!MFiles.MFBuiltInObjectClass) {
  MFiles.MFBuiltInObjectClass = {
    GenericAssignment: -100,
    Any: -3,
    NotSet: -2
  };
}

if (!MFiles.MFUserAccountVaultRole) {
  MFiles.MFUserAccountVaultRole = {
    None: 0,
    FullControl: 1,
    LogIn: 2,
    CreateObjects: 4,
    SeeAllObjects: 8,
    UndeleteObjects: 16,
    DestroyObjects: 32,
    ForceUndoCheckout: 64,
    ChangeObjectSecurity: 128,
    ChangeMetadataStructure: 256,
    ManageUserAccounts: 512,
    InternalUser: 1024,
    ManageTraditionalFolders: 2048,
    DefaultRoles: 3078,
    DefineTemplates: 4096,
    ManageCommonViews: 8192,
    ManageWorkflows: 16384
  };
}

if (!MFiles.MFLoginServerRole) {
  MFiles.MFLoginServerRole = {
    None: 0,
    SystemAdministrator: 1,
    VaultCreator: 2,
    BackupOperator: 4,
    LogIn: 8
  };
}

if (!MFiles.MFLoginAccountType) {
  MFiles.MFLoginAccountType = {
    MFiles: 1,
    Windows: 2
  };
}

if (!MFiles.MFLicenseType) {
  MFiles.MFLicenseType = {
    None: 0,
    NamedUserLicense: 1,
    ConcurrentUserLicense: 2,
    ReadOnlyLicense: 3
  };
}

if (!MFiles.MFFileOpenMethod) {
  MFiles.MFFileOpenMethod = {
    ShowInShell: 0,
    Open: 1,
    View: 2,
    Edit: 3
  };
}

if (!MFiles.MFilesURLType) {
  MFiles.MFilesURLType = {
    Show: 0,
    Open: 1,
    View: 2,
    Edit: 3,
    ShowMetadata: 6
  };
}

if (!MFiles.MFSoftwarePlatformType) {
  MFiles.MFSoftwarePlatformType = {
    Win32: 0,
    X64: 1
  };
}

if (!MFiles.MFBuiltInValueList) {
  MFiles.MFBuiltInValueList = {
    Documents: 0,
    Classes: 1,
    ClassGroups: 2,
    VersionLabels: 3,
    TraditionalFolders: 4,
    ExternalLocations: 5,
    Users: 6,
    Workflows: 7,
    States: 8,
    Collections: 9,
    Assignments: 10,
    UserGroups: 16,
    StateTransitions: 17
  };
}

if (!MFiles.MFBuiltInPropertyDef) {
  MFiles.MFBuiltInPropertyDef = {
    NameOrTitle: 0,
    Created: 20,
    LastModified: 21,
    SingleFileObject: 22,
    LastModifiedBy: 23,
    StatusChanged: 24,
    CreatedBy: 25,
    Keywords: 26,
    Deleted: 27,
    DeletedBy: 28,
    VersionLabel: 29,
    SizeOnServerThisVersion: 30,
    SizeOnServerAllVersions: 31,
    MarkedForArchiving: 32,
    VersionComment: 33,
    Comment: 33,
    TraditionalFolder: 34,
    CreatedFromExternalLocation: 35,
    AdditionalClasses: 36,
    IsTemplate: 37,
    Workflow: 38,
    State: 39,
    StateEntered: 40,
    AssignmentDescription: 41,
    Deadline: 42,
    MonitoredBy: 43,
    AssignedTo: 44,
    CompletedBy: 45,
    CollectionMemberDocuments: 46,
    CollectionMemberCollections: 47,
    Constituent: 48,
    OriginalPath: 75,
    Reference: 76,
    OriginalPath2: 77,
    OriginalPath3: 78,
    WorkflowAssignment: 79,
    AccessedByMe: 81,
    FavoriteView: 82,
    MessageID: 83,
    InReplyTo: 84,
    InReplyToReference: 85,
    SignatureManifestation: 86,
    ReportURL: 87,
    ReportPlacement: 88,
    ObjectChanged: 89,
    ACLChanged: 90,
    VersionLabelChanged: 91,
    VersionCommentChanged: 92,
    DeletionStatusChanged: 93,
    VaultGUID: 94,
    SharedFiles: 95,
    ConflictResolved: 96,
    RejectedBy: 97,
    Completed: 98,
    StateTransition: 99,
    Class: 100,
    ClassGroups: 101,
    ObjectID: -102
  };
}

if (!MFiles.MFObjectWindowResultCode) {
  MFiles.MFObjectWindowResultCode = {
    Ok: 0,
    Cancel: 1,
    OkToAll: 2,
    SkipThis: 3
  };
}

if (!MFiles.MFObjectWindowMode) {
  MFiles.MFObjectWindowMode = {
    Insert: 0,
    InsertSourceFiles: 1,
    InsertSaveAsType: 2,
    Edit: 3,
    EditApplicationModal: 4
  };
}

if (!MFiles.MFUpdateType) {
  MFiles.MFUpdateType = {
    Normal: 0,
    ServerAuto: 1,
    ClientAuto: 2
  };
}

if (!MFiles.MFViewType) {
  MFiles.MFViewType = {
    Normal: 0,
    FilterOnly: 1
  };
}

if (!MFiles.MFAuthType) {
  MFiles.MFAuthType = {
    Unknown: 0,
    LoggedOnWindowsUser: 1,
    SpecificWindowsUser: 2,
    SpecificMFilesUser: 3
  };
}

if (!MFiles.MFBuiltInObjectType) {
  MFiles.MFBuiltInObjectType = {
    Document: 0,
    DocumentCollection: 9,
    Assignment: 10,
    DocumentOrDocumentCollection: -102
  };
}

if (!MFiles.MFContentType) {
  MFiles.MFContentType = {
    Generic: 0,
    EmailAddress: 1,
    URL: 2,
    RTF: 3,
    HTML: 4
  };
}

if (!MFiles.MFDataType) {
  MFiles.MFDataType = {
    Uninitialized: 0,
    Text: 1,
    Integer: 2,
    Floating: 3,
    Date: 5,
    Time: 6,
    Timestamp: 7,
    Boolean: 8,
    Lookup: 9,
    MultiSelectLookup: 10,
    Integer64: 11,
    FILETIME: 12,
    MultiLineText: 13,
    ACL: 14
  };
}

if (!MFiles.MFDependencyRelation) {
  MFiles.MFDependencyRelation = {
    Nothing: 0,
    AutomaticFilling: 1,
    Filtering: 2
  };
}

if (!MFiles.MFExpressionType) {
  MFiles.MFExpressionType = {
    Uninitialized: 0,
    PropertyValue: 1,
    ObjectIDSegment: 2,
    StatusValue: 3,
    FileValue: 4,
    TypedValue: 5,
    AnyField: 6,
    Permissions: 7
  };
}

if (!MFiles.MFDefaultPropertyType) {
  MFiles.MFDefaultPropertyType = {
    Undefined: 0,
    FixedValue: 1,
    FromHPDSSXML: 2,
    FromXML: 3,
    FromEmail: 4,
    FromEmailHeader: 5,
    FromOCR: 6
  };
}

if (!MFiles.MFEmailField) {
  MFiles.MFEmailField = {
    Undefined: 0,
    From: 1,
    To: 2,
    Cc: 3,
    Subject: 4,
    Body: 5,
    Date: 6,
    Importance: 7,
    Sensitivity: 8
  };
}

if (!MFiles.MFDataFunction) {
  MFiles.MFDataFunction = {
    NoOp: 0,
    Year: 1,
    Month: 2,
    YearAndMonth: 3,
    Date: 4,
    DaysFrom: 5,
    DaysTo: 6,
    IntegerSegment: 7,
    LeftChars: 8,
    InitialCharGroup: 9
  };
}

if (!MFiles.MFStatusType) {
  MFiles.MFStatusType = {
    CheckedOut: 0,
    CheckedOutTo: 1,
    CheckedOutAt: 2,
    ObjectID: 3,
    ObjectVersionID: 4,
    Deleted: 5,
    ObjectTypeID: 6,
    IsLatestCheckedInVersion: 7,
    ExtID: 8,
    LatestOrSpecific: 9,
    ObjectTypeAndID: 10,
    ObjectFlags: 11,
    OriginalVaultGUID: 12,
    OriginalObjectType: 13,
    OriginalObjectID: 14,
    OriginalObjectIDSegment: 15
  };
}

if (!MFiles.MFFileValueType) {
  MFiles.MFFileValueType = {
    HasFiles: 0,
    FileName: 1,
    FileSize: 2,
    FileID: 3,
    CreationTime: 4,
    ChangeTime: 5,
    LinkedToExtLoc: 6,
    LinkedToExtLocID: 7
  };
}

if (!MFiles.MFPermissionsExpressionType) {
  MFiles.MFPermissionsExpressionType = {
    MFACL: 0,
    MFVisibleTo: 1,
    MFEditableBy: 2,
    MFPermissionsChangeableBy: 3,
    MFFullControlBy: 4,
    MFDeletableBy: 5,
    MFObjectsAttachableToThisItemBy: 6
  };
}

if (!MFiles.MFConditionType) {
  MFiles.MFConditionType = {
    Equal: 1,
    NotEqual: 2,
    GreaterThan: 3,
    LessThan: 4,
    GreaterThanOrEqual: 5,
    LessThanOrEqual: 6,
    Contains: 7,
    DoesNotContain: 8,
    StartsWith: 9,
    DoesNotStartWith: 10,
    MatchesWildcardPattern: 11,
    DoesNotMatchWildcardPattern: 12,
    IsMissing: 13,
    IsNotMissing: 14,
    StartsWithAtWordBoundary: 15,
    ContainsAnyBitwise: 16,
    DoesNotContainAnyBitwise: 17
  };
}

if (!MFiles.MFParentChildBehavior) {
  MFiles.MFParentChildBehavior = {
    None: 0,
    IncludeChildValues: 1,
    IncludeParentValues: 2
  };
}

if (!MFiles.MFSearchFlags) {
  MFiles.MFSearchFlags = {
    None: 0,
    LookInAllVersions: 1,
    ReturnLatestVisibleVersion: 2,
    LookAllObjectTypes: 4,
    DisableRelevancyRanking: 16
  };
}

if (!MFiles.MFFullTextSearchFlags) {
  MFiles.MFFullTextSearchFlags = {
    None: 0,
    Stemming: 4,
    TypeAllWords: 131072,
    TypeAnyWords: 262144,
    LookInMetaData: 268435456,
    LookInFileData: 536870912
  };
}

if (!MFiles.MFRelationshipsMode) {
  MFiles.MFRelationshipsMode = {
    FromThisObject: 1,
    ToThisObject: 2,
    All: 3
  };
}

if (!MFiles.MFProductMode) {
  MFiles.MFProductMode = {
    Full: 0,
    Express: 1,
    Business: 2
  };
}

if (!MFiles.MFBackupType) {
  MFiles.MFBackupType = {
    Full: 0,
    Differential: 1
  };
}

if (!MFiles.MFImpersonationType) {
  MFiles.MFImpersonationType = {
    LocalSystem: 0,
    SpecificAccount: 1,
    ExtAccount: 2
  };
}

if (!MFiles.MFPermission) {
  MFiles.MFPermission = {
    Deny: 0,
    Allow: 1,
    NotSet: 2
  };
}

if (!MFiles.MFFolderDefType) {
  MFiles.MFFolderDefType = {
    Unknown: 0,
    AnyFolder: 1,
    ViewFolder: 2,
    PropertyFolder: 3,
    TraditionalFolder: 4,
    SearchFolder: 5
  };
}

if (!MFiles.MFFolderContentItemType) {
  MFiles.MFFolderContentItemType = {
    Unknown: 0,
    ViewFolder: 1,
    PropertyFolder: 2,
    TraditionalFolder: 3,
    ObjectVersion: 4
  };
}

if (!MFiles.MFUserOrUserGroupType) {
  MFiles.MFUserOrUserGroupType = {
    Unknown: 0,
    UserAccount: 1,
    UserGroup: 2,
    PseudoUser: 3,
    PropertyBasedPseudoUser: 4
  };
}

if (!MFiles.MFOCRZoneRecognitionMode) {
  MFiles.MFOCRZoneRecognitionMode = {
    NoZoneRecognition: 0,
    RecognizeSpecifiedZones: 1,
    AutoDetectZones: 2
  };
}

if (!MFiles.MFOCRDimensionUnit) {
  MFiles.MFOCRDimensionUnit = {
    Pixel: 0,
    MillimeterX10: 1,
    InchX100: 2
  };
}

if (!MFiles.MFAutoStateTransitionMode) {
  MFiles.MFAutoStateTransitionMode = {
    MFASTModeNone: 0,
    MFASTModeRelativeTime: 1,
    MFASTModeAssignmentCompleteOne: 2,
    MFASTModeAssignmentCompleteAll: 3,
    MFASTModeCriteriaFulfilled: 4,
    MFASTModeAllowedByScript: 5,
    MFASTMModeAssignmentComplete: 6,
    MFASTModeAssignmentComplete: 6,
    MFASTModeAssignmentRejected: 7
  };
}

if (!MFiles.MFOCRLanguage) {
  MFiles.MFOCRLanguage = {
    None: 0,
    Neutral: 1,
    NumbersOnly: 2,
    EnglishUS: 3,
    EnglishBr: 4,
    German: 5,
    French: 6,
    Spanish: 7,
    Italian: 8,
    Finnish: 9,
    Swedish: 10,
    Danish: 11,
    Norwegian: 12,
    Nynorsk: 13,
    Estonian: 14,
    Latvian: 15,
    Lithuanian: 16,
    Dutch: 17,
    Portuguese: 18,
    Brazilian: 19,
    Galician: 20,
    Icelandic: 21,
    Greek: 22,
    Czech: 23,
    Hungarian: 24,
    Polish: 25,
    Romanian: 26,
    Slovak: 27,
    Croatian: 28,
    Serbian: 29,
    Slovenian: 30,
    Luxembourgish: 31,
    SwissGerman: 32,
    Turkish: 33,
    Russian: 34,
    ByeloRussian: 35,
    Ukrainian: 36,
    Macedonian: 37,
    Bulgarian: 38,
    Afrikaans: 39,
    Albanian: 40,
    Catalan: 41,
    IrishGaelic: 42,
    ScottishGaelic: 43,
    Welsh: 44,
    Basque: 45,
    Mexican: 46
  };
}

if (!MFiles.MFDBEngine) {
  MFiles.MFDBEngine = {
    None: 0,
    Firebird: 1,
    MSSQLServer: 2
  };
}

if (!MFiles.MFVaultAccess) {
  MFiles.MFVaultAccess = {
    None: 0,
    CreateDocs: 1,
    SeeAllDocs: 2,
    UndeleteDocs: 4,
    DestroyDocs: 8,
    ForceUndoCheckout: 16,
    ChangeDocSecurity: 32,
    ChangeMetaDataStructure: 64,
    ManageUserAccounts: 128,
    ChangeFullControlRole: 256,
    VerifyVault: 1024,
    EditAllDocs: 2048,
    ExportContent: 8192,
    ImportContent: 16384,
    ManageVLItemsFromClient: 65536,
    ManageExternalLocations: 131072,
    LicenseAllowsModifications: 262144,
    ManageEvents: 524288,
    ManageTraditionalFolders: 1048576,
    ChangeObjectStates: 4194304,
    ChangeAssignments: 8388608,
    ManageCommonViews: 16777216,
    ManageCommonUISettings: 33554432,
    ManageCommonNotificationRules: 134217728,
    SeeDeletedDocs: 268435456,
    MaterializeViews: 536870912
  };
}

if (!MFiles.MFNamedValueType) {
  MFiles.MFNamedValueType = {
    ConfigurationValue: 3,
    UserDefinedValue: 4,
    RegistryValue: 5,
    FolderConfiguration: 6,
    AdminConfiguration: 7,
    SystemAdminConfiguration: 8
  };
}

if (!MFiles.MFViewFlag) {
  MFiles.MFViewFlag = {
    sNone: 0,
    Materialized: 1
  };
}

if (!MFiles.MFObjectVersionFlag) {
  MFiles.MFObjectVersionFlag = {
    None: 0,
    Completed: 1,
    HasRelatedObjects: 2
  };
}

if (!MFiles.MFPredefinedSearchFilterType) {
  MFiles.MFPredefinedSearchFilterType = {
    Unspecified: 0,
    ObjectType: 1,
    DocumentsModifiedToday: 30000,
    DocumentsModifiedLastWeek: 30001,
    DocumentsModifiedLastMonth: 30002,
    DocumentsModifiedLastYear: 30003,
    DocumentsAccessedByMeToday: 30004,
    DocumentsAccessedByMeLastWeek: 30005,
    DocumentsAccessedByMeLastMonth: 30006,
    DocumentsAccessedByMeLastYear: 30007
  };
}

if (!MFiles.MFTriggerType) {
  MFiles.MFTriggerType = {
    Once: 0,
    Daily: 1,
    Weekly: 2,
    MonthlyDate: 3,
    MonthlyDOW: 4
  };
}

if (!MFiles.MFTriggerWeekDay) {
  MFiles.MFTriggerWeekDay = {
    Sunday: 1,
    Monday: 2,
    Tuesday: 4,
    Wednesday: 8,
    Thursday: 16,
    Friday: 32,
    Saturday: 64,
    EveryDay: 125
  };
}

if (!MFiles.MFTriggerMonth) {
  MFiles.MFTriggerMonth = {
    January: 1,
    February: 2,
    March: 4,
    April: 8,
    May: 16,
    June: 32,
    July: 64,
    August: 128,
    September: 256,
    October: 512,
    November: 1024,
    December: 2048,
    EveryMonth: 4095
  };
}

if (!MFiles.MFTriggerWeekOfMonth) {
  MFiles.MFTriggerWeekOfMonth = {
    FirstWeek: 1,
    SecondWeek: 2,
    ThirdWeek: 3,
    FourthWeek: 4,
    LastWeek: 5
  };
}

if (!MFiles.MFACLMode) {
  MFiles.MFACLMode = {
    Simple: 0,
    AutomaticPermissionsWithComponents: 1
  };
}

if (!MFiles.MFACLEnforcingMode) {
  MFiles.MFACLEnforcingMode = {
    Automatic: 0,
    Provided: 1,
    ResetToDefault: 2,
    None: 3
  };
}

if (!MFiles.MFACLComponentOverrideAccess) {
  MFiles.MFACLComponentOverrideAccess = {
    None: 0,
    Granted: 1
  };
}

if (!MFiles.MFNamedACLType) {
  MFiles.MFNamedACLType = {
    None: 0,
    Normal: 1,
    Internal: 2
  };
}

if (!MFiles.MFIndirectPropertyIDLevelType) {
  MFiles.MFIndirectPropertyIDLevelType = {
    PropertyDef: 0,
    ObjectType: 1,
    StateChanger: 2
  };
}

if (!MFiles.MFEventHandlerType) {
  MFiles.MFEventHandlerType = {
    Undefined: 0,
    EventHandlerBeforeSetProperties: 1,
    EventHandlerAfterSetProperties: 2,
    EventHandlerAfterCreateNewObjectFinalize: 3,
    EventHandlerBeforeCheckInChanges: 4,
    EventHandlerAfterCheckInChanges: 5,
    EventHandlerBeforeCheckOut: 6,
    EventHandlerAfterCheckOut: 7,
    EventHandlerBeforeCancelCheckout: 8,
    EventHandlerAfterCancelCheckout: 9,
    EventHandlerBeforeDeleteObject: 10,
    EventHandlerAfterDeleteObject: 11,
    EventHandlerBeforeDestroyObject: 12,
    EventHandlerAfterDestroyObject: 13,
    EventHandlerBeforeSetObjectPermissions: 14,
    EventHandlerAfterSetObjectPermissions: 15,
    EventHandlerBeforeFileUpload: 16,
    EventHandlerAfterFileUpload: 17,
    EventHandlerBeforeFileDownload: 18,
    EventHandlerAfterFileDownload: 19,
    EventHandlerBeforeCreateNewValueListItem: 20,
    EventHandlerAfterCreateNewValueListItem: 21,
    EventHandlerBeforeLoginToVault: 22,
    EventHandlerAfterLoginToVault: 23,
    EventHandlerBeforeLogoutFromVault: 24,
    EventHandlerAfterLogoutFromVault: 25,
    EventHandlerBeforeRunScheduledJob: 26,
    EventHandlerAfterRunScheduledJob: 27,
    EventHandlerBeforeCreateNewObjectFinalize: 28,
    EventHandlerBeforeCancelCreateObject: 29,
    EventHandlerAfterCancelCreateObject: 30,
    EventHandlerBeforeDestroyObjectVersion: 31,
    EventHandlerAfterDestroyObjectVersion: 32,
    EventHandlerReplication_AfterCreateNewObjectFinalize: 33,
    EventHandlerReplication_AfterCheckInChanges: 34,
    EventHandlerVaultExtensionMethod: 35,
    EventHandlerBeforeCreateLoginAccount: 36,
    EventHandlerAfterCreateLoginAccount: 37,
    EventHandlerBeforeModifyLoginAccount: 38,
    EventHandlerAfterModifyLoginAccount: 39,
    EventHandlerBeforeRemoveLoginAccount: 40,
    EventHandlerAfterRemoveLoginAccount: 41,
    EventHandlerBeforeCreateUserAccount: 42,
    EventHandlerAfterCreateUserAccount: 43,
    EventHandlerBeforeModifyUserAccount: 44,
    EventHandlerAfterModifyUserAccount: 45,
    EventHandlerBeforeRemoveUserAccount: 46,
    EventHandlerAfterRemoveUserAccount: 47,
    EventHandlerBeforeCreateUserGroup: 48,
    EventHandlerAfterCreateUserGroup: 49,
    EventHandlerBeforeModifyUserGroup: 50,
    EventHandlerAfterModifyUserGroup: 51,
    EventHandlerBeforeRemoveUserGroup: 52,
    EventHandlerAfterRemoveUserGroup: 53,
    EventHandlerAfterBringOnline: 54,
    EventHandlerBeforeTakeOffline: 55,
    EventHandlerAfterCheckInChangesFinalize: 56,
    EventHandlerAfterBeginTransaction: 57,
    EventHandlerBeforeCommitTransaction: 58,
    EventHandlerBeforeRollbackTransaction: 59,
    EventHandlerAfterCancelCheckoutFinalize: 60,
    EventHandlerBeforeUndeleteObject: 61,
    EventHandlerAfterUndeleteObject: 62,
    EventHandlerAfterUndeleteObjectFinalize: 63,
    EventHandlerBeforeModifyMFilesCredentials: 64,
    EventHandlerAfterModifyMFilesCredentials: 65,
    EventHandlerBeforeReturnView: 66
  };
}

if (!MFiles.MFAutomaticPermissionsOperationOptions) {
  MFiles.MFAutomaticPermissionsOperationOptions = {
    None: 0,
    ForceActive: 1
  };
}

if (!MFiles.MFObjectOperationFlags) {
  MFiles.MFObjectOperationFlags = {
    None: 0,
    RequireReadAccess: 1,
    RequireEditAccess: 2,
    DisallowNameChange: 4,
    RequireChangeSecurityAccess: 8,
    RequireFullAccess: 16,
    ChangeACLInAllVersions: 32,
    RequireSomeAccess: 64
  };
}

if (!MFiles.MFFileDataStorage) {
  MFiles.MFFileDataStorage = {
    Default: 0,
    Disk: 1,
    DB: 2,
    External: 3
  };
}

if (!MFiles.MFMetadataSyncFormat) {
  MFiles.MFMetadataSyncFormat = {
    Word: 0,
    Excel: 1,
    PowerPoint: 2
  };
}

if (!MFiles.MFExportContentFlag) {
  MFiles.MFExportContentFlag = {
    None: 0,
    LatestVersionsOnly: 2,
    DestroyAfterExport: 4,
    ClearArchivalMarker: 8,
    SaveFilesAlsoAsPDFA: 32,
    ExportInformationOnDestroyedData: 64,
    UseMultipleContentPackages: 128,
    IndicateDropouts: 1024
  };
}

if (!MFiles.MFImportContentFlag) {
  MFiles.MFImportContentFlag = {
    None: 0,
    UseMultipleContentPackages: 1,
    DeleteContentPackage: 4,
    ImportCheckoutStates: 16,
    ResetExportTimestamps: 32,
    DoNotImportObjectDestructions: 64,
    UseNamesAsAliases: 128,
    ForceNoStructureIdUpdate: 16384,
    OmitDoneFile: 32768
  };
}

if (!MFiles.MFSpecialObjectFlag) {
  MFiles.MFSpecialObjectFlag = {
    None: 0,
    Shortcut: 1,
    Deleted: 2,
    RecentlyAccessedByValid: 4,
    HasSharedFiles: 8,
    Conflict: 16,
    Normal: 64
  };
}

if (!MFiles.MFMetadataStructureItem) {
  MFiles.MFMetadataStructureItem = {
    None: 0,
    ObjectType: 1,
    PropertyDef: 2,
    Class: 3,
    Workflow: 4,
    State: 5,
    NamedACL: 6,
    User: 7,
    UserGroup: 8,
    ClassGroup: 9,
    ViewDef: 10,
    ValueListItem: 13,
    ValueList: 14,
    VaultEventHandler: 15,
    StateTransition: 16,
    All: 10000
  };
}

if (!MFiles.MFBuiltInUserGroup) {
  MFiles.MFBuiltInUserGroup = {
    AllInternalUsers: 1,
    AllInternalAndExternalUsers: 2
  };
}

if (!MFiles.MFBuiltInMetadataStructureItemID) {
  MFiles.MFBuiltInMetadataStructureItemID = {
    All: -1000000
  };
}

if (!MFiles.MFCustomApplicationType) {
  MFiles.MFCustomApplicationType = {
    Unspecified: 0,
    Client: 1,
    Server: 2
  };
}

if (!MFiles.MFMetadataStructureSelectorFlags) {
  MFiles.MFMetadataStructureSelectorFlags = {
    None: 0,
    SelectNew: 1,
    SelectExisting: 2,
    IncludeNewDependencies: 4,
    IncludeExistingDependencies: 8
  };
}

if (!MFiles.MFFileFormat) {
  MFiles.MFFileFormat = {
    Native: 0,
    PDF: 1,
    DisplayOnlyPDF: 2
  };
}

if (!MFiles.MFFolderListingAlgorithm) {
  MFiles.MFFolderListingAlgorithm = {
    None: 0,
    TestEachValue: 1,
    GetValuesByDistinctUse: 2,
    TestEachValueWithSeparateQueries: 3
  };
}

if (!MFiles.MFAttachVaultOptionsFlag) {
  MFiles.MFAttachVaultOptionsFlag = {
    DisableNone: 0,
    DisableExternalObjectTypes: 1,
    DisableExternalSources: 2,
    DisableExportedDataSets: 4,
    DisableExportImportJobs: 8,
    DisableExternalUserGroups: 16,
    DisableEventHandlers: 32
  };
}

if (!MFiles.MFFolderUIStateLocationType) {
  MFiles.MFFolderUIStateLocationType = {
    Unknown: 0,
    RootFolder: 1,
    ViewFoldersContainer: 2,
    PropertyFoldersContainer: 3,
    ObjectsContainer: 4,
    ObjectFilesContainer: 5,
    TraditionalFolder: 6,
    SearchResultsContainer: 7,
    HistoryUI: 8,
    RelationshipsUIFromTab: 9,
    CollectionMembersUI: 10,
    SubobjectsUI: 11,
    ClearLocalCacheUI: 12,
    RelationshipsUIToTab: 13,
    RelationshipsUIAllTab: 14,
    LocalTemporaryItemsContainer: 15
  };
}

if (!MFiles.MFFolderListingColumnFlags) {
  MFiles.MFFolderListingColumnFlags = {
    SelectIfLeftOfSelectedMainColumn: 1,
    HideColumnText: 2
  };
}

if (!MFiles.MFFolderListingViewMode) {
  MFiles.MFFolderListingViewMode = {
    Icon: 1,
    SmallIcon: 2,
    List: 3,
    Details: 4,
    Thumbnail: 5,
    Tile: 6,
    Thumbstrip: 7,
    Content: 8
  };
}

if (!MFiles.MFFolderListingItemGroupingMode) {
  MFiles.MFFolderListingItemGroupingMode = {
    NoGrouping: 0,
    GroupObjectsByObjectType: 1,
    GroupViewsAndFoldersByType: 1024,
    Unspecified: -1
  };
}

if (!MFiles.MFFolderColumnId) {
  MFiles.MFFolderColumnId = {
    IdSegment: -1000001,
    ExportedFile: -1000000,
    HasAssignments: -22,
    TypeEx: -21,
    ObjectPermissions: -20,
    ObjectType: -19,
    RelationshipTargetVer: -18,
    HasRelationships: -17,
    RelationshipDesc: -16,
    Score: -15,
    DateModified: -14,
    DateCreated: -13,
    RelLocation: -12,
    Location: -11,
    ShLastModifiedBy: -10,
    ShStatusChanged: -9,
    ObjectVersion: -8,
    ObjectDispId: -7,
    CheckOutAt: -6,
    CheckoutTo: -5,
    Status: -4,
    Size: -3,
    Type: -2,
    Name: -1
  };
}

if (!MFiles.MFEmailImportance) {
  MFiles.MFEmailImportance = {
    Low: 0,
    Normal: 1,
    High: 2
  };
}

if (!MFiles.MFEmailSensitivity) {
  MFiles.MFEmailSensitivity = {
    None: 0,
    Normal: 1,
    Personal: 2,
    Private: 3,
    Confidential: 4
  };
}

if (!MFiles.MFFileInformationType) {
  MFiles.MFFileInformationType = {
    Unknown: 0,
    EmailMessage: 1
  };
}

if (!MFiles.MFAssignmentType) {
  MFiles.MFAssignmentType = {
    Task: 0,
    Approval: 1
  };
}

if (!MFiles.MFStringDataType) {
  MFiles.MFStringDataType = {
    JSON: 0,
    XML: 1
  };
}

if (!MFiles.MFAdditionalClassInfoType) {
  MFiles.MFAdditionalClassInfoType = {
    Unknown: 0,
    Assignment: 1
  };
}

if (!MFiles.MFSignaturePromptInfoType) {
  MFiles.MFSignaturePromptInfoType = {
    Fixed: 0,
    Selectable: 1,
    MetadataBased: 2
  };
}

if (!MFiles.MFActionType) {
  MFiles.MFActionType = {
    Unknown: 0,
    CreateAssignment: 1
  };
}

if (!MFiles.MFFacetSearchFlags) {
  MFiles.MFFacetSearchFlags = {
    None: 0,
    IgnoreSearchPermissions: 2,
    IgnoreFacetGroupPermissions: 4,
    IgnoreFacetValuePermissions: 8,
    SortFacetValues: 16,
    AscendingOrder: 32,
    OverrideByConfiguration: 64
  };
}

if (!MFiles.MFApplicationLicenseStatus) {
  MFiles.MFApplicationLicenseStatus = {
    Unknown: 0,
    NotNeeded: 1,
    NotInstalled: 2,
    Installed: 3,
    InstalledValid: 4,
    InstalledInvalid: 5,
    Trial: 6,
    GracePeriod: 7
  };
}
