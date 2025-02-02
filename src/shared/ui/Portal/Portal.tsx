import { AnimatePresence } from 'framer-motion';
import ReactDom from 'react-dom';

type Props = {
  isOpen: boolean;
  mode?: 'wait' | 'sync' | 'popLayout';
  children: React.ReactNode;
};

export function Portal({ isOpen, mode = 'sync', children }: Props) {
  if (typeof window === 'undefined' || !isOpen) {
    return null;
  }

  const container = document.body as HTMLElement;

  return ReactDom.createPortal(
    <AnimatePresence mode={mode}>{children}</AnimatePresence>,
    container
  );
}
