import React from 'react';

const SumAverageView = ({ numbers }: { numbers: { value: number }[][] }) => {
  const arr: number[] = [];
  numbers.map((el: { value: number }[]) => {
    el.map((el) => {
      arr.push(el.value);
    });
  });
  return (
    <span>{Math.floor(arr.reduce((a, b) => a + b) / numbers.length)}</span>
  );
};

export default React.memo(SumAverageView);
