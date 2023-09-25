import {
  ISetMatrixState,
  SetMatrixAction,
  SetMatrixActionTypes,
} from '../types/setMatrix';

const initialState: ISetMatrixState = {
  isCreated: false,
  rows: 0,
  columns: 0,
  cells: 0,
};

export const setMatrixReducer = (
  state = initialState,
  action: SetMatrixAction,
): ISetMatrixState => {
  switch (action.type) {
    case SetMatrixActionTypes.CHANGE_ROWS:
      return (state = { ...state, rows: action.payload });

    case SetMatrixActionTypes.CHANGE_COLUMNS:
      return (state = { ...state, columns: action.payload });

    case SetMatrixActionTypes.CHANGE_CELLS:
      return (state = { ...state, cells: action.payload });

    case SetMatrixActionTypes.CREATE_MATRIX:
      return (state = { ...state, isCreated: action.payload });

    default:
      return state;
  }
};
