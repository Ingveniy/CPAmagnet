import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
export default ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <Sidebar />
        </div>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};
