import React from 'react';
import { Route } from 'react-router-dom';


import About from './containers/AboutView';
import Popular from './containers/PopularView';
import LessonList from './containers/LessonListView';
import LessonDetail from './containers/LessonDetailView';
import Woodshed from './containers/Home';



const BaseRouter  = () => (
    <div>
        <Route exact path='/' component={LessonList} />
        <Route exact path='/lessons' component={LessonList} />
        <Route exact path='/about/' component={About} />
        <Route exact path='/popular/' component={Popular} />
        <Route exact path='/shed/' component={Woodshed} />
        
        <Route exact path='/lessons/:lessonID' component={LessonDetail} />                
    </div>

);

export default BaseRouter;
