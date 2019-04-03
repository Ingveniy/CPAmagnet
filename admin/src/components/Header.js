import React, { PureComponent } from 'react';
class Header extends PureComponent {
  render() {
    return (
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Главная</h1>
      </div>
    );
  }
}

const styles = {
  header: {
    backgroundColor: '#1890ff',
    padding: 10,
    paddingBottom: 5
  },
  headerTitle:{
    color: '#fff'
  }
};
export default Header;
