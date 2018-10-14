import React from "react";
import Form from "./Form"
import Cart from "./Cart"
import FinancialAid from "./FinancialAid"
import '../App.css';
import '../Form.css';
import '../Searchbox.css';

import { Modal } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';



class Navigationbar extends React.Component{
render(){

  return(

  <div>
<Navbar className="navbar"  fixedTop fluid>
  <Navbar.Header>
    <Navbar.Brand >
      <a  className="navheading" href="#brand">Course Select</a>
    </Navbar.Brand>
  </Navbar.Header>
    <Nav className="stack1"  >
     <NavItem className="stack1" eventKey={1} href="#">
        Link 1
      </NavItem>
      <NavItem  className="stack1" eventKey={2} href="#">
        Link 2
      </NavItem>


      <NavItem  className="stack1" eventKey={1} href="#">
        Link 3
      </NavItem>
      <NavItem   className="stack1" eventKey={2} href="#">
        Link 4
      </NavItem>

      <NavDropdown className="stack1"   eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>


</Navbar>


{/*
<header className="App-header">
  <h1 className="App-title">Course Checkout Payment</h1>  </header>
<p className="App-intro"> </p>
*/}
</div>

);
}

}

export default Navigationbar;
