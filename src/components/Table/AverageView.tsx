import uniqid from 'uniqid';

type AverageViewProps = {
  numbers: Array<Array<{ value: number }>>;
};

const AverageView: React.FC<AverageViewProps> = ({ numbers }) => {
  const arr: number[][] = [];

  for (let i = 0; i < numbers.length; i++) {
    arr[i] = [];
    for (let j = 0; j < numbers[i].length; j++) {
      arr[i].push(numbers[i][j].value);
    }
  }

  return (
    <>
      {arr
        .reduce((a, b): number[] => a.map((x: number, i: number) => x + b[i]))
        .map((el: number) => {
          return (
            <div className="table-cell average" key={uniqid()}>
              {Math.floor((el = el / arr.length))}
            </div>
          );
        })}
    </>
  );
};

export default AverageView;
