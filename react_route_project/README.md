
# react insulation

npm i react-router-dom
npm i @fortawesome/fontawesome-free
npm i axios
npm install react-bootstrap bootstrap
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components

//////////////////////////////////////////////////////////////////

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<!-- 

// // with context

// import React, { useContext, useEffect, useState } from "react";
// import { GlobalContext } from "../../Context/globalContext";
// import SpinnerLoading from "../../Components/SpinnerLoading/SpinnerLoading";
// import NotFoundProduct from "../../Components/NotFoundProduct/NotFoundProduct";
// import CartItem from "../../Components/Cart/CartItem";
// import '../../Style/Cart.css'
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import { Helmet } from "react-helmet";
// import EmptyCart from "../../Components/Cart/EmptyCart";

// const Cart = () => {
//     const { GetLoggedUserCart, UpdateCartProductQuantity, RemoveCartItem, setNumOfCartItems } = useContext(GlobalContext)
//     const [cartItemData, setCartItemData] = useState([])
//     const [totalPrice, setTotalPrice] = useState()
//     const [loading, setLoading] = useState(true);

//     async function ShoppingCart() {
//         setLoading(true);
//         try {
//             let { data } = await GetLoggedUserCart()
//             setCartItemData(data.data.products)
//             setTotalPrice(data.data.totalCartPrice)
//         } catch (error) {
//             console.error("Error fetching product :", error);
//         } finally {
//             setLoading(false);
//         }
//     }

//     async function UpdateQuantity(id, count) {
//         let { data } = await UpdateCartProductQuantity(id, count)
//         console.log('dataQuant', data)
//         setCartItemData(data.data.products)
//     }

//     async function RemoveItem(id) {
//         let { data } = await RemoveCartItem(id)
//         if (data.status == "success") {
//             toast.success("product delete successfully");
//             setCartItemData(data.data.products)
//             setNumOfCartItems(data.numOfCartItems)
//         }
//     }
//     useEffect(() => {
//         ShoppingCart()
//     }, [])


//     if (loading) {
//         return (
//             <SpinnerLoading />
//         );
//     }

//     if (!cartItemData) {
//         return (
//             <NotFoundProduct />
//         );
//     }

//     if (cartItemData.length == 0) {
//         return (
//             <EmptyCart />
//         );
//     }

//     if (!cartItemData || cartItemData.length === 0) {
//         return <NotFoundProduct />;
//     }


//     if (cartItemData.length == 0) {
//         return (
//             <EmptyCart />
//         );
//     }

//     return (
//         <div className="cart">
//             <ToastContainer />
//             <Helmet>
//                 <title>My Cart</title>
//             </Helmet>

//             <div className="container">
//                 <h4 className="mt-4">Shop Cart :</h4>
//                 <h6 className="mt-2 bold">Total Cart Price : {totalPrice} EGP</h6>

//                 <div className="card">
//                     {cartItemData.length > 0 &&
//                         cartItemData.map(item => (
//                             <CartItem
//                                 key={item._id}
//                                 item={item}
//                                 RemoveItem={RemoveItem}
//                                 UpdateQuantity={UpdateQuantity} />
//                         ))
//                     }
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Cart; -->
