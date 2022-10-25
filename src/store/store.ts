import { combineReducers, configureStore } from '@reduxjs/toolkit';

import changeMatrixReducer from './reducers/changeMatrixSlice';
import setMatrixReducer from './reducers/setMatrixSlice';
const rootReducer = combineReducers({
  setMatrixReducer,
  changeMatrixReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
