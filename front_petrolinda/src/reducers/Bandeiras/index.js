import { GET_BANDEIRAS } from '../../actions/Bandeiras';

export default function REDUCER_BANDEIRAS(state = { bandeiras: [] }, action) {
  switch (action.type) {
    case GET_BANDEIRAS:
      let arr;
      if(!action.payload){
        arr = []
      }else{
        arr = action.payload;
      }
      return {
        ...state,
        bandeiras: arr,
      };
    default:
      return state;
  }
}
