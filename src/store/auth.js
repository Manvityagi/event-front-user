import api from "../util/api";
import storage from '../util/localStorage';

const initState = {};

const auth = (state = initState, action) => {
	switch (action.type) {
		case 'auth.signUp':
			return { ...state, signUpLoading: true };
		default: return state;
	}
};

export default auth;

export const signUp = (newUser) => {
	return (dispatch, getState) => {
		api.post('/user/register', {
			...newUser
		})
		.then(res=>{
		    console.log(res);
		    dispatch({type: 'SIGNUP_SUCCESS'})
		})
		.catch(err=>{
		    console.log(err);
		    dispatch({type: 'SIGNUP_ERROR', err})
		})
	}
}

export const signIn = (credentials) => {
	return (dispatch, getState) => {
		dispatch({type: 'auth.LOGIN'})
		api.post('/user/login', {
			...credentials
		})
		.then(res=>{
		    console.log(res);
		    dispatch({type: 'LOGIN_SUCCESS'})
		})
		.catch(err=>{
		    console.log(err);
		    dispatch({type: 'LOGIN_ERROR', err})
		})
	}
}

export const signOut = (credentials) => {
	return (dispatch, getState) => {
		storage.clear()
		.then(res=>{
		    console.log(res);
		    dispatch({type: 'LOGOUT_SUCCESS'})
		})
		.catch(err=>{
		    console.log(err);
		    dispatch({type: 'LOGOUT_ERROR', err})
		})
	}
}
