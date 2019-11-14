import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { List, Paper } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { AZUL_MARINHO } from '../../utils/colors';
import { BarFields } from './BarFields';

const useStyles = makeStyles(() => ({
  list: {
    width: 250,
    backgroundColor: 'grey',
    position: 'fixed',
  },
  fullList: {
    width: 'auto',
  },
  icon: {
    paddingLeft: 8,
  },
}));

export class HiddenSideBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  render() {
    const { isOpen } = this.state;
    const classes = useStyles;
    const { sideBar, history } = this.props;
    const { condensed } = sideBar;
    const { push } = history;
    let barWidth;
    if (!condensed) {
      barWidth = 250;
    } else {
      barWidth = 65;
    }

    const fields = BarFields;
    const sideList = () => (
      <div
        className={classes.list}
        role="presentation"
      >
        {isOpen && fields.map((item) => (
          <ListItem button key={item.name} onClick={item.onClick(push)}>
            <ListItemIcon style={{ paddingLeft: 8 }}>{item.icon}</ListItemIcon>
            {!condensed && <ListItemText primary={item.name} />}
          </ListItem>
        ))}
        <Divider />
        {isOpen
            && (
            <List>
              <ListItem button key="Configurações" onClick={() => (history.push('/configuracoes'))}>
                <ListItemIcon style={{ paddingLeft: 8, color: AZUL_MARINHO }}>
                  <SettingsIcon />
                </ListItemIcon>
                {!condensed && <ListItemText primary="Configurações" />}
              </ListItem>
            </List>
            )}
      </div>
    );
    return (
      <div style={{
        width: barWidth, height: '90vh', minHeight: '100%', display: 'block',
      }}
      >
        <Paper className={classes.list} elevation={0}>
          {sideList()}
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = ({ REDUCER_SIDE_BAR, dispatch }) => ({
  sideBar: REDUCER_SIDE_BAR,
  dispatch,
});

HiddenSideBar.propTypes = {
  condensed: PropTypes.bool,
  sideBar: PropTypes.object,
  history: PropTypes.object.isRequired,
};

HiddenSideBar.defaultProps = {
  sideBar: false,
  condensed: false,
};

export default withRouter(connect(mapStateToProps)(HiddenSideBar));
