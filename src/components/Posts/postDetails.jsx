import React, { useState, useEffect } from 'react'
import './posts.css'
//import { IoMdChatbubbles } from 'react-icons/io'
import axios from 'axios';
import Comment from "../comment/comment"
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'

const PostDetails = (Props) => {
  const history = useHistory();
  console.log("render postDetails")
  console.log(Props)
  function goTo(path) {

    history.push(path);
  }
  if (!Props.location.post_id) goTo('/index');
const [report,setReport]=useState("");
  const [userInfo, setUserInfo] = useState(
    { id: -1, name: "زياد", email: "zeyad@gmail.com", phoneNo: "078888888", img: "/images/4.png", rate: "4" })
  const [postInfo, setPostInfo] = useState({ post: { id: 0, pro: {}, Sub_Category_name: "", location: "", price: 0, title: "" }, image: [{ img: "" }], comment: [], user: { img: "", name: "", phone_number: "" } })
  useEffect(() => {
    console.log(Props.location.post_id);
    axios.get("http://127.0.0.1:8000/api/Post/" + Props.location.post_id)
      .then(res => {
        console.log(res.data)
        setPostInfo(res.data)
        if (localStorage.getItem('user_id')) {
          axios.post("http://127.0.0.1:8000/api/intrests", { user_id: localStorage.getItem("user_id"), category_id: res.data.post.category_id })
            .then((res) => console.log(res))
        }
      })
  }, [])

  function sendReport(){

    axios.post("http://127.0.0.1:8000/api/report", { user_id: localStorage.getItem("user_id"), post_id:postInfo.post.id,report:report  })
    .then((res) =>{
      console.log(res)
      Swal.fire(
        'Good job!',
        'تم ارسال بلاغك سوف يقوم فريق العمل بنظر به',
        'success'
      )
    } )
  }
  return (

    <div class="containerPostDetails">

      <div class="containerUserInfo" >
        <Link to={{ pathname: "/UserProfile", id: postInfo.user.id, isLoged: Props.location.isLoged }}>
          <img src={postInfo.user.img} alt="Admin" class="rounded-circle" width="70" height="70" />
        </Link>
        <span className="Info">
          <p>الأسم : {postInfo.user.name} </p>
          <p class="text-muted font-size-sm">{postInfo.user.phone_number} : رقم الهاتف</p>

        </span>
      </div>

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

        <div className="description" style={{ display: "inline" }} >
          {
            Object.entries(postInfo.post.pro).map((el) => <p>{el[0]} :{el[1]}</p>)
          }

        </div>
        <div className="description" >
          <label>العنوان  : {postInfo.post.title}</label>
          <label>القسم الفرعي  : {postInfo.post.Sub_Category_name}</label>
          <label>المدينة :{postInfo.post.location}</label>
          <label>الوصف :{postInfo.post.Description} </label>
          <div>
            <p>
              <button class="btn btn-danger" style={{ borderRadius: "20%" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                بلاغ
  </button>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="form-floating">
                <div style={{display:"flex"}}>
                <textarea  onChange={(e)=>setReport(e.target.value)} class="form-control"  placeholder="... زودنا بالبلاغ  الموجه للشخص او للاعلان " id="floatingTextarea">

                </textarea>
                <button className="btn btn-success" onClick={()=>sendReport()}>
                  ارسال
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {
        <Comment key={postInfo.post.id} isLoged={Props.location.isLoged} post_id={postInfo.post.id} postOwner={postInfo.user.id} />
      }

    </div>

  )
}

export default PostDetails
