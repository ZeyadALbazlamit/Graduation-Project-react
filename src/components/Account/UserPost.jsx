import React from 'react'
import Post from '../Posts/post'

const UserPost = (Props) => {
  function handleFillChange(postId) {
    Props.setFav([...Props.fav, { post_id: postId }])
    console.log("++++")
  }
  function deleteFav(postId) {

    Props.setFav(Props.fav.filter((el) => el.post_id != postId))
    console.log("-----")

  }
    return (
        <div class="card h-100"style={{marginTop:"10px"}}>
          <div class="card-body">
            <h6 class="d-flex justify-content-between align-items-center mb-3">
            <i class="material-icons text-info mr-2"></i>الإعلان رقم {Props.info.id}</h6>
              <Post value="Post"  
               info={Props.info} 
                isLoged={ Props.isLoged} 
                post_id={Props.info.id}
               handleFillChange={handleFillChange}
               deleteFav={deleteFav}
               fill={Props.type==="fav" ? true: Props.fav.filter((el) => el.post_id == Props.info.id).length > 0 ? true : false}

               />

          </div>
        </div> 
    )
}

export default UserPost
