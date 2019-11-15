import { GET_ABASTECIMENTOS, REGISTER_ABASTECIMENTOS } from '../../actions/Abastecimentos';

export default function REDUCER_ABASTECIMENTOS(state = { abastecimentos: [] }, action) {
  let arr;
  const newAbastecimentos = state.abastecimentos;
  switch (action.type) {
    case GET_ABASTECIMENTOS:
      if (!action.payload) {
        arr = [];
      } else {
        arr = action.payload;
      }
      return {
        ...state,
        abastecimentos: arr,
      };
    case REGISTER_ABASTECIMENTOS:
      return {
        ...state,
        abastecimentos: [action.payload, ...newAbastecimentos],
      };
    default:
      return state;
  }
}
