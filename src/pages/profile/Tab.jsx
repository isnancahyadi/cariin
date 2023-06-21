import Link from "next/link";
import React, { useEffect, useState } from "react";

const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);

  return (
    <div className="Tab w-100">
      <ul className="nav nav-underline">
        {tabsData.map(({ tab }, index) => (
          <li className="nav-item">
            <Link
              className={`nav-link ${index === activeTab ? "active" : ""}`}
              href="#"
              onClick={() => setActiveTab(index)}
            >
              <h5>{tab}</h5>
            </Link>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return { children };
};

Tab.TabPane = TabPane;

export default Tab;
