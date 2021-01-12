import React, { useEffect, useState } from 'react'
import axios from "axios"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
function ReportDash(Props) {
    const [repoets, setReports] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/dashBoard/reports')
            .then((res) => {
                setReports(res.data.reports)
                console.log(res.data)
            })
    }, [])
    function deleteReport(i){
        axios.delete('http://127.0.0.1:8000/api/report/'+repoets[i].id)
        .then((res) => {
            setReports(repoets.filter((el,index)=>index!=i ))
            Swal.fire(
                'Good job!',
                'تم حذف البلاغ بنجاح',
                'success'
              )
        })
    }
    return (
        <div className="containerOrders">
            <div className="ordersContainer">
                <hr style={{ width: '100%' }} />
                {repoets.map((el,index) => <>
                    <div className="reportContainer">
                        <div className="UserReport text-dark ">
                            <Link to={{ pathname: "/UserProfile",isLoged:Props.location.isLoged,id:el.user_id }}>
                                <img src={el.img} style={{ borderRadius: "50%" }} />
                            </Link>
                            <div className="userReport2">
                                <div className="userReport3" style={{justifyContent:"center"}}>
                                    <p> {el.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="orderPost" style={{ justifyContent: "center" }}>
                            <Link to={{ pathname: "/postDetails", post_id: el.post_id, isLoged: Props.location.isLoged }}>
                                <div className="UserPost1 text-dark " >
                                    <p>{el.report}</p>
                                </div>
                            </Link>
                        </div>
                        <button type="button" onClick={()=>deleteReport(index)} class="close" aria-label="Close" style={{ textAlign: 'left', marginTop: '5px', marginBottom: '10px' }}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <hr style={{ width: '80%' }}></hr>
                </>
                )}
            </div>
        </div>
    )
}
export default ReportDash
