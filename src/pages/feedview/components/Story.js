import React, { Component } from 'react';

//------------- Images Link Start -------------------
import image1 from '../../../assets/feedview/Images/pro1.jpg';
import image2 from '../../../assets/feedview/Images/pro2.jpg';
import image3 from '../../../assets/feedview/Images/pro3.jpg';
import image4 from '../../../assets/feedview/Images/pro4.jpg';
//------------- Images Link End ----------------------


class Story extends Component {
    render() {
        return (
            <div>
                <div className="Sheader">Stories</div>
                <div className="seeall">Watch All</div>

                    <div>
                       
                        <div>
                            <div className="Sproname">Max</div>
                            <img src={image1} className="Spro" alt='pro3' />
                        </div>
                        
                        <div>
                            <div className="Sproname">Rax</div>
                            <img src={image2} className="Spro" alt='pro3' />
                        </div>

                        <div>
                            <div className="Sproname">Rave</div>
                            <img src={image3} className="Spro" alt='pro3' />
                        </div>

                        <div>
                            <div className="Sproname">Mave</div>
                            <img src={image4} className="Spro" alt='pro3' />
                        </div>
                        <div className="Sproname">Max</div>
                    
                    </div >
                  
            </div >
        );

    }
}

export default Story;