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
          className="items-center justify-center rounded-lg bg-white shadow-[0_3px_10px_rgba(0,0,0,0.05),_0_-3px_10px_rgba(0,0,0,0.03),_3px_0_10px_rgba(0,0,0,0.03),_-3px_0_10px_rgba(0,0,0,0.03)]"
        >
          {children}
        </div>
      </motion.div>
    </Portal>
  );
}
