import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex > -1) {
                const newItems = [...state.items];
                newItems[existingItemIndex].quantity += action.payload.quantity || 1;
                return { ...state, items: newItems };
            }
            return { ...state, items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }] };
        }
        case 'REMOVE_FROM_CART':
            return { ...state, items: state.items.filter(item => item.id !== action.payload) };
        case 'UPDATE_QUANTITY': {
            const newItems = state.items.map(item =>
                item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
            );
            return { ...state, items: newItems };
        }
        case 'CLEAR_CART':
            return { ...state, items: [] };
        default:
            return state;
    }
};

const initialState = {
    items: JSON.parse(localStorage.getItem('cart')) || []
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.items));
    }, [state.items]);

    const addToCart = (product, quantity = 1) => {
        dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
    };

    const removeFromCart = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return removeFromCart(productId);
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const cartCount = state.items.reduce((acc, item) => acc + item.quantity, 0);
    const cartTotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart: state.items,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartCount,
            cartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
