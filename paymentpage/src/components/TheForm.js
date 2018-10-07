import React from "react";
import '../Form.css';

class TheForm extends React.Component{
render(){

  return(

    <div class="container-flex">
        <div class="dock dock-left">
            <div class="container-fluid">
                <div class="panel panel-default">
                    <div class="panel-heading">Panel Heading Left</div>
                    <div class="panel-body">Panel Body Left</div>
                </div>
            </div>
        </div>
        <div class="dock dock-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <div class="panel panel-info">
                            <div class="panel-heading">Panel Heading Center 1</div>
                            <div class="panel-body">Panel Body Center 1</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h1>Simple Flex Container</h1>
                    <p> </p>
                </div>
            </div>
        </div>
        <div class="dock dock-right">
            <div class="container-fluid">
                <div class="panel panel-default">
                    <div class="panel-heading">Panel Heading Right</div>
                    <div class="panel-body">Panel Body Right</div>
                </div>
            </div>
        </div>
    </div>

      );
    }

    }

    export default TheForm;
