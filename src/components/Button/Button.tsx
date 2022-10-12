import { FC } from 'react';

import { fillState } from '../../helpers/helpers';
import { actionCreators } from '../../store/store';

import './Button.scss';

type ButtonProps = {
  isDisabled: boolean;
  rows: number;
  columns: number;
  numbers: {
    value: number;
    id: string;
    isHighLighted: boolean;
    percents?: number | undefined;
  }[][];
};

const Button: FC<ButtonProps> = ({ isDisabled, rows, columns, numbers }) => {
  const handleClick = () => {
    actionCreators.fillMatrix(fillState({ numbers }, rows, columns));
    actionCreators.createMatrix();
  };

  return (
    <button
      disabled={isDisabled}
      type="button"
      className="button"
      onClick={() => handleClick()}
    >
      {isDisabled ? 'Choose params please' : 'Create Matrix'}
    </button>
  );
};

export default Button;
