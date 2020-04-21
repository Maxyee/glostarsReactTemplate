import React, {Component} from 'react';

//------------- Images Link Start -------------------
import images from '../../../assets/feedview/Images/img1.jpg';
//------------- Images Link End ----------------------


class Img extends Component{
    render(){
        return(
        <div>
            <div>
                <a href="Style/img1.jpg" >
                <img src={images} className="img" alt='weekly'/>
                </a>
            </div>
        </div>
        );
    }
}
export default Img;