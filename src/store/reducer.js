import produce from 'immer';
import initState from './initState';
import { SET_USER } from './constants';

const rootReducer = (state = initState, action) =>
  produce(state, draftState => {
    switch (action.type) {
      case SET_USER:
        draftState.user = action.payload;
        break;
      default:
    }
  });

export default rootReducer;
