import {
  LOGIN_USER, REGISTER_USER, GET_USERS, EDIT_USER,
} from '../../actions/User';

export default function REDUCER_USER(state = { token: null, content: [] }, action) {
  let arr = [];
  const newState = { ...state };
  let newContent;
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
