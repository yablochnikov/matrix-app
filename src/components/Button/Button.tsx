import uniqid from 'uniqid';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { actionCreators } from '../../store/store';

import './Button.scss';

const Button = () => {
  const { rows, columns, cells } = useTypedSelector((state) => state.setMatrix);
  const { numbers } = useTypedSelector((state) => state.changeMatrix);

  const condition = rows > 0 && columns > 0 && cells > 0 ? false : true;

  const fillState = (): void => {
    for (let i = 0; i < rows; i++) {
      numbers[i] = [];
      for (let j = 0; j < columns; j++) {
        numbers[i][j] = {
          value: Math.round(Math.random() * (999 - 100) + 100),
          isHighLighted: false,
          id: uniqid(),
        };
      }
    }
  };

  return (
    <button
      disabled={condition}
      type="button"
      className="button"
      onClick={() => {
        fillState();
        actionCreators.createMatrix();
      }}
    >
      {condition ? 'Choose params please' : 'Create Matrix'}
    </button>
  );
};

export default Button;
