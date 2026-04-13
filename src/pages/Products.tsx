import { useParams } from "react-router-dom";
import { memo, useEffect } from "react";


//components 
import { Container } from "react-bootstrap";
import  Product  from "@components/Product/Product";
import Gridlist from "@components/GridList/GridList";



// redux
import { useAppDispatch , useAppSelector } from "@store/hooks";
import { productsCleanUp ,actGetProducts  } from "@store/products/productsSlice";
import Loading from "@components/UI/common/Loading";
import  Heading  from "@components/UI/common/Heading";


const Products = memo(() => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const {loading , error , records } = useAppSelector((state) =>  state.products)
  const cartItems = useAppSelector((state) => state .cart.items)
  const wishlistProductId = useAppSelector((state)=> state.wishlist.itemsId)


  const productsFullInfo = records.map((item)=>{
     return {...item , quantity : cartItems[item.id] || 0 , isLiked : wishlistProductId.includes(item.id)  }
  })

  useEffect(()=>{
    let prefix : string
    if (params.prefix && typeof params.prefix === "string"){
      prefix = params.prefix 
     dispatch(actGetProducts(prefix))
    }
    return ()=>{
      dispatch(productsCleanUp())
    }

  },[dispatch , params.prefix])


  return (
    <Container>
      <Heading>{params.prefix} Products</Heading>
      <Loading status={loading} error={error}>
        <Gridlist records={productsFullInfo} renderItem={(product)=><Product {...product}/>}/>
      </Loading>
    </Container>
  );
});

export default Products;