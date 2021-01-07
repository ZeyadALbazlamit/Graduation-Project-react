import React, { useEffect, useState } from 'react'
import './companies.css'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { RiMessage2Line } from 'react-icons/ri'
import axios from "axios"
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import ReactStars from "react-rating-stars-component"
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom';


function Company(Props) {
    const [userInfo, setUserInfo] = useState({ posts: [{ id: 1, name: "لقاء", email: "leqaa@gmail.com", phoneNo: "078888888", img: "/images/4.png", rate: "4" }], fav: [], count: 0 })
    const [fav, setFav] = useState([{ user_id: 0, post_id: 0 }])
    const [rate, setRate] = useState(0);
    const history = useHistory();
	function  goTo(path){
   
	history.push(path);
	}
    useEffect(() => {
        axios.post("http://127.0.0.1:8000/api/Post/search", { type: "company", user_id: localStorage.getItem("user_id"), com_id: Props.location.com_id })
            .then(res => {
                console.log(res.data)
                setUserInfo(res.data)
                setFav(res.data.fav)
            })

    }, [])
    useEffect(()=>{
        const id =Props.location.com_id;
    
        axios.get("http://127.0.0.1:8000/api/rate/" +id).
        then((res) => {
            console.log(res.data)
            setRate(res.data.rate)
          })
    
      },[])
    const ratingChanged = (newRating) => {
        console.log(newRating);
        const id = localStorage.getItem('user_id');

        axios.post("http://127.0.0.1:8000/api/rate", { rate: newRating, rater: id, user_id: Props.location.com_id })

            .then((res) => {
                console.log(res.data);
                setRate(res.data.rate.rate)
                Swal.fire(
                    'عمل رائع !',
                    'تم التقييم بنجاح',
                    'success'
                  )
                  goTo("/index")
                  
            })

    };

    function handleFillChange(postId) {
        setFav([...fav, { post_id: postId }])
        console.log("++++")
    }
    function deleteFav(postId) {

        setFav(fav.filter((el) => el.post_id != postId))
        console.log("-----")

    }
    function Fav(post_id) {
        const d = post_id;
        axios.post("http://127.0.0.1:8000/api/favorite", { user_id: localStorage.getItem("user_id"), post_id: post_id }).then((res) => {
            console.log(res.data);
            if (res.data == 'deleted')
                deleteFav(d)
            else
                handleFillChange(res.data.post_id)
        })
    }
    function addToCart(info) {
        console.log(info)
        const data = {
            user_id: localStorage.getItem("user_id"),
            post_id: info.id,
            submit: false
        }
        axios.post("http://127.0.0.1:8000/api/cart", data)
        .then((res) =>{console.log(res)
            Swal.fire(
                'عمل رائع !',
                'تم اضافة المنتج',
                'success'
              )
        
        })

    }
    return (
        <div className="companyDetailsContainer1">
            <div className="companyDetailsContainer2">
                <div className="companyDetailsInfo">
                    <div className="companyDetailsInfo1">
                   < Link to={{pathname:"/UserProfile",id:Props.location.id }}>  <img src={Props.location.img} />
                        </Link>
                        <h6>{Props.location.name} </h6>
                      {
                        rate !=0 ?  <ReactStars
                            count={10}
                            onChange={ratingChanged}
                            value={rate}
                            size={20}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ff9642"
                        />:""
                      }
                    </div>
                    <div className="companyDetailsInfo2">
                        <img src="/images/4.png" />
                    </div>
                </div>
                <div className="CompanyPostsContainer">
                    {userInfo.posts.map((info) => <Fade bottom>
                        <div className="companyPosts">
                            <Link to={{ pathname: "/postDetails", post_id: info.id, isLoged: Props.location.isLoged }} key={info.id}>
                                <img src={info.main_img} />
                            </Link>
                            <div className="companyPostInfo">
                                <h6>{info.title}</h6>
                                <div className="companyPostInfo2">
                                    <p class="mb-0"> الموقع  </p>
                                    <p class="mb-0">القسم </p>
                                </div>

                                <div className="companyPostInfo3">
                                    <button type="button" class="btn btn-outline-secondary" onClick={() => Fav(info.id)}>
                                        {fav.filter((el) => el.post_id == info.id).length > 0 ? "ازاله من المفضل" : "أضف للمفضلة"}
                                        <AiOutlineHeart />
                                    </button>
                                    <button type="button" class="btn btn-outline-secondary" onClick={() => addToCart(info)} >أضف للسلة<AiOutlineShoppingCart /></button>
                                    <button type="button" class="btn btn-outline-secondary">أرسل رسالة<RiMessage2Line /></button>
                                </div>
                            </div>

                        </div>

                    </Fade>)}

                </div>
            </div>
        </div>
    )
}

export default Company
