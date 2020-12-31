import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './login.css'
import { FaUser } from 'react-icons/fa'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const Login = (Props) => {
	const { register, handleSubmit, reset, errors } = useForm();
	const [Erorr, setErorr] = useState('');
	const responseFacebook = (response) => {
		console.log(response);


		const data = {

			email: response.email,
			name: response.name,
			img: response.picture,
			provider: "facebook",
		}

		axios.post('http://127.0.0.1:8000/api/login', data, {
			headers: { 'Accept': 'application/json' }
		}).then(res => {
			console.log(res);
			localStorage.setItem("user_id", res.data.user.id);
			localStorage.setItem("user_name", res.data.user.name);
			localStorage.setItem("user_img", res.data.user.img);

			Props.setIsLoged(true);
			console.log(localStorage.getItem("user_id"));

		}).catch(function (error) {
			console.log(error);
			if (error.response) {
				setErorr(error.response.data.message)
				console.log(error.response.data);
			}
		})

	}

	const responseGoogle = (response) => {
		console.log(response);

		const data = {
			email: response.profileObj.email,
			img: response.profileObj.imageUrl,
			name: response.profileObj.name,
			provider: "google",
		}

		axios.post('http://127.0.0.1:8000/api/login', data, {
			headers: { 'Accept': 'application/json' }
		}).then(res => {
			console.log(res);
			localStorage.setItem("user_id", res.data.user.id);
			localStorage.setItem("user_name", res.data.user.name);
			localStorage.setItem("user_img", res.data.user.img);

			Props.setIsLoged(true);
			console.log(localStorage.getItem("user_id"));

		}).catch(function (error) {
			console.log(error);
			if (error.response) {
				setErorr(error.response.data.message)
				console.log(error.response.data);
			}
		})
	}
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
	function socialLogin() {
		axios.get("http://127.0.0.1:8000/api/login/google",)
			.then((res) => console.log(res.data))
	}
	return (


		<form action="/examples/actions/confirmation.php" method="post" onSubmit={handleSubmit(Submit)}>

			<p class="hint-text">تسجيل الدخول بإستخدام    </p>
			<div class="form-group social-btn clearfix">

				<GoogleLogin className="google"
					clientId="535294813022-p4qebn043gi8ui530r958q7mrdll1tdr.apps.googleusercontent.com"
					buttonText="Login"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'}
					cssClass="face"

				/>
				<FacebookLogin className="face"
					appId="860967254640337"
					autoLoad={false}
					fields="name,email,picture"
					onClick={responseFacebook}
					callback={responseFacebook}
					cssClass="face"
				/>
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
				<input type="button" onClick={() => Props.setHasAcount(false)} class="btn btn-warning  text-white btn-block" value="انشاء حساب جديد؟" />


			</div>
		</form>
	);
}

export default Login;