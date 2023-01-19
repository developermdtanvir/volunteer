import { createBrowserRouter } from "react-router-dom";
import { Main } from "../../layout/Main";
import { Checkout } from "../../pages/Checkout/Checkout";
import { Home } from "../../pages/Home/Home/Home";
import { Login } from "../../pages/Login/Login";
import { Order } from "../../pages/Order/Order";
import { PraivetRouter } from "../PraivetRouter";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/checkout/:id',
                element: <PraivetRouter><Checkout /></PraivetRouter>,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/order',
                element: <PraivetRouter><Order /></PraivetRouter>
            }
        ]
    }
])