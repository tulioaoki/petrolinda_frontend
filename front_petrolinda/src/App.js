import React, { PureComponent } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
// import Login from './pages/Login';
// import HomePage from './pages/HomePage';

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
          {/** <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} /> */}
        </>
      </div>
    );
  }
}

const mapStateToProps = ({ PROCESS_DATA }) => ({
  process_data: PROCESS_DATA,
});

App.propTypes = {
  // enqueueSnackbar: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps)(App));
