import './App.css';
import Navbar from './components/Navbar'
import Profile from './components/Account/Profile'
import CarsPosts from './components/CarsPage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddPost from './components/AddPost/AddPost'
import Comment from './components/comment';
import Login from './components/Login/Login';
import Register from './components/register/register';
function App() {
  return (
    <div className="App">
      <Router >
    <Navbar />
   
    <AddPost />
     <Switch> 
        <Route path="/Profile" component={Profile} />       
       </Switch>
      </Router>

<div>
<Login /> 
<Register/>
    
</div></div>
  );
}

export default App;
