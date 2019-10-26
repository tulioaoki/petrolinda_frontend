import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Paper, withStyles, Typography } from '@material-ui/core';
import AppBar from '../ScreenAppBar';
import SideBar from '../HiddenSideBar';
import { BEGE_CLARO, AZUL_MARINHO } from '../../utils/colors';
import RegisterForm from '../Forms/Register';


const styles = () => ({
  centerPaper: {
    margin: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    top: 15,
    marginBottom: '15px',
    fontWeight: 'bold',
    color: '#fafafa',
    backgroundColor: '#d8d8d8',
    width: '100%',
    fontSize: 18,
  },
  externalDiv: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '100%',
    width: '100%',
    'min-height': '100%',
    'overflow-y': 'hidden',
  },
  mainRowDiv: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: '90vh',
    width: '100%',
  },
  sideBar: {
    height: '100%',
    maxHeight: '100%',
    postion: 'sticky',
    minHeight: '100%',
  },
  footer: {
    display: 'flex',
    height: '8vh',
    width: '100%',
    backgroundColor: '#fafafa',
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: BEGE_CLARO,
    padding: 15,
    fontSize: 10,
    color: AZUL_MARINHO,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  foorterText: {
    fontSize: 10,
    alignSelf: 'center',
  },
  childrenPaper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    overflowY: 'scroll',
  },
});

class MainView extends PureComponent {
  render() {
    const {
      classes,
      children,
      showAppBar,
      showSideBar,
    } = this.props;
    return (
      <div className={classes.externalDiv}>
        {showAppBar && <AppBar />}
        <div className={classes.mainRowDiv}>
          <div className={classes.sideBar}>
            {showSideBar && <SideBar />}
          </div>
          <Paper className={classes.centerPaper}>
            <Paper className={classes.childrenPaper}>
              {children}
            </Paper>
          </Paper>
        </div>
        <div className={classes.footer}>
          <Typography className={classes.foorterText}>
            © 2019 Unicap Development Team. Todos os direitos reservados.
          </Typography>
        </div>
      </div>
    );
  }
}

MainView.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  showAppBar: PropTypes.bool,
  showSideBar: PropTypes.bool,
};

MainView.defaultProps = {
  showAppBar: true,
  showSideBar: true,
};

export default withRouter(connect()(withStyles(styles)(MainView)));
