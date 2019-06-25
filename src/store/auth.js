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
			//might need change depending on api response
			if(res.status === 200){
				dispatch({type: 'auth.userSignupSuccess'})
			}else{
				dispatch({type: 'auth.userSignupError', err: res.msg})	
			}
		})
		.catch(err=>{
		    console.log(err);
		    dispatch({type: 'auth.userSignupError', err})
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
			//might need change depending on api response
			if(res.status === 200){
				dispatch({type: 'auth.userLoginSuccess'});
			} else {
				dispatch({type: 'auth.userLoginError', err: res.msg})
			}
		})
		.catch(err=>{
		    console.log(err);
		    dispatch({type: 'auth.userLoginError', err})
		})
	}
}

export const signOut = () => {
	return (dispatch, getState) => {
		storage.clear()
		.then(res=>{
		    console.log(res);
		    dispatch({type: 'auth.signOutSuccess'})
		})
		.catch(err=>{
		    console.log(err);
		    dispatch({type: 'auth.signOutError', err})
		})
	}
}
