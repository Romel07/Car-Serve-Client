import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Admin from './Components/Admin/Admin/Admin';
import Login from './Components/Login/Login';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import AllOrders from './Components/Admin/AllOrders/AllOrders';
import ManageService from './Components/Admin/ManagService/ManageService';
import UserBooking from './Components/PurchaseService/UserBooking/UserBooking';
import AllBookingList from './Components/PurchaseService/AllBookingList/AllBookingList';
import UserReview from './Components/PurchaseService/UserReview/UserReview';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext =createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  console.log(loggedInUser);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <div>
        
        <Switch>
          
          <Route path="/login"><Login /></Route>

          <PrivateRoute path="/booking/:serviceName"><UserBooking /></PrivateRoute>
          <PrivateRoute path="/booking"><UserBooking /></PrivateRoute>
          <PrivateRoute path="/allBookings"><AllBookingList /></PrivateRoute>
          <PrivateRoute path="/userReview"><UserReview /></PrivateRoute>


          <PrivateRoute path="/admin"><Admin /></PrivateRoute>
          <PrivateRoute path="/allOrders"><AllOrders /></PrivateRoute>
          <PrivateRoute path="/makeAdmin"><MakeAdmin /></PrivateRoute>
          <PrivateRoute path="/manageService"><ManageService /></PrivateRoute>

          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
