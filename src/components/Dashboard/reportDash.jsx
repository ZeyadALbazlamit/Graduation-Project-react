import React, { useEffect, useState } from 'react'
import axios from "axios"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function ReportDash(Props) {
    const [repoets,setReports]=useState([]);
   useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/dashBoard/reports')
    .then((res)=>{

        setReports(res.data.reports)

        console.log(res.data)
        
    })
   },[])
    return (
        <div className="containerOrders">
            <div className="ordersContainer">
                <hr style={{width:'100%'}}/>
                {repoets.map((el)=>
                 <>
                 <button type="button"  class="close" aria-label="Close" style={{textAlign:'right',marginTop:'5px'}}></button>

                     <div className="orderPost" style={{justifyContent:"center"}}>
                         <Link to={{ pathname: "/postDetails", post_id: el.post_id ,isLoged:Props.location.isLoged}}>
                         <div className="UserPost1 text-dark " >
                         <p>{el.report}</p>
                       
                         
                         </div>
                         </Link>
                     </div>
                     <hr style={{ width: '80%',  }}></hr>
                 </>
                )}
                    <>
                    <button type="button"  class="close" aria-label="Close" style={{textAlign:'right',marginTop:'5px'}}></button>

                        <div className="orderPost">
                            <div className="UserPost1 text-dark ">
                            <p>الإبلاغ</p>
                            </div>
                        </div>
                        <hr style={{ width: '80%',  }}></hr>
                    </>
            </div>
        </div>
    )
}

export default ReportDash
