// components/Layout.tsx
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <head>
        <title>{title || 'My App'}</title>
      </head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
