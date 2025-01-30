import ReactDom from 'react-dom';

type Props = {
  children: React.ReactNode;
};

export default function Portal({ children }: Props) {
  if (typeof window === 'undefined') {
    return null;
  }

  const Container = document.body as HTMLElement;
  return ReactDom.createPortal(children, Container);
}
