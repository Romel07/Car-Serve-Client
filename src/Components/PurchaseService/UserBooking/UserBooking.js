import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import UserLink from '../UserLink/UserLink';

const UserBooking = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [userService, setUserService] = useState([])
  
  const { serviceName } = useParams();
  console.log(serviceName);

  useEffect(() => {
    fetch('https://agile-mesa-34540.herokuapp.com/services')
      .then(response => response.json())
      .then(data => {
        
        setUserService(data)
        console.log(data);
      })
    console.log(userService);
  }, [])

  const selectedService = userService.find(service=>service._id === serviceName)
  console.log(selectedService?.price, selectedService?.service)

  const [orderedService, setOrderedService] = useState({})
  // setOrderedService(selectedService)
  const handleBookOrder = () =>{
    // const orderedService = null;
    // orderedService.push(selectedService) 
    // const newUser = [loggedInUser, new Date().toLocaleString()]
    const newBookingService = {...loggedInUser, ...selectedService }

    // orderedService.push(selectedService)
  
  
  fetch('https://agile-mesa-34540.herokuapp.com/addOrderedServices',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBookingService), 
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            alert('Your Service Order is Confired')
        })

      }


  return (
    <div className='row'>
      <Navbar></Navbar>
      <UserLink></UserLink>

      <div className="col-md-10 border">
        <h2 className='text-center my-4'> User Current Booking </h2>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Service</th>
              <th scope="col">Price $US</th>
              <th scope="col">User Email</th>
            </tr>
          </thead>
          <tbody>
            

            <tr>
              <th scope="row">+</th>
              <td>{selectedService?.service}</td>
              <td>{selectedService?.price}</td>
              <td>{loggedInUser?.email}</td>
            </tr>

          </tbody>
        </table>
        <button onClick={handleBookOrder}  className='bg-dark p-3 text-white'>Confirm to Checkout</button>
      </div>

    </div>
  );
};

export default UserBooking;