import React from "react";
import './CarsPosts.css'
import {Card,Button} from 'react-bootstrap'
import { BsHeartFill, BsList } from 'react-icons/bs'

const Post = () => {
  return (
    <Card style={{ width: '18rem' }} className="Post">
     
    <Card.Img variant="top" src="/images/4.png"  />
    <Card.Body>
      
      <Card.Title>الأسم </Card.Title>
      <Card.Text>
      الوصف
      </Card.Text>
      <hr/>
      <div className="icons"><span className="price">440 $</span> <BsHeartFill  className="icon"/></div>
    </Card.Body>
  </Card>
  );
}

export default Post;