import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/TableAPI/TableAPI';

export const API = () => {
	const { t } = useTranslation();
	const data = [
    {
      property: <code>parentRef</code>,
      description: t('The reference of the parent element'),
      type: 'React.RefObject',
    },
    {
      property: <code>overlay</code>,
      description: t('The content of the dropdown'),
      type: 'React.ReactNode',
    },
    {
      property: <code>onClick</code>,
      description: t('The callback function when the dropdown is clicked'),
      type: 'Function',
    },
    {
      property: <code>isOpen</code>,
      description: t('Whether the dropdown is open'),
      type: 'Boolean',
      default: 'false',
    },
    {
      property: <code>direction</code>,
      description: t('The direction of the dropdown'),
      type: 'String',
      default: 'left',
    }
  ];
	return (
		<div>
			<h3>{t('API')}</h3>
			<h4>{t('<DropdownMenu />')}</h4>

			<TableAPI data={data} />
		</div>
	);
};
