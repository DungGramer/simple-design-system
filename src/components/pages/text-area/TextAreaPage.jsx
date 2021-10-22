import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const TextAreaPage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('textArea.title')}</h1>
      <p>{t('textArea.description')}</p>

      <Tabs title={[t('Examples'), t('API'), t('Usage')]}>
        <Example />
        <API />
        <Usage />
      </Tabs>
    </div>
  );
}

TextAreaPage.propTypes = {};

export default TextAreaPage;
