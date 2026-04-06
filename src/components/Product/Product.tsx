import { Button } from "react-bootstrap";
// import productImg from "@assets/sweater_nobg_smaller.png"
import type  { TProduct } from "@customTypes/product";

const Product = ({title, price , img }:TProduct) => {
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
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;