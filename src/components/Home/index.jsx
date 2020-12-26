import React from 'react'
import HomePost from './homePost'
import { Link } from "react-router-dom";
import { ImMobile2 } from "react-icons/im";
import { FaHome,FaLaptop,FaBabyCarriage } from "react-icons/fa";
import { GiCookingPot,GiSofa,GiBookshelf,GiMechanicGarage } from "react-icons/gi";
import { GiAmpleDress } from "@react-icons/all-files/gi/GiAmpleDress";
import { GiCat } from "@react-icons/all-files/gi/GiCat";
import { RiShirtFill } from "react-icons/ri";
import { IoGameController } from "@react-icons/all-files/io5/IoGameController";
import { IoCarSportSharp } from "@react-icons/all-files/io5/IoCarSportSharp";


function index() {
    return (
        <div className="Col">
            <div class="Row">
                <Link className="Link" to={{pathname:"/Posts" ,category_id:1  }}><ImMobile2 className ="mobileIcon"/></Link>
                <Link className="Link" to={{pathname:"/Posts" ,category_id:2  }}><FaHome className ="homeIcon"/> </Link>
                <Link className="Link" to={{pathname:"/Posts" ,category_id:3 }}><GiAmpleDress className ="dressIcon"/> </Link>
                <Link className="Link" to={{pathname:"/Posts" ,category_id:4  }}><RiShirtFill className ="shirtIcon" /></Link>
                <Link className="Link" to={{pathname:"/Posts" ,category_id:5  }}><GiCookingPot className ="potIcon" /> </Link>
                <Link className="Link" to={{pathname:"/Posts" ,category_id:6  }}><IoCarSportSharp className ="carIcon"/> </Link>
                <Link className="Link" to={{pathname:"/Posts" ,category_id:7  }}><GiSofa className ="sofaIcon" /></Link>
                <Link className="Link" to={{pathname:"/Posts" ,category_id:8  }}><IoGameController className ="gamesIcon" /> </Link>
                <Link className="Link" to={{pathname:"/Posts" ,category_id:9  }}><GiBookshelf className ="bookIcon" /></Link>
                <Link className="Link" to={{pathname:"/Posts" ,category_id:10  }}><GiCat className ="catIcon"/> </Link>
                <Link className="Link" to={{pathname:"/Posts" ,category_id:11 }}><FaLaptop className ="laptopIcon"/> </Link>
                <Link className="Link" to={{pathname:"/Posts" ,category_id:12 }}><FaBabyCarriage className ="babyIcon" /></Link>
                <Link className="Link" to={{pathname:"/Posts" ,category_id:13 }}><GiMechanicGarage className ="workerIcon" /></Link>
            </div>
        </div>
    )
}

export default index
