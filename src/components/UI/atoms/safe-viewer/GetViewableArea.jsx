import React from 'react';
import { isApple } from '~/constants/validates';
import useSafeViewer from '@components/hooks/useSafeViewer';
import styles from './GetViewableArea.module.scss';

const GetViewableArea = () => {
  if (!isApple()) return null;

  const gapSelector = styles['viewable-space'];
  useSafeViewer(`.${gapSelector}`);
  return <div className={gapSelector} />;
};

export default GetViewableArea;
