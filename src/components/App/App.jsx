import { useState } from "react";

import "./App.scss";

function App() {
  const [isCreated, setCreated] = useState(false);
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [cells, setCells] = useState(0);
  const sumAverage = [];
  const rndmNums = [];

  for (let i = 0; i < rows; i++) {
    rndmNums[i] = [];
    for (let j = 0; j < columns; j++) {
      rndmNums[i][j] = Math.round(Math.random() * (999 - 100) + 100);
    }
  }

  function createMatrix() {
    setCreated(true);
  }

  const highlightCells = cells => {};

  const MatrixView = props => {
    const average = rndmNums
      .reduce((acc, cur) => {
        cur.forEach((e, i) => (acc[i] = acc[i] ? acc[i] + e : e));
        return acc;
      }, [])
      .map(e => <td>{Math.floor(e / rndmNums.length)}</td>);

    const matrix = rndmNums.map((rows, i) => {
      const sum = rndmNums[i].reduce((a, b) => a + b);

      return (
        <>
          <tr key={i}>
            <td className='matrix-row-info'>{i + 1}</td>
            {rows.map((columns, j) => (
              <td
                className='matrix-row'
                onClick={() => highlightCells()}
                key={j + i}
              >
                {rndmNums[i][j]}
              </td>
            ))}

            <td key={i}>{sum}</td>
          </tr>
        </>
      );
    });

    return (
      <>
        {matrix}
        <tr>
          <td>Average</td>
          {average}
          <td>
            {Math.floor(sumAverage.reduce((a, b) => a + b) / sumAverage.length)}
          </td>
        </tr>
      </>
    );
  };

  return (
    <div className='app'>
      <div className='app-banner'>
        <h1 className='app-banner-heading'>Matrix Builder</h1>

        <form className='app-banner-form' action='#'>
          <div className='app-banner-select'>
            <label htmlFor='columns'>Enter the number of columns</label>
            <input
              className='app-banner-input'
              name='columns'
              type='number'
              min='0'
              onChange={e => setColumns(e.target.value)}
            />
          </div>
          <br />

          <div className='app-banner-select'>
            <label htmlFor='columns'>Enter the number of rows :</label>
            <input
              className='app-banner-input'
              name='columns'
              type='number'
              min='0'
              onChange={e => setRows(e.target.value)}
            />
          </div>
          <br />

          <div className='app-banner-select'>
            <label htmlFor='columns'>Enter the number of cells :</label>
            <input
              className='app-banner-input'
              name='columns'
              type='number'
              min='0'
              onChange={e => setCells(e.target.value)}
            />
          </div>

          <button
            type='button'
            className='app-banner-btn'
            onClick={() => createMatrix()}
          >
            Create
          </button>
        </form>
      </div>
      {isCreated ? (
        <div className='matrix'>
          <table className='matrix-table'>
            <tbody className='matrix-body'>
              <tr>
                {[...Array(+columns + 1)].map((el, i) => {
                  return (
                    <td className='matrix-row-info' key={i}>
                      {i}
                    </td>
                  );
                })}
              </tr>
              {<MatrixView rows={rows} columns={columns} />}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default App;
