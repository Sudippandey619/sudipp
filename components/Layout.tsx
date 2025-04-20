// components/Layout.tsx
import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors">
      <nav className="p-4 border-b">Your Navbar here</nav>
      {children}
      <footer className="p-4 border-t text-center">© 2025 Sudip Pandey</footer>
    </main>
  );
}