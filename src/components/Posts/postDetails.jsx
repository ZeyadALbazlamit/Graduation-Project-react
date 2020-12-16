import React ,{useEffect, useState} from 'react'
import './posts.css'
import {FaAngleRight ,FaAngleLeft} from 'react-icons/fa'
import {IoMdChatbubbles} from 'react-icons/io'
import Post from './post'

const PostDetails = (Props) => {
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
        <div>
            <div class="containerPostDetails">
                <h2 className="p">اسم الإعلان</h2>
                <div id="carousel-example-2" class="carousel slide carousel-fade z-depth-1-half" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-2" data-slide-to="1"></li>
                        <li data-target="#carousel-example-2" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <div class="view">
                                <img class="d-block w-100" src="/images/4.png" alt="First slide"/>
                                <div class="mask rgba-black-light"></div>
                            </div>
                            <div class="carousel-caption"></div>
                        </div>
                        <div class="carousel-item">
                            <div class="view">
                                <img class="d-block w-100" src="/images/6.png" alt="Second slide"/>
                                <div class="mask rgba-black-light"></div>
                            </div>
                            <div class="carousel-caption"></div>
                        </div>
                        <div class="carousel-item">
                            <div class="view">
                                <img class="d-block w-100" src="/images/4.png" alt="Third slide"/>
                                <div class="mask rgba-black-light"></div>
                            </div>
                                <div class="carousel-caption"></div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
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
    </div>
    )
}

export default PostDetails
