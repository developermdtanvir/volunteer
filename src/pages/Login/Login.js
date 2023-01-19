import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SocialLogin } from '../SocialLogin/SocialLogin'

export const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div>
            <SocialLogin />
        </div>
    )
}
