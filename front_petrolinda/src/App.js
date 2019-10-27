import React, { PureComponent } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withSnackbar, SnackbarProvider } from 'notistack';
import './App.css';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Users from './pages/Users';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const path_name = this.props.location.pathname
    return (
      <div style={{ width: '100%', height: '100%', minHeight: '100%' }}>
        <>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} />
          <Route path="/usuarios" exact component={Users} />
        </>
      </div>
    );
  }
}

const mapStateToProps = ({ PROCESS_DATA }) => ({
  process_data: PROCESS_DATA,
});

App.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  enqueueSnackbar: PropTypes.func.isRequired,
};

const MyApp = withSnackbar(App);
function IntegrationNotistack() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <MyApp />
    </SnackbarProvider>
  );
}

export default withRouter(connect(mapStateToProps)(IntegrationNotistack));
