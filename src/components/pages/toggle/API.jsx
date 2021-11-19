import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';

export const API = () => {
  const { t } = useTranslation();
  const data = [
    {
      property: <code>onClick</code>,
      description: t(
        'Handler to be called when native click event happens internally.'
      ),
      type: 'function',
    },
    {
      property: <code>checked</code>,
      description: t('The value of the toggle.'),
      type: 'boolean',
    },
    {
      property: <code>iconFalse</code>,
      description: t('The icon to be displayed when the toggle is unchecked.'),
      type: 'string',
    },
    {
      property: <code>iconTrue</code>,
      description: t('The icon to be displayed when the toggle is checked.'),
      type: 'string',
    },
  ];
  return (
    <div>
      <h3>{t('API')}</h3>
      <h4>{t('<Toggle />')}</h4>

      <TableAPI data={data} />
    </div>
  );
};
