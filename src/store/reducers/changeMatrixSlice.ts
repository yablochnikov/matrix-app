import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CellType } from '../../types/commonTypes';

interface ChangeMatrix {
  numbers: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number;
  }[][];
}

const initialState: ChangeMatrix = {
  numbers: [],
};

export const changeMatrixSlice = createSlice({
  name: 'changeMatrix',
  initialState,
  reducers: {
    removeRow(state, action: PayloadAction<number>) {
      state.numbers = state.numbers.filter((_row, id) => id != action.payload);
    },
    addRow(
      state,
      action: PayloadAction<
        { value: number; id: string; isHighLighted: boolean }[]
      >,
    ) {
      state.numbers.push(action.payload);
    },
    removeHighLight(state) {
      state.numbers.forEach((row) => {
        row.map((cell: { isHighLighted: boolean }) => {
          cell.isHighLighted = false;
        });
      });
    },
    increaseValue(state, action: PayloadAction<string>) {
      state.numbers.map((item) => {
        item.map((cell: CellType) => {
          if (cell.id === action.payload) {
            return (cell.value += 1);
          } else {
            return cell;
          }
        });
      });
    },
    highLightCells(state, action) {
      state.numbers = action.payload;
    },
    setPercents(state, action: PayloadAction<number>) {
      state.numbers.map((row) => {
        row.map((cell) => {
          cell.percents = (cell.value / action.payload) * 100;
        });
      });
    },
    clearPercents(state, action) {
      state.numbers.map((item) => {
        return item.map((el) => {
          el.percents = action.payload;
          return el;
        });
      });
    },

    fillMatrix(
      state,
      action: PayloadAction<
        Array<Array<{ value: number; isHighLighted: boolean; id: string }>>
      >,
    ) {
      state.numbers = action.payload;
    },
  },
});

export default changeMatrixSlice.reducer;
