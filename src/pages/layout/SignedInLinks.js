import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/auth';
import { connect } from 'react-redux';
import Media from 'react-media';

const SignedInLinks = (props)=> {
    let navLinks = (
        <React.Fragment>
            <li>
                <NavLink to='/' onClick={(e)=>{props.closeSidebar && props.closeSidebar(e)}}>
                    About
                </NavLink>
            </li>
            <li>
                <a onClick={(e)=>{props.closeSidebar && props.closeSidebar(e); props.signOut()}}>
                    Log Out
                </a>
            </li>
            <li>
                <NavLink to='/' onClick={(e)=>{props.closeSidebar && props.closeSidebar(e)}}>
                    Profile
                </NavLink>
            </li>
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
const mapStateToProps = (state) =>{
    return {
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signOut: ()=>dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);