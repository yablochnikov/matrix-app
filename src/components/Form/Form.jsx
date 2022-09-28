import { useSelector } from 'react-redux';

import { actionCreators } from '../../store/store';
import Button from '../Button/Button';

import './Form.scss';
const Form = () => {
  const isCreated = useSelector((state) => state.isCreated);

  return (
    <>
      {!isCreated ? (
        <form className="form" action="#">
          <div className="form-select">
            <label htmlFor="columns">Enter the number of columns</label>
            <input
              className="form-input"
              name="columns"
              type="number"
              min="0"
              onChange={(e) =>
                actionCreators.updateColumns(Number(e.target.value))
              }
            />
          </div>
          <br />

          <div className="form-select">
            <label htmlFor="columns">Enter the number of rows :</label>
            <input
              onChange={(e) =>
                actionCreators.updateRows(Number(e.target.value))
              }
              className="form-input"
              name="columns"
              id="columns"
              type="number"
              min="0"
            />
          </div>
          <br />

          <div className="form-select">
            <label htmlFor="columns">Enter the number of cells :</label>
            <input
              className="form-input"
              name="columns"
              type="number"
              min="0"
              onChange={(e) =>
                actionCreators.updateCells(Number(e.target.value))
              }
            />
          </div>

          <Button text={'Create'} />
        </form>
      ) : (
        <h2 className="form-subheader">Enjoy</h2>
      )}
    </>
  );
};

export default Form;
