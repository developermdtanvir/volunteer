import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Volunteer } from '../Volunteer/Volunteer';

export const Home = () => {
    const { name } = useContext(AuthContext);
    console.log(name);
    return (
        <div>
            <Volunteer />
        </div>
    )
}
