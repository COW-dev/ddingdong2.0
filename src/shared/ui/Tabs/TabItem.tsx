import { useContext } from 'react';

import { TabContext } from './Tab.context';

type Props = {
  label: string;
  children: React.ReactNode;
};

export function TabItem({ label, children }: Props) {
  const content = useContext(TabContext);
  const isActive = content?.activeLabel === label;

  return <div className={`${!isActive && 'hidden'}`}>{children}</div>;
}
