import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const PaginationPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('pagination.title')}</h1>
      <p>{t('pagination.description')}</p>

      <Tabs title={[t('Examples'), t('API')]}>
        <Example />
        <API />
        {/* <Usage /> */}
      </Tabs>
    </div>
  );
}

PaginationPage.propTypes = {};

export default PaginationPage;
