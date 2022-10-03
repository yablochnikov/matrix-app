import React from 'react';
import uniqid from 'uniqid';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { actionCreators } from '../../store/store';

import AverageView from './AverageView';
import SumAverageView from './SumView';

import './Table.scss';

const Table: React.FC = () => {
  const { numbers } = useTypedSelector((state) => state.changeMatrix);
  const { cells, columns, isCreated } = useTypedSelector(
    (state) => state.setMatrix,
  );

  const getClosest = (
    element: React.MouseEvent<HTMLDivElement, MouseEvent>,
    howMuchHighLight: number,
  ) => {
    const newArr: number[] = [];
    const amount = Number((element.target as HTMLElement).textContent);

    numbers.forEach((row: { value: number }[]) => {
      row.map((cell: { value: number }) => {
        return newArr.push(cell.value);
      });
    });

    let nearest: number;

    for (let i = 0; i < howMuchHighLight + 1; i++) {
      nearest = newArr.reduce((prevNum, num) => {
        return Math.abs(num - amount) < Math.abs(prevNum - amount)
          ? num
          : prevNum;
      });

      const s = newArr.findIndex((el) => el === nearest);
      newArr.splice(s, 1);

      numbers.forEach((row) => {
        row.forEach((cell: { value: number; isHighLighted: boolean }) => {
          if (cell.value === nearest) {
            cell.isHighLighted = true;
          }
        });
      });
    }
    return numbers;
  };

  const removeHighLight = () => {
    numbers.forEach((row) => {
      row.map((cell: { isHighLighted: boolean }) => {
        cell.isHighLighted = false;
      });
    });
    return numbers;
  };

  return (
    <div className="table">
      {isCreated ? (
        <>
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
                    <span className="table-cell-info">{index + 1}</span>
                    {row.map((cell) => {
                      return (
                        <div
                          key={cell.id}
                          className={
                            cell.isHighLighted === true
                              ? 'table-cell highlighted'
                              : 'table-cell'
                          }
                          onClick={() => {
                            actionCreators.increaseValue(cell.value, cell.id);
                          }}
                          onMouseEnter={(element) => {
                            actionCreators.highLightCells(
                              getClosest(element, cells),
                            );
                          }}
                          onMouseLeave={(e) => {
                            actionCreators.removeHighLight(removeHighLight());
                            (e.target as HTMLElement).removeAttribute('style');
                          }}
                          style={
                            (cell.value /
                              row.reduce(
                                (acc: number, cell: { value: number }) => {
                                  return acc + cell.value;
                                },
                                0,
                              )) *
                              100 ===
                            cell.percents
                              ? {
                                  background: `linear-gradient(0deg, rgba(255,0,0,1) ${cell.percents}%, rgba(255,255,255,1)${cell.percents}%)`,
                                }
                              : {}
                          }
                        >
                          {(cell.value /
                            row.reduce(
                              (acc: number, cell: { value: number }) => {
                                return acc + cell.value;
                              },
                              0,
                            )) *
                            100 ===
                          cell.percents
                            ? Math.floor(cell.percents) + '%'
                            : cell.value}{' '}
                        </div>
                      );
                    })}

                    <span
                      className="table-cell average"
                      onMouseOver={(e) => {
                        actionCreators.setPercents(
                          Number((e.target as HTMLElement).textContent),
                        );
                      }}
                      onMouseLeave={() => {
                        actionCreators.clearPercents();
                      }}
                    >
                      {row.reduce((acc: number, cell: { value: number }) => {
                        return acc + cell.value;
                      }, 0)}
                    </span>
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

export default Table;
