import React from 'react';
import axios from 'axios';

import { Typography , Divider} from 'antd';

import Comments from '../components/Comment';
import CustomForm from '../components/CommentForm';


const { Title, Paragraph } = Typography;

class Popular extends React.Component {

    state = {
        response: {},
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/lessons/1`)
            .then(res=> {
                this.setState({
                    response: res.data,
                });
            })
    }

    render () {
        return (
            <div> 
                <Typography>
                    <Title>{this.state.response.title}</Title>
                    <Paragraph>

                    {this.state.response.content}
                    </Paragraph>
                </Typography>
                <Divider>Comments</Divider>
                <CustomForm />
                <Comments />
            </div>
        )
    }
};


export default Popular

