import { createContext } from 'react';

type TabsContextType = {
  activeLabel: string;
  setActiveLabel: (label: string) => void;
  labels: string[];
};

export const TabsContext = createContext<TabsContextType | undefined>(undefined);
