import Divider from '@molecules/divider/Divider';
import React from 'react';

const DividerDirection = () => {
  return (
    <>
      <Divider direction="horizontal" />
      <Divider direction="vertical" style={{ height: 50 }} />
    </>
  );
};

export default DividerDirection;
