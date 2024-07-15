import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'
import Brands from './Components/Brands/Brands'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Categories from './Components/Categories/Categories'
import Layout from './Components/Layout/Layout'
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import CartContextProvider from './Context/CartContext';
let routes = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    { index: true, element: <ProtectedRoute> <Home /></ProtectedRoute> },
    { path: 'Products', element: <ProtectedRoute> <Products /></ProtectedRoute> },
    { path: 'Cart', element: <ProtectedRoute> <Cart /></ProtectedRoute>},
    { path: 'Categories', element: <ProtectedRoute> <Categories /></ProtectedRoute> },
    { path: 'Brands', element: <ProtectedRoute> <Brands /></ProtectedRoute> },
    { path: 'ProductDetails/:id', element: <ProtectedRoute> <ProductDetails /></ProtectedRoute> },
    {path:'Login' , element:<Login/>},
    {path:'Register' , element:<Register/>},
  ] }
])

function App() {
  return  <CartContextProvider>
            <UserContextProvider>
              <RouterProvider router={routes}></RouterProvider>
            </UserContextProvider>
         </CartContextProvider>
   
}

export default App;
