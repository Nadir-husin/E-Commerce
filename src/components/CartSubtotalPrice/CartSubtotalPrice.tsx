import type { TProduct } from "@customTypes/product"
import { Button } from "react-bootstrap";


type TCartSubtotalProps = {products:TProduct[] ; userAccessToken: string | null}
function CartSubtotalPrice({products ,userAccessToken}:TCartSubtotalProps ) {

  const subtotal = products.reduce((acc, el)=>{
        const price = +el.price
        const quan = +(el.quantity ?? 0)
        return acc + price*quan
},0)
  return (
    <>
      <div className="flex justify-between my-2 p-4" >
      <h3  style={{fontSize : "20px"}}>Subtotal : </h3>
      <h3 style={{fontSize : "20px"}}>{subtotal.toFixed(2)} Egp</h3>
    </div>

    {
      userAccessToken && (
      <div className="flex justify-between my-2 p-4" >
      <h3  style={{fontSize : "20px"}}></h3>
      <Button variant="info" style={{fontSize : "15px" , color : "white"}}>Place Order</Button>
    </div>
      )
    }
    </>

  )
}

export default CartSubtotalPrice
