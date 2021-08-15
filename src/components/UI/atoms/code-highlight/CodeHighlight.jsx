import './CodeHighlight.scss';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';

// import '/node_modules/highlight.js/styles/atom-one-light.css';


/**
 *  Highlight code on the page
 * @param {string} data - The code to be highlighted
 * @param {string} language - The language of the code
 * @return {ReactElement} - The React Element of the highlighted code
 *
 * @example
 * <CodeHight language='html' data={`<h1>Hello World</h1>`} />
 **/

const CodeHighlight = ({ data, language }) => {
  return <Highlight language={language}>{data}</Highlight>;
};

CodeHighlight.propTypes = {
  data: PropTypes.string.isRequired,
  language: PropTypes.string,
};

PropTypes.defaultProps = {
  language: 'react',
};

export default CodeHighlight;
