import React ,{useEffect, useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Post from './post' 
import './posts.css'
import axios from 'axios';

const Posts = () => {
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
        <div>
          <div class="bar">

          {
          userInfo.map((info)=><Link class="col-xs-12 col-sm-6 col-md-6 col-lg-4"  to={{pathname:"/postDetails" ,post_id:info.id}} ><Post value="Post"   info={info} /> </Link>
         )}

          </div>
        </div>
    )
}

export default Posts
