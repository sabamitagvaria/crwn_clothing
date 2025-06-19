import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utilities/firebase/firebase-utility"
import InputForm from "./sign-up-input"
import './sign-up-form-style2.scss'
import Button from "../button/button-component"

const defaultFormFields = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { username, email, password, confirmPassword } = formFields
    const changeHandler = event => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }
    const resetForm = () => setFormFields(defaultFormFields)

    const submitHandler = async event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert('password does not match')
            return
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { username })
            resetForm()
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="sign-up-container">
            <h2>Dont have an account?</h2>
            <span>Sign Up With Email</span>
            <form onSubmit={submitHandler}>
                <InputForm
                    label='username'
                    type='text'
                    required
                    onChange={changeHandler}
                    name='username'
                    value={username}
                />
                <InputForm
                    label='Email'
                    type='email'
                    required
                    onChange={changeHandler}
                    name='email'
                    value={email}
                />
                <InputForm
                    label='password'
                    type='password'
                    required
                    onChange={changeHandler}
                    name='password'
                    value={password}
                />
                <InputForm
                    label='confirm password'
                    type='password'
                    required
                    onChange={changeHandler}
                    name='confirmPassword'
                    value={confirmPassword}
                />
                <Button buttonType='inverted'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp