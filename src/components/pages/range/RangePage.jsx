import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const RangePage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('range.title')}</h1>
      <p>{t('range.description')}</p>

      <Tabs title={[t('Examples'), t('API')]}>
        <Example />
        <API />
        {/* <Usage /> */}
      </Tabs>
    </div>
  );
};

RangePage.propTypes = {};

export default RangePage;
