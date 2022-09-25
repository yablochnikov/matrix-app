import "./App.scss";
import React from "react";

function App() {
  return (
    <div className='app'>
      <div className='app-banner'>
        <h1 className='app-banner-heading'>Matrix Builder</h1>

        <form className='app-banner-form' action='#'>
          <div className='app-banner-select'>
            <label htmlFor='columns'>Enter the number of columns</label>
            <input
              className='app-banner-input'
              name='columns'
              type='number'
              min='0'
            />
          </div>
          <br />

          <div className='app-banner-select'>
            <label htmlFor='columns'>Enter the number of rows :</label>
            <input
              className='app-banner-input'
              name='columns'
              type='number'
              min='0'
            />
          </div>
          <br />

          <div className='app-banner-select'>
            <label htmlFor='columns'>Enter the number of cells :</label>
            <input
              className='app-banner-input'
              name='columns'
              type='number'
              min='0'
            />
          </div>

          <button type='button' className='app-banner-btn'>
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
