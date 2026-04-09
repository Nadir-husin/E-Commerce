import { Container} from "react-bootstrap";
import  Category  from "@components/Category/Category";
import { useAppDispatch , useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetCategories } from "@store/Categories/categoriesSlice";
import Loading from "@components/UI/common/Loading";
import Gridlist from "@components/GridList/GridList";
import Heading from "@components/UI/common/Heading";

const Categories = () => {
  const dispatch = useAppDispatch()
  const {loading , error , records} = useAppSelector((state)=>{
    return state.categories
  })

  useEffect(()=>{
    if(!records.length){
     dispatch(actGetCategories())
    }
  } ,[dispatch , records.length])

  return (
    <Container>
      <Heading>Categories</Heading>
      <Loading status={loading} error={error} >
        <Gridlist records={records} renderItem={(category) => <Category {...category} />} />
      </Loading>
    </Container>
  );
};

export default Categories;