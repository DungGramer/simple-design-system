import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';

export const API = () => {
	const { t } = useTranslation();
	const data = [
		{
			property: <code>min</code>,
			description: t('Sets the minimum value of the range.'),
			type: 'number',
      default: '0',
		},
    {
      property: <code>max</code>,
      description: t('Sets the maximum value of the range.'),
      type: 'number',
      default: '100',
    },
    {
      property: <code>step</code>,
      description: t('Sets the step value of the range.'),
      type: 'number',
      default: '1',
    },
    {
      property: <code>defaultValue</code>,
      description: t('Sets the default value if range is not set.'),
      type: 'number',
    },
    {
      property: <code>onChange</code>,
      description: t('Called when the range value changes.'),
      type: 'function',
    },
    {
      property: <code>disabled</code>,
      description: t('Disables the range.'),
      type: 'boolean',
    }
	];
	return (
		<div>
			<h3>{t('API')}</h3>
			<h4>{t('<Range />')}</h4>

			<TableAPI data={data} />
		</div>
	);
};
