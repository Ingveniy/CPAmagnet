import React, { PureComponent } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class Sidebar extends PureComponent {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256, height: '100%' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['']}
        mode="inline"
      >
        <Menu.Item key="1">
          <span>
            <Icon type="layout" />
            <span>Главная</span>
          </span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="folder" />
              <span>Контент</span>
            </span>
          }
        >
          <Menu.Item key="2">Статьи</Menu.Item>
          <Menu.Item key="3">Видео</Menu.Item>
          <Menu.Item key="4">Опросы</Menu.Item>
          <Menu.Item key="5">Категории</Menu.Item>
          <Menu.Item key="6">Баннеры</Menu.Item>
        </SubMenu>
        <Menu.Item key="7">
          <span>
            <Icon type="mail" />
            <span>Заявки</span>
          </span>
        </Menu.Item>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="solution" />
              <span>Партнеры</span>
            </span>
          }
        >
          <Menu.Item key="8">Регионы</Menu.Item>
          <Menu.Item key="9">Проекты</Menu.Item>
          <Menu.Item key="10">Партнеры</Menu.Item>
        </SubMenu>
        <Menu.Item key="11">
          <span>
            <Icon type="notification" />
            <span>Рассылки</span>
          </span>
        </Menu.Item>
        <Menu.Item key="12">
          <span>
            <Icon type="team" />
            <span>Пользователи</span>
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Sidebar;
