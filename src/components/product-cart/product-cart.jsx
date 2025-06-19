import Button from "../button/button-component"
import './product-cart.scss'
import { useContext } from "react"
import { CartContextProvider } from "../../context/cart-context"
const ProductCart = ({ product }) => {
    const { addItemToCart } = useContext(CartContextProvider)
    const clickHandler = () => {
        addItemToCart(product)
    }
    const { id, name, imageUrl, price } = product
    return (
        <div key={id} className="product-card-container">
            <img src={imageUrl} alt={name} />
            <footer className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </footer>
            <Button onClick={clickHandler} buttonType='inverted'>Add to cart</Button>
        </div>
    )
}

export default ProductCart