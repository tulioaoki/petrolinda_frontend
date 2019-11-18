import authenticateUserRequest, {
  registerUserRequest, getUsersRequest, editUserRequest,
} from '../../utils/requests';

export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const EDIT_USER = 'EDIT_USER';
export const GET_USERS = 'GET_USERS';
export const DELETE_USERS = 'DELETE_USERS';

function deleteUser(payload) {
  return {
    type: DELETE_USERS,
    payload,
  };
}

export function handleDeleteUser(payload) {
  return (dispatch) => dispatch(deleteUser(payload));
}

function editUser(payload) {
  return {
    type: EDIT_USER,
    payload,
  };
}

export function handleEditUser(payload) {
  return (dispatch) => editUserRequest(payload).then(() => dispatch(editUser(payload)));
}

function registerUser(payload) {
  return {
    type: REGISTER_USER,
    payload,
  };
}

export function handleRegisterUser(payload) {
  return (dispatch) => registerUserRequest(payload)
    .then(({ data }) => dispatch(registerUser(data)));
}

function getUsers(payload) {
  return {
    type: GET_USERS,
    payload,
  };
}

export function handleGetUsers(payload) {
  return (dispatch) => getUsersRequest(payload).then(({ data }) => dispatch(getUsers(data)));
}

function loginUser(payload) {
  return {
    type: LOGIN_USER,
    payload,
  };
}

export function handleLoginUser(payload) {
  return (dispatch) => authenticateUserRequest(payload)
    .then(({ data }) => dispatch(loginUser(data)));
}
