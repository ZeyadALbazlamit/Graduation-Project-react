import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './dashboard.css'
import axios from 'axios'
function Dashboard(Props) {
    const [counts,setCounts]=useState({});
    useEffect(()=>{
        console.log(Props)
        axios.get('http://127.0.0.1:8000/api/dashBoard')
        .then((res)=>{
            setCounts(res.data.counts)
            console.log(res.data)
            
        })
    },[])
    return (

        <div className="containerDash">
            <div className="dashContainer">
                    <>
                    <div className="dashDiv">
                        <Link className="Link55" to={{pathname:"/PostsDash",isLoged:Props.location.isLoged}}>
                            <div className="dashPost bg-info">
                                <h5>الإعلانات</h5>
                                <div className="dashCount">
                                    <h6>العدد</h6>
                                    <h5>{counts.posts}</h5>
                                </div>
                            </div>
                        </Link>
                        <Link className="Link55" to ={{pathname:"/UsersDash",isLoged: Props.location.isLoged,type:"users" }}>
                            <div className="dashPost bg-success">
                               <h5>المستخدمين</h5>
                               <div className="dashCount">
                                   <h6>العدد</h6>
                                   <h5>{counts.users}</h5>
                               </div>
                           </div>
                        </Link>
                    </div>

                    <div  className="dashDiv ">
                        <Link className="Link55" to={{pathname:"/UsersDash",isLoged: Props.location.isLoged,type:'companies' }}>
                            <div className="dashPost bg-warning">
                                <h5>المتاجر</h5>
                                <div className="dashCount">
                                    <h6>العدد</h6>
                                    <h5>{counts.companies}</h5>
                                </div>
                            </div>
                        </Link>
                        <Link className="Link55" to={{pathname:"/ReportDash",isLoged:Props.location.isLoged}}>
                            <div className="dashPost bg-danger">
                                <h5>الإبلاغات</h5>
                                <div className="dashCount">
                                    <h6>العدد</h6>
                                    <h5>{counts.reports}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    </>
            </div>
        </div>
    )
}

export default Dashboard
