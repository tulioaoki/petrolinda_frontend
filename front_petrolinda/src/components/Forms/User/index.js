import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';

import {
  Button, Input, InputLabel, withStyles, Dialog, DialogTitle, DialogContent, Box,
} from '@material-ui/core';
import { handleEditUser } from '../../../actions/User';

const styles = () => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    'justify-content': 'space-around',
  },
  formItem: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    'justify-content': 'space-around',
    paddingTop: 20,
    paddingBottom: 20,
  },
  dialog: {
    width: '40vw',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    heigth: '80vh',
  },
});

class EditUserForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      open: false,
    };
  }

  render() {
    // style, navigation and redux props
    const {
      classes, enqueueSnackbar, dispatch, id, users,
    } = this.props;
    const { name, open } = this.state;

    const handleChangeName = (event) => {
      const { value } = event.target;
      this.setState((prevState) => ({ ...prevState, name: value }));
    };

    const handleClickOpen = () => {
      this.setState({ open: true, name: users.find((obj) => obj.login === id).nome });
    };

    const handleClose = () => {
      this.setState({ open: false });
    };


    const onClick = () => {
      dispatch(handleEditUser({ name, id }))
        .then((data) => {
          if (data.payload) {
            enqueueSnackbar('Alteração realizada com Sucesso.',
              { variant: 'success', autoHideDuration: 3000 });
          } else {
            enqueueSnackbar('Credenciais inválidas.',
              { variant: 'error', autoHideDuration: 3000 });
            window.location.reload();
          }
        });
      this.setState((prevState) => ({ ...prevState, open: false }));
    };

    return (
      <>
        <Button color="primary" aria-label="add" onClick={handleClickOpen}>
          <EditIcon />
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Editar um usuário</DialogTitle>
          <DialogContent className={classes.dialog}>
            <div className={classes.container}>
              <div className={classes.formItem}>
                <InputLabel>Nome</InputLabel>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => handleChangeName(e)}
                  multiline={false}
                  type="text"
                />
              </div>
              <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Button onClick={handleClose} color="secondary" variant="contained">
                  Cancelar
                </Button>
                <Button
                  onClick={onClick}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Confirmar
                </Button>
              </Box>
            </div>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}
const mapStateToProps = ({ REDUCER_USER }) => ({
  users: REDUCER_USER.content,
});

EditUserForm.propTypes = {
  users: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};


const EditUserWithSnack = withSnackbar(EditUserForm);
export default withRouter(connect(mapStateToProps)(withStyles(styles)(EditUserWithSnack)));
