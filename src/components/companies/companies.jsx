import React, { useEffect, useState } from 'react'
import './companies.css'
import Filterbox from './filterbox'
import {MdLocationOn} from 'react-icons/md'
import {Link} from 'react-router-dom'
import axios from "axios";
import Fade from 'react-reveal/Fade';

function Companies(Props) {
const [location,setLocation]=useState("is not null");
const [name,setName]=useState("is not null");

    const [com,setCom]=useState([ {id:0,name:"",email:"",img:"",phone_number:""}])
  //  const [rate,setRate]=useState(0);
useEffect(()=>{
    console.log("company name -> "+ name + "in ->" +location)
    const n= name ==="is not null" ? name :" like \"%"+name+"%\"" ;
    const l= location ==="is not null" ? name :" like  \"%"+location+"%\"" ;

axios.post('http://127.0.0.1:8000/api/stors',{name:n,location:l})
.then((res)=>{
    
    console.log(res.data)
    setCom(res.data)

})

},[location,name,Props.location])
    return (
        <div>
            <Filterbox    setName={setName}  setLocation={setLocation} />
            <div className="containerCom">
                <div className="companiesContainer">
                {com.map((el)=><Fade bottom big>

                 <Link to={{pathname:"/Company", com_id:el.id,isLoged:Props.location.isLoged,img:el.img,name:el.name,id:el.id }}>
                    <div className="companyPost text-dark ">
                        <img src={el.img} className="companyImg" alt=""/>
                          <div className="companyInfo">
                            <h4>{el.name}</h4>
                            <div className="companyInfo2">
                                <p class="mb-0"> {el.location} <MdLocationOn /> </p>
                                <p class="mb-0">{el.phone_number} </p>
                                <p class="mb-0"></p>
                            </div>
                        </div>
                    </div>
                </Link>
                </Fade>
                )}
                
                </div>
            </div>
        </div>
    )
}

export default Companies
