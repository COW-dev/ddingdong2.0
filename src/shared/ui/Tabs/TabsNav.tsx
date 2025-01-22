import { useContext } from 'react';

import { TabsContext } from './Tabs.context';

export function TabsNav() {
  const content = useContext(TabsContext);
  if (!content) return <></>;
  const { activeLabel, setActiveLabel, labels } = content;

  return (
    <nav className="flex w-full">
      {labels.map((label, index) => (
        <button
          key={index}
          onClick={() => setActiveLabel(label)}
          className={`grow border-b-2 border-primary-300 p-3 font-semibold w-1/${labels.length} ${
            activeLabel === label
              ? 'text-primary-300 hover:bg-primary-50'
              : 'border-opacity-0 text-gray-500 hover:bg-gray-50'
          } md:p-4 md:text-xl`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
