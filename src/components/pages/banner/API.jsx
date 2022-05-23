import { useTranslation } from 'react-i18next';
import CodeColumn from '@templates/tableAPI/CodeColumn';
import TableAPI from '@templates/tableAPI/TableAPI';

export const API = () => {
  const { t } = useTranslation();
  const data = [
    {
      property: <code>children</code>,
      description: t('Content to be shown'),
      type: 'node',
    },
    {
      property: <code>type</code>,
      description: t('Visual style to be used for the banner'),
      type: <CodeColumn data={['warning', 'error', 'announcement']} />,
      default: <code>warning</code>,
    },
    {
      property: <code>icon</code>,
      description: t('Show icon of banner'),
      type: 'string',
    },
  ];

  return (
    <div>
      <h3>{t('API')}</h3>
      <h4>{t('<Banner>')}</h4>

      <TableAPI data={data} />
    </div>
  );
};
