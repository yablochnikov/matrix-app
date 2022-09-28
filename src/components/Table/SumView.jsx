const SumAverageView = ({ numbers }) => {
  const arr = [];
  numbers.map((el) => {
    el.map((el) => {
      arr.push(el.value);
    });
  });
  return Math.floor(arr.reduce((a, b) => a + b) / numbers.length);
};

export default SumAverageView;
