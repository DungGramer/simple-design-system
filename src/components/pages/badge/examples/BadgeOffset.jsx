import Badge from '@molecules/badge/Badge';
import { Folder } from 'iconsax-react';

const BadgeOffset = () => {
  return (
    <>
      <div style={{ width: "35px" }}>
        <Badge appearance="dot" direction="top right" data={5} size="small" offset={[11, -10]}>
          <Folder size="32" />
        </Badge>
      </div>
    </>
  )
}

export default BadgeOffset;