import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import UserLink from '../UserLink/UserLink';


const AllBookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [userBooking, setUserBooking] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/userBookings?email='+loggedInUser.email)
    .then(res=> res.json())
    .then(data=>setUserBooking(data))
  },[loggedInUser.email])

  console.log(userBooking)

    return (
        <div className='row'>
        <Navbar></Navbar>
        <UserLink></UserLink>
  
        <div className="col-md-10 border">
        <h2 className='text-center my-4'> User All Bookings </h2>

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
            

          {userBooking.map(books=>
          <tr>              
              <th scope="row">+</th>
              <td>{books.service}</td>
              <td>{books.price}</td>
              <td>{loggedInUser.email}</td> 
            </tr>            
            )}

          </tbody>
        </table>
        
      </div>
  
      </div>
    );
};

export default AllBookingList;