import actionTypes from './actionTypes';
import dbConfig from './firebaseConfig';
import signupReducer from '../reducers/signupReducer';
import {Redirect} from 'react-router-dom';
import {browserHistory } from 'react-router';
console.log(signUpRequest());
export function signUpRequestAsync(SignupObj){
    return (dispatch)=>{
        dispatch(signUpRequest());
        console.log('till here code run')
        dbConfig.auth().createUserWithEmailAndPassword(SignupObj.email, SignupObj.password)
        .then(user=>{
            console.log('created user', user)            
            return user.updateProfile({
                displayName: SignupObj.name,
            })
            .then(()=>{
                browserHistory.push('/home')
                console.log('newly created user: ',user);
                let obj={
                    name: user.displayName,
                    uid: user.uid,
                    email: user.email
                }
                dispatch(signUpSucceed(obj));
            })
        })
        .catch((error)=>{
            alert(error.message);
        })


    }
}

function signUpRequest(){
    return{
        type: actionTypes.SIGNUP_REQUEST
    }
}
function signUpSucceed(data){
    return{
        type: actionTypes.SIGNUP_SUCCEED,
        data
    }
}