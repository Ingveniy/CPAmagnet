import React, { PureComponent } from "react";
import DataGrid from "../components/DataGrid";
class Articles extends PureComponent {
  render() {
    return (
      <div style={styles.content}>
        <DataGrid />
      </div>
    );
  }
}

const styles = {
  content: {
    flex: 6
  }
};
export default Articles;
