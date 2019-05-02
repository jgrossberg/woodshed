import React from 'react';
import { Route } from 'react-router-dom';


import About from './containers/AboutView';
import Popular from './containers/PopularView';
import LessonList from './containers/LessonListView';
 
const BaseRouter  = () => (
    <div>
        <Route exact path='/' component={LessonList} />
        <Route exact path='/about/' component={About} />
        <Route exact path='/popular/' component={Popular} />
        
                
    </div>

);

export default BaseRouter;
