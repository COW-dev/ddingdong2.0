import ReactDom from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
};

export default function Portal({ children }: PortalProps) {
  if (typeof window === 'undefined') {
    return null;
  }

  const Container = document.getElementById('portal-root') as HTMLElement;
  return ReactDom.createPortal(children, Container);
}
