import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import useOutsideClick from './useOutsideClick';

import ModalPortal from '../Portal/Portal';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  modalRef: React.RefObject<HTMLDivElement> | null;
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
            className="fixed inset-0 z-30 flex items-center justify-center"
          >
            <div
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center"
            >
              <motion.div
                className="w-full max-w-4xl flex-col items-center rounded-xl bg-white p-10 text-4xl text-black shadow-xl md:h-[70%]"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-8 text-center">{children}</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalPortal>
  );
}
