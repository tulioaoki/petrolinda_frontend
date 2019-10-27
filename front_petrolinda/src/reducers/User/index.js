import { LOGIN_USER } from '../../actions/User';

export default function REDUCER_USER(state = { token: null }, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
      };
    default:
      return state;
  }
}
