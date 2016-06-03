
import {
  ADD_WIDGET,
  DELETE_WIDGET,
} from './constants';
import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  grid: [],
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_WIDGET:
      return state.set('grid', state.get('grid').push(action.widget));
    case DELETE_WIDGET:
      return state.set('grid', state.get('grid').delete(action.key));
    default:
      return state;
  }
}

export default homeReducer;
