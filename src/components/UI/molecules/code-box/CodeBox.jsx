import styles from './CodeBox.module';
import PropTypes from 'prop-types';
import CodeHighlight from '@atoms/code-highlight/CodeHighlight';
import CopyToClipboard from '@atoms/copy-to-clipboard/CopyToClipboard';

const CodeBox = ({component, data, language}) => {
  return (
    <article className={styles['code-box']}>
      <section className={styles.component}>{component}</section>

      <section className={styles['code-highlight']}>
        <CopyToClipboard text={data} />
        <CodeHighlight language={language} data={data} />
      </section>
    </article>
  );
}

CodeBox.propTypes = {};

export default CodeBox;
