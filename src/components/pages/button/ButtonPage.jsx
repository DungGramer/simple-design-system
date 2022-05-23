import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const ButtonPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('button.title')}</h1>
      <p>{t('button.description')}</p>

      <Tabs title={[t('Examples'), t('API')]}>
        <Example />
        <API />
        {/* <Usage /> */}
      </Tabs>
    </div>
  );
};

ButtonPage.propTypes = {};

export default ButtonPage;
