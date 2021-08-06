import styles from './CopyToClipboard.module';
import PropTypes from 'prop-types';

function CopyToClipboard({text}) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  return <i onClick={handleCopy} className={`${styles.copy} fal fa-copy`} />;
}

CopyToClipboard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CopyToClipboard;
