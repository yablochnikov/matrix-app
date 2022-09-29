const initialState = {
  isCreated: false,
  rows: 0,
  columns: 0,
  cells: 0,
};

export const setMatrixReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ROWS':
      return (state = { ...state, rows: action.payload });

    case 'CHANGE_COLUMNS':
      return (state = { ...state, columns: action.payload });

    case 'CHANGE_CELLS':
      return (state = { ...state, cells: action.payload });

    case 'CREATE_MATRIX':
      return (state = { ...state, isCreated: action.payload });

    default:
      return state;
  }
};
