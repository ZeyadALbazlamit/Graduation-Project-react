import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import _ from "lodash/fp";
import "./register.css"
import axios from 'axios';
import {  useDispatch } from "react-redux";
import { setUserInfo } from '../Store/actions/actions';

const Register = (Props) => {
const [Erorr,setErorr]=useState('');
    const dispatch = useDispatch();
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
          Props.setIsLog(true)

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

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>
                <div class="card-body">
                    <form onSubmit={handleSubmit(Submit)}>
                  { Erorr !="" ? <div class="alert alert-danger" role="alert"> {Erorr}</div>:<p></p> }
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">Name</label>
                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control " name="name" ref={register} required autocomplete="name" autofocus/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control " name="email"  ref={register}/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right ">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" setValue={7} ref={register({minLength:6})} name="password" required autocomplete="new-password"/>
                                {_.get("password.type", errors) === "minLength" && (
                                  <p className="error">This field is required</p> )}
                            </div>
                        </div>
                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" ref={register({ min: 6, max: 99 })} name="password_confirmation" required autocomplete="new-password"/>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <input type="submit" class="btn btn-secondary btn-block" value="انشاء حساب"/>
                               
                                <input type="button"onClick={()=>Props.setHasAcount(true)}  class="btn btn-warning  text-white btn-block" value="الرجوع الى تسجيل الدخول" />
                                    
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
);
}
 
export default Register;