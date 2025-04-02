import { OptionList } from './OptionList.tsx';
import { SelectContext } from './Select.context.tsx';
import { TriggerButton } from './TriggerButton';
import { useSelectMain } from './useSelectMain';

export function SelectMain({ children, defaultValue, onChange, size = 'lg' }: Props) {
  const { selected, isOpen, setIsOpen, handleSelect } = useSelectMain({
    defaultValue,
    onChange,
  });

  return (
    <SelectContext.Provider value={{ selected, onSelect: handleSelect, size }}>
      <div className="relative w-fit">
        <TriggerButton
          selected={selected.name}
          onClick={() => setIsOpen(!isOpen)}
          size={size}
          isOpen={isOpen}
        />
        {isOpen && <OptionList size={size}>{children}</OptionList>}
      </div>
    </SelectContext.Provider>
  );
}
