import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';

export const API = () => {
  const { t } = useTranslation();
  const data = [
    {
      property: <code>children</code>,
      description: t('The children elements of the Tabs.'),
      type: 'ReactNode',
    },
    {
      property: <code>title</code>,
      description: t('The title of the Tabs.'),
      type: 'string',
    },
    {
      property: <code>defaultTab</code>,
      description: t('The default tab to be selected.'),
      type: 'number',
      default: '0',
    },
  ];
  return (
    <div>
      <h3>{t('API')}</h3>
      <h4>{t('<Tabs>')}</h4>

      <TableAPI data={data} />
    </div>
  );
};
