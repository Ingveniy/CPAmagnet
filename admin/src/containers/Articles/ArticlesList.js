import React, { useEffect, useState } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withApiService } from "../../components/hoc";

import compose from "../../helpers/compose";

import { getArticles } from "../../redux/articles/actions";
import { removeArticle } from "../../redux/article/actions";

import { Table, Button, Input } from "antd";

import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

import getFormattedDate from "../../helpers/getFormattedDate";

const { Search } = Input;

const ArticlesList = ({
  history,
  articles,
  articlesTotal,
  loading,
  getArticles,
}) => {
  const [articlesFilter, setArticlesFilter] = useState({});

  useEffect(() => {
    getArticles(articlesFilter);
  }, [articlesFilter]);

  const columns = [
    { title: "#", width: 50, dataIndex: "_id" },
    {
      title: "Название",
      dataIndex: "title",
      sorter: false,
    },
    {
      title: "Категория",
      dataIndex: "category",
      sorter: false,
      render: text => {
        return text.title;
      },
    },
    {
      title: "Дата публицации",
      dataIndex: "publishDate",
      sorter: false,
      render: text => {
        return getFormattedDate(text);
      },
    },
    {
      title: "",
      width: 200,
      dataIndex: "",
      render: (text, rowData) => {
        return (
          <>
            <Button
              type='link'
              icon={<EditTwoTone style={{ fontSize: "22px" }} />}
              onClick={() => {
                history.push(`/articles/${rowData._id}`);
              }}
            />
            <span style={{ marginRight: 10 }}></span>
            <Button
              type='link'
              icon={<DeleteTwoTone style={{ fontSize: "22px" }} />}
              onClick={() => {}}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div style={styles.filterBlock}>
        <Search
          size={"large"}
          placeholder='Поиск по имени'
          onSearch={value => {
            setArticlesFilter({ title: value });
          }}
          style={{ width: 400 }}
        />
      </div>
      <Table
        loading={loading}
        rowKey='_id'
        columns={columns}
        dataSource={articles}
        onChange={(pagination, oldFilters, sorter) => {}}
        pagination={{ defaultCurrent: 1, total: articlesTotal, pageSize: 30 }}
      />
    </>
  );
};

const styles = {
  filterBlock: {
    margin: 15,
  },
};

const mapStateToProps = ({ articles }) => ({ ...articles });

const mapDispatchToProps = (dispatch, { apiService, filter, articleId }) => {
  return bindActionCreators(
    {
      getArticles: getArticles(apiService, filter),
      removeArticle: removeArticle(apiService, articleId),
    },
    dispatch,
  );
};

export default compose(
  withApiService(),
  connect(mapStateToProps, mapDispatchToProps),
)(withRouter(ArticlesList));
