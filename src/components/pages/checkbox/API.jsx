import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';
import CodeColumn from '@templates/tableAPI/CodeColumn';

export const API = () => {
  const { t } = useTranslation();
  const data = [
    {
      property: <code>id</code>,
      description: t('Id assigned to checkbox'),
      type: 'string',
    },
    {
      property: <code>children</code>,
      description: t('Content of the checkbox'),
      type: 'node',
    },
    {
      property: <code>size</code>,
      description: t('The size of the checkbox'),
      type: <CodeColumn data={['small', 'medium', 'large', 'xlarge']} />,
      default: <code>small</code>,
    },
    {
      property: <code>checked</code>,
      description: t('The checked state of the checkbox'),
      type: <code>boolean</code>,
      default: <code>false</code>,
    },
    {
      property: <code>onClick</code>,
      description: t('The function to call when the checkbox is clicked'),
      type: <code>function</code>,
    },
  ];
  return (
    <div>
      <h3>{t('API')}</h3>
      <h4>{t('<Checkbox>')}</h4>

      <TableAPI data={data} />
    </div>
  );
};
