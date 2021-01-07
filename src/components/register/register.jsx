import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import _ from "lodash/fp";
import "./register.css"
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'

const Register = (Props) => {

  const history = useHistory();
	function  goTo(path){
   
	history.push(path);
	}
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          localStorage.setItem("user_type", res.data.user.type);
          Props.setType(res.data.user.type)

          console.log(  localStorage.getItem("user_id")); 
          Swal.fire(
            'عمل رائع !',
            'تم التسجيل  بنجاح',
            'success'
            )  
            setShow(false)
          goTo('/index')
          Props.setIsLoged(true);
        }).catch(function(error) {
            console.log(error);
            if (error.response) {
            
              Swal.fire({
                icon: 'error',
                title: "يرجى اعادة المحاولة" ,
                text: '  لقد قمت بعملية ادخال خاطئة ',
                
                })
                setShow(false)
                goTo('/index')

            console.log(error.response.data);
            }
            
          })
    
    
e.target.reset()
    }
return (
  <>
  <Button variant="warnin text-warning" style={{width:"100%",textAlign:"center"}} onClick={handleShow}>
  انشاء حساب   
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <div class="alert "style={{justifyContent:"center",width:'110%',textAlign:"center",color:"orange",fontSize:"40px"
}}>انشاء حساب</div>
    </Modal.Header>
    <Modal.Body>
      
    <form onSubmit={handleSubmit(Submit)} >
                     
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
                  <input type="submit" class="btn btn-warning btn-block text-white" value="انشاء حساب"/>             
          </div>
      </form>
    </Modal.Body>

  </Modal>
</>
    
);
}
 
export default Register;