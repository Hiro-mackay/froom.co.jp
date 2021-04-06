import React, { FC } from 'react';
import Footer from '../../components/Footer';
import { Header } from '../../components/Header';
export const Corporate: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 72px)' }}>{children}</div>
      <Footer />
    </>
  );
};
