import './category-preview-style.scss'
import ProductCart from '../product-cart/product-cart'
import { useNavigate } from 'react-router-dom'
const CategoryPreview = ({ title, products }) => {
    const navigate = useNavigate()
    const toProducts = () => {
        navigate(`${title}`)
    }
    return (
        <div className='category-preview-container'>
            <h2>
                <span onClick={toProducts} className='title'>{title.toUpperCase()}</span>
            </h2>
            <div className='preview'>
                {
                    products
                        .filter((_, index) => index < 4)
                        .map(product => {
                            return <ProductCart product={product} />
                        })

                }
            </div>
        </div >
    )
}


export default CategoryPreview

