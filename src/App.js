import './App.css';
import React, {  useState } from 'react';
import Navbar from './components/Navbar/navbar'
import Profile from './components/Account/Profile'
import index from './components/Home'
import Posts from './components/Posts/posts'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import Register from "./components/register/register";
import PostDetails from './components/Posts/postDetails'
import Footer from './components/Footer/footer'
import Companies from './components/companies/companies'
import Company from './components/companies/company'
import Cart from './components/Account/cart'
import Order from './components/Account/orders'
import UserOrder from './components/Account/userOrders'
import OrdersHistory from './components/Account/orderHistory'
import Users from './components/users/users'
import NotLoged from './components/AddPost/notLoged'
function App() {
  const [isLoged, setIsLoged] = useState(localStorage.getItem('user_id') ? true:false   );
  const [userType, setType] = useState(localStorage.getItem('user_type')    );
  return (
    <Router >
      <div className="App">
        <Navbar isLoged={isLoged} setIsLoged={setIsLoged}          userType={userType}  setType={setType} />
        <Switch>
          <Route path="/index" component={index}                isLoged={isLoged} setIsLoged={setIsLoged}  /> 
          <Route path="/Profile" component={Profile}            isLoged={isLoged} setIsLoged={setIsLoged}  />  
          <Route path="/UserProfile" component={Profile}        isLoged={isLoged} setIsLoged={setIsLoged}  />  
          <Route path="/Login" component={Login}                isLoged={isLoged} setIsLoged={setIsLoged} setType={setType} />
          <Route path="/Register" component={Register}          isLoged={isLoged} setIsLoged={setIsLoged} setType={setType} /> 
          <Route path="/Posts" component={Posts}                isLoged={isLoged}                          /> 
          <Route path="/PostDetails" component={PostDetails}    isLoged={isLoged} setIsLoged={setIsLoged}  /> 
          <Route path="/Companies" component={Companies}        isLoged={isLoged} setIsLoged={setIsLoged}  />
          <Route path="/Company" component={Company}            isLoged={isLoged} setIsLoged={setIsLoged}  />
          <Route path="/Cart" component={Cart}                  isLoged={isLoged} setIsLoged={setIsLoged}  />
          <Route path="/order" component={Order}                isLoged={isLoged} setIsLoged={setIsLoged}  />
          <Route path="/UserOrder" component={UserOrder}        isLoged={isLoged} setIsLoged={setIsLoged}  />
          <Route path="/OrdersHistory"component={OrdersHistory} isLoged={isLoged} setIsLoged={setIsLoged}  />
          <Route path="/Users" component={Users}                isLoged={isLoged} setIsLoged={setIsLoged}  />
          <Route path="/NotLoged" component={NotLoged} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
