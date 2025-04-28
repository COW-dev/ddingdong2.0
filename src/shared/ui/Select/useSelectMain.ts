import { useState } from 'react';

type OptionProps = {
  id: string;
  name: string;
};

type Props = {
  defaultValue: string;
  onChange?: (option: OptionProps) => void;
};

export function useSelectMain({ defaultValue, onChange }: Props) {
  const [selected, setSelected] = useState<OptionProps>({ id: '', name: defaultValue });
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: OptionProps) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return {
    selected,
    isOpen,
    setIsOpen,
    handleSelect,
  };
}
