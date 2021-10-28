import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const BannerPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('banner.title')}</h1>
      <p>{t('banner.description')}</p>

      <Tabs title={[t('Examples'), t('API')]}>
        <Example />
        <API />
        {/* <Usage /> */}
      </Tabs>
    </div>
  );
}

BannerPage.propTypes = {};

export default BannerPage;
