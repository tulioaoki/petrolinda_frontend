export const TOGGLE_BAR_CONDENSED = 'TOGGLE_BAR_CONDENSED';

export function toggleBarCondensed(payload) {
  return {
    type: TOGGLE_BAR_CONDENSED,
    payload,
  };
}


export function handleToggleBarCondensed(payload) {
  return (dispatch) => {
    dispatch(toggleBarCondensed(payload));
  };
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
