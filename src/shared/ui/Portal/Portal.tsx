import React from 'react';
import { AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
};

export function Portal({ isOpen, children }: Props) {
  const container = document.body as HTMLElement;

  return ReactDOM.createPortal(<AnimatePresence>{isOpen && children}</AnimatePresence>, container);
}
