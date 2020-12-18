import React ,{useEffect, useState} from 'react'
import './posts.css'
import {FaAngleRight ,FaAngleLeft} from 'react-icons/fa'
import {IoMdChatbubbles} from 'react-icons/io'
import Post from './post'
import axios from 'axios';
import Comment from "../comment/comment"
import { BsPersonPlusFill } from 'react-icons/bs'

const PostDetails = (Props) => {
    const [postInfo , setPostInfo] = useState({post:{id:0} ,image :[{img:""}] ,comment:[]}  )
  useEffect(()=>{
  console.log(Props.location.post_id);
    axios.get("http://127.0.0.1:8000/api/Post/"+Props.location.post_id   )
    .then(res => {
      console.log(res.data)
      setPostInfo(res.data)
     // console.log(Props.location.post_id);

    }).catch(function(error) {
      console.log(error);
    })

},[])
   
    return (
    <div>
        <div>
            <div class="containerPostDetails">
                <h2 className="p">اسم الإعلان</h2>
             
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={postInfo.image[0].img} class="d-block w-100" alt="..."/>
    </div>
    {postInfo.image?postInfo.image.map((el)=>
       <div class="carousel-item">
                     <img src={el.img} class="d-block w-100" alt="fg"/>
       </div>
     )  :" "  }
  
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
                        <h4 className="p" >التفاصيل</h4>
                    </div>
                    <div>
                        <h4 className="p">وصف الاعلان</h4>
                    </div>
                    <div>
                </div>
            </div>
            <div class="containerUserInfo" >
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="60"/>
                <span className="Info">
                <p>الأسم :  </p>
                <p class="text-secondary mb-1"> : الايميل  </p>
                <p class="text-muted font-size-sm"> : رقم الهاتف</p>
                <button className="btn btn-outline-dark text-right pull-right " > ارسل رسالة <IoMdChatbubbles /></button>
                </span>
            </div>
        </div>
        <div>  
        </div>
        <div>   


        </div>
{postInfo.post.id !="0"?
<Comment  post_id={postInfo.post.id}/>
:""
}
 </div>
    )
}

export default PostDetails
