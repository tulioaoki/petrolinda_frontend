import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Material Components
import { withStyles, Container, Typography } from '@material-ui/core';
import RegisterForm from '../components/Forms/Register';
import MainView from '../components/MainView';
import TableList from '../components/Lists/RowLists';
import { handleGetStations } from '../actions/Stations';
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

class Postos extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetStations());
  }

  render() {
    const { classes, fields, content } = this.props;
    return (
      <MainView elevation={0} className={classes}>
        <Container style={{ display: 'flex', flexGrow: 1, flexDirection: 'row' }}>
          <Typography className={classes.title}>
            Postos
          </Typography>
        </Container>
        <Container style={{ margin: 10, padding: 0 }}>
          <TableList headerFields={fields} content={content} type="stations" fieldsOrder={['nome_fantasia', 'razao_social']} />
        </Container>
        <RegisterForm />
      </MainView>
    );
  }
}

Postos.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.array,
  fields: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

Postos.defaultProps = {
  content: [],
  fields: [
    'Nome Fantasia',
    'Razão Social',
    'Opções',
  ],
};

const mapStateToProps = ({ REDUCER_STATIONS }) => ({
  content: REDUCER_STATIONS.stations,
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Postos)));
