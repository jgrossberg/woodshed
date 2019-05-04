import React from 'react';
import { List, Avatar } from 'antd';


const Comments = (props) => {
  console.log(props)  
  return (
        <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
            <List.Item>
            <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="/">{item.author_name}</a>}
                description={item.content}
        />
            </List.Item>
        )}
      />
    )
}

export default Comments;