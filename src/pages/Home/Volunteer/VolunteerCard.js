import React from 'react';
import { Link } from 'react-router-dom';

export const VolunteerCard = ({ data }) => {
    const { img, title, color, _id } = data;

    return (
        <div className='relative cursor-pointer'>
            <Link to={`/checkout/${_id}`}>
                <div> <img className=' ' src={img} alt='' /> </div>
                <div className=' h-40 w-[100%] text-center font-bold absolute rounded-2xl bottom-0 text-2xl pt-10' style={{ backgroundColor: `${color}` }}>{title} </div>
            </Link>
        </div>
    )
}
