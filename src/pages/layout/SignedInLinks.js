import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/auth';
import { connect } from 'react-redux';

const SignedInLinks = (props)=> {
    return (
        <ul className="right">
            <li>
                <NavLink to='/'>
                    About
                </NavLink>
                </li>
            <li>
                <a  onClick={()=>{}}>
                    Log Out
                </a>
            </li>
            <li>
                <NavLink to='/' className="btn btn-floating pink lighten-1">
                    {props.profile.initials}
                </NavLink>
            </li>
        </ul>
    )
}
const mapStateToProps = (state) =>{
    return {
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        // signOut: ()=>dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);