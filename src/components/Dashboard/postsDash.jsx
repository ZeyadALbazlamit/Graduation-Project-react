import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PostDash from './postDash'
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';
import Filterbox from './filterbox'
const PostsDash = (Props) => {
  

  return (
    <div className="postsCol " >
     
      <div class="postsRow">  
      <PostDash value="Post" 
              isLoged={Props.location.isLoged}
                className="item" 
              />        
      </div>
    </div>
  )
}
export default PostsDash
