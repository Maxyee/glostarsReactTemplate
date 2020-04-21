import React, { Component } from "react";

//------------ Components Start ------------------
import Nav from './components/Nav';
import Imagebox from './components/Imagebox';
import Pro from './components/Pro';

//------------ Components End ------------------


//----------------- CSS Start-------------------

import '../../assets/landing/CSS/normalize.css';


//----------------- CSS End-------------------


class Feedview extends Component{
    render(){
        return(
            <div>
                <Nav></Nav>
                <Imagebox></Imagebox>
                <Pro></Pro>
            </div>
        );
    }
}

export default Feedview;