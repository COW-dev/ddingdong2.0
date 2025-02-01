import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import { MODAL_MOTION } from '@/shared/constants/motion';

import { Portal } from '../Portal';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  mode?: 'wait' | 'sync' | 'popLayout';
};

export function Modal({ isOpen, closeModal, children, mode }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal]);

  return (
    <Portal isOpen={isOpen} mode={mode}>
      <motion.div
        {...MODAL_MOTION}
        className="fixed inset-0 z-30 flex w-full items-center justify-center"
      >
        <div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          className="items-center justify-center rounded-lg bg-white shadow-[0px_20px_24px_rgba(16,24,40,0.1),_0px_8px_8px_-4px_rgba(16,24,40,0.04)]"
        >
          {children}
        </div>
      </motion.div>
    </Portal>
  );
}
