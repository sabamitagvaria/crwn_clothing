import Button from "../button/button-component"
import { useState } from "react"
import InputForm from "../sign-up/sign-up-input"
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utilities/firebase/firebase-utility"



const SignIn = () => {
    const defaultData = {
        email: '',
        password: ''

    }
    const [data, setData] = useState(defaultData)
    const changeHandler = event => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })

    }
    const logGoogleUser = async () => {
        await signInWithGooglePopup()

    }
    const resetForm = () => setData(defaultData)
    const submitHandler = async event => {
        event.preventDefault()
        try {
            await signInAuthUserWithEmailAndPassword(data.email, data.password)
            resetForm()
        } catch (err) {
            console.log(err)
            switch (err.code) {
                case 'auth/wrong-password': alert('wrong password')

                    break
                case 'auth/user-not-found': alert('this account has not been registered')

                    break
            }
            resetForm()
        }
    }

    return (
        <div className="sign-up-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={submitHandler}>
                <InputForm
                    label='Email'
                    type='email'
                    required
                    onChange={changeHandler}
                    name='email'
                    value={data.email}

                />

                <InputForm
                    label='Password'
                    type='password'
                    required
                    onChange={changeHandler}
                    name='password'
                    value={data.password}

                />
                <div className="buttons-container">
                    <Button buttonType='inverted'>Sign In</Button>
                    <Button type='button' onClick={logGoogleUser} buttonType='google'>Google Sign In</Button>
                </div>
            </form>



        </div>
    )
}

export default SignIn