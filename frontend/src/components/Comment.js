import React from 'react';
import { List, Avatar } from 'antd';

const data = [
    {
      title: 'Marvin Derpowitz',
      description: 'This lesson is great!'
    },
    {
      title: 'Jernce Adlinsky',
      description: 'Awesome material!'
    },
    {
      title: 'Hater',
      description: 'you suck!'
    },
    {
      title: 'dummy',
      description: 'none of this makes sense'
    },
  ];


const Comments = () => {
    return (
        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
            <List.Item>
            <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="/">{item.title}</a>}
                description={item.description}
        />
            </List.Item>
        )}
      />
    )
}

export default Comments;