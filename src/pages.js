import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landingpage from './components/landingpage';
import Contacts from './components/contacts';
import Projects from './components/projects';
import Resume from './components/resume'


function pages() {
    return (
        <div>
                <Switch>
                    <Route exact path='/' component={Landingpage}/>
                    <Route exact path='/contacts' component={Contacts}/>
                    <Route exact path='/projects' component={Projects}/>
                    <Route exact path='/resume' component={Resume}/>
                </Switch>
        </div>
    )
}

export default pages
