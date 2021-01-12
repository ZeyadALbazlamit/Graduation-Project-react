import React, {  useState ,useEffect} from "react";
import { Card } from 'react-bootstrap'
//import { BsHeartFill, BsList } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { RiDeleteBin5Line } from 'react-icons/ri'

import Swal from 'sweetalert2'


const PostDash = (Props) => {
const [refresh,setRefresh]=useState(false);
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    console.log(Props)
   axios.get('http://127.0.0.1:8000/api/dashBoard/posts')
   .then((res)=>{
       setPosts(res.data.posts)
       console.log(res.data)

   })
  },[])

 // const [bool, setB] = useState(Props.fill);  
  function fav() {
    console.log(Props.fill)
    const d=Props.info.id 
    axios.post("http://127.0.0.1:8000/api/favorite", { user_id: localStorage.getItem("user_id"), post_id: Props.info.id }).then((res) => {
      console.log(res.data);
      if(res.data=='deleted')
        Props.deleteFav(d)
         else
        Props.handleFillChange(res.data.post_id)
    })
  }
  function findPosts(title) {
    console.log(title)
    if (title.length >0  && title !=" ") {
        axios.post("http://127.0.0.1:8000/api/Post/search",{ title: "%" + title + "%", type: 'posts' })
            .then((res) => {
                console.log(res.data)
                setPosts(res.data.posts)
            })
    }else{
      setPosts([])
    }
}
function deletePost(i){
  Swal.fire({
    title: 'Are you sure?',
    text: "هل انت متاكد من الحذف",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {

        axios.delete("http://127.0.0.1:8000/api/Post/"+posts[i].id)
        .then((res) => {
            console.log(res.data)
            setPosts(posts.filter((el)=>el.id!==posts[i].id))
            Swal.fire(
                'الغي الاعلان!',
                '',
                'success'
              )
        })
    }
  })

}
  return (
 <>
     <div className="filterContainer2" >
            <div className="filterBox2" >
                <div className="catBox2">
                    <label className="searchUser">إبحث</label>
                    <input className="userSearch" placeholder="إبحث"  onChange={(e)=>findPosts(e.target.value)}/>
                </div>
            </div>
        </div>      

     {posts.map((info,index)=> <div class="postsRow">
      
      <Card style={{ width: '18rem', height: '20rem' }} className="Post col-md-11 mb-3" >
      <button type="button" onClick={()=>deletePost(index)} class="close" aria-label="Close" style={{textAlign:'left',marginTop:'5px'}}>
          <span aria-hidden="true">&times;</span>
      </button>
        <Link to={{ pathname: "/postDetails", post_id: info.id ,isLoged:Props.isLoged}}>
          <Card.Img className="postImg" variant="top" src={info.main_img}  />
        </Link>
        <Card.Body>
      <Card.Title>{info.title}</Card.Title>
          <div className="icons"><span className="price" >{info.price ? info.price+'$' :" Rang"} </span>
          </div>
          
        </Card.Body>
      </Card>
      </div>
     )}
   </>
  );
}

export default PostDash;