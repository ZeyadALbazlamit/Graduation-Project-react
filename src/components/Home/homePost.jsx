import React from 'react'
import './homePost.css'

function HomePost(props) {
    return (
        <div class="card" style={{ width: '14rem' }} >
            <img class="card-img-top" src={props.img} alt="Card image cap"/>
        </div>
    )
}

export default HomePost
