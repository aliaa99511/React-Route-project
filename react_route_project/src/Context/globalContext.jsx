import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export default function GlobalContextProvider(props) {

    const [numOfCartItems, setNumOfCartItems] = useState(0)

    let headers = {
        token: localStorage.getItem("token")
    }

    function getAllProducts() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/products')
            .then((response) => response)
            .catch((err) => err)
    }
    function getProductDetails(id) {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
            .then((response) => response)
            .catch((err) => err)
    }

    function adProductToCart(id) {

        return axios.post("https://ecommerce.routemisr.com/api/v1/cart",
            {
                productId: id,
            },
            {
                headers: headers,
            }
        )
            .then((response) => {
                setNumOfCartItems(response.data.numOfCartItems)
                return response;
            })
            .catch((err) => {
                console.error('error', err);
                return err;
            });
    }


    function GetLoggedUserCart() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/cart',
            {
                headers: headers,
            }
        )
            .then((response) => {
                return response;
            })
            .catch((err) => err)
    }

    function UpdateCartProductQuantity(id, count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
            {
                count: count,
            },
            {
                headers: headers,
            }
        )
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.error('error', err);
                return err;
            });
    }

    function RemoveCartItem(id) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
            {
                headers: headers,
            }
        )
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.error('error', err);
                return err;
            });
    }

    async function initCartCount() {
        let { data } = await GetLoggedUserCart()
        setNumOfCartItems(data.numOfCartItems)
    }

    useEffect(() => {
        initCartCount()
    }, [])


    return (
        <GlobalContext.Provider value={{ getAllProducts, getProductDetails, adProductToCart, numOfCartItems, setNumOfCartItems, GetLoggedUserCart, UpdateCartProductQuantity, RemoveCartItem }}>
            {props.children}
        </GlobalContext.Provider>
    );
}
