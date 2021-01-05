import React from 'react'
import './users.css'


function Filterbox(Props) {
    return (
        <div className="filterContainer2" >
            <div className="filterBox2" >
                <div className="catBox2">
                    <label className="searchUser">إبحث</label>
                    <input className="userSearch" placeholder="أسم المستخدم"  onChange={(e)=>Props.findUsers(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default Filterbox
