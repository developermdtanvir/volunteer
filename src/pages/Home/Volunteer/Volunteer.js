
import React, { useEffect, useState } from 'react';
import { VolunteerCard } from './VolunteerCard';
export const Volunteer = () => {
    const [volunteer, setVolunteer] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [])
    return (
        <div>
            <div className=' text-center space-y-10'>
                <h1 className=' text-5xl font-bold'>I GROW BY HEALPING PEOPLE IN  NEED</h1>
                <form><input className=' input input-primary' type='text' placeholder='search..' /><input className=' btn btn-primary' type='button' value='search' /></form>
            </div>
            <div className=' grid grid-cols-4 gap-5 space-x-2 p-5'>
                {
                    volunteer.map(data => <VolunteerCard data={data} />)
                }
            </div>
        </div>
    )
}
