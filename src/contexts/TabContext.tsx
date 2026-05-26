import * as React from "react";
import { createContext, PropsWithChildren, ReactNode, useCallback, useContext, useState } from "react";

export type Tabs = {
  [key: string]: ReactNode;
};

export type TabState = {
  currentTab: number;
  animatingTab: null | number;
  direction: number;
  isTabExiting: boolean;
}

export interface TabContextProps {
  tabs: Tabs;
  setTabs: React.Dispatch<React.SetStateAction<Tabs>>;
  tabState: TabState;
  setTabState: React.Dispatch<React.SetStateAction<TabState>>;
  isChangingTab: boolean,
  setIsChangingTab: React.Dispatch<React.SetStateAction<boolean>>;
  changeTab: (index: number) => void;
}

export const TabContext = createContext<TabContextProps>({
  tabs: {},
  setTabs: () => {},
  tabState: {
    currentTab: 0,
    animatingTab: null,
    direction: 0,
    isTabExiting: false,
  },
  setTabState: () => {},
  isChangingTab: false,
  setIsChangingTab: () => {},
  changeTab: () => {},
});

export interface TabContextProviderProps {
}

export const TabContextProvider: React.FC<PropsWithChildren<TabContextProviderProps>> = ({ children }) => {
  const [tabs, setTabs] = useState<Tabs>({});
  const [tabState, setTabState] = useState<TabState>({
    currentTab: 0,
    animatingTab: null,
    direction: 0,
    isTabExiting: false,
  });
  const [isChangingTab, setIsChangingTab] = useState(false);

  const changeTab = useCallback((index: number) => {
    if (index < 0 || index >= Object.keys(tabs).length) {
      return;
    }
    setTabState({
      isTabExiting: true,
      direction: index - tabState.currentTab,
      animatingTab: tabState.currentTab,
      currentTab: index,
    });
    setIsChangingTab(true);
  }, [tabs, tabState, setTabState]);

  return (
    <TabContext.Provider value={{
      tabs,
      setTabs,
      tabState,
      setTabState,
      isChangingTab,
      setIsChangingTab,
      changeTab,
    }}>
      {children}
    </TabContext.Provider>
  )
};

export const useTabContext = () => useContext(TabContext);
