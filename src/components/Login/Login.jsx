import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './login.css'
import { FaUser } from 'react-icons/fa'

const Login = (Props) => {
	const { register, handleSubmit, reset, errors } = useForm();
	const [Erorr, setErorr] = useState('');
	
	function Submit(data, e) {
		console.log(data);
		axios.post('http://127.0.0.1:8000/api/login', data, {
			headers: { 'Accept': 'application/json' }
		}).then(res => {
			setErorr("")
			console.log(res);
			localStorage.setItem("user_id", res.data.user.id);
			localStorage.setItem("user_name", res.data.user.name);
			Props.setIsLoged(true);
			console.log(localStorage.getItem("user_id"));

		}).catch(function (error) {
			console.log(error);
			if (error.response) {
				setErorr(error.response.data.message)
				console.log(error.response.data);
			}
		})
		e.target.reset()

	}
	return (


		<form action="/examples/actions/confirmation.php" method="post" onSubmit={handleSubmit(Submit)}>

			<p class="hint-text">تسجيل الدخول بإستخدام    </p>
			<div class="form-group social-btn clearfix">
				<a href="#" class=" btn btn-secondary btn-circle facebook-btn float-left"><i class="fa fa-facebook"></i></a>
				<a href="#" class=" btn btn-secondary btn-circle google-btn float-right"><i class="fa fa-google"></i></a>
			</div>
			<div class="or-seperator"><b>أو</b></div>
			{ Erorr != "" ?
				<div class="alert alert-danger" role="alert">
					{Erorr}
				</div>

				: " "}
			<div class="form-group">
				<input type="text" class="form-control" placeholder="اسم المستخدم" required="required" name="email" ref={register} />
			</div>
			<div class="form-group">
				<input type="password" class="form-control" placeholder="كلمة المرور" ref={register} name="password" required autocomplete="new-password" required="required" />
			</div>
			<input type="submit" class="btn btn-secondary btn-block" value="دخول" />
			<div class="text-center mt-3">
			<input type="button" onClick={()=>Props.setHasAcount(false)} class="btn btn-warning  text-white btn-block" value="انشاء حساب جديد؟" />

			</div>
		</form>
	);
}

export default Login;