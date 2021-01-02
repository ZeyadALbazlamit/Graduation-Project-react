import React, { useEffect, useState } from 'react'
import './companies.css'
import Filterbox from './filterbox'
import {MdLocationOn} from 'react-icons/md'
import {Link} from 'react-router-dom'
import axios from "axios";
import Fade from 'react-reveal/Fade';

function Companies(Props) {
    const [com,setCom]=useState([ {id:0,name:"",email:"",img:"",phone_number:""}])
    const  [comF,setComF]=useState([ {id:0,name:"",email:"",img:"",phone_number:""}])
    const [rate,setRate]=useState(0);
useEffect(()=>{
axios.get('http://127.0.0.1:8000/api/stors',{})
.then((res)=>{
    
    console.log(res.data)
    setCom(res.data)
    setComF(res.data)

})

},[])

function filterByLocation(location){
    setComF( com.filter((el)=>el.location ==location) )

}

    return (
        <div>
            <Filterbox  filterByLocation={filterByLocation}  />
            <div className="containerCom">
                <div className="companiesContainer">
                {comF.map((el)=>         <Fade bottom big>

                 <Link to={{pathname:"/Company", com_id:el.id,isLoged:Props.location.isLoged,img:el.img,name:el.name }}>
                    <div className="companyPost text-dark ">
                        <img src={el.img} className="companyImg" />
                          <div className="companyInfo">
                            <h4>{el.name}</h4>
                            <div className="companyInfo2">
                                <p class="mb-0"> الموقع <MdLocationOn /> </p>
                                <p class="mb-0">القسم </p>
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
