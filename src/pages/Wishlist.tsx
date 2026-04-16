
//components
import Heading from "@components/UI/common/Heading"
import Loading from "@components/UI/common/Loading"
import Gridlist from "@components/GridList/GridList"
import Product from "@components/Product/Product"

//hooks 
import useWishlist from "@hooks/useWishlist"

const Wishlist = () => {
  const { records , loading , error} = useWishlist()
  

  return (
    <div className="w-[80%] mx-auto my-3">
      <Heading title="Wishlist"/>

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
