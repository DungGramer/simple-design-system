import './CodeHighlight.scss';
import PropTypes from 'prop-types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useThemeContext } from '~/context/themeContext/themeContext';

/**
 *  Highlight code on the page
 * @param {string} data - The code to be highlighted
 * @param {string} language - The language of the code
 * @return {ReactElement} - The React Element of the highlighted code
 *
 * @example
 * <CodeHight language='html' data={`<h1>Hello World</h1>`} />
 **/

SyntaxHighlighter.registerLanguage('jsx', jsx);

const CodeHighlight = ({ data, language }) => {
  const { switchTheme } = useThemeContext();

  return (
    <SyntaxHighlighter
      style={switchTheme(materialLight, materialDark)}
      language={language}
      customStyle={{
        margin: '0',
        padding: '0',
        border: 'none',
        background: 'transparent',
        paddingBottom: '1rem',
      }}
    >
      {data}
    </SyntaxHighlighter>
  );
};

CodeHighlight.propTypes = {
  data: PropTypes.string.isRequired,
  language: PropTypes.string,
};

CodeHighlight.defaultProps = {
  language: 'jsx',
};

export default CodeHighlight;
