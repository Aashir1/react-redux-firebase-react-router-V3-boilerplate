import actionTypes from '../action/actionTypes';
let initialState ={
    currentUser: {}
}
function applicationReducers(state = initialState, action){
    console.log(action);
    switch(action.type){
        case actionTypes.SIGNUP_SUCCEED:
            return Object.assign({}, state, {currentUser: action.data});
        default:
        return state;
    }
}

export default applicationReducers;