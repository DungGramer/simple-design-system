import './Button.module';
import PropTypes from 'prop-types';
import '/node_modules/highlight.js/styles/a11y-light.css';

import CopyToClipboard from '@atoms/copy-to-clipboard/CopyToClipboard';
import Tabs from '@molecules/tabs/Tabs';
import Checkbox from '@pages/checkbox/Checkbox';
import CodePage from '@pages/code-page/CodePage';
import Flag from '@pages/flag/Flag';
import { useThemeContext } from '~/context/themeContext/themeContext';
import CodeHighlight from '@atoms/code-highlight/CodeHighlight';

const data = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>

</body>
</html>`;

function Button(props) {
  const { changeTheme } = useThemeContext();

  return (
    <div>
      <h1>Button</h1>
      <CodeHighlight data={data} />
      {/* <CopyToClipboard text={data} /> */}

      <Tabs title={['check Box', 'Code', 'Flag']}>
        <Checkbox />
        <CodePage />
        <Flag />
      </Tabs>

      <button onClick={changeTheme}>Change theme</button>
    </div>
  );
}

Button.propTypes = {};

export default Button;
