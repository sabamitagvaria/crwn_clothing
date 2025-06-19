import CheckoutItem from './checkout-item-component'
import { useContext } from "react"
import { CartContextProvider } from '../../context/cart-context'
import './checkout-page-style.scss'

const CheckoutPage = () => {
    const { cartItems, total } = useContext(CartContextProvider)
    return (
        <div className='checkout-container'>
            <header className='checkout-header'>
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-block"><span>Remove</span></div>
            </header>

            {
                cartItems ? (
                    cartItems.map((item) => {
                        return <CheckoutItem item={item} />
                    })

                ) : (
                    <h1>No Items can be found</h1>
                )}

            <span className='total'>Total:${total}</span>
        </div >
    )
}

export default CheckoutPage