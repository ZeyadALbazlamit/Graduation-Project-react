import React from 'react'
import Posts from '../Posts/posts'
import HomePost from './homePost'
import { Link } from "react-router-dom";

function index() {
    return (
        <div className="Col">
            <div class="Row">
            <Link className="Link" to="/Posts"><HomePost value=" /images/mobile.jpg" /></Link>
            <Link className="Link" to="/Posts"><HomePost value="/images/food.jpg" /> </Link>
            <Link className="Link" to="/Posts"><HomePost value="/images/men.jpg" /> </Link>
            <Link className="Link" to="/Posts"><HomePost value=" /images/women.jpg" /></Link>
            <Link className="Link" to="/Posts"><HomePost value="/images/44063.jpg" /> </Link>
            <Link className="Link" to="/Posts"><HomePost value="/images/home.jpg" /> </Link>
            <Link className="Link" to="/Posts"><HomePost value=" /images/apartment.jpg" /></Link>
            <Link className="Link" to="/Posts"><HomePost value="/images/baby.jpg" /> </Link>
            <Link className="Link" to="/Posts"><HomePost value=" /images/education.jpg" /></Link>
            <Link className="Link" to="/Posts"><HomePost value="/images/46499.jpg" /> </Link>
            <Link className="Link" to="/Posts"><HomePost value="/images/home.jpg" /> </Link>
            <Link className="Link" to="/Posts"><HomePost value=" /images/women.jpg" /></Link>
            </div>
        </div>
    )
}

export default index
