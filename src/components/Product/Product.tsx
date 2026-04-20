//redux
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/Cart/cartSlice";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
//react
import { memo, useEffect, useState } from "react";

//types
import type { TProduct } from "@customTypes/product";

//components
import { Button, Spinner } from "react-bootstrap";
import like from "@assets/like.svg"
import likeFill from "@assets/like-fill.svg"

const Product = memo( ({ id, title, price, max, quantity, isLiked  ,img}: TProduct) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)
  const [isLoading, setIsloading] = useState(false)
  const quantityRemaining = max - (quantity ?? 0)
  const quantityReachedtoMax = quantityRemaining <= 0 ? true : false
  useEffect(() => {
    if (!isBtnDisabled) return

    const timer = setTimeout(() => {
      setIsBtnDisabled(false)
    }, 200)

    return () => clearTimeout(timer)
  }, [isBtnDisabled])


  const addToCartHandler = () => {
    dispatch(addToCart(id))
    setIsBtnDisabled(true)

  }

  const likeToggleHandler = () => {
    if(!isLoading){
    setIsloading(true)
    dispatch(actLikeToggle(id)).unwrap().then(()=>{
      setIsloading(false)
    }).catch(()=> setIsloading(false))
    }

  }

  return (
    <div className="w-30 flex flex-col justify-between">
      <div className=" relative">
        {isLoading ? (<div className="absolute top-2 right-1 cursor-pointer p-0.5 bg-white ">
          <Spinner animation="border" size="sm" variant="primary" /></div>)
           : (<img src={isLiked ? likeFill : like} className="absolute top-2 right-1 cursor-pointer p-0.5 bg-white   hover:shadow-lg transition rounded-md" onClick={likeToggleHandler} />)}
        <img
          className="w-full h-35 rounded-lg"
          style={{ background: "#f2f2f2" }}
          src={img}
          alt={title}
        />
      </div>
      <h2 className="truncate my-2 " style={{ fontSize: "22px" }}>{title}</h2>
      <h3 style={{ fontSize: "16px" }}>{price} EGP</h3>
      <p className="text-xs">{quantityReachedtoMax ? "You reached the maximum quntity" : ""}</p>
      <Button disabled={isBtnDisabled || quantityReachedtoMax} variant="info" style={{ color: "white" }} onClick={addToCartHandler}>
        {isBtnDisabled ? <Spinner animation="border" size="sm" /> : "Add To Cart"}
      </Button>
    </div>
  );
});

export default Product;