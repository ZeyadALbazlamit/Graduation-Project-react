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
const [rate,setRate]=useState(0);  
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
          <img src={profileData.user.img ? profileData.user.img : "data:image/png;base64,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"}
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
    {rate !==0?
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
