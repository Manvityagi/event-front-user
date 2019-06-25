import React from 'react';
import { NavLink } from 'react-router-dom';
import { WIDTH_MD } from '../../util/Constants';
import { connect } from 'react-redux';

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
            <ul className={`right ${props.windowWidth <= WIDTH_MD ? 'hide' : '' }`}>
                {navLinks}
            </ul>
        )
    )
}
const mapStateToProps = (state) =>{
    return {
        windowWidth: state.window.width
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedOutLinks);