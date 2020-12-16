import React from "react";
import './posts.css'
import {Card,Button} from 'react-bootstrap'
import { BsHeartFill, BsList } from 'react-icons/bs'
const Post = () => {
  return (
    <Card style={{ width: '18rem' }} className="Post col-md-11 mb-3" >
      <Card.Img variant="top" src="/images/4.png"  />
      <Card.Body>
        <Card.Title>أسم الإعلان</Card.Title>
        <hr/>
        <div className="icons"><span className="price">440 $</span> <BsHeartFill  className="icon"/></div>
      </Card.Body>
    </Card>
  );
}

export default Post;