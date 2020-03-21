import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles({
	root: {
		maxWidth: 300,

	},

});




 function ProductRow({product,addToCart}) {
const classes = useStyles();

return(
    <Card key={product.id} className={classes.root}>
    		<CardActionArea>
    		<CardMedia component="img" 
    					alt="Product"
    					height="240"
    					image={product.image}
    					title={product.name}
    					/>
    					<CardContent>
    					<Typography  variant="h5" component="h2">
    					 {product.name}
    					 </Typography>
    					  <Typography variant="body2" color="textSecondary" component="p">
    					  {product.price}$
    					  </Typography>
                           <Typography variant="subtitle1" color="textSecondary" component="p">
                          {product.description}
                          </Typography>
    					 </CardContent>
    					 </CardActionArea>   
    					 <CardActions>
                          <IconButton color="primary" aria-label="add to shopping cart" onClick={()=> addToCart(product.id)}>
                                        <AddShoppingCartIcon />
                					 </IconButton>
            				</CardActions>					
            				</Card>
          );
      }

export default ProductRow;