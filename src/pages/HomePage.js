import React from 'react'
import { Container,
  Button  
} from 'react-bootstrap'
import {Link} from "react-router-dom"
import {useState,useEffect} from "react"

const HomePage = () => {
  const [user,setUser]=useState()
  const data=localStorage.getItem('userInfo')
  useEffect(()=>{
    if(data){
    const loginuserdata=(JSON.parse(data))
    setUser(loginuserdata.data.email)
    }
  },[data])
  return (
        <Container>
    <div className='HomePageContainer'>
             <h1>Welcome to The Notes DataBase.</h1>
             <p>personalized and organized way of keeping the Notes</p>
             <div className="HomePage_Button_container">
                  <Link to={user?"/":"/login"}>               
                   <Button className="m-2" variant="outline-secondary" disabled={user?true:false}>Login</Button>
                   </Link>
                  <Link to={user?"/":"/signup"}> 
                   <Button className="m-2" variant="dark" disabled={user?true:false} >Sign Up</Button>
                   </Link> 
             </div>
    </div>
        </Container>
  )
}

export default HomePage