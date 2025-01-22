import { useContext } from 'react';
import { motion } from 'framer-motion';

import { TabsContext } from './Tabs.context';

export function TabsNav() {
  const content = useContext(TabsContext);
  if (!content) return <></>;
  const { activeLabel, setActiveLabel, labels } = content;

  return (
    <nav className="flex w-full list-none items-center justify-center">
      {labels.map((label) => (
        <motion.button
          key={label}
          className={`grow p-3 font-semibold w-1/${labels.length} ${
            activeLabel === label
              ? 'translate-x-2 transform text-primary-300 hover:bg-primary-50'
              : 'text-gray-500 hover:bg-gray-50'
          } transition-all duration-300 ease-in-out md:p-4 md:text-xl`}
          onClick={() => setActiveLabel(label)}
        >
          {label}
          {label === activeLabel && (
            <motion.div
              className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary-300"
              layoutId="underline"
              id="underline"
            />
          )}
        </motion.button>
      ))}
    </nav>
  );
}
