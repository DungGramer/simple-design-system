import Badge from '@molecules/badge/Badge';
import { FaFolder } from 'react-icons/fa';

const BadgeBasic = () => {
  return (
    <>
      <div>
        <Badge appearance="dot" direction="top right">
          <FaFolder size="32" style={{ fontSize: '1.5rem' }} />
        </Badge>
      </div>

      <div style={{ width: '35px' }}>
        <Badge appearance="dot" direction="top right" size="small" data={5}>
          <FaFolder size="32" style={{ fontSize: '1.5rem' }} />
        </Badge>
      </div>
    </>
  );
};

export default BadgeBasic;
