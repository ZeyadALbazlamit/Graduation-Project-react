import React, { useEffect, useState } from 'react';
import './profile.css';
import axios from 'axios';
import UserPosts from "./UserPost";
import { MdAddAPhoto } from 'react-icons/md'
import ReactStars from "react-rating-stars-component";
import { FaEdit } from 'react-icons/fa'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom';
import {img} from "../img"

/*
function editRate(e) {
    axios.put("http://127.0.0.1:8000/api/User/" + localStorage.getItem("user_id"), { rate: e.target.value }).then((res) => {
        console.log(res.data);
    })

}*/
const Profile = (Props) => {
  const [fav, setFav] = useState([{ user_id: 0, post_id: 0 }])

  const { register, handleSubmit } = useForm();
  const history = useHistory();
	function  goTo(path){
   
	history.push(path);
	}
const [rate,setRate]=useState(-1);  
  const [postKind, setKindPost] = useState(true);
  const [profileData, setProfileData] = useState({ user: "", post: [{}], favorite: [{}] });
  const [refresh,setrefresh]=useState(0);
  useEffect(() => {
    console.log(Props)
    console.log("user->"+localStorage.getItem('user_id'))
    const id =Props.location.pathname ==="/UserProfile" ? Props.location.id:localStorage.getItem('user_id')
      axios.get("http://127.0.0.1:8000/api/User/" + id).then((res) => {
              console.log(res.data)
              setProfileData(res.data)
            })
  }, [refresh]
  )
  useEffect(()=>{
    const id =Props.location.pathname ==="/UserProfile" ? Props.location.id:localStorage.getItem('user_id')

    axios.get("http://127.0.0.1:8000/api/rate/" +id).then((res) => {
        console.log(res.data)
        setRate(res.data.rate)
      })
    

  },[])
  
  function Submit(data){
    console.log(data);
    console.log(8976867)
  axios.put('http://127.0.0.1:8000/api/User/'+profileData.user.id, data)
   .then((res)=>{
console.log(res)
let p=profileData;
p.user=res.data;
setProfileData(p)
   localStorage["name"]=res.data.name;
   setrefresh(refresh+1)
   localStorage.setItem("user_id", res.data.id);
   localStorage.setItem("user_name", res.data.name);
   localStorage.setItem("user_type", res.data.type);
   //Props.setType(res.data.type)

   //Props.setIsLoged(true);
  
   Swal.fire(
    'عمل رائع !',
    'تم التعديل بنجاح',
    'success'
  )  
  window.location.reload(true);

  })
   
  }
function convertImage(F) {
      Array.from(F).forEach((f) => {
          let fr = new FileReader();
          fr.readAsDataURL(f);
          fr.onload = function () {
              // console.log(fr.result);
              axios.put("http://127.0.0.1:8000/api/User/" + localStorage.getItem("user_id"), { img: fr.result }).
                  then((res) => {
                      console.log(res.data)
                      setProfileData({ post: profileData.post, favorite: profileData.favorite, user: res.data });
                      localStorage.setItem("user_img", fr.result);
                      localStorage["user_img"]=fr.result;


                      window.location.reload(true);


                  })
          }
      })
  }
  const ratingChanged = (newRating) => {
    console.log(newRating);
    if(localStorage.getItem("user_id")!=="0"){

     
      const id =Props.location.pathname ==="/UserProfile" ? Props.location.id:localStorage.getItem('user_id')
      console.log(Props.location.pathname)
      console.log('rater->'+Props.location.id )
      console.log('login user->'+ localStorage.getItem('user_id'))

    axios.post("http://127.0.0.1:8000/api/rate", { rate: newRating,rater: localStorage.getItem('user_id'),user_id:Props.location.id})
    
    .then((res) => {
      console.log(res.data);
      setRate(res.data.rate.rate)
      Swal.fire(
        'عمل رائع !',
        'تم التقييم  بنجاح',
        'success'
      )  
      goTo('/index')
    })
    }
    else{
      Swal.fire({
        icon: 'error',
        title: "هل تملك حساب " ,
        text: 'عليك تسجيل الدخول لتتمكن من التقييم',
        
      })


    }
  };
   
  return (
    <div>
    <div className="profileContainer">
      <div className="userInfo">
        <div className="uploadImg" >
          <img src={profileData.user.img ? profileData.user.img :img}
alt="Admin"  style={{borderRadius:"50%" ,width:"150px",height:"150px"}}/>
         
          
          {localStorage.getItem("user_id") ==profileData.user.id ?<>
              <MdAddAPhoto className="addImage " /> 
                      <input type="file" name="image" className="imgInput " onChange={(e) =>convertImage(e.target.files)} />
                      </>
                      : ""

                    }
        </div>
        <div class="mt-3">
        <h4> {profileData.user.name}  الأسم </h4>
        <p class="text-muted font-size-sm">{profileData.user.phone_number} : رقم الهاتف</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
          <h6 class="mb-0">{profileData.post.length}</h6>
          <span class="text-secondary " onClick={() => setKindPost(true)}>اللإعلانات</span>            </li>
         { Props.location.pathname !=="/UserProfile" ? 
            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <h6 class="mb-0">{profileData.favorite.length} </h6>
                  <span class="text-secondary cursor" onClick={() => setKindPost(false)}>المفضله</span>
            </li>
            :" "
}

     <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
    {rate !==-1?
    <ReactStars
    count={10}
    onChange={ratingChanged}
    value={rate}
    size={30}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ff9642"
  />
    :""}
           
             <span class="text-secondary">التقييم</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            { Props.location.pathname !=="/UserProfile" ? 
             <button type="button" class="btn btn-warning text-white"  data-toggle="modal" data-target="#exampleModalCenter">
             تعديل الملف الشخصي <FaEdit/>
             </button>:"" }
             

              <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div className="tableDiv">
                        <form  onSubmit={handleSubmit(Submit)}>
                          <div className="select-items">
                            <div ClassName="Row">
                                <div>
                                  <label  className="label1 label2" > الأسم</label>
                                  <input className="addPostInput input2"defaultValue={profileData.user.name} placeholder={profileData.user.name } name="name"  ref={register}/>
                                </div>
                                <div>
                                  <label  className="label1 label2" > رقم الهاتف</label>
                                  <input  type="number" className="addPostInput input2" defaultValue={profileData.user.phone_number}
                                   placeholder={profileData.user.phone_number}name="phone_number"  ref={register} />
                                </div>
                                <div>
                                  <label  className="label1 label2" > الأيميل</label>
                                  <input className="addPostInput input2"placeholder={profileData.user.email} defaultValue={profileData.user.email}name="email"  ref={register} />
                                </div>
                                <div>
                                  <label className="label1 label2" > المدينة</label>
                                  <select name="location" className="input2" defaultValue={profileData.user.location}  ref={register} >
                                  <option >{profileData.user.location}</option>
                                    <option >عمان</option>
                                    <option >اربد</option>
                                    <option >الزرقاء</option>
                                    <option >عجلون</option>
                                    <option >جرش</option>
                                    <option >المفرق</option>
                                    <option >مادبا</option>
                                    <option >السلط</option>
                                    <option >الكرك</option>
                                    <option >الطفيلة</option>
                                    <option >معان</option>
                                    <option >العقبة</option>
                                  </select>  
                                </div>
                                <div>
                                  <label className="label1 label2" > نوع الحساب</label>
                                  <select name="type" className="input2"  defaultValue={profileData.user.type} ref={register} >
                                  <option value={profileData.user.type}>{ profileData.user.type =="company" ?"متجر":"شخصي"  }</option>
                                    <option value={"user"}>شخصي</option>
                                    <option value={"company"} >متجر</option>
                                  </select>  
                                </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">الغاء</button>
                  <input type="submit" class="btn btn-warning text-white" value="حفظ"/>             
                    </div>
                        </form>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </li>
        </ul>
      </div>
      <div className="userPostContainer">
      {postKind ? profileData.post.map((info) => <UserPosts key={info.id} info={info}  isLoged={ Props.location.isLoged}/>) :
                   profileData.favorite.map((info) => <UserPosts key={info.id} info={info} isLoged={ Props.location.isLoged} />)}
      </div>
    </div>
  </div>
    )
}

export default Profile;
