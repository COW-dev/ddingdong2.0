import { createContext, useContext } from 'react';

type OptionProps = {
  id: string;
  name: string;
};

type SelectContextType = {
  selected: OptionProps | null;
  onSelect: (option: OptionProps) => void;
  defaultValue?: string;
  contents: string[];
  size?: 'md' | 'lg';
};

export const SelectContext = createContext<SelectContextType | undefined>(undefined);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) throw new Error('error');
  return context;
};
