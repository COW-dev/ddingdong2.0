'use client';
import { useEffect, RefObject } from 'react';

type CallbackFunction = () => void;

function useOutsideClick(ref: RefObject<HTMLElement>, callback: CallbackFunction) {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
}

export default useOutsideClick;
