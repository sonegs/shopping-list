import { ReactNode } from 'react';
import Header from './Header';
import Body from './Body';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <Body>
        {children}
      </Body>
    </div>
  );
}
