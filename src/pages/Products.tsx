import { memo } from "react";
//components 
import { Container } from "react-bootstrap";
import Product from "@components/Product/Product";
import Gridlist from "@components/GridList/GridList";
import Loading from "@components/UI/feedback/Loading/Loading";
import Heading from "@components/UI/common/Heading";

// hooks
import useProducts from "@hooks/useProducts";




const Products = memo(() => {
  const { loading, error, productsFullInfo, paramsPrefix } = useProducts()

  return (
    <Container>
      <Heading title={`${paramsPrefix} Products`}  />
      <Loading status={loading} error={error} type="product">
        <Gridlist records={productsFullInfo} renderItem={(product) => <Product {...product} />} />
      </Loading>
    </Container>
  );
});

export default Products;