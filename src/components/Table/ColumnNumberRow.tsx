import React from 'react';
import uniqid from 'uniqid';

import { useTypedSelector } from '../../hooks/useTypedSelector';

const ColumnNumberRow = () => {
  const { numbers } = useTypedSelector((state) => state.changeMatrix);
  return (
    <div className="table-row table-row-average">
      <span className="table-cell-info">№</span>
      {numbers[0].map(
        (
          _row: { value: number; id: string; isHighLighted: boolean },
          id: number,
        ) => {
          return (
            <span key={uniqid()} className="table-cell-info">
              {id + 1}{' '}
            </span>
          );
        },
      )}
      <span className="table-cell-info">Sum</span>
    </div>
  );
};

export default ColumnNumberRow;
