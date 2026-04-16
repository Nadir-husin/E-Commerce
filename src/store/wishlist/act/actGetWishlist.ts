import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TProduct } from "@customTypes/product";



const actGetWishlist = createAsyncThunk("wishlist/actGetWishlist", async (_, thunkAPI) => {
  const { rejectWithValue ,signal } = thunkAPI;

  try {

    const userWishlist = await axios.get<{ id: number; userId: number; productId: number }[]>("/wishlist?userId=1" ,{signal});

    if (!userWishlist.data.length) {
      return [];
    }

    const allPromises = userWishlist.data.map((item) =>
      axios.get<TProduct>(`/products/${item.productId}`)
    );

    const response = await Promise.all(allPromises);
    
    return response.map((item) => item.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }

    return rejectWithValue("An unexpected error occurred");
  }
});

export default actGetWishlist;