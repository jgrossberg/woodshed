import React from 'react';
import axios from 'axios';

import Lessons from '../components/Lesson';





class LessonList extends React.Component {

    state = {
        lessons: []
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/lessons')
            .then(res => {
                this.setState({
                    lessons: res.data
                });
            })
    }

    render () {
        return (
            <div>
                <Lessons data={this.state.lessons}/>
            </div>
        )
    }
}

export default LessonList