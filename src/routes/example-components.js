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
    }
  ]
}

export default pathExample;
