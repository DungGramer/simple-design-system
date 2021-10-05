import styles from './Badge.module';
import PropTypes from 'prop-types';
import { spaceToDash } from '~/constants/converter';
import { useEffect, useRef } from 'react';

/**
 * Badge component
 * @param {string} appearance - Appearance of the badge
 * @param {node} children - Content of the badge
 * @param {string} max - Max number of characters to show
 * @param {string} size - Size of the badge
 * @param {string} icon - The class name of the icon
 * @param {string} direction - The direction of the badge
 * @param {array} offset - The position of the badge
 */
function Badge({ children, appearance, max, size, icon, direction, offset, data }) {
	const prefix = switchPrefix(appearance);
	const suffix = max < Number(data) ? `${max}+` : data;

	const badgeRef = useRef(null);

	const [direction1, direction2] = direction?.split(/ |\-/) || [null, null];

	const setOffset = () => {
		if (!offset || (direction1 === null && direction2 === null)) return;

		badgeRef.current.style[direction1] = offset?.[0] + 'px';
		badgeRef.current.style[direction2] = offset?.[1] + 'px';
	};

	useEffect(() => {
		setOffset();
	}, [direction, offset]);

	return (
    <div className={styles['badge-container']}>
			<span
				ref={badgeRef}
				className={`${styles[appearance]} ${styles.badge || ''} ${
					styles[size] || ''
				} ${styles[direction] || ''} ${styles[spaceToDash(direction)] || ''}`}
			>
				{icon || prefix} {suffix}
			</span>
      {children}
		</div>
	);
}

function switchPrefix(appearance) {
	switch (appearance) {
		case 'success':
			return '✔';
		case 'warning':
			return '⚠';
		case 'danger':
			return '✖';
		case 'info':
			return 'ℹ';
		case 'added':
			return '+';
		case 'removed':
			return '-';
		default:
			return '';
	}
}

Badge.propTypes = {
	children: PropTypes.node,
	appearance: PropTypes.oneOf([
		'primary',
		'primaryInverted',
		'important',
		'added',
		'removed',
		'success',
		'danger',
		'warning',
		'dot',
	]),
	max: PropTypes.number,
	size: PropTypes.oneOf(['small', 'large']),
	icon: PropTypes.string,
	direction: PropTypes.oneOf([
		'left-top',
		'left top',
		'top-left',
		'top left',

		'top-right',
		'top right',
		'right-top',
		'right top',

		'right-bottom',
		'right bottom',
		'bottom-right',
		'bottom right',

		'bottom-left',
		'bottom left',
		'left-bottom',
		'left bottom',
	]).isRequired,
	offset: PropTypes.arrayOf(PropTypes.number, PropTypes.number),
};

Badge.defaultProps = {
	appearance: 'dot',
};

export default Badge;
