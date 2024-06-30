import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/globalContext";
import SpinnerLoading from "../../Components/SpinnerLoading/SpinnerLoading";
import NotFoundProduct from "../../Components/NotFoundProduct/NotFoundProduct";
import CartItem from "../../Components/Cart/CartItem";
import '../../Style/Cart.css'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const Cart = () => {
    const { GetLoggedUserCart, UpdateCartProductQuantity, RemoveCartItem, setNumOfCartItems } = useContext(GlobalContext)
    const [cartItemData, setCartItemData] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    const [loading, setLoading] = useState(true);

    async function ShoppingCart() {
        setLoading(true);
        try {
            let { data } = await GetLoggedUserCart()
            setCartItemData(data.data.products)
            setTotalPrice(data.data.totalCartPrice)
        } catch (error) {
            console.error("Error fetching product :", error);
        } finally {
            setLoading(false);
        }
    }

    async function UpdateQuantity(id, count) {
        let { data } = await UpdateCartProductQuantity(id, count)
        console.log('dataQuant', data)
        setCartItemData(data.data.products)
    }

    async function RemoveItem(id) {
        let { data } = await RemoveCartItem(id)
        if (data.status == "success") {
            toast.success("product delete successfully");
            setCartItemData(data.data.products)
            setNumOfCartItems(data.numOfCartItems)
        }
    }
    useEffect(() => {
        ShoppingCart()
    }, [])


    if (loading) {
        return (
            <SpinnerLoading />
        );
    }

    if (!cartItemData) {
        return (
            <NotFoundProduct />
        );
    }

    return (
        <div className="cart">
            <ToastContainer />
            <Helmet>
                <title>My Cart</title>
            </Helmet>

            <div className="container">
                <h4 className="mt-4">Shop Cart :</h4>
                <h6 className="mt-2 bold">Total Cart Price : {totalPrice} EGP</h6>

                <div className="card">
                    {cartItemData.map(item => (
                        <CartItem
                            key={item._id}
                            item={item}
                            RemoveItem={RemoveItem}
                            UpdateQuantity={UpdateQuantity} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Cart;
