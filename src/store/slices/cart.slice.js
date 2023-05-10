import {createSlice} from "@reduxjs/toolkit"
import { axiosEcommerce, getConfig } from "../../utils/configAxios"

const initialState={
    products:[],
    isShowCart: false
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        changeIsShowCart:(state)=>{
            state.isShowCart = !state.isShowCart
        },
        setProducts:(state,actions)=>{
            const newProducts = actions.payload
            state.products=newProducts
        }
    }
})

export const {changeIsShowCart, setProducts}= cartSlice.actions

export const getCartProducts = () => (dispach) => {
    axiosEcommerce.get("cart", getConfig())
    .then((res)=> dispach(setProducts(res.data)))
    .catch((err)=>console.log(err))

}

export const addProductCart = (data)=>(dispach)=>{
    axiosEcommerce.post("cart",data,getConfig())
    .then((res)=> dispach(getCartProducts()))
    .catch((err)=>console.log(err))
}

export const deleteProductCart =(id)=>(dispach)=>{
    axiosEcommerce.delete(`cart/${id}`,getConfig())
    .then((res)=> dispach(getCartProducts()))
    .catch((err)=>console.log(err))
}

export const purchaseCard = () => (dispach)=> {
    axiosEcommerce.post("purchases", {}, getConfig())
    .then((res)=> dispach(getCartProducts()))
    .catch((err)=>console.log(err))
}

export default cartSlice.reducer