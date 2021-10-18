import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';
import CodeColumn from '@templates/tableAPI/CodeColumn';

export const API = () => {
	const { t } = useTranslation();
	const data = [
		{
			property: <code>children</code>,
			description: t('Elements to be rendered inside the lozenge'),
			type: 'node',
		},
    {
      property: <code>appearance</code>,
      description: t('The appearance of the lozenge'),
      type: <CodeColumn data={[
        'success',
        'removed',
        'inprogress',
        'new',
        'moved',
      ]} />,
    },
    {
      property: <code>isBold</code>,
      description: t('Determines whether to apply the bold style or not'),
      type: 'boolean',
    },
    {
      property: <code>maxWidth</code>,
      description: t('max-width of lozenge container'),
      type: 'number',
      default: '200',
    }
	];
	return (
		<div>
			<h3>{t('API')}</h3>
			<h4>{t('<Lozenge>')}</h4>

			<TableAPI data={data} />
		</div>
	);
};
