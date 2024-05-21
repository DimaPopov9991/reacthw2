import React, {FC, useEffect, useState} from 'react';
import {IusersProps} from "../models/IusersProps";
import {UserApiservice} from "../services/getusers.api.services";


const Userspage:FC = () => {
    const [User, setUser] = useState<IusersProps[]>([])
    useEffect(() => {
        UserApiservice.getAllUsers().then(value => setUser(value.data))

    }, []);

    return (
        <div>
            {
                User.map(user => <div key={user.id}> ID{user.id} Name: {user.name} Username: {user.username} email:{user.email}    </div>)}
        </div>




    );
};

export default Userspage;