import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Material Components
import { withStyles, Container, Typography } from '@material-ui/core';
import MainView from '../components/MainView';
import { AZUL_MARINHO, BEGE_CLARO } from '../utils/colors';

const styles = () => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    maxHeigth: '100vh',
    minHeigth: '100vh',
    padding: 3,
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    fontSize: '1.2em',
    fontWeight: 'bolder',
    margin: 0,
    width: '97.4%',
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 3,
    color: AZUL_MARINHO,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: BEGE_CLARO,
  },
});

class Configuracoes extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <MainView elevation={0} className={classes}>
        <Container style={{ display: 'flex', flexGrow: 1, flexDirection: 'row' }}>
          <Typography className={classes.title}>
            Configuracoes
          </Typography>
        </Container>
        <Typography className={classes.title}>
            Esta é uma feature paga.
            Contate os desenvolvedores e
            dê-lhes um salário para desbloquear as opções de administrador.
        </Typography>
      </MainView>
    );
  }
}

Configuracoes.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ REDUCER_STATIONS }) => ({
  content: REDUCER_STATIONS.stations,
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Configuracoes)));
