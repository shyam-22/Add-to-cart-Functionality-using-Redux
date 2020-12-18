import React, { Component } from "react"
import HomeLayout from "./HomeLayout"


//import { connect } from "react-redux";

//import {addToCart,removeToCart} from "../STATE/ACTIONs/action"



class Home extends Component{
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Home Component</h1>
                        <HomeLayout/>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     console.log(state);
//     return state;
// }

// const mapDispatchToProps = dispatch =>({
//     addToCartHandler : data => dispatch(addToCart(data)),
//     removeToCartHandler : ()  => dispatch(removeToCart())

// }) 

export default Home

