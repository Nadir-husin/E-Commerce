
// components
import CartItemList from "@components/CartItemList/CartItemList"
import CartSubtotalPrice from "@components/CartSubtotalPrice/CartSubtotalPrice"
import Heading from "@components/UI/common/Heading"
import Loading from "@components/UI/feedback/Loading/Loading"
import LottieHandler from "@components/UI/feedback/LottieHandler/LottieHandler"
//hooks
import useCart from "@hooks/useCart"



function Cart() {

  const { products, loading, error, changeQuantityHandler, removeItemHander ,userAccessToken } = useCart()

  return (
    <div className="w-[80%] mx-auto  my-3  ">
      <Heading title="Your Cart" />
      <Loading status={loading} error={error} type="cart">
        {products.length ?
          <>
            <CartItemList products={products} changeQuantityHandler={changeQuantityHandler} removeItemHander={removeItemHander} />
            <CartSubtotalPrice products={products}  userAccessToken={userAccessToken}/>
          </>
          :
          <LottieHandler type="Empty" message="Your Cart is empty"/>
        }

      </Loading>
    </div>
  )
}

export default Cart
