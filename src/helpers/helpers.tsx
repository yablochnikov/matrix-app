import uniqid from 'uniqid';

import { IChangeMatrixState } from '../types/changeMatrix';

export const getClosest = (
  element: React.MouseEvent<HTMLDivElement, MouseEvent>,
  howMuchHighLight: number,
  { numbers }: IChangeMatrixState,
) => {
  const newArr: number[] = [];
  const amount = Number((element.target as HTMLElement).textContent);
  const res = JSON.parse(JSON.stringify(numbers));

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

    res.forEach(
      (row: Array<{ value: number; isHighLighted: boolean; id: string }>) => {
        row.forEach((cell) => {
          if (cell.value === nearest) {
            cell.isHighLighted = true;
          }
        });
      },
    );
  }

  return res;
};

export const fillState = (rows: number, columns: number) => {
  const newArr: Array<
    Array<{ value: number; isHighLighted: boolean; id: string }>
  > = [];
  for (let i = 0; i < rows; i++) {
    newArr[i] = [];
    for (let j = 0; j < columns; j++) {
      newArr[i][j] = {
        value: Math.round(Math.random() * (999 - 100) + 100),
        isHighLighted: false,
        id: uniqid(),
      };
    }
  }
  return newArr;
};
