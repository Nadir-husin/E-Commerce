import { createSlice } from "@reduxjs/toolkit";
import type { TOrderItem } from "@customTypes/order";
import type { TLoading } from "@customTypes/shared";
interface IOrderSlice {
    orderList : TOrderItem[],
    loading : TLoading , 
    error : string | null ,
}

const initialState:IOrderSlice = {
    orderList : [],
    loading : "idle",
    error : null 
}
const orderSlice = createSlice({
    name : "orders",
    initialState,
    reducers: {}
})


export default orderSlice