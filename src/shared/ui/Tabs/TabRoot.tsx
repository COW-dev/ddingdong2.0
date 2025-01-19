'use client';
import { Children, isValidElement, ReactElement, useMemo, useState } from 'react';

import { TabContext } from './Tab.context';
import { TabNav } from './TabNav';

type Props = {
  children: React.ReactNode;
  defaultIndex?: number;
};

export function TabRoot({ children, defaultIndex = 0 }: Props) {
  const labels = useMemo(
    () =>
      Children.toArray(children)
        .filter((child): child is ReactElement<{ label: string }> => isValidElement(child))
        .map((child) => child.props.label),
    [children]
  );

  type LabelType = (typeof labels)[number];
  const [activeLabel, setActiveLabel] = useState<LabelType>(labels[defaultIndex]);

  return (
    <TabContext.Provider value={{ activeLabel, setActiveLabel, labels }}>
      <div className="w-full">
        <TabNav />
        {children}
      </div>
    </TabContext.Provider>
  );
}
