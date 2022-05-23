import { useEffect, useState } from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [interNumber, setInterNumber] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setInterNumber((prevNumber) => prevNumber / 1.3);
      setProgress((progress) => progress + interNumber);
    }, 200);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <div className={styles.loading}>
      <div
        className={styles['loading__progress']}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default Loading;
