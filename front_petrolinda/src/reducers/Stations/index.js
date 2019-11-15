import { GET_STATIONS, REGISTER_STATIONS } from '../../actions/Stations';

export default function REDUCER_STATIONS(state = { stations: [] }, action) {
  let arr;
  switch (action.type) {
    case GET_STATIONS:
      if (!action.payload) {
        arr = [];
      } else {
        arr = action.payload;
      }
      return {
        ...state,
        stations: arr,
      };
    case REGISTER_STATIONS:
      let newStations = state.stations;
      return {
        ...state,
        stations: [action.payload, ...newStations],
      };
    default:
      return state;
  }
}
