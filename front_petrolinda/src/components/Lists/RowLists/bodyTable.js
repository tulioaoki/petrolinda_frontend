import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import { withStyles, Button } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class TableBodyRow extends PureComponent {
  render() {
    const { content, page, rowsPerPage } = this.props;
    return (
      <TableBody style={{ 'overflow-y': 'scroll' }}>
        {
          content.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
            <TableRow hover role="checkbox" tabIndex={-1} key="x">
              {Object.keys(item).map(
                (key) => (
                  <TableCell
                    key="a"
                    align="center"
                    style={{ minWidth: 10 }}
                  >
                    {item[key]}
                  </TableCell>
                ),
              )}
              <TableCell key="b" align="center">
                <Button>
                  <EditIcon />
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


TableBodyRow.propTypes = {
  content: PropTypes.object.isRequired,
  rowsPerPage: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles()(TableBodyRow)));
