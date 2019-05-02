import React from 'react';
import { List, Avatar } from 'antd';

const Lessons = (props) => {
    return (
        <List
        itemLayout="vertical"
        dataSource={props.data}
        renderItem={item => (
          <List.Item
            key={item.title}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    )
}

export default Lessons;