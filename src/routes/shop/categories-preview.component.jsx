import { useContext, Fragment } from "react"
import { CategoriesContext } from "../../context/products-context"
import CategoryPreview from "../../components/category-preview/category-preview"
import './shop-style.scss'

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <>
            {
                Object.keys(categoriesMap).map(title => {
                    return <CategoryPreview
                        title={title}
                        products={categoriesMap[title]} />
                })
            }

        </>
    )
}

export default CategoriesPreview