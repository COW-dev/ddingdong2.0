import ReactDom from 'react-dom';

type ModalPortalProps = {
  children: React.ReactNode;
};

export default function ModalPortal({ children }: ModalPortalProps) {
  if (typeof window === 'undefined') {
    return null;
  }

  const modalContainer = document.getElementById('modal-root') as HTMLElement;
  return ReactDom.createPortal(children, modalContainer);
}
