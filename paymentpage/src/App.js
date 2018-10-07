import React from "react";
import './App.css';
import Payment from "./components/Payment"
import Navigationbar from "./components/Navigationbar"

//import 'react-bootstrap/lib';
//import { Modal } from 'react-bootstrap';
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends React.Component{


  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigationbar/>
      <Switch>

      <Route path="/payment" component={Payment} exact />
      </Switch>
      </div>
      </BrowserRouter>
    //  <Payment/ >
    );
  }
}


export default App;
