
import { useParams } from "react-router-dom";
import { useEffect } from "react";




// redux
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { productsCleanUp, actGetProducts } from "@store/products/productsSlice";




const useProducts = () => {
  const params = useParams()
  const paramsPrefix = params.prefix
  const dispatch = useAppDispatch()
  const { loading, error, records } = useAppSelector((state) => state.products)
  const cartItems = useAppSelector((state) => state.cart.items)
  const wishlistProductId = useAppSelector((state) => state.wishlist.itemsId)


  const productsFullInfo = records.map((item) => {
    return { ...item, quantity: cartItems[item.id] || 0, isLiked: wishlistProductId.includes(item.id) }
  })

  useEffect(() => {

    const promise=dispatch(actGetProducts(params.prefix as string) )
 
    return () => {
      dispatch(productsCleanUp())
      promise.abort()
    }

  }, [dispatch, params])


  return { loading, error, productsFullInfo ,paramsPrefix }
}

export default useProducts
