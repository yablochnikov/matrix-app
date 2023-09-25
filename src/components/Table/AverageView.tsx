import { FC } from 'react';
import uniqid from 'uniqid';

type AverageViewProps = {
  numbers: Array<Array<{ value: number }>>;
};

const AverageView: FC<AverageViewProps> = ({ numbers }) => {
  const arr: number[][] = [];

  numbers.forEach((row, i) => {
    arr[i] = [];

    row.forEach((cell) => {
      arr[i].push(cell.value);
    });
  });

  return (
    <>
      {arr
        .reduce((a, b): number[] => a.map((x: number, i: number) => x + b[i]))
        .map((el: number) => {
          return (
            <div className="cell__average" key={uniqid()}>
              {Math.floor((el = el / arr.length))}
            </div>
          );
        })}
    </>
  );
};

export default AverageView;
