import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import Info from "./components/Info";
import ButtonReview from './components/ButtonReview'
import Table from "./components/Table";
import Petunjuk from './components/Petunjuk'
import Footer from './components/Footer'
import logo from './assets/logo.png'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <div className="jumbotron bg-primary text-white">
        <div className="container bg-transparent">
        <img alt="brand-logo" src={logo}/>
      </div>
    </div>


        <div id="wrapperTagihanku" className="container container-tagihanku mt-4">
          <Petunjuk />
          <hr/>
          <Header />
          <hr className="my-4" />
          <Info />
          <hr className="my-4" />
          <Table />
          <div className="my-4 border-0" />
          
          <hr className="my-4"/>
          <span className="pb-4"><ButtonReview /></span>
        </div>

        <Footer />
      </div>
    </Provider>
  );
}

export default App;
