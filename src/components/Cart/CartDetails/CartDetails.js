import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CartDetailsRows from './CartDetailsRows';
import { connect } from 'react-redux';


        class  CartDetails  extends Component {
    getLinkClasses = () => `btn btn-secondary m-1 
        ${this.props.addedItems.length === 0 ? "disabled": ""}`;
        
    render() {
        return <div className="m-3">
            <h2 className="text-center">Your Cart</h2>
            <table className="table table-bordered ">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th className="text-right">Price</th>

                         <th className="text-right">Quantity</th>
                        
                    </tr>
                </thead>
                <tbody>
                   <CartDetailsRows  />
                </tbody>
            </table>
            <div className="text-center">
                <Link className="btn btn-primary m-1" to="/shop">
                    Continue Shopping
                </Link>
                <Link className={ this.getLinkClasses() } to="/shop">
                    Checkout                
                </Link>
            </div>
        </div>
    }
}    



const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,

            }
}




  export default connect(mapStateToProps)(CartDetails);