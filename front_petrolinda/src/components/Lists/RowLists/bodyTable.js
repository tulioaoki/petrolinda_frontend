import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import { withStyles, Button } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditUserWithSnack from '../../Forms/User';

class TableBodyRow extends PureComponent {
  render() {
    const {
      content, page, rowsPerPage, stations,
    } = this.props;
    return (
      <TableBody style={{ overflowY: 'scroll' }}>
        {
          content.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
            <TableRow hover role="checkbox" tabIndex={-1} key="x">
              {Object.keys(item).map(
                (key) => (
                  <TableCell
                    key={item[key]}
                    align="center"
                    style={{ minWidth: 10 }}
                  >
                    {key === 'posto_id' && stations.length > 0 ? stations.find((obj) => obj.id === item[key]).nome_fantasia : item[key]}
                  </TableCell>
                ),
              )}
              <TableCell key="b" align="center">
                <Button>
                  <EditUserWithSnack id={item.login} />
                </Button>
                <Button>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    );
  }
}

const mapStateToProps = ({ REDUCER_STATIONS }) => ({
  stations: REDUCER_STATIONS.stations,
});

TableBodyRow.propTypes = {
  content: PropTypes.array,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  stations: PropTypes.array,
};

TableBodyRow.defaultProps = {
  content: [],
  stations: [],
};
export default withRouter(connect(mapStateToProps)(withStyles()(TableBodyRow)));
