import { useSelector } from 'react-redux';

import { actionCreators } from '../../store/store';
const { v4: uuidv4 } = require('uuid');

import AverageView from './AverageView';
import SumAverageView from './SumView';

import './Table.scss';

const Table = () => {
  const numbers = useSelector((state) => state.numbers);
  const cells = useSelector((state) => state.cells);
  const columns = useSelector((state) => state.columns);
  const isCreated = useSelector((state) => state.isCreated);

  const getClosest = (element, howMuchHighLight) => {
    const newArr = [];

    const amount = Number(element.target.textContent);

    numbers.forEach((row) => {
      row.map((cell) => {
        newArr.push(cell.value);
      });
    });

    let nearest;

    for (let i = 0; i < howMuchHighLight + 1; i++) {
      nearest = newArr.reduce((prevNum, num) => {
        return Math.abs(num - amount) < Math.abs(prevNum - amount)
          ? num
          : prevNum;
      });

      const s = newArr.findIndex((el) => el === nearest);
      newArr.splice(s, 1);

      numbers.forEach((row) => {
        row.forEach((cell) => {
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
      row.map((cell) => {
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
              const row = [];
              for (let i = 0; i < columns; i++) {
                row.push({
                  value: Math.round(Math.random() * (999 - 100) + 100),
                  isHighLighted: false,
                  id: uuidv4(),
                });
              }
              actionCreators.addRow(row);
            }}
          >
            Add row
          </button>
          <div className="table-row table-row-average">
            <span className="table-cell-info">№</span>
            {numbers[0].map((row, id) => {
              return (
                <span key={uuidv4()} className="table-cell-info">
                  {id + 1}{' '}
                </span>
              );
            })}
            <span className="table-cell-info">Sum</span>
          </div>
          {numbers.map((row, index) => {
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
                          actionCreators.increaseValue(cell.id, cell.value);
                        }}
                        onMouseEnter={(element) => {
                          actionCreators.highLightCells(
                            getClosest(element, cells),
                          );
                        }}
                        onMouseLeave={(e) => {
                          actionCreators.removeHighLight(removeHighLight());
                          e.target.removeAttribute('style');
                        }}
                      >
                        {cell.value}{' '}
                      </div>
                    );
                  })}

                  <span className="table-cell average">
                    {row.reduce((acc, cell) => {
                      return acc + cell.value;
                    }, 0)}
                  </span>
                  <button
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
          })}
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
