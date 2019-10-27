const BASE_URL = 'http://localhost:3333/';

export default function authenticateUserRequest({ login, pass }) {
  const body = {
    login,
    password: pass,
  };
  const hdrs = {
    method: 'POST',
    body,
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}users/login/`, hdrs)
      .then((res) => res.json())
      .catch(() => []),
  ])
    .then(([data]) => (console.log(data) || {
      data,
    }))
    .catch((err) => {
      console.error(err);
      return null;
    });
}
