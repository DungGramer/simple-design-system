import useToggle from '@components/hooks/useToggle';
import ToggleButton from '@molecules/toggle-button/ToggleButton';

const ToggleBasic = () => {
  const [checked, handleChecked] = useToggle(false);

  return (
    <>
      <ToggleButton
        onClick={handleChecked}
        checked={checked}
        iconFalse="fas fa-times"
        iconTrue="fas fa-check"
      />
    </>
  );
};

export default ToggleBasic;
