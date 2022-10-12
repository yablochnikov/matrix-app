import { IChangeMatrixState } from '../types/changeMatrix';
import { CellType } from '../types/commonTypes';

import {
  ChangeMatrixAction,
  ChangeMatrixActionTypes,
} from './../store/actionTypes';

const initialState: IChangeMatrixState = {
  numbers: [],
};

export const changeMatrixReducer = (
  state = initialState,
  action: ChangeMatrixAction,
): IChangeMatrixState => {
  switch (action.type) {
    case ChangeMatrixActionTypes.REMOVE_ROW:
      return (state = {
        ...state,
        numbers: state.numbers.filter((_row, id) => id != action.payload),
      });

    case ChangeMatrixActionTypes.ADD_ROW:
      return {
        ...state,
        numbers: [...state.numbers, action.payload],
      };

    case ChangeMatrixActionTypes.REMOVE_HIGHLIGHT:
      return (state = {
        ...state,
        numbers: [...action.payload],
      });

    case ChangeMatrixActionTypes.HIGHLIGHT_CELLS:
      return (state = {
        ...state,
        numbers: [...action.payload],
      });

    case ChangeMatrixActionTypes.INCREASE_VALUE:
      return {
        ...state,
        numbers: state.numbers.map((item) => {
          item.map((cell: CellType) => {
            if (cell.id === action.payload) {
              cell.value = action.value + 1;
              return cell;
            } else {
              [...state.numbers, cell];
            }
          });

          return item;
        }),
      };

    case ChangeMatrixActionTypes.CLEAR_PERCENTS:
      return {
        ...state,
        numbers: state.numbers.map((item) => {
          return item.map((el) => {
            el.percents = action.payload;
            return el;
          });
        }),
      };

    case ChangeMatrixActionTypes.SET_PERCENTS:
      return {
        ...state,
        numbers: state.numbers.map((el) => {
          return el.map((element) => {
            element.percents = (element.value / action.payload) * 100;
            return element;
          });
        }),
      };

    case ChangeMatrixActionTypes.FILL_MATRIX:
      return { ...state, numbers: [...state.numbers] };
    default:
      return state;
  }
};
