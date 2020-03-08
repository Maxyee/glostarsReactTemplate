import React, {Component} from 'react';

//------------ Components Start ------------------
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import SignUpForm from './components/SignUpForm';
import Container from './components/Container';
import Footer from './components/Footer';
//------------ Components End ------------------


//----------------- CSS Start-------------------

import '../../assets/landing/CSS/normalize.css';
import '../../assets/landing/CSS/bootstrap.min.css';
import '../../assets/landing/CSS/NAV.css';

//----------------- CSS End-------------------

class Landing extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <Signup></Signup>
                <SignUpForm></SignUpForm>
                <Container></Container>
                <Footer></Footer>
            </div>
        );
    }
}


export default Landing;