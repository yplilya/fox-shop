import React, { useState, createContext, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, steCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState();
    const [qty, setQty] = useState(1);

    const incQty = () => 

    return(
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty
            }}
        >
            {children}
        </Context.Provider>
    )
}

