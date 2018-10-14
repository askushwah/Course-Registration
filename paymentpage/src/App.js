import React from "react";
import './App.css';
import './Form.css';
import './Searchbox.css';

import Payment from "./components/Payment"
import ReviewPage from "./components/ReviewPage"
import Sidebar from "./components/Sidebar"
import Breadcrumbs from "./components/Breadcrumbs"

import Searchbox from "./components/Searchbox"


//import 'react-bootstrap/lib';
//import { Modal } from 'react-bootstrap';
import {BrowserRouter, Route, browserHistory,  Switch} from "react-router-dom";


class App extends React.Component{


  render() {
    return (

      <BrowserRouter>
      <div>
      <Searchbox/>
      <Breadcrumbs/>
      <Switch>
      <Route path="/payment" component={Payment} exact />
      <Route path="/reviewcourses" component={ReviewPage} exact />


      </Switch>
      </div>
      </BrowserRouter>



    );
  }
}


export default App;
