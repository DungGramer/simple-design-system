import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const FlagPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('flag.title')}</h1>
      <p>{t('flag.description')}</p>

      <Tabs title={[t('Examples'), t('API')]}>
        <Example />
        <API />
        {/* <Usage /> */}
      </Tabs>
    </div>
  );
};

FlagPage.propTypes = {};

export default FlagPage;
