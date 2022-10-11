import { actionCreators } from '../../App/App';
import Button from '../Button/Button';

import './Form.scss';
function Form(props) {
  console.log(props);
  return (
    <form className="form" action="#">
      <div className="form-select">
        <label htmlFor="columns">Enter the number of columns</label>
        <input
          className="form-input"
          name="columns"
          type="number"
          min="0"
          onChange={(e) => actionCreators.updateColumns(e.target.value)}
        />
      </div>
      <br />

      <div className="form-select">
        <label htmlFor="columns">Enter the number of rows :</label>
        <input
          onChange={(e) => actionCreators.updateRows(e.target.value)}
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
          onChange={(e) => actionCreators.updateCells(e.target.value)}
        />
      </div>

      <Button />
    </form>
  );
}

export default Form;
