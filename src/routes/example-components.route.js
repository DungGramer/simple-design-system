import * as Avatar from '@pages/avatar/examples';
import * as Button from '@pages/button/examples';
import * as Banner from '@pages/banner/examples';
import * as Badge from '@pages/badge/examples';
import * as Breadcrumb from '@pages/breadcrumb/examples';
import * as Checkbox from '@pages/checkbox/examples';
import * as Flag from '@pages/flag/examples';
import * as Image from '@pages/image/examples';
import * as Lozenge from '@pages/lozenge/examples';
import * as Modal from '@pages/modal/examples';


const pathExample = {
  avatar: [
    {
      heading: 'Appearance',
      component: Avatar.AvatarAppearance,
      path: require('!!raw-loader!@pages/avatar/examples/AvatarAppearance').default,
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
    }
  ],
  button: [
    {
      heading: 'Type',
      component: Button.ButtonType,
      path: require('!!raw-loader!@pages/button/examples/ButtonType.jsx').default,
    },
    {
      heading: 'Size',
      component: Button.ButtonSize,
      path: require('!!raw-loader!@pages/button/examples/ButtonSize.jsx').default,
    },
    {
      heading: 'Icon',
      component: Button.ButtonIcon,
      path: require('!!raw-loader!@pages/button/examples/ButtonIcon.jsx').default,
    },
    {
      heading: 'Loading',
      component: Button.ButtonLoading,
      path: require('!!raw-loader!@pages/button/examples/ButtonLoading.jsx').default,
    },
    {
      heading: 'Disabled',
      component: Button.ButtonDisabled,
      path: require('!!raw-loader!@pages/button/examples/ButtonDisabled.jsx').default,
    }
  ],
  banner: [
    {
      heading: 'Warning',
      component: Banner.BannerWarning,
      path: require('!!raw-loader!@pages/banner/examples/BannerWarning').default,
    },
    {
      heading: 'Error',
      component: Banner.BannerError,
      path: require('!!raw-loader!@pages/banner/examples/BannerError').default,
    },
    {
      heading: 'Announcement',
      component: Banner.BannerAnnouncement,
      path: require('!!raw-loader!@pages/banner/examples/BannerAnnouncement').default,
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
      path: require('!!raw-loader!@pages/breadcrumb/examples/BreadcrumbBasic').default,
    },
    {
      heading: 'Icon',
      component: Breadcrumb.BreadcrumbIcon,
      path: require('!!raw-loader!@pages/breadcrumb/examples/BreadcrumbIcon').default,
    },
    {
      heading: 'Separator',
      component: Breadcrumb.BreadcrumbSeparator,
      path: require('!!raw-loader!@pages/breadcrumb/examples/BreadcrumbSeparator').default,
    }
  ],
  checkbox: [
    {
      heading: 'Basic',
      component: Checkbox.CheckboxBasic,
      path: require('!!raw-loader!@pages/checkbox/examples/CheckboxBasic').default,
    },
    {
      heading: 'Disabled',
      component: Checkbox.CheckboxDisabled,
      path: require('!!raw-loader!@pages/checkbox/examples/CheckboxDisabled').default,
    },
    {
      heading: 'Controller',
      component: Checkbox.CheckboxController,
      path: require('!!raw-loader!@pages/checkbox/examples/CheckboxController').default,
    },
    {
      heading: 'Size',
      component: Checkbox.CheckboxSize,
      path: require('!!raw-loader!@pages/checkbox/examples/CheckboxSize').default,
    }
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
    }
  ],
  lozenge: [
    {
      heading: 'Basic',
      component: Lozenge.LozengeBasic,
      path: require('!!raw-loader!@pages/lozenge/examples/LozengeBasic').default,
    },
    {
      heading: 'Appearance',
      component: Lozenge.LozengeAppearance,
      path: require('!!raw-loader!@pages/lozenge/examples/LozengeAppearance').default,
    },
    {
      heading: 'Max width',
      component: Lozenge.LozengeMaxWidth,
      path: require('!!raw-loader!@pages/lozenge/examples/LozengeMaxWidth').default,
    }
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
    }
  ]
}

export default pathExample;
