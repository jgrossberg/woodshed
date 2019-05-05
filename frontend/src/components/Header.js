import React from 'react';
import { Link } from 'react-router-dom';

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class CustomHeader extends React.Component {
  
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          mode="horizontal"
          theme="dark"
        >
          <Menu.Item key="woodshed">
            <Link to="/lessons">
              <Icon type="home" />
              Woodshed
            </Link>
          </Menu.Item>

          <SubMenu title={<span className="submenu-title-wrapper"><Link to="/lessons">Lessons</Link></span>}>
            <Menu.Item key="setting:1"><Link to="/lessons">Browse all</Link></Menu.Item>
            <Menu.Item key="setting:2"><Link to="/popular">Popular</Link></Menu.Item>
          </SubMenu>
          
          <Menu.Item key="about">
            <Link to="/about"> 
            About
            </Link>
          </Menu.Item>
                  
        </Menu>
                  
      </div>
    )
  }
}

export default CustomHeader;