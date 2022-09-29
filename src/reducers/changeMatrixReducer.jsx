const initialState = {
  numbers: [],
  percents: [],
};

export const changeMatrixReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ROW':
      return (state = {
        ...state,
        numbers: state.numbers.filter((row, id) => id != action.payload),
      });

    case 'ADD_ROW':
      return {
        ...state,
        numbers: [...state.numbers, action.payload],
      };

    case 'REMOVE_HIGHLIGHT':
      return (state = {
        ...state,
        numbers: [...state.numbers],
      });

    case 'HIGHLIGHT_CELLS':
      return (state = {
        ...state,
        numbers: [...state.numbers],
      });

    case 'INCREASE_VALUE':
      return {
        ...state,
        numbers: state.numbers.map((item) => {
          item.map((el) => {
            if (el.id === action.payload) {
              el.value = action.value + 1;
              return el;
            } else {
              state.numbers.concat(el);
            }
          });
          return item;
        }),
      };

    case 'CLEAR_PERCENTS':
      return {
        ...state,
        numbers: state.numbers.map((item) => {
          return item.map((el) => {
            el.percents = action.payload;
            return el;
          });
        }),
      };

    case 'SET_PERCENTS':
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
