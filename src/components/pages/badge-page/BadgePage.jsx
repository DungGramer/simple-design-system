import styles from './BadgePage.module';
import PropTypes from 'prop-types';
import Badge from '@atoms/badge/Badge';
import { useTranslation } from 'react-i18next';
import changeLanguage from '~/translations/changeLanguage';



function BadgePage({}) {
  const { t } = useTranslation();

  return (
    <div className="badge-page">
      <h1>{t('hello')}</h1>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('vi')}>VI</button>
      <p>
        <Badge
          appearance="dot"
          direction="left bottom"
          offset={[-1, -1]}
        ></Badge>
        A badge is a visual indicator for numeric values such as tallies and
        scores.
      </p>
    </div>
  );
}

BadgePage.propTypes = {};

export default BadgePage;
