import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/TableAPI/TableAPI';

export const API = () => {
	const { t } = useTranslation();
	const data = [
		{
			property: <code>total</code>,
			description: t('Total number of data items'),
			type: 'number',
		},
    {
      property: <code>defaultPageSize</code>,
      description: t('Default page size'),
      type: 'number',
      default: 1
    },
    {
      property: <code>defaultCurrent</code>,
      description: t('Default initial page number'),
      type: 'number',
      default: 1
    }
	];
	return (
		<div>
			<h3>{t('API')}</h3>
			<h4>{t('<Pagination />')}</h4>

			<TableAPI data={data} />
		</div>
	);
};
