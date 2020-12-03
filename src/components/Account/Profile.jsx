import React from 'react'
import {Link} from 'react-router-dom'
import './profile.css'
import UserPost from './UserPost'
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {

    const userInfo = useSelector(state => state.userInfo);

    return (
        <div>
            <div class="container">
    <div class="main-body">
    
        
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
          <div class="row gutters-sm">
          <div class="col-md-8">
              
              <div class="row gutters-sm">
              
              
                  <UserPost/>
                
              </div>
            </div>
    
          
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src={userInfo[0].userImg} alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>الأسم : {userInfo[0].userName} </h4>
                      <p class="text-secondary mb-1"> {userInfo[0].userEmail} : الايميل  </p>
                      <p class="text-muted font-size-sm">{userInfo[0].userPhoneNo} : رقم الهاتف</p>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">{userInfo[0].userPostsId.length}</h6>
                    <span class="text-secondary">اللإعلانات</span>
                  </li>
                 <Link>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">{userInfo[0].userFavoritesPostsId.length} </h6>
                    <span class="text-secondary">المفضله</span>
                  </li>
                  </Link> 
                </ul>
              </div>
            </div>
            
          </div>
        </div>
    </div>
        </div>
    )
}

export default Profile
