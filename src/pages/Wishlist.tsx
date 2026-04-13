//react
import { useEffect } from "react"


//redux 
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { actGetWishlist, wishlistCleanUp } from "@store/wishlist/wishlistSlice"

//components
import Heading from "@components/UI/common/Heading"
import Loading from "@components/UI/common/Loading"
import Gridlist from "@components/GridList/GridList"
import Product from "@components/Product/Product"

const Wishlist = () => {
  const dispatch = useAppDispatch()
  const { loading, error, productsFullInfo } = useAppSelector(state => state.wishlist)
  const cartItems = useAppSelector((state) => state.cart.items)


  useEffect(() => {
    dispatch(actGetWishlist())

    return () => {
      dispatch(wishlistCleanUp())
    }
  }, [dispatch])


  const records = productsFullInfo.map((item) => {
    return { ...item, quantity: cartItems[item.id] || 0, isLiked: true }
  })


  return (
    <div className="w-[80%] mx-auto my-3">
      <Heading>Wishlist</Heading>

      {
        records.length > 0 ? (
          <Loading status={loading} error={error}>
            <Gridlist records={records} renderItem={(product) => <Product {...product} />} />
          </Loading>
        ) :
          ("Your Wishlist Is Empty")
      }

    </div>
  )
}

export default Wishlist
