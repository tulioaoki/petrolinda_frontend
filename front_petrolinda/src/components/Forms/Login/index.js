import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';

import {
  Button, Input, InputLabel, withStyles,
} from '@material-ui/core';
import { handleLoginUser } from '../../../actions/User';

const styles = () => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    'justify-content': 'space-around',
  },
  formItem: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    'justify-content': 'space-around',
    paddingTop: 20,
    paddingBottom: 20,
  },
});

class LoginForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      pass: '',
    };
  }

  render() {
    // style, navigation and redux props
    const { classes, history, dispatch } = this.props;
    const { pass, login } = this.state;

    const handleChangeLogin = (event) => {
      const { value } = event.target;
      this.setState((prevState) => ({ ...prevState, login: value }));
    };

    const handleChangePass = (event) => {
      const { value } = event.target;
      this.setState((prevState) => ({ ...prevState, pass: value }));
    };

    const onClick = () => {
      dispatch(handleLoginUser({ login, pass }))
        .then(() => {
          const { reducerUser } = this.props;
          if (reducerUser.token) {
            // If logged, goes to homepage
            history.push('/');
          } else {
            // If not logged, warning pops up
            const { enqueueSnackbar } = this.props;
            enqueueSnackbar('Credenciais inválidas.',
              { variant: 'error', autoHideDuration: 3000 });
          }
        });
    };

    return (
      <>
        <div className={classes.container}>
          <div className={classes.formItem}>
            <InputLabel>Login</InputLabel>
            <Input
              id="login"
              value={login}
              onChange={(e) => handleChangeLogin(e)}
              multiline={false}
              type="text"
            />
          </div>
          <div className={classes.formItem}>
            <InputLabel>Password</InputLabel>
            <Input
              id="password"
              value={pass}
              onChange={handleChangePass}
              multiline={false}
              type="password"
            />
          </div>
          <Button onClick={onClick} variant="contained" color="primary" type="submit">Entrar</Button>
        </div>
      </>

    );
  }
}
const mapStateToProps = ({ REDUCER_USER }) => ({
  reducerUser: REDUCER_USER,
});

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  reducerUser: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
};


const LoginWithSnack = withSnackbar(LoginForm);
export default withRouter(connect(mapStateToProps)(withStyles(styles)(LoginWithSnack)));
