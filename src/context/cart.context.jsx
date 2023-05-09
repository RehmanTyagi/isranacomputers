import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const ItemExeist = cartItems.find(item => item.id === productToAdd.id);
    // If found, increment quantity
    if (ItemExeist) {
        return cartItems.map(item => item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item);
    }
    // return new array with modified cartitems/ new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
    return cartItems.filter(item => item.id !== productToRemove.id);

};

const decreaseCartQuantity = (cartItems, product) => {
    return cartItems.map(item => item.id === product.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item);

};
const IncreaseCartQuantity = (cartItems, product) => {
    return cartItems.map(item => item.id === product.id && item.quantity >= 1 && item.quantity < 10 ? { ...item, quantity: item.quantity + 1 } : item);

};

export const CartContext = createContext({
    isCartToggle: false,
    setIsCartToggle: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
});

export const CartProvider = ({ children }) => {
    const [isCartToggle, setIsCartToggle] = useState(CartContext);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    };

    const quantityMinusHandler = (product) => {

        setCartItems(decreaseCartQuantity(cartItems, product));
    };
    const quantityPlusHandler = (product) => {

        setCartItems(IncreaseCartQuantity(cartItems, product));
    };

    const value = { isCartToggle, setIsCartToggle, addItemToCart, cartItems, removeItemFromCart, quantityMinusHandler, quantityPlusHandler };

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
};