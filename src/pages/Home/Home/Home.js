import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

export const Home = () => {
    const { name } = useContext(AuthContext);
    console.log(name);
    return (
        <div>

            <h1>Home</h1>
        </div>
    )
}
