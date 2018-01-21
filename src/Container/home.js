import React from 'react';
import dbConfig from '../store/action/firebaseConfig';
import applicationLogoutReducer from '../store/reducers/logoutReducer';
import {logoutRequestAsync} from '../store/action/logout';
function mapStateToProps(state) {
    return {
        currentUser: state.applicationLogoutReducer.currentUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signInUser: (dataObj)=>dispatch(logoutRequestAsync(dataObj))
    }
}
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            isUser: false
        }
        dbConfig.auth().onAuthStateChanged(user => {
            if (user) {
                this.state.isUser = true;
            } else {
                this.state.isUser = false;
            }
        })

    }
    
    render() {
        return (
            <div>
                <h1 >
                    Home Page
                </h1>
            </div>
        );
    }
}

export default Home;
