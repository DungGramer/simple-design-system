import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';
import CodeColumn from '@templates/tableAPI/CodeColumn';

export const API = () => {
  const { t } = useTranslation();
  const data = [
    {
      property: <code>icon</code>,
      description: t('Show icon in center'),
      type: 'boolean',
    },
    {
      property: <code>direction</code>,
      description: t('Direction of divider'),
      type: <CodeColumn data={['horizontal', 'vertical']} />,
      default: <code>horizontal</code>,
    },
  ];
  return (
    <div>
      <h3>{t('API')}</h3>
      <h4>{t('<Divider />')}</h4>

      <TableAPI data={data} />
    </div>
  );
};
