import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const BadgePage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('badge.title')}</h1>
      <p>{t('badge.description')}</p>

      <Tabs title={[t('Examples'), t('API'), t('Usage')]}>
        <Example />
        <API />
        <Usage />
      </Tabs>
    </div>
  );
}

BadgePage.propTypes = {};

export default BadgePage;