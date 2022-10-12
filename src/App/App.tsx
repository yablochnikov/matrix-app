import Form from '../components/Form/Form';
import Table from '../components/Table/Table';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <div className="app__banner">
        <h1 className="app__banner_heading">Matrix Builder</h1>
        <Form />
      </div>
      <Table />
    </div>
  );
};

export default App;
