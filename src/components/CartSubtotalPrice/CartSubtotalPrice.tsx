import type { TProduct } from "@customTypes/product"


type TCartSubtotalProps = {products:TProduct[]}
function CartSubtotalPrice({products}:TCartSubtotalProps ) {

  const subtotal = products.reduce((acc, el)=>{
        const price = +el.price
        const quan = +(el.quantity ?? 0)
        return acc + price*quan
},0)
  return (
    <div className="flex justify-between my-2 p-4" >
      <h3  style={{fontSize : "20px"}}>Subtotal : </h3>
      <h3 style={{fontSize : "20px"}}>{subtotal.toFixed(2)} Egp</h3>
    </div>
  )
}

export default CartSubtotalPrice
