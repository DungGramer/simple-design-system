import Toggle from '@atoms/toggle/Toggle';
import PropTypes from 'prop-types';
import { useState } from 'react';

function TogglePage(props) {
    const [checked, setChecked] = useState(false);

    const handleToggle = () => setChecked(!checked);
  return (
    <div>
      <h1>Toggle</h1>
      <Toggle onClick={handleToggle} checked={checked} />
    </div>
  );
}

TogglePage.propTypes = {};

export default TogglePage;
