import { useTranslation } from 'react-i18next';
import TableAPI from '@templates/tableAPI/TableAPI';
import CodeColumn from '@templates/tableAPI/CodeColumn';

export const API = () => {
  const { t } = useTranslation();

  const avatar = [
    {
      property: <code>appearance</code>,
      description: t('Indicates the shape of the avatar'),
      type: <CodeColumn data={['circle', 'square']} />,
      default: <code>circle</code>,
    },
    {
      property: <code>size</code>,
      description: t('Defines the size of the avatar'),
      type: (
        <CodeColumn
          data={['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']}
        />
      ),
      default: <code>medium</code>,
    },
    {
      property: <code>status</code>,
      description: t("Indicates a user's online status"),
      type: <CodeColumn data={['online', 'offline', 'busy']} />,
    },
  ];

  const avatarGroup = [
    {
      property: <code>size</code>,
      description: t('Defines the size of the avatar'),
      type: (
        <CodeColumn
          data={['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']}
        />
      ),
      default: <code>medium</code>,
    },
    {
      property: <code>length</code>,
      description: t('Defines the number of avatars you want show'),
      type: 'number',
    },
  ];

  return (
    <div>
      <h3>{t('API')}</h3>

      <h4>{t('<Avatar>')}</h4>
      <TableAPI data={avatar} />

      <h4>{t('<Avatar.Group>')}</h4>
      <TableAPI data={avatarGroup} />
    </div>
  );
};
