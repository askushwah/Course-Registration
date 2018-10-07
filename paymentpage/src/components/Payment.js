import React from "react";
import Form from "./Form"
import Cart from "./Cart"
import FinancialAid from "./FinancialAid"
import '../App.css';
import '../Form.css';
import TheForm from "./TheForm"

import { Modal } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';
import fs from 'fs';

class Payment extends React.Component{




state = {
  finaidchanged: undefined,
  formSubmitted: undefined,
  error: undefined
}


  submitFunction = (e) => {
    e.preventDefault();

    const namecard = e.target.elements.nameoncard.value;
    const cardnum = e.target.elements.creditcardnumber.value;
    const expirmonth = e.target.elements.expirationmonth.value;
    const expiryear = e.target.elements.expirationyear.value;
    const cvv = e.target.elements.cardcvv.value;
    const email = e.target.elements.emailaddress.value;

    const buttonSubmitted = 'Submitted!';
    if( email && namecard && expirmonth && expiryear && cvv && cardnum ){
{/*
    const objbillinfo = {email, namecard, expirmonth, expiryear, cvv, cardnum};
    const billinginfo = JSON.stringify(objbillinfo, null, 2);
    fs.writeFile("./creditcardfrom.json", billinginfo, null);
*/}
    console.log(buttonSubmitted);
    this.setState( {
      formSubmitted: 'Submitted!',
      error: " "

     } );
   }

   else{
     this.setState( {
     error: "Form is missing information",
     formSubmitted: undefined
   } );
   }
 }


  printFunction = (e) => {
    e.preventDefault();
    window.print();
  }

  applyChangesFunction = (e) => {
    e.preventDefault();
    const checkchange = e.target.elements.checkedChanges.value;
    const applyChanges = 'Changes Applied!';
    if(checkchange){
    console.log(applyChanges);

    this.setState( {
      finaidchanged:   'Changes Applied!',
      error: " "
     } );
   }
   else  {
     this.setState( {
        finaidchanged: undefined,
          error: "No Changes made"
     } );

  }
}



  render() {
    return (

<div className="App">


<div>
  <ProgressBar striped active now={45}  />
</div>

  <div className="row">

              <div className="container"> <br/>
                 <br/> <div id="first">
                      <Form   formSubmitted = {this.state.formSubmitted}
                      submitFunction={this.submitFunction}
                      error = {this.state.error} />
                      </div>
               </div> <br/>

          <div id="second">
               <div className="containerRight">
                 <FinancialAid applyChangesFunction = {this.applyChangesFunction}
                   finaidchanged = {this.state.finaidchanged}
                     error = {this.state.error} />
               </div>
                <br/>
               <div className="containerRight">
                 <Cart  printFunction = {this.printFunction} />
               </div>

    </div>

  </div>

  <div >
    <TheForm />
  </div>

</div>
    );
  }
}

export default Payment;
