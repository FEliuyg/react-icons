/// <reference types="react" />
  import { ComponentType, SVGAttributes, ReactNode } from 'react';

  interface ConfigProviderProps {
    cls?: string;
    children: ReactNode;
  }

  export const ConfigProvider: ComponentType<ConfigProviderProps>;

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  export const EyeInvisibleColored: Icon;
export const FilterColored: Icon;
export const LineHeightSColored: Icon;
export const LineHeightMColored: Icon;
export const LineHeightLColored: Icon;
export const LineHeightXLColored: Icon;
export const GroupColored: Icon;
export const SortColored: Icon;
export const FileColored: Icon;
export const ShareCircleColored: Icon;
export const ColorColored: Icon;
export const StrokeAllColored: Icon;
export const StrokeOutsideColored: Icon;
export const StrokeInsideColored: Icon;
export const UnstrokeColored: Icon;
export const StrokeLeftColored: Icon;
export const StrokeRightColored: Icon;
export const StrokeBottomColored: Icon;
export const StrokeTopColored: Icon;
export const FileImportColored: Icon;
export const FileEditColored: Icon;
export const FileAddColored: Icon;
export const GridColored: Icon;
export const FormColored: Icon;
export const GalleryColored: Icon;
export const KanbanColored: Icon;
export const CalenderColored: Icon;
export const GanttColored: Icon;
export const UElogoColored: Icon;
export const PointSelectedColored: Icon;
export const PointDefaultColored: Icon;
export const LineTurnPointColored: Icon;
export const PlaneTurnPointColored: Icon;
export const DTableUploadColored: Icon;
export const EasyTwinUploadColored: Icon;
export const ComponentsLightColored: Icon;
export const ResourceLightColored: Icon;
export const ApplicationLightColored: Icon;
export const LinkLightColored: Icon;
export const FilterLightColored: Icon;
export const AdjustmentLightColored: Icon;
export const CMYKLightColored: Icon;
export const AutoRenewLightColored: Icon;
export const RecycleLightColored: Icon;
export const SearchCircleLightColored: Icon;
export const InformationLightColored: Icon;
export const UploadLightColored: Icon;
export const PreviewLightColored: Icon;
export const SendLightColored: Icon;
export const ClearLightColored: Icon;
export const MainLightColored: Icon;
export const PullRequestLightColored: Icon;
export const DataContainerLightColored: Icon;
export const LoadingColored: Icon;
export const MonitorUpColored: Icon;
export const MonitorDownColored: Icon;
export const CancelMonitorColored: Icon;
export const AddedKitLightColored: Icon;
export const PlusLightColored: Icon;
export const UserAvatarColored: Icon;
export const NewLableColored: Icon;
export const QuestionColored: Icon;
export const SceneSettingColored: Icon;
export const AlignLeftAxisXColored: Icon;
export const AlignCenterAxisXColored: Icon;
export const AlignRightAxisXColored: Icon;
export const DistributionAxisXColored: Icon;
export const AlignFrontAxisZColored: Icon;
export const AlignCenterAxisZColored: Icon;
export const AlignBackAxisZColored: Icon;
export const DistributionAxisZColored: Icon;
export const AlignBottomAxisYColored: Icon;
export const AlignCenterAxisYColored: Icon;
export const AlignTopAxisYColored: Icon;
export const DistributionAxisYColored: Icon;
export const ClickColored: Icon;
export const HelpColored: Icon;
export const ArchiveColored: Icon;
export const ToolColored: Icon;
export const DocumentColored: Icon;
export const RecycleColored: Icon;
export const StepBackwardOutlined: Icon;
export const StepForwardOutlined: Icon;
export const FastBackwardOutlined: Icon;
export const FastForwardOutlined: Icon;
export const UpCircleOutlined: Icon;
export const DownCircleOutlined: Icon;
export const CaretUpOutlined: Icon;
export const CaretLeftOutlined: Icon;
export const CaretRightOutlined: Icon;
export const CaretDownOutlined: Icon;
export const FullscreenOutlined: Icon;
export const FullscreenExitOutlined: Icon;
export const VerticalLeftOutlined: Icon;
export const VerticalRightOutlined: Icon;
export const VerticalAlignTopOutlined: Icon;
export const VerticalAlignMiddleOutlined: Icon;
export const LeftCircleOutlined: Icon;
export const RightCircleOutlined: Icon;
export const VerticalAlignBottomOutlined: Icon;
export const ForwardOutlined: Icon;
export const BackwardOutlined: Icon;
export const RollbackOutlined: Icon;
export const EnterOutlined: Icon;
export const RetweetOutlined: Icon;
export const SwapOutlined: Icon;
export const SwapLeftOutlined: Icon;
export const SwapRightOutlined: Icon;
export const ArrowUpOutlined: Icon;
export const ArrowDownOutlined: Icon;
export const ArrowLeftOutlined: Icon;
export const ArrowRightOutlined: Icon;
export const UpSquareOutlined: Icon;
export const DownSquareOutlined: Icon;
export const LeftSquareOutlined: Icon;
export const RightSquareOutlined: Icon;
export const RadiusUpleftOutlined: Icon;
export const MenuFoldOutlined: Icon;
export const MenuUnfoldOutlined: Icon;
export const BorderBottomOutlined: Icon;
export const BorderHorizontalOutlined: Icon;
export const BorderInnerOutlined: Icon;
export const BorderOuterOutlined: Icon;
export const BorderLeftOutlined: Icon;
export const BorderRightOutlined: Icon;
export const BorderTopOutlined: Icon;
export const BorderVerticleOutlined: Icon;
export const PicCenterOutlined: Icon;
export const PicLeftOutlined: Icon;
export const PicRightOutlined: Icon;
export const RadiusBottomleftOutlined: Icon;
export const RadiusUprightOutlined: Icon;
export const RadiusBottomrightOutlined: Icon;
export const QuestionOutlined: Icon;
export const QuestionCircleOutlined: Icon;
export const WarningOutlined: Icon;
export const PlusCircleOutlined: Icon;
export const PauseOutlined: Icon;
export const CheckCircleOutlined: Icon;
export const MinusCircleOutlined: Icon;
export const PlusSquareOutlined: Icon;
export const MinusSquareOutlined: Icon;
export const InfoOutlined: Icon;
export const InfoCircleOutlined: Icon;
export const ClockCircleOutlined: Icon;
export const ExclamationOutlined: Icon;
export const ExclamationCircleOutlined: Icon;
export const CloseCircleOutlined: Icon;
export const CloseSquareOutlined: Icon;
export const StopOutlined: Icon;
export const IssuesCloseOutlined: Icon;
export const EditOutlined: Icon;
export const EditSquareOutlined: Icon;
export const CopyOutlined: Icon;
export const ScissorOutlined: Icon;
export const RadiusSettingOutlined: Icon;
export const SnippetsOutlined: Icon;
export const DiffOutlined: Icon;
export const HighlightOutlined: Icon;
export const AlignCenterOutlined: Icon;
export const AlignLeftOutlined: Icon;
export const AlignRightOutlined: Icon;
export const BgColorsOutlined: Icon;
export const BoldOutlined: Icon;
export const ItalicOutlined: Icon;
export const UnderlineOutlined: Icon;
export const StrikethroughOutlined: Icon;
export const RedoOutlined: Icon;
export const UndoOutlined: Icon;
export const ZoomInOutlined: Icon;
export const ZoomOutOutlined: Icon;
export const FontColorsOutlined: Icon;
export const FontSizeOutlined: Icon;
export const DashOutlined: Icon;
export const SmallDashOutlined: Icon;
export const SortAscendingOutlined: Icon;
export const SortDescendingOutlined: Icon;
export const DragOutlined: Icon;
export const OrderedListOutlined: Icon;
export const UnorderedListOutlined: Icon;
export const ColumnWidthOutlined: Icon;
export const ColumnHeightOutlined: Icon;
export const AreaChartOutlined: Icon;
export const PieChartOutlined: Icon;
export const BarChartOutlined: Icon;
export const DotChartOutlined: Icon;
export const LineChartOutlined: Icon;
export const RadarChartOutlined: Icon;
export const HeatMapOutlined: Icon;
export const FallOutlined: Icon;
export const RiseOutlined: Icon;
export const StockOutlined: Icon;
export const BoxPlotOutlined: Icon;
export const FundOutlined: Icon;
export const SlidersOutlined: Icon;
export const AndroidOutlined: Icon;
export const AppleOutlined: Icon;
export const WindowsOutlined: Icon;
export const IeOutlined: Icon;
export const ChromeOutlined: Icon;
export const GithubOutlined: Icon;
export const AliwangwangOutlined: Icon;
export const DingdingOutlined: Icon;
export const WeiboSquareOutlined: Icon;
export const WeiboCircleOutlined: Icon;
export const TaobaoCircleOutlined: Icon;
export const Html5Outlined: Icon;
export const WeiboOutlined: Icon;
export const TwitterOutlined: Icon;
export const WechatOutlined: Icon;
export const YoutubeOutlined: Icon;
export const AlipayCircleOutlined: Icon;
export const TaobaoOutlined: Icon;
export const SkypeOutlined: Icon;
export const QqOutlined: Icon;
export const MediumWorkmarkOutlined: Icon;
export const GitlabOutlined: Icon;
export const MediumOutlined: Icon;
export const LinkedinOutlined: Icon;
export const GooglePlusOutlined: Icon;
export const DropboxOutlined: Icon;
export const FacebookOutlined: Icon;
export const CodepenOutlined: Icon;
export const CodeSandboxOutlined: Icon;
export const AmazonOutlined: Icon;
export const GoogleOutlined: Icon;
export const CodepenCircleOutlined: Icon;
export const AlipayOutlined: Icon;
export const AntDesignOutlined: Icon;
export const AntCloudOutlined: Icon;
export const AliyunOutlined: Icon;
export const ZhihuOutlined: Icon;
export const SlackOutlined: Icon;
export const SlackSquareOutlined: Icon;
export const BehanceOutlined: Icon;
export const BehanceSquareOutlined: Icon;
export const DribbbleOutlined: Icon;
export const DribbbleSquareOutlined: Icon;
export const InstagramOutlined: Icon;
export const YuqueOutlined: Icon;
export const AlibabaOutlined: Icon;
export const YahooOutlined: Icon;
export const RedditOutlined: Icon;
export const SketchOutlined: Icon;
export const AccountBookOutlined: Icon;
export const AimOutlined: Icon;
export const AlertOutlined: Icon;
export const ApartmentOutlined: Icon;
export const ApiOutlined: Icon;
export const AppstoreAddOutlined: Icon;
export const AppstoreOutlined: Icon;
export const AudioOutlined: Icon;
export const AudioMutedOutlined: Icon;
export const AuditOutlined: Icon;
export const BankOutlined: Icon;
export const BarcodeOutlined: Icon;
export const BarsOutlined: Icon;
export const BellOutlined: Icon;
export const BlockOutlined: Icon;
export const BookOutlined: Icon;
export const BorderOutlined: Icon;
export const BorderlessTableOutlined: Icon;
export const BranchesOutlined: Icon;
export const BugOutlined: Icon;
export const BuildOutlined: Icon;
export const BulbOutlined: Icon;
export const CalculatorOutlined: Icon;
export const CalendarOutlined: Icon;
export const CameraOutlined: Icon;
export const CarOutlined: Icon;
export const CarryOutOutlined: Icon;
export const CiCircleOutlined: Icon;
export const CiOutlined: Icon;
export const ClearOutlined: Icon;
export const CloudDownloadOutlined: Icon;
export const CloudOutlined: Icon;
export const CloudServerOutlined: Icon;
export const CloudSyncOutlined: Icon;
export const CloudUploadOutlined: Icon;
export const ClusterOutlined: Icon;
export const TerminalOutlined: Icon;
export const CoffeeOutlined: Icon;
export const CommentOutlined: Icon;
export const CompassOutlined: Icon;
export const CompressOutlined: Icon;
export const ConsoleSqlOutlined: Icon;
export const ContactsOutlined: Icon;
export const ContainerOutlined: Icon;
export const ControlOutlined: Icon;
export const CopyrightCircleOutlined: Icon;
export const CopyrightOutlined: Icon;
export const CreditCardOutlined: Icon;
export const CrownOutlined: Icon;
export const CustomerServiceOutlined: Icon;
export const DashboardOutlined: Icon;
export const DatabaseOutlined: Icon;
export const DeleteColumnOutlined: Icon;
export const DeleteRowOutlined: Icon;
export const DeliveredProcedureOutlined: Icon;
export const DeploymentUnitOutlined: Icon;
export const DesktopOutlined: Icon;
export const DingtalkOutlined: Icon;
export const DisconnectOutlined: Icon;
export const DislikeOutlined: Icon;
export const DollarOutlined: Icon;
export const DownloadOutlined: Icon;
export const EllipsisOutlined: Icon;
export const EnvironmentOutlined: Icon;
export const EuroCircleOutlined: Icon;
export const UsbOutlined: Icon;
export const EuroOutlined: Icon;
export const ExceptionOutlined: Icon;
export const ExperimentOutlined: Icon;
export const ExportOutlined: Icon;
export const WomanOutlined: Icon;
export const EyeOutlined: Icon;
export const EyeInvisibleOutlined: Icon;
export const FieldBinaryOutlined: Icon;
export const FieldNumberOutlined: Icon;
export const FieldStringOutlined: Icon;
export const FieldTimeOutlined: Icon;
export const FileAddOutlined: Icon;
export const FileDoneOutlined: Icon;
export const FileExcelOutlined: Icon;
export const FileExclamationOutlined: Icon;
export const FileOutlined: Icon;
export const FileGifOutlined: Icon;
export const FileImageOutlined: Icon;
export const FileJpgOutlined: Icon;
export const FileMarkdownOutlined: Icon;
export const FilePdfOutlined: Icon;
export const FilePptOutlined: Icon;
export const FileProtectOutlined: Icon;
export const FileSearchOutlined: Icon;
export const FileSyncOutlined: Icon;
export const FileTextOutlined: Icon;
export const FileUnknownOutlined: Icon;
export const FileWordOutlined: Icon;
export const FileZipOutlined: Icon;
export const FilterOutlined: Icon;
export const FireOutlined: Icon;
export const FlagOutlined: Icon;
export const FolderAddOutlined: Icon;
export const FolderOutlined: Icon;
export const FolderOpenOutlined: Icon;
export const FolderViewOutlined: Icon;
export const ForkOutlined: Icon;
export const FormatPainterOutlined: Icon;
export const FrownOutlined: Icon;
export const FunctionOutlined: Icon;
export const FundProjectionScreenOutlined: Icon;
export const FundViewOutlined: Icon;
export const GatewayOutlined: Icon;
export const GifOutlined: Icon;
export const GiftOutlined: Icon;
export const GlobalOutlined: Icon;
export const GoldOutlined: Icon;
export const GroupOutlined: Icon;
export const HddOutlined: Icon;
export const HeartOutlined: Icon;
export const HistoryOutlined: Icon;
export const HomeOutlined: Icon;
export const HourglassOutlined: Icon;
export const IdcardOutlined: Icon;
export const VerifiedOutlined: Icon;
export const InboxOutlined: Icon;
export const InsertRowAboveOutlined: Icon;
export const InsertRowBelowOutlined: Icon;
export const InsertRowLeftOutlined: Icon;
export const InsertRowRightOutlined: Icon;
export const InsuranceOutlined: Icon;
export const InteractionOutlined: Icon;
export const KeyOutlined: Icon;
export const LaptopOutlined: Icon;
export const LayoutOutlined: Icon;
export const LikeOutlined: Icon;
export const LineOutlined: Icon;
export const LinkOutlined: Icon;
export const Loading3QuartersOutlined: Icon;
export const LoadingOutlined: Icon;
export const LockOutlined: Icon;
export const MailOutlined: Icon;
export const WhatsAppOutlined: Icon;
export const ManOutlined: Icon;
export const MedicineBoxOutlined: Icon;
export const MehOutlined: Icon;
export const MenuOutlined: Icon;
export const MergeCellsOutlined: Icon;
export const MessageOutlined: Icon;
export const MobileOutlined: Icon;
export const MoneyCollectOutlined: Icon;
export const MonitorOutlined: Icon;
export const MoreOutlined: Icon;
export const NodeCollapseOutlined: Icon;
export const NodeExpandOutlined: Icon;
export const NodeIndexOutlined: Icon;
export const WifiOutlined: Icon;
export const NumberOutlined: Icon;
export const OneToOneOutlined: Icon;
export const PaperClipOutlined: Icon;
export const PartitionOutlined: Icon;
export const PayCircleOutlined: Icon;
export const PercentageOutlined: Icon;
export const PhoneOutlined: Icon;
export const PictureOutlined: Icon;
export const PlaySquareOutlined: Icon;
export const PoundCircleOutlined: Icon;
export const PoundOutlined: Icon;
export const PoweroffOutlined: Icon;
export const PrinterOutlined: Icon;
export const ProfileOutlined: Icon;
export const ProjectOutlined: Icon;
export const PropertySafetyOutlined: Icon;
export const PullRequestOutlined: Icon;
export const PushpinOutlined: Icon;
export const QrcodeOutlined: Icon;
export const ReadOutlined: Icon;
export const ReconciliationOutlined: Icon;
export const RedEnvelopeOutlined: Icon;
export const ReloadOutlined: Icon;
export const RestOutlined: Icon;
export const VideoCameraOutlined: Icon;
export const RocketOutlined: Icon;
export const RotateLeftOutlined: Icon;
export const RotateRightOutlined: Icon;
export const SafetyCertificateOutlined: Icon;
export const SafetyOutlined: Icon;
export const SaveOutlined: Icon;
export const ScanOutlined: Icon;
export const ScheduleOutlined: Icon;
export const WalletOutlined: Icon;
export const SearchOutlined: Icon;
export const SecurityScanOutlined: Icon;
export const SelectOutlined: Icon;
export const SettingOutlined: Icon;
export const ShakeOutlined: Icon;
export const ShareAltOutlined: Icon;
export const ShopOutlined: Icon;
export const ShoppingCartOutlined: Icon;
export const ShoppingOutlined: Icon;
export const SisternodeOutlined: Icon;
export const SkinOutlined: Icon;
export const SmileOutlined: Icon;
export const SolutionOutlined: Icon;
export const SoundOutlined: Icon;
export const SplitCellsOutlined: Icon;
export const StarOutlined: Icon;
export const SubnodeOutlined: Icon;
export const SwitcherOutlined: Icon;
export const SyncOutlined: Icon;
export const TableOutlined: Icon;
export const TabletOutlined: Icon;
export const TagOutlined: Icon;
export const TagsOutlined: Icon;
export const TeamOutlined: Icon;
export const ThunderboltOutlined: Icon;
export const ToTopOutlined: Icon;
export const ToolOutlined: Icon;
export const TrademarkCircleOutlined: Icon;
export const TrademarkOutlined: Icon;
export const TransactionOutlined: Icon;
export const TranslationOutlined: Icon;
export const TrophyOutlined: Icon;
export const UngroupOutlined: Icon;
export const UnlockOutlined: Icon;
export const UploadOutlined: Icon;
export const UserAddOutlined: Icon;
export const UserDeleteOutlined: Icon;
export const UserSwitchOutlined: Icon;
export const UsergroupAddOutlined: Icon;
export const UsergroupDeleteOutlined: Icon;
export const VideoCameraAddOutlined: Icon;
export const DateOutlined: Icon;
export const RevokeOutlined: Icon;
export const BackOutlined: Icon;
export const DoubleRightOutlined: Icon;
export const DoubleLeftOutlined: Icon;
export const DoubleDownOutlined: Icon;
export const DoubleUpOutlined: Icon;
export const CloseOutlined: Icon;
export const PlusOutlined: Icon;
export const CheckOutlined: Icon;
export const CollapseOutlined: Icon;
export const ExpandAltOutlined: Icon;
export const UpOutlined: Icon;
export const DownOutlined: Icon;
export const RightOutlined: Icon;
export const LeftOutlined: Icon;
export const CheckSquareOutlined: Icon;
export const QuestionMediumOutlined: Icon;
export const HelpCircleOutlined: Icon;
export const MinusOutlined: Icon;
export const DownloadCircleOutlined: Icon;
export const ShareCircleOutlined: Icon;
export const DateCircleOutlined: Icon;
export const DateCircleAutoOutlined: Icon;
export const MoneyOutlined: Icon;
export const LinkUnidirectionalOutlined: Icon;
export const FilterLineOutlined: Icon;
export const UserCircleOutlined: Icon;
export const UserAutoOutlined: Icon;
export const LinkCircleOutlined: Icon;
export const SearchCircleOutlined: Icon;
export const PaperClipCircleOutlined: Icon;
export const NumberCircleOutlined: Icon;
export const FieldNumberCircleOutlined: Icon;
export const TeamCircleOutlined: Icon;
export const OrderedListCircleOutlined: Icon;
export const FunctionCircleOutlined: Icon;
export const ZapOutlined: Icon;
export const MenuCircleOutlined: Icon;
export const BellCircleOutlined: Icon;
export const FieldSelectOutlined: Icon;
export const LockCircleOutlined: Icon;
export const UnlockCircleOutlined: Icon;
export const PercentOutlined: Icon;
export const ClockOutlined: Icon;
export const SpacePlusOutlined: Icon;
export const SpaceOutlined: Icon;
export const UserListOutlined: Icon;
export const EditCircleOutlined: Icon;
export const LogoutCircleOutlined: Icon;
export const RepeatOutlined: Icon;
export const LookupOutlined: Icon;
export const ImageCircleOutlined: Icon;
export const KeyboardOutlined: Icon;
export const RollupOutlined: Icon;
export const FilterCircleOutlined: Icon;
export const BranchOutlined: Icon;
export const StarCircleOutlined: Icon;
export const MailCircleOutlined: Icon;
export const PenOutlined: Icon;
export const MessageCircleOutlined: Icon;
export const BookOpenOutlined: Icon;
export const ThermometerOutlined: Icon;
export const GiftCircleOutlined: Icon;
export const MapOutlined: Icon;
export const HeadphonesOutlined: Icon;
export const PhoneCircleOutlined: Icon;
export const PrinterCircleOutlined: Icon;
export const MoonOutlined: Icon;
export const SunOutlined: Icon;
export const TruckOutlined: Icon;
export const TVOutlined: Icon;
export const CoffeeCircleOutlined: Icon;
export const CameraSquareOutlined: Icon;
export const HomeCircleOutlined: Icon;
export const SettingCircleOutlined: Icon;
export const ShoppingbagOutlined: Icon;
export const NoteOutlined: Icon;
export const AirplayOutlined: Icon;
export const AwardOutlined: Icon;
export const PieChartCircleOutlined: Icon;
export const CopyCircleOutlined: Icon;
export const QrcodeCircleOutlined: Icon;
export const WidgetOutlined: Icon;
export const ScreenOutlined: Icon;
export const ArchiveOutlined: Icon;
export const ArrowUpLeftOutlined: Icon;
export const MapFieldOutlined: Icon;
export const MacOptionOutlined: Icon;
export const MacommandOutlined: Icon;
export const ShareOutlined: Icon;
export const WebhookOutlined: Icon;
export const FileCSVOutlined: Icon;
export const AlignRightCircleOutlined: Icon;
export const AlignLeftCircleOutlined: Icon;
export const AlignTopCircleOutlined: Icon;
export const AlignBottomCircleOutlined: Icon;
export const AlignCenterHorizontalCircleOutlined: Icon;
export const AlignCenterVerticalCircleOutlined: Icon;
export const BotOutlined: Icon;
export const CodeOutlined: Icon;
export const ExternalLinkOutlined: Icon;
export const ClickOutlined: Icon;
export const ActivityOutlined: Icon;
export const ComponentOutlined: Icon;
export const GaugeOutlined: Icon;
export const SheetOutlined: Icon;
export const FileLockOutlined: Icon;
export const ListSearchOutlined: Icon;
export const LayoutGridOutlined: Icon;
export const HistoryCircleOutlined: Icon;
export const FolderCircleOutlined: Icon;
export const FileXOutlined: Icon;
export const DragPointOutlined: Icon;
export const EllipsisPointOutlined: Icon;
export const TextOutlined: Icon;
export const LongTextOutlined: Icon;
export const TerminalCircleOutlined: Icon;
export const DeleteOutlined: Icon;
export const RecycleOutlined: Icon;
export const ColorsOutlined: Icon;
export const TemplateOutlined: Icon;
export const CropOutlined: Icon;
export const DragHorizontalOutlined: Icon;
export const MorePointOutlined: Icon;
export const GalleryOutlined: Icon;
export const CalenderOutlined: Icon;
export const KanbanOutlined: Icon;
export const GridOutlined: Icon;
export const FormOutlined: Icon;
export const GanttOutlined: Icon;
export const AdjustmentOutlined: Icon;
export const NodeUpstreamOutlined: Icon;
export const NodeDownstreamOutlined: Icon;
export const ImportOutlined: Icon;
export const TableCircleOutlined: Icon;
export const BoldCircleOutlined: Icon;
export const SealOutlined: Icon;
export const PencilOutlined: Icon;
export const NetworkOutlined: Icon;
export const CheckListOutlined: Icon;
export const StateOutlined: Icon;
export const JSONOutlined: Icon;
export const UnlinkOutlined: Icon;
export const InterfaceOutlined: Icon;
export const DrawerOutlined: Icon;
export const MaximizeOutlined: Icon;
export const DocumentOutlined: Icon;
export const CopySquareOutlined: Icon;
export const DeleteSquareOutlined: Icon;
export const PasteSquareOutlined: Icon;
export const CutSquareOutlined: Icon;
export const ArrowUpSquareOutlined: Icon;
export const ArrowDownSquareOutlined: Icon;
export const ArrowLeftSquareOutlined: Icon;
export const ArrowRightSquareOutlined: Icon;
export const ClearSquareOutlined: Icon;
export const ReviseSquareOutlined: Icon;
export const SendOutlined: Icon;
export const SyncSquareOutlined: Icon;
export const CMYKOutlined: Icon;
export const RenewalSquareOutlined: Icon;
export const KeySquareOutlined: Icon;
export const MigrateSquareOutlined: Icon;
export const PartnerSquareOutlined: Icon;
export const CreateSquareOutlined: Icon;
export const PauseCircleOutlined: Icon;
export const PlayCircleOutlined: Icon;
export const TerminationSquareOutlined: Icon;
export const MonitorSquareOutlined: Icon;
export const RightPanelSquareOutlined: Icon;
export const SetUpSquareOutlined: Icon;
export const KeyboardSquareOutlined: Icon;
export const MaterialSquareOutlined: Icon;
export const UserOutlined: Icon;
export const HomeSquareOutlined: Icon;
export const GroupSquareOutlined: Icon;
export const LogoutSquareOutlined: Icon;
export const LevelSquareOutlined: Icon;
export const IpadSquareOutlined: Icon;
export const PhoneSquareOutlined: Icon;
export const MenuReplicateOutlined: Icon;
export const LogoutOutlined: Icon;
export const FrameSelectionOutlined: Icon;
export const ModelOutlined: Icon;
export const ModelNodeListOutlined: Icon;
export const WireframeModeOutlined: Icon;
export const WhiteModeOutlined: Icon;
export const AdditionalLayersOutlined: Icon;
export const MoveOutlined: Icon;
export const LassoOutlined: Icon;
export const RenderModeOutlined: Icon;
export const BranchJudgmentNodeOutlined: Icon;
export const MultidropJudgmentNodeOutlined: Icon;
export const SpotLightOutlined: Icon;
export const DirectionalLightOutlined: Icon;
export const AnimationOutlined: Icon;
export const BatchModelOutlined: Icon;
export const BatchModelLinesOutlined: Icon;
export const SelectedObjectOutlined: Icon;
export const AddWorldElementsOutlined: Icon;
export const ChartsAndMoreOutlined: Icon;
export const ViewSwitchesOutlined: Icon;
export const FilterParallelOutlined: Icon;
export const FilterSeriesOutlined: Icon;
export const DynamicPanelOutlined: Icon;
export const LinkPanelOutlined: Icon;
export const SubcomponentOutlined: Icon;
export const CallbackParameterOutlined: Icon;
export const AdsorbOutlined: Icon;
export const NotAvailableOutlined: Icon;
export const OrthogonalViewerOutlined: Icon;
export const PerspectiveViewerOutlined: Icon;
export const FocusingOutlined: Icon;
export const AlignLeftETOutlined: Icon;
export const DistributionXETOutlined: Icon;
export const MouseButtonLeftOutlined: Icon;
export const MouseButtonRightOutlined: Icon;
export const MouseButtonMiddleOutlined: Icon;
export const MacShiftOutlined: Icon;
export const StretchMarkOutlined: Icon;
export const BlankLinkPointOutlined: Icon;
export const SphereOutlined: Icon;
export const WaterDropOutlined: Icon;
export const MaterialOutlined: Icon;
export const PointCameraOutlined: Icon;
export const SurroundCameraOutlined: Icon;
export const CruiseCameraOutlined: Icon;
export const StopPlayingOutlined: Icon;
export const AuxiliaryRegionOutlined: Icon;
export const CuttingAnimationOutlined: Icon;
export const SpotOutlined: Icon;
export const AreaOutlined: Icon;
export const LightBulbOutlined: Icon;
export const MouseOutlined: Icon;
export const TopOutlined: Icon;
export const RestartOutlined: Icon;
export const PlayOutlined: Icon;
export const LineHeightOutlined: Icon;
export const LetterSpacingOutlined: Icon;
export const FolderSyncOutlined: Icon;
export const ExpandOutlined: Icon;
export const ImagesOutlined: Icon;
export const LocateOutlined: Icon;
export const ArrowBigUpOutlined: Icon;
export const PipetteOutlined: Icon;
export const RouteOutlined: Icon;
export const UpCircleFilled: Icon;
export const DownCircleFilled: Icon;
export const LeftCircleFilled: Icon;
export const RightCircleFilled: Icon;
export const PlayCircleFilled: Icon;
export const UpSquareFilled: Icon;
export const DownSquareFilled: Icon;
export const RightSquareFilled: Icon;
export const LeftSquareFilled: Icon;
export const QuestionCircleFilled: Icon;
export const PlusCircleFilled: Icon;
export const PauseCircleFilled: Icon;
export const MinusCircleFilled: Icon;
export const PlusSquareFilled: Icon;
export const MinusSquareFilled: Icon;
export const InfoCircleFilled: Icon;
export const ExclamationCircleFilled: Icon;
export const CloseCircleFilled: Icon;
export const CloseSquareFilled: Icon;
export const CheckCircleFilled: Icon;
export const CheckSquareFilled: Icon;
export const ClockCircleFilled: Icon;
export const WarningFilled: Icon;
export const StopFilled: Icon;
export const EditFilled: Icon;
export const CopyFilled: Icon;
export const SnippetsFilled: Icon;
export const DiffFilled: Icon;
export const HighlightFilled: Icon;
export const PieChartFilled: Icon;
export const BoxPlotFilled: Icon;
export const FundFilled: Icon;
export const SlidersFilled: Icon;
export const AndroidFilled: Icon;
export const AppleFilled: Icon;
export const WindowsFilled: Icon;
export const ChromeFilled: Icon;
export const GithubFilled: Icon;
export const AliwangwangFilled: Icon;
export const WeiboSquareFilled: Icon;
export const WeiboCircleFilled: Icon;
export const TaobaoCircleFilled: Icon;
export const Html5Filled: Icon;
export const WechatFilled: Icon;
export const YoutubeFilled: Icon;
export const AlipayCircleFilled: Icon;
export const SkypeFilled: Icon;
export const GitlabFilled: Icon;
export const LinkedinFilled: Icon;
export const FacebookFilled: Icon;
export const CodesandboxCircleFilled: Icon;
export const CodepenCircleFilled: Icon;
export const SlackSquareFilled: Icon;
export const BehanceSquareFilled: Icon;
export const DribbbleSquareFilled: Icon;
export const InstagramFilled: Icon;
export const YuqueFilled: Icon;
export const YahooFilled: Icon;
export const AccountBookFilled: Icon;
export const AlertFilled: Icon;
export const AlipaySquareFilled: Icon;
export const AmazonCircleFilled: Icon;
export const AmazonSquareFilled: Icon;
export const ApiFilled: Icon;
export const AppstoreFilled: Icon;
export const AudioFilled: Icon;
export const BankFilled: Icon;
export const BehanceCircleFilled: Icon;
export const BellFilled: Icon;
export const BookFilled: Icon;
export const BugFilled: Icon;
export const BulbFilled: Icon;
export const CalculatorFilled: Icon;
export const BuildFilled: Icon;
export const CalendarFilled: Icon;
export const CameraFilled: Icon;
export const CarFilled: Icon;
export const CarryOutFilled: Icon;
export const CiCircleFilled: Icon;
export const CloudFilled: Icon;
export const CodeSandboxSquareFilled: Icon;
export const TerminalFilled: Icon;
export const CompassFilled: Icon;
export const CodepenSquareFilled: Icon;
export const ContactsFilled: Icon;
export const ContainerFilled: Icon;
export const ControlFilled: Icon;
export const CopyrightCircleFilled: Icon;
export const CreditCardFilled: Icon;
export const CrownFilled: Icon;
export const CustomerServiceFilled: Icon;
export const DashboardFilled: Icon;
export const DingtalkCircleFilled: Icon;
export const DatabaseFilled: Icon;
export const DingtalkSquareFilled: Icon;
export const DislikeFilled: Icon;
export const DollarCircleFilled: Icon;
export const DribbbleCircleFilled: Icon;
export const DropboxCircleFilled: Icon;
export const DropboxSquareFilled: Icon;
export const EnvironmentFilled: Icon;
export const EuroCircleFilled: Icon;
export const ExperimentFilled: Icon;
export const EyeInvisibleFilled: Icon;
export const EyeFilled: Icon;
export const FileAddFilled: Icon;
export const FileExclamationFilled: Icon;
export const FileImageFilled: Icon;
export const FileMarkdownFilled: Icon;
export const FilePdfFilled: Icon;
export const SignalFilled: Icon;
export const WalletFilled: Icon;
export const FileTextFilled: Icon;
export const FileUnknownFilled: Icon;
export const FileZipFilled: Icon;
export const FileFilled: Icon;
export const FilterFilled: Icon;
export const FormatPainterFilled: Icon;
export const FireFilled: Icon;
export const FlagFilled: Icon;
export const FolderAddFilled: Icon;
export const FolderFilled: Icon;
export const FolderOpenFilled: Icon;
export const FrownFilled: Icon;
export const FunnelPlotFilled: Icon;
export const GiftFilled: Icon;
export const GoldenFilled: Icon;
export const GoogleCircleFilled: Icon;
export const GooglePlusCircleFilled: Icon;
export const GooglePlusSquareFilled: Icon;
export const GoogleSquareFilled: Icon;
export const HddFilled: Icon;
export const HeartFilled: Icon;
export const HomeFilled: Icon;
export const HourglassFilled: Icon;
export const IdcardFilled: Icon;
export const IeCircleFilled: Icon;
export const IeSquareFilled: Icon;
export const InsuranceFilled: Icon;
export const InteractionFilled: Icon;
export const LayoutFilled: Icon;
export const LikeFilled: Icon;
export const LockFilled: Icon;
export const MailFilled: Icon;
export const MedicineBoxFilled: Icon;
export const MediumCircleFilled: Icon;
export const MediumSquareFilled: Icon;
export const MehFilled: Icon;
export const MessageFilled: Icon;
export const MobileFilled: Icon;
export const MoneyCollectFilled: Icon;
export const PayCircleFilled: Icon;
export const GoldFilled: Icon;
export const PhoneFilled: Icon;
export const PictureFilled: Icon;
export const PlaySquareFilled: Icon;
export const PoundCircleFilled: Icon;
export const PrinterFilled: Icon;
export const ProfileFilled: Icon;
export const ProjectFilled: Icon;
export const PushpinFilled: Icon;
export const PropertySafetyFilled: Icon;
export const QqCircleFilled: Icon;
export const QqSquareFilled: Icon;
export const ReadFilled: Icon;
export const ReconciliationFilled: Icon;
export const RedEnvelopeFilled: Icon;
export const RedditCircleFilled: Icon;
export const RedditSquareFilled: Icon;
export const RestFilled: Icon;
export const RocketFilled: Icon;
export const SafetyCertificateFilled: Icon;
export const SaveFilled: Icon;
export const ScheduleFilled: Icon;
export const SecurityScanFilled: Icon;
export const SettingFilled: Icon;
export const ShopFilled: Icon;
export const ShoppingFilled: Icon;
export const SketchCircleFilled: Icon;
export const SketchSquareFilled: Icon;
export const SkinFilled: Icon;
export const SlackCircleFilled: Icon;
export const SmileFilled: Icon;
export const SoundFilled: Icon;
export const StarFilled: Icon;
export const SwitcherFilled: Icon;
export const TabletFilled: Icon;
export const TagFilled: Icon;
export const TagsFilled: Icon;
export const TaobaoSquareFilled: Icon;
export const ToolFilled: Icon;
export const ThunderboltFilled: Icon;
export const TrademarkCircleFilled: Icon;
export const TwitterCircleFilled: Icon;
export const TrophyFilled: Icon;
export const TwitterSquareFilled: Icon;
export const UnlockFilled: Icon;
export const UsbFilled: Icon;
export const VideoCameraFilled: Icon;
export const ZhihuCircleFilled: Icon;
export const ZhihuSquareFilled: Icon;
export const FullscreenFilled: Icon;
export const UserCircleFilled: Icon;
export const TeamCircleFilled: Icon;
export const DTableFilled: Icon;
export const AuthorityFilled: Icon;
export const NotificationFilled: Icon;
export const EasyVFilled: Icon;
export const FileCSVFilled: Icon;
export const FileExcelFilled: Icon;
export const FileWordFilled: Icon;
export const FilePPTFilled: Icon;
export const FileOtherFilled: Icon;
export const ImgerrFilled: Icon;
export const DingrobotCircleFilled: Icon;
export const DingrobotFilled: Icon;
export const GridFilled: Icon;
export const FormFilled: Icon;
export const GalleryFilled: Icon;
export const KanbanFilled: Icon;
export const GanttFilled: Icon;
export const CalenderFilled: Icon;
export const RecycleFilled: Icon;
export const DeleteFilled: Icon;
export const FreeTrialFilled: Icon;
export const OrganizeFilled: Icon;
export const MailListFilled: Icon;
export const EnterpriseFilled: Icon;
export const EasyTwinFilled: Icon;
export const PickUpFilled: Icon;
export const ExpandFilled: Icon;