//redux
import { useAppDispatch , useAppSelector } from "@store/hooks"
import { actGetProductsByItems, cartItemChangeQuantity,cartItemRemove } from "@store/Cart/cartSlice"



// components
import  CartItemList from "@components/CartItemList/CartItemList"
import CartSubtotalPrice from "@components/CartSubtotalPrice/CartSubtotalPrice"
import  Heading  from "@components/UI/common/Heading"
import Loading from "@components/UI/common/Loading"

//react
import { useCallback, useEffect } from "react"



function Cart() {
  const dispatch = useAppDispatch();
  const {items ,productsFullInfo, loading , error} = useAppSelector((state) => state.cart)
  const products = productsFullInfo.map((el) => ({...el , quantity : items[el.id]}))

  useEffect(()=>{
    dispatch(actGetProductsByItems())
  },[dispatch ])


  const changeQuantityHandler = useCallback((id:number , quantity : number)=>{
    dispatch(cartItemChangeQuantity({id , quantity}))
  },[dispatch])
  
  const removeItemHander = useCallback((id:number)=>{
      dispatch(cartItemRemove(id))
  },[dispatch])
  

  return (
    <div className="w-[80%] mx-auto  my-3  ">
     <Heading>Your Cart</Heading>
     <Loading status={loading} error={error}>
      {products.length ? 
      <>
           <CartItemList products = {products} changeQuantityHandler={changeQuantityHandler} removeItemHander={removeItemHander}/>
           <CartSubtotalPrice products= {products}/>
      </>
      :
      <span className="px-2">Your Cart Is Empty</span>
    }

     </Loading>
    </div>
  )
}

export default Cart
