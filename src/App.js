import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/navbar'
import Profile from './components/Account/Profile'
import index from './components/Home'
import Posts from './components/Posts/posts'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddPost from './components/AddPost/AddPost'
import Apload from "./components/DB/insert";
import Login from "./components/Login/Login";
import Register from "./components/register/register";
import PostDetails from './components/Posts/postDetails'
import Footer from './components/Footer/footer'
import Companies from './components/companies/companies'
import Company from './components/companies/company'
import Cart from './components/Account/cart'
function App() {
  const [isLoged, setIsLoged] = useState(localStorage.getItem('user_id') ? true:false   );
  return (
    <Router >
      <div className="App">
        <Navbar isLoged={isLoged} setIsLoged={setIsLoged}  />
        <Switch>
          <Route path="/index" component={index}  isLoged={isLoged} setIsLoged={setIsLoged}/> 
          <Route path="/Profile" component={Profile}   isLoged={isLoged} setIsLoged={setIsLoged}/>  
          <Route path="/UserProfile" component={Profile}   isLoged={isLoged} setIsLoged={setIsLoged}/>  
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register}  isLoged={isLoged} setIsLoged={setIsLoged} /> 
          <Route path="/Posts" component={Posts} isLoged={isLoged} /> 
          <Route path="/PostDetails" component={PostDetails}   isLoged={isLoged} setIsLoged={setIsLoged}/> 
          <Route path="/Companies" component={Companies} />
          <Route path="/Company" component={Company} />
          <Route path="/Cart" component={Cart} isLoged={isLoged} setIsLoged={setIsLoged} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
