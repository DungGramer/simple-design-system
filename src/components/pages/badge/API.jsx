import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';
import CodeColumn from '@templates/tableAPI/CodeColumn';

export const API = () => {
	const { t } = useTranslation();
	const data = [
		{
			property: <code>children</code>,
			description: t('The children you want to show badge'),
			type: 'node',
		},
    {
      property: <code>appearance</code>,
      description: t('Affects the visual style of the badge'),
      type: <CodeColumn data={['primary', 'primaryInverted', 'important', 'added', 'removed', 'success', 'danger', 'warning', 'dot',]} />,
      default: <code>dot</code>,
    },
    {
      property: <code>max</code>,
      description: t('The maximum number of number to display'),
      type: 'number',
    },
    {
      property: <code>size</code>,
      description: t('The size of the badge'),
      type: <CodeColumn data={['small', 'large']} />,
    },
    {
      property: <code>icon</code>,
      description: t('The icon to display'),
      type: 'string',
    },
    {
      property: <code>direction</code>,
      description: t('The direction of the badge'),
      type: <CodeColumn data={['left-top', 'top-right', 'right-bottom', 'bottom-left']} />,
    },
    {
      property: <code>offset</code>,
      description: t('The position of the badge'),
      type: <code>[number, number]</code>
    }
	];
	return (
		<div>
			<h3>{t('API')}</h3>
			<h4>{t('<Badge>')}</h4>

			<TableAPI data={data} />
		</div>
	);
};
