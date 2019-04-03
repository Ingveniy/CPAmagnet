import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import Layout, { Row, Col, Grid } from 'antd';

export default ({ children }) => {
  console.log(children, 'children');

  return (
    <div style={styles.mainContainer}>
      <Header />
      <Row style={styles.contentRow} type="flex">
        <Sidebar />
        {children}
      </Row>
      <Footer />
    </div>
  );
};

const styles = {
  contentRow: {
    height: '90%'
  },
  mainContainer: {
    height: '100%'
  }
};
