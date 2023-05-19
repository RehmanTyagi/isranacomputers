import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const ItemExeist = cartItems.find(item => item.id === productToAdd.id);
    // If found, increment quantity
    if (ItemExeist) {
        return cartItems.map(item => item.id === productToAdd.id ? { ...item, quantity: item.quantity < 10 ? item.quantity + 1 : 10 } : item);
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

// cartReducer
const intialState = {
    isCartToggle: false,
    cartItems: []
};

const cart_Action_Types = {
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
    SET_CART_ITEMS: "SET_CART_ITEMS"
};

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case cart_Action_Types.SET_CART_ITEMS:
            return { ...state, ...payload };
        case cart_Action_Types.SET_IS_CART_OPEN:
            return { ...state, isCartToggle: payload };
        default: throw new Error(`unhandled type of ${type} in cartReducer`);
    }
};

// cartReducer

export const CartContext = createContext({
    // isCartToggle: false,
    // setIsCartToggle: () => { },
    // cartItems: [],
    // addItemToCart: () => { },
    // removeItemFromCart: () => { },
});

export const CartProvider = ({ children }) => {
    // const [isCartToggle, setIsCartToggle] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    const [{ cartItems, isCartToggle }, dispatch] = useReducer(cartReducer, intialState);

    const updateCartItemsReducer = (newCartItems) => {
        dispatch({ type: cart_Action_Types.SET_CART_ITEMS, payload: { cartItems: newCartItems } });
    };

    const setIsCartToggle = (bool) => {
        dispatch({ type: cart_Action_Types.SET_IS_CART_OPEN, payload: bool });
    };

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);

    };
    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    };

    const quantityMinusHandler = (product) => {
        const newCartItems = decreaseCartQuantity(cartItems, product);
        updateCartItemsReducer(newCartItems);
    };
    const quantityPlusHandler = (product) => {
        const newCartItems = (IncreaseCartQuantity(cartItems, product));
        updateCartItemsReducer(newCartItems);
    };

    const value = { isCartToggle, setIsCartToggle, addItemToCart, cartItems, removeItemFromCart, quantityMinusHandler, quantityPlusHandler };

    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>);
};


