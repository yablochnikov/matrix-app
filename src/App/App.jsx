import React from 'react';

import Form from '../components/Form/Form';
import Table from '../components/Table/Table';

import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="app-banner">
        <h1 className="app-banner-heading">Matrix Builder</h1>
        <Form />
      </div>
      <Table />
    </div>
  );
}

export default App;
