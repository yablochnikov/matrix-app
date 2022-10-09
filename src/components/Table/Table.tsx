import React from 'react';
import uniqid from 'uniqid';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { actionCreators } from '../../store/store';

import AddRowButton from './AddRowButton';
import AverageView from './AverageView';
import ColumnNumberRow from './ColumnNumberRow';
import Row from './Row';
import SumColumn from './SumColumn';
import SumAverageView from './SumView';

import './Table.scss';

const Table: React.FC = () => {
  const { numbers } = useTypedSelector((state) => state.changeMatrix);
  const { isCreated } = useTypedSelector((state) => state.setMatrix);

  return (
    <div className="table">
      {isCreated ? (
        <>
          <AddRowButton />
          <ColumnNumberRow />
          {numbers.map(
            (
              row: {
                value: number;
                id: string;
                isHighLighted: boolean;
                percents?: number;
              }[],
              index: number,
            ) => {
              return (
                <>
                  <div className="table-row">
                    <span key={uniqid()} className="table-cell-info">
                      {index + 1}
                    </span>
                    {row.map((cell, i) => {
                      return <Row cell={cell} row={row} key={i} />;
                    })}
                    <SumColumn row={row} />
                    <button
                      key={uniqid()}
                      className="table-cell-remove"
                      type="button"
                      onClick={() => {
                        actionCreators.removeRow(index);
                      }}
                    >
                      {' '}
                      x
                    </button>
                  </div>
                </>
              );
            },
          )}
          <div className="table-row table-row-average">
            <span className="table-cell-info">Avg</span>
            <AverageView numbers={numbers} />
            <span className="table-cell average">
              <SumAverageView numbers={numbers} />
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default React.memo(Table);
