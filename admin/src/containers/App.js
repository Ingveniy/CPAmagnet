import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Row, Col } from "antd";
import Home from "./Home";
import ArticlesList from "./Articles/ArticlesList";
import ArticlesDetail from "./Articles/ArticlesDetail";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

class App extends Component {
  render() {
    return (
      <div style={styles.mainContainer}>
        <Header />
        <Row style={styles.contentRow}>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col xs={22}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/articles' component={ArticlesList} />
              <Route exact path='/articles/:id' component={ArticlesDetail} />
            </Switch>
          </Col>
        </Row>
        {/* <Footer /> */}
      </div>
    );
  }
}

const styles = {
  mainContainer: {
    height: "100%",
  },
  contentRow: {
    height: "100% ",
  },
};
export default App;
