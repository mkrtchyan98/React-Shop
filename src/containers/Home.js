import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as productActions from '../components/actions/CartActions';
import ProductDisplay from '../components/Product/ProductDisplay';
import {bindActionCreators} from 'redux';
import { Grid } from '@material-ui/core';
import CompareProducts from '../components/CompareProducts';
class Home extends Component {
  componentDidMount() {
    this.props.actions.getProducts()//can use this.props.dispatch(getProducts()) instead of bindActionCreators
  }

  render() {
    const {products,actions} = this.props;
    const compareProducts = products.filter(product => product.compare);
    return (
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
 <Grid item sm={12} xs={12}  >  

   <h2 className="mb-3" style={{textAlign:'center'}}> Products</h2>
          </Grid>

        <Grid item sm={12} xs={12}>


        <ProductDisplay products={products} addToCart={actions.addToCart} compare={actions.compare} />
         {compareProducts.length >= 2 &&
          <CompareProducts products={compareProducts}/>
        }
      </Grid>
</Grid>
      
    )
  }
}

const mapStateToProps = (state)=>{
    return {
      products: state.products,
      
    }
  };
  const mapDispatchToProps= (dispatch)=>{
    
    return{
        actions: bindActionCreators(productActions, dispatch)
    }
}

  export default connect(mapStateToProps,mapDispatchToProps)(Home);