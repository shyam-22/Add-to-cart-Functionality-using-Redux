import React, { Component } from "react"
//import "../CSS Folder/style.css";
import { connect } from "react-redux";
import {addToCart,removeToCart} from "../STATE/ACTIONs/action"

class Cart extends Component{
    constructor(props){
        super(props)
        console.log(this.props.data)
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="img-wrapper cart" style={{background:"red", color:"white", borderRadius:"10px"}}>

                        <img  alt="cart_Image"  style={{float:"left", height:"50px", width:"50px"}}
                              src="https://image.shutterstock.com/image-vector/shopping-cart-icon-flat-design-260nw-570153007.jpg"/>
                        
                        <span style={{margin:"5px",height:"20px", width:"20px"}}>
                            {this.props.data ? this.props.data.length : 0}
                        </span>

                    </div>
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


export default connect(mapStateToProps,mapDispatchToProps)(Cart);


