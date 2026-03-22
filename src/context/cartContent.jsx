import { createContext, useState, useContext } from "react";

  export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

    function addToCart(productId) {
      const existingItem = cartItems.find(item => item.productId === productId);
      if (existing){
        const currentQuantity = existingItem.quantity;
        const UpdatedCartItems = cartItems.map(item => item === productId ? {id: productId, quantity: currentQuantity+1} : item);
        setCartItems(UpdatedCartItems);
      }else{
        cartItems.push({ productId, quantity: 1 });
        setCartItems([...cartItems ,{ productId, quantity: 1 }]);
      }
    }
    return <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  }


export function useCart() {
const context = useContext(CartContext);
  return context;

}