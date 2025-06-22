import { importShared } from './__federation_fn_import-4a69d5a8.js';

const {useState} = await importShared('react');

const useTabs = (initialTabId) => {
  const [activeTab, setActiveTab] = useState(initialTabId);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return {
    activeTab,
    handleTabClick
  };
};

export { useTabs };
