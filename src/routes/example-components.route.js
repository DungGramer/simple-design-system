import * as Avatar from '@pages/avatar/examples';
import * as Button from '@pages/button/examples';
import * as Banner from '@pages/banner/examples';


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
      heading: 'Default',
      component: Banner.BannerDefault,
      path: require('!!raw-loader!@pages/banner/examples/BannerDefault').default,
    }
  ]
}

export default pathExample;
