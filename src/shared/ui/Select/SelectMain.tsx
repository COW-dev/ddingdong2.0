'use client';
import React, { useState, useEffect } from 'react';

import { OptionList } from './OptionList.tsx';
import { SelectContext } from './Select.context.tsx';
import { TriggerButton } from './TriggerButton';

type OptionProps = {
  id: string;
  name: string;
};

type Props = {
  selected?: string;
  children: React.ReactNode;
  defaultValue: string;
  onChange?: (option: OptionProps) => void;
  size?: 'md' | 'lg';
};

export function SelectMain({ children, defaultValue, contents, onChange, size = 'lg' }: Props) {
  const [selected, setSelected] = useState<OptionProps | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!selected) {
      if (defaultValue && defaultValue.trim() !== '') {
        setSelected({ id: '', name: defaultValue });
      } else if (contents && contents.length > 0) {
        setSelected({ id: '', name: contents[0] });
      }
    }
  }, [defaultValue, contents, selected]);

  const handleSelect = (option: OptionProps) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <SelectContext.Provider value={{ selected, onSelect: handleSelect, size }}>
      <div className="relative w-fit">
        <TriggerButton
          selected={selected?.name}
          onClick={() => setIsOpen(!isOpen)}
          size={size}
          isOpen={isOpen}
        />
        {isOpen && <OptionList size={size}>{children}</OptionList>}
      </div>
    </SelectContext.Provider>
  );
}
