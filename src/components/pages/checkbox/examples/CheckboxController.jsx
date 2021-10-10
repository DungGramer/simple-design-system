import Checkbox from '@atoms/checkbox/Checkbox';
import { useState } from 'react';

const CheckboxController = () => {
  const [checked, setChecked] = useState(false);

  const onChange = () => setChecked(!checked);

  return (
    <>
      <Checkbox id="controller" checked={checked} onClick={onChange} onChange={onChange}>
        Checkbox: {checked ? 'checked' : 'unchecked'}
      </Checkbox>
    </>
  );
};

export default CheckboxController;