import React from 'react';
// import { connect } from 'react-redux';
import { legacy_createStore } from 'redux';
import { bindActionCreators } from 'redux';

import Form from '../components/Form/Form';

import './App.scss';

const initialState = {};

function setMatrixReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_ROWS':
      return (state = { ...state, rows: action.payload });
    case 'CHANGE_COLUMNS':
      return (state = { ...state, columns: action.payload });
    case 'CHANGE_CELLS':
      return (state = { ...state, cells: action.payload });
    default:
      return state;
  }
}

const store = legacy_createStore(setMatrixReducer);

store.subscribe(() => {
  console.log('store changed', store.getState());
});

const updateRows = (rows) => ({ type: 'CHANGE_ROWS', payload: rows });
const updateColumns = (columns) => ({
  type: 'CHANGE_COLUMNS',
  payload: columns,
});
const updateCells = (cells) => ({
  type: 'CHANGE_CELLS',
  payload: cells,
});

function App() {
  return (
    <div className="app">
      <div className="app-banner">
        <h1 className="app-banner-heading">Matrix Builder</h1>
        <Form actionCreators={actionCreators} store={store} />
      </div>
    </div>
  );
}

export const actionCreators = bindActionCreators(
  {
    updateRows,
    updateColumns,
    updateCells,
  },
  store.dispatch,
);

export default App;
