import { useState } from "react";

// Экспортируемые типы
export type TabStateType<T = string> = {
  // дженерик тип <T> для поддержки разных типов tabId (string, number, enum и т.д.)
  activeTab: T;
  handleTabClick: (tabId: T) => void;
};

export const useTabs = <T = string>(initialTabId: T): TabStateType<T> => {
  const [activeTab, setActiveTab] = useState<T>(initialTabId);

  const handleTabClick = (tabId: T) => {
    setActiveTab(tabId);
  };

  return {
    activeTab,
    handleTabClick,
  };
};
