import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { withStyles, Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import { withSnackbar } from 'notistack';
// import PropTypes from 'prop-types';
import { CustomInput } from '../../CustomInput';

const styles = () => ({
  dialog: {
    width: '40vw',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
});


export class RegisterDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: '',
      username: '',
      password: '',
      check_password: '',

    };
  }

  render() {
    const {
      open,
      name,
      username,
      password,
      checkPassword,
    } = this.state;

    const { classes } = this.props;

    const handleClickOpen = () => {
      this.setState({ open: true });
    };

    const handleChangeName = (e) => {
      const { value } = e.target;
      this.setState((prevState) => ({ ...prevState, name: value }));
    };

    const handleChangeUsername = (e) => {
      const { value } = e.target;
      this.setState((prevState) => ({ ...prevState, username: value }));
    };
    const handleChangePass = (e) => {
      const { value } = e.target;
      this.setState((prevState) => ({ ...prevState, password: value }));
    };
    const handleChangeCheckPass = (e) => {
      const { value } = e.target;
      this.setState((prevState) => ({ ...prevState, check_password: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      this.setState({ open: false });
    };

    const handleClose = () => {
      this.setState({ open: false });
    };

    return (
      <div>
        <Button color="primary" style={{ padding: 10 }} onClick={handleClickOpen}>
          <PersonAddIcon />
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Criar um novo usuário</DialogTitle>
          <DialogContent className={classes.dialog}>
            <CustomInput
              headerInputLabel=""
              id="name"
              label="Nome Completo"
              type="text"
              placeholder="Insira o nome"
              onChange={handleChangeName}
              value={name}
            />
            <CustomInput
              headerInputLabel=""
              id="user"
              label="Usuário"
              type="text"
              placeholder="Insira o usuário"
              onChange={handleChangeUsername}
              value={username}
            />
            <CustomInput
              headerInputLabel=""
              id="password"
              label="Senha"
              type="password"
              placeholder="Insira a senha"
              onChange={handleChangePass}
              value={password}
            />
            <CustomInput
              headerInputLabel=""
              id="checkPass"
              label="Confirmar senha"
              type="password"
              placeholder="Repita a senha"
              onChange={handleChangeCheckPass}
              value={checkPassword}
            />
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancelar
            </Button>
            <Button
              onClick={handleSubmit}
              type="submit"
              color="primary"
            >
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


RegisterDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles(styles)(RegisterDialog)));
