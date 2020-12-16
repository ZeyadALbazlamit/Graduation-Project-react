import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Post from './post' 
import './posts.css'

const Posts = () => {
    return (
        <div>
          <div class="bar">
            <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4" to="/postDetails" ><Post value="Post" /> </Link>
            <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4"><Post value=" Post" /></Link>
            <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4" ><Post value="Post" /> </Link>
        
            <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4" ><Post value="Post" /> </Link>
            <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4"><Post value=" Post" /></Link>
            <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4" ><Post value="Post" /> </Link>
          
            <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4" ><Post value="Post" /> </Link>
            <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4"><Post value=" Post" /></Link>
            <Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4" ><Post value="Post" /> </Link>
          </div>
        </div>
    )
}

export default Posts
