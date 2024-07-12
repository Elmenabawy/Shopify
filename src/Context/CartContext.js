import axios from "axios";
import { createContext } from "react";

let CartContext = createContext();
export default function CartContextProvider(props){

    let headers = localStorage.getItem('userToken');;
    function addToCart(productId){
        axios.post('https://ecommerce.routemisr.com/api/v1/cart',{
            productId
        },{
            headers
        })
    }

return <>
        <CartContext.Provider value={addToCart}>
            {props.children}
        </CartContext.Provider>
</>    
}
