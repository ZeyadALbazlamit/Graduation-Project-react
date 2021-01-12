import './App.css';
import React, {  useState } from 'react';
import Navbar from './components/Navbar/navbar'
import Profile from './components/Account/Profile'
import Index from './components/Home'
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
import Dashboard from './components/Dashboard/dashboard'
import PostsDash from './components/Dashboard/postsDash'
import CompaniesDash from './components/Dashboard/companiesDash'
import CompanyDash from './components/Dashboard/companyDash'
import UsersDash from './components/Dashboard/usersDash'
import ReportDash from './components/Dashboard/reportDash'
function App() {
  const [isLoged, setIsLoged] = useState(localStorage.getItem('user_id')==0 ? false:true   );
  const [userType, setType] = useState(localStorage.getItem('user_type')    );
  return (
    <Router >
      <div className="App">
        <Navbar isLoged={isLoged} setIsLoged={setIsLoged}          userType={userType}  setType={setType} />
        <Switch>
          <Route path="/index" component={ ()=> <Index isLoged={isLoged} />}  /> 
          <Route path="/Profile" component={Profile}  />  
          <Route path="/UserProfile" component={Profile} />  
          <Route path="/Login" component={Login}  />
          <Route path="/Register" component={Register} /> 
          <Route path="/Posts" component={Posts} /> 
          <Route path="/PostDetails" component={PostDetails}/> 
          <Route path="/Companies" component={Companies} />
          <Route path="/Company" component={Company}  />
          <Route path="/Cart" component={Cart}    />
          <Route path="/order" component={Order}   />
          <Route path="/UserOrder" component={UserOrder} />
          <Route path="/OrdersHistory"component={OrdersHistory} />
          <Route path="/Users" component={Users} />
          <Route path="/NotLoged" component={NotLoged} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/PostsDash" component={PostsDash} />
          <Route path="/CompaniesDash" component={CompaniesDash} />
          <Route path="/CompanyDash" component={CompanyDash} />
          <Route path="/UsersDash" component={UsersDash} />
          <Route path="/ReportDash" component={ReportDash} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
