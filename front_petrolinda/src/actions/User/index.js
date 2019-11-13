import authenticateUserRequest, { registerUserRequest, getUsersRequest } from '../../utils/requests';

export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const GET_USERS = 'GET_USERS';

function registerUser(payload) {
  return {
    type: REGISTER_USER,
    payload,
  };
}

export function handleRegisterUser(payload) {
  return (dispatch) => registerUserRequest(payload).then(({ data }) => {
    dispatch(registerUser(data));
  });
}

function getUsers(payload) {
  return {
    type: GET_USERS,
    payload,
  };
}

export function handleGetUsers(payload) {
  return (dispatch) => getUsersRequest(payload).then(({ data }) => {
    dispatch(getUsers(data));
  });
}

function loginUser(payload) {
  return {
    type: LOGIN_USER,
    payload,
  };
}

export function handleLoginUser(payload) {
  return (dispatch) => authenticateUserRequest(payload).then(({ data }) => {
    dispatch(loginUser(data));
  });
}
/**
 *
export function handleGetDocumentosData(id) {
    return (dispatch) => {
        return getDocumentoTypeData(id)
            .then(({ data }) => {
                dispatch(receiveDocumentoTypes(data))
            })
    }
}
 */
