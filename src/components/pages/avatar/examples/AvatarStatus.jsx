import Avatar from '@atoms/avatar/Avatar';
import { ArrowDown3 } from 'iconsax-react';
import { picsumURL } from '~/mock/imageMockup';

const AvatarStatus = () => (
  <>
    <Avatar status="online" src={picsumURL()} />
    <Avatar status="offline" src={picsumURL()} />
    <Avatar status="busy" src={picsumURL()} />
    <ArrowDown3 size="32" color="#2ccce4"/>
  </>
);

export default AvatarStatus;
