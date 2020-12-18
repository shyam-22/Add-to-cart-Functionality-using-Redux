import React, { Component } from "react"

//import "../CSS Folder"
import { connect } from "react-redux";
import {addToCart,removeToCart} from "../STATE/ACTIONs/action"

class HomeLayout extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }

  addToCartHandler = (e) => {
      e.preventDefault();
        let obj ={
            name:"oppo", price:"15000"     
        }
        this.props.addToCartHandler(obj)
    }

    render(){
        return(
            <div className="cart">

                <div className="img-wrapper">
                    <img alt="mobile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuE4UCQaEupYMeTolcJCfAkAsVGQrPqedxRQ&usqp=CAU" />
                </div>

                <div className="text-wrapper">
                    <span style={{margin:"5px"}}>Oppo A52</span>
                    <span>Price : 15000</span>
                </div>

                <div className="btn-wraaper">
                    <button type="button" className="btn btn-primary" style={{margin:"10px"}}
                        onClick = {(e) => {this.addToCartHandler(e)}}>Add To Cart</button>
                    <button type="button" className="btn btn-danger"
                        onClick= {() => {this.props.removeToCartHandler() }}>Remove To Cart</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state);
    return { data : state.cartItems}
}

const mapDispatchToProps = dispatch =>({
    addToCartHandler : data => dispatch(addToCart(data)),
    removeToCartHandler : ()  => dispatch(removeToCart())
}) 

export default connect(mapStateToProps,mapDispatchToProps)(HomeLayout);


//unwant
//() => {this.addToCartHandler({name:"oppo", price:"15000"})}

//we will use mapStateToProps ----> when we want or getting data from component or someother component x,y,z
      // then we use mapStateToProps
      //In Short --->pull/gettng the data from store 

//we will use mapDispatchToProps -->when we are sending data from react to store then we use mapDispatchToProps 
      //In Short --->push the data inside the store
