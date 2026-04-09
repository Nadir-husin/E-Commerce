import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// Types
import type { RootState } from "@store/index"
import type { TProduct } from "@customTypes/product"


const actGetProductsByItems = createAsyncThunk(
  "cart/getProductsByItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI
    const { cart } = getState() as RootState
    const itemsId = Object.keys(cart.items)

    if (!itemsId.length) {
      return []
    }

    try {
      const requests = itemsId.map((id) =>
        axios.get<TProduct>(`/products/${id}`)
      )

      const responses = await Promise.all(requests)
      return responses.map((res) => res.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message)
      }
      return rejectWithValue("An unexpected error occurred")
    }
  }
)

export default actGetProductsByItems