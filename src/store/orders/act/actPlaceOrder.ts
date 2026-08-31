// import { createAsyncThunk } from "@reduxjs/toolkit";
// import type { RootState } from "@store/index";
// import axios from "axios";


// const actPlaceOrder = createAsyncThunk("orders/actPlaceOrder" , async (subtotal: number, thunkAPI) => {
//     const { rejectWithValue, getState } = thunkAPI;
//     const { cart , auth } = getState() as RootState;

//     const orderItems = cart.productsFullInfo.map((el) => ({
//       id: el.id,
//       title: el.title,
//       price: el.price,
//       img: el.img,
//       quantity: cart.items[el.id],
//     }));


// }
