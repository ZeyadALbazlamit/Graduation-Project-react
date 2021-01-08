import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Post from './post'
import './posts.css'
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';

import Filterbox from './filterbox'
import SubCatFilter from './subCatFilter'
const Posts = (Props) => {
  const [fill, setFill] = useState(false);
  const [pages, setPages] = useState([1, 2, 3, 4]);
  const [page, setPage] = useState(1);
  const [postCount, setPostCount] = useState(5);
  const [userInfo, setUserInfo] = useState({ posts: [{ id: 1, name: "لقاء", email: "leqaa@gmail.com", phoneNo: "078888888", img: "/images/4.png", rate: "4" }], fav: [], count: 0 })
  const [posts, setPosts] = useState(userInfo.posts)
  const [fav, setFav] = useState([{ user_id: 0, post_id: 0 }])
  const [orderBy, setOrderBy] = useState("id desc");
  const [location, setLocation] = useState("is not null");
  function handleOrderChange(type) {
    console.log("type=>" + type);
     setOrderBy(type);
    console.log("orderBy=>" + orderBy);
  }
  function handleLocationChange(loc) {
    console.log("location=>" + loc);
    setLocation(loc)


  }
  function catId(p, c) {
    axios.post("http://127.0.0.1:8000/api/Post/byCategory/" + Props.location.category_id, { user_id: localStorage.getItem("user_id"), page: p, count: c, order_by: orderBy,location:location })
      .then(res => {
        console.log(res.data)
        setPosts(res.data.posts)
        setUserInfo(res.data)
        setFav(res.data.fav)

        let arr = [];
        for (let i = 1; i <= Math.ceil(res.data.count / postCount); i++)
          arr[i] = i;
        setPages(arr);
    
      })
  }

  function searchByText(p, c) {
    axios.post("http://127.0.0.1:8000/api/Post/search", { type: Props.location.type, text: Props.location.text, user_id: localStorage.getItem("user_id"), page: p, count: c, order_by: orderBy,location:location })
      .then(res => {
        console.log(res.data)
        setPosts(res.data.posts)
        setUserInfo(res.data)
        setFav(res.data.fav)
      
      
        let arr = [];
        for (let i = 1; i <= Math.ceil(res.data.count / postCount); i++)
          arr[i] = i;
        setPages(arr);
    
      })


  }
  function postsType(p, c) {
    axios.post("http://127.0.0.1:8000/api/Post/search", { type: Props.location.type, user_id: localStorage.getItem("user_id"), page: p, count: c, order_by: orderBy,location:location })
      .then(res => {
        console.log(res.data)
        setPosts(res.data.posts)
        setUserInfo(res.data)
        setFav(res.data.fav)
    
        let arr = [];
        for (let i = 1; i <= Math.ceil(res.data.count / postCount); i++)
          arr[i] = i;
        setPages(arr);
    
      })

  }
  useEffect(() => {
    console.log(Props)
  
    
    if (Props.location.hasOwnProperty("category_id"))
      catId(page, postCount)
    else
      if (Props.location.hasOwnProperty("type"))

        if (Props.location.hasOwnProperty("text"))
          searchByText(page, postCount)
        else
          postsType(page, postCount)
    

  }, [Props.location,orderBy,location,page,postCount])

  function handleFillChange(postId) {
    setFav([...fav, { post_id: postId }])
    console.log("++++")
  }
  function deleteFav(postId) {

    setFav(fav.filter((el) => el.post_id != postId))
    console.log("-----")

  }
  function goToPage(p) {
    console.log(p)
    setPage(p)

  }
  function goToNextPage() {
    if (page != pages[pages.length - 1]) {
      setPage(page+1);
    } else {
      console.log("this is last page")
    }
  }

  function goToPreviousPage() {
    if (page != 1) {       setPage(page-1);

    } else {
      console.log("this is first page")
    }
  }
  function handlePostCount(c) {
    console.log(c)
    setPostCount(c)

  }
  return (
    <div className="postsCol " >
      <Filterbox handleOrderChange={handleOrderChange} handleLocationChange={handleLocationChange}  handlePostCount={handlePostCount}postCount={postCount} />
     
      <div class="postsRow">
        {
          posts.map((info) =>
            <div>
               <Zoom bottom big>
              <Post value="Post" post_id={info.id}
              isLoged={Props.location.isLoged}
                className="item" info={info}
                handleFillChange={handleFillChange}
                deleteFav={deleteFav}
                fill={fav.filter((el) => el.post_id == info.id).length > 0 ? true : false}
              /></Zoom>
            </div>
          )}
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center" style={{marginTop:"200px"}}>
          <li class="page-item active "
            class="page-link text-warning " tabindex="-1" onClick={goToPreviousPage}>Previous
          </li>
          {
            pages.map((index) =>
              <li class={index == page ? ' page-item page-link  bg-warning text-white' : 'page-item page-link text-warning  '} onClick={(e) => goToPage(e.target.value)} value={index}> {index}</li>
            )
          }
          <li class="page-item page-link text-warning " onClick={goToNextPage} >Next</li>
        </ul>
      </nav>
    </div>
  )
}
export default Posts
