export const removeRow = (rowId) => ({
  type: 'REMOVE_ROW',
  payload: rowId,
});

export const increaseValue = (index, value) => ({
  type: 'INCREASE_VALUE',
  payload: index,
  value: value,
});

export const highLightCells = (arr) => ({
  type: 'HIGHLIGHT_CELLS',
  payload: arr,
});

export const addRow = (arr) => ({
  type: 'ADD_ROW',
  payload: arr,
});

export const removeHighLight = (arr) => ({
  type: 'REMOVE_HIGHLIGHT',
  payload: arr,
});

export const showPercents = (percentsArr) => ({
  type: 'SHOW_PERCENTS',
  payload: percentsArr,
});
