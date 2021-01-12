import React, {  useState } from "react";
import './posts.css'
import { Card } from 'react-bootstrap'
//import { BsHeartFill, BsList } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import axios from 'axios';

const Post = (Props) => {

 // const [bool, setB] = useState(Props.fill);  
  function fav() {
    console.log(Props.fill)
    const d=Props.info.id 
    axios.post("http://127.0.0.1:8000/api/favorite", { user_id: localStorage.getItem("user_id"), post_id: Props.info.id }).then((res) => {
      console.log(res.data);
      if(res.data=='deleted')
        Props.deleteFav(d)
         else
        Props.handleFillChange(res.data.post_id)
    })
  }

  return (
    <Card style={{ width: '18rem', height: '20rem' }} className="Post col-md-11 mb-3" >
      
      <Link to={{ pathname: "/postDetails", post_id: Props.info.id ,isLoged:Props.isLoged}}>
        <Card.Img className="postImg" variant="top" src={Props.info.main_img}  />
      </Link>
      <Card.Body>
        <Link to={{ pathname: "/postDetails", post_id: Props.info.id ,isLoged:Props.isLoged}}>

          <p className="postTitle">{ Props.info.title ? Props.info.title.length<15? Props.info.title:Props.info.title.substr(0,15)+"more..."  :""}</p>
        </Link>

        <hr />
        <div className="icons"><span className="price" >{Props.info.price ? Props.info.price+'$' :" Rang"} </span>
       {Props.isLoged ? <i className={Props.fill ? "heart icon fa fa-heart" : "heart icon fa fa-heart-o"} onClick={fav}></i>:"" }  

        </div>
      </Card.Body>
    </Card>
  );
}

export default Post;