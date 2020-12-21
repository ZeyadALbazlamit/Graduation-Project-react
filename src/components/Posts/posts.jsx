import React ,{useEffect, useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Post from './post' 
import './posts.css'
import axios from 'axios';

const Posts = (Props) => {
  const [userInfo , setUserInfo] = useState([{id:1 ,name :"لقاء" ,email : "leqaa@gmail.com" ,phoneNo : "078888888",img : "/images/4.png" ,rate : "4" }])
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/Post"   )
    .then(res => {
      console.log(res.data);
      setUserInfo(res.data)
    }).catch(function(error) {
      console.log(error);
    })

},[])

    return (
        <div  className="postsCol" >
          <div class="postsRow">
                {
                userInfo.map((info)=>
                <div>
                <Post value="Post" post_id={info.id}  className="item" info={info} />
                </div>
                  )}
          </div>
        </div>
    )
}

export default Posts
