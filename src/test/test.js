const counts = [
    [
      { value: 1, isHighLighted: false },
      { value: 14, isHighLighted: false },
      { value: 18, isHighLighted: false },
      { value: 22, isHighLighted: false },
      { value: 26, isHighLighted: false },
    ],
    [
      { value: 10, isHighLighted: false },
      { value: 2, isHighLighted: false },
      { value: 19, isHighLighted: false },
      { value: 23, isHighLighted: false },
      { value: 27, isHighLighted: false },
    ],
    [
      { value: 11, isHighLighted: false },
      { value: 15, isHighLighted: false },
      { value: 3, isHighLighted: false },
      { value: 24, isHighLighted: false },
      { value: 28, isHighLighted: false },
    ],
    [
      { value: 12, isHighLighted: false },
      { value: 16, isHighLighted: false },
      { value: 20, isHighLighted: false },
      { value: 4, isHighLighted: false },
      { value: 29, isHighLighted: false },
    ],
    [
      { value: 13, isHighLighted: false },
      { value: 17, isHighLighted: false },
      { value: 21, isHighLighted: false },
      { value: 25, isHighLighted: false },
      { value: 5, isHighLighted: false },
    ],
  ],
  amount = 25,
  howMuchHighLight = 2;

const getClosest = (amount, howMuchHighLight) => {
  const newArr = [];
  counts.forEach((el) => {
    el.map((obj) => {
      newArr.push(obj.value);
    });
  });

  let nearest;

  for (let i = 0; i < howMuchHighLight + 1; i++) {
    nearest = newArr.reduce((prev, curr) => {
      return Math.abs(curr - amount) < Math.abs(prev - amount) ? curr : prev;
    });

    const s = newArr.findIndex((el) => el === nearest);
    newArr.splice(s, 1);

    counts.forEach((el) => {
      el.forEach((el) => {
        if (el.value === nearest) {
          el.isHighLighted = true;
        }
      });
    });
  }

  return counts;
};

getClosest(amount, howMuchHighLight);

// for (let i = 0; i < x; i++) {
//   let nearest = counts.reduce((prev, curr) => {
//     return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
//   });

//   const s = counts.findIndex((el) => el === nearest);
//   res.push(counts.splice(s, 1));
// }
