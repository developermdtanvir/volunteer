import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

export const Checkout = () => {
    const { id } = useParams()

    const [info, setInfo] = useState({})

    const { title } = info;

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setInfo(data));
    }, [])

    const { user } = useContext(AuthContext);
    const handleSubmit = e => {
        const name = e.target.fristName.value + ' ' + e.target.lastName.value
        const number = e.target.number.value
        const email = e.target.email.value;
        const messege = e.target.messege.value;


        const placeOrder = {
            service: id,
            name,
            number,
            email,
            messege,
            title
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(placeOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Volenter order successfully')
                }
            });
        e.preventDefault()
    }
    return (
        <div className=' p-10'>
            <form onSubmit={handleSubmit} className=' grid grid-cols-2 gap-8'>
                <input name='fristName' className=' input' type='text' placeholder='fristName' />
                <input name='lastName' className=' input' type='text' placeholder='lastName' />
                <input name='number' className=' input' type='phone' placeholder='Phone' />
                <input name='email' defaultValue={user.email} className=' input' type='email' placeholder='Email' />
                <textarea name='messege' className=' textarea textarea-secondary'></textarea>
                <input className=' btn btn-secondary' type='submit' value='Submit' />
            </form>


        </div>
    )
}
