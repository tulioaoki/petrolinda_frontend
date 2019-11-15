import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';
import { PRIMARY_COLOR, BEGE_CLARO } from '../../../utils/colors';
import TableHeader from './Header';
import TableBodyRow from './bodyTable';
import StationsTableBodyRow from './StationsBodyTable';
import AbastecimentosTableBodyRow from './AbastecimentosBodyTable';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justifyItens: 'center',
    maxHeight: '100%',
    marginLeft: 10,
    marginTop: 6,
    overflowY: 'hidden',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    justifyContent: 'center,',
  },
  title: {
    fontSize: '1.2em',
    fontWeight: 'bolder',
    margin: 0,
    width: '97.4%',
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 3,
    color: PRIMARY_COLOR,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: BEGE_CLARO,
  },
});

class TableList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rpp: 10,
    };
  }

  render() {
    const {
      classes,
      headerFields,
      content,
      showOption,
      fieldsOrder,
      type,
    } = this.props;
    const { page, rpp } = this.state;
    const handleChangePage = (event, newPage) => {
      this.setState((prevState) => ({ ...prevState, page: newPage }));
    };
    const handleChangeRowsPerPage = (event) => {
      this.setState((prevState) => ({ ...prevState, rpp: event.target.value }));
    };
    let TableRow = TableBodyRow;
    if (type === 'stations') {
      TableRow = StationsTableBodyRow;
    } else if (type === 'abastecimentos') {
      TableRow = AbastecimentosTableBodyRow;
    }
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table size="small" stickyHeader aria-label="sticky table">
            <TableHeader headerFields={headerFields} showOptio={showOption} />
            <TableRow
              page={page}
              rowsPerPage={rpp}
              content={content}
              showOption={showOption}
              fieldsOrder={fieldsOrder}
            />
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={content.length}
          rowsPerPage={rpp}
          page={page}
          backIconButtonProps={{
            'aria-label': 'previous page',
          }}
          nextIconButtonProps={{
            'aria-label': 'next page',
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

TableList.propTypes = {
  classes: PropTypes.object.isRequired,
  headerFields: PropTypes.array.isRequired,
  content: PropTypes.array.isRequired,
  showOption: PropTypes.bool,
  fieldsOrder: PropTypes.array,
  type: PropTypes.string,
};

TableList.defaultProps = {
  showOption: false,
  fieldsOrder: [],
  type: 'users',
};

export default withRouter(connect()(withStyles(styles)(TableList)));
