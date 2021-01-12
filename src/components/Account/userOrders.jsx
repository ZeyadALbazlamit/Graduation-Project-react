import React,{ useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './cart.css'
import axios from 'axios'

function UserOrder(Props) {

    const [posts, setPosts] = useState([{ id: 0, title: "", price: 4, main_img: "", count: "" ,submit:0}]);
    const [totCount, setTotCount] = useState(0);
    function comuteTotalPrice(data) {
        let total = 0;
        data.map((el) => total = total + el.price * el.count)
        console.log("total->>" + total)
        return total;
    }
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/cart/" + localStorage.getItem("user_id"))
            .then((res) => {
                console.log(res.data)
                setPosts(res.data.history)
                setTotCount(comuteTotalPrice(res.data.history))
            })



    }, [])

    return (
        <div className="containerCart">
            <div className="cartsContainer">
                <div className="switch" >
                    <Link className="navLink" to={{pathname:"/UserOrder",isLoged:Props.location.isLoged}}> <button type="button" class="btn btn-link orderBtn" > الطلبات المرسلة </button></Link>
                    <span class="vl"></span>
                    <Link className="navLink" to={{pathname:"/Cart",isLoged:Props.location.isLoged}}> <button type="button" class="btn btn-link orderBtn" >سلة المشتريات</button></Link>
                </div>
                <hr style={{width:'100%'}}/>
                {posts.map((el)=>
                <>
                <div className="cartPost">
                <Link to={{ pathname: "/postDetails", post_id: el.id, isLoged: Props.location.isLoged }} key={el.cartId}>
                            <img src={el.main_img} alt="" />
                        </Link>
                    <h6>{el.title}</h6>
                    <h6 class="mb-0"> {el.price * el.count}  </h6>
                    <div className="count">
                        
                        <h4>{el.count}</h4>
                    </div>
                </div>
                
                <hr style={{width:'80%'}}/>
                </>
                
                )}
                <div className="total">
                    <label>المجموع الكلي</label>
                    <h5>{totCount}$</h5>
                </div>
            </div>
        </div>
    )
}

export default UserOrder
