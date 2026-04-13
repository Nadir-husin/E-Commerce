import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";
import type { TLoading } from "@customTypes/shared";
import type { TProduct } from "@customTypes/product";
interface IWishlistState {
     itemsId: number[],
     productsFullInfo:TProduct[]
     error : string | null
     loading : TLoading
}


const initialState :IWishlistState ={
    itemsId : [],
    productsFullInfo:[],
    error : null,
    loading : 'idle'
    

}

const wishlistSlice = createSlice ({
    name: "wishlist",
    initialState,
    reducers:{
        wishlistCleanUp : (state)=>{
            state.productsFullInfo = []
        }
    },
    extraReducers : (builder) =>{ 
        builder.addCase(actLikeToggle.pending ,(state) =>{
            state.error = null
        })
        builder.addCase(actLikeToggle.fulfilled ,(state , action) =>{
            if (action.payload.type === "add"){
                state.itemsId.push(action.payload.id)
            }else{
                state.itemsId = state.itemsId.filter(item => item !== action.payload.id)
                state.productsFullInfo = state.productsFullInfo.filter(item=> item.id !== action.payload.id)
            }
        })
        builder.addCase(actLikeToggle.rejected ,(state , action ) =>{
            if(action.payload && typeof action.payload ==="string"){
               state.error = action.payload
            }
        })

        //get wishlist items

        builder.addCase(actGetWishlist.pending ,(state) =>{
            state.loading = "pending"
            state.error = null
        })
        builder.addCase(actGetWishlist.fulfilled ,(state , action) =>{
                state.loading="succeeded"
                state.productsFullInfo= action.payload
        })
        builder.addCase(actGetWishlist.rejected ,(state , action ) =>{
            state.loading="failed"
            if(action.payload && typeof action.payload ==="string"){
               state.error = action.payload
            }
        })


    }
})


export const {wishlistCleanUp} = wishlistSlice.actions
export {actLikeToggle,actGetWishlist}
export default wishlistSlice.reducer