import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import type { RootState } from "@store/index";


const actLikeToggle = createAsyncThunk("wishlist/actLikeToggle", async (id: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI
    const { auth } = getState() as RootState

    if (!auth.user) {
        return rejectWithValue("You must be logged in to update your wishlist")
    }

    const userId = auth.user.id

    try {
        const isRecordExit = await axios.get(`/wishlist?userId=${userId}&productId=${id}`)
        if(isRecordExit.data.length > 0){
            await axios.delete(`/wishlist/${isRecordExit.data[0].id}`)
            return {type : "remove" , id }
        }
        else{
            await axios.post("/wishlist", { userId, productId: Number(id) })
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
