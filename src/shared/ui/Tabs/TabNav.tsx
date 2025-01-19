import { useContext } from 'react';

import { cn } from '@/shared/utils/core';

import { TabContext } from './Tab.context';

export function TabNav() {
  const content = useContext(TabContext);
  if (!content) return <></>;
  const { activeLabel, setActiveLabel, labels } = content;

  return (
    <nav className="flex w-full">
      {labels.map((label, index) => (
        <button
          key={index}
          onClick={() => setActiveLabel(label)}
          className={`grow p-3 font-semibold w-1/${labels.length} ${
            activeLabel === label
              ? 'border-primary-300 text-primary-300 hover:bg-primary-50 border-b-2'
              : 'text-gray-500 hover:bg-gray-50'
          } md:p-4 md:text-xl`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
