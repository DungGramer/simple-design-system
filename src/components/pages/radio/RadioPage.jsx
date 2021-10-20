import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const RadioPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('radio.title')}</h1>
      <p>{t('radio.description')}</p>

      <Tabs title={[t('Examples'), t('API'), t('Usage')]}>
        <Example />
        <API />
        <Usage />
      </Tabs>
    </div>
  );
}

RadioPage.propTypes = {};

export default RadioPage;