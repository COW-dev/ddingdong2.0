import React from 'react';

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
  if (!isOpen) return null;

  return (
    <ModalPortal>
      <div ref={modalRef} className="fixed z-30 flex items-center justify-center">
        <div
          className="flex max-w-4xl flex-col items-center rounded-xl bg-white p-10 text-4xl text-black shadow-xl md:h-[70%]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-8 text-center">{children}</div>
        </div>
      </div>
    </ModalPortal>
  );
}
