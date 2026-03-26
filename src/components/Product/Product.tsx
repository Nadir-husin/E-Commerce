import { Button } from "react-bootstrap";
import productImg from "@assets/sweater_nobg_smaller.png"
const Product = () => {
  return (
    <div className="w-30 flex flex-col justify-between">
      <div className="">
        <img
        className="w-full h-35 rounded-lg"
        style={{background:"#f2f2f2"}}
          src={productImg}
          alt=""
        />
      </div>
      <h2 className="truncate my-2 " style={{fontSize:"22px"}}>Title</h2>
      <h3 style={{fontSize:"16px"}}>10 EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;