import { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/app/style/globals.css';
import ClientQueryProvider from '@/app/provider/ClientQueryProvider';

const pretendard = localFont({
  src: '../public/font/PretendardVariable.woff2',
  variable: '--font-pretendard',
});

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: '띵동',
  description: '명지대학교의 모든 동아리, 띵동에서 확인해 보세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <ClientQueryProvider>{children}</ClientQueryProvider>
      </body>
    </html>
  );
}
