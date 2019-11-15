import { getStationsRequest, registerStationRequest } from '../../utils/requests';

export const GET_STATIONS = 'GET_STATIONS';
export const REGISTER_STATIONS = 'REGISTER_STATIONS';

function registerStations(payload) {
  return {
    type: REGISTER_STATIONS,
    payload,
  };
}

export function handleRegisterStation(payload) {
  return (dispatch) => registerStationRequest(payload)
    .then(() => dispatch(registerStations(payload)));
}


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
