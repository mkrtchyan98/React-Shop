import {FETCH_PRODUCTS,ADD_TO_CART,SUB_QUANTITY,ADD_QUANTITY,REMOVE_ITEM} from '../actions/CartActionTypes/ActionTypes'

const initState = {
    products: [],
       addedItems:[ ],
    total: 0,

}
 const CartReducer = (state = initState,action) => {
    switch(action.type) {
        case FETCH_PRODUCTS:
        return {
            ...state,products: [...action.payload]
        };
        case ADD_TO_CART:{
                 let addedItem = state.products.find(item=> item.id === action.id)
                  //check if the action id exists in the addedItems
                 let existed_item = state.addedItems.find(item=> action.id === item.id)
                 if(existed_item)
                 {
                    existed_item.quantity += 1 
        
                     return{
                        ...state,
                         total: state.total + Number(addedItem.price),
                          }
        
                }
                 else{
                    addedItem.quantity = 1;
                    //calculating the total
                    let newTotal = state.total + Number(addedItem.price)
                    
                    return{
                        ...state,
                        addedItems: [...state.addedItems, addedItem],
                        total : newTotal,
                        
                    }
                    
                }
            }
        case ADD_QUANTITY:{
             let addedItem = state.products.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + Number(addedItem.price)
          return{
              ...state,
              total: newTotal
          }
    }
         case SUB_QUANTITY:{  
        let addedItem = state.products.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - Number(addedItem.price)
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - Number(addedItem.price)
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

         case REMOVE_ITEM: {
                  let itemToRemove= state.addedItems.find(item=> action.id === item.id)
                 let new_items = state.addedItems.filter(item=> action.id !== item.id)
                 
                 //calculating the total
                 let newTotal = state.total - (Number(itemToRemove.price) * itemToRemove.quantity )
                 console.log(itemToRemove)
                 return{
                     ...state,
                     addedItems: new_items,
                     total: newTotal
                 }
         }

        
         

                default:
        return state || initState
    }
}



export default CartReducer;