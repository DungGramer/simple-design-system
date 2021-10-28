import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const TogglePage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('toggle.title')}</h1>
      <p>{t('toggle.description')}</p>

      <Tabs title={[t('Examples'), t('API')]}>
        <Example />
        <API />
         {/* <Usage /> */}
      </Tabs>
    </div>
  );
}

TogglePage.propTypes = {};

export default TogglePage;
