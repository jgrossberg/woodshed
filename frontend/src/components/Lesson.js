import React from 'react';
import { List, Icon } from 'antd';

import { Link } from 'react-router-dom';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Lessons = (props) => {
  return (
      <List
      size="small"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 20,
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          // itemLayout="horizontal"
          key={item.title}
          actions={[
            <IconText type="calendar" text={item.num_logs} />, 
            <IconText type="star" text={item.num_stars} />, 
            <IconText type="message" text={item.num_comments} />]}
        >
        
          <List.Item.Meta
            title={
              <Link to={`/lessons/${item.id}`}>{item.title}</Link>
            }
            />

        </List.Item>
      )}
    />

  )
}

export default Lessons;