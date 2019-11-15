import { GET_STATIONS } from '../../actions/Stations';

export default function REDUCER_STATIONS(state = { stations: [] }, action) {
  switch (action.type) {
    case GET_STATIONS:
      let arr;
      if(!action.payload){
        arr = []
      }else{
        arr = action.payload;
      }
      return {
        ...state,
        stations: arr,
      };
    default:
      return state;
  }
}
