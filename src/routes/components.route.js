import { lazy } from 'react';

const AvatarPage = lazy(() => import('@pages/avatar-page/AvatarPage'));
const Badge = lazy(() => import('@pages/badge-page/BadgePage'));
const Banner = lazy(() => import('@pages/banner/Banner'));
const Breadcrumb = lazy(() => import('@pages/breadcrumb/Breadcrumb'));
const Button = lazy(() => import('@pages/button-page/ButtonPage'));
const Checkbox = lazy(() => import('@pages/checkbox/Checkbox'));
const CodePage = lazy(() => import('@pages/code-page/CodePage'));
const DropdownMenu = lazy(() => import('@pages/dropdown-menu/DropdownMenu'));
const Flag = lazy(() => import('@pages/flag/Flag'));
const ImagePage = lazy(() => import('@pages/image-page/ImagePage'));
const InlineMessage = lazy(() => import('@pages/inline-message/InlineMessage'));
const Lozenge = lazy(() => import('@pages/lozenge/Lozenge'));
const ModalDialog = lazy(() => import('@pages/modal-dialog/ModalDialog'));
const Pagination = lazy(() => import('@pages/pagination/Pagination'));
const ProgressIndicator = lazy(() => import('@pages/progress-indicator/ProgressIndicator'));
const ProgressTracker = lazy(() => import('@pages/progress-tracker/ProgressTracker'));
const Radio = lazy(() => import('@pages/radio/Radio'));
const Range = lazy(() => import('@pages/range/Range'));
const SectionMessage = lazy(() => import('@pages/section-message/SectionMessage'));
const Select = lazy(() => import('@pages/select/Select'));
const Spinner = lazy(() => import('@pages/spinner/Spinner'));
const Tabs = lazy(() => import('@pages/tabs/Tabs'));
const Tag = lazy(() => import('@pages/tag/Tag'));
const Table = lazy(() => import('@pages/table-page/TablePage'));
const TextArea = lazy(() => import('@pages/text-area/TextArea'));
const TextField = lazy(() => import('@pages/text-field/TextField'));
const TogglePage = lazy(() => import('@pages/toggle-page/TogglePage'));
const Tooltip = lazy(() => import('@pages/tooltip/Tooltip'));

import baseURL from './base.route';

const basePath = baseURL.components;

const components = [
  {
    title: 'Avatar',
    path: `${basePath}/avatar`,
    component: AvatarPage,
  },
  {
    title: 'Badge',
    path: `${basePath}/badge`,
    component: Badge,
  },
  {
    title: 'Banner',
    path: `${basePath}/banner`,
    component: Banner,
  },
  {
    title: 'Breadcrumb',
    path: `${basePath}/breadcrumb`,
    component: Breadcrumb,
  },
  {
    title: 'Button',
    path: `${basePath}/button`,
    component: Button,
  },
  {
    title: 'Checkbox',
    path: `${basePath}/checkbox`,
    component: Checkbox,
  },
  {
    title: 'Code',
    path: `${basePath}/code`,
    component: CodePage,
  },
  {
    title: 'Dropdown menu',
    path: `${basePath}/dropdown-menu`,
    component: DropdownMenu,
  },
  {
    title: 'Flag',
    path: `${basePath}/flag`,
    component: Flag,
  },
  {
    title: 'Image',
    path: `${basePath}/image`,
    component: ImagePage,
  },
  {
    title: 'Inline Message',
    path: `${basePath}/inline-message`,
    component: InlineMessage,
  },
  {
    title: 'Lozenge',
    path: `${basePath}/lozenge`,
    component: Lozenge,
  },
  {
    title: 'Modal dialog',
    path: `${basePath}/Modal-dialog`,
    component: ModalDialog,
  },
  {
    title: 'Pagination',
    path: `${basePath}/pagination`,
    component: Pagination,
  },
  {
    title: 'Progress indicator',
    path: `${basePath}/progress-indicator`,
    component: ProgressIndicator,
  },
  {
    title: 'Progress tracker',
    path: `${basePath}/progress-tracker`,
    component: ProgressTracker,
  },
  {
    title: 'Radio',
    path: `${basePath}/radio`,
    component: Radio,
  },
  {
    title: 'Range',
    path: `${basePath}/range`,
    component: Range,
  },
  {
    title: 'Section Message',
    path: `${basePath}/section-message`,
    component: SectionMessage,
  },
  {
    title: 'Select',
    path: `${basePath}/select`,
    component: Select,
  },
  {
    title: 'Spinner',
    path: `${basePath}/spinner`,
    component: Spinner,
  },
  {
    title: 'Tabs',
    path: `${basePath}/tabs`,
    component: Tabs,
  },
  {
    title: 'Tag',
    path: `${basePath}/tag`,
    component: Tag,
  },
  {
    title: 'Table',
    path: `${basePath}/Table`,
    component: Table,
  },
  {
    title: 'Text-area',
    path: `${basePath}/text-area`,
    component: TextArea,
  },
  {
    title: 'Text field',
    path: `${basePath}/text-field`,
    component: TextField,
  },
  {
    title: 'Toggle',
    path: `${basePath}/toggle`,
    component: TogglePage,
  },
  {
    title: 'Tooltip',
    path: `${basePath}/tooltip`,
    component: Tooltip,
  },
];

export default components;