import Badge from "@molecules/badge/Badge";
import { Folder } from "iconsax-react";

const BadgeSize = () => {
  return (
    <>
      <div style={{ width: "35px" }}>
        <Badge appearance="dot" direction="top right" size="small" data={5}>
          <Folder />
        </Badge>
      </div>

      <div style={{ width: "40px" }}>
        <Badge appearance="dot" direction="top right" size="large" data={5}>
          <Folder />
        </Badge>
      </div>
    </>
  )
}

export default BadgeSize;