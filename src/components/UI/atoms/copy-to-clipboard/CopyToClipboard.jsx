import styles from './CopyToClipboard.module';
import PropTypes from 'prop-types';

function CopyToClipboard({text}) {
  const copy = () => {
    navigator.clipboard.writeText(text);
  };
  return <i onClick={copy} className={`${styles.copy} fal fa-copy`} />;
}

CopyToClipboard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CopyToClipboard;
