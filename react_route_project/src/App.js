import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';
import Categories from './Pages/Categories/Categories';
import Products from './Pages/Products/Products';
import ProductDetails from './Components/Products/ProductDetails';
import GlobalContextProvider from './Context/globalContext';

function App() {

  const routers = createBrowserRouter([
    {
      path: '', element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'cart', element: <Cart /> },
        { path: 'categories', element: <Categories /> },
        { path: 'products', element: <Products /> },
        { path: 'details/:id', element: <ProductDetails /> },
        { path: '*', element: <NotFound /> },
      ]
    }
  ])
  return (
    <GlobalContextProvider>
      <RouterProvider router={routers}></RouterProvider>
    </GlobalContextProvider>

  );
}

export default App;
