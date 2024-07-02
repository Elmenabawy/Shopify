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

let routes = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    {index:true , element:<Home/>},
    {path:'Products' , element:<Products/>},
    {path:'Cart' , element:<Cart/>},
    {path:'Categories' , element:<Categories/>},
    {path:'Brands' , element:<Brands/>},
    {path:'Login' , element:<Login/>},
    {path:'Register' , element:<Register/>},
  ] }
])

function App() {
  return <RouterProvider router={routes}></RouterProvider>
}

export default App;
