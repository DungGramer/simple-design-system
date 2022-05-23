import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';

export const API = () => {
  const { t } = useTranslation();
  const data = [
    {
      property: <code>children</code>,
      description: t('Contains child elements including the Breadcrumb.Item.'),
      type: 'node',
    },
    {
      property: <code>separator</code>,
      description: t('The separator between Breadcrumb.Item elements.'),
      type: 'string',
      default: '/',
    },
  ];
  const BreadcrumbItemData = [
    {
      property: <code>children</code>,
      description: t('The content of the Breadcrumb'),
      type: 'node',
    },
    {
      property: <code>href</code>,
      description: t('Target of hyperlink'),
      type: 'string',
    },
  ];
  return (
    <div>
      <h4>{t('<Breadcrumb>')}</h4>
      <TableAPI data={data} />

      <h4>{t('<Breadcrumb.Item>')}</h4>
      <TableAPI data={BreadcrumbItemData} />
    </div>
  );
};
