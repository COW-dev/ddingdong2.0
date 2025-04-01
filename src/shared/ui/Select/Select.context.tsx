import { createContext, useContext } from 'react';

export const SelectContext = createContext<SelectContextType | undefined>(undefined);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) throw new Error('error');
  return context;
};
