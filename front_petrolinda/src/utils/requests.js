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
  fullName,
  username,
  password,
  stationId,
}) {
  const body = {
    login: username,
    senha: password,
    id_posto: stationId,
    nome: fullName,
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

export function editUserRequest({ name, id }) {
  const body = {
    name,
  };
  const hdrs = {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}users/${id}`, hdrs)
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

export function getStationsRequest() {
  const hdrs = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}stations`, hdrs)
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

export function registerStationRequest({
  razaoSocial,
  nomeFantasia,
  latitude,
  longitude,
  bandeira,
}) {
  const cleanedLatitude = latitude.toString().slice(0, 11);
  const cleanedLongitude = longitude.toString().slice(0, 11);

  const body = {
    razao_social: razaoSocial,
    nome_fantasia: nomeFantasia,
    latitude: cleanedLatitude,
    longitude: cleanedLongitude,
    bandeira_id: bandeira,
    endereco_id: 1,
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
    fetch(`${BASE_URL}stations`, hdrs)
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


export function getBandeirasRequest() {
  const hdrs = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}bandeiras`, hdrs)
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

export function getAbastecimentosRequest() {
  const hdrs = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}abastecimento`, hdrs)
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

export function registerAbastecimentoRequest({
  placa,
  valorLitro,
  litrosAbastecidos,
  idTanque,
}) {
  const body = {
    placa,
    valorLitro,
    litrosAbastecidos,
    id_tanque: idTanque,
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
    fetch(`${BASE_URL}abastecimento`, hdrs)
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

export function getAddressDataRequest(cep) {
  const hdrs = {
    method: 'GET',
    headers: new Headers({
      Accept: 'json',
    }),
  };
  return Promise.all([
    fetch(`http://cep.republicavirtual.com.br/web_cep.php?cep=${cep}&formato=json`, hdrs)
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

export function getTanqueByPostoRequest(id) {
  const hdrs = {
    method: 'GET',
    headers: new Headers({
      'content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  return Promise.all([
    fetch(`${BASE_URL}tanques/${id}`, hdrs)
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
