import { FC, memo } from 'react';
import uniqid from 'uniqid';

import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { changeMatrixSlice } from '../../store/reducers/changeMatrixSlice';
import { RowType } from '../../types/commonTypes';

import {
  AddRowButton,
  AverageView,
  ColumnNumberRow,
  Row,
  SumAverageView,
  SumColumn,
} from './TableElements';

import './Cell.scss';
import './Table.scss';

const Table: FC = () => {
  const dispatch = useAppDispatch();
  const numbers = useAppSelector((state) => state.changeMatrixReducer.numbers);
  const isCreated = useAppSelector((state) => state.setMatrixReducer.isCreated);

  const { removeRow } = changeMatrixSlice.actions;

  return (
    <div className="table">
      {isCreated ? (
        <>
          <AddRowButton />
          <ColumnNumberRow />
          {numbers.map((row: RowType, index: number) => {
            return (
              <div className="table__row" key={index}>
                <span key={uniqid()} className="cell__info">
                  {index + 1}
                </span>
                {row.map((cell) => {
                  return <Row cell={cell} row={row} key={cell.id} />;
                })}
                <SumColumn row={row} key={uniqid()} />
                <button
                  key={uniqid()}
                  className="cell__remove"
                  type="button"
                  onClick={() => {
                    dispatch(removeRow(index));
                  }}
                >
                  x
                </button>
              </div>
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
