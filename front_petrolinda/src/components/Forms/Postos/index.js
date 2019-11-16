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
import AddIcon from '@material-ui/icons/Add';// import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';
import { CustomInput } from '../../CustomInput';
import { handleRegisterStation } from '../../../actions/Stations';
import { getAddressDataRequest } from '../../../utils/requests';

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


export class RegisterStationDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      razaoSocial: '',
      nomeFantasia: '',
      bandeira: '',
      latitude: '',
      longitude: '',
      cep: '',
      estado: '',
      bairro: '',
      cidade: '',
      rua: '',
      numero: '',
    };
  }

  handleGetCoordinates = (position) => {
    this.setState((prevState) => ({
      ...prevState,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }));
  }

  getPosition = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) => { this.handleGetCoordinates(position); },
    );
  }

  render() {
    const {
      open,
      razaoSocial,
      nomeFantasia,
      bandeira,
      latitude,
      longitude,
      cep,
      estado,
      cidade,
      bairro,
      rua,
      numero,
    } = this.state;

    const {
      classes, bandeiras, dispatch, enqueueSnackbar,
    } = this.props;

    const handleClickOpen = () => {
      this.getPosition();
      this.setState({ open: true });
    };
    const handleGotCep = (data) => {
      this.setState((prevState) => ({
        ...prevState,
        estado: data.uf,
        cidade: data.cidade,
        bairro: data.bairro,
        rua: data.logradouro,
      }));
    };
    const handleChangeCep = (e) => {
      const { value } = e.target;
      if (value.length === 8) {
        getAddressDataRequest(value).then((data) => handleGotCep(data.data));
      }
      this.setState((prevState) => ({ ...prevState, cep: value }));
    };
    const handleFormChange = (e) => {
      const { id, value } = e.target;
      this.setState((prevState) => ({ ...prevState, [id]: value }));
    };
    const handleSelectChange = (e) => {
      const { value } = e.target;
      this.setState((prevState) => ({ ...prevState, bandeira: value }));
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(handleRegisterStation({
        razaoSocial,
        nomeFantasia,
        bandeira,
        latitude,
        longitude,
        cep,
        estado,
        cidade,
        bairro,
        rua,
        numero,
      })).then((data) => {
        if (data.payload) {
          enqueueSnackbar('Posto regristrado com Sucesso.',
            { variant: 'success', autoHideDuration: 3000 });
        } else {
          enqueueSnackbar('Houve um erro no servidor.',
            { variant: 'error', autoHideDuration: 3000 }).then();
          window.location.reload();
        }
      });
      this.setState({
        open: false, razaoSocial: '', password: '', checkPassword: '', nomeFantasia: '',
      });
    };

    const handleClose = () => {
      this.setState({ open: false });
    };

    return (
      <div>
        <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleClickOpen}>
          <AddIcon size="large" />
        </Fab>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Criar um novo Posto</DialogTitle>
          <DialogContent className={classes.dialog}>
            <DialogContentText style={{ fontWeight: 'bolder', marginTop: 20, color: 'black' }}>
              Geral
            </DialogContentText>
            <CustomInput
              headerInputLabel=""
              id="razaoSocial"
              label="Razão Social"
              type="text"
              placeholder="Insira a razão social"
              onChange={handleFormChange}
              value={razaoSocial}
            />
            <CustomInput
              headerInputLabel=""
              id="nomeFantasia"
              label="Nome Fantasia"
              type="text"
              placeholder="Insira o Nome Fantasia"
              onChange={handleFormChange}
              value={nomeFantasia}
            />
            <DialogContentText style={{ fontWeight: 'bolder', marginTop: 20, color: 'black' }}>
              Selecione a Bandeira
            </DialogContentText>
            <InputLabel htmlFor="age-native-simple">Bandeira</InputLabel>
            <Select
              label="Bandeira"
              labelId="bandeira-select"
              id="bandeira"
              value={bandeira}
              onChange={handleSelectChange}
              placeholder="Bandeira"
              styles={{ margin: 8 }}
            >
              {bandeiras.sort((a, b) => {
                if (a.nome_fantasia > b.nome_fantasia) return 1;
                if (a.nome_fantasia < b.nome_fantasia) return -1;
                return 0;
              }).map((item) => (
                <MenuItem value={item.id}>{item.nome_fantasia}</MenuItem>
              ))}
            </Select>
            <DialogContentText style={{ fontWeight: 'bolder', marginTop: 20, color: 'black' }}>
              Dados de endereço
            </DialogContentText>
            <InputLabel htmlFor="age-native-simple">Endereço</InputLabel>
            <CustomInput
              headerInputLabel=""
              id="cep"
              label="CEP"
              type="text"
              placeholder="Insira o CEP"
              onChange={handleChangeCep}
              value={cep}
            />
            <CustomInput
              headerInputLabel=""
              id="estado"
              label="Estado"
              type="text"
              placeholder="Insira o Estado"
              onChange={handleFormChange}
              value={estado}
            />
            <CustomInput
              headerInputLabel=""
              id="cidade"
              label="Cidade"
              type="text"
              placeholder="Insira a cidade"
              onChange={handleFormChange}
              value={cidade}
            />
            <CustomInput
              headerInputLabel=""
              id="bairro"
              label="Bairro"
              type="text"
              placeholder="Insira o bairro"
              onChange={handleFormChange}
              value={bairro}
            />
            <CustomInput
              headerInputLabel=""
              id="rua"
              label="Rua"
              type="text"
              placeholder="Insira a rua"
              onChange={handleFormChange}
              value={rua}
            />
            <CustomInput
              headerInputLabel=""
              id="numero"
              label="Número"
              type="text"
              placeholder="Insira o número"
              onChange={handleFormChange}
              value={numero}
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
              disabled={nomeFantasia === '' || razaoSocial === '' || bandeira === '' || cep === ''}
            >
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ REDUCER_BANDEIRAS }) => ({
  bandeiras: REDUCER_BANDEIRAS.bandeiras,
});

RegisterStationDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.object.isRequired,
  bandeiras: PropTypes.array,
  enqueueSnackbar: PropTypes.func.isRequired,
};

RegisterStationDialog.defaultProps = {
  bandeiras: [],
};

const StationDialogWithSnack = withSnackbar(RegisterStationDialog);
export default withRouter(connect(mapStateToProps)(withStyles(styles)(StationDialogWithSnack)));
