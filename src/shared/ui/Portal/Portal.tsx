import React from 'react';
import ReactDOM from 'react-dom';

export function Portal({ children }: { children: React.ReactNode }) {
  if (typeof window === 'undefined') {
    return null;
  }

  const container = document.body as HTMLElement;
  return ReactDOM.createPortal(children, container);
}
