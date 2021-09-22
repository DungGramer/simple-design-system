import styles from './Table.module';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { useContext, createContext } from 'react';

const TableContext = createContext();

const useTableContext = () => {
	return useContext(TableContext);
};

const Table = ({ children, data, headers, size = 'medium' }) => {
	const tableData = data.map((row, index) => {
		let rowData = [];
		let rowIndex = 0;
		for (const key in row) {
			if (row.hasOwnProperty(key)) {
				rowData.push({
					key: headers[rowIndex],
					value: row[key],
				});
				rowIndex++;
			}
		}
		console.log(`📕 rowData - 7:Table.jsx  \n`, rowData);
		return (
			<tr key={index}>
				{rowData.map((cell, index) => (
					<td key={index} data-heading={cell.key}>
						{cell.value}
					</td>
				))}
			</tr>
		);
	});

	return (
		<TableContext.Provider value={{data}}>
			<table className={`${styles['table']} ${styles['size']}`}>
				<thead>
					<tr>
						{headers.map((header, index) => (
							<th key={index}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>{tableData}</tbody>
			</table>
		</TableContext.Provider>
	);
};

const HeaderCell = ({ children }) => <th>{children}</th>;

const Cell = ({ dataKey }) => {
  const { data } = useTableContext();
  const cellData = data.map((row) => row[dataKey]);

  return cellData;
};

const Column = ({ children }) => {
  return <td>{children}</td>;
}

Table.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	headers: PropTypes.arrayOf(PropTypes.string).isRequired,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default memo(Table);
