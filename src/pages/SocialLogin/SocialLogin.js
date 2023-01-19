import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'
import './SocialLogin.css'
export const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user.email);
                const currentUser = {
                    email: res.user.email
                }
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    body: JSON.stringify(currentUser),
                    headers: { 'Content-Type': 'application/json' },
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token);
                    })
            })

    }
    return (
        <div>
            <div className=' text-center pt-60 space-y-10 font-bold'>
                <h1 className=' text-4xl'>Login With</h1>
                <div className=' items-center flex justify-center'>
                    <input className=' transition-all hover:w-80 duration-500 btn w-60 icon' onClick={handleGoogleLogin} value='Continue with Google' />
                </div>
            </div>
        </div>
    )
}
