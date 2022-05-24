import Badge from '@molecules/badge/Badge';
import { FaFolder } from 'react-icons/fa';

const BadgeOverflow = () => {
  return <>
    <div style={{ width: "35px" }}>
      <Badge appearance="dot" direction="top right" size="small" data={10} max={5}>
        <FaFolder size="32" />
      </Badge>
    </div>
  </>;
};

export default BadgeOverflow;
