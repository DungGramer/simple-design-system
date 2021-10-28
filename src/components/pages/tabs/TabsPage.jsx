import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const TabsPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('tabs.title')}</h1>
      <p>{t('tabs.description')}</p>

      <Tabs title={[t('Examples'), t('API')]}>
        <Example />
        <API />
        {/* <Usage /> */}
      </Tabs>
    </div>
  );
}

TabsPage.propTypes = {};

export default TabsPage;
