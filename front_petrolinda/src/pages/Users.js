import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// Material Components
import { withStyles, Container, Typography } from '@material-ui/core';
import RegisterForm from '../components/Forms/Register';
import MainView from '../components/MainView';
import TableList from '../components/Lists/RowLists';
import { AZUL_MARINHO, BEGE_CLARO } from '../utils/colors';

const styles = () => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    maxHeigth: '100vh',
    minHeigth: '100vh',
    padding: 3,
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    fontSize: '1.2em',
    fontWeight: 'bolder',
    margin: 0,
    width: '97.4%',
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 3,
    color: AZUL_MARINHO,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: BEGE_CLARO,
  },
});

class HomePage extends PureComponent {
  render() {
    const { classes } = this.props;
    const fields = [
      'Nome',
      'Username',
      'Telefone',
      'Opções',
    ];
    const content = [{
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',
    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',
    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',
    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',
    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',

    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',
    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',
    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',
    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',
    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',
    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',
    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',
    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',
    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',
    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',
    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',

    },
    {
      nome: 'Nome Sobrenome da Silva',
      username: 'username',
      telefone: '(81)99615-7088',

    },
    {
      nome: 'Nome Sobrenome da Silva 12341',
      username: 'username',
      telefone: '(81)99615-7088',

    },
    ];

    return (
      <MainView elevation={0} className={classes}>
        <Container style={{ display: 'flex', flexGrow: 1, flexDirection: 'row' }}>
          <Typography className={classes.title}>
            Usuários
          </Typography>
        </Container>
        <Container style={{ margin: 10, padding: 0 }}>
          <TableList headerFields={fields} content={content} />
        </Container>
        <RegisterForm />
      </MainView>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
