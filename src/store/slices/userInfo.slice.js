import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce } from "../../utils/configAxios";

const initialState={
    token:"",
    user: null

}

const userInfoSlice = createSlice({
    name:"userInfo",
    initialState:JSON.parse(localStorage.getItem("userInfo")) ?? initialState,
    reducers:{
        setUserInfo: (state,action)=>{
            const newstate={...state,...action.payload}
            localStorage.setItem("userInfo", JSON.stringify(newstate))
            return newstate;
        },
        logOut: (state)=>{
           const newstate = {...state, ...initialState} 
           localStorage.setItem("userInfo", JSON.stringify(newstate))
           return newstate;
        }
    }
})

export const { setUserInfo,logOut} = userInfoSlice.actions

export const loginUser = (data)  =>  (dispatch)=>{
    axiosEcommerce.post("users/login",data)
    .then((res)=> dispatch(setUserInfo(res.data)))
    .catch((err)=> console.log(err))
}

export default userInfoSlice.reducer;