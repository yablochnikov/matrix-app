import { IChangeMatrixState } from '../types/changeMatrix';

export const getClosest = (
  element: React.MouseEvent<HTMLDivElement, MouseEvent>,
  howMuchHighLight: number,
  { numbers }: IChangeMatrixState,
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

export const removeHighLight = ({ numbers }: IChangeMatrixState) => {
  numbers.forEach((row) => {
    row.map((cell: { isHighLighted: boolean }) => {
      cell.isHighLighted = false;
    });
  });
  return numbers;
};
