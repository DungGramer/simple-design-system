import styles from './Tabs.module';
import PropTypes from 'prop-types';
import Tab from '@atoms/Tab/Tab';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';

const splitUnit = value => {
  return parseFloat(value) || 0;
};

function Tabs({ children, type, title, showAll = false }) {
  const [activeTab, setActiveTab] = useState(0);
  const [widthTab, setWidthTab] = useState(0);
  const [locationTab, setLocationTab] = useState(0);
  const [top, setTop] = useState(0)

  const tabList = useRef();

  const getWidthTab = () => {
    const tab = tabList.current.children[activeTab];
    const width = tab.clientWidth;
    const getStyle = getComputedStyle(tab);

    const marginLeft = splitUnit(getStyle.marginLeft);
    const marginRight = splitUnit(getStyle.marginRight);

    setWidthTab(width + marginLeft + marginRight + 'px');
  };

  const getLocation = () => {
    const tab = tabList.current.children[activeTab];
    const getStyle = getComputedStyle(tab);

    const marginLeft = splitUnit(getStyle.marginLeft);
    const location =  tab.getBoundingClientRect();

    setLocationTab((location.left - marginLeft));
  };

  const updateTabs = index => {
    setActiveTab(() => index);
  };

  useEffect(() => {
    setTop(tabList.current.getBoundingClientRect().bottom);
  }, []);

  useEffect(() => {
    getWidthTab();
    getLocation();
  }, [activeTab]);

  return (
    <div className={`${styles.tabs}`}>
      <ul className={styles['tab-list']} ref={tabList}>
        {title.map((item, index) => (
          <Tab
            key={index}
            index={index}
            active={activeTab === index}
            onClick={() => updateTabs(index)}
            title={item}
          />
        ))}
        <div
          className={styles['tabs-ink-bar']}
          style={{ width: widthTab, left: locationTab, top  }}
        ></div>
      </ul>

      <section className={styles['tab-content']}>{children[activeTab]}</section>
    </div>
  );
}

Tabs.propTypes = {};

export default Tabs;
