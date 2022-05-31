import Badge from '@molecules/badge/Badge';
import { FaFolder } from 'react-icons/fa';

const BadgeSize = () => {
  return (
    <>
      <div style={{ width: '35px' }}>
        <Badge appearance="dot" direction="top right" size="small" data={5}>
          <FaFolder />
        </Badge>
      </div>

      <div style={{ width: '40px' }}>
        <Badge appearance="dot" direction="top right" size="large" data={5}>
          <FaFolder />
        </Badge>
      </div>
    </>
  );
};

export default BadgeSize;
