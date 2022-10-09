import React, { FC } from 'react';
import uniqid from 'uniqid';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { actionCreators } from '../../store/store';

const AddRowButton: FC = () => {
  const { columns } = useTypedSelector((state) => state.setMatrix);
  return (
    <button
      className="button-addRow"
      onClick={() => {
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
        actionCreators.addRow(row);
      }}
    >
      Add row
    </button>
  );
};

export default AddRowButton;
