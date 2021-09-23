import styles from './Table.module';

const Cell = ({ dataKey, heading, children, width }) => {
	return (
		<td width={width}>
      <span className={styles['heading-mobile']}>{heading}</span>
			<span className={styles.content}>{children}</span>
		</td>
	);
};

export default Cell;