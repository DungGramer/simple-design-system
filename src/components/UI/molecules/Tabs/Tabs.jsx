import styles from './Tabs.module';
import PropTypes from 'prop-types';
import Tab from '@atoms/Tab/Tab';
import { useEffect, useRef, useState } from 'react';
import boxModel from '~/constants/boxModel';

/**
 * @function Tabs
 *
 * @param {object} children
 * @param {array} title
 */
function Tabs({ children, title, showAll = false }) {
  const [activeTab, setActiveTab] = useState(0);
  const [widthTab, setWidthTab] = useState(0);
  const [locationTab, setLocationTab] = useState(0);

  const tabList = useRef();

  const getWidthTab = () => {
    const tab = tabList.current.children[activeTab];
    const width = tab.clientWidth;

    const { margin, padding } = boxModel(tab);

    const widthTab = width - margin.horizontal - padding.horizontal;

    setWidthTab(widthTab + 'px');
  };

  const getLocation = () => {
    const tab = tabList.current.children[activeTab];
    const baseTab = tabList.current.children[0];

    const { margin, padding } = boxModel(tab);

    const location = ele => ele.getBoundingClientRect().left;

    setLocationTab(
      location(tab) - location(baseTab) + margin.left + padding.left + 'px',
    );
  };

  const updateTabs = index => {
    setActiveTab(index);
  };

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
            active={activeTab === index}
            onClick={() => updateTabs(index)}
            title={item}
          />
        ))}
        <div
          className={styles['tabs-ink-bar']}
          style={{ width: widthTab, left: locationTab }}
        ></div>
      </ul>

      <section className={styles['tab-content']}>{children[activeTab]}</section>
    </div>
  );
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.array.isRequired,
};

export default Tabs;
