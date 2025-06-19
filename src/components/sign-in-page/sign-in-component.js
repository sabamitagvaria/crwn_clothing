import './sign-in-page-style.scss'
import SignUp from "../sign-up/sign-up-component"
import SignIn from "../sign-in-form/sign-in-component"
const SignInPage = () => {




    return (
        <div className="authentication-container">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInPage