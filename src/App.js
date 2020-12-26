import './App.css';
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
function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/index" component={index} /> 
          <Route path="/Profile" component={Profile} />  
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} /> 
          <Route path="/Posts" component={Posts} /> 
          <Route path="/PostDetails" component={PostDetails} /> 
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
