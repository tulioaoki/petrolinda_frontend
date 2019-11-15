import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Material Components
import { withStyles, Container, Typography } from '@material-ui/core';
import RegisterForm from '../components/Forms/Register';
import MainView from '../components/MainView';
import TableList from '../components/Lists/RowLists';
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

class Abastecimentos extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch(handleGetAbastecimentos());
  }

  render() {
    const { classes, fields, content } = this.props;
    return (
      <MainView elevation={0} className={classes}>
        <Container style={{ display: 'flex', flexGrow: 1, flexDirection: 'row' }}>
          <Typography className={classes.title}>
            Abastecimentos
          </Typography>
        </Container>
        <Container style={{ margin: 10, padding: 0 }}>
          <TableList headerFields={fields} content={content} />
        </Container>
        <RegisterForm />
      </MainView>
    );
  }
}

Abastecimentos.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.array,
  fields: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

Abastecimentos.defaultProps = {
  content: [],
  fields: [
    'Tanque',
    'Valor/Litro',
    'Litros',
    'Valor total',
    'Data',
  ],
};

const mapStateToProps = ({ REDUCER_ABASTECIMENTOS }) => ({
  // abastecimentos: REDUCER_ABASTECIMENTOS.content,
});

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Abastecimentos)));
