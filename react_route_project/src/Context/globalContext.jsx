import { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export default function GlobalContextProvider(props) {

    let headers = {
        token: localStorage.getItem("token")
    }

    function getAllProducts() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/products')
            .then((response) => response)
            .catch((err) => err)
    }

    // function adProductToCart(id) {
    //     return axios.post("https://ecommerce.routemisr.com/api/vl/cart",
    //         {
    //             productid: id,
    //         }, {

    //         headers,
    //     }
    //     )
    //         .then((response) => response)
    //         .catch((err) => err)
    // }

    return (
        <GlobalContext.Provider value={{ getAllProducts }}>
            {props.children}
        </GlobalContext.Provider>
    );
}
