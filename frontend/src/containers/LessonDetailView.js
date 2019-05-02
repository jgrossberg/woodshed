import React from 'react';
import axios from 'axios';

import { Typography , Divider} from 'antd';

import Comments from '../components/Comment';
import CustomForm from '../components/CommentForm';


const { Title, Paragraph } = Typography;

class LessonDetail extends React.Component {

    state = {
        lesson: {},

    }

    componentDidMount() {
        const lessonID = this.props.match.params.lessonID;
        axios.get(`http://127.0.0.1:8000/api/lessons/${lessonID}/`)
            .then(res=> {
                this.setState({
                    lesson: res.data,
                });
                // console.log(res.data)
                // console.log(res.headers)
            })
    }

    render () {
        return (
            <div> 
                <Typography>
                    <Title>{this.state.lesson.title}</Title>
                    <Paragraph>

                    {this.state.lesson.content}
                    </Paragraph>
                </Typography>
                <Divider>Comments</Divider>
                <CustomForm />
                <Comments />
            </div>
        )
    }
};


export default LessonDetail

