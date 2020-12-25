import React, { useState, useEffect } from 'react'
import './posts.css'
import { IoMdChatbubbles } from 'react-icons/io'
import axios from 'axios';
import Comment from "../comment/comment"
import { Link } from "react-router-dom";

const PostDetails = (Props) => {
  const [userInfo, setUserInfo] = useState(
    { id: 1, name: "لقاء", email: "leqaa@gmail.com", phoneNo: "078888888", img: "/images/4.png", rate: "4" })
  const [postInfo, setPostInfo] = useState({ post: { id: 0, pro: {}, Sub_Category_name: "", location: "", price: 0, title: "" }, image: [{ img: "" }], comment: [], user: { img: "", name: "", phone_number: "" } })
  useEffect(() => {
    console.log(Props.location.post_id);
    axios.get("http://127.0.0.1:8000/api/Post/" + Props.location.post_id)
      .then(res => {
        console.log(res.data)
        setPostInfo(res.data)
        // console.log(Props.location.post_id);

      }).catch(function (error) {
        console.log(error);
      })

  }, [])

  return (
    <div>
      <div class="containerPostDetails">
        <div class="containerDetails">
          <h2 className="p">اسم الإعلان</h2>

          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={postInfo.image[0].img} class="d-block w-100" alt="..." />
              </div>
              {postInfo.image ? postInfo.image.map((el) =>
                <div class="carousel-item">
                  <img src={el.img} class="d-block w-100" alt="fg" />
                </div>
              ) : " "}

            </div>

            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
          <div className="dynamicDetails">
            {
              Object.entries(postInfo.post.pro).map((el) => <h1>{el[0]} :{el[1]}</h1>)
            }

          </div>
          <div className="description">
            <label>المدينة :{postInfo.post.location}</label>
            <label>القسم الفرعي  : {postInfo.post.Sub_Category_name}</label>
            <label>الاسم  : {postInfo.post.title}</label>
            <label>الوصف :{postInfo.post.Description} </label>
          </div>
          <div>
          </div>
        </div>
        <div class="containerUserInfo" >
<Link  to={{pathname:"/UserProfile" ,id:postInfo.user.id }}>
          <img src={postInfo.user.img} alt="Admin" class="rounded-circle" width="70" height="70" />
          </Link>
          <span className="Info">
            <p>الأسم : {postInfo.user.name} </p>
            <p class="text-muted font-size-sm">{postInfo.user.phone_number} : رقم الهاتف</p>

          </span>
        </div>
      </div>
      <div>
        {postInfo.post.id != "0" ? <Comment post_id={postInfo.post.id} /> : ""}
      </div>
    </div>
  )
}

export default PostDetails
