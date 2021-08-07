import { useEffect, useState } from 'react';


/**
 * Set position Relative to the parent element
 * @param {Ref} childRef - The child ref element
 * @param {Variable} dependencies - condition to set the parent
 * @return {HTMLElement} The parent element
 *
 * @example useSetRelativeParent(badgeRef, direction)
 * @example const { parent } = useSetRelativeParent(badgeRef, direction)
 */

const useSetRelativeParent = (childRef, dependencies) => {
  const [parent, setParent] = useState('');

  const setRelativeParent = () => {
    const parentRef = childRef.current.parentElement;
    parentRef.style.position = 'relative';
    setParent(parentRef);
  };

  useEffect(() => {
    setRelativeParent();
  }, [dependencies || null]);

  return { parent };
};

export default useSetRelativeParent;
