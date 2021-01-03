import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './cart.css'
import axios from 'axios';
function Cart(Props) {
    const [posts,setPosts]=useState([{id:0,title:"",price:0,main_img:""}]);
    useEffect(()=>{
axios.get("http://127.0.0.1:8000/api/cart/"+localStorage.getItem("user_id"))
.then((res)=>{console.log(res.data)
    setPosts(res.data)
}
)

    },[])
    function handleSubmit(e){
console.log(e)

    }
    
    function handleDelete(e){
        console.log(e)
        axios.delete("http://127.0.0.1:8000/api/cart/"+e)
            .then((res)=>{console.log(res.data)
    setPosts(res.data)
}
)
        //api/cart/{cart}
            }
    return (
        <div className="containerCom">
            <div className="companiesContainer">
              

                {posts.map((el)=>
                <div className="companyPosts cartPost">
                <Link  to={{ pathname: "/postDetails", post_id: el.id ,isLoged:Props.isLoged}} key={el.cartId}>
                    <img src={el.main_img} />
                    </Link>
                       <div className="companyPostInfo">
                    <h6>{el.title}</h6>
                    <div className="companyPostInfo2">
                        <h6 class="mb-0"> {el.price * el.count}  </h6>
                    </div>
                    <div className="companyPostInfo3">
                    <button type="button" class="btn btn-success" onClick={()=>handleSubmit(el.id)}>تأكيد الطلب</button>
                    <button type="button" class="btn btn-danger" onClick={()=>handleDelete(el.id)}>حذف</button>
                    </div>
                </div>
            </div>    
                )}
                
                <div className="submit">
                    <button type="button" class="btn btn-success">تأكيد الكل</button>
                    <button type="button" class="btn btn-danger">حذف الكل</button>
                </div> 
            </div>
        </div>
    )
}

export default Cart
