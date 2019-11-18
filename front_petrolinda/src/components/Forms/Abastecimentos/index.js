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
import { getTanqueByPostoRequest } from '../../../utils/requests';
import { handleRegisterAbastecimento, handleGetAbastecimentos } from '../../../actions/Abastecimentos';

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


export class AbastecimentoStationDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      placa: '',
      valorLitro: '',
      litrosAbastecidos: '',
      idPosto: '',
      tanques: [],
      idTanque: '',
    };
  }

  render() {
    const {
      open,
      placa,
      valorLitro,
      litrosAbastecidos,
      idTanque,
      idPosto,
      tanques,
    } = this.state;

    const {
      classes, dispatch, enqueueSnackbar, postos,
    } = this.props;

    const handleClickOpen = () => {
      this.setState({ open: true });
    };
    const handleFormChange = (e) => {
      const { id, value } = e.target;
      this.setState((prevState) => ({ ...prevState, [id]: value }));
    };
    const handleGotStations = (data, id) => {
      this.setState((prevState) => ({ ...prevState, idPosto: id, tanques: data }));
    };
    const handleSelectPosto = (e) => {
      const { value } = e.target;
      getTanqueByPostoRequest(value).then((data) => handleGotStations(data.data, value));
    };
    const handleSelectChange = (e) => {
      const { value } = e.target;
      this.setState((prevState) => ({ ...prevState, idTanque: value }));
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(handleRegisterAbastecimento({
        placa, valorLitro, litrosAbastecidos, idTanque, idPosto,
      })).then((data) => {
        console.log(data, "DATA")
        if (data.data.message) {
          enqueueSnackbar('Abastecimento registrado com Sucesso.',
            { variant: 'success', autoHideDuration: 3000 }, handleGetAbastecimentos());
        } else {
          enqueueSnackbar('Houve um erro no servidor.',
            { variant: 'error', autoHideDuration: 3000 });
        }
      });
      this.setState({
        open: false, placa: '', litrosAbastecidos: '', valorLitro: '', idTanque: '',
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
              id="placa"
              label="Placa"
              type="text"
              placeholder="Insira a Placa"
              onChange={handleFormChange}
              value={placa}
            />
            <CustomInput
              headerInputLabel=""
              id="valorLitro"
              label="Preço/Litro"
              type="text"
              placeholder="Insira o Preço/Litro"
              onChange={handleFormChange}
              value={valorLitro}
            />
            <CustomInput
              headerInputLabel=""
              id="litrosAbastecidos"
              label="Litros Abastecidos"
              type="text"
              placeholder="Insira a quantidade de Litros"
              onChange={handleFormChange}
              value={litrosAbastecidos}
            />
            <DialogContentText style={{ fontWeight: 'bolder', marginTop: 20, color: 'black' }}>
              Selecione o Posto desejado
            </DialogContentText>
            <InputLabel htmlFor="age-native-simple">Posto</InputLabel>
            <Select
              label="posto"
              labelId="posto-select"
              id="post"
              value={idPosto}
              onChange={handleSelectPosto}
              placeholder="Posto"
              styles={{ margin: 8 }}
            >
              {postos.sort((a, b) => {
                if (a.id > b.id) return -1;
                if (a.id < b.id) return 1;
                return 0;
              }).map((item) => (
                <MenuItem value={item.id}>{item.nome_fantasia}</MenuItem>
              ))}
            </Select>

            <DialogContentText style={{ fontWeight: 'bolder', marginTop: 20, color: 'black' }}>
              Selecione a o Tanque
            </DialogContentText>
            <InputLabel htmlFor="age-native-simple">Tanque</InputLabel>
            <Select
              label="Tanque"
              labelId="tanque-select"
              id="tanque"
              value={idTanque}
              onChange={handleSelectChange}
              placeholder="Tanque"
              styles={{ margin: 8 }}
            >
              {tanques.sort((a, b) => {
                if (a.id > b.id) return -1;
                if (a.id < b.id) return 1;
                return 0;
              }).map((item) => (
                <MenuItem value={item.id}>
                  Tanque:
                  {item.id}
                  {' '}
                  -
                  {' '}
                  {item.nome}

                </MenuItem>
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
              disabled={valorLitro === '' || placa === '' || litrosAbastecidos === '' || idTanque === ''}
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
  postos: REDUCER_STATIONS.stations,
});

AbastecimentoStationDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  postos: PropTypes.array,
  enqueueSnackbar: PropTypes.func.isRequired,
};

AbastecimentoStationDialog.defaultProps = {
  postos: [],
};

const StationDialogWithSnack = withSnackbar(AbastecimentoStationDialog);
export default withRouter(connect(mapStateToProps)(withStyles(styles)(StationDialogWithSnack)));
