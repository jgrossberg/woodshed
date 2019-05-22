import React from 'react';
import axios from 'axios';

import {Form, Input, Button } from 'antd';
  

const FormItem = Form.Item;

class CustomForm extends React.Component {

  handleFormSubmit = async (event) => {
      event.preventDefault();
      const authorName = event.target.elements.author_name.value;
      const authorEmail = event.target.elements.author_email.value;
      const content = event.target.elements.content.value;
      const lessonId = this.props.lessonId;

      try {
        const res = await axios.post('http://127.0.0.1:8000/api/comments/', {
          author_name: authorName,
          author_email: authorEmail,
          content: content,
          lesson: lessonId
        });
        this.forceUpdate()

        return console.log(res);
      }
      catch (error) {
        return console.err(error);
      }    

    }

  render() {
    return (
      <div style={{marginRight: 'auto', marginLeft: 'auto', width: '75%'}}>
        <Form onSubmit={this.handleFormSubmit}>

          <FormItem>
            <Input name="author_name" placeholder="Your name here" />
          </FormItem>
          <FormItem>
            <Input name="author_email" placeholder="Your email" />
          </FormItem>
          <FormItem>
            <Input name="content" placeholder="Comment here"
            style={{
              height: '150px'
            
            }}/>
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
  
export default CustomForm