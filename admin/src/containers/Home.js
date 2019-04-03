import React, { PureComponent } from 'react';

class Home extends PureComponent {
  render() {
    return (
      <div style={styles.content}>
        <h1>Добро пожаловать</h1>
      </div>
    );
  }
}

const styles = {
  content: {
    padding: 20
  }
};
export default Home;
