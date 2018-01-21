import actionTypes from './actionTypes';
import dbConfig from './firebaseConfig';
import {browserHistory} from 'react-router';
export function logoutRequestAsync(){
    return (dispatch)=>{
        // console.log(logoutObj);
        // dispatch(logoutRequest());
        dbConfig.auth().signOut()
      .then(()=>{
          browserHistory.replace('/');
          dispatch(logoutSucceed());
        }
      )
      .catch((error)=>{
        console.log(error.message);
      })

    }
}

// function logoutRequest(){
//     return{
//         type: actionTypes.logout_REQUEST
//     }
// }
function logoutSucceed(){
    console.log();
    return{
        type: actionTypes.LOGOUT_SUCCEED,
        
    }
}

