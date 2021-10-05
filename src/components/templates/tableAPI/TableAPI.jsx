import Table, { Cell, HeaderCell, Column } from '@molecules/table/Table';
import { useTranslation } from 'react-i18next';

const TableAPI = ({ data }) => {
	const { t } = useTranslation();

	return (
		<Table data={data}>
			<Column>
				<HeaderCell header={t('Property')} />
				<Cell dataKey="property" />
			</Column>
			<Column>
				<HeaderCell header={t('Description')} />
				<Cell dataKey="description" />
			</Column>
			<Column>
				<HeaderCell header={t('Type')} />
				<Cell dataKey="type" />
			</Column>
			<Column>
				<HeaderCell header={t('Default')} />
				<Cell dataKey="default" />
			</Column>
		</Table>
	);
};

export default TableAPI;
