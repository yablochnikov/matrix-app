// import { connect } from 'react-redux';
import { legacy_createStore } from 'redux';
import { bindActionCreators } from 'redux';

const initialState = {
  isCreated: false,
  rows: 0,
  columns: 0,
  cells: 0,
  numbers: [],
};

function setMatrixReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_ROWS':
      return (state = { ...state, rows: action.payload });
    case 'CHANGE_COLUMNS':
      return (state = { ...state, columns: action.payload });
    case 'CHANGE_CELLS':
      return (state = { ...state, cells: action.payload });
    case 'CREATE_MATRIX':
      return (state = { ...state, isCreated: action.payload });
    case 'REMOVE_ROW':
      return (state = {
        ...state,
        numbers: state.numbers.filter((row, id) => id != action.payload),
      });
    case 'INCREASE_VALUE':
      return {
        ...state,
        numbers: state.numbers.map((item) => {
          item.map((el) => {
            console.log(action.payload);
            if (el.value === action.payload && el.id) {
              el.value = action.payload + 1;
              return el;
            } else {
              state.numbers.concat(el);
            }
          });
          return item;
        }),
      };
    case 'HIGHLIGHT_CELLS':
      return (state = {
        ...state,
        numbers: [...state.numbers],
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
    default:
      return state;
  }
}

const store = legacy_createStore(setMatrixReducer);

const updateRows = (rows) => ({ type: 'CHANGE_ROWS', payload: rows });

const updateColumns = (columns) => ({
  type: 'CHANGE_COLUMNS',
  payload: columns,
});

const updateCells = (cells) => ({
  type: 'CHANGE_CELLS',
  payload: cells,
});

const createMatrix = () => ({
  type: 'CREATE_MATRIX',
  payload: true,
});

const removeRow = (rowId) => ({
  type: 'REMOVE_ROW',
  payload: rowId,
});

const increaseValue = (obj) => ({
  type: 'INCREASE_VALUE',
  payload: obj.value,
});

const highLightCells = (arr) => ({
  type: 'HIGHLIGHT_CELLS',
  payload: arr,
});

const addRow = (arr) => ({
  type: 'ADD_ROW',
  payload: arr,
});

const removeHighLight = (arr) => ({
  type: 'REMOVE_HIGHLIGHT',
  payload: arr,
});

export const actionCreators = bindActionCreators(
  {
    updateRows,
    updateColumns,
    updateCells,
    createMatrix,
    removeRow,
    increaseValue,
    highLightCells,
    addRow,
    removeHighLight,
  },
  store.dispatch,
);

export default store;
