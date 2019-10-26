import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class TableHeader extends PureComponent {
  render() {
    const { headerFields } = this.props;
    return (
      <TableHead>
        <TableRow>
          {headerFields.map(
            (item) => (
              <TableCell
                key="a"
                align="center"
                style={{ minWidth: 10 }}
              >
                <Typography style={{ cursor: 'pointer', fontWeight: 'bolder' }}>
                  {item}
                </Typography>
              </TableCell>
            ),
          )}
        </TableRow>
      </TableHead>
    );
  }
}

TableHeader.propTypes = {
  headerFields: PropTypes.object.isRequired,
};

export default withRouter(connect()(withStyles()(TableHeader)));
