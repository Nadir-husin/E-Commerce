import type { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[]


const actGetProducts = createAsyncThunk("products/actGetProducts" , async (prefix :string  , thunkAPI)=>{

    const {rejectWithValue} = thunkAPI

    try {
        const response = await axios.get<TResponse>(`/products?cat_prefix=${prefix}`)
        return response.data
        
    }    
    catch(error){
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.message)
        }
        else{
            return rejectWithValue("An unexpected error occurred")
        }
    }

})


export default actGetProducts