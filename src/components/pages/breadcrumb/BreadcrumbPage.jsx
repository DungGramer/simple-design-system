import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const BreadcrumbPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('breadcrumb.title')}</h1>
      <p>{t('breadcrumb.description')}</p>

      <Tabs title={[t('Examples'), t('API'), t('Usage')]}>
        <Example />
        <API />
        <Usage />
      </Tabs>
    </div>
  );
}

BreadcrumbPage.propTypes = {};

export default BreadcrumbPage;
