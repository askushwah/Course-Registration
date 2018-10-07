import React from "react";
import Form from "./Form"
import Cart from "./Cart"
import FinancialAid from "./FinancialAid"
import '../App.css';
import '../Form.css';
import { Modal } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';



class Navigationbar extends React.Component{
render(){

  return(

  <div>
<Navbar inverse collapseOnSelect fixedTop fluid>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Course Select</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link 1
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link 2
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link 3
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link 4
      </NavItem>
    </Nav>
  </Navbar.Collapse>
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
