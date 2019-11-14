import { LOGIN_USER, REGISTER_USER, GET_USERS } from '../../actions/User';

export default function REDUCER_USER(state = { token: null, content: [] }, action) {
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
      let arr;
      if(action.payload){
        arr = []
      }else{
        arr = action.payload;
      }
      return {
        ...state,
        content: arr,
      };
    default:
      return state;
  }
}
