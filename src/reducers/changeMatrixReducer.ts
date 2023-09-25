import {
  ChangeMatrixAction,
  ChangeMatrixActionTypes,
  IChangeMatrixState,
} from '../types/changeMatrix';

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
        numbers: state.numbers.filter((row, id) => id != action.payload),
      });

    case ChangeMatrixActionTypes.ADD_ROW:
      return {
        ...state,
        numbers: [...state.numbers, action.payload],
      };

    case ChangeMatrixActionTypes.REMOVE_HIGHLIGHT:
      return (state = {
        ...state,
        numbers: [...state.numbers],
      });

    case ChangeMatrixActionTypes.HIGHLIGHT_CELLS:
      return (state = {
        ...state,
        numbers: [...state.numbers],
      });

    case ChangeMatrixActionTypes.INCREASE_VALUE:
      return {
        ...state,
        numbers: state.numbers.map((item) => {
          item.map(
            (el: {
              value: number;
              id: string;
              isHighLighted: boolean;
              percents?: number;
            }) => {
              if (el.id === action.payload) {
                console.log(el.id);
                el.value = action.value + 1;
                return el;
              } else {
                [...state.numbers, el];
              }
            },
          );

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
    default:
      return state;
  }
};
