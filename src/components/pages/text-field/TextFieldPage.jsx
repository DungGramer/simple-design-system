import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const TextFieldPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('textField.title')}</h1>
      <p>{t('textField.description')}</p>

      <Tabs title={[t('Examples'), t('API'), t('Usage')]}>
        <Example />
        <API />
        <Usage />
      </Tabs>
    </div>
  );
}

TextFieldPage.propTypes = {};

export default TextFieldPage;
