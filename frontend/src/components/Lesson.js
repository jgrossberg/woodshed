import React from 'react';
import { List, Avatar, Icon } from 'antd';


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Lessons = (props) => {
  return (
      <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText type="calendar" text={item.num_logs} />, 
            <IconText type="star" text="156" />, 
            <IconText type="message" text={item.num_comments} />]}
          extra={<img width={180} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
        >
          <List.Item.Meta
            avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon="user" />}
            title={
              <a href={`/lessons/${item.id}`}>{item.title}</a>
            }
            description={item.description}
          />
          <small>by: {item.author_name}</small><br></br>

          {item.content}
        </List.Item>
      )}
    />

  )
}

export default Lessons;