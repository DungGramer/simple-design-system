import Button from '@atoms/button/Button';
import Dropdown from '@atoms/dropdown/Dropdown';
import Menu from '@atoms/menu/Menu';
import useToggle from '@components/hooks/useToggle';
import { useRef } from 'react';

const menu = (
  <>
    {new Array(30).fill(0).map((_, i) => (
      <Menu key={i} content={`Menu item ${i}`} />
    ))}
  </>
);

const DropdownBasic = () => {
  const btnRef = useRef();
  const [open, toggleOpen] = useToggle(false);

  return (
    <>
      <Button ref={btnRef} onClick={toggleOpen}>
        <span>Click me</span>
        <Dropdown parentRef={btnRef} overlay={menu} onClick={toggleOpen} isOpen={open} />
      </Button>
    </>
  );
};

export default DropdownBasic;
