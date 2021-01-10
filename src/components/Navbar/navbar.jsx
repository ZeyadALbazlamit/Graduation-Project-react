import React, { useState } from 'react'
import "./Navbar.css"
import LoginForm from '../Login/Login'
import Register from "../register/register";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPost from "../AddPost/AddPost";
import $ from "jquery"
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa'
//import { BsHeartFill } from 'react-icons/bs'
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
import { useHistory } from 'react-router-dom';
import NotLoged from '../AddPost/notLoged'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  SearchBox,
  SearchInput,
  SearchIcon

} from './NavbarElement'

const Navbar = (Props) => {
  const history = useHistory();
  function handleClick(path) {

    history.push(path);
  }
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
    localStorage['user_type'] = " ";
    console.log(localStorage.getItem("user_id"))
    Props.setType(" ")
    //console.log(localStorage.getItem("user_img"))

    Props.setIsLoged(false);
    handleClick('/index')

  }
  return (
    <>
      <div class="navabar__grub">
        <div class="sidebar__navbar active">
          <span onClick={b}></span>
          <div class="px-3 py-4 position-relative">
            <ul class="sidebar__list--menu mt-5">
              <li><Link to={{ pathname: "/Posts", category_id: 1 ,isLoged:Props.isLoged }} class="active">سيارات - مركبات <IoCarSportSharp /></Link></li>
              <li><Link to={{ pathname: "/Posts", category_id: 2 ,isLoged:Props.isLoged }}>موبايل - تابليت <ImMobile2 /></Link></li>
              <li><Link to={{ pathname: "/Posts", category_id: 3 ,isLoged:Props.isLoged }}>العاب فيديو وملحقاتها<IoGameController /> </Link></li>
              <li><Link to={{ pathname: "/Posts", category_id: 4 ,isLoged:Props.isLoged }}>اجهزة - الكترونيات <FaLaptop /></Link></li>
              <li><Link to={{ pathname: "/Posts", category_id: 5 ,isLoged:Props.isLoged }}>عقارات للبيع <FaHome /> </Link></li>
              <li><Link to={{ pathname: "/Posts", category_id: 6 ,isLoged:Props.isLoged }}>عقارات للايجار <FaHome /></Link></li>
              <li><Link to={{ pathname: "/Posts", category_id: 7 ,isLoged:Props.isLoged }}>المنزل والحديقة <GiSofa /></Link></li>
              <li><Link to={{ pathname: "/Posts", category_id: 8 ,isLoged:Props.isLoged }}>ازياء - موضة نسائية <GiAmpleDress /></Link></li>
              <li><Link to={{ pathname: "/Posts", category_id: 9 ,isLoged:Props.isLoged }}>ازياء - موضة رجالي <RiShirtFill /></Link></li>
              <li><Link to={{ pathname: "/Posts", category_id: 10 ,isLoged:Props.isLoged }}>لوازم الاطفال والالعاب <FaBabyCarriage /></Link></li>
              <li><Link to={{ pathname: "/Posts", category_id: 11 ,isLoged:Props.isLoged }}>طعام - غذاء <GiCookingPot /></Link></li>
              <li><Link to={{ pathname: "/Posts", category_id: 12 ,isLoged:Props.isLoged }}>التعليم والتدريب <GiBookshelf /></Link></li>
              <li><Link to={{ pathname: "/Posts", category_id: 14 ,isLoged:Props.isLoged }}>حيوانات للبيع <GiCat /></Link></li>
              <li><Link to={{ pathname: "/Posts", category_id: 13 ,isLoged:Props.isLoged }}>الخدمات <GiMechanicGarage /></Link></li>
            </ul>
          </div>
        </div>
        <div class="sidebar__content">
          <nav class="navbar navbar-expand-md sidebar__side p-3 ">
            <a class="navabar__menu position-relative d-inline-block" onClick={a}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </a>
            <Nav>
              <NavbarContainer >
                <NavMenu>

                  {Props.userType === "user" ? <NavItem><Link to="/Cart"> <FaShoppingCart /></Link> </NavItem> : " "}

                  <NavItem>
                    {Props.isLoged ? <AddPost /> : <NotLoged />}
                  </NavItem>
                  <NavItem>
                    <div class="nav-item dropdown">

                      <a data-toggle="dropdown" class="nav-link toggle " className="navLink"><FaUser /></a>
                      <div class="dropdown-menu action-form" style={{ justifyContent: "center", marginLeft: '30px' }}>
                        {Props.isLoged ?
                          <Link to={{ pathname: "/Profile", isLoged:Props.isLoged,id: localStorage.getItem("user_id") }} >
                            <img src={Props.isLoged ? localStorage.getItem("user_img") : localStorage.getItem("user_img")} alt="" style={{ width: "60px", height: "60px", borderRadius: '50%', marginLeft: "88px", }} />
                            <li style={{ color: "orange", fontSize: "15px", marginTop: "5px", textAlign: "center" }} >{localStorage.getItem("user_name")}</li>
                          </Link>
                          : ""
                        }
                        <div class="dropdown-divider"></div>
                        <li><a class="dropdown-item " style={{
                          width: '100%', textAlign: "center", color: "orange"
                        }} onClick={handleLogOut}>تسجيل خروج</a></li>
                        <li><a class="dropdown-item"> <LoginForm setIsLoged={Props.setIsLoged} setHasAcount={setHasAcount} userType={Props.userType} setType={Props.setType} /></a></li>
                        <li><a class="dropdown-item">  <Register setIsLoged={Props.setIsLoged} setHasAcount={setHasAcount} userType={Props.userType} setType={Props.setType} /></a></li>

                      </div>
                    </div>
                  </NavItem>


                </NavMenu>
                <SearchBox>
                  <SearchInput className="Input" placeholder="إبحـث" text-align="right" onChange={(e) => { setText(e.target.value) }}></SearchInput>
                  <SearchIcon><Link className="navLink" to={{ pathname: "/Posts", type: "text", text: "%" + text + "%", isLoged:Props.isLoged }} ><FaSearch /></Link></SearchIcon>
                </SearchBox>
                <NavLogo to={{pathname:'/index',isLoged:Props.isLoged}}>Nova </NavLogo>
              </NavbarContainer>
            </Nav>
          </nav>
          <div className="nav2">
            <ul className="navUl">
              <Fade left big> <Link className="navLink" to={{ pathname: "/Posts", type: "product", isLoged: Props.isLoged }}><li>سلع</li></Link ></Fade>
              <Fade bottom big > <Link className="navLink" to={{ pathname: "/Posts", type: "service", isLoged: Props.isLoged }}><li>خدمات</li></Link></Fade>
              <Fade top big><Link className="navLink" to={{ pathname: "/Companies", type: "company", isLoged: Props.isLoged }}> <li>اسواق</li></Link></Fade>
              {Props.isLoged ? <Fade right big>  <Link className="navLink" to={{ pathname: "/Posts", type: "Recommended", isLoged: Props.isLoged }}> <li> مقترحات</li> </Link></Fade> : " "}
              {Props.userType === "company" ? <Fade top big><Link className="navLink" to={{ pathname: "/Order", type: "company", isLoged: Props.isLoged }}> <li>طلبات</li></Link></Fade> : " "}
              <Fade left big> <Link className="navLink" to={{pathname:"/Users",isLoged: Props.isLoged }}><li>الأشخاص</li></Link ></Fade>
              <Fade left big> <Link className="navLink" to={{pathname:"/Dashboard",isLoged: Props.isLoged }}><li>احصائيات</li></Link ></Fade>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}


export default Navbar
