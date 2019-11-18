import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

import {
  withStyles, Fab, DialogContentText, Select, MenuItem, InputLabel,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import { withSnackbar } from 'notistack';
// import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';
import { CustomInput } from '../../CustomInput';
import { handleRegisterUser } from '../../../actions/User';

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
  diffPasswords: {
    backgroundColor: 'red',
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
      checkPassword: '',
      stationId: '',
    };
  }

  render() {
    const {
      open,
      fullName,
      username,
      password,
      checkPassword,
      stationId,
    } = this.state;

    const {
      classes, stations, dispatch, enqueueSnackbar,
    } = this.props;

    const handleClickOpen = () => {
      this.setState({ open: true });
    };

    const handleFormChange = (e) => {
      const { id, value } = e.target;
      this.setState((prevState) => ({ ...prevState, [id]: value }));
    };
    const handleSelectChange = (e) => {
      const { value } = e.target;
      this.setState((prevState) => ({ ...prevState, stationId: value }));
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(handleRegisterUser({
        fullName, username, password, stationId,
      })).then((data) => {
        if (data.payload.token) {
          enqueueSnackbar('Cadastro realizado com Sucesso.',
            { variant: 'success', autoHideDuration: 3000 });
        } else {
          enqueueSnackbar('Houve um erro no servidor.',
            { variant: 'error', autoHideDuration: 3000 });
        }
      });
      this.setState({
        open: false, fullName: '', password: '', checkPassword: '', stationId: '',
      });
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
              id="checkPassword"
              label="Confirmar senha"
              type="password"
              placeholder="Repita a senha"
              error={checkPassword !== password && password.length <= checkPassword.length}
              helperText="Senhas não combinam"
              onChange={handleFormChange}
              value={checkPassword}
            />
            <DialogContentText style={{ fontWeight: 'bolder', marginTop: 20, color: 'black' }}>
              Selecione o Posto
            </DialogContentText>
            <InputLabel htmlFor="age-native-simple">Posto</InputLabel>
            <Select
              label="Posto"
              labelId="station-select"
              id="stationId"
              value={stationId}
              onChange={handleSelectChange}
              placeholder="Posto"
              styles={{ margin: 8 }}
            >
              {stations.sort((a, b) => {
                if (a.nome_fantasia > b.nome_fantasia) return 1;
                if (a.nome_fantasia < b.nome_fantasia) return -1;
                return 0;
              }).map((item) => (
                <MenuItem value={item.id}>{item.nome_fantasia}</MenuItem>
              ))}
            </Select>
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
              disabled={stationId === '' || fullName === '' || password === '' || checkPassword !== password}
            >
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ REDUCER_STATIONS }) => ({
  stations: REDUCER_STATIONS.stations,
});

RegisterDialog.propTypes = {
  classes: PropTypes.object.isRequired,
   dispatch: PropTypes.func.isRequired,
  stations: PropTypes.array,
  enqueueSnackbar: PropTypes.func.isRequired,
};

RegisterDialog.defaultProps = {
  stations: [],
};

const RegisterDialogWithSnack = withSnackbar(RegisterDialog);
export default withRouter(connect(mapStateToProps)(withStyles(styles)(RegisterDialogWithSnack)));
