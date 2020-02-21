import React, { PureComponent } from "react";
import { Menu, Icon } from "antd";

import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapKeyToNav = {
  "1": "",
  "2": "articles",
  "3": "video",
  "4": "tests",
  "5": "categories",
  "6": "banners",
  "7": "leads",
  "8": "regions",
  "9": "projects",
  "10": "partners",
  "11": "letters",
  "12": "users",
};
const SubMenu = Menu.SubMenu;
class Sidebar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sidebarShow: true,
    };
  }

  handleClick = e => {
    this.props.history.push(`/${mapKeyToNav[e.key]}`);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={styles.sidebarMenu}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={[""]}
        mode='inline'
      >
        <Menu.Item style={{ margin: 0 }} key='1'>
          <span>
            <Icon type='layout' />
            <span>Главная</span>
          </span>
        </Menu.Item>
        <SubMenu
          key='sub1'
          title={
            <span>
              <Icon type='folder' />
              <span>Контент</span>
            </span>
          }
        >
          <Menu.Item key='2'>Статьи</Menu.Item>
          <Menu.Item key='4'>Опросы</Menu.Item>
          <Menu.Item key='5'>Темы</Menu.Item>
        </SubMenu>
        <Menu.Item key='7'>
          <span>
            <Icon type='mail' />
            <span>Заявки</span>
          </span>
        </Menu.Item>
        <SubMenu
          key='sub2'
          title={
            <span>
              <Icon type='solution' />
              <span>Партнеры</span>
            </span>
          }
        >
          <Menu.Item key='8'>Регионы</Menu.Item>
          <Menu.Item key='9'>Проекты</Menu.Item>
          <Menu.Item key='10'>Партнеры</Menu.Item>
        </SubMenu>
        <Menu.Item key='11'>
          <span>
            <Icon type='notification' />
            <span>Рассылки</span>
          </span>
        </Menu.Item>
        <Menu.Item key='12'>
          <span>
            <Icon type='team' />
            <span>Пользователи</span>
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}
const styles = {
  sidebarMenu: {
    height: "calc(100vh - 72px)",
  },
};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(withRouter(Sidebar));
