import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';
import CodeColumn from '@templates/tableAPI/CodeColumn';

export const API = () => {
  const { t } = useTranslation();
  const data = [
    {
      property: <code>icon</code>,
      description: t('The name of the icon'),
      type: 'string',
    },
    {
      property: <code>size</code>,
      description: t('The size of the icon'),
      type: 'number',
    },
    {
      property: <code>color</code>,
      description: t('The color of the icon'),
      type: 'string',
    },
    {
      property: <code>rotate</code>,
      description: t('The rotate of the icon'),
      type: <CodeColumn data={['90', '180', '270']} />,
    },
    {
      property: <code>flip</code>,
      description: t('The flip of the icon'),
      type: <CodeColumn data={['horizontal', 'vertical', 'both']} />,
    },
    {
      property: <code>animation</code>,
      description: t('The animation of the icon'),
      type: <CodeColumn data={['spin', 'pulse']} />,
    },
  ];
  return (
    <div>
      <h3>{t('API')}</h3>
      <h4>{t('<Icon />')}</h4>

      <TableAPI data={data} />
    </div>
  );
};
