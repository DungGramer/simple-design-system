import './DropdownMenu.module';
import PropTypes from 'prop-types';
import Dropdown from '@atoms/dropdown/Dropdown';
import Menu from '@atoms/menu/Menu';
import { useRef, useState } from 'react';

const menu = (
  <>
    <Menu href="#" content='Menu item 1' />
    <Menu href="#" content='Menu item 2' />
    <Menu href="#" content='Menu item 3' />
    <Menu href="#" content='Menu item 3' />
    <Menu href="#" content='Menu item 3' />
    <Menu href="#" content='Menu item 3' />
    <Menu href="#" content='Menu item 3' />
    <Menu href="#" content='Menu item 3' />
    <Menu href="#" content='Menu item 3' />
    <Menu href="#" content='Menu item 3' />
    <Menu href="#" content='Menu item 3' />
    <Menu href="#" content='Menu item 3' />
    <Menu href="#" content='Menu item 3' />
    <Menu href="#" content='Menu item 3' />
    <Menu href="#" content='Menu item 3' />
    <Menu href="#" content='Menu item 3' />
    <Menu href="#" content='Menu item 3' />

  </>
);

function DropdownMenu(props) {
  const btnRef = useRef();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div>
      <h1>zkjxchkzjxhc</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <button ref={btnRef} onClick={toggleOpen}>
        Click me
      </button>
      <Dropdown
        parentRef={btnRef}
        overlay={menu}
        onClick={toggleOpen}
        isOpen={open}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem, quae
        repellendus neque assumenda unde totam deleniti alias sequi,
        exercitationem, doloremque repellat laborum? Nulla veritatis nam
        provident aliquid deserunt ad.
      </p>
    </div>
  );
}

DropdownMenu.propTypes = {};

export default DropdownMenu;
