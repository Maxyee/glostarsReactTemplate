import React, {Component} from 'react';

//------------- Images Link Start -------------------
import image from '../../../assets/feedview/Images/pro.jpg';

//------------- Images Link End ----------------------


class Pro extends Component{
    render(){
        return(
            <div>
            <div className="name">anukaurmy</div>
            
                <div className="profile"><img src={image} className="pro"  alt='pro'/></div>
            </div>
        );
    
    }
}

export default Pro;