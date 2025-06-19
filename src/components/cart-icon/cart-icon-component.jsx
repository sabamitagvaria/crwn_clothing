import './cart-icon-style.scss'
import { ReactComponent as ShoppingItem } from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContextProvider } from '../../context/cart-context'

const CartIcon = () => {
    const { visibility, setVisibility, cartItems } = useContext(CartContextProvider)
    const toggleHandler = () => {
        setVisibility(!visibility)
    }
    return (
        <div onClick={toggleHandler} className='cart-icon-container'>
            <ShoppingItem className='shopping-icon' />
            <span className='item-count'>{
                cartItems.length ? (
                    cartItems.map(item => {
                        return item.quantity
                    }).reduce((prev, curr) => prev + curr)
                ) : 0
            }
            </span>
        </div>
    )

}

export default CartIcon

