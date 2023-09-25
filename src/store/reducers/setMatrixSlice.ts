import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SetMatrix {
  rows: number;
  columns: number;
  cells: number;
  isCreated: boolean;
}

const initialState: SetMatrix = {
  rows: 0,
  columns: 0,
  cells: 0,
  isCreated: false,
};

export const setMatrixSlice = createSlice({
  name: 'setMatrix',
  initialState,
  reducers: {
    setRows(state, action: PayloadAction<number>) {
      state.rows = action.payload;
    },
    setColumns(state, action: PayloadAction<number>) {
      state.columns = action.payload;
    },
    setCells(state, action: PayloadAction<number>) {
      state.cells = action.payload;
    },
    setIsCreated(state, action: PayloadAction<boolean>) {
      state.isCreated = action.payload;
    },
  },
});

export default setMatrixSlice.reducer;
