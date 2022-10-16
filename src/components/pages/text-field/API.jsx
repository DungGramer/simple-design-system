import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';

export const API = () => {
  const { t } = useTranslation();
  const data = [
    {
      property: <code>name</code>,
      description: t('Name of the input element.'),
      type: 'string',
    },
    {
      property: <code>placeholder</code>,
      description: t('Placeholder text to display in the text field whenever it is empty.'),
      type: 'string',
    },
    {
      property: <code>width</code>,
      description: t('Sets maximum width of input.'),
      type: 'number',
    },
    {
      property: <code>onChange</code>,
      description: t('Handler called when the inputs value changes.'),
      type: 'function',
    },
    {
      property: <code>maxLength</code>,
      description: t('Sets maximum length of input.'),
      type: 'number',
    },
    {
      property: <code>isDisabled</code>,
      description: t(
        'Sets the field as to appear disabled, users will not be able to interact with the text field.'
      ),
      type: 'boolean',
    },
    {
      property: <code>isRequired</code>,
      description: t('Set required for form that the field is part of.'),
      type: 'boolean',
    },
    {
      property: <code>isReadOnly</code>,
      description: t('If true, prevents the value of the input from being edited.'),
      type: 'boolean',
    },
  ];
  return (
    <div>
      <h3>{t('API')}</h3>
      <h4>{t('<TextField />')}</h4>

      <TableAPI data={data} />
    </div>
  );
};
