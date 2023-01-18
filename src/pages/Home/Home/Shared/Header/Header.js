import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
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
                <button className=' btn-primary btn'>Login</button>
                <button className=' btn-success btn'>Admin</button>
            </div>
        </nav>
    )
}
