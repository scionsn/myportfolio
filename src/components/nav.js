import React from 'react';
import {Switch,Route} from 'react-router-dom'
import About from './about';
import Skills from './skills';
import Project from './projects';
import Contact from './contact';
const Nav =()=>
(<Switch>
    <Route exact path='/' component={About}></Route>
    <Route path='/skills' component={Skills}></Route>
    <Route path='/projects' component={Project}></Route>
    <Route path='/contact' component={Contact}></Route>

</Switch>)
export default Nav;
