import { FC } from 'react';
import uniqid from 'uniqid';

import { useAppSelector } from '../../hooks/useTypedSelector';

const ColumnNumberRow: FC = () => {
  const numbers = useAppSelector((state) => state.changeMatrixReducer.numbers);

  return (
    <div className="table__row table__row_average">
      <span className="cell__info">№</span>
      {numbers[0].map(
        (
          _row: { value: number; id: string; isHighLighted: boolean },
          id: number,
        ) => {
          return (
            <span key={uniqid()} className="cell__info">
              {id + 1}
            </span>
          );
        },
      )}
      <span className="cell__info">Sum</span>
    </div>
  );
};

export default ColumnNumberRow;
