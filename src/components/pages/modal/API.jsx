import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';

export const API = () => {
  const { t } = useTranslation();
  const modal = [
    {
      property: <code>visible</code>,
      description: t('Whether the modal dialog is visible or not'),
      type: 'boolean',
    },
    {
      property: <code>handleClose</code>,
      description: t('Function to close the modal dialog'),
      type: 'function',
    },
    {
      property: <code>strictClose</code>,
      description: t(
        'Whether the modal dialog can be closed by clicking outside of it'
      ),
      type: 'boolean',
    },
  ];

  const modalHeader = [
    {
      property: <code>children</code>,
      description: t('The content of the modal header'),
      type: 'node',
    },
    {
      property: <code>closeButton</code>,
      description: t('Whether the modal header has a close button'),
      type: 'boolean',
    },
  ];

  const modalBody = [
    {
      property: <code>children</code>,
      description: t('The content of the modal body'),
      type: 'node',
    },
  ];

  const modalFooter = [
    {
      property: <code>children</code>,
      description: t('The content of the modal footer'),
      type: 'node',
    }
  ];

  const modalFooterTemplate = [
    {
      property: <code>okText</code>,
      description: t('The text of the OK button'),
      type: 'string',
    },
    {
      property: <code>cancelText</code>,
      description: t('The text of the Cancel button'),
      type: 'string',
    },
    {
      property: <code>onOk</code>,
      description: t('Specify a function that will be called when a user clicks the OK button'),
      type: 'function',
    },
    {
      property: <code>onCancel</code>,
      description: t('Specify a function that will be called when a user clicks mask, close button on top right or Cancel button'),
      type: 'function',
    }
  ]
  return (
    <div>
      <h3>{t('API')}</h3>

      <h4>{t('<Modal>')}</h4>
      <TableAPI data={modal} />

      <h4>{t('<Modal.Header>')}</h4>
      <TableAPI data={modalHeader} />

      <h4>{t('<Modal.Body>')}</h4>
      <TableAPI data={modalBody} />

      <h4>{t('<Modal.Footer>')}</h4>
      <TableAPI data={modalFooter} />

      <h4>{t('<Modal.Footer />')}</h4>
      <TableAPI data={modalFooterTemplate} />
    </div>
  );
};
