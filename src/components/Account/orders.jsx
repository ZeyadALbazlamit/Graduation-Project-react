import React, { useState, useEffect } from 'react'
import './order.css'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function Orders(Props) {

    const [posts, setPosts] = useState([{ id: 0, title: "", price: 4, main_img: "", count: "", submit: 0 }]);
   
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/cart/" + localStorage.getItem("user_id"))
            .then((res) => {
                console.log(res.data)
                setPosts(res.data.order)
            })
    }, [])
    /**   
     * 
     * 
     * 
     */
    function submitOrder(i,type){
     
        const data={
            type:type
        }
        setPosts(posts.filter((el,index)=>index !==i ))
        axios.put("http://127.0.0.1:8000/api/cart/" + posts[i].cartId,data)
            .then((res) => {
                console.log(res.data)
                if(type=="trashedSingleDelete"){
                    Swal.fire(
                        'عمل رائع !',
                        'تم انهاء الطلب بنجاح',
                        'success'
                      )  
                }
                else{
                    Swal.fire(
                        'عمل رائع !',
                        ' تم حزف طلب الزبون نهائيا',
                        'success'
                      )  
                }
            })
    }
    return (
        <div className="containerOrders">
                <div className="ordersContainer">
                <div className="switch">
                        <Link className="navLink" to="/OrdersHistory"> <button type="button" class="btn btn-link orderBtn" >تاريخ الطلبات </button></Link>
                        <span class="vl"></span>
                        <Link className="navLink" to="/Orders"> <button type="button" class="btn btn-link orderBtn" >الطلبات</button></Link>
                    </div>
                    <hr style={{width:'100%'}}/>
                {posts.map((el,index) =>
                     <div> 
                    
                    <div className="usreOrderInfo">
                        <Link to={{pathname:"/UserProfile",id:el.userId  }}  key={el.cartId}>
                            <img src={el.userImg} alt="" style={{borderRadius:"50%"}} />
                        </Link>
                        <h6>{el.userName} </h6>
                    </div>
                    <div className="orderPost">
                    <Link to={{ pathname: "/postDetails", post_id: el.id, isLoged: Props.isLoged }}>
                         <img src={el.main_img} alt="" />
                         </Link>

                       
                        <h6>{el.title}</h6>
                        <h6 class="mb-0">{el.price}</h6>
                        <div className="count">
                            <h6>العدد</h6>
                            <h5>{el.count}</h5>
                        </div>
                        <div className="orderSubmit">
                            <button type="button" class="btn btn-success"onClick={()=>submitOrder(index,'trashedSingleDelete')} ><FaCheck /></button>
                            <button type="button" class="btn btn-danger" onClick={()=>submitOrder(index,'forceSingleDelete')} ><RiDeleteBin5Line /> </button>
                        </div>
                    </div>
                    <hr style={{ width: '90%', marginTop: '40px' }}></hr>
                    
                     </div>
                     )}
                </div>
            
        </div>
    )
}

export default Orders
