import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


const CustomLayout = (props) => {
    return (
        <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
            >
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/popular">Popular</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
            <Menu.Item key="4">Sign up</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {props.children}
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            Jonah Grossberg
        </Footer>
        </Layout>
    )
}
 export default CustomLayout