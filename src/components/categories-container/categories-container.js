import './categories-container.scss'
import Category from '../category-container/Category-Container'
const CategoryContainer = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map(({ title, id, imageUrl }) => {
                return (
                    <Category key={id} title={title} imgSrc={imageUrl} />
                )
            })}
        </div>
    )
}

export default CategoryContainer