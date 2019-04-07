import React, { PureComponent } from "react";
import { Icon, Table } from "antd";
class DataGrid extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  handleTableChange = () => {};
  render() {
    return (
      <Table
        columns={[
          {
            title: "ID",
            dataIndex: "_id"
          },
          {
            title: "Тип",
            dataIndex: "type"
          },
          {
            title: "Пользователь",
            dataIndex: "user"
          },
          {
            title: "Дата",
            dataIndex: "createdAt"
          },
          {
            title: "Действие",
            key: "operation",
            render: (text, record) => <Icon type="edit" title="Подробнее" />
          }
        ]}
        rowKey="_id"
        dataSource={this.state.data}
        loading={this.state.loading}
        onChange={this.handleTableChange}
        pagination={false}
      />
    );
  }
}

const styles = {
  DataGridContainer: {}
};
export default DataGrid;
