import styles from './CopyToClipboard.module';
import PropTypes from 'prop-types';
import clickableEffect from '@atoms/clickable-effect/ClickableEffect';

/**
 * CopyToClipboard
 * @param {string} text - text to copy
 *
 **/
function CopyToClipboard({ text }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  return <i onClick={handleCopy} className={`${styles.copy} far fa-copy`} />;
}

CopyToClipboard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CopyToClipboard;
