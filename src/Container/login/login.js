import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {loginRequestAsync} from '../../store/action/login';
import applicationSignInReducer from '../../store/reducers/loginReducer'
const style = {
    paper: {
        height: '100%',
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
        display: 'inline-block',
        padding: '40px'
    },
    paperWapper: {
        width: '70%',
        margin: '0 auto',
        marginTop: 100

    },
    textStyle: {
        width: '100%'
    },
    button: {
        width: '100%',
        marginTop: '10px',
        marginBottom: '10px'
    },
    heading: {
        color: '#212121'
    }

};


function mapStateToProps(state) {
    return {
        currentUser: state.applicationSignInReducer.currentUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signInUser: (dataObj)=>dispatch(loginRequestAsync(dataObj))
    }
}
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }
    register = () => {
        browserHistory.push('/signup');
    }
    updateValue = (ev, target) => {

        let obj = {};
        obj[target] = ev.target.value;
        this.setState(obj);
    }
    signIn = () =>{
        let obj = {
            email: this.state.email,
            password:this.state.password
        }
        this.props.signInUser(obj);
    }
    render() {
        return (
            <div style={style.paperWapper}>
                <Paper style={style.paper} zDepth={3} >
                    <h1 style={style.heading}>Login</h1>
                    <TextField
                        onChange={(event) => { this.updateValue(event, 'email') }}
                        value={this.state.email}
                        style={style.textStyle}
                        type='email'
                        hintText=""
                        floatingLabelText="Email*"
                    /><br />
                    <TextField
                        onChange={(event) => { this.updateValue(event, 'password') }}
                        value={this.state.password}
                        style={style.textStyle}
                        type='password'
                        hintText=""
                        floatingLabelText="Password"
                    /><br />
                    <RaisedButton onClick = {this.signIn} label="Login" primary={true} style={style.button} />
                    <RaisedButton onClick={this.register} label="Register" primary={true} style={style.button} />
                </Paper>
            </div>
        );
    }
}

// export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);
