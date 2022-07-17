import React from 'react'
import Form from "react-bootstrap/Form"
import { Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
import { useState,useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'



const LoginPage = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [userEmail,setUserEmail]=useState()

    
    const navigate=useNavigate()
    const data=localStorage.getItem('userInfo')
    useEffect(()=>{
      if(data){
      const loginuserdata=(JSON.parse(data))
      setUserEmail(loginuserdata.data.email)
      console.log(userEmail)

      document.querySelector('.useremail').value=userEmail?userEmail:""
      }
    },[data])
    const submitHandler=async (e)=>{
      e.preventDefault()

      try{
          const data=await axios.post("http://localhost:5000/api/user/login",{
            email:email,
            password:password
          })    
          if(data){
            localStorage.setItem('userInfo',JSON.stringify(data))
            console.log(data)
            alert("you are successfully logged in")
            navigate("/mynotes")
            window.location.reload() 
          }
      }catch(err){
           console.log(err)
      }
    }
  return (
    <div className='logincontainer'>
       <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="useremail" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <div className='buttonlogincontainer'>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <small style={{marginTop:"0.5rem"}}>Don't Have an Account yet?<Link to="/signup">Sign Up Here</Link></small>
      </div>

      </Form>
    </div>
  )
}

export default LoginPage