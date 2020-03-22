import React  from 'react'
import ProductRow from './ProductRow';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
	root: {
		display:"flex",
		justifyContent:"center",
		gap:"15px",
		flexWrap:"wrap"
        
	}

});


function ProductDisplay  ({products,addToCart,compare}){
const classes = useStyles();

return ( 
<div className={classes.root}>
	{products.map(product =>
		<ProductRow key={product.id} product={product} addToCart={addToCart}  compare={compare}/>
	 )}
	</div>
);
}
export default ProductDisplay;