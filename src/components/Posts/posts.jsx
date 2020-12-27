import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Post from './post'
import './posts.css'
import axios from 'axios';
const Posts = (Props) => {
  const [fill, setFill] = useState(false);
  const [pages, setPages] = useState([1, 2, 3, 4]);
  const [page, setPage] = useState(1);
  const [postCount, setPostCount] = useState(3);
  const [userInfo, setUserInfo] = useState({ posts: [{ id: 1, name: "لقاء", email: "leqaa@gmail.com", phoneNo: "078888888", img: "/images/4.png", rate: "4" }], fav: [], count: 0 })
  const [posts, setPosts] = useState(userInfo.posts)
  const [fav, setFav] = useState([{ user_id: 0, post_id: 0 }])
  function catId(p, c) {
    axios.post("http://127.0.0.1:8000/api/Post/byCategory/" + Props.location.category_id, { user_id: localStorage.getItem("user_id"), page: p, count: c ,order_by:"price"})
      .then(res => {
        console.log(res.data)
        setPosts(res.data.posts)
        setUserInfo(res.data)
        setFav(res.data.fav)
      })
  }
  
  function searchByText(p, c){
    axios.post("http://127.0.0.1:8000/api/Post/search", { type: Props.location.type,text: Props.location.text ,user_id: localStorage.getItem("user_id"), page: p, count: c ,order_by:"price"})
    .then(res => {
      console.log(res.data)
      setPosts(res.data.posts)
      setUserInfo(res.data)
      setFav(res.data.fav)
    })

    
  }
  function postsType(p, c) {
    axios.post("http://127.0.0.1:8000/api/Post/search", { type: Props.location.type, user_id: localStorage.getItem("user_id"), page: p, count: c ,order_by:"price_desc"})
      .then(res => {
        console.log(res.data)
        setPosts(res.data.posts)
        setUserInfo(res.data)
        setFav(res.data.fav)
      })

  }
  useEffect(() => {
    //console.log(Props.location.category_id  );
    console.log(Props.location)
    if (Props.location.hasOwnProperty("category_id"))
      catId(page, postCount)
    else
      if (Props.location.hasOwnProperty("type"))
        
      if(Props.location.hasOwnProperty("text"))
       searchByText(page,postCount)
        else
         postsType(1, postCount)



    let arr = [];
    for (let i = 1; i <= Math.ceil(userInfo.count / postCount); i++)
      arr[i] = i;
  
      console.log(arr)
      setPages(arr);



    console.log("fin")

  }, [Props.location])

  function filterByPrice() {

    setPosts(posts.filter((el) => el.price < 300))
  }
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
    if (Props.location.hasOwnProperty("category_id"))
      catId(p, postCount)
    else
      if (Props.location.hasOwnProperty("type"))
        postsType(p, postCount)

  }
  function goToNextPage() {
    if (page != pages[pages.length - 1]) {

      if (Props.location.hasOwnProperty("category_id"))
        catId(page + 1, postCount)
      else
        if (Props.location.hasOwnProperty("type"))
          postsType(page + 1, postCount)


      setPage(page + 1)
    } else {
      console.log("this is last page")
    }
  }

  function goToPreviousPage() {
    if (page != 1) {

      if (Props.location.hasOwnProperty("category_id"))
        catId(page - 1, postCount)
      else
        if (Props.location.hasOwnProperty("type"))
          postsType(page - 1, postCount)

      setPage(page - 1)
    } else {
      console.log("this is first page")
    }
  }
  function handlePostCount(c) {
    console.log(c)
    setPostCount(c)
    if (Props.location.hasOwnProperty("category_id"))
      catId(page, c)
    else
      if (Props.location.hasOwnProperty("type"))
        postsType(page, c)
    let arr = [];
    for (let i = 1; i <= Math.ceil(userInfo.count / postCount); i++)
      arr[i] = i;
    setPages(arr);
  }
  return (
    <div className="postsCol" >
      <div>
        <input type="number" placeholder={postCount} onChange={(e) => handlePostCount(e.target.value)} />
        <button onClick={filterByPrice}>price</button>

        <button onClick={() => console.log(fav)}>loggggggggggg</button>

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
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class="page-item active "
            class="page-link" tabindex="-1" onClick={goToPreviousPage}>Previous
          </li>
          {
            pages.map((index) =>
              <li class={index == page ? ' page-item page-link  bg-warning text-white' : 'page-item page-link'} onClick={(e) => goToPage(e.target.value)} value={index}> {index}</li>
            )

          }

          <li class="page-item page-link" onClick={goToNextPage} >Next</li>
        </ul>
      </nav>
    </div>
  )
}
export default Posts
