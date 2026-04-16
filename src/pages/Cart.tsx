
// components
import  CartItemList from "@components/CartItemList/CartItemList"
import CartSubtotalPrice from "@components/CartSubtotalPrice/CartSubtotalPrice"
import  Heading  from "@components/UI/common/Heading"
import Loading from "@components/UI/common/Loading"

//hooks
import useCart from "@hooks/useCart"



function Cart() {

  const { products, loading, error, changeQuantityHandler, removeItemHander }=useCart()

  return (
    <div className="w-[80%] mx-auto  my-3  ">
     <Heading title="Your Cart"/>
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
