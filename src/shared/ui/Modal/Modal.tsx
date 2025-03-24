import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { MODAL_MOTION } from '@/shared/constants/motion';

import { Portal } from '../Portal';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export function Modal({ isOpen, closeModal, children }: Props) {
  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={MODAL_MOTION.initial}
            animate={MODAL_MOTION.animate}
            exit={MODAL_MOTION.exit}
            className="fixed inset-0 z-30 flex w-full items-center justify-center"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeModal} />
            <div className="relative z-40 items-center justify-center rounded-lg bg-white">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
