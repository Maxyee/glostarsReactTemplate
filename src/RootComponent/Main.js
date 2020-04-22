import React, {Component} from 'react';

//------------ Components Start ------------------

import Landing from '../pages/landing/Landing';
import Competition from '../pages/competition/Competition';
import Profile from '../pages/profile/Profile';
import Feedview from '../pages/feedview/Feedview';

//------------ Components End ------------------


//----------------- CSS Start-------------------

//import '../temp/css/profilePage.css';
//import '../temp/css/normalize.css';
//import '../assets/css/s.css';
//import '../assets/css/lightbox.min.css';

//----------------- CSS End-------------------




import {
    BrowserRouter as Router,
    Switch,
    Route    
} from 'react-router-dom';


class Main extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                            <Route exact path="/">
                                <Profile></Profile>
                            </Route>
                            <Route path="/competition">
                                <Competition></Competition>
                            </Route>
                            <Route path="/landing">
                                <Landing></Landing>
                            </Route>
                            <Route path="/feedview">
                                <Feedview></Feedview>
                            </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Main;