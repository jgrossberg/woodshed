import React from 'react';
import axios from 'axios';

import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

class About extends React.Component {

    state = {
        response: {},
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/lessons/1`)
            .then(res=> {
                this.setState({
                    response: res.data,
                    headers: res.status
                });
                // console.log(res.data)
                console.log(res.headers)
            })
    }


    render () {
        return (
            <div> 
                <Typography>
                    <Title>{this.state.response.title}</Title>
                    <Paragraph>

                    {this.state.response.content}
                    {this.state.headers}
                    </Paragraph>
                </Typography>
            </div>
        )
    }
};


export default About
