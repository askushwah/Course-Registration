
import React from "react";
import Form from "./Form"
import Cart from "./Cart"
import '../App.css';
import '../Form.css';
import '../TheForm.css';
import '../Searchbox.css';

import TheForm from "./TheForm"
import NewForm from "./NewForm"
import ReviewPage from "./ReviewPage"
import { Breadcrumb } from 'react-bootstrap';

import { Link } from "react-router-dom";


class Breadcrumbs extends React.Component{
render(){

  return(
  <div className="breadcrumbscss">
<Breadcrumb>
  <Breadcrumb.Item  > <Link to="/reviewcourses" >Course Reviews </Link> </Breadcrumb.Item>
  <Breadcrumb.Item > <Link to="/payment" > Checkout </Link></Breadcrumb.Item>
  <Breadcrumb.Item active>    Current Page</Breadcrumb.Item>

</Breadcrumb>
 </div>


);
}

}

export default Breadcrumbs;
