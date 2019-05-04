import React from 'react';
import axios from 'axios';

import { Divider} from 'antd';

import Comments from '../components/Comment';
import CustomForm from '../components/CommentForm';
import LessonCard from '../components/LessonCard';


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
            })
    }

    render () {
        console.log(this.state)
        return (
            <div> 
                <LessonCard data={this.state.lesson} />
                {/* {this.state.lesson} */}
                <Divider>Comments</Divider>
                <Comments data={this.state.lesson.comments}/>
                <CustomForm lessonId={this.state.lesson.id}/>
            </div>
        )
    }
}

export default LessonDetail

