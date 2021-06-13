import React from 'react';
import { Link } from 'react-router-dom';

const AdminLink = () => {
    return (
        <div className="col-2 border" style={{ backgroundColor: '#28373D', minHeight:'500px'}}>
        
        <ul>
        <li>
            <Link to="/admin">Add Service</Link>
          </li>
          <li>
            <Link to="/allOrders">All Orders</Link>
          </li>
          <li>
            <Link to="/makeAdmin">Make Admin</Link>
          </li>
          <li>
            <Link to="/manageService">Manage Service</Link>
          </li>
        </ul>
      </div>
    );
};

export default AdminLink;