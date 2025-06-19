import './category-container-style.scss'
import { useNavigate } from 'react-router-dom'
export default function Category({ key, title, imgSrc }) {
    const navigate = useNavigate()
    const goToShop = () => {
        if (title !== 'Women' && title !== 'Men') {
            navigate(`shop/${title.toLowerCase()}`)
        } else {
            navigate(`shop/${title.toLowerCase()}s`)
        }
    }
    return (
        <div onClick={goToShop} key={key} className="category-container">
            <div className="background-image" style={{
                backgroundImage: `url(${imgSrc})`
            }}></div>
            <div className="category-body-container">
                <h2>{title}</h2>
                <span>Shop Now</span>
            </div>
        </div>
    )
}