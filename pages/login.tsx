import React, { useContext, useEffect, useState } from 'react'
import { firebase as firebaseClient } from '../utils/firebase'
import {
    FormHeader,
    FormContainer,
    FormInput,
    FormButton,
    FormError,
    LoginRegisterText
} from "../components/FormControl"
import FormValidator from '../helpers/FormValidator'
import { AuthContext } from "../ context/AuthContext"
import { useRouter } from 'next/router';
import { redirect } from 'next/dist/next-server/server/api-utils'

export default function Login(props: any) {
    const [state, set] = useState({ email: '', pass: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });
    const { authState } = useContext(AuthContext)

    const status = "status"
    const errorMessage = "error"
    function toggleLogin() {
    }

    useEffect(() => {
        if (authState) {
            window.location.href = "/"
        }
    }, [authState])

    async function handleSubmit(e: any) {
        e.preventDefault()
        let { errors, cond } = FormValidator(state)
        setErrors(errors);
        if (cond) {
            await firebaseClient.auth().signInWithEmailAndPassword(state.email, state.pass)
            window.location.href = "/"
        }
    }
    return (
        <div style={{ backgroundColor: "#363740" }} className="min-h-screen flex place-self-auto place-items-center">
            <FormContainer className="bg-white max-w-lg mx-auto p-4 md:p-8 my-10 rounded-lg shadow-2xl">
                <FormHeader className="text-xl font-semibold mb-4">Freshconn Dashboard</FormHeader>
                <form className="grid" onSubmit={(e: any) => handleSubmit(e)} noValidate autoComplete="on">
                    <FormInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={(e) => set({ ...state, email: e.target.value })}
                        required
                        error={errors.email}
                        parentProps
                    />
                    <FormInput
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        onChange={(e) => set({ ...state, pass: e.target.value })}
                        required
                        error={errors.password}
                        parentProps
                    />
                    <FormButton style={{ backgroundColor: "#3750FF" }} type="submit">Log In</FormButton>
                    <LoginRegisterText
                        isUserLogin={false}
                        registerHandler={toggleLogin}
                        text="Already Registered?"
                        linkText="Click here to Login"
                        {...!status && <FormError error={errorMessage} />}
                    />
                </form>
            </FormContainer>
        </div>
    )
}

//             <button
//                 onClick={async () => {
//                     await firebaseClient
//                         .auth()
//                         .createUserWithEmailAndPassword(email, pass);
//                     window.location.href = '/';
//                 }}
//             >
//                 Create account
//       </button>