import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';
import CodeColumn from '@templates/tableAPI/CodeColumn';

export const API = () => {
  const { t } = useTranslation();
  const data = [
    {
      property: <code>size</code>,
      description: t('Size of the spinner.'),
      type: <CodeColumn data={['xsmall', 'small', 'medium', 'large', 'xlarge']} />,
      default: <code>small</code>,
    },
  ];
  return (
    <div>
      <h3>{t('API')}</h3>
      <h4>{t('<Spinner />')}</h4>

      <TableAPI data={data} />
    </div>
  );
};
