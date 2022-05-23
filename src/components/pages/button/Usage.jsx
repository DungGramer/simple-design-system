import Image from '@molecules/image/Image';
import { useTranslation } from 'react-i18next';

export const Usage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3>{t('Usage')}</h3>
      <p>
        {t(
          'Buttons are triggers for events or actions. They’re commonly used as part of larger components or patterns such as forms or modal dialogs.'
        )}
      </p>
      <p>
        {t(
          'Buttons are typically used to perform actions that are not directly related to the content of the page. For example, a button can be used to open a modal dialog or to trigger an action on a form.'
        )}
      </p>
      <p>{t('Buttons')}:</p>
      <ul>
        <li>{t('move users through a sequence of screens')}</li>
        <li>{t('perform an action')}</li>
        <li>{t('open a modal dialog')}</li>
        <li>{t('submit a form')}</li>
      </ul>
    </div>
  );
};
