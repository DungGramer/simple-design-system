import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';

export const API = () => {
  const { t } = useTranslation();
  const table = [
    {
      property: <code>children</code>,
      description: t('Elements to be rendered inside the Table'),
      type: 'ReactNode',
    },
    {
      property: <code>data</code>,
      description: t('Data to be rendered inside the Table'),
      type: 'Array',
    },
  ];
  const column = [
    {
      property: <code>children</code>,
      description: t('Elements to be rendered inside the Column'),
      type: 'ReactNode',
    },
  ];
  const headerCell = [
    {
      property: <code>header</code>,
      description: t('Header of the Column'),
      type: 'text',
    },
  ];
  const cell = [
    {
      property: <code>dataKey</code>,
      description: t('Key of the data table'),
      type: 'text',
    },
  ];
  return (
    <div>
      <h3>{t('API')}</h3>

      <h4>{t('<Table>')}</h4>
      <TableAPI data={table} />

      <h4>{t('<Column>')}</h4>
      <TableAPI data={column} />

      <h4>{t('<HeaderCell />')}</h4>
      <TableAPI data={headerCell} />

      <h4>{t('<Cell />')}</h4>
      <TableAPI data={cell} />
    </div>
  );
};
