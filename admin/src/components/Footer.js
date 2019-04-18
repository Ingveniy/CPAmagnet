import React, { PureComponent } from 'react';
class Footer extends PureComponent {
  render() {
    return (
      <div style={styles.footer}>
        <h1 style={styles.headerTitle}>Футер</h1>
      </div>
    );
  }
}

const styles = {
  footer: {
    backgroundColor: '#1890ff',
    width: '100%',
    padding: 10,
    paddingBottom: 5,
  },
  headerTitle:{
    color: '#fff'
  }
};
export default Footer;
