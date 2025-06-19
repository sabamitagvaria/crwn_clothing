import './category-style.scss'
import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { CategoriesContext } from '../../context/products-context'
import ProductCart from '../../components/product-cart/product-cart'
const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        < div className='categoryy-container' >
            {
                products && products.map(product => {
                    return <ProductCart product={product} />
                })
            }
        </div >
    )

}

export default Category