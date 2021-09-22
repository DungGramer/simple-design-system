import ButtonDisabled from '@pages/button-page/examples/ButtonDisabled';
import ButtonIcon from '@pages/button-page/examples/ButtonIcon';
import ButtonLoading from '@pages/button-page/examples/ButtonLoading';
import ButtonSize from '@pages/button-page/examples/ButtonSize';
import ButtonType from '@pages/button-page/examples/ButtonType';

const pathExample = {
  button: [
    {
      heading: 'Type',
      component: ButtonType,
      path: require('!!raw-loader!@pages/button-page/examples/ButtonType.jsx').default,
    },
    {
      heading: 'Size',
      component: ButtonSize,
      path: require('!!raw-loader!@pages/button-page/examples/ButtonSize.jsx').default,
    },
    {
      heading: 'Icon',
      component: ButtonIcon,
      path: require('!!raw-loader!@pages/button-page/examples/ButtonIcon.jsx').default,
    },
    {
      heading: 'Loading',
      component: ButtonLoading,
      path: require('!!raw-loader!@pages/button-page/examples/ButtonLoading.jsx').default,
    },
    {
      heading: 'Disabled',
      component: ButtonDisabled,
      path: require('!!raw-loader!@pages/button-page/examples/ButtonDisabled.jsx').default,
    }
  ]
}

export default pathExample;
