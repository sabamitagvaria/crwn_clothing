import { useState, useEffect, createContext } from "react";
const removeItem = (cart, item) => {
    const itemIndex = cart.indexOf(item)
    return cart.toSpliced(itemIndex, 1)
}
const addCartItem = (cart, product) => {
    const found = cart.find(item => item.id === product.id)
    if (!found) return [...cart, { ...product, quantity: 1 }]
    else {
        const index = cart.indexOf(found)
        return cart.toSpliced(index, 1, { ...found, quantity: found.quantity + 1 })
    }

}
const decreaseQty = (cart, product) => {
    const found = cart.find(item => item.id === product.id)
    if (found.quantity === 1) {
        return cart.filter(item => item.id !== found.id)
    }
    else {
        return cart.map(item => item.id === product.id ? (
            { ...product, quantity: product.quantity - 1 }
        ) : item
        )
    }

}


export const CartContextProvider = createContext({
    isVisible: false,
    cartItems: [],
    addItemToCart: () => null,
    setCartItems: () => null,
    total: 0

})
export const CartContext = ({ children }) => {
    const [visibility, setVisibility] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(() => {
        const newTotal = cartItems.reduce(
            (total, item) => total + item.quantity * item.price, 0
        )
        setTotal(newTotal)


    }, [cartItems])


    const addItemToCart = itemToAdd => {
        setCartItems(addCartItem(cartItems, itemToAdd))
    }
    const removeItemFromCart = item => {
        setCartItems(removeItem(cartItems, item))
    }
    const decrease = (item) => {
        setCartItems(decreaseQty(cartItems, item))
    }

    const value = {
        visibility,
        setVisibility,
        cartItems,
        addItemToCart,
        setCartItems,
        removeItemFromCart,
        decrease,
        total

    }


    return (
        <CartContextProvider.Provider value={value}>
            {children}
        </CartContextProvider.Provider>
    )
}

const example = [14, 85, 67, 78]
