import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
const Register = () => {
    const { register, handleSubmit, watch, errors } = useForm();

  function Submit(data){;


	axios.post('http://127.0.0.1:8000/api/login', data, {headers: {'Accept': 'application/json'}
	  }).then(res => { console.log(res);});

      console.log(data)


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
        
        
                                <div class="form-group row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit" class="btn btn-primary">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>  );
}
 
export default Register;