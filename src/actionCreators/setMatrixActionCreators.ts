export const updateRows = (rows: number) => ({
  type: 'CHANGE_ROWS',
  payload: rows,
});

export const updateColumns = (columns: number) => ({
  type: 'CHANGE_COLUMNS',
  payload: columns,
});

export const updateCells = (cells: number) => ({
  type: 'CHANGE_CELLS',
  payload: cells,
});

export const createMatrix = () => ({
  type: 'CREATE_MATRIX',
  payload: true,
});

export const clearPercents = () => ({
  type: 'CLEAR_PERCENTS',
  payload: null,
});

export const setPercents = (sum: number) => ({
  type: 'SET_PERCENTS',
  payload: sum,
});
