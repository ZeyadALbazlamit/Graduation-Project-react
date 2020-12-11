import './App.css';
import Navbar from './components/Navbar'
import Profile from './components/Account/Profile'
import CarsPosts from './components/CarsPage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddPost from './components/AddPost/AddPost'
import Comment from './components/comment';
import Apload from "./components/DB/insert";
import Login from "./components/Login/login";
import Register from "./components/register/register";
import Up from "./components/AddPost/upimg";
function App() {
function handlesumbet(e){e.preventDefault();}
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
  <Apload/>
</div>

<Login />
<Register />


<div>
<form action="http://127.0.0.1:8000/api/Post" method="POST"  enctype='multipart/form-data' >

  <input  type="file" name="images" />

<button>  submit</button>
</form>


</div>
</div>
  );
}

export default App;
