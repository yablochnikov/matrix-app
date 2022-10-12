import { ChangeEvent, FC } from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { actionCreators } from '../../store/store';
import { UpdateTypes } from '../../types/commonTypes';
import Button from '../Button/Button';

import './Form.scss';

const Form: FC = () => {
  const { isCreated } = useTypedSelector((state) => state.setMatrix);
  const { numbers } = useTypedSelector((state) => state.changeMatrix);
  const { rows, columns, cells } = useTypedSelector((state) => state.setMatrix);

  const isDisabled = rows > 0 && columns > 0 && cells > 0 ? false : true;
  const updateColumns = 'updateColumns',
    updateRows = 'updateRows',
    updateCells = 'updateCells';

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    actionType: UpdateTypes,
  ): void => {
    actionCreators[actionType](Number(event.target.value));
  };

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
                  handleChange(e, updateColumns);
                }}
              />
            </div>

            <div className="form__select">
              <label htmlFor="rows">Enter the number of rows :</label>
              <input
                onChange={(e) => handleChange(e, updateRows)}
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
                onChange={(e) => handleChange(e, updateCells)}
              />
            </div>
          </div>

          <Button
            isDisabled={isDisabled}
            rows={rows}
            columns={columns}
            numbers={numbers}
          />
        </form>
      ) : (
        <h2 className="form__subheader">Enjoy</h2>
      )}
    </>
  );
};

export default Form;
