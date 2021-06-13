import React from 'react';
import { Link } from 'react-router-dom';

const UserLink = () => {
    return (
        <div className="col-md-2 border" style={{ backgroundColor: '#28373D', minHeight:'500px'}}>
        
        <ul>
        <li>
            <Link to="/booking">Book</Link>
          </li>
          <li>
            <Link to="/allBookings">All Booking List</Link>
          </li>
          <li>
            <Link to="/userReview">Review</Link>
          </li>
        </ul>
      </div>
    );
};

export default UserLink;