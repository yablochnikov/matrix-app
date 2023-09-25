import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { setMatrixSlice } from '../../store/reducers/setMatrixSlice';
import Button from '../Button/Button';

import './Form.scss';

const Form: FC = () => {
  const { isCreated, rows, columns, cells } = useAppSelector(
    (state) => state.setMatrixReducer,
  );

  const { setRows, setColumns, setCells } = setMatrixSlice.actions;

  const dispatch = useAppDispatch();

  const isDisabled = rows > 0 && columns > 0 && cells > 0 ? false : true;
  return (
    <>
      {!isCreated ? (
        <form className="form" action="#">
          <div className="form__wrapper">
            <div className="form__select">
              <label htmlFor="columns">Enter the number of columns:</label>
              <input
                className="form__input"
                name="columns"
                type="number"
                min="0"
                onChange={(e) => {
                  dispatch(setColumns(Number(e.target.value)));
                }}
              />
            </div>

            <div className="form__select">
              <label htmlFor="rows">Enter the number of rows :</label>
              <input
                onChange={(e) => dispatch(setRows(Number(e.target.value)))}
                className="form__input"
                name="rows"
                id="rows"
                type="number"
                min="0"
              />
            </div>

            <div className="form__select">
              <label htmlFor="cells">Enter the number of cells :</label>
              <input
                className="form__input"
                name="cells"
                type="number"
                min="0"
                onChange={(e) => dispatch(setCells(Number(e.target.value)))}
              />
            </div>
          </div>

          <Button isDisabled={isDisabled} rows={rows} columns={columns} />
        </form>
      ) : (
        <h2 className="form__subheader">Enjoy</h2>
      )}
    </>
  );
};

export default Form;
