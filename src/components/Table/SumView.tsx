import { memo } from 'react';

const SumAverageView = ({ numbers }: { numbers: { value: number }[][] }) => {
  const arr: number[] = [];
  numbers.map((row: { value: number }[]) => {
    row.map((cell) => {
      arr.push(cell.value);
    });
  });
  return (
    <span>{Math.floor(arr.reduce((a, b) => a + b) / numbers.length)}</span>
  );
};

export default memo(SumAverageView);
