import React from 'react'
import "./Navbar.css"
import LoginForm from '../Login/login'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery"
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa'
import { BsHeartFill } from 'react-icons/bs'
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

const Navbar = () => {

    function a () {
      $(".sidebar__navbar").toggleClass("active");
    }
    function b () {
      $(".sidebar__navbar").toggleClass("active");
    }

    return (
        <>
          <div class="navabar__grub">
            <div class="sidebar__navbar active">
              <span onClick={b}></span>
              <div class="px-3 py-4 position-relative">
                <ul class="sidebar__list--menu mt-5">
                  <li><a href="#!" class="active">سيارات - مركبات</a></li>
                  <li><a href="#!">موبايل - تابليت</a></li>
                  <li><a href="#!">العاب فيديو وملحقاتها</a></li>
                  <li><a href="#!">اجهزة - الكترونيات</a></li>
                  <li><a href="#!">عقارات للبيع</a></li>
                  <li><a href="#!">عقارات للايجار</a></li>
                  <li><a href="#!">المنزل والحديقة</a></li>
                  <li><a href="#!">ازياء - موضة نسائية</a></li>
                  <li><a href="#!">ازياء - موضة رجالي </a></li>
                  <li><a href="#!">لوازم الاطفال والالعاب </a></li>
                  <li><a href="#!">طعام - غذاء</a></li>
                  <li><a href="#!">التعليم والتدريب </a></li>
                  <li><a href="#!">الخدمات</a></li>
                  <li><a href="#!">حيوانات للبيع</a></li>
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
                      <NavItem><NavLinks to='about'> <BsHeartFill /></NavLinks> </NavItem>
                      <NavItem><NavLinks to='about'><FaShoppingCart /></NavLinks></NavItem>
                      <NavItem><NavLinks  > <LoginForm /> </NavLinks></NavItem>
                    </NavMenu>
                    <SearchBox>
                      <SearchInput className="Input" placeholder="إبحـث" text-align="right"></SearchInput>
                        <SearchIcon><FaSearch /></SearchIcon>
                      </SearchBox>
                      <NavLogo to='/index'>logo </NavLogo>
                  </NavbarContainer>
                </Nav>
              </nav>   
            </div>
          </div>    
        </>
    )
}


export default Navbar
