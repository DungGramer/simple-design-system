import Avatar from '@pages/avatar/Avatar';
import Badge from '@pages/badge/Badge';
import Banner from '@pages/banner/Banner';
import Breadcrumb from '@pages/breadcrumb/Breadcrumb';
import Button from '@pages/button/Button';
import Checkbox from '@pages/checkbox/Checkbox';
import Code from '@pages/code/Code';
import DropdownMenu from '@pages/dropdown-menu/DropdownMenu';
import Flag from '@pages/flag/Flag';
import InlineMessage from '@pages/inline-message/InlineMessage';
import Lozenge from '@pages/lozenge/Lozenge';
import ModalDialog from '@pages/modal-dialog/ModalDialog';
import Pagination from '@pages/pagination/Pagination';
import ProgressIndicator from '@pages/progress-indicator/ProgressIndicator';
import ProgressTracker from '@pages/progress-tracker/ProgressTracker';
import Radio from '@pages/radio/Radio';
import Range from '@pages/range/Range';
import SectionMessage from '@pages/section-message/SectionMessage';
import Select from '@pages/select/Select';
import Spinner from '@pages/spinner/Spinner';
import Tabs from '@pages/tabs/Tabs';
import Tag from '@pages/tag/Tag';
import TextArea from '@pages/text-area/TextArea';
import TextField from '@pages/text-field/TextField';
import Toggle from '@pages/toggle/Toggle';
import Tooltip from '@pages/tooltip/Tooltip';

import baseURL from './base';

const basePath = baseURL.components;

const components = [
  {
    title: 'Avatar',
    path: `${basePath}/avatar`,
    component: Avatar,
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
    component: Code,
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
    component: Toggle,
  },
  {
    title: 'Tooltip',
    path: `${basePath}/tooltip`,
    component: Tooltip,
  },
];

export default components;
