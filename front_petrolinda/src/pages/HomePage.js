import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
    const { classes } = this.props;

    return (
      <MainView elevation={0} className={classes}>
        <Container classeName={classes.container}>
          <RegisterForm />
        </Container>
      </MainView>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
