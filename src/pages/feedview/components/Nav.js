import React, {Component} from 'react';

//------------- Images Link Start -------------------
import image1 from '../../../assets/feedview/Images/search.jpg';
import image from '../../../assets/feedview/Images/inslogo.png';
import image2 from '../../../assets/feedview/Images/nav.PNG';
//------------- Images Link End ----------------------

class Nav extends Component{
    render(){
        return(
            <div className="nav">
                
                <img src={image} className="logo" alt='logo'/>
                <img src={image1} className="search" alt='logo'/>
                <img src={image2} className="navlogo" alt='logo'/>
                
                
            </div>
        );
    
    }
}

export default Nav;