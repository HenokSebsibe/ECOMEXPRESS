import { createContext, useState, useContext } from "react";
import { getProductById } from "../data/products";

  export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

    function addToCart(productId) {
      const existingItem = cartItems.find(item => item.productId === productId);
      if (existingItem){
        const currentQuantity = existingItem.quantity;
        const updatedCartItems = cartItems.map(item => item.productId === productId ? { productId, quantity: currentQuantity + 1 } : item);
        setCartItems(updatedCartItems);
      } else {
        setCartItems([...cartItems, { productId, quantity: 1 }]);
      }
    } 
    
    function removeFromCart(productId) {
      setCartItems(cartItems.filter(item => item.productId !== productId));
    }

    function updateQuantity(productId, quantity){
      if (quantity <= 0) {
        removeFromCart(productId);
        return;
      }
      setCartItems(cartItems.map(item => item.productId === productId ? 
        { ...item , quantity } : item));
    }
 
    function getCartItemsWithProducts(){
      return cartItems.map(item =>({...item, product: getProductById (item.productId)})).filter(item => item.product);
    }

  function getCartTotal() {
    const total = cartItems.reduce((total, item) => {
      const product = getProductById(item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
    return total;
  }

    return <CartContext.Provider value={{ cartItems, addToCart , getCartItemsWithProducts, removeFromCart, updateQuantity,getCartTotal}}>
      {children}
    </CartContext.Provider>
  }


export function useCart() {
const context = useContext(CartContext);
  return context;

}