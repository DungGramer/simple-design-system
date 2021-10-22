import styles from './Tooltip.module';
import PropTypes from 'prop-types';

const Tooltip = ({children, content, position}) => {
  return <div className={`${styles['tooltip']} ${styles[position]}`}>
    <div className={styles['tooltip-content']}>
      {content}
    </div>
    <div className={styles['tooltip-arrow']}></div>
    <div className={styles['tooltip-inner']}>
      {children}
    </div>
  </div>;
}

Tooltip.propTypes = {};

export default Tooltip;
