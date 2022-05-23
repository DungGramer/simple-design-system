import CodeBox from '@molecules/code-box/CodeBox';
import { useTranslation } from 'react-i18next';
import styles from './ExampleSection.module.scss';

const ExampleSection = ({ item }) => {
  const { t } = useTranslation();

  return (
    <section>
      <h3>{t(`${item.heading}`)}</h3>
      <CodeBox
        component={
          <div className={styles['code-box-container']}>{item.component()}</div>
        }
        data={item.path}
      />
    </section>
  );
};

export default ExampleSection;
