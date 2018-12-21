import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { classes } = this.props;

    return (
        <div className={classes.root}>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" color="inherit" className={classes.grow}>
                    Adventureland
                  </Typography>
                  {
                    !isAuthenticated() && (
                        <Button
                          id="qsLoginBtn"
                          color="inherit"
                          onClick={this.login.bind(this)}
                        >
                          Login
                        </Button>
                      )
                  }
                  {
                    isAuthenticated() && (
                        <Button
                          id="qsLogoutBtn"
                          color="inherit"
                          onClick={this.logout.bind(this)}
                        >
                          Log Out
                        </Button>
                      )
                  }
                </Toolbar>
              </AppBar>
            </div>
    );
  }
}

export default withStyles(styles)(App);
