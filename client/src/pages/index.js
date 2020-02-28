import React from "react";
import { connect } from "react-redux";

import { startClock, tickClock } from "../redux/timer/actionCreators";
import { loadData } from "../redux/users/actionCreators";
import Page from "../components/page";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));

    if (!store.getState().users.placeholderData) {
      store.dispatch(loadData());
    }

    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    return <Page title='Index Page' linkTo='/other' NavigateTo='Other Page' />;
  }
}

export default connect()(Index);
