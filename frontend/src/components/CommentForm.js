import React from 'react';
import {Form, Input, Button } from 'antd';
  

const FormItem = Form.Item;

class CustomForm extends React.Component {

  handleFormSubmit = (event) => {
      event.preventDefault();
      const author = event.target.elements.author.value;
      const content = event.target.elements.content.value;
      console.log(author,content)
  }
  render() {
    return (
      <div style={{marginRight: 'auto', marginLeft: 'auto', width: '75%'}}>
        <Form onSubmit={this.handleFormSubmit} >
          <FormItem>
            <Input name="author" placeholder="Your name here" />
          </FormItem>
          <FormItem>
            <Input name="author_email" placeholder="Your email" />
          </FormItem>
          <FormItem>
            <Input name="lesson" placeholder="Lesson ID :/" />
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