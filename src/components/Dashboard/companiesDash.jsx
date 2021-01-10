import React, { useEffect, useState } from 'react'
import './companies.css'
import Filterbox from './filterbox'
import {MdLocationOn} from 'react-icons/md'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import { RiDeleteBin5Line } from 'react-icons/ri'
import UsersFilterbox from './usersFilter'
import './users.css'

function CompaniesDash() {
  

    return (
        <div>
           <UsersFilterbox />
            <div className="containerCom">
                <div className="companiesContainer">
                    <button type="button" class="close" aria-label="Close" style={{textAlign:'right',marginTop:'5px'}}>
                                <span aria-hidden="true">&times;</span>
                    </button>
                     <Fade bottom big>
                        <div className="UserPost1 text-dark ">
                            <Link to={{ pathname: "/UserProfile"}}>
                                <img  style={{ borderRadius: "50%" }} />
                            </Link>
                            <div className="userInfo111">
                                <div className="userInfo1112">
                                    <p>اسم المتجر</p>
                                    <p class="mb-0"> 078</p>
                                    <label className="" > نوع الحساب</label>
                                    <select name="type"  style={{width:'90px',height:'30px',fontSize:'13px'}}>
                                    <option >شخصي</option>
                                    <option  >متجر</option>
                                  </select>  
                                </div>
                            </div>
                            
                            
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default CompaniesDash
