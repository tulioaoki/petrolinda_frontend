import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

import { withStyles, Fab, DialogContentText } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import { withSnackbar } from 'notistack';
// import PropTypes from 'prop-types';
import { CustomInput } from '../../CustomInput';

const styles = (theme) => ({
  dialog: {
    width: '40vw',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    heigth: '80vh',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
});


export class RegisterDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      fullName: '',
      username: '',
      password: '',
      check_password: '',
      cep: '',
      state: '',
      city: '',
      neighborhood: '',
      number: '',
      street: '',
    };
  }

  render() {
    const {
      open,
      fullName,
      username,
      password,
      checkPassword,
      cep,
      state,
      city,
      neighborhood,
      number,
      street,
    } = this.state;

    const { classes } = this.props;

    const handleClickOpen = () => {
      this.setState({ open: true });
    };

    const handleFormChange = (e) => {
      const { id, value } = e.target;
      this.setState((prevState) => ({ ...prevState, [id]: value }));
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
        <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleClickOpen}>
          <PersonAddIcon />
        </Fab>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Criar um novo usuário</DialogTitle>
          <DialogContent className={classes.dialog}>
            <DialogContentText style={{ fontWeight: 'bolder', marginTop: 20, color: 'black' }}>
              Geral
            </DialogContentText>
            <CustomInput
              headerInputLabel=""
              id="fullName"
              label="Nome Completo"
              type="text"
              placeholder="Insira o nome"
              onChange={handleFormChange}
              value={fullName}
            />
            <CustomInput
              headerInputLabel=""
              id="username"
              label="Usuário"
              type="text"
              placeholder="Insira o usuário"
              onChange={handleFormChange}
              value={username}
            />
            <CustomInput
              headerInputLabel=""
              id="password"
              label="Senha"
              type="password"
              placeholder="Insira a senha"
              onChange={handleFormChange}
              value={password}
            />
            <CustomInput
              headerInputLabel=""
              id="checkPass"
              label="Confirmar senha"
              type="password"
              placeholder="Repita a senha"
              onChange={handleFormChange}
              value={checkPassword}
            />
            <DialogContentText style={{ fontWeight: 'bolder', marginTop: 20, color: 'black' }}>
              Endereço
            </DialogContentText>
            <CustomInput
              headerInputLabel=""
              id="cep"
              label="CEP"
              type="text"
              placeholder="Insira o CEP"
              onChange={handleFormChange}
              value={cep}
            />
            <CustomInput
              headerInputLabel=""
              id="state"
              label="Estado"
              type="text"
              placeholder="Escolha o Estado"
              onChange={handleFormChange}
              value={state}
            />
            <CustomInput
              headerInputLabel=""
              id="city"
              label="Cidade"
              type="text"
              placeholder="Insira a cidade"
              onChange={handleFormChange}
              value={city}
            />
            <CustomInput
              headerInputLabel=""
              id="neighborhood"
              label="Bairro"
              type="text"
              placeholder="Bairro"
              onChange={handleFormChange}
              value={neighborhood}
            />
            <CustomInput
              headerInputLabel=""
              id="street"
              label="Rua"
              type="text"
              placeholder="Rua"
              onChange={handleFormChange}
              value={street}
            />
            <CustomInput
              headerInputLabel=""
              id="number"
              label="Número"
              type="text"
              placeholder="Número"
              onChange={handleFormChange}
              value={number}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary" variant="contained">
              Cancelar
            </Button>
            <Button
              onClick={handleSubmit}
              type="submit"
              variant="contained"
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
