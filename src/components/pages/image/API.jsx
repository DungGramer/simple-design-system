import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';
import CodeColumn from '@templates/tableAPI/CodeColumn';

export const API = () => {
  const { t } = useTranslation();
  const data = [
    {
      property: <code>src</code>,
      description: t('The source of the image.'),
      type: 'string',
    },
    {
      property: <code>alt</code>,
      description: t('The alternative text of the image.'),
      type: 'string',
    },
    {
      property: <code>lazy</code>,
      description: t('Whether the image should be lazy loaded.'),
      type: 'boolean',
    },
    {
      property: <code>type</code>,
      description: t('The type of the image.'),
      type: (
        <CodeColumn
          data={[
            'avif',
            'apng',
            'bmp',
            'gif',
            'jpeg',
            'jpg',
            'jfif',
            'pjpeg',
            'pjp',
            'png',
            'svg',
            'tiff',
            'tif',
            'ico',
            'cur',
            'bmp',
          ]}
        />
      ),
      default: <code>jpg</code>,
    },
    {
      property: <code>decoding</code>,
      description: t('The decoding of the image.'),
      type: <CodeColumn data={['auto', 'sync', 'async']} />,
    },
    {
      property: <code>srcset</code>,
      description: t('The source set of the image.'),
      type: 'string',
    },
    {
      property: <code>aspectRatio</code>,
      description: t('The aspect ratio of the image.'),
      type: 'number',
    },
  ];
  return (
    <div>
      <h3>{t('API')}</h3>
      <h4>{t('<Image />')}</h4>

      <TableAPI data={data} />
    </div>
  );
};
