import actionTypes from '../action/actionTypes';
let initialState ={
    currentUser: {}
}
function applicationSignInReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.LOGIN_SUCCEED:
        console.log('login ka action',action);
            return Object.assign({}, state, {currentUser: action.data});
        default:
        return state;
    }
}

export default applicationSignInReducer;