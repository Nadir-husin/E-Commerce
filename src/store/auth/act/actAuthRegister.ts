import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TFormData = {
    firstName : string , 
    lastName : string ,
    email : string ,
    password : string 
}
const actAuthRegister = createAsyncThunk("auth/actAuthRegister", async(formData:TFormData, thunkAPI)=>{

    const {rejectWithValue} = thunkAPI

    try {
        const response = await axios.post("/register", formData)
        return response.data
        
    } catch (error) {
         if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data)
      }
      return rejectWithValue("An unexpected error occurred")
    }
})




export default actAuthRegister