import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './profile.css';
import UserPost from './UserPost';
import axios from 'axios';
const Profile = () => {
  useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/User/"+localStorage.getItem("user_id")).
      then((res)=>console.log(res))
    },[] 
  )
    return (
        <div>
          <div class="container">
            <div class="main-body">
              <div class="row gutters-sm">
                <div class="col-md-8">
                  <div class="row gutters-sm">
                    <UserPost/>
                    <UserPost/>
                    <UserPost/>
                    <UserPost/>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex flex-column align-items-center text-center">
                        <img src="l"
                        
                         alt="Admin" class="rounded-circle" width="150"/>
                        <div class="mt-3">
                          <h4>الأسم : زياد </h4>
                          <p class="text-secondary mb-1"> zeyadalbazlamit : الايميل  </p>
                          <p class="text-muted font-size-sm">079 : رقم الهاتف</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card mt-3">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">22</h6>
                        <span class="text-secondary">اللإعلانات</span>
                      </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 class="mb-0">5 </h6>
                          <span class="text-secondary">المفضله</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 class="mb-0">
                            <div class="rating">
                              <input type="radio" name="rating" value="5" id="5"/><label for="5">☆</label> 
                              <input type="radio" name="rating" value="4" id="4"/><label for="4">☆</label>
                              <input type="radio" name="rating" value="3" id="3"/><label for="3">☆</label> 
                              <input type="radio" name="rating" value="2" id="2"/><label for="2">☆</label> 
                              <input type="radio" name="rating" value="1" id="1"/><label for="1">☆</label>
                            </div>
                          </h6>
                          <span class="text-secondary">التقييم</span>
                        </li>
                    </ul>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
    )
}

export default Profile;
