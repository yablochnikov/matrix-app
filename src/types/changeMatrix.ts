export interface IChangeMatrixState {
  numbers: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number;
  }[][];
}

export enum ChangeMatrixActionTypes {
  REMOVE_ROW = 'REMOVE_ROW',
  ADD_ROW = 'ADD_ROW',
  REMOVE_HIGHLIGHT = 'REMOVE_HIGHLIGHT',
  HIGHLIGHT_CELLS = 'HIGHLIGHT_CELLS',
  INCREASE_VALUE = 'INCREASE_VALUE',
  CLEAR_PERCENTS = 'CLEAR_PERCENTS',
  SET_PERCENTS = 'SET_PERCENTS',
}

interface IRemoveRowAction {
  type: ChangeMatrixActionTypes.REMOVE_ROW;
  payload: number;
}

interface IAddRowAction {
  type: ChangeMatrixActionTypes.ADD_ROW;
  payload: {
    id: string;
    value: number;
    isHighLighted: boolean;
    percents?: number;
  }[];
}

interface IRemoveHighLight {
  type: ChangeMatrixActionTypes.REMOVE_HIGHLIGHT;
  payload: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number;
  }[][];
}

interface IHighLightCells {
  type: ChangeMatrixActionTypes.HIGHLIGHT_CELLS;
  payload: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number | undefined;
  }[][];
}

interface ISetPercents {
  type: ChangeMatrixActionTypes.SET_PERCENTS;
  payload: number;
}

interface IIncreaseValue {
  type: ChangeMatrixActionTypes.INCREASE_VALUE;
  payload: string;
  value: number;
}

interface IClearPercents {
  type: ChangeMatrixActionTypes.CLEAR_PERCENTS;
  payload: number;
}

export type ChangeMatrixAction =
  | IRemoveRowAction
  | IAddRowAction
  | IRemoveHighLight
  | IHighLightCells
  | IIncreaseValue
  | IClearPercents
  | ISetPercents;
