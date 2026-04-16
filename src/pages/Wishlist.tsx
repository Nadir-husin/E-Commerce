
//components
import Heading from "@components/UI/common/Heading"
import Loading from "@components/UI/feedback/Loading/Loading"
import Gridlist from "@components/GridList/GridList"
import Product from "@components/Product/Product"
import LottieHandler from "@components/UI/feedback/LottieHandler/LottieHandler"
//hooks 
import useWishlist from "@hooks/useWishlist"

const Wishlist = () => {
  const { records, loading, error } = useWishlist()


  return (
    <div className="w-[80%] mx-auto my-3">
      <Heading title="Wishlist" />

      {
        records.length > 0 ? (
          <Loading status={loading} error={error} type="product">
            <Gridlist records={records} renderItem={(product) => <Product {...product} />} />
          </Loading>
        ) :
          <LottieHandler type="Empty" message="Your wishlist is empty"/>
      }

    </div>
  )
}

export default Wishlist
