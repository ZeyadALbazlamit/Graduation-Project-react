import React, { useEffect, useState } from 'react'
import './order.css'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import axios from 'axios';

function OrdersHistory(Props) {

    const [posts, setPosts] = useState([{ id: 0, title: "", price: 4, main_img: "", count: "", submit: 0 }]);
   
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/cart/" + localStorage.getItem("user_id"))
            .then((res) => {
                console.log(res.data)
                setPosts(res.data.history)
                // setTotCount(comuteTotalPrice(res.data))
            })
    }, [])
    function submitOrder(i,type){
     
        const data={
            type:type
        }
        setPosts(posts.filter((el,index)=>index !==i ))
        axios.put("http://127.0.0.1:8000/api/cart/" + posts[i].cartId,data)
            .then((res) => {
                console.log(res.data)
            })
    }
    return (
        <div className="containerOrders">
            <div className="ordersContainer">
                <div className="switch">
                    <Link className="navLink" to="/OrdersHistory"> <button type="button" class="btn btn-link orderBtn" >تاريخ الطلبات </button></Link>
                    <span class="vl"></span>
                    <Link className="navLink" to="/Order"> <button type="button" class="btn btn-link orderBtn" >الطلبات</button></Link>
                </div>
                <hr style={{width:'100%'}}/>
                {posts.map((el,index) =>
                    <>
                        <div className="orderPost">
                            <Link to={{ pathname: "/postDetails", post_id: el.id, isLoged: Props.isLoged }}>
                                <img src={el.main_img} alt=" " />
                            </Link>
                            <h6>{el.title}</h6>
                            <h6 class="mb-0">{el.price}</h6>
                            <div className="count">
                                <h6>العدد</h6>
                                <h5>{el.count}</h5>
                            </div>
                            <div className="orderSubmit">
                                <button type="button" class="btn btn-danger" onClick={()=>submitOrder(index,'forceSingleDelete')} ><RiDeleteBin5Line /> </button>
                            </div>
                        </div>
                        <hr style={{ width: '80%',  }}></hr>
                    </>
                )}
            </div>
        </div>
    )
}

export default OrdersHistory
