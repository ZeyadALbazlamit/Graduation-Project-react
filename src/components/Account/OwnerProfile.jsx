import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import Post from '../Posts/posts';
import axios from 'axios';
import UserPosts from "./UserPost";
import { MdAddAPhoto } from 'react-icons/md'
import Profile from "./Profile";
function editRate(e) {
    axios.put("http://127.0.0.1:8000/api/User/" + localStorage.getItem("user_id"), { rate: e.target.value }).then((res) => {
        console.log(res.data);
    })

}
const OwnerProfile = () => {

    const [postKind, setKindPost] = useState(true);
    const [profileData, setProfileData] = useState({ user: "", post: [{}], favorite: [{}] });
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/User/" + localStorage.getItem("user_id")).
            then((res) => {
                console.log(res.data)
                setProfileData(res.data)
            })
    }, []
    )


    function convertImage(F) {
        Array.from(F).forEach((f) => {
            let fr = new FileReader();
            fr.readAsDataURL(f);
            fr.onload = function () {
                // console.log(fr.result);
                axios.put("http://127.0.0.1:8000/api/User/" + localStorage.getItem("user_id"), { img: fr.result }).
                    then((res) => {
                        console.log(res.data)
                        setProfileData({ post: profileData.post, favorite: profileData.favorite, user: res.data });
                        localStorage.setItem("user_img", fr.result);
                    })
            }
        })
    }

    return (
        <Profile profileData={profileData}
            convertImage={convertImage}
            setKindPost={setKindPost}
            postKind={postKind}
            editRate={editRate}
        />


    )
}

export default OwnerProfile;
