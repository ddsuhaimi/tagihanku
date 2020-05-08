import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/Header'
import Info from './components/Info'
import Table from './components/Table'

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <div className="container mt-4">
        <Header />
        <hr className="my-4"/>
        <Info />
        <hr className="my-4"/>
        <Table/>
        <hr className="my-4"/>
        <hr className="my-4"/>
        <div className="col-4 float-right btn-group col text-right pb-4">
          <button className="btn btn-info">
            <i className="fas fa-file-image"></i> Preview
          </button>
          <button className="btn btn-success">
            <i className="fas fa-download"></i> Download
          </button>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
