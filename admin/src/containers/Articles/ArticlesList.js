import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withApiService } from "../../components/hoc";
import compose from "../../helpers/compose";
import { getArticles } from "../../redux/articles/actions";

import { Table } from "antd";

const ArticlesList = ({ articles, articlesTotal, loading, getArticles }) => {
  const [articlesFilter, setArticlesFilter] = useState({});

  useEffect(() => {
    getArticles(articlesFilter);
  }, []);

  const columns = [
    {
      title: "Название",
      dataIndex: "title",
      sorter: false,
    },
    {
      title: "Дата публицации",
      dataIndex: "publicationDate",
      sorter: true,
      render: text => {
        return text;
      },
    },
  ];

  return (
    <div style={styles.content}>
      <Table
        loading={loading}
        rowKey='_id'
        columns={columns}
        dataSource={articles}
        onChange={(pagination, oldFilters, sorter) => {
          setArticlesFilter();
        }}
        pagination={{ defaultCurrent: 1, total: articlesTotal, pageSize: 15 }}
      />
    </div>
  );
};

const styles = {
  content: {
    flex: 6,
  },
};

const mapStateToProps = ({ articles }) => ({ ...articles });

const mapDispatchToProps = (dispatch, { apiService, filter }) => {
  return bindActionCreators(
    {
      getArticles: getArticles(apiService, filter),
    },
    dispatch,
  );
};

export default compose(
  withApiService(),
  connect(mapStateToProps, mapDispatchToProps),
)(ArticlesList);
