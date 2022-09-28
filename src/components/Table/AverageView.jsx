const { v4: uuidv4 } = require('uuid');

const AverageView = ({ numbers }) => {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    arr[i] = [];
    for (let j = 0; j < numbers[i].length; j++) {
      arr[i].push(numbers[i][j].value);
    }
  }

  return arr
    .reduce((a, b) => a.map((x, i) => x + b[i]))
    .map((el) => {
      return (
        <div className="table-cell average" key={uuidv4()}>
          {Math.floor((el = el / arr.length))}
        </div>
      );
    });
};

export default AverageView;
