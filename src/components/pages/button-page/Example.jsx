import Button from '@atoms/button/Button';
import ExampleSection from '@molecules/example-section/ExampleSection';
import CodeBox from '@molecules/code-box/CodeBox';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import pathExample from '~/routes/example-components';
import styles from './ButtonPage.module.scss';
import { ButtonType } from './examples/ButtonType';

const Type = () => {
  const { t } = useTranslation();
  console.log('zxczx \n', require('!!raw-loader!./Template.jsx'));

  const typeButton = pathExample.button[0].path;

  return (
    // <section>
    //   <h3>{t(`type`)}</h3>
    //   <CodeBox
    //     component={
    //       <div className={styles['code-box-container']}>
    //         <ButtonType  />
    //       </div>
    //     }
    //     data={typeButton}
    //   />
    // </section>
    <ExampleSection item={pathExample.button[0]} />
  );
};

const Size = () => {
  const { t } = useTranslation();
  const sizeButton = `
  <Button title="Click me" />
  <Button title="Click me" size="large" />
  `
  return (
    <section>
      <h3>{t('Size')}</h3>
      <CodeBox
        component={
          <div className={styles['code-box-container']}>
            <Button title="Click me" />
            <Button title="Click me" size="large" />
          </div>
        }
        data={sizeButton}
      />
    </section>
  );
};

const Icon = () => {
  const { t } = useTranslation();
  const iconButton = `
  <Button icon="fas fa-search" />
  <Button icon="fas fa-search" type="primary" shape="circle" />
  <Button title="Search" icon="fas fa-search" type="dashed" />
  `;
  return (
    <section>
      <h3>{t('Icon')}</h3>
      <CodeBox
        component={
          <div className={styles['code-box-container']}>
            <Button icon="fas fa-search" />
            <Button icon="fas fa-search" type="primary" shape="circle" />
            <Button title="Search" icon="fas fa-search" type="dashed" />
          </div>
        }
        data={iconButton}/>
    </section>
  );
};

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);
  const { t } = useTranslation();

  const handleClick = useCallback((setLoading) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const loadingButton = `
  <Button title="Click me" loading={isLoading} onClick={handleClick} type="primary" icon="fas fa-search" />
  <Button title="Click me" loading={isLoading} onClick={handleClick} />
  <Button icon="fas fa-search" loading={isLoading} onClick={handleClick} shape="circle" />
  `;
  return (
    <section>
      <h3>{t('Loading')}</h3>
      <CodeBox
        component={
          <div className={styles['code-box-container']}>
            <Button title="Click me" loading={isLoading} onClick={() => handleClick(setIsLoading)} type="primary" icon="fas fa-search" />
            <Button title="Click me" loading={isLoading2} onClick={() => handleClick(setIsLoading2)} />
            <Button icon="fas fa-search" loading={isLoading3} onClick={() => handleClick(setIsLoading3)} shape="circle" />
          </div>
        }
        data={loadingButton}
      />
    </section>
  );
};

const Disabled = () => {
  const { t } = useTranslation();
  const disabledButton = `
  <Button title="Click me" disabled />
  <Button title="Click me" disabled type="primary" />
  `
  return (
    <section>
      <h3>{t('Disabled')}</h3>
      <CodeBox
        component={
          <div className={styles['code-box-container']}>
            <Button title="Click me" disabled />
            <Button title="Click me" disabled type="primary" />
          </div>
        }
        data={disabledButton}
      />
    </section>
  );
};

export const Example = () => {
  return <div>
    {/* <Type />
    <Size />
    <Icon />
    <Loading />
    <Disabled /> */}
    {pathExample.button.map((item, index) => {
      return <ExampleSection key={index} item={item} />
    })}
  </div>;
};
