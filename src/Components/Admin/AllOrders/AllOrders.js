import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import AdminLink from '../AdminLink/AdminLink';

const AllOrders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [allBooking, setAllBooking] = useState([])
  useEffect(() => {
    fetch('https://agile-mesa-34540.herokuapp.com/userBookingsForAdmin')
      .then(res => res.json())
      .then(data => setAllBooking(data))
  }, [])
  return (
    <div className='row'>
      <Navbar></Navbar>
      <AdminLink></AdminLink>


      <div className="col-md-10 border">
        <h2 className='text-center my-4'> All Orders </h2>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Service</th>
              <th scope="col">Price $US</th>
              <th scope="col">User Email</th>
              <th scope="col">Order Status</th>
            </tr>
          </thead>
          <tbody>


            {allBooking.map(books =>
              <tr>
                <th scope="row">+</th>
                <td>{books.service}</td>
                <td>{books.price}</td>
                <td>{books.email}</td>
                <td>
                  <button >Not Started</button>
                  <button className='mx-3'>Processing</button>
                  <button>Delivred</button>
                </td>
              </tr>
            )}

          </tbody>
        </table>

      </div>

    </div>
  );
};

export default AllOrders;