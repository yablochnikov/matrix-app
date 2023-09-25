import { FC } from 'react';
import uniqid from 'uniqid';

import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { changeMatrixSlice } from '../../store/reducers/changeMatrixSlice';

const AddRowButton: FC = () => {
  const dispatch = useAppDispatch();
  const columns = useAppSelector((state) => state.setMatrixReducer.columns);

  const { addRow } = changeMatrixSlice.actions;

  const handleClick = () => {
    const row: {
      id: string;
      value: number;
      isHighLighted: boolean;
    }[] = [];
    for (let i = 0; i < columns; i++) {
      row.push({
        value: Math.round(Math.random() * (999 - 100) + 100),
        isHighLighted: false,
        id: uniqid(),
      });
    }
    dispatch(addRow(row));
  };

  return (
    <button
      className="button button__add"
      onClick={() => {
        handleClick();
      }}
    >
      Add row
    </button>
  );
};

export default AddRowButton;
