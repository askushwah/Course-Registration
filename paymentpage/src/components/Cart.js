import React from "react";
import { Button } from 'react-bootstrap';


class Cart extends React.Component{
render(){

  return(
  <form onSubmit = {this.props.printFunction}>
  <h1> Cart  <span className="price" style={{color: 'black'}}>
  <i className="fa fa-shopping-cart" /> <b></b></span> </h1>
  <hr/>

  <p> Aid Deduction
  <span className="price" style={{color: 'black'}}><b> </b></span>
  </p>

  <p> Total Cost
  <span className="price" style={{color: 'black'}}><b> </b></span>
  </p>

  <p>
   <br/> <Button bsStyle="info"> Print this transaction/reciept page </Button>  </p> <br/>
  </form>
  );
}

}

export default Cart;
