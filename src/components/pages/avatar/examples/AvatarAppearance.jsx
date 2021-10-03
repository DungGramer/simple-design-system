import Avatar from '@atoms/avatar/Avatar';
import { picsumURL } from '~/mock/imageMockup';

const AvatarAppearance = () => (
  <>
    <Avatar appearance="circle" src={picsumURL()} />
    <Avatar appearance="square" src={picsumURL()} />
  </>
);

export default AvatarAppearance;