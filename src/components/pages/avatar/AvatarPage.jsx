import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const AvatarPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('avatar.title')}</h1>
      <p>{t('avatar.description')}</p>

      <Tabs title={[t('Examples'), t('API')]}>
        <Example />
        <API />
        {/* <Usage /> */}
      </Tabs>
    </div>
  );
};

AvatarPage.propTypes = {};

export default AvatarPage;
