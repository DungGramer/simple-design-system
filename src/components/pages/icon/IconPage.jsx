import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const IconPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('icon.title')}</h1>
      <p>{t('icon.description')}</p>

      <Tabs title={[t('Examples'), t('API'), t('Usage')]}>
        <Example />
        <API />
        <Usage />
      </Tabs>
    </div>
  );
}

IconPage.propTypes = {};

export default IconPage;
