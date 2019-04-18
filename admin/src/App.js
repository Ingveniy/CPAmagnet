import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Home from './containers/Home';
import ArticlesList from './containers/Articles/ArticlesList';
import ArticlesDetail from './containers/Articles/ArticlesDetail';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div style={styles.mainContainer}>
        <Header />
        <Row style={styles.contentRow}>
          <Sidebar />
          <Col xs={28}>
            <Route exact path="/" component={Home} />
            <Route exact path="/articles" component={ArticlesList} />
            <Route exact path="/articles/:id" component={ArticlesDetail} />
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

const styles = {
  mainContainer: {},
  contentRow: {}
};
export default App;
