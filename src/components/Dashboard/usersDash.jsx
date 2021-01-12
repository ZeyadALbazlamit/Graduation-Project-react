import React, { useEffect, useState } from 'react'
import UsersFilterbox from './usersFilter'
import { MdLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './users.css'
import axios from "axios"
import Swal from 'sweetalert2'

import { RiDeleteBin5Line } from 'react-icons/ri'
import Filterbox from '../users/filterbox'
function UsersDash(Props) {
    const [users,setUsers]=useState([]);
   useEffect(()=>{
       const userType=Props.location.type=='companies'? 'companies':"users"
    axios.get('http://127.0.0.1:8000/api/dashBoard/'+userType)
    .then((res)=>{

        setUsers(res.data.users)

        console.log(res.data)
        
    })
   },[])
   function findUsers(name) {
    console.log(name)
    if (name.length >0  && name !=" ") {
        axios.post("http://127.0.0.1:8000/api/Post/search", { name: "%" + name + "%", type: 'user' })
            .then((res) => {
                console.log(res.data)
                setUsers(res.data.users)
            })
    }else{
        setUsers([])
    }
}
function deleteUser(id){
    Swal.fire({
        title: 'Are you sure?',
        text: "هل انت متاكد من الحذف",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

            axios.delete("http://127.0.0.1:8000/api/User/"+id)
            .then((res) => {
                console.log(res.data)
                setUsers(users.filter((el)=>el.id!==id))
                Swal.fire(
                    'الغي الحساب!',
                    '',
                    'success'
                  )
            })
        }
      })
}
function editType(type,i){

let data=users[i];
data.type=type;
console.log(data)
    axios.put('http://127.0.0.1:8000/api/User/'+data.id,data)
    .then((res)=>{
    console.log(res.data);
    let Users=users;
    if(type=="admin")
    {
        setUsers(users.filter((el,index)=>index !==i  ))
    }else{
        Users[i].type=type;
        setUsers(Users);
    }
})
}
    return (
        <div>
            <Filterbox findUsers={findUsers} />
         
            <div className="containerCom">
                {users.map((el,index)=> <>
                <div className="companiesContainer">
                <button type="button" onClick={()=>deleteUser(el.id)} class="close" aria-label="Close" style={{textAlign:'right',marginTop:'5px'}}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <Fade bottom big>
                    <div className="UserPost1 text-dark ">
                        <Link to={{ pathname: "/UserProfile",id:el.id ,isLoged:Props.location.isLoged}}>
                            <img src={el.img}    style={{ borderRadius: "50%" }} />
                        </Link>
                        <div className="userInfo111">
                            <div className="userInfo1112">
                                <p>{el.name}</p>
                                <p class="mb-0">{el.phone_number}</p>
                                <label className="" > نوع الحساب</label>
                               {
                               Props.location.type !=="companies"? <select onChange={(e)=>editType(e.target.value,index)} name="type"  style={{width:'90px',height:'30px',fontSize:'13px'}}>
                                <option >{el.type==="company" ? "متجر": el.type==="admin" ?"مسؤول"   :"شخصي"}</option>
                                <option value={"user"}>شخصي</option>
                                <option value={"company"} >متجر</option>
                                <option value={"admin"} >مسؤول</option>

                              </select> 
                              :  <label className="" style={{marginRight:"5px"}}>    متجر</label>
                            } 
                            </div>
                        </div>
                        
                    </div>
                </Fade>
             </div>

             </>
                )}
                

 
            </div>

        </div>
    )
}

export default UsersDash
