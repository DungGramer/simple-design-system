import './DropdownMenu.module';
import PropTypes from 'prop-types';
import Dropdown from '@atoms/dropdown/Dropdown';
import Menu from '@atoms/menu/Menu';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Tabs from '@molecules/tabs/Tabs';
import Highlight from 'react-highlight';
// import '/node_modules/highlight.js/styles/atelier-sulphurpool-light.css';
// import '/node_modules/highlight.js/styles/github.css';
import '/node_modules/highlight.js/styles/atom-one-light.css';
import CodeHighlight from '@atoms/code-highlight/CodeHighlight';
import CodeBox from '@molecules/code-box/CodeBox';
// import '/node_modules/highlight.js/styles/stackoverflow-light.css';

const menu = (
  <>
    <Menu href="#" content="Menu item 1" />
    <Menu href="#" content="Menu item 2" />
    <Menu href="#" content="Menu item 3" />
    <Menu href="#" content="Menu item 3" />
    <Menu href="#" content="Menu item 3" />
    <Menu href="#" content="Menu item 3" />
    <Menu href="#" content="Menu item 3" />
    <Menu href="#" content="Menu item 3" />
    <Menu href="#" content="Menu item 3" />
    <Menu href="#" content="Menu item 3" />
    <Menu href="#" content="Menu item 3" />
    <Menu href="#" content="Menu item 3" />
    <Menu href="#" content="Menu item 3" />
    <Menu href="#" content="Menu item 3" />
    <Menu href="#" content="Menu item 3" />
    <Menu href="#" content="Menu item 3" />
    <Menu href="#" content="Menu item 3" />
  </>
);

function DropdownMenu(props) {
  const { t } = useTranslation();
  const btnRef = useRef();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const Example = () => {
    const { t, i18n } = useTranslation();
    const defaultDropdown = `
    <Dropdown
        parentRef={btnRef}
        overlay={menu}
        onClick={toggleOpen}
        isOpen={open}
      />
  `;
    return (
      <div>
        <h2>{t('Example')}</h2>
        <section>
          <h3>{t('Default')}</h3>
          <CodeBox
            component={
              <>
                <button ref={btnRef} onClick={toggleOpen}>
                  Click me
                </button>
                <Dropdown
                  parentRef={btnRef}
                  overlay={menu}
                  onClick={toggleOpen}
                  isOpen={open}
                />
              </>
            }
            data={defaultDropdown}
          />
        </section>
      </div>
    );
  };
  const CodeX = () => <h1>das</h1>;
  const Usage = () => <h1>das</h1>;

  return (
    <div>
      <h1>{t('dropdown.title')}</h1>
      <p>{t('dropdown.description')}</p>

      <Tabs title={[t('Examples'), t('Code'), t('Usage')]}>
        <Example />
        <CodeX />
        <Usage />
      </Tabs>
    </div>
  );
}

DropdownMenu.propTypes = {};

export default DropdownMenu;
