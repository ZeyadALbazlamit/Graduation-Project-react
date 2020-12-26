import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './login.css'
import {FaUser} from 'react-icons/fa'

const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [Erorr,setErorr]=useState('');

  function Submit(data){
    console.log(data);
	axios.post('http://127.0.0.1:8000/api/login', data, {headers: {'Accept': 'application/json'}
      }).then(res => {
        setErorr("")
        console.log(res);
    localStorage.setItem("user_id",res.data.user.id);
    localStorage.setItem("user_name",res.data.user.name);

   console.log(  localStorage.getItem("user_id")); 

      }).catch(function(error) {
        console.log(error);
        if (error.response) {
            setErorr(error.response.data.message)
        console.log(error.response.data);
        }
        
      })

      


}
    return (
        <div class="nav-item dropdown">
			<a href="#" data-toggle="dropdown" class="nav-link toggle mr-4"><FaUser /></a>
			<div class="dropdown-menu action-form">
				<form action="/examples/actions/confirmation.php" method="post" onSubmit={handleSubmit(Submit)}>
					<p class="hint-text">تسجيل الدخول بإستخدام    </p>
					<div class="form-group social-btn clearfix">
						<a href="#" class=" btn btn-secondary btn-circle facebook-btn float-left"><i class="fa fa-facebook"></i></a>
						<a href="#" class=" btn btn-secondary btn-circle google-btn float-right"><i class="fa fa-google"></i></a>
					</div>
					<div class="or-seperator"><b>أو</b></div>
					<div class="form-group">
						<input type="text" class="form-control" placeholder="اسم المستخدم" required="required" name="email"  ref={register}/>
					</div>
					<div class="form-group">
						<input type="password" class="form-control" placeholder="كلمة المرور" ref={register} name="password" required autocomplete="new-password" required="required"/>
					</div>
					<input type="submit" class="btn btn-secondary btn-block" value="دخول"/>
					<div class="text-center mt-3">
						<span class="text-secondary">انشاء حساب جديد؟</span> <a href="#">تسجل دخول</a>
					</div>
				</form>
			</div>
		</div>  );
}
 
export default Login;