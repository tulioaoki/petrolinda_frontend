import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class AbastecimentosTableBodyRow extends PureComponent {
  render() {
    const {
      content, page, rowsPerPage,
    } = this.props;
    return (
      <TableBody style={{ overflowY: 'scroll' }}>
        {
          content.sort((a, b) => {
            if (a.data_de_abastecimento < b.data_de_abastecimento) return 1;
            if (a.data_de_abastecimento > b.data_de_abastecimento) return -1;
            return 0;
          }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
            <TableRow hover key={item.id}>
              <TableCell
                align="center"
                style={{ minWidth: 10 }}
              >
                {item.abastecimentos_id}
              </TableCell>
              <TableCell
                align="center"
                style={{ minWidth: 10 }}
              >
                {item.preco_por_litro}
              </TableCell>
              <TableCell
                align="center"
                style={{ minWidth: 10 }}
              >
                {item.litros_abastecidos}
              </TableCell>
              <TableCell
                align="center"
                style={{ minWidth: 10 }}
              >
                {item.preco_pago}
              </TableCell>
              <TableCell
                align="center"
                style={{ minWidth: 10 }}
                type="date"
              >
                {new Date(item.data_de_abastecimento).toLocaleDateString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })}
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

AbastecimentosTableBodyRow.propTypes = {
  content: PropTypes.array,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  // fieldsOrder: PropTypes.array,
};

AbastecimentosTableBodyRow.defaultProps = {
  content: [],
  // fieldsOrder: [],
};
export default withRouter(connect(mapStateToProps)(withStyles()(AbastecimentosTableBodyRow)));
