import React from 'react'
import Posts from '../Posts/posts'
import HomePost from './homePost'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Index() {
    const categories = useSelector(state => state.categories);

    return (
        <div className="Col">
            <div class="Row">
                {categories.map((el)=>
                <div>
                <Link className="Link"
                     to={{pathname:"/posts" ,category_id:el.id}}>
                    <HomePost img={el.img} value=" /images/mobile.jpg" />
                </Link>
                <p>{el.label}</p>
                </div>)}
            </div>
     
     </div>
    )
}

export default Index
