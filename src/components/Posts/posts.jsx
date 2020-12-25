import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Post from './post'
import './posts.css'
import axios from 'axios';
const Posts = (Props) => {
  const [fill, setFill] = useState(false);

  const [userInfo, setUserInfo] = useState({ posts: [{ id: 1, name: "لقاء", email: "leqaa@gmail.com", phoneNo: "078888888", img: "/images/4.png", rate: "4" }], fav: [] })
  const [posts, setPosts] = useState(userInfo.posts)
  const [fav, setFav] = useState([{ user_id: 0, post_id: 0 }])
  useEffect(() => {
    //console.log(Props.location.category_id  );
    axios.post("http://127.0.0.1:8000/api/Post/byCategory/" + Props.location.category_id, { user_id: localStorage.getItem("user_id") })
      .then(res => {
        console.log(res.data)
        setPosts(res.data.posts)
        setUserInfo(res.data)
        setFav(res.data.fav)
      })

  }, [])
  function filterByPrice() {

    setPosts(posts.filter((el) => el.price < 300))
  }
  function handleFillChange(postId) {
    setFav([...fav, {post_id:postId}])
    console.log("++++")
 
  }
  function deleteFav(postId){
    
    setFav(fav.filter((el) =>el.post_id != postId))
    console.log("-----")
    
  }
  return (
    <div className="postsCol" >
      <div>

        <button onClick={filterByPrice}>price</button>

        <button onClick={   ()=>console.log(fav)}>loggggggggggg</button>

        <button></button>
      </div>
      <div class="postsRow">
        {
          posts.map((info) =>
            <div>
              <Post value="Post" post_id={info.id}
                className="item" info={info}
                handleFillChange={handleFillChange}
                deleteFav={deleteFav}
                fill={fav.filter((el) => el.post_id == info.id).length > 0 ? true : false}
              />
            </div>
          )}
      </div>
    </div>
  )
}
export default Posts
