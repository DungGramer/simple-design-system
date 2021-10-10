import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const CheckboxPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('checkbox.title')}</h1>
      <p>{t('checkbox.description')}</p>

      <Tabs title={[t('Examples'), t('API'), t('Usage')]}>
        <Example />
        <API />
        <Usage />
      </Tabs>
    </div>
  );
}

CheckboxPage.propTypes = {};

export default CheckboxPage;
