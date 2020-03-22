import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles(theme=>({
  root : {
    backgroundColor:'#fff',
    borderRadius:' 5px',
    overflow:' hidden',
    boxShadow: '0 13px 21px -5px rgba(0,0,0,0.5)',
    border: '1px solid #eee',
    fontSize: '18px',
    tableLayout:'fixed',
    '& th': {
    	borderTop:'2px solid #dee2e6'
    },
    '& table': {
    	backgroundColor:'grey'
    },


     [theme.breakpoints.down('sm')]: {
     	'& th' : {
     		fontSize:'15px'
     	},
     	'& p' : {
     		fontSize:'15px'
     	}

     }
  },
 

}));

function CompareProducts({products}) {
  const classes = styles();
return (
  <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
 className={classes.root}>

        <Grid item xs>
          <table className="table">
        <thead className="thead-default">
          <tr>
            <td />
           <th>Price</th>
             <th>Description</th>
           <th>Condition</th>
          </tr>
        </thead>
        <tbody>
                     {products.map(product =>
        <tr>
        <th>
              <p key={product.id}>
                {product.name}
              </p>
             </th>

            <td>
              <p key={product.id} className="text-center">{Number(product.price).toFixed(2)}$</p>
                        </td>
                        <td>
              <p key={product.id} className="text-center">{product.description}</p>
                        </td>
            
            <td>
              <p key={product.id} className="text-center">{product.condition}</p>
                        </td>
            
          </tr>
          )}
        </tbody>
      </table>
    </Grid>
  </Grid>)};

export default CompareProducts;