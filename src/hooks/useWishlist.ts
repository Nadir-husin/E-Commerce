//react
import { useEffect } from "react"


//redux 
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetWishlist, wishlistCleanUp } from "@store/wishlist/wishlistSlice"

const useWishlist = () => {
     const dispatch = useAppDispatch()
  const { loading, error, productsFullInfo } = useAppSelector(state => state.wishlist)
  const cartItems = useAppSelector((state) => state.cart.items)


  useEffect(() => {
   const promise = dispatch(actGetWishlist())

    return () => {
      dispatch(wishlistCleanUp())
      promise.abort()
    }
  }, [dispatch])


  const records = productsFullInfo.map((item) => {
    return { ...item, quantity: cartItems[item.id] || 0, isLiked: true }
  })

  return { records , loading , error}
  
}

export default useWishlist
