import { lazy } from 'react';

const AvatarPage = lazy(() => import('@pages/avatar/AvatarPage'));
const Badge = lazy(() => import('@pages/badge/BadgePage'));
const Banner = lazy(() => import('@pages/banner/BannerPage'));
const Breadcrumb = lazy(() => import('@pages/breadcrumb/BreadcrumbPage'));
const Button = lazy(() => import('@pages/button/ButtonPage'));
const Checkbox = lazy(() => import('@pages/checkbox/CheckboxPage'));
const DropdownMenu = lazy(() => import('@pages/dropdown-menu/DropdownMenuPage'));
const Flag = lazy(() => import('@pages/flag/FlagPage'));
const ImagePage = lazy(() => import('@pages/image/ImagePage'));
// const InlineMessage = lazy(() => import('@pages/inline-message/InlineMessage'));
const Lozenge = lazy(() => import('@pages/lozenge/LozengePage'));
const ModalDialog = lazy(() => import('@pages/modal/ModalPage'));
const Pagination = lazy(() => import('@pages/pagination/PaginationPage'));
// const ProgressIndicator = lazy(() => import('@pages/progress-indicator/ProgressIndicator'));
// const ProgressTracker = lazy(() => import('@pages/progress-tracker/ProgressTracker'));
const Radio = lazy(() => import('@pages/radio/RadioPage'));
const Range = lazy(() => import('@pages/range/RangePage'));
// const Select = lazy(() => import('@pages/select/Select'));
const Spinner = lazy(() => import('@pages/spinner/SpinnerPage'));
const Tabs = lazy(() => import('@pages/tabs/TabsPage'));
// const Tag = lazy(() => import('@pages/tag/Tag'));
const Table = lazy(() => import('@pages/table/TablePage'));
const TextArea = lazy(() => import('@pages/text-area/TextAreaPage'));
const TextField = lazy(() => import('@pages/text-field/TextFieldPage'));
const TogglePage = lazy(() => import('@pages/toggle/TogglePage'));
// const Tooltip = lazy(() => import('@pages/tooltip/Tooltip'));

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
  // {
  //   title: 'Inline Message',
  //   path: `${basePath}/inline-message`,
  //   component: InlineMessage,
  // },
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
  // {
  //   title: 'Progress indicator',
  //   path: `${basePath}/progress-indicator`,
  //   component: ProgressIndicator,
  // },
  // {
  //   title: 'Progress tracker',
  //   path: `${basePath}/progress-tracker`,
  //   component: ProgressTracker,
  // },
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
  // {
  //   title: 'Select',
  //   path: `${basePath}/select`,
  //   component: Select,
  // },
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
  // {
  //   title: 'Tag',
  //   path: `${basePath}/tag`,
  //   component: Tag,
  // },
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
  // {
  //   title: 'Tooltip',
  //   path: `${basePath}/tooltip`,
  //   component: Tooltip,
  // },
];

export default components;
