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
import Fade from 'react-reveal/Fade';


function index(Props) {
    
    return (
        <div className="Col">
            <div class="Row">

   <Link className="Link" to={{pathname:"/Posts" ,category_id:2   ,isLoged:Props.isLoged }}><Fade  top big><ImMobile2 className ="mobileIcon"/></Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:6   ,isLoged:Props.isLoged }}><Fade  top big><FaHome className ="homeIcon"/> </Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:8  ,isLoged:Props.isLoged }}> <Fade   top big><GiAmpleDress className ="dressIcon"/> </Fade > </Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:9   ,isLoged:Props.isLoged }}><Fade  top big><RiShirtFill className ="shirtIcon" /></Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:11   ,isLoged:Props.isLoged }}><Fade  top big><GiCookingPot className ="potIcon" /> </Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:1   ,isLoged:Props.isLoged }}><Fade  top big><IoCarSportSharp className ="carIcon"/> </Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:7   ,isLoged:Props.isLoged }}><Fade  top big><GiSofa className ="sofaIcon" /></Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:3   ,isLoged:Props.isLoged }}><Fade  top big><IoGameController className ="gamesIcon" /> </Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:12   ,isLoged:Props.isLoged }}><Fade  top big><GiBookshelf className ="bookIcon" /></Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:14  ,isLoged:Props.isLoged }}><Fade  top big><GiCat className ="catIcon"/> </Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:4  ,isLoged:Props.isLoged }}><Fade  top big><FaLaptop className ="laptopIcon"/> </Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:10  ,isLoged:Props.isLoged }}><Fade  top big><FaBabyCarriage className ="babyIcon" /></Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:13  ,isLoged:Props.isLoged }}><Fade  top big><GiMechanicGarage className ="workerIcon" /></Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:5   ,isLoged:Props.isLoged }}><Fade  top big><FaHome className ="homeIcon2"/> </Fade ></Link>
            </div>

        </div>
    )
}

export default index
