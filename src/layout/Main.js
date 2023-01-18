import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../pages/Home/Home/Shared/Footer/Footer'
import { Header } from '../pages/Home/Home/Shared/Header/Header'

export const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
