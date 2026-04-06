import { Link } from "react-router-dom";
import type { TCategory } from "@customTypes/category";


const Category = ({title , prefix , img} :TCategory) => {
  return (
    <div className="w-30 h-30 my-5">
      <Link  to={`/categories/products/${prefix}`} className=" text-black" >
      <div className="overflow-hidden rounded-full ">
        <img
          src={img}
          alt={title}
          className="w-full h-full"
        />
      </div>
      <h4 className="text-center text-xl mt-2">{title}</h4>
      </Link>
    </div>
  );
};

export default Category;