import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { BiPlusMedical } from 'react-icons/bi'
import { ImMinus } from 'react-icons/im'
import { FaCheck } from 'react-icons/fa'
import axios from 'axios';
import Swal from 'sweetalert2'


function Cart(Props) {

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
                setPosts(res.data.cart)
                setTotCount(comuteTotalPrice(res.data.cart))
            })



    }, [])

    function handleSingleSubmit(i) {
        console.log(i)
       
        const cartId=posts[i].cartId;
        setPosts(posts.filter((el,index)=>index !==i))
        axios.put("http://127.0.0.1:8000/api/cart/" + cartId)
            .then((res) => {
                console.log(res.data)
                Swal.fire(
                    'عمل رائع !',
                    'تم تاكيد طلبك',
                    'success'
                  )    
            })
    }

    function handleIncreaseCount(i) {
        console.log(i)

        let nposts = posts;
        nposts[i].count = nposts[i].count + 1;
        console.log(nposts)
        setTotCount(comuteTotalPrice(nposts))

        setPosts(nposts)
const data={
    user_id:localStorage.getItem("user_id"),
    post_id: nposts[i].id
}
        axios.post("http://127.0.0.1:8000/api/cart", data)
            .then((res) => {
                console.log(res.data)
            })
    }

    function handleDecreaseCount(i) {
        console.log(i)

        if (posts[i].count == 1) {
            setPosts(posts.filter((el, index) => index !== i))
            setTotCount(totCount - posts[i].count * posts[i].price)
        } else {

            let nposts = posts;
            nposts[i].count = nposts[i].count - 1;
            console.log(nposts)
            setTotCount(comuteTotalPrice(nposts))

            setPosts(nposts)

        }
        const cartId = posts[i].cartId;

        axios.delete("http://127.0.0.1:8000/api/cart/" + cartId,{count:"all"})
            .then((res) => {
                console.log(res.data)
            })
    }

    function handleDelete(i) {
        console.log(i)
        setPosts(posts.filter((el, index) => index !== i))
        setTotCount(totCount - posts[i].price * posts[i].count)
        const cartId = posts[i].cartId;
        const post_id = posts[i].id;
        axios.put("http://127.0.0.1:8000/api/cart/" + cartId,{post_id:post_id})
            .then((res) => {
                console.log(res.data)

                Swal.fire(
                    'عمل رائع !',
                    'تم حزف طلبك',
                    'success'
                  )  
            })
    }

    function deleteAll() {
        setPosts([])
        setTotCount(0)
        const data={
            user_id:localStorage.getItem("user_id"),
          type:"deleteAll"
        }
                axios.put("http://127.0.0.1:8000/api/cart/"+localStorage.getItem("user_id"), data)
                    .then((res) => {
                        console.log(res.data)
                        Swal.fire(
                            'عمل رائع !',
                            'تم حزف طلبك',
                            'success'
                          )  
                    })
    }
    function submitAll() {
        const nposts=posts;
       nposts.map((el,index)=>nposts[index].submit=1)
setPosts(nposts)

        const data={
            user_id:localStorage.getItem("user_id"),
          type:"submitAll"
        }
                axios.put("http://127.0.0.1:8000/api/cart/"+localStorage.getItem("user_id"), data)
                    .then((res) => {
                        console.log(res.data)
                    })

                    Swal.fire(
                        'عمل رائع !',
                        'تم تاكيد طلبك',
                        'success'
                      )             

    }
    return (
        <div className="containerCart">
            <div className="cartsContainer">
                <div className="switch" >
                    <Link className="navLink" to="/UserOrder"> <button type="button" class="btn btn-link orderBtn" > الطلبات المرسلة </button></Link>
                    <span class="vl"></span>
                    <Link className="navLink" to="/Cart"> <button type="button" class="btn btn-link orderBtn" >سلة المشتريات</button></Link>
                </div>
                <hr style={{width:'100%'}}/>
                {posts.map((el, index) =>
                    <div className="cartPost">
                        <Link to={{ pathname: "/postDetails", post_id: el.id, isLoged: Props.isLoged }} key={el.cartId}>
                            <img src={el.main_img} alt=""/>
                        </Link>
                        <h6>{el.title}</h6>
                        <h6 class="mb-0"> {el.price * el.count}  </h6>
                        <div className="count">
                            <div className="cartPostInfo3">
                                <button type="button" class="btn btn-success" onClick={() => handleSingleSubmit(index)} disabled= {el.submit==0 ? false:true }  ><FaCheck /></button>
                                <button type="button" class="btn btn-danger" onClick={() => handleDelete(index)}><RiDeleteBin5Line /> </button>
                            </div>

                            <div>
                                <button type="button" class="btn btn-primary " onClick={() => handleIncreaseCount(index)} ><BiPlusMedical /></button>
                                <button type="button" class="btn btn-warning " onClick={() => handleDecreaseCount(index)}><ImMinus /> </button>
                            </div>
                            <h4>{el.count}</h4>
                        </div>
                    </div>
                )}
                <div className="total">
                    <label>المجموع الكلي</label>
                    <h5>{totCount}$</h5>
                </div>
                <div className="submit">
                    <button type="button" class="btn btn-success" onClick={() => submitAll()}>تأكيد الكل</button>
                    <button type="button" class="btn btn-danger" onClick={() => deleteAll()}>حذف الكل</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
