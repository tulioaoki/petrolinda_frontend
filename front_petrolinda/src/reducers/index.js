import { combineReducers } from 'redux';
import REDUCER_USER from './User';
import REDUCER_SIDE_BAR from './Bars';
import REDUCER_STATIONS from './Stations';
import REDUCER_BANDEIRAS from './Bandeiras';
export default combineReducers({
  REDUCER_USER,
  REDUCER_SIDE_BAR,
  REDUCER_STATIONS,
  REDUCER_BANDEIRAS,
});
