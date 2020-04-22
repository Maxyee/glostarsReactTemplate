import React, {Component} from 'react';

//------------ Components Start ------------------
import Story from './Story';
import Suggesion from './Suggesion';

//------------ Components End ------------------

//----------------- CSS Start-------------------
//import '../../assets/feedview/Css/ImgBox.css';
import '../../../assets/feedview/Css/ImgBox.css';
//----------------- CSS End-------------------

class Rightflex extends Component{
    render(){
        return(
            <div className="flex">
               <stories><Story></Story></stories> 
               <Suggesion><Suggesion></Suggesion></Suggesion>               
            </div>
        );
    
    }
}

export default Rightflex;