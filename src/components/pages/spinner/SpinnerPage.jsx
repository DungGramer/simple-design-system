import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const SpinnerPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('spinner.title')}</h1>
      <p>{t('spinner.description')}</p>

      <Tabs title={[t('Examples'), t('API')]}>
        <Example />
        <API />
        {/* <Usage /> */}
      </Tabs>
    </div>
  );
};

SpinnerPage.propTypes = {};

export default SpinnerPage;
