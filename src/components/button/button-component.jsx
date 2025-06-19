import './button-style.scss'
const button_style_classes = {
    google: 'google-sign-in',
    inverted: 'inverted'


}
const Button = ({ children, buttonType, ...others }) => {
    return (
        <button
            {...others} className={`button-container ${button_style_classes[buttonType]}`}>{children}</button>
    )
}

export default Button