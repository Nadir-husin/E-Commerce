import { Container } from "react-bootstrap";
import Category from "@components/Category/Category";
import Loading from "@components/UI/feedback/Loading/Loading";
import Gridlist from "@components/GridList/GridList";
import Heading from "@components/UI/common/Heading";

// hooks
import useCategory from "@hooks/useCategory";


const Categories = () => {

  const { loading, error, records } = useCategory()

  return (
    <Container>
      <Heading title="Categories" />
      <Loading status={loading} error={error} type="category" >
        <Gridlist records={records} renderItem={(category) => <Category {...category} />} />
      </Loading>
    </Container>
  );
};

export default Categories;