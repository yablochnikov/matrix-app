import { FC, memo } from 'react';
import uniqid from 'uniqid';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { actionCreators } from '../../store/store';
import { RowType } from '../../types/commonTypes';

import {
  AddRowButton,
  AverageView,
  ColumnNumberRow,
  Row,
  SumAverageView,
  SumColumn,
} from './TableElements';

import './Table.scss';
import './Cell.scss';

const Table: FC = () => {
  const { numbers } = useTypedSelector((state) => state.changeMatrix);
  const { isCreated } = useTypedSelector((state) => state.setMatrix);

  const handleClick = (index: number) => {
    actionCreators.removeRow(index);
  };

  return (
    <div className="table">
      {isCreated ? (
        <>
          <AddRowButton />
          <ColumnNumberRow />
          {numbers.map((row: RowType, index: number) => {
            return (
              <>
                <div className="table__row">
                  <span key={uniqid()} className="cell__info">
                    {index + 1}
                  </span>
                  {row.map((cell) => {
                    return <Row cell={cell} row={row} key={cell.id} />; // ?????
                  })}
                  <SumColumn row={row} />
                  <button
                    key={uniqid()}
                    className="cell__remove"
                    type="button"
                    onClick={() => {
                      handleClick(index);
                    }}
                  >
                    x
                  </button>
                </div>
              </>
            );
          })}
          <div className="table__row table__row_average">
            <span className="cell__info">Avg</span>
            <AverageView numbers={numbers} />
            <span className="cell__sum">
              <SumAverageView numbers={numbers} />
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default memo(Table);
