import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Row } from "antd";
import Home from "./containers/Home";
import Articles from "./containers/Articles";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div style={styles.mainContainer}>
        <Header />
        <Row style={styles.contentRow} type="flex">
          <Sidebar />
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
        </Row>
        <Footer />
      </div>
    );
  }
}

const styles = {
  contentRow: {
    height: "90%"
  },
  mainContainer: {
    height: "100%"
  }
};
export default App;
