import React from 'react'
import Post from '../Posts/post'

const UserPost = (Props) => {
    return (
        <div class="card h-100"style={{marginTop:"10px"}}>
          <div class="card-body">
            <h6 class="d-flex justify-content-between align-items-center mb-3">
            <i class="material-icons text-info mr-2"></i>الإعلان رقم {Props.info.id}</h6>
              <Post value="Post"   info={Props.info}  isLoged={ Props.isLoged} />

          </div>
        </div> 
    )
}

export default UserPost
