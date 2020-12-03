import React, { useState, useEffect } from 'react';
import './login.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const Login = () => {
	const { register, handleSubmit} = useForm();

  function Submit(data){console.log(data);
    axios.post('http://127.0.0.1:8000/api/register', 
     data,
     {headers: {'Accept': 'application/json',
    }
	  }).then(res => { console.log(res);});
}
return (

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>
                <div class="card-body">
                    <form onSubmit={handleSubmit(Submit)}>
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
                                <input id="password" type="password" class="form-control"  ref={register} name="password" required autocomplete="new-password"/>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label  class="col-md-4 col-form-label text-md-right">Confirm Password</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" ref={register} name="password_confirmation" required autocomplete="new-password"/>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Register
                                </button>
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
 
export default Login;