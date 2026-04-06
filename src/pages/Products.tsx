import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import  Product  from "@components/Product/Product";
import { useEffect } from "react";
import Gridlist from "@components/GridList/Gridlist";



// redux
import { useAppDispatch , useAppSelector } from "@store/hooks";
import { productsCleanUp ,actGetProducts  } from "@store/products/productsSlice";
import Loading from "@components/UI/common/Loading";


const Products = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const {loading , error , records } = useAppSelector((state) =>  state.products)

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
      <Loading status={loading} error={error}>
        <Gridlist records={records} renderItem={(product)=><Product {...product}/>}/>
      </Loading>
    </Container>
  );
};

export default Products;