import React from "react";
import { Button } from 'react-bootstrap';


class FinancialAid extends React.Component{
render(){

  return(

<form onSubmit = {this.props.applyChangesFunction} >
  <h1> Financial Aid  <span className="aidamount" style={{color: 'black'}}>
   <b> </b></span> </h1>


  <p> Item of aid  <br/> <input type = "checkbox" name="checkedChanges"  />
   Apply this item of aid <br/> <br/>
  </p>



    <Button bsStyle="primary"> Apply Changes </Button>

    {this.props.finaidchanged != undefined && <p>  <br/>{this.props.finaidchanged} </p> }
    {this.props.error == undefined && <p> {this.props.error} </p> }
   <hr/>  <p> Total Aid
        <span className="aidamount" style={{color: 'black'}}><b> </b></span>
      </p>

  </form>

  );
}

}

export default FinancialAid;
