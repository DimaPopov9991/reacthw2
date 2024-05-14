import React, {FC, useEffect, useState} from 'react';
import  {IUserTypeProps} from "./user";
import {getAllUsers} from "../services/user.api.services";
import User from "./user";


const Users:FC<IUserTypeProps> = ({lift}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        // fetch('https://dummyjson.com/users')
        // .then(res => res.json())
        // .then(({users})=>{setUsers(users)});
        getAllUsers().then(value => setUsers(value.data.users))
        console.log(users)





    }, []);

    return (
        <div>
            {users.map(({
                            id,
                            firstName,
                            lastName,
                            maidenName,
                            age,
                            gender,
                            email,
                            phone,
                            username,
                            password,
                            birthDate,
                            image,
                            bloodGroup,
                            height,
                            weight,
                            eyeColor,
                            hair,
                            domain,
                            ip,
                            address,


                        }) => (
                <User  bloodGroup={bloodGroup} lift={lift} hair={hair['color']} height={height} weight={weight} eyeColor={eyeColor}  domain={domain} ip={ip} address={address['city']} image={image} key={id} id={id} firstName={firstName} lastName={lastName} maidenName={maidenName} age={age} gender={gender} email={email} phone={phone} username={username} password={password} birthDate={birthDate}/>))}
        </div>
    );
};

export default Users