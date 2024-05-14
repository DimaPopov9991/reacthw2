import React, {FC} from 'react';
import {IUserProps} from "../models/user";



export type IUserTypeProps=IUserProps&{children?:React.ReactNode}
const User: FC<any> = ({
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
                           lift,



                                  }) => {

    return (
        <div >
            <ul>
                <li>User ID:{id}</li>
                <li>Firstname:{firstName}</li>
                <li> Lastname:{lastName}</li>
                <li>maidenName:{maidenName}</li>
                <li>Age:{age}</li>
                <li> Gender:{gender}</li>
                <li>Email:{email}</li>
                <li>Phone:{phone}</li>
                <li>Username:{username}</li>
                <li>Password:{password}</li>
                <li>Birthdate:{birthDate}</li>
                <li>BloudGroup:{bloodGroup}</li>
                <li>Height:{height}</li>
                <li>Weight:{weight}</li>
                <li>eyColor:{eyeColor}</li>
                <li>Hair:{hair}</li>
                <li>Domain:{domain}</li>
                <li>IP:{ip}</li>
                <li>Adress:{address}</li>
                <button onClick={()=>{lift(id)}}>Press Me</button>
            </ul>


            <img src={image} alt={lastName}/>


        </div>
    );
};

export default User;