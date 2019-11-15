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

class StationsTableBodyRow extends PureComponent {
  render() {
    const {
      content, page, rowsPerPage, fieldsOrder,
    } = this.props;
    return (
      <TableBody style={{ overflowY: 'scroll' }}>
        {
          content.sort((a, b) => {
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;
            return 0;
          }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
            <TableRow hover key={item.id}>
              <TableCell
                key={item.id}
                align="center"
                style={{ minWidth: 10 }}
              >
                {item.nome_fantasia}
              </TableCell>
              <TableCell
                key={item.id}
                align="center"
                style={{ minWidth: 10 }}
              >
                {item.razao_social}
              </TableCell>
              <TableCell key={item.id} align="center">
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

StationsTableBodyRow.propTypes = {
  content: PropTypes.array,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  fieldsOrder: PropTypes.array,
};

StationsTableBodyRow.defaultProps = {
  content: [],
  fieldsOrder: [],
};
export default withRouter(connect(mapStateToProps)(withStyles()(StationsTableBodyRow)));
