import { bindActionCreators, combineReducers, legacy_createStore } from 'redux';

import * as changeMatrixActionCreators from '../actionCreators/changeMatrixActionCreators';
import * as setMatrixActionCreators from '../actionCreators/setMatrixActionCreators';
import { changeMatrixReducer } from '../reducers/changeMatrixReducer';
import { setMatrixReducer } from '../reducers/setMatrixReducer';

const rootReducer = combineReducers({
  changeMatrix: changeMatrixReducer,
  setMatrix: setMatrixReducer,
});

export const store = legacy_createStore(rootReducer);

export const actionCreators = bindActionCreators(
  {
    ...changeMatrixActionCreators,
    ...setMatrixActionCreators,
  },
  store.dispatch,
);

export type RootState = ReturnType<typeof rootReducer>;
