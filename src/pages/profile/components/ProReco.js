import React, { Component } from 'react';


//------------- Images Link Start -------------------

import Weekly_small from '../../../assets/profile/badges/Weekly_small.png';
import Monthly_small from '../../../assets/profile/badges/Monthly_small.png';
import Grand_Competition_small from '../../../assets/profile/badges/Grand_Competition_small.png';
import Exhibition_small from '../../../assets/profile/badges/Exhibition_small.png';


//------------- Images Link End -------------------




class ProReco extends Component {
    render() {
        return (
            <div>
                <div class="col-md-5 col-lg-4 col-xl-4 RG">
                    <div class="recognition">
                        <h5>Recognition:</h5>
                        <br></br>
                        <a href="weekly.html"><img src={Weekly_small} class="badges" alt='weekly' /></a>
                        <a href="monthly.html"><img src={Monthly_small} class="badges" alt='Monthly'/></a>
                        <a href="competiton.html"><img src={Grand_Competition_small} class="badges" alt='Compitition'/></a>
                        <a href="exibition.html"><img src={Exhibition_small} class="badges" alt='Exibition'/></a>
                    </div>

                </div>

            </div>
        );
    }
}

export default ProReco;