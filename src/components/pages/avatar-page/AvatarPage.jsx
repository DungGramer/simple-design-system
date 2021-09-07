import './AvatarPage.module';
import PropTypes from 'prop-types';
import Avatar from '@atoms/avatar/Avatar';
import { picsumURL } from '~/mock/imageMockup';

function AvatarPage(props) {
  const url = picsumURL(96, 96, 6);
  return (
    <div>
      <Avatar src={url} size="large" status="online" />

      <Avatar.Group size="xxlarge" length={4}>
        <Avatar src={picsumURL(96, 96, 1)} />
        <Avatar src={picsumURL(96, 96, 2)} />
        <Avatar src={picsumURL(96, 96, 3)} />
        <Avatar src={picsumURL(96, 96, 4)} />
        <Avatar src={picsumURL(96, 96, 5)} />
        <Avatar src={picsumURL(96, 96, 6)} />
        <Avatar src={picsumURL(96, 96, 7)} />
        <Avatar src={picsumURL(96, 96, 8)} />
        <Avatar src={picsumURL(96, 96, 9)} />
        <Avatar src={picsumURL(96, 96, 10)} />
      </Avatar.Group>
    </div>
  );
}

AvatarPage.propTypes = {};

export default AvatarPage;
