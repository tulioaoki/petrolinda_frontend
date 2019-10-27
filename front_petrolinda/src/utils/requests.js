const BASE_URL = 'http://localhost:3333/';

export default function authenticateUserRequest({ login, pass }) {
  const body = {
    username: login,
    password: pass,
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
    fetch(`${BASE_URL}users/login/`, hdrs)
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
