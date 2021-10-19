import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const ModalPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('modal.title')}</h1>
      <p>{t('modal.description')}</p>

      <Tabs title={[t('Examples'), t('API'), t('Usage')]}>
        <Example />
        <API />
        <Usage />
      </Tabs>
    </div>
  );
}

ModalPage.propTypes = {};

export default ModalPage;