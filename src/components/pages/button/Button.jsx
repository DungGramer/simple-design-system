import './Button.module';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';
import '/node_modules/highlight.js/styles/a11y-light.css';

function Button(props) {
  return (
    <div>
      Button
      <Highlight className="html">
        {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>

</body>
</html>`}
      </Highlight>
    </div>
  );
}

Button.propTypes = {};

export default Button;

