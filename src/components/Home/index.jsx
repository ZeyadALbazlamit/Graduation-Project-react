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


function index() {
    return (
        <div className="Col">
            <div class="Row">

   <Link className="Link" to={{pathname:"/Posts" ,category_id:1  }}><Fade  top big><ImMobile2 className ="mobileIcon"/></Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:2  }}><Fade  top big><FaHome className ="homeIcon"/> </Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:3 }}> <Fade   top big><GiAmpleDress className ="dressIcon"/> </Fade > </Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:4  }}><Fade  top big><RiShirtFill className ="shirtIcon" /></Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:5  }}><Fade  top big><GiCookingPot className ="potIcon" /> </Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:6  }}><Fade  top big><IoCarSportSharp className ="carIcon"/> </Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:7  }}><Fade  top big><GiSofa className ="sofaIcon" /></Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:8  }}><Fade  top big><IoGameController className ="gamesIcon" /> </Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:9  }}><Fade  top big><GiBookshelf className ="bookIcon" /></Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:10 }}><Fade  top big><GiCat className ="catIcon"/> </Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:11 }}><Fade  top big><FaLaptop className ="laptopIcon"/> </Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:12 }}><Fade  top big><FaBabyCarriage className ="babyIcon" /></Fade ></Link>
   <Link className="Link" to={{pathname:"/Posts" ,category_id:13 }}><Fade  top big><GiMechanicGarage className ="workerIcon" /></Fade ></Link>
            </div>

        </div>
    )
}

export default index
