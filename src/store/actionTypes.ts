export enum ChangeMatrixActionTypes {
  REMOVE_ROW = 'REMOVE_ROW',
  ADD_ROW = 'ADD_ROW',
  REMOVE_HIGHLIGHT = 'REMOVE_HIGHLIGHT',
  HIGHLIGHT_CELLS = 'HIGHLIGHT_CELLS',
  INCREASE_VALUE = 'INCREASE_VALUE',
  CLEAR_PERCENTS = 'CLEAR_PERCENTS',
  SET_PERCENTS = 'SET_PERCENTS',
  FILL_MATRIX = 'FILL_MATRIX',
}

type IRemoveRowAction = {
  type: ChangeMatrixActionTypes.REMOVE_ROW;
  payload: number;
};

type IAddRowAction = {
  type: ChangeMatrixActionTypes.ADD_ROW;
  payload: {
    id: string;
    value: number;
    isHighLighted: boolean;
    percents?: number;
  }[];
};

type IRemoveHighLight = {
  type: ChangeMatrixActionTypes.REMOVE_HIGHLIGHT;
  payload: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number;
  }[][];
};

type IHighLightCells = {
  type: ChangeMatrixActionTypes.HIGHLIGHT_CELLS;
  payload: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number | undefined;
  }[][];
};

type ISetPercents = {
  type: ChangeMatrixActionTypes.SET_PERCENTS;
  payload: number;
};

type IIncreaseValue = {
  type: ChangeMatrixActionTypes.INCREASE_VALUE;
  payload: string;
  value: number;
};

type IClearPercents = {
  type: ChangeMatrixActionTypes.CLEAR_PERCENTS;
  payload: number;
};

type IFillMatrix = {
  type: ChangeMatrixActionTypes.FILL_MATRIX;
  payload: [];
};

export type ChangeMatrixAction =
  | IRemoveRowAction
  | IAddRowAction
  | IRemoveHighLight
  | IHighLightCells
  | IIncreaseValue
  | IClearPercents
  | ISetPercents
  | IFillMatrix;

export enum SetMatrixActionTypes {
  CHANGE_ROWS = 'CHANGE_ROWS',
  CHANGE_COLUMNS = 'CHANGE_COLUMNS',
  CHANGE_CELLS = 'CHANGE_CELLS',
  CREATE_MATRIX = 'CREATE_MATRIX',
}

type IChangeRowsAction = {
  type: SetMatrixActionTypes.CHANGE_ROWS;
  payload: number;
};

type IChangeColumns = {
  type: SetMatrixActionTypes.CHANGE_COLUMNS;
  payload: number;
};

type IChangeCells = {
  type: SetMatrixActionTypes.CHANGE_CELLS;
  payload: number;
};

type ICreateMatrixAction = {
  type: SetMatrixActionTypes.CREATE_MATRIX;
  payload: boolean;
};

export type SetMatrixAction =
  | IChangeRowsAction
  | IChangeCells
  | ICreateMatrixAction
  | IChangeColumns;
