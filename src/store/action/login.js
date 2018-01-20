import actionTypes from './actionTypes';
import dbConfig from './firebaseConfig';
import {browserHistory} from 'react-router';
export function loginRequestAsync(loginObj){
    return (dispatch)=>{
        console.log(loginObj);
        dispatch(loginRequest());
        dbConfig.auth().signInWithEmailAndPassword(loginObj.email, loginObj.password)
        .then(user=>{
            browserHistory.push('/home');
            let obj={
                name: user.displayName,
                uid: user.uid,
                email: user.email
            }
            
            dispatch(loginSucceed(obj));
        })
        .catch((error)=>{
            alert(error.message);
        })


    }
}

function loginRequest(){
    return{
        type: actionTypes.LOGIN_REQUEST
    }
}
function loginSucceed(data){
    console.log(data);
    return{
        type: actionTypes.LOGIN_SUCCEED,
        data
    }
}

