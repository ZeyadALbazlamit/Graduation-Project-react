import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import _ from "lodash/fp";
import "./register.css"
import axios from 'axios';
const Register = (Props) => {
const [Erorr,setErorr]=useState('');
    
    const { register, handleSubmit, reset, errors } = useForm();

  function Submit(data,e){
      console.log(data);
    axios.post('http://127.0.0.1:8000/api/register', 
     data,
     {headers: {'Accept': 'application/json',
    }
      }).then(res => {
    
          console.log(res.data.user);
          localStorage.setItem("user_id",res.data.user.id);
          console.log(  localStorage.getItem("user_id")); 
          setErorr("")
          Props.setIsLoged(true);
        }).catch(function(error) {
            console.log(error);
            if (error.response) {
                setErorr("error")
            console.log(error.response.data);
            }
            
          })
    
    
e.target.reset()
    }
return (

    <form onSubmit={handleSubmit(Submit)} >
                        <div class="alert "style={{justifyContent:"center",width:'110%',textAlign:"center",color:"white", backgroundColor:' #ffc107',borderRadius:"20px" ,marginLeft:'-10px'
}}>انشاء حساب</div>
    { Erorr !="" ? <div class="alert alert-danger" role="alert"> {Erorr}</div>:<p></p> }
          <div class="form-group row">
             
                  <input id="name" type="text" class="form-control " name="name" ref={register} required autocomplete="name" autofocus placeholder="الاسم"/>
             
          </div>
          <div class="form-group row">

           
                  <input id="email" type="email" class="form-control " name="email"  ref={register} placeholder="ايميل"/>
         
          </div>
          <div class="form-group row">
                  <input id="password" type="password" class="form-control" setValue={7} ref={register({minLength:6})} name="password" required autocomplete="new-password" placeholder="الرقم السري "/>
                  {_.get("password.type", errors) === "minLength" && (
                    <p className="error">This field is required</p> )}        
          </div>
          <div class="form-group row">
           
                  <input id="password-confirm" type="password" class="form-control" ref={register({ min: 6, max: 99 })} name="password_confirmation" required autocomplete="new-password" placeholder="تاكيد الرقم السري "/>       
          </div>
          <div class="form-group row mb-0">
                  <input type="submit" class="btn btn-secondary btn-block" value="انشاء حساب"/>             
                  <input type="button"onClick={()=>Props.setHasAcount(true)}  class="btn btn-warning  text-white btn-block" value="الرجوع الى تسجيل الدخول" />           
          </div>
      </form>
);
}
 
export default Register;