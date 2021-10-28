import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const LozengePage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('lozenge.title')}</h1>
      <p>{t('lozenge.description')}</p>

      <Tabs title={[t('Examples'), t('API')]}>
        <Example />
        <API />
        {/* <Usage /> */}
      </Tabs>
    </div>
  );
}

LozengePage.propTypes = {};

export default LozengePage;
