import Button from '../button/button-component'
import './cart-dropdown-style.scss'
import CartItem from '../cart-item/cart-item-component'
import { useContext } from 'react'
import { CartContextProvider } from '../../context/cart-context'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContextProvider)
    const navigate = useNavigate()
    const goToCheckoutPage = () => {
        navigate('/checkout')
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map(item => <CartItem item={item} />)
                }
            </div>

            <Button onClick={goToCheckoutPage} onbuttonType='inverted'>Go checkout</Button>

        </div>
    )
}

export default CartDropdown