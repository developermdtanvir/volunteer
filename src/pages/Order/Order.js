import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { OrderCard } from './OrderCard';

export const Order = () => {
    const [order, setOrder] = useState([])
    const { user } = useContext(AuthContext);
    console.log(user.email);
    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user.email}`, {
            headers: {
                authoraizetion: ` Brearr ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [user.email])

    const handleDeleteOrder = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: `DELETE`
        }).then(res => res.json())
            .then(data => {
                const remainning = order.filter(odr => odr._id !== id);
                setOrder(remainning)
            });
    }


    return (
        <div className=' p-40'>
            <div className=' grid grid-cols-2 gap-10'>
                {
                    order.map(odr => <OrderCard handleDeleteOrder={handleDeleteOrder} odr={odr} />)
                }
            </div>
        </div>
    )
}
