import actionTypes from './actionTypes';
import dbConfig from './firebaseConfig';
import signupReducer from '../reducers/signupReducer';
import { Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
// console.log(signUpRequest());
class SignupActions{

}
export function signUpRequestAsync(SignupObj) {
    return (dispatch) => {
        console.log('till here code run')
        dispatch(signUpRequest());
        dbConfig.auth().createUserWithEmailAndPassword(SignupObj.email, SignupObj.password)
        .then(user => {
                console.log('created user', user)
                browserHistory.push('/');
                return user.updateProfile({
                    displayName: SignupObj.name,
                })
                    .then(() => {
                        console.log('newly created user: ', user);
                        let obj = {
                            name: user.displayName,
                            uid: user.uid,
                            email: user.email
                        }
                        dbConfig.database().ref('/').child(`/${user.uid}`).set(obj)
                        dispatch(signUpSucceed(obj));
                    })
            })
            .catch((error) => {
                dispatch(signUpError(error.message));
                browserHistory.push('/signup');
                // alert(error.message);
            })


    }
}

function signUpRequest() {
    return {
        type: actionTypes.SIGNUP_PROGRESS
    }
}
function signUpSucceed(data) {
    return {
        type: actionTypes.SIGNUP_SUCCEED,
        data
    }
}
function signUpError(error){
    return{
        type: actionTypes.SIGNUP_ERROR,
        error
    }
}
export function signUpErrorAlert(){
    return{
        type: actionTypes.SIGNUP_ERROR_ALERT
    }
}
