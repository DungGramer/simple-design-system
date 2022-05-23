import Avatar from '@atoms/avatar/Avatar';
import { picsumURL } from '~/mock/imageMockup';

const AvatarGroup = () => (
  <>
    <Avatar.Group size="large" length={5}>
      {Array.from(Array(8)).map((_, i) => (
        <Avatar key={i} src={picsumURL()} />
      ))}
    </Avatar.Group>
  </>
);

export default AvatarGroup;
