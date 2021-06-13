import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import AdminLink from '../AdminLink/AdminLink';


const MakeAdmin = () => {
    return (
        <div className='row'>
        <Navbar></Navbar>
        <AdminLink></AdminLink>
  
        <div className="col-md-10 border">
          <h1> Make Admin Page</h1>
        </div>
  
      </div>
    );
};
export default MakeAdmin;
