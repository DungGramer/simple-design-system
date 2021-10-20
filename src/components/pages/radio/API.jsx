import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';
import CodeColumn from '@templates/tableAPI/CodeColumn';

export const API = () => {
  const { t } = useTranslation();
  const radio = [
    {
      property: <code>name</code>,
      description: t('Specifies the name of the radio button.'),
      type: 'string',
    },
    {
      property: <code>value</code>,
      description: t('Specifies the value of the radio button.'),
      type: 'string',
    },
    {
      property: <code>checked</code>,
      description: t('Should be pre-selected when the page loads'),
      type: 'boolean',
    },
    {
      property: <code>disabled</code>,
      description: t('Should be disabled when the page loads'),
      type: 'boolean',
    },
    {
      property: <code>onChange</code>,
      description: t('Called when the radio button is clicked'),
      type: 'function',
    },
    {
      property: <code>appearance</code>,
      description: t('Specifies the appearance of the radio button.'),
      type: <CodeColumn data={['default', 'chips']} />,
      default: <code>default</code>
    },
  ];

  const RadioGroup = [
    {
      property: <code>name</code>,
      description: t('Specifies the name of the radio button.'),
      type: 'string',
    },
    {
      property: <code>appearance</code>,
      description: t('Specifies the appearance of the radio button.'),
      type: <CodeColumn data={['default', 'chips']} />,
      default: <code>default</code>
    },
  ];
  return (
    <div>
      <h3>{t('API')}</h3>
      <h4>{t('<Radio>')}</h4>

      <TableAPI data={radio} />

      <h4>{t('<Radio.Group>')}</h4>

      <TableAPI data={RadioGroup} />
    </div>
  );
};
