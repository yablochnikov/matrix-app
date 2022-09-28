import { useSelector } from 'react-redux';
const { v4: uuidv4 } = require('uuid');

import { actionCreators } from '../../store/store';

import './Button.scss';

const Button = () => {
  const rows = useSelector((state) => state.rows);
  const columns = useSelector((state) => state.columns);
  const numbers = useSelector((state) => state.numbers);
  const fillState = (rows) => {
    for (let i = 0; i < rows; i++) {
      numbers[i] = [];
      for (let j = 0; j < columns; j++) {
        numbers[i][j] = {
          value: Math.round(Math.random() * (999 - 100) + 100),
          isHighLighted: false,
          id: uuidv4(),
        };
      }
    }
  };

  return (
    <button
      type="button"
      className="button"
      onClick={() => {
        fillState(rows);
        actionCreators.createMatrix();
      }}
    >
      CREATE
    </button>
  );
};

export default Button;
