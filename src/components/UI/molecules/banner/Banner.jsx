import styles from './Banner.module';
import PropTypes from 'prop-types';

/**
 * Banner displays a message to the user.
 *
 * @param {string} icon - icon class name
 * @param {string} children - text to display
 * @param {string} type - type of banner
 *
 * @example
 * <Banner type="error">Error goes here</Banner>
 */

const Banner = ({ icon, children, type }) => {
	return (
		<div className={`${styles['banner']} ${styles[type]}`}>
			<div className={styles.container}>
				<IconType type={type} icon={icon} />
				<p>{children}</p>
			</div>
		</div>
	);
};

const IconType = ({ icon, type }) => {
	let iconClass = icon || null;

	if (iconClass === null) {
		switch (type) {
			case 'error':
				iconClass = 'fas fa-exclamation-circle';
				break;
			case 'warning':
				iconClass = 'fas fa-exclamation-triangle';
				break;
			default:
				iconClass = '';
				break;
		}
	}
	return <i className={iconClass} />;
};

Banner.propTypes = {
	icon: PropTypes.string,
	content: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['warning', 'error', 'announcement']),
};

Banner.defaultProps = {
	type: 'warning',
};

export default Banner;
