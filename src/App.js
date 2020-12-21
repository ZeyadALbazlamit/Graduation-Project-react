import './App.css';
import Navbar from './components/Navbar/navbar'
import Profile from './components/Account/Profile'
import Posts from './components/Posts/posts'
import index from './components/Home'
import PostDetails from './components/Posts/postDetails'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddPost from './components/AddPost/AddPost'
import Comment from './components/comment/comment';
import Apload from "./components/DB/insert";
import Login from "./components/Login/login";
import Register from "./components/register/register";
import Up from "./components/AddPost/upimg";
function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
<button onClick={()=>{
                       console.log('2020-12-20 11:41:31'.slice(11, 16))
                     }
                    }>
2020-12-20 11:41:31</button>
        <AddPost/>
        <Switch>
          <Route path="/index" component={index} /> 
          <Route path="/Profile" component={Profile} />  
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} /> 
          <Route path="/Posts" component={Posts} /> 
          <Route path="/PostDetails" component={PostDetails} /> 
        </Switch>
      </div>
      <Register />
    </Router>
  );
}

export default App;
