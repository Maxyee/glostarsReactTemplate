import React, {Component} from 'react';

//------------ Components Start ------------------
import Img from './components/Img';
//------------ Components End ------------------

//----------------- CSS Start-------------------
//import '../../assets/landing/CSS/normalize.css';
//----------------- CSS End-------------------

//------------- Images Link Start -------------------
import image from '../../../assets/feedview/Images/pro.jpg';
import image1 from '../../../assets/feedview/Images/optn.png';
//------------- Images Link End ----------------------


class Imagebox extends Component{
    render(){
        return(
            <div className="imgbox">

                <div className="imgtopproname">anukaurmy</div>
                
                <div ><img src={image} className="imgtoppro"   alt='pro'/></div>
                <div ><img src={image1} className="optn"   alt='pro'/></div>
                <Img></Img>
                              
            </div>
        );
    
    }
}

export default Imagebox;