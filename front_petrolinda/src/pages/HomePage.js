import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// Material Components
import { withStyles, Container } from '@material-ui/core';
import RegisterForm from '../components/Forms/Register';
import MainView from '../components/MainView';

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
});

class HomePage extends PureComponent {
  render() {
    const { classes, reducerUser, history } = this.props;
    if (!reducerUser.token) {
      // If not logged, goes back to login screen
      //history.push('login/');
    }

    return (
      <MainView elevation={0} className={classes}>
        <Container classeName={classes.container}>
          <RegisterForm />
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
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
export default withRouter(connect(mapStateToProps)(withStyles(styles)(HomePage)));
