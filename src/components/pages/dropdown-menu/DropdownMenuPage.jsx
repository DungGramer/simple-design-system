import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const DropdownMenuPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('dropdown.title')}</h1>
      <p>{t('dropdown.description')}</p>

      <Tabs title={[t('Examples'), t('API'), t('Usage')]}>
        <Example />
        <API />
        <Usage />
      </Tabs>
    </div>
  );
}

DropdownMenuPage.propTypes = {};

export default DropdownMenuPage;
