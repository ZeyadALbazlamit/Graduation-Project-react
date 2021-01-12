import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './login.css'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'

const Login = (Props) => {

	const history = useHistory();
	function  goTo(path){
   
	history.push(path);
	}
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  

	const { register, handleSubmit, reset } = useForm();
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
			localStorage.setItem("user_type", res.data.user.type);

			Props.setType(res.data.user.type)
			Props.setIsLoged(true);
			console.log(localStorage.getItem("user_id"));
			Swal.fire(
				'عمل رائع !',
				'تم التسجيل  بنجاح',
				'success'
			  )  
			  setShow(false)
			goTo('/index')

		}).catch(function (error) {
			console.log(error);
			if (error.response) {
			
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
			localStorage.setItem("user_type", res.data.user.type);
			Props.setType(res.data.user.type)
			Props.setIsLoged(true);
			console.log(localStorage.getItem("user_id"));
			Swal.fire(
				'عمل رائع !',
				'تم التسجيل  بنجاح',
				'success'
			  )  
			  setShow(false)
			goTo('/index')
		}).catch(function (error) {
			console.log(error);
			if (error.response) {
				
				console.log(error.response.data);
			}
		})
	}
	function Submit(data, e) {
		console.log(data);
		axios.post('http://127.0.0.1:8000/api/login', data, {
			headers: { 'Accept': 'application/json' }
		}).then(res => {
			
			console.log(res);
			localStorage.setItem("user_id", res.data.user.id);
			localStorage.setItem("user_name", res.data.user.name);
			localStorage.setItem("user_type", res.data.user.type);
			localStorage.setItem("user_img", res.data.user.img);

			Props.setType(res.data.user.type)

			Props.setIsLoged(true);
			console.log(localStorage.getItem("user_id"));
			Swal.fire(
				'عمل رائع !',
				'تم التسجيل  بنجاح',
				'success'
			  )  
			  setShow(false)
			goTo('/index')
		}).catch(function (error) {
			console.log(error);
			if (error.response) {
				Swal.fire({
					icon: 'error',
					title: "يرجى اعادة المحاولة" ,
					text: '  الحساب او الرقم السري غير صحيح   ',
					
				  })
				  setShow(false)
				  goTo('/index')
				console.log(error.response.data);
			}
		})
		e.target.reset()

	}
	/*
	function socialLogin() {
		axios.get("http://127.0.0.1:8000/api/login/google",)
			.then((res) =>{ console.log(res.data)
				localStorage.setItem("user_type", res.data.user.type);
				Props.setType(res.data.user.type)

			})
			

	}*/
	return (
		<>
		<Button variant="primry"   style={{width:"100%",textAlign:"center",color:"orange"}}  onClick={handleShow}>
		        تسجيل دخول  
		</Button>
  
		<Modal show={show} onHide={handleClose}>
		  <Modal.Header closeButton>
		  <div class="alert "style={{justifyContent:"center",width:'110%',textAlign:"center",color:"orange",fontSize:"40px"
}}>تسجيل دخول </div>
		  </Modal.Header>
		  <Modal.Body>
		  
		<form action="/examples/actions/confirmation.php" method="post" onSubmit={handleSubmit(Submit)}>

<p class="hint-text"style={{justifyContent:"center",width:'110%',textAlign:"center"}}>تسجيل الدخول بإستخدام    </p>
<div >

	<GoogleLogin className="google" 
		clientId="535294813022-p4qebn043gi8ui530r958q7mrdll1tdr.apps.googleusercontent.com"
		buttonText=""
		onSuccess={responseGoogle}
		onFailure={responseGoogle}
		cookiePolicy={'single_host_origin'}
		cssClass="google"

	/>
	<FacebookLogin 
		appId="860967254640337"
		autoLoad={false}
		fields="name,email,picture"
		onClick={responseFacebook}
		callback={responseFacebook}
		icon="fa-facebook"
		textButton=" "
		cssClass="face"
	/>
</div>
<div class="or-seperator"><b>أو</b></div>

<div class="form-group">
	<input type="text" class="form-control" placeholder="بريد المستخدم" required="required" name="email" ref={register} />
</div>
<div class="form-group">
	<input type="password" class="form-control" placeholder="كلمة المرور" ref={register} name="password" required autocomplete="new-password" required="required" />
</div>
<input type="submit" class="btn btn-warning btn-block text-white" value="دخول" />
<div class="text-center mt-3">


</div>
</form>
		  </Modal.Body>
		  <Modal.Footer>
			
		  </Modal.Footer>
		</Modal>
	  </>

	);
}

export default Login;
