import { createContext } from 'react';

type TabContextType = {
  activeLabel: string;
  setActiveLabel: (label: string) => void;
  labels: string[];
};

export const TabContext = createContext<TabContextType | undefined>(undefined);
