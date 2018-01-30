import React from 'react';
import dbConfig from '../store/action/firebaseConfig';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { browserHistory } from 'react-router';
import applicationLogoutReducer from '../store/reducers/logoutReducer';
import { logoutRequestAsync } from '../store/action/logout';
import {connect} from 'react-redux';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
function mapStateToProps(state) {
  return {
    currentUser: state.applicationLogoutReducer.currentUser
  }
}
function mapDispatchToProps(dispatch) {
  return {
    signOutUser: () => dispatch(logoutRequestAsync())
  }
}
class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      status: false
    };
    dbConfig.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ status: true });
      }
      else {
        this.setState({ status: false });
      }
    })
  }
  signOut = () => {
    this.props.signOutUser()
    this.setState({open: false});
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  changeURL = (page) => {
    console.log(this.props);

  }

  render() {
    return (
      <div>
        <AppBar
          title="boilerplate"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonClick={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem onClick={this.changeURL}>Crimes</MenuItem>
          <MenuItem onClick={this.changeURL}>Missing Persons</MenuItem>
          <MenuItem onClick={this.changaeURL}>Complain</MenuItem>
          {
            this.state.status ?
              <MenuItem onClick={this.signOut}>Logout</MenuItem>
              :
              null
          }
        </Drawer>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerUndockedExample);