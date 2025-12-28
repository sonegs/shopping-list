import { ReactNode } from 'react';

interface BodyProps {
  children: ReactNode;
}

export default function Body({ children }: BodyProps) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      {children}
    </main>
  );
}
