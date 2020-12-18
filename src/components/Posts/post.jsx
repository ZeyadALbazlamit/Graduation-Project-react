import React from "react";
import './posts.css'
import {Card,Button} from 'react-bootstrap'
import { BsHeartFill, BsList } from 'react-icons/bs'
const Post = (Props) => {
  return (
    <Card style={{ width: '18rem' }} className="Post col-md-11 mb-3" >
      <Card.Img variant="top" src={Props.info.main_img ? Props.info.main_img:'' } />
      <Card.Body>
        <Card.Title>{Props.info.title ?Props.info.title:' '}</Card.Title>
        <hr/>
        <div className="icons"><span className="price">{Props.info.price?Props.info.price:""}$</span> 
        <BsHeartFill  className="icon"/></div>
      
    <button onClick={()=>console.log(Props)}>  </button>
      </Card.Body>
    </Card>
  );
}

export default Post;