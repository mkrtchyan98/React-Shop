import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import * as productActions from '../../../components/actions/CartActions';
import {bindActionCreators} from 'redux';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import './cartdetailsrows.css';
 
class CartDetailsRows extends Component{

    render(){
              
        if(!this.props.products || this.props.products.length === 0){
             return <tr>
            <td colSpan="5">Your cart is empty</td>
            </tr>
        }
         else {
                    return <React.Fragment>
                { this.props.products.map(item=>

                        <tr className="collection-item avatar" key={item.id}>
                                    <td className="item-img"> 
                                        <img src={item.image} alt={item.image} className="item-img" />
                                    </td>
                                
                                    

                                        <td>{item.name}</td>
                                        
                                        <td>{Number(item.price).toFixed(2)}</td> 
                                        <td>
                                         <p>{item.quantity} </p>                                         
                                              <ArrowDropUpIcon onClick={() => this.props.actions.addQuantity(item.id)} />
                                              <ArrowDropDownIcon onClick={() => this.props.actions.subQuantity(item.id)} />
                                              <Button
                                                variant="contained"
                                                color="secondary"
                                                startIcon={<DeleteIcon />}
                                                 onClick={() => this.props.actions.itemRemove(item.id)}
                                              > </Button>
                                               </td>
                                               </tr>
                                    
                               )} 
                <tr>
            <th colSpan="3" className="text-right">Total:</th>
            <th colSpan="2">${this.props.total.toFixed(2)}</th>
            </tr>
            </React.Fragment>
        }
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems,
        total:state.total,

            }
}
const mapDispatchToProps = (dispatch)=>{
    
    return{
        actions: bindActionCreators(productActions, dispatch)
    }
}

  export default connect(mapStateToProps,mapDispatchToProps)(CartDetailsRows);