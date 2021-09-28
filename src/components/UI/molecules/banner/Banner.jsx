import styles from './Banner.module';
import PropTypes from 'prop-types';

const Banner = ({ icon, content, type }) => {
	return (
		<div className={`${styles['banner']} ${styles[type]}`}>
			<i className={icon} />
			<p>{content}</p>
		</div>
	);
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
