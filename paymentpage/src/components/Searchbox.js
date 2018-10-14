import React from "react";
import '../App.css';
import '../Searchbox.css';

import Sidebar from "./Sidebar"

import Breadcrumbs from "./Breadcrumbs"
import { Breadcrumb } from 'react-bootstrap';


class Searchbox extends React.Component{
render(){
  return(



  <form class="form-inline md-form mr-auto mb-4">


<div id="top">

        <div class="search-box">
          <form class="search-form">
            <input class="form-control" />  <button class="btn btn-link search-btn">
              <i class="glyphicon glyphicon-search"></i> Search
            </button>
          </form>

    </div>
    </div>



  </form>





);
}

}

export default Searchbox;
