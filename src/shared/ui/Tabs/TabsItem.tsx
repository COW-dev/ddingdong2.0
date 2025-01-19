import { useContext } from 'react';

import { TabsContext } from './Tabs.context';

type Props = {
  label: string;
  children: React.ReactNode;
};

export function TabsItem({ label, children }: Props) {
  const content = useContext(TabsContext);
  const isActive = content?.activeLabel === label;

  return <div className={`${!isActive && 'hidden'}`}>{children}</div>;
}
