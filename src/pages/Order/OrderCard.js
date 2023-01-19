import React, { useEffect, useState } from 'react';
import { MdCancel } from 'react-icons/md';
export const OrderCard = ({ odr, handleDeleteOrder }) => {
    const { title, service, _id } = odr;
    const [services, setServices] = useState([])
    console.log(services);
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [service])

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className=' h-40' src={services.img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <MdCancel onClick={() => handleDeleteOrder(_id)} className=' text-4xl cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
