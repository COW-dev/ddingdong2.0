import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import useOutsideClick from './useOutsideClick';

import ModalPortal from '../Portal/Portal';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
};

export default function Modal({ isOpen, closeModal, modalRef, children }: ModalProps) {
  useOutsideClick(modalRef, closeModal);

  return (
    <ModalPortal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex w-full items-center justify-center"
          >
            <div
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
              className="items-center justify-center rounded-lg shadow-lg"
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalPortal>
  );
}
