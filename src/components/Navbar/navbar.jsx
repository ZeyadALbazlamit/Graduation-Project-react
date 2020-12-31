import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import LoginForm from '../Login/Login'
import Register from "../register/register";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPost from "../AddPost/AddPost";
import $ from "jquery"
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa'
import { BsHeartFill } from 'react-icons/bs'
import { ImMobile2 } from "react-icons/im";
import { FaHome, FaLaptop, FaBabyCarriage } from "react-icons/fa";
import { GiCookingPot, GiSofa, GiBookshelf, GiMechanicGarage } from "react-icons/gi";
import { GiAmpleDress } from "@react-icons/all-files/gi/GiAmpleDress";
import { GiCat } from "@react-icons/all-files/gi/GiCat";
import { RiShirtFill } from "react-icons/ri";
import { IoGameController } from "@react-icons/all-files/io5/IoGameController";
import { IoCarSportSharp } from "@react-icons/all-files/io5/IoCarSportSharp";
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  SearchBox,
  SearchInput,
  SearchIcon,
  SearchIconMenu,
  ItemLable,
  SearchNav,
  SearchNavBox,
  SearchNavIcon,
  SearchNavInput,

} from './NavbarElement'

const Navbar = (Props) => {

  function a() {
    $(".sidebar__navbar").toggleClass("active");
  }
  function b() {
    $(".sidebar__navbar").toggleClass("active");
  }
  const [text, setText] = useState("");
  const [hasAcount, setHasAcount] = useState(true);

  function handleLogOut() {
    localStorage['user_id'] = 0;
    localStorage['user_img'] = "https://thumbs.dreamstime.com/z/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144849704.jpg";
    console.log(localStorage.getItem("user_id"))
    //console.log(localStorage.getItem("user_img"))

    Props.setIsLoged(false);
  }
  return (
    <>
      <div class="navabar__grub">
        <div class="sidebar__navbar active">
          <span onClick={b}></span>
          <div class="px-3 py-4 position-relative">
            <ul class="sidebar__list--menu mt-5">
              <li><Link to={{ pathname: "", categ6ory: "" }} class="active">سيارات - مركبات <IoCarSportSharp /></Link></li>
              <li><Link to={{ pathname: "", category: "" }}>موبايل - تابليت <ImMobile2 /></Link></li>
              <li><Link to={{ pathname: "", category: "" }}>العاب فيديو وملحقاتها<IoGameController /> </Link></li>
              <li><Link to={{ pathname: "", category: "" }}>اجهزة - الكترونيات <FaLaptop /></Link></li>
              <li><Link to={{ pathname: "", category: "" }}>عقارات للبيع <FaHome /> </Link></li>
              <li><Link to={{ pathname: "", category: "" }}>عقارات للايجار <FaHome /></Link></li>
              <li><Link to={{ pathname: "", category: "" }}>المنزل والحديقة <GiSofa /></Link></li>
              <li><Link to={{ pathname: "", category: "" }}>ازياء - موضة نسائية <GiAmpleDress /></Link></li>
              <li><Link to={{ pathname: "", category: "" }}>ازياء - موضة رجالي <RiShirtFill /></Link></li>
              <li><Link to={{ pathname: "", category: "" }}>لوازم الاطفال والالعاب <FaBabyCarriage /></Link></li>
              <li><Link to={{ pathname: "", category: "" }}>طعام - غذاء <GiCookingPot /></Link></li>
              <li><Link to={{ pathname: "", category: "" }}>التعليم والتدريب <GiBookshelf /></Link></li>
              <li><Link to={{ pathname: "", category: "" }}>حيوانات للبيع <GiCat /></Link></li>
              <li><Link to={{ pathname: "", category: "" }}>الخدمات <GiMechanicGarage /></Link></li>
            </ul>
          </div>
        </div>
        <div class="sidebar__content">
          <nav class="navbar navbar-expand-md sidebar__side p-3 ">
            <a class="navabar__menu position-relative d-inline-block" href="#" onClick={a}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </a>
            <Nav>
              <NavbarContainer >
                <NavMenu>
                  <NavItem>
                    {Props.isLoged ?
                      <Link to={{ pathname: "/Profile", user_id: localStorage.getItem("user_id") }}>
                        <img src={Props.isLoged ? localStorage.getItem("user_img") : localStorage.getItem("user_img")} style={{ width: "50px", height: "50px", borderRadius: '50%' }} />
                      </Link>
                      :
                      <img src={Props.isLoged ? localStorage.getItem("user_img") : localStorage.getItem("user_img")} style={{ width: "50px", height: "50px", borderRadius: '50%' }} />
                    }

                  </NavItem>
                  <NavItem>
                    <div class="nav-item dropdown">

                      <a href="#" data-toggle="dropdown" class="nav-link toggle "><FaUser /></a>
                      <div class="dropdown-menu action-form">
                        {Props.isLoged ?
                          <li><a class="dropdown-item" onClick={handleLogOut}>Log Out</a></li>
                          :
                          hasAcount ?
                            <LoginForm setIsLoged={Props.setIsLoged} setHasAcount={setHasAcount} />
                            :
                            <Register setIsLoged={Props.setIsLoged} setHasAcount={setHasAcount} />
                        }
                      </div>
                    </div>
                  </NavItem>

                  <NavItem>
                    {Props.isLoged ? <AddPost /> : ""}
                  </NavItem>
                </NavMenu>
                <SearchBox>
                  <SearchInput className="Input" placeholder="إبحـث" text-align="right" onChange={(e) => { setText(e.target.value) }}></SearchInput>
                  <Link to={{ pathname: "/Posts", type: "text", text: text }} ><SearchIcon><FaSearch /></SearchIcon> </Link>
                </SearchBox>
                <NavLogo to='/index'>Nova </NavLogo>
              </NavbarContainer>
            </Nav>
          </nav>
          <div className="nav2">
            <ul className="navUl">
              <Fade left big> <Link to={{ pathname: "/Posts", type: "product", isLoged: Props.isLoged }}><li>سلع</li></Link ></Fade>
              <Fade bottom big > <Link to={{ pathname: "/Posts", type: "service", isLoged: Props.isLoged }}><li>خدمات</li></Link></Fade>
              <Fade top big><Link to={{ pathname: "/", type: "company", isLoged: Props.isLoged }}> <li>شركات</li></Link></Fade>
              {Props.isLoged ? <Fade right big>  <Link to={{ pathname: "/Posts", type: "Recommended", isLoged: Props.isLoged }}> <li>تصفح</li> </Link></Fade> : " "}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}


export default Navbar
