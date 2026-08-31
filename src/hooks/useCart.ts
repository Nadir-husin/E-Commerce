//redux
import { useAppDispatch , useAppSelector } from "@store/hooks"
import { 
  actGetProductsByItems,
   cartCleanUp,
    cartItemChangeQuantity,
   cartItemRemove } from "@store/Cart/cartSlice"

import { useCallback, useEffect } from "react"


const useCart = () => {

 const dispatch = useAppDispatch();
  const {items ,productsFullInfo, loading , error} = useAppSelector((state) => state.cart)
  const products = productsFullInfo.map((el) => ({...el , quantity : items[el.id]}))
  const userAccessToken = useAppSelector(state => state.auth.accessToken)
  useEffect(()=>{
   const promise = dispatch(actGetProductsByItems())
    return () => {
      dispatch(cartCleanUp())
      promise.abort()
    }
  },[dispatch ])


  const changeQuantityHandler = useCallback((id:number , quantity : number)=>{
    dispatch(cartItemChangeQuantity({id , quantity}))
  },[dispatch])
  
  const removeItemHander = useCallback((id:number)=>{
      dispatch(cartItemRemove(id))
  },[dispatch])
  


  return { products, loading, error, changeQuantityHandler, removeItemHander  ,userAccessToken}
}

export default useCart
