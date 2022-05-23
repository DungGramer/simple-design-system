import { Example } from './Example';
import { API } from './API';
import { Usage } from './Usage';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';

const ImagePage = ({}) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('image.title')}</h1>
      <p>{t('image.description')}</p>

      <Tabs title={[t('Examples'), t('API')]}>
        <Example />
        <API />
        {/* <Usage /> */}
      </Tabs>
    </div>
  );
};

ImagePage.propTypes = {};

export default ImagePage;
