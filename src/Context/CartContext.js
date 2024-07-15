import axios from "axios";
import { createContext, useContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const token = localStorage.getItem('userToken');
    const headers = token ? { token: token } : {}; // Updated header key to 'token'

    function addToCart(productId) {
        return axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
            productId
        }, {
            headers
        })
            .then(response => response)
            .catch(error => {
                console.error("Error adding to cart:", error);
                if (error.response) {
                    console.error("Response error:", error.response.data);
                }
                throw error;
            });
    }

    return (
        <CartContext.Provider value={{ addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
