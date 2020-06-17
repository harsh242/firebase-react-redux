import React from 'react';
import {Link } from 'react-router-dom';
import SignedinLinks from './SignedinLinks';
import SignedoutLinks from './SignedoutLinks';
import {connect} from 'react-redux';

const Navbar = (props) => {
    const {auth,profile} =props;
    const links = auth.uid? <SignedinLinks profile={profile}/>:<SignedoutLinks/>
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                    <Link to="/"  className="brand-logo">Let's Plan</Link>
                    {links}
            </div>
        </nav>
    )
}
const mapStatetoProps =(state)=>{
    console.log(state)
     return{
         auth:state.firebase.auth,
         profile:state.firebase.profile
     }
}

export default connect(mapStatetoProps)(Navbar);