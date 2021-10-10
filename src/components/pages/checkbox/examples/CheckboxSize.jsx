import Checkbox from '@atoms/checkbox/Checkbox';

const CheckboxSize = () => {
  return (
    <>
      <Checkbox size="small" id="small">Small</Checkbox>
      <Checkbox size="medium" id="medium">Medium</Checkbox>
      <Checkbox size="large" id="large">Large</Checkbox>
      <Checkbox size="xlarge" id="xlarge">X-large</Checkbox>
    </>
  );
};

export default CheckboxSize;