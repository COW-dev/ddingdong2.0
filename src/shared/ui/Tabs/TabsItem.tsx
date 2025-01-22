import { useContext } from 'react';

import { TabsContext } from './Tabs.context';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  children: React.ReactNode;
};

export function TabsItem({ label, children, ...props }: Props) {
  const content = useContext(TabsContext);
  const isActive = content?.activeLabel === label;

  return (
    <div className={`${!isActive && 'hidden'}`} {...props}>
      {children}
    </div>
  );
}
