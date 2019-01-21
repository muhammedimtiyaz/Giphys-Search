import { combineReducers } from 'redux';

import giphysReducer from './giphys_reducer';

export const rootReducer = combineReducers({
  giphys: giphysReducer,
});