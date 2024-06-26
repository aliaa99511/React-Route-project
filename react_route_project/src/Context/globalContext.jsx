import React, { createContext } from "react";

export const globalContext = createContext()
const GlobalContextProvider = (props) => {

    let headers = {
        token: localStorage.getItem("token")
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



    return <globalContext.Provider value={{}}>
        {props.childern}
    </globalContext.Provider>
};

export default GlobalContextProvider;
