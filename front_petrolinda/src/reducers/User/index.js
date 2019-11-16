import {
  LOGIN_USER, REGISTER_USER, GET_USERS, EDIT_USER, DELETE_USERS,
} from '../../actions/User';

export default function REDUCER_USER(state = { token: null, content: [] }, action) {
  let arr = [];
  const newState = { ...state };
  let newContent;
  let id;
  let username;

  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
      };
    case REGISTER_USER:
      return {
        ...state,
      };
    case DELETE_USERS:
      username = action.payload;
      newContent = [...newState.content];
      id = newContent.findIndex((obj) => obj.login === username);
      newContent.splice(id, 1);
      return {
        ...newState,
        content: [...newContent],
      };
    case GET_USERS:
      if (!action.payload) {
        arr = [];
      } else {
        arr = action.payload;
      }
      return {
        ...state,
        content: arr,
      };
    case EDIT_USER:
      newContent = [...newState.content];
      newContent.find((obj) => obj.login === action.payload.id).nome = action.payload.name;
      return {
        ...newState,
        content: newContent,
      };
    default:
      return state;
  }
}
