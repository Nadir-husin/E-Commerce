import { useAppDispatch , useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetCategories, categoryCleanUp } from "@store/Categories/categoriesSlice";




const useCategory = () => {
    const dispatch = useAppDispatch()
  const {loading , error , records} = useAppSelector((state)=>{
    return state.categories
  })

  useEffect(()=>{

     const promise=dispatch(actGetCategories())

    return () =>{
        dispatch(categoryCleanUp())
        promise.abort()
    }
  } ,[dispatch])

  return { loading , error , records}
}

export default useCategory
