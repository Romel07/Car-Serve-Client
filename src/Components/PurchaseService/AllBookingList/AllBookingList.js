import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import UserLink from '../UserLink/UserLink';


const AllBookingList = () => {

    return (
        <div className='row'>
        <Navbar></Navbar>
        <UserLink></UserLink>
  
        <div className="col-md-10 border">
          <h1>User All Booking Page</h1>
        </div>
  
      </div>
    );
};

export default AllBookingList;