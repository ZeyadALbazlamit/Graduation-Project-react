import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    width:100%;
    justify-content: center;
    margin-top:-20px;
    background-color:rgba(255,255,255,0);
    @media screen and (max-width : 960px) {
        transition : 0.8s all ease;
    }
    @media screen and (max-width : 700px) {
        margin-top : -10px;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right:5px;
    height: 0px ;
    z-index : 1;
    width: 100%;
    padding : 10px;
    max-width: 1250px;
    margin-top:-5px;
    @media screen and (max-width : 700px){
        height: 0px ;
    }
`

export const NavLogo = styled(Link)`
    color:#ff9642;
    cursor : pointer;
    font-size: 3rem;
    align-items: center;
    margin-left : 30px;
    font-weight : bold;
    margin-top:-20px;
    font-family:normal;
    &:hover{
        text-decoration: none;
        color: #fff;
    }
    @media screen and (max-width : 960px) {
        font-size:2.7rem;
        
    }
    @media screen and (max-width : 768px) {
        font-size:2.4rem;
        margin-top:-35px;
    }
    @media screen and (max-width : 700px) {
        font-size:2.2rem;
        margin-top:-40px;
    }
    
`



export const NavMenu = styled.ul`
    display: flex;
    align-items:center;
    list-style : none;
    text-align :center;
    font-family:normal;
    @media screen and (max-width : 768px) {
        margin-top:-35px;
    }
    @media screen and (max-width : 700px) {
        margin-left:5px; 
        margin-top:-35px;
    }
`

export const NavItem = styled.li`
    height: 80px;
    margin-top:30px;
    color : #ff9642;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding:0 1rem;
    height: 100%;
    cursor : pointer;
    font-size: 1.5rem;
    &.active{
        border-bottom: 3px solid #fff;
    }
    &:hover{
        color:#fff;
    }
    @media screen and (max-width : 700px) {
        font-size:1.4rem;
    }
   @media screen and (max-width : 700px) {
        
        margin-top:30px;
    }
`


export const SearchBox = styled.form`
    display: flex;
    align-items:center;
    text-align :center;
    height: 100%;
    font-style:normal;
    margin-top:14px;
   
    @media screen and (max-width : 960px) {
        margin-left: 20px;
    }
    @media screen and (max-width : 1010px){
        display: none;
    }
`

export const SearchInput = styled.input`
    width:450px;
    height:33px;
    display:flex;
    align-items: center;
    border-width:1.8px 1.8px;
    border-color :#ff9642 ;
    border-right:unset;
    padding-right:10px;
    font-size:1rem;
    text-align: right;
    &:focus{
        border-color:#ff9642;
    }
    @media screen and (max-width : 1000px) {
        width:300px;
    }
`
export const SearchIcon = styled.div`
    
    /* color: #ff9642;*/
    background: linear-gradient(40deg, #ffd86f, #fc6262) !important;
    border-color :#ff9642 ;
    border-style:solid;
    border-left:unset;
    border-width:1.5px 1.5px;
    border-top-right-radius:3px;
    border-bottom-right-radius:3px;
    width:60px;
    height:33px;
    padding-top:5px;
    top: 0;
    font-size : 1rem;
    cursor: pointer;
    background-color:rgb(230, 232, 235); 
`


