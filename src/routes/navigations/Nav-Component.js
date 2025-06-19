import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation-style.scss'
import { UserContext } from "../../context/user-context"
import { signOutUser } from "../../utilities/firebase/firebase-utility"
import CartIcon from "../../components/cart-icon/cart-icon-component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component"
import { CartContextProvider } from "../../context/cart-context"
const NavBar = () => {

    const { currentUser } = useContext(UserContext)
    const { visibility } = useContext(CartContextProvider)
    const signOutHandler = async () => {
        return await signOutUser()
    }
    return (
        <Fragment>
            <nav className="navigation">
                <Link className="logo-container" to=''>
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='shop'>SHOP</Link>
                    {

                        currentUser ? (
                            <span onClick={signOutHandler} className="nav-link">Sign Out</span>
                        ) : <Link className="nav-link" to='signIn'>Sign In</Link>
                    }
                    <CartIcon />

                </div>
                {
                    visibility && <CartDropdown />
                }
            </nav>
            <Outlet />

        </Fragment>
    )
}

export default NavBar