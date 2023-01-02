import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
// import {Home}from "../src/pages/home"
import Home from "./pages/home"
import{Login} from "./pages/Login"
import{Register}from "./pages/Register"
import{ProductList}from"./pages/ProductList"
import {Product}from "./pages/product"
import{Cart}from "./pages/Cart"
import{Layout} from "./Latout/Layout"
// import {ProductList} from "./pages/ProductList"

export const Router = () => {
  return (
    useRoutes([
        {
            path:"",
            element:<Layout/>,
            children:[
                {path: "allProduct",element:<ProductList/>},
                {path: "ProductDetails",element:<Product/>},
                {path: "",element:<Home/>},
                {path: "login",element:<Login/>},
                {path: "register",element:<Register/>},
                {path: "cart",element:<Cart/>},
                // {path: "orderHistory",element:<ProductList/>},
            ]

        }
    ])
  )
}
