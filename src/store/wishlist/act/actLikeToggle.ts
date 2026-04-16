import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const actLikeToggle = createAsyncThunk("wishlist/actLikeToggle", async (id: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const isRecordExit = await axios.get(`/wishlist?userId=1&productId=${id}`)
        if(isRecordExit.data.length > 0){
            await axios.delete(`/wishlist/${isRecordExit.data[0].id}`)
            return {type : "remove" , id }
        }
        else{
            await axios.post("wishlist",{userId : 1 ,  productId : Number(id) })
            return {type : "add" , id }
        }


    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.message)
        }
        else {
            return rejectWithValue("An unexpected error occurred")
        }
    }
})


export default actLikeToggle
