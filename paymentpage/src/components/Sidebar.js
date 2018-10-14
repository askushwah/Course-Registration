import React from "react";
import Form from "./Form"
import Cart from "./Cart"
import FinancialAid from "./FinancialAid"
import '../App.css';
import '../Searchbox.css';
import './style4.css';
import Payment from "./Payment"
import ReviewPage from "./ReviewPage"



import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';



class Sidebar extends React.Component{
    render() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          <link rel="stylesheet" href="style4.css" />
          <div className="wrapper">
            <nav id="sidebar">
              <div className="sidebar-header">
                <h3>CourseSelect</h3>
                <strong> <h4>Course Select </h4> </strong>
              </div>
              <ul className="list-unstyled components">
              <li className="inactive">


                  <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                    <i className="glyphicon glyphicon-home" />
                    Home
                  </a>


                  <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li><a href="#">Home 1</a></li>
                    <li><a href="#">Home 2</a></li>
                    <li><a href="#">Home 3</a></li>
                  </ul>
                  </li>
                <li>
                  <a href="#">
                    <i className="glyphicon glyphicon-briefcase" />
                    Dashboard
                  </a>


                    <li className="active">

                  <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                    <i className="glyphicon glyphicon-duplicate" />
                      Course Search
                  </a>
                  </li>


                  <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li>
                    <li><a href="#">Page 3</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="glyphicon glyphicon-link" />
                    Course Reviews
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="glyphicon glyphicon-paperclip" />
                    Chat
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="glyphicon glyphicon-send" />
                    Direct Message
                  </a>
                </li>
              </ul>
              <ul className="list-unstyled CTAs">

                <li><a href="http://localhost:3000/payment" className="checkout">Checkout</a></li>

              </ul>
            </nav>
            {/* Page Content Holder */}
            <div id="content">
                <div className="container-fluid">
                  <div className="navbar-header">



                  </div>

                </div>

            </div>
          </div>

        </div>
      );
    }
  }

         export default Sidebar;
