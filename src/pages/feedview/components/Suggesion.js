import React, {Component} from 'react';

//------------- Images Link Start -------------------
import image1 from '../../../assets/feedview/Images/pro6.jpg';
import image2 from '../../../assets/feedview/Images/pro5.jpg';
import image3 from '../../../assets/feedview/Images/pro7.jpg';

//------------- Images Link End ----------------------
class Suggesion extends Component{
    render(){
        return(
            <div>
                <div>Stories</div>
                <div>
                <img src={image1} className="pro"  alt='pro1'/>
                <img src={image2} className="pro" alt='pro2'/>
                <img src={image3} className="pro" alt='pro3'/>
                </div>  
            </div>
        );
    
    }
}

export default Suggesion;