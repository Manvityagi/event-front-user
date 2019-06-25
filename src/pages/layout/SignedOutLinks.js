import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = (props)=> {
    let navLinks = (
        <React.Fragment>
            <li>
                <NavLink to='/signup' onClick={(e)=>{props.closeSidebar && props.closeSidebar(e)}}>
                    Sign Up
                </NavLink>
                </li>
            <li>
                <NavLink to='/signin' onClick={(e)=>{props.closeSidebar && props.closeSidebar(e)}}>
                    Log In
                </NavLink></li>
        </React.Fragment>
    );
    return (
        props.side ?
            navLinks
        : (
            <ul className="right">
                {navLinks}
            </ul>
        )
    )
}

export default SignedOutLinks;