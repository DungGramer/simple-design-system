import styles from './Flag.module';
import PropTypes from 'prop-types';
import Icon from '@atoms/icon/Icon';

const FlagAction = ({ actions }) => {
  return (
    <div className={styles['flag-action']}>
      {actions.map((action, index) => (
        <a key={index} href={action.href} onClick={action.onClick} {...action}>
          {action.content}
        </a>
      ))}
    </div>
  );
};

const Flag = ({ appearance, description, title, actions }) => {
  return (
    <article className={`${styles['flag']} ${styles[appearance]}`}>
      <div className={styles['flag-icon']}>
        <Icon.Type type={appearance} />
      </div>

      <div className={styles['flag-content']}>
        <span className={styles['flag-title']}>{title}</span>
        {description && <p className={styles['flag-description']}>{description}</p>}
        {actions && (
          <div className={styles['flag-actions']}>
            <FlagAction actions={actions} />
          </div>
        )}
      </div>
    </article>
  );
};

Flag.propTypes = {
  appearance: PropTypes.oneOf(['information', 'warning', 'error', 'success']),
};

Flag.defaultProps = {
  icon: 'fas fa-info-circle',
  appearance: 'info',
};

export default Flag;
