import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const DividerPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('divider.title')}</h1>
      <p>{t('divider.description')}</p>

      <Tabs title={[t('Examples'), t('API'), t('Usage')]}>
        <Example />
        <API />
        <Usage />
      </Tabs>
    </div>
  );
}

DividerPage.propTypes = {};

export default DividerPage;
