import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const TablePage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('table.title')}</h1>
      <p>{t('table.description')}</p>

      <Tabs title={[t('Examples'), t('API')]}>
        <Example />
        <API />
        {/* <Usage /> */}
      </Tabs>
    </div>
  );
};

TablePage.propTypes = {};

export default TablePage;
