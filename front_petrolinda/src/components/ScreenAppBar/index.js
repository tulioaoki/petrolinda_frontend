/* eslint-disable prefer-template */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppBar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { toggleBarCondensed } from '../../actions/SideBar';
import bg from '../../static/images/barbg.jpg';
import logo from '../../static/images/petrolindaV4.1.png';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  content: {
    display: 'flex',
    flex: 1,
    width: '100%',
    padding: '0 15px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerLogo: {
    color: '#FFFFFF',
    padding: 10,
    fontWeight: 'normal',
    fontSize: 18.5,
  },
}));

export class ScreenAppBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { dispatch, sideBar, history } = this.props;
    const handleToggleSideBar = () => {
      dispatch(toggleBarCondensed(sideBar.condensed));
    };

    const classes = useStyles;

    return (
      <div className={classes.grow}>
        <AppBar position="static" style={{ backgroundColor: 'grey', heigth: '10vh', backgroundImage: 'url(' + bg + ')' }}>
          <div className={classes.content}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={handleToggleSideBar}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="inherit"
                className={classes.containerLogo}
                onClick={() => (history.push('/dashboard'))}
                style={{ cursor: 'pointer' }}
              >
                <img src={logo} alt="petrolinda" style={{ maxWidth: 200 }} />
              </Typography>
            </Toolbar>
          </div>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = ({ REDUCER_SIDE_BAR }) => ({
  sideBar: REDUCER_SIDE_BAR,
});

ScreenAppBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sideBar: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(ScreenAppBar));
