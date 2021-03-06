import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import StoreIcon from '@material-ui/icons/Store';
import { AZUL_MARINHO } from '../../utils/colors';

// eslint-disable-next-line import/prefer-default-export
export const BarFields = [
  { name: 'Dashboard', icon: <DashboardIcon style={{ color: AZUL_MARINHO }} />, onClick: (callback) => (() => callback('/dashboard')) },
  { name: 'Cadastro', icon: <PersonIcon style={{ color: AZUL_MARINHO }} />, onClick: (callback) => (() => callback('/usuarios')) },
  { name: 'Abastecimentos', icon: <LocalGasStationIcon style={{ color: AZUL_MARINHO }} />, onClick: (callback) => (() => callback('/abastecimentos')) },
  { name: 'Postos', icon: <StoreIcon style={{ color: AZUL_MARINHO }} />, onClick: (callback) => (() => callback('/postos')) },
];
