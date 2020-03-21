import {FETCH_PRODUCTS,ADD_TO_CART,ADD_QUANTITY,SUB_QUANTITY,REMOVE_ITEM} from './CartActionTypes/ActionTypes';

export const getProducts = () => 
dispatch =>
fetch('products.json')
.then(response => response.json())
.then(response => {
	dispatch({
		type:FETCH_PRODUCTS,
		payload:response.products,
	})
})

export const addToCart = (id) =>( {
        type: ADD_TO_CART,
        id
    
 
});
	
export const addQuantity = (id) => ({
	type:ADD_QUANTITY,
	id
});


export const itemRemove = (id) => ({
	type:REMOVE_ITEM,
	id
});

export const subQuantity = (id) => ({
	type:SUB_QUANTITY,
	id
})

