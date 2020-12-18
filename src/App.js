import React, { Component } from "react"

import './App.css';
import Cart from "./COMPONENTs/Cart";
import Home from "./COMPONENTs/Home";

class App extends Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }
  render(){
    return (
      <div className="App">
        <div className="row">

          <div className="col-md-6">
          <Home/>
          </div>

          <div className="col-md-6" style={{left:"50px"}}>
          <Cart/>
          </div>

        </div>        
      </div>
    );
  }
}

export default App;
