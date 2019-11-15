import { getBandeirasRequest } from '../../utils/requests';

export const GET_BANDEIRAS = 'GET_BANDEIRAS';


function getBandeiras(payload) {
  return {
    type: GET_BANDEIRAS,
    payload,
  };
}

export function handleGetBandeiras(payload) {
  return (dispatch) => getBandeirasRequest(payload).then(({ data }) => {
    dispatch(getBandeiras(data));
  });
}
