import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class StationsTableBodyRow extends PureComponent {
  render() {
    const {
      content, page, rowsPerPage,
    } = this.props;
    return (
      <TableBody style={{ overflowY: 'scroll' }}>
        {
          content.sort((a, b) => {
            if (a.id < b.id) return 1;
            if (a.id > b.id) return -1;
            return 0;
          }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
            <TableRow hover key={item.id}>
              <TableCell
                align="center"
                style={{ minWidth: 10 }}
              >
                {item.id}
              </TableCell>
              <TableCell
                align="center"
                style={{ minWidth: 10 }}
              >
                {item.nome_fantasia}
              </TableCell>
              <TableCell
                align="center"
                style={{ minWidth: 10 }}
              >
                {item.razao_social}
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

StationsTableBodyRow.propTypes = {
  content: PropTypes.array,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  // fieldsOrder: PropTypes.array,
};

StationsTableBodyRow.defaultProps = {
  content: [],
  // fieldsOrder: [],
};
export default withRouter(connect(mapStateToProps)(withStyles()(StationsTableBodyRow)));
