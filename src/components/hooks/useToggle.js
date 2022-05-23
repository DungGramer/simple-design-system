import { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [open, setOpen] = useState(initialValue);

  const toggleOpen = () => setOpen(!open);

  return [open, toggleOpen];
};

export default useToggle;
