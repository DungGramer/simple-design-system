import ToggleButton from '@molecules/toggle-button/ToggleButton';
import PropTypes from 'prop-types';
import { useState } from 'react';

function TogglePage(props) {
    const [checked, setChecked] = useState(false);

    const handleToggle = () => setChecked(!checked);
  return (
    <div>
      <h1>Toggle</h1>
      <ToggleButton
        onClick={handleToggle}
        checked={checked}
        iconFalse="fas fa-times"
        iconTrue="fas fa-check"
      />
    </div>
  );
}

TogglePage.propTypes = {};

export default TogglePage;
