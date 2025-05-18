import { createContext, useContext } from 'react';

type OptionProps = {
  id: string;
  name: string;
};

export type SelectContextType = {
  selected: OptionProps;
  onSelect: (option: OptionProps) => void;
  size: 'md' | 'lg';
};

export const SelectContext = createContext<SelectContextType | undefined>(undefined);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) throw new Error('error');
  return context;
};
