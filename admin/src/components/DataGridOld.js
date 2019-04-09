import React, { PureComponent } from 'react';
import { zipObject } from 'lodash';
import { Link } from 'react-router-dom';
import { Table, Icon, Select, Input, Button, Pagination } from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;

class DataGrid extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      campaigns: null,
      pagination: {
        current: 1,
        pageSize: 15,
        total: 200,
      },
      filters: {},
      searchText: null,
      searchType: '_id',
    };
  }

  getSearchData = async () => {
    // Запрашиваем данные из API
    let searchField = this.state.searchText
      ? { [this.state.searchType]: this.state.searchText }
      : {};
    const pager = { ...this.state.pagination };
    pager.total = await this.getCountCampaigns({
      ...searchField,
      ...this.state.filters,
    });
    console.log(pager, 'pager');
    this.setState({ pagination: pager });
    this.getFilteredData({
      pageSize: 15,
      page: 1,
      filters: {
        ...searchField,
        ...this.state.filters,
      },
    });
  };

  getCountCampaigns = async (filters = {}) => {
    // Если не указан статус передаем нужные статусы
    if (!filters.status || filters.status.length < 1) {
      filters.status = {
        $in: [
          'new',
          'rejected',
          'edited',
          'verified',
          'processing',
          'failed',
          'complete',
        ],
      };
    }

    // return await api
    //   .get('campaignsCount', { params: { query: { ...filters } } })
    //   .then(async ({ response }) => {
    //     return await response;
    //   })
    //   .catch(console.error);
  };
  getFilteredData = (params = { pageSize: 15, page: 1 }) => {
    // Если не указан статус передаем нужные статусы
    if (!params.filters) {
      params.filters = {};
    }
    if (!params.filters.status || params.filters.status.length < 1) {
      params.filters.status = {
        $in: [
          'new',
          'rejected',
          'edited',
          'verified',
          'processing',
          'failed',
          'complete',
        ],
      };
    }

    // sorter: (a, b) => a.status.length - b.status.length,
    // sortOrder: true,

    this.setState({ loading: true });
    let requestParams = {
      params: {
        query: {
          ...params.filters,
        },
        sort: '-createdAt',
        populate: {
          path: 'owner',
          select: 'email store',
        },
        select: zipObject(
          ['type', 'emails', 'status', 'owner', 'createdAt', 'customersCount'],
          Array(6).fill(1)
        ),
        skip: Number(params.pageSize) * (Number(params.page) - 1),
        limit: params.pageSize,
      },
    };

    console.log(requestParams, 'requestParams');
    // api
    //   .get('campaigns', requestParams)
    //   .then(({ response }) => {
    //     console.log(response, 'response');
    //     this.setState({
    //       loading: false,
    //       campaigns: response,
    //     });
    //   })
    //   .catch(console.error);
  };

  init = async () => {
    this.setState({
      pagination: {
        current: 1,
        pageSize: 15,
        total: await this.getCountCampaigns(),
      },
    });
    await this.getFilteredData();
  };

  componentDidMount() {
    this.init();
  }
  handleTableChange = async (
    pagination = { pageSize: 15, current: 1 },
    filters,
    sorter
  ) => {
    if (filters.type) {
      if (filters.type.length === 0) {
        delete filters.type;
      }
    }
    const pager = { ...this.state.pagination };
    if (pagination.pageSize || pagination.current) {
      pager.current = pagination.current;
      pager.pageSize = pagination.pageSize;
    }

    if (this.state.searchText && this.state.searchType) {
      filters[this.state.searchType] = this.state.searchText;
    }
    pager.total = await this.getCountCampaigns(filters);
    this.setState({ pagination: pager });
    this.setState({ filters: filters });
    this.getFilteredData({
      pageSize: this.state.pagination.pageSize,
      page: this.state.pagination.current,
      filters,
    });
  };

  handleChangeInput = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state, 'this.state.campaigns');

    return (
      <div>
        <div style={{ display: 'inline-block' }}>
          <InputGroup compact>
            <Select
              onChange={value => {
                this.handleChangeInput('searchType', value);
              }}
              defaultValue="_id"
            >
              <Option value="_id">ID кампании</Option>
              <Option value="store">Магазин</Option>
            </Select>
            <Input
              onChange={e => {
                this.handleChangeInput('searchText', e.target.value);
              }}
              style={{ width: '30%' }}
              placeholder="Поисковый запрос"
            />
            <Button onClick={() => this.getSearchData()} icon="search">
              Поиск
            </Button>
          </InputGroup>
        </div>
        <br />
        <Table
          columns={[
            {
              title: 'ID',
              dataIndex: '_id',
            },
            {
              title: 'Тип',
              dataIndex: 'type',
            },
            {
              title: 'Адресатов',
              dataIndex: 'emails',
              width: 150,
              render: (text, record) =>
                Number(record.customersCount) || Number(record.emails.length),
            },
            {
              title: 'Статус',
              dataIndex: 'status',
              onFilter: (value, record) => record.status.includes(value),
              filters: [
                { text: 'New', value: 'new' },
                { text: 'Rejected', value: 'rejected' },
                { text: 'Edited', value: 'edited' },
                { text: 'Verified', value: 'verified' },
                { text: 'Processing', value: 'processing' },
                { text: 'Failed', value: 'failed' },
                { text: 'Complete', value: 'complete' },
              ],
            },
            {
              title: 'Создатель',
              dataIndex: 'owner.email',
              render: (text, record) =>
                record.owner ? record.owner.email : 'Не указан',
            },
            {
              title: 'Магазин',
              dataIndex: 'owner.store',
            },
            {
              title: 'Дата создания',
              dataIndex: 'createdAt',
            },
            {
              title: 'Действие',
              key: 'operation',
              render: (text, record) => (
                <div>
                  <Link
                    className="table-action"
                    to={`${this.props.location.pathname}/${record._id}`}
                  >
                    <Icon type="edit" title="Подробнее" />
                  </Link>
                </div>
              ),
            },
          ]}
          rowKey="_id"
          dataSource={this.state.campaigns}
          loading={this.state.loading}
          onChange={this.handleTableChange}
          pagination={false}
          filters={this.state.filters}
        />
        <br />
        {this.state.pagination.total > 0 ? (
          <Pagination
            current={this.state.pagination.current}
            pageSize={15}
            defaultCurrent={1}
            onChange={(page, pageSize) => {
              this.handleTableChange(
                { current: page, pageSize },
                this.state.filters,
                {}
              );
            }}
            total={this.state.pagination.total}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default DataGrid;


const placeholderData = [
  {
    metaTitle: 'Заголовок страницы1',
    metaKeywords: ['keyword1', 'keyword2', 'keyword3'],
    metaDescription: 'Мета описание страницы1',
    content: '<p>Контент1</p>',
    articlesTitle: 'Заголовок статьи1',
    miniatureImg:
      'https://avatars.mds.yandex.net/get-pdb/28866/9e621233-36ec-4e34-a372-9829f00a67ed/s375',
    showRSS: true,
    sendNotification: true,
    seoUrlPage: 'article1', // будет формироваться из заголовка статьи
    publishDate: '2019-04-19T14:38:48.745Z', // Дата отложенной публикации
    createdAt: '2019-03-19T14:38:48.745Z',
    updatedAt: '2019-03-19T14:38:48.745Z'
  }
];