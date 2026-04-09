

//component
import CartItem from "@components/CartItem/CartItem"

//types
import type { TProduct } from "@customTypes/product"


type TCartItemListProps = {
    products : TProduct[]
    changeQuantityHandler: (id:number , quantity : number)=> void
    removeItemHander: (id:number )=> void
} 
function CartItemList({products ,changeQuantityHandler ,removeItemHander} :TCartItemListProps) {
    
    const renderList = products.map((el) => <CartItem key={el.id} {...el} changeQuantityHandler={changeQuantityHandler} removeItemHander={removeItemHander}/>)
  return (
    <div>
      {renderList}
    </div>
  )
}

export default CartItemList
