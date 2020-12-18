import React from 'react'
import Post from '../Posts/post'
import {Link} from 'react-router-dom';

const UserPost = (Props) => {
    return (
      <div class="col-sm-6 mb-3">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="d-flex justify-content-between align-items-center mb-3">
              <i class="material-icons text-info mr-2"></i>الإعلان رقم {Props.info.id}</h6>
              <Link   to={{pathname:"/postDetails" ,post_id:Props.info.id}} >
                <Post value="Post"   info={Props.info} />
           </Link> 
        
          </div>
        </div>
      </div>  
    )
}

export default UserPost
