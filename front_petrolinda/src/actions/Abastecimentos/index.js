import { getAbastecimentosRequest, registerAbastecimentoRequest } from '../../utils/requests';

export const GET_ABASTECIMENTOS = 'GET_ABASTECIMENTOS';
export const REGISTER_ABASTECIMENTOS = 'REGISTER_ABASTECIMENTOS';

function registerAbastecimentos(payload) {
  return {
    type: REGISTER_ABASTECIMENTOS,
    payload,
  };
}

export function handleRegisterAbastecimento(payload) {
  return (dispatch) => registerAbastecimentoRequest(payload)
    .then((data) => {
      dispatch(registerAbastecimentos(payload));
      return data;
    });
}


function getAbastecimentos(payload) {
  return {
    type: GET_ABASTECIMENTOS,
    payload,
  };
}

export function handleGetAbastecimentos(payload) {
  return (dispatch) => getAbastecimentosRequest(payload).then(({ data }) => {
    dispatch(getAbastecimentos(data));
  });
}
