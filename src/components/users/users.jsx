import React, { useState } from 'react'
import Filterbox from './filterbox'
import { MdLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './users.css'
import axios from "axios"
function Users(name) {
    const [users, setUsers] = useState([]);
    function findUsers(name) {
        if (name !== "" || name !== " ") {
            axios.post("http://127.0.0.1:8000/api/Post/search", { name: "%" + name + "%", type: 'user' })
                .then((res) => {
                    console.log(res.data)
                    setUsers(res.data.users)
                })
        }
    }
    return (
        <div>
            <Filterbox findUsers={findUsers} />
            <div className="containerCom">
                <div className="companiesContainer">
                    {users.map((el) => <Fade bottom big>

                        <div className="UserPost1 text-dark ">
                            <Link to={{ pathname: "/UserProfile", id: el.id }}>
                                <img src={el.img} style={{ borderRadius: "50%" }} />
                            </Link>
                            <div className="userInfo111">
                                <div className="userInfo1112">
                                    <p>{el.name} </p>
                                    <p class="mb-0"> {el.location} <MdLocationOn /> </p>
                                    <p class="mb-0">{el.phone_number}  </p>
                                </div>
                            </div>
                        </div>

                    </Fade>
                    )
                    }

                </div>
            </div>
        </div>
    )
}

export default Users
