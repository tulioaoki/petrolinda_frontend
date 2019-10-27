import authenticateUserRequest from '../../utils/requests';

export const LOGIN_USER = 'LOGIN_USER';

function loginUser(payload) {
  return {
    type: LOGIN_USER,
    payload,
  };
}

export function handleLoginUser(payload) {
  console.log('HAHAHAHA', payload);
  return (dispatch) => authenticateUserRequest(payload).then(({ data }) => {
    dispatch(loginUser({ payload: data }));
  });
}
/**
 *
export function handleGetDocumentosData(id) {
    return (dispatch) => {
        return getDocumentoTypeData(id)
            .then(({ data }) => {
                dispatch(receiveDocumentoTypes(data))
            })
    }
}
 */
