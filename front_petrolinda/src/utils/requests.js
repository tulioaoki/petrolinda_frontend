const BASE_URL = 'http://localhost:3333/';

export default function authenticateUserRequest({ login, pass }) {
  const body = {
    login,
    senha: pass,
  };
  const hdrs = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}authentication/login/`, hdrs)
      .then((res) => res.json())
      .catch(() => []),
  ])
    .then(([data]) => ({
      data,
    }))
    .catch((err) => {
      console.error('Erro: ', err);
      return null;
    });
}

export function registerUserRequest({
  username, pass, nome, cpf, postoId,
}) {
  const body = {
    login: username,
    senha: pass,
    posto_id: postoId,
    pessoa_cpf: cpf,
    nome,
  };
  const hdrs = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}authentication/signup/`, hdrs)
      .then((res) => res.json())
      .catch(() => []),
  ])
    .then(([data]) => ({
      data,
    }))
    .catch((err) => {
      console.error('Erro: ', err);
      return null;
    });
}

export function getUsersRequest() {
  const hdrs = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}users`, hdrs)
      .then((res) => res.json())
      .catch(() => []),
  ])
    .then(([data]) => ({
      data,
    }))
    .catch((err) => {
      console.error('Erro: ', err);
      return null;
    });
}
