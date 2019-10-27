import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// Material Components
import { Paper, Typography, withStyles } from '@material-ui/core';
import LoginForm from '../components/Forms/Login';
import gs from '../static/images/gast.png';
import logo from '../static/images/petrolindaV4.png';

const styles = () => ({
  bg: {
    backgroundImage: `url(${gs})`, // 'linear-gradient(#15000278, #460108)',
    'background-repeat': 'no-repeat',
    'background-position': 'center center fixed',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
    height: '100vh',
    width: '100vw',
    borderRadius: 0,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  loginBlock: {
    backgroundColor: '#ffffff',
    display: 'flex',
    maxHeight: 350,
    maxWidth: 420,
    height: '100%',
    width: '100%',
    borderRadius: 0,
    margin: 'auto auto auto auto',
    padding: 30,
    marginLeft: 800,
    flexDirection: 'row',
    alignItems: 'flex-end',
    opacity: '0.8',
  },
  screenTitle: {
    color: '#333333',
    fontSize: 40,
    width: '100%',
  },
  fullW: {
    width: '100%',
  },
});

class Login extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Paper elevation={0} className={classes.bg}>
        <img
          alt="ajuda"
          src={logo}
          style={{
            display: 'flex',
            witdh: 200,
            heigth: 133,
            maxWidth: 500,
            position: 'fixed',
            alignSelf: 'flex-start',
            margin: 20,
          }}
        />
        <Paper className={classes.loginBlock}>
          <div style={{
            display: 'flex', flexDirection: 'column', width: '30vw', alignSelf: 'center',
          }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: 50 }}>
              <Typography
                variant="subheading"
                className={classes.screenTitle}
              >
                Login
              </Typography>
              <Typography
                variant="subheading"
                className={classes.fullW}
              >
                Seja bem-vindo
              </Typography>
            </div>
            <LoginForm style={{ padding: 100 }} />
          </div>
        </Paper>
      </Paper>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(Login);
