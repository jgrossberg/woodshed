import React from 'react';
import { Route } from 'react-router-dom';


import About from './containers/AboutView';
import LessonList from './containers/LessonListView';
import LessonDetail from './containers/LessonDetailView';



const BaseRouter  = () => (
    <div>
        <Route exact path='/' component={LessonList} />
        <Route exact path='/lessons' component={LessonList} />
        <Route exact path='/about/' component={About} />        
        <Route exact path='/lessons/:lessonID' component={LessonDetail} />                
    </div>

);

export default BaseRouter;
