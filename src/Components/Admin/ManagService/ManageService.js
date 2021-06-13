import React, { useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import AdminLink from '../AdminLink/AdminLink';

const ManageService = () => {
  const [allServices, setAllServices] = useState([])
  useEffect(() => {
    fetch('https://agile-mesa-34540.herokuapp.com/services')
      .then(response => response.json())
      .then(data => {
        setAllServices(data)
      })
    console.log(allServices);
  }, [])
  return (
    <div className='row'>
      <Navbar></Navbar>
      <AdminLink></AdminLink>

      <div className="col-md-10 border">
        <h1> Manage your services</h1>
        {
          allServices.map(service =>
            <li>
              `<strong>{service.service}</strong>---{service.description} --- <button onClick={() => deleteProduct(`${service._id}`)}>Delete Service</button>`

            </li>)
        }
      </div>

    </div>
  );
};

const deleteProduct = (id) => {

  fetch(`https://agile-mesa-34540.herokuapp.com/delete/${id}`, { method: 'DELETE' })
    .then(res => res.json())
    .then(result => {
      console.log('deleted successfully');
    });

  console.log(id);
}




export default ManageService;