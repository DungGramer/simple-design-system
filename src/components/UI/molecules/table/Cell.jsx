const Cell = ({ dataKey, heading, children, width }) => {
	return (
		<td width={width} data-heading={heading}>
			{children}
		</td>
	);
};

export default Cell;