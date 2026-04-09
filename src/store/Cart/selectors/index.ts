import { createSelector } from "@reduxjs/toolkit"
import type { RootState } from "../../index"


const getCartQuantitySelector =createSelector( (state:RootState) => state.cart.items ,

(items)=>{
 const totalQuantity = Object.values(items).reduce((total , quantity)=>{
    return total + quantity
  }, 0)

  return totalQuantity
}


)


export {getCartQuantitySelector}