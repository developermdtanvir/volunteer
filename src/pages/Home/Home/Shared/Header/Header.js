import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../../../Contexts/AuthProvider/AuthProvider'

export const Header = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <nav className=' flex justify-evenly'>
            <div>
                <img src='' alt='' />
            </div>
            <div className=' space-x-5'>
                <Link to='/'>Home</Link>
                <Link>Donation</Link>
                <Link>Events</Link>
                <Link>Blog</Link>
                <Link to='/login'>{!user ? <button className=' btn-primary btn'>Login</button> : <button className=' btn btn-warning' onClick={() => logout()}>Log Out</button>}</Link>
                <button className=' btn-success btn'>Admin</button>
                <Link to='/order'><button className=' btn-info btn'>Order</button></Link>
            </div>
        </nav>
    )
}
