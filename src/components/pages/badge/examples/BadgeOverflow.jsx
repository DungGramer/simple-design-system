import Badge from '@molecules/badge/Badge';
import { Flag } from 'iconsax-react';

const BadgeOverflow = () => {
  return <>
    <div style={{ width: "35px" }}>
      <Badge appearance="dot" direction="top right" size="small" data={10} max={5}>
        <Flag size="32" />
      </Badge>
    </div>
  </>;
};

export default BadgeOverflow;
