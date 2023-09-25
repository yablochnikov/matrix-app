export interface ISetMatrixState {
  isCreated: boolean;
  rows: number;
  columns: number;
  cells: number;
}

export enum SetMatrixActionTypes {
  CHANGE_ROWS = 'CHANGE_ROWS',
  CHANGE_COLUMNS = 'CHANGE_COLUMNS',
  CHANGE_CELLS = 'CHANGE_CELLS',
  CREATE_MATRIX = 'CREATE_MATRIX',
}

interface IChangeRowsAction {
  type: SetMatrixActionTypes.CHANGE_ROWS;
  payload: number;
}

interface IChangeColumns {
  type: SetMatrixActionTypes.CHANGE_COLUMNS;
  payload: number;
}

interface IChangeCells {
  type: SetMatrixActionTypes.CHANGE_CELLS;
  payload: number;
}

interface ICreateMatrixAction {
  type: SetMatrixActionTypes.CREATE_MATRIX;
  payload: boolean;
}

// interface ISetMatrixAction {
//   type: string;
//   payload?: any;
// }

export type SetMatrixAction =
  | IChangeRowsAction
  | IChangeCells
  | ICreateMatrixAction
  | IChangeColumns;
