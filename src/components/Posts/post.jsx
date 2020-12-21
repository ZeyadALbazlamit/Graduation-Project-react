import React from "react";
import './posts.css'
import {Card,Button} from 'react-bootstrap'
import { BsHeartFill, BsList } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import $ from 'jquery'

const Post = (Props) => {
  function fav(){
    $(".heart.fa").click(function() {
      $(this).toggleClass("fa-heart fa-heart-o");
    });
  }
  return (
    <Card style={{ width: '18rem', height : '18rem' }} className="Post col-md-11 mb-3" >
    <Link to={{pathname:"/postDetails" ,post_id:Props.info.id }}>
      <Card.Img variant="top" src={Props.info.main_img  } />
      </Link>
      <Card.Body>
      <Link to={{pathname:"/postDetails" ,post_id:Props.info.id }}>

        <Card.Title>{Props.info.title }</Card.Title>
        </Link>

        <hr/>
        <div className="icons"><span className="price">{Props.info.price}$</span> 
        <i class="heart icon fa fa-heart-o" onClick={fav}></i>

        </div>
          </Card.Body>
    </Card>
  );
}

export default Post;