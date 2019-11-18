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

class HomePage extends PureComponent {
  render() {
    const { classes, reducerUser, history } = this.props;
    if (!reducerUser.token) {
      // If not logged, goes back to login screen
      history.push('/login');
    }

    return (
      <MainView elevation={0} className={classes}>
        <Container classeName={classes.container}>
          <Typography className={classes.title}>
            Informações Gerais
          </Typography>
        </Container>
      </MainView>
    );
  }
}

const mapStateToProps = ({ REDUCER_USER }) => ({
  reducerUser: REDUCER_USER,
});

HomePage.propTypes = {
  reducerUser: PropTypes.object.isRequired,
  history: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};
export default withRouter(connect(mapStateToProps)(withStyles(styles)(HomePage)));
