'use client';
import { Children, isValidElement, ReactElement, useMemo, useState } from 'react';

import { TabsContext } from './Tabs.context';
import { TabsNav } from './TabsNav';

type Props = {
  children: React.ReactNode;
  defaultIndex?: number;
};

export function TabsRoot({ children, defaultIndex = 0 }: Props) {
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
    <TabsContext.Provider value={{ activeLabel, setActiveLabel, labels }}>
      <div className="w-full">
        <TabsNav />
        {children}
      </div>
    </TabsContext.Provider>
  );
}
