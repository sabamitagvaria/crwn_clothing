import { useContext } from "react"
import { CartContextProvider } from "../../context/cart-context"
import './checkout-item-style.scss'
const CheckoutItem = ({ item }) => {
    const { removeItemFromCart, decrease, addItemToCart } = useContext(CartContextProvider)
    const remove = () => {
        removeItemFromCart(item)

    }
    const incr = () => {
        addItemToCart(item)

    }
    const decr = () => {
        decrease(item)

    }
    const { id, imageUrl, name, price, quantity } = item
    return <div key={id} className="checkout-item-container" >
        <div className="image-container">
            <img src={imageUrl} alt={name} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div onClick={decr} className="arrow">
                &#10094;
            </div>
            <span className="value">{quantity}</span>
            <div onClick={incr} className="arrow">
                &#10095;
            </div>
        </span>
        <span className="price">{price}</span>


        <div onClick={remove} className="remove-button">&#9746;</div>
    </div >
}

export default CheckoutItem