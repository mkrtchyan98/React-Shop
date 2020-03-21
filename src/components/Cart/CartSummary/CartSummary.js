import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {connect} from 'react-redux';
import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './cartsummary.css'


export class CartSummary extends Component {

    getSummary = () => {
        if (this.props.addedItems.length > 0) {
            return <span>
                { this.props.addedItems.length } item(s)
            </span>
        } else {
            return <span>Your cart: (empty) </span>
        }        
    }

   

    render() {
            return       <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  className="navBar"
>
 <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className="title"  >
                    <Link to="/shop">Shop</Link>
          </Typography>
          <Typography color="inherit" variant="h6" >  <Link  
                        to="/cart">
                        <ShoppingCartIcon /> {this.getSummary()}
</Link>                
 </Typography>
        </Toolbar>
      </AppBar>
                    </Grid>

              
   
    }
}
const mapStateToProps = (state)=>{
    return {
      addedItems:state.addedItems,
      
    }
  };
 

  export default connect(mapStateToProps)(CartSummary);