import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';
import CodeColumn from '@templates/tableAPI/CodeColumn';

export const API = () => {
  const { t } = useTranslation();
  const data = [
    {
      property: <code>title</code>,
      description: t('The bold text shown at the top of the flag'),
      type: 'string',
    },
    {
      property: <code>description</code>,
      description: t('The secondary content shown below the flag title'),
      type: 'string',
    },
    {
      property: <code>actions</code>,
      description: t('Array of clickable actions to be shown at the bottom of the flag'),
      type: t('array attributes of <a> tag'),
    },
    {
      property: <code>appearance</code>,
      description: t('Visual style to be used for the flag'),
      type: <CodeColumn data={['info', 'success', 'warning', 'error']} />,
      default: <code>info</code>,
    },
  ];
  return (
    <div>
      <h3>{t('API')}</h3>
      <h4>{t('<Flag />')}</h4>

      <TableAPI data={data} />
    </div>
  );
};
