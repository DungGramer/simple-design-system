import { useTranslation } from 'react-i18next';

export const Usage = () => {
  const { t } = useTranslation();

  return <div>
    <h3>{t('Usage')}</h3>
    <p>{t('Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, consectetur?')}</p>

  </div>;
}
