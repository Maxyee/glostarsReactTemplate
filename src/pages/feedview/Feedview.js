import React, { Component } from "react";

//------------ Components Start ------------------
import Nav from './components/Nav';
import Imagebox from './components/Imagebox';
import Pro from './components/Pro';
import Rightflex from './components/Rightflex';
//------------ Components End ------------------

//----------------- CSS Start-------------------
import '../../assets/feedview/Css/ImgBox.css';
//----------------- CSS End-------------------


class Feedview extends Component{
    render(){
        return(
            <div>
                <Nav></Nav>
                <Imagebox></Imagebox>
                <Pro></Pro>
                <Rightflex className="flex"></Rightflex>
            </div>
        );
    }
}

export default Feedview;