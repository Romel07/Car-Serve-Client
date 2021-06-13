import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../../Home/Navbar/Navbar';
import UserLink from '../UserLink/UserLink';

const UserBooking = () => {
  const [userService, setUserService] = useState([])
  const { serviceName } = useParams();

  useEffect(() => {
    fetch('https://agile-mesa-34540.herokuapp.com/services')
      .then(response => response.json())
      .then(data => {    
        // console.log(data);
            setUserService(data)     
        })
        console.log(userService);
  }, [])

  return (
    <div className='row'>
      <Navbar></Navbar>
      <UserLink></UserLink>

      <div className="col-md-10 border">
        <h1> User Booking Page </h1>

        <h2>Service Id : {serviceName} </h2>
      </div>

    </div>
  );
};

export default UserBooking;