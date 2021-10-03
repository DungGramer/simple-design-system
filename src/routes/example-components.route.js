import * as Avatar from '@pages/avatar/examples';
import * as Button from '@pages/button/examples';
import * as Banner from '@pages/banner/examples';
import * as Badge from '@pages/badge/examples';


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
  ]
}

export default pathExample;
