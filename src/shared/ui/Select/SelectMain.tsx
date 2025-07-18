'use client';
import React, { useState } from 'react';

import { OptionList } from './OptionList';
import { SelectContext } from './Select.context';
import { SelectButton } from './SelectButton';

type OptionProps = {
  id: string;
  name: string;
};

type Props = {
  children: React.ReactNode;
  defaultValue: string;
  onChange?: (option: OptionProps) => void;
  size?: 'md' | 'lg';
};

export function SelectMain({ children, defaultValue, onChange, size = 'lg' }: Props) {
  const [selected, setSelected] = useState<OptionProps>({
    id: '',
    name: defaultValue,
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: OptionProps) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <SelectContext.Provider value={{ selected, onSelect: handleSelect, size }}>
      <div className="relative w-fit">
        <SelectButton
          selected={selected.name}
          onClick={() => setIsOpen(!isOpen)}
          size={size}
          isOpen={isOpen}
        />
        {isOpen && <OptionList>{children}</OptionList>}
      </div>
    </SelectContext.Provider>
  );
}
