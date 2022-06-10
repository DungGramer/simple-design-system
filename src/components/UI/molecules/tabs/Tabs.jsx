import styles from './Tabs.module';
import PropTypes from 'prop-types';
import Tab from '@atoms/tab/Tab';
import { useEffect, useRef, useState } from 'react';
import boxModel from '~/constants/boxModel';
import { onEnter } from '~/helpers/onEnter';

/**
 * @function Tabs
 *
 * @param {object} children
 * @param {array} title
 */
function Tabs({ children, title, defaultTab, showAll }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [widthTab, setWidthTab] = useState(0);
  const [locationTab, setLocationTab] = useState(0);

  const tabList = useRef();

  const updateTabs = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const getWidthTab = () => {
      const tab = tabList.current.children[activeTab];
      const width = tab.clientWidth;

      const { margin, padding } = boxModel(tab);

      const widthTab = width - margin.horizontal - padding.horizontal;

      setWidthTab(`${widthTab}px`);
    };

    const getLocation = () => {
      const tab = tabList.current.children[activeTab];
      const baseTab = tabList.current.children[0];

      const { margin, padding } = boxModel(tab);

      const location = (ele) => ele.getBoundingClientRect().left;

      setLocationTab(
        `${location(tab) - location(baseTab) + margin.left + padding.left}px`
      );
    };

    getWidthTab();
    getLocation();
  });

  return (
    <div className={`${styles.tabs}`}>
      <ul className={styles['tab-list']} ref={tabList}>
        {title.map((item, index) => (
          <Tab
            key={index}
            active={activeTab === index}
            onClick={() => updateTabs(index)}
            onKeyDown={(e) => onEnter(e, () => updateTabs(index))}
            title={item}
          />
        ))}
        <div
          className={styles['tabs-ink-bar']}
          style={{ width: widthTab, left: locationTab }}
        />
      </ul>

      <section className={styles['tab-content']}>{children[activeTab]}</section>
    </div>
  );
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.array.isRequired,
  defaultTab: PropTypes.number,
};

Tabs.defaultProps = {
  defaultTab: 0,
};

export default Tabs;
