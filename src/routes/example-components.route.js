import * as Avatar from '@pages/avatar/examples';
import * as Button from '@pages/button/examples';
import * as Banner from '@pages/banner/examples';
import * as Badge from '@pages/badge/examples';
import * as Breadcrumb from '@pages/breadcrumb/examples';
import * as Checkbox from '@pages/checkbox/examples';
import * as Divider from '@pages/divider/examples';
import * as Dropdown from '@pages/dropdown-menu/examples';
import * as Flag from '@pages/flag/examples';
import * as Icon from '@pages/icon/examples';
import * as Image from '@pages/image/examples';
import * as Lozenge from '@pages/lozenge/examples';
import * as Modal from '@pages/modal/examples';
import * as Pagination from '@pages/pagination/examples';
import * as Radio from '@pages/radio/examples';
import * as Range from '@pages/range/examples';
import * as Tabs from '@pages/tabs/examples';
import * as Table from '@pages/table/examples';
import * as Spinner from '@pages/spinner/examples';
import * as TextArea from '@pages/text-area/examples';
import * as TextField from '@pages/text-field/examples';
import * as Toggle from '@pages/toggle/examples';

const pathExample = {
  avatar: [
    {
      heading: 'Appearance',
      component: Avatar.AvatarAppearance,
      path: require('!!raw-loader!@pages/avatar/examples/AvatarAppearance')
        .default,
    },
    {
      heading: 'Sizes',
      component: Avatar.AvatarSize,
      path: require('!!raw-loader!@pages/avatar/examples/AvatarSize').default,
    },
    {
      heading: 'Status',
      component: Avatar.AvatarStatus,
      path: require('!!raw-loader!@pages/avatar/examples/AvatarStatus').default,
    },
    {
      heading: 'Avatar Group',
      component: Avatar.AvatarGroup,
      path: require('!!raw-loader!@pages/avatar/examples/AvatarGroup').default,
    },
  ],
  button: [
    {
      heading: 'Type',
      component: Button.ButtonType,
      path: require('!!raw-loader!@pages/button/examples/ButtonType.jsx')
        .default,
    },
    {
      heading: 'Size',
      component: Button.ButtonSize,
      path: require('!!raw-loader!@pages/button/examples/ButtonSize.jsx')
        .default,
    },
    {
      heading: 'Icon',
      component: Button.ButtonIcon,
      path: require('!!raw-loader!@pages/button/examples/ButtonIcon.jsx')
        .default,
    },
    {
      heading: 'Loading',
      component: Button.ButtonLoading,
      path: require('!!raw-loader!@pages/button/examples/ButtonLoading.jsx')
        .default,
    },
    {
      heading: 'Disabled',
      component: Button.ButtonDisabled,
      path: require('!!raw-loader!@pages/button/examples/ButtonDisabled.jsx')
        .default,
    },
  ],
  banner: [
    {
      heading: 'Warning',
      component: Banner.BannerWarning,
      path: require('!!raw-loader!@pages/banner/examples/BannerWarning')
        .default,
    },
    {
      heading: 'Error',
      component: Banner.BannerError,
      path: require('!!raw-loader!@pages/banner/examples/BannerError').default,
    },
    {
      heading: 'Announcement',
      component: Banner.BannerAnnouncement,
      path: require('!!raw-loader!@pages/banner/examples/BannerAnnouncement')
        .default,
    },
    {
      heading: 'Icon',
      component: Banner.BannerIcon,
      path: require('!!raw-loader!@pages/banner/examples/BannerIcon').default,
    },
  ],
  badge: [
    {
      heading: 'Basic',
      component: Badge.BadgeBasic,
      path: require('!!raw-loader!@pages/badge/examples/BadgeBasic').default,
    },
    {
      heading: 'Overflow',
      component: Badge.BadgeOverflow,
      path: require('!!raw-loader!@pages/badge/examples/BadgeOverflow').default,
    },
    {
      heading: 'Status',
      component: Badge.BadgeStatus,
      path: require('!!raw-loader!@pages/badge/examples/BadgeStatus').default,
    },
    {
      heading: 'Offset',
      component: Badge.BadgeOffset,
      path: require('!!raw-loader!@pages/badge/examples/BadgeOffset').default,
    },
    {
      heading: 'Size',
      component: Badge.BadgeSize,
      path: require('!!raw-loader!@pages/badge/examples/BadgeSize').default,
    },
  ],
  breadcrumb: [
    {
      heading: 'Basic',
      component: Breadcrumb.BreadcrumbBasic,
      path: require('!!raw-loader!@pages/breadcrumb/examples/BreadcrumbBasic')
        .default,
    },
    {
      heading: 'Icon',
      component: Breadcrumb.BreadcrumbIcon,
      path: require('!!raw-loader!@pages/breadcrumb/examples/BreadcrumbIcon')
        .default,
    },
    {
      heading: 'Separator',
      component: Breadcrumb.BreadcrumbSeparator,
      path: require('!!raw-loader!@pages/breadcrumb/examples/BreadcrumbSeparator')
        .default,
    },
  ],
  checkbox: [
    {
      heading: 'Basic',
      component: Checkbox.CheckboxBasic,
      path: require('!!raw-loader!@pages/checkbox/examples/CheckboxBasic')
        .default,
    },
    {
      heading: 'Disabled',
      component: Checkbox.CheckboxDisabled,
      path: require('!!raw-loader!@pages/checkbox/examples/CheckboxDisabled')
        .default,
    },
    {
      heading: 'Controller',
      component: Checkbox.CheckboxController,
      path: require('!!raw-loader!@pages/checkbox/examples/CheckboxController')
        .default,
    },
    {
      heading: 'Size',
      component: Checkbox.CheckboxSize,
      path: require('!!raw-loader!@pages/checkbox/examples/CheckboxSize')
        .default,
    },
  ],
  divider: [
    {
      heading: 'Basic',
      component: Divider.DividerBasic,
      path: require('!!raw-loader!@pages/divider/examples/DividerBasic')
        .default,
    },
    {
      heading: 'Direction',
      component: Divider.DividerDirection,
      path: require('!!raw-loader!@pages/divider/examples/DividerDirection')
        .default,
    },
    {
      heading: 'Icon',
      component: Divider.DividerIcon,
      path: require('!!raw-loader!@pages/divider/examples/DividerIcon').default,
    },
  ],
  dropdown: [
    {
      heading: 'Basic',
      component: Dropdown.DropdownBasic,
      path: require('!!raw-loader!@pages/dropdown-menu/examples/DropdownBasic')
        .default,
    },
  ],
  flag: [
    {
      heading: 'Basic',
      component: Flag.FlagBasic,
      path: require('!!raw-loader!@pages/flag/examples/FlagBasic').default,
    },
    {
      heading: 'Appearance',
      component: Flag.FlagAppearance,
      path: require('!!raw-loader!@pages/flag/examples/FlagAppearance').default,
    },
    {
      heading: 'Actions',
      component: Flag.FlagActions,
      path: require('!!raw-loader!@pages/flag/examples/FlagActions').default,
    },
  ],
  icon: [
    {
      heading: 'Basic',
      component: Icon.IconBasic,
      path: require('!!raw-loader!@pages/icon/examples/IconBasic').default,
    },
    {
      heading: 'Flip',
      component: Icon.IconFlip,
      path: require('!!raw-loader!@pages/icon/examples/IconFlip').default,
    },
    {
      heading: 'Rotate',
      component: Icon.IconRotate,
      path: require('!!raw-loader!@pages/icon/examples/IconRotate').default,
    },
    {
      heading: 'Animation',
      component: Icon.IconAnimation,
      path: require('!!raw-loader!@pages/icon/examples/IconAnimation').default,
    },
  ],
  image: [
    {
      heading: 'Basic',
      component: Image.ImageBasic,
      path: require('!!raw-loader!@pages/image/examples/ImageBasic').default,
    },
    {
      heading: 'Lazy Loading',
      component: Image.ImageLazy,
      path: require('!!raw-loader!@pages/image/examples/ImageLazy').default,
    },
    {
      heading: 'Srcset',
      component: Image.ImageSrcset,
      path: require('!!raw-loader!@pages/image/examples/ImageSrcset').default,
    },
  ],
  lozenge: [
    {
      heading: 'Basic',
      component: Lozenge.LozengeBasic,
      path: require('!!raw-loader!@pages/lozenge/examples/LozengeBasic')
        .default,
    },
    {
      heading: 'Appearance',
      component: Lozenge.LozengeAppearance,
      path: require('!!raw-loader!@pages/lozenge/examples/LozengeAppearance')
        .default,
    },
    {
      heading: 'Max width',
      component: Lozenge.LozengeMaxWidth,
      path: require('!!raw-loader!@pages/lozenge/examples/LozengeMaxWidth')
        .default,
    },
  ],
  modal: [
    {
      heading: 'Basic',
      component: Modal.ModalBasic,
      path: require('!!raw-loader!@pages/modal/examples/ModalBasic').default,
    },
    {
      heading: 'Strict close',
      component: Modal.ModalStrict,
      path: require('!!raw-loader!@pages/modal/examples/ModalStrict').default,
    },
  ],
  pagination: [
    {
      heading: 'Basic',
      component: Pagination.PaginationBasic,
      path: require('!!raw-loader!@pages/pagination/examples/PaginationBasic')
        .default,
    },
    {
      heading: 'Default selected index',
      component: Pagination.PaginationIndex,
      path: require('!!raw-loader!@pages/pagination/examples/PaginationIndex')
        .default,
    },
  ],
  radio: [
    {
      heading: 'Basic',
      component: Radio.RadioBasic,
      path: require('!!raw-loader!@pages/radio/examples/RadioBasic').default,
    },
    {
      heading: 'Appearance',
      component: Radio.RadioAppearance,
      path: require('!!raw-loader!@pages/radio/examples/RadioAppearance')
        .default,
    },
    {
      heading: 'Disabled',
      component: Radio.RadioDisabled,
      path: require('!!raw-loader!@pages/radio/examples/RadioDisabled').default,
    },
    {
      heading: 'Group',
      component: Radio.RadioGroup,
      path: require('!!raw-loader!@pages/radio/examples/RadioGroup').default,
    },
    {
      heading: 'Checked',
      component: Radio.RadioChecked,
      path: require('!!raw-loader!@pages/radio/examples/RadioChecked').default,
    },
  ],
  range: [
    {
      heading: 'Basic',
      component: Range.RangeBasic,
      path: require('!!raw-loader!@pages/range/examples/RangeBasic').default,
    },
  ],
  tabs: [
    {
      heading: 'Basic',
      component: Tabs.TabsBasic,
      path: require('!!raw-loader!@pages/tabs/examples/TabsBasic').default,
    },
    {
      heading: 'Controlled',
      component: Tabs.TabsControlled,
      path: require('!!raw-loader!@pages/tabs/examples/TabsControlled').default,
    },
  ],
  table: [
    {
      heading: 'Basic',
      component: Table.TableBasic,
      path: require('!!raw-loader!@pages/table/examples/TableBasic').default,
    },
  ],
  spinner: [
    {
      heading: 'Basic',
      component: Spinner.SpinnerBasic,
      path: require('!!raw-loader!@pages/spinner/examples/SpinnerBasic')
        .default,
    },
    {
      heading: 'Size',
      component: Spinner.SpinnerSize,
      path: require('!!raw-loader!@pages/spinner/examples/SpinnerSize').default,
    },
  ],
  textArea: [
    {
      heading: 'Basic',
      component: TextArea.TextAreaBasic,
      path: require('!!raw-loader!@pages/text-area/examples/TextAreaBasic')
        .default,
    },
    {
      heading: 'Resize',
      component: TextArea.TextAreaResize,
      path: require('!!raw-loader!@pages/text-area/examples/TextAreaResize')
        .default,
    },
  ],
  textField: [
    {
      heading: 'Basic',
      component: TextField.TextFieldBasic,
      path: require('!!raw-loader!@pages/text-field/examples/TextFieldBasic')
        .default,
    },
    {
      heading: 'Max length',
      component: TextField.TextFieldMaxLength,
      path: require('!!raw-loader!@pages/text-field/examples/TextFieldMaxLength')
        .default,
    },
  ],
  toggle: [
    {
      heading: 'Basic',
      component: Toggle.ToggleBasic,
      path: require('!!raw-loader!@pages/toggle/examples/ToggleBasic').default,
    },
  ],
};

export default pathExample;
