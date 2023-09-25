import { FC } from 'react';

import { fillState } from '../../helpers/helpers';
import { useAppDispatch } from '../../hooks/useTypedSelector';
import { changeMatrixSlice } from '../../store/reducers/changeMatrixSlice';
import { setMatrixSlice } from '../../store/reducers/setMatrixSlice';

import './Button.scss';

type ButtonProps = {
  isDisabled: boolean;
  rows: number;
  columns: number;
};

const Button: FC<ButtonProps> = ({ isDisabled, rows, columns }) => {
  const { fillMatrix } = changeMatrixSlice.actions;
  const { setIsCreated } = setMatrixSlice.actions;
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(fillMatrix(fillState(rows, columns)));
    dispatch(setIsCreated(true));
  };

  return (
    <button
      disabled={isDisabled}
      type="button"
      className="button"
      onClick={() => handleChange()}
    >
      {isDisabled ? 'Choose params please' : 'Create Matrix'}
    </button>
  );
};

export default Button;
