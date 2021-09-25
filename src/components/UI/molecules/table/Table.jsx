import styles from './Table.module';
import PropTypes from 'prop-types';
import { useContext, createContext, memo } from 'react';
import Column from './Column';
import HeaderCell from './HeaderCell';
import Row from './Row';
import Cell from './Cell';
import { findPropsChildren } from '~/helpers/reactComponent';

const TableContext = createContext();

export const useTableContext = () => useContext(TableContext);

const Table = ({ children, data, size = 'medium' }) => {
	let columnsData = [];

	children.map((child) => {
		const { props } = child;
		const column = props.children;

		columnsData.push({
			...props,
			header: findPropsChildren(column, 'header'),
			key: findPropsChildren(column, 'dataKey'),
			...column,
		});
	});

	columnsData = columnsData.filter(
		(row) => row.children && delete row.children
	);


	return (
		<TableContext.Provider value={{ data, columnsData }}>
			<table className={`${styles['table']} ${styles['size']}`}>
				<thead>
					<tr>
						{columnsData.map(({ header }, index) => {
							return <HeaderCell key={index} header={header} />;
						})}
					</tr>
				</thead>

				<tbody>
					{data.map((item, index) => {
						return <Row key={index} item={item} />;
					})}
				</tbody>
			</table>
		</TableContext.Provider>
	);
};

Table.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export {
  Column,
  HeaderCell,
  Row,
  Cell
}

export default memo(Table);
