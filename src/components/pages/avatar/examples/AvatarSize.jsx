import Avatar from "@atoms/avatar/Avatar";
import { picsumURL } from "~/mock/imageMockup";

const AvatarSize = () => (
  <>
    <Avatar size="xsmall" src={picsumURL(20)} />
    <Avatar size="small" src={picsumURL(24)} />
    <Avatar size="medium" src={picsumURL(32)} />
    <Avatar size="large" src={picsumURL(40)} />
    <Avatar size="xlarge" src={picsumURL(96)} />
    <Avatar size="xxlarge" src={picsumURL(128)} />
  </>
);

export default AvatarSize;