import React from 'react'
import Layout from 'antd/lib/layout'
import Menu from 'antd/lib/menu'
import Icon from 'antd/lib/icon'
const { Sider } = Layout
// const SubMenu = Menu.SubMenu;

class MainSider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      mode: 'inline',
    }
  }

  onCollapse(collapsed) {
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    })
  }

  render() {
    return (
      <Sider collapsible={true} defaultCollapsed={true} collapsedWidth="0">
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

MainSider.__ANT_LAYOUT_SIDER = true

export default MainSider
