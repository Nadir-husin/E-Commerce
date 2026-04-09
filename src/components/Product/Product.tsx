//redux
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/Cart/cartSlice";
//react
import { useEffect , useState } from "react";

//types
import type  { TProduct } from "@customTypes/product";

//components
import { Button , Spinner } from "react-bootstrap";

const Product = ({id,title, price , img , max , quantity }:TProduct) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled , setIsBtnDisabled]= useState(false)
  const quantityRemaining = max - (quantity??0)
  const quantityReachedtoMax = quantityRemaining <= 0 ? true : false
  useEffect(()=>{
    if(!isBtnDisabled)return

    const timer = setTimeout(()=>{
      setIsBtnDisabled(false)
    },200)

    return ()=>clearTimeout(timer)
  },[isBtnDisabled])


  const addToCartHandler = ()=>{
    dispatch(addToCart(id))
    setIsBtnDisabled(true)

  }

  return (
    <div className="w-30 flex flex-col justify-between">
      <div className="">
        <img
        className="w-full h-35 rounded-lg"
        style={{background:"#f2f2f2"}}
          src={img}
          alt={title}
        />
      </div>
      <h2 className="truncate my-2 " style={{fontSize:"22px"}}>{title}</h2>
      <h3 style={{fontSize:"16px"}}>{price} EGP</h3>
      <p className="text-xs">{quantityReachedtoMax ? "You reached the maximum quntity" : ""}</p>
      <Button disabled={isBtnDisabled || quantityReachedtoMax} variant="info" style={{ color: "white" }} onClick={addToCartHandler}>
        {isBtnDisabled? <Spinner animation="border" size="sm" /> : "Add To Cart"}
      </Button>
    </div>
  );
};

export default Product;