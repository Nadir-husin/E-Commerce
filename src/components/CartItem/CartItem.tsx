import { Form, Button } from "react-bootstrap";
import type { TProduct } from "@customTypes/product";
import { memo } from "react";

type TCartItemProps= TProduct &{
  changeQuantityHandler: (id:number , quantity : number)=> void,
  removeItemHander: (id:number )=> void
}
const CartItem =  memo( ({id, title, img  , price , max ,quantity ,changeQuantityHandler ,removeItemHander}:TCartItemProps) =>{

  const renderOptions = Array(max).fill(0).map((_, idx)=>{
        const quan = ++idx
        return <option value={quan} key={quan}>{quan}</option>
  })

   const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const quantity = +event.target.value;
      changeQuantityHandler(id, quantity);
    };

  return (
    <div className="flex justify-between p-4 border-b border-gray-300 items-center">

      <div className="flex gap-4">

        <div className="w-40  bg-gray-200 rounded-sm ">
            <img src={img} alt=""  className="w-full h-full object-cover"/>
        </div>

        <div className="flex flex-col justify-between w-40">
            <h3>{title}</h3>
            <p>{price}</p>
            <Button variant="danger" onClick={()=>{removeItemHander(id)}}>Remove</Button>
        </div>

      </div>

{/* Quantity selector */}
        <div>
        <span className="font-bold">Quantity</span>
        <Form.Select className="cursor-pointer" value={quantity} onChange={changeQuantity}>
            {renderOptions}
        </Form.Select>
      </div>


    </div>
  )
})

export default CartItem
