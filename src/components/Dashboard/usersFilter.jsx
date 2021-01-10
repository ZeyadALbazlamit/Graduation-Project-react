import React from 'react'
import './users.css'


function UsersFilterbox(Props) {
    return (
        <div className="filterContainer2" >
            <div className="filterBox2" >
                <div className="catBox2">
                    <label className="searchUser">إبحث</label>
                    <input className="userSearch" placeholder="الأسم"  onChange={(e)=>Props.findUsers(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default UsersFilterbox
