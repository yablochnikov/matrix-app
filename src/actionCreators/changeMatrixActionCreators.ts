import { IChangeMatrixState } from '../types/changeMatrix';

export const removeRow = (rowId: number) => ({
  type: 'REMOVE_ROW',
  payload: rowId,
});

export const increaseValue = (value: number, index: string) => ({
  type: 'INCREASE_VALUE',
  payload: index,
  value: value,
});

export const highLightCells = (
  arr: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number | undefined;
  }[][],
) => ({
  type: 'HIGHLIGHT_CELLS',
  payload: arr,
});

export const addRow = (
  arr: { value: number; id: string; isHighLighted: boolean }[],
) => ({
  type: 'ADD_ROW',
  payload: arr,
});

export const removeHighLight = (
  arr: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number | undefined;
  }[][],
) => ({
  type: 'REMOVE_HIGHLIGHT',
  payload: arr,
});

export const showPercents = (percentsArr: number[]) => ({
  type: 'SHOW_PERCENTS',
  payload: percentsArr,
});

export const fillMatrix = (matrix: IChangeMatrixState) => ({
  type: 'FILL_MATRIX',
  payload: matrix,
});
