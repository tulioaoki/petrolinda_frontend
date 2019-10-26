import { TOGGLE_BAR_CONDENSED } from '../../actions/SideBar';

export default function REDUCER_SIDE_BAR(state = { condensed: false }, action) {
  switch (action.type) {
    case TOGGLE_BAR_CONDENSED:
      return {
        ...state,
        condensed: !action.payload,
      };
    default:
      return state;
  }
}
