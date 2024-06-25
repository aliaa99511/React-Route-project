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

function App() {

  const routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'Cart', element: <Cart /> },
        { path: 'Categories', element: <Categories /> },
        { path: 'Products', element: <Products /> },
        { path: '*', element: <NotFound /> },
      ]
    }
  ])
  return (
    <RouterProvider router={routers}>
    </RouterProvider>
  );
}

export default App;
