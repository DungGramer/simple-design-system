import Avatar from '@atoms/avatar/Avatar';
import { FaArrowDown } from 'react-icons/fa';
import { picsumURL } from '~/mock/imageMockup';

const AvatarStatus = () => (
  <>
    <Avatar status="online" src={picsumURL()} />
    <Avatar status="offline" src={picsumURL()} />
    <Avatar status="busy" src={picsumURL()} />
    <FaArrowDown />
  </>
);

export default AvatarStatus;
