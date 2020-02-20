import React, { PureComponent } from "react";
class ArticlesList extends PureComponent {

  //Необходимо создать комонент для отображения данных которые прилетают с api, в виде таблицы 
  render() {
    return (
      <div style={styles.content}>
      ArticlesList
      </div>
    );
  }
}

const styles = {
  content: {
    flex: 6
  }
};
export default ArticlesList;
