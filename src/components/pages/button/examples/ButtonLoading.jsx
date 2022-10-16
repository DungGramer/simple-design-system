import Button from '@atoms/button/Button';
import { useState, useCallback } from 'react';

const ButtonLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);

  const handleClick = useCallback((setLoading) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Button
        title="Click me"
        loading={isLoading}
        onClick={() => handleClick(setIsLoading)}
        type="primary"
        icon="fas fa-search"
      />
      <Button title="Click me" loading={isLoading2} onClick={() => handleClick(setIsLoading2)} />
      <Button
        icon="fas fa-search"
        loading={isLoading3}
        onClick={() => handleClick(setIsLoading3)}
        shape="circle"
      />
    </>
  );
};

export default ButtonLoading;
