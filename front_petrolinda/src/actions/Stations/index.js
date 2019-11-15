import { getStationsRequest } from '../../utils/requests';

export const GET_STATIONS = 'GET_STATIONS';


function getStations(payload) {
  return {
    type: GET_STATIONS,
    payload,
  };
}

export function handleGetStations(payload) {
  return (dispatch) => getStationsRequest(payload).then(({ data }) => {
    dispatch(getStations(data));
  });
}
