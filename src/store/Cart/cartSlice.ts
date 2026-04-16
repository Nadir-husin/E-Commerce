import type { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
import { getCartQuantitySelector } from "./selectors";
import actGetProductsByItems from "./act/actGetProductsByItems";
import type { TLoading } from "@customTypes/shared";
interface ICartState{
    items: {[key:string]:number },
    productsFullInfo: TProduct[],
    loading:TLoading,
    error : string |null 
}

const initialState :ICartState={
    items:{},
    productsFullInfo :[],
    loading:"idle",
    error:null
}

const cartSlice = createSlice({
      name:"cart" ,
      initialState,
      reducers:{
        addToCart : ( state , action ) =>{
            const id  = action.payload
            if(state.items[id]){
                state.items[id]++
            }
            else{
                state.items[id]=1
            }
        },
        cartCleanUp : ( state ) => {
           state.productsFullInfo = [] 
        },
        cartItemChangeQuantity : (state , action)=>{
          state.items[action.payload.id] = action.payload.quantity
        },
        cartItemRemove:(state ,action )=>{
          delete state.items[action.payload]
          state.productsFullInfo = state.productsFullInfo.filter((el)=> el.id !== action.payload )
        }
      },

      extraReducers:(builder) =>{
        builder.addCase(actGetProductsByItems.pending , (state) =>{
          state.loading = "pending"
          state.error = null
        })
        builder.addCase(actGetProductsByItems.fulfilled , (state, action) =>{
          state.loading = "succeeded"
          state.error = null
          state.productsFullInfo = action.payload
        })
        builder.addCase(actGetProductsByItems.rejected , (state , action) =>{
          state.loading = "failed"
          if(typeof action.payload === "string")
          state.error = action.payload
        })
      }
    
})

export {getCartQuantitySelector ,actGetProductsByItems}
export const {addToCart ,cartItemChangeQuantity,cartItemRemove ,cartCleanUp} = cartSlice.actions
export default cartSlice.reducer