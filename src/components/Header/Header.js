import React from 'react'
import {Container} from "react-bootstrap"
import Navbar from  "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import {Link} from "react-router-dom"
import NavLink from "react-bootstrap/NavLink"
import { useState,useEffect } from 'react'
import {useNavigate} from "react-router-dom"

const Header = () => {
  const [userName,setUserName]=useState()
  const navigate=useNavigate()
  const data=localStorage.getItem('userInfo')
  useEffect(()=>{
    if(data){
      const loginuserdata=(JSON.parse(data))
      setUserName(loginuserdata.data.name)
      console.log(userName)
    }
  },[data])
  function removeLocalStorage(){
       localStorage.removeItem('userInfo')
       navigate("/")
       window.location.reload()
  }
  return (
    <Container className="topContainer">
      <Navbar bg="light" className="navbarContainer" expand="lg">
      <Container>
         <Link to="/" style={{textDecoration:"none"}}>
        <Navbar.Brand>NotesDB</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/mynotes" style={{textDecoration:"none"}}><Nav.Item className="defaulterIteminNavbar">My Notes</Nav.Item></Link>
            <NavDropdown title={userName?userName:"Profile"} id="basic-nav-dropdown">
              <NavDropdown.Item ><Link to="/myprofile" style={{textDecoration:"none",color:"gray"}}>My profile</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              {/* <Link to={userName?"/":"/login"}  style={{textDecoration:"none",color:"gray"}}> */}
                {userName?<div onClick={removeLocalStorage}
                >LogOut</div>:"Sign In"}
                {/* </Link> */}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* <hr className='specialhrfornavbarbottom'/> */}
    </Container>
  )
}

export default Header
