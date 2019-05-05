import React from 'react';
import { Layout, } from 'antd';

import CustomHeader from '../components/Header';

const { Content, Footer } = Layout;


const CustomLayout = (props) => {
    return (
        <Layout className="layout">
        
        {/* <Header> */}
            <CustomHeader />
        {/* </Header> */}


        <Content style={{ padding: '0 50px' }}>
            <p style={{ margin: '16px 0' }}>&nbsp;</p>
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