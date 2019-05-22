import React from 'react';
import axios from 'axios';

import { PageHeader, Tag,  Row, Col, Icon, Divider} from 'antd';

import Comments from '../components/Comment';
import CustomForm from '../components/CommentForm';


const Description = ({ term, children, span = 12 }) => (
    <Col span={span}>
      <div className="description">
            <div className="detail">{term}: {children}</div>
      </div>
    </Col>
  );



class LessonDetail extends React.Component {

    state = {
        lesson: {},
    } 

    componentWillMount() {
        const lessonID = this.props.match.params.lessonID;
        axios.get(`http://127.0.0.1:8000/api/lessons/${lessonID}/`)
            .then(res=> {
                this.setState({
                    lesson: res.data,
                });
            })
    }

    formatDate(string) {
        return new Date(string).toLocaleDateString()
    }

    
    render () {
        return (
            <div> 
                <PageHeader
                    onBack={() => window.history.back()}
                    title={this.state.lesson.title}
                    tags={[
                        <Tag color="blue"><Icon type="calendar"/> {this.state.lesson.num_logs}</Tag>,
                        <Tag color="green"><Icon type="star"/>{this.state.lesson.num_stars}</Tag>,    
                    ]}
                >
                    <div className="wrap">
                        <div className="content padding">
        
                        <Row>
                            <Description term="Written by">{this.state.lesson.author_name}</Description>
                            {/* <Description term="Written by">{this.dateString}</Description> */}
                            <Description term="Submitted">{this.formatDate(this.state.lesson.created_on)}</Description>
                        </Row>
                        
                        
                        </div>
                    </div>
                </PageHeader>

                <Divider>Lesson</Divider>
                <p>
                    {this.state.lesson.content}
                </p>
                <Divider>Comments</Divider>
                
                <Comments data={this.state.lesson.comments}/>
                
                <CustomForm lessonId={this.state.lesson.id}/>
            </div>
        )
    }
}

export default LessonDetail

