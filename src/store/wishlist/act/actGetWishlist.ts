import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type  { TProduct } from "@customTypes/product";
import  type { RootState } from "@store/index";

type TDataType = "productsFullInfo" | "ProductIds";
type TResponse = TProduct[];

const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (dataType: TDataType, thunkAPI) => {
    const { rejectWithValue, signal, getState } = thunkAPI;
    const { auth } = getState() as RootState;
    try {
      const userWishlist = await axios.get<{ productId: number }[]>(
        `/wishlist?userId=${auth.user?.id}`,
        { signal }
      );

      if (!userWishlist.data.length) {
        return {
          data: [],
          dataType: dataType === "ProductIds" ? "productsIds" : "ProductsFullInfo",
        };
      }

      if (dataType === "ProductIds") {
        const concatenatedItemsId = userWishlist.data.map((el) => el.productId);
        return { data: concatenatedItemsId, dataType: "productsIds" };
      } else {
        const concatenatedItemsId = userWishlist.data
          .map((el) => `id=${el.productId}`)
          .join("&");

        const response = await axios.get<TResponse>(
          `/products?${concatenatedItemsId}`
        );
        return { data: response.data, dataType: "ProductsFullInfo" };
      }
    } catch(error){
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.message)
        }
        else{
            return rejectWithValue("An unexpected error occurred")
        }
    }
  }
);

export default actGetWishlist;
